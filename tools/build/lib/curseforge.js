import Juke from '../juke/index.js';
import fs from 'fs';
import https from 'https';

export const GetModInfo = async (key, modID) => {
  const modData = await fetch(`https://api.curseforge.com/v1/mods/${modID}`, {
    redirect: "follow",
    headers: {
      "X-Api-Key": key,
      Accept: "application/json"
    }
  });

  if (modData.status !== 200) {
    if (modData.status == 403) {
      Juke.logger.error(`Failed to fetch download url at ${modData.url}: Bad CF Token`);
    } else {
      Juke.logger.error(`Failed to fetch download url at ${modData.url}: ${modData.status}`);
    }
    throw new Juke.ExitCode(1);
  }
  return (await modData.json()).data;
}

export const DownloadCF = async (key, modInfo = {}, dest) => {
  const { modID, modFileID } = modInfo;
  if (!modID || !modFileID) {
    Juke.logger.error(`Bad DownloadCF modInfo args. modID: ${modID} | modFileID: ${modFileID}`);
    throw new Juke.ExitCode(1);
  }
  const headers = {
    "X-Api-Key": key
  }

  const modData = await fetch(`https://api.curseforge.com/v1/mods/${modID}/files/${modFileID}`, {
    redirect: "follow",
    headers: {...headers, Accept: "application/json"}
  });

  if (modData.status !== 200) {
    if (modData.status == 403) {
      Juke.logger.error(`Failed to fetch download url at ${modData.url}: Bad CF Token`);
    } else {
      Juke.logger.error(`Failed to fetch download url at ${modData.url}: ${modData.status}`);
    }
    throw new Juke.ExitCode(1);
  }
  const modDataJson = (await modData.json()).data;
  dest = `${dest}${modDataJson.fileName}`
  // TODO hash chk
  // let's see if the file exists
  if (fs.existsSync(dest) && fs.statSync(dest).size === modDataJson.fileLength) {
    Juke.logger.info(`Skipped ${modDataJson.fileName}`)
    return;
  }

  Juke.logger.info(`Downloading: ${modDataJson.fileName}`)
  await download_file(modDataJson.downloadUrl, { headers: headers }, dest);
  if (!fs.existsSync(dest) || fs.statSync(dest).size !== modDataJson.fileLength) {
    Juke.logger.warn(`Download failed ${modDataJson.fileName}`)
  }
};

export const UploadCF = async (key, options = {}) => {
  const {
    mcVersion,
    file,
    displayName,
    projectID,
    releaseType = "release",
    parentFileID,
    changelog = ""
  } = options;
  if (!mcVersion || !file || !displayName || !projectID) {
    Juke.logger.error(`UploadCF missing values in options.`);
    throw new Juke.ExitCode(1);
  }
  const headers = {
    "X-Api-Key": key,
    Accept: "application/json"
  }

  let gameVersions = undefined;
  // dont bother fetching if parentFileID exists, gameVersions gets ignored anyways
  if (parentFileID) {
    const gameVerApi = await fetch(`https://minecraft.curseforge.com/api/projects/${projectID}/upload-file`, {
      headers,
      redirect: "follow",
    });
    if (gameVerApi.status !== 200) {
      if (gameVerApi.status == 403) {
        Juke.logger.error(`Failed to fetch gameVerApi at ${gameVerApi.url}: Bad CF Token`);
      } else {
        Juke.logger.error(`Failed to fetch gameVerApi at ${gameVerApi.url}: ${gameVerApi.status}`);
      }
      throw new Juke.ExitCode(1);
    }

    gameVersions = [(await gameVerApi.json()).find(m => m.name == mcVersion)];
  }

  const uploadResponse = await fetch(`https://minecraft.curseforge.com/api/projects/${projectID}/upload-file`, {
    method: 'post',
    headers: {
      ...headers,
      "Content-Type": "multipart/form-data",
    },
    redirect: "follow",
    formData: {
      metadata: JSON.stringify({
					changelog,
					changelogType: ["markdown"],
          releaseType,
          parentFileID,
          gameVersions,
          displayName
      }),
      file: fs.createReadStream(file)
    }
  });

  if (uploadResponse.status !== 200) {
    if (uploadResponse.status == 403) {
      Juke.logger.error(`Failed to upload at ${uploadResponse.url}: Bad CF Token`);
    } else {
      Juke.logger.error(`Failed to upload at ${uploadResponse.url}: ${uploadResponse.status}`);
    }
    throw new Juke.ExitCode(1);
  }

  return (await gameVerApi.json()).id;
}

async function download_file(url, options = {}, file) {
  return new Promise((resolve, reject) => {
    let file_stream = fs.createWriteStream(file);
    https.get(url, options, function(response) {
      if (response.statusCode === 302) {
        file_stream.close();
        download_file(response.headers.location, options, file)
          .then((value) => resolve());
        return;
      }
      if (response.statusCode !== 200) {
        Juke.logger.error(`Failed to download ${url}: Status ${response.statusCode}`);
        file_stream.close();
        reject()
        return
      }
      response.pipe(file_stream);

      // after download completed close filestream
      file_stream.on("finish", () => {
        file_stream.close();
        resolve()
      });

    }).on("error", (err) => {
      file_stream.close();
      Juke.rm(download_into);
      Juke.logger.error(`Failed to download ${url}: ${err.message}`);
      reject()
    });
  });
}
