#!/usr/bin/env node
// Converts the file structure to a manageable JSON format where config types
// map to config names and config names map to file contents.
const { readFile, readdir } = require("fs/promises");
const { resolve } = require("path");

const configFilesPath = resolve(__dirname, "../configfiles");

async function main() {
  const configFolders = await readdir(configFilesPath);
  const configContents = await Promise.all(
    configFolders.map(async (folder) => {
      const configFiles = await readdir(resolve(configFilesPath, folder));
      const configData = await Promise.all(
        configFiles.map(async (file) => {
          const [name] = file.split(".");
          const data = await readFile(
            resolve(configFilesPath, folder, file),
            "utf-8",
          );
          return { name, data };
        }),
      );
      return { folder, configData };
    }),
  );

  const configs = configContents.reduce((configs, { folder, configData }) => {
    const configDataObject = configData.reduce(
      (configDataObject, { name, data }) => ({
        ...configDataObject,
        [name]: data,
      }),
      {},
    );
    return { ...configs, [folder]: configDataObject };
  }, {});

  console.log(JSON.stringify(configs));
}

main();
