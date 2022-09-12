const { writeFile, appendFile } = require("fs/promises");
const { join } = require("path");
const prompts = require("prompts");
const data = require("./configfiles.json");

async function main() {
  const { formats } = await prompts({
    type: "multiselect",
    name: "formats",
    message: "Select the config format(s) you want to use",
    choices: Object.keys(data).map((key) => ({
      title: key,
      value: key,
    })),
  });

  const configFilePrompts = formats.map((format) => {
    const configFiles = data[format];
    const choices = Object.keys(configFiles)
      .sort((a) => (a === "Default" ? -1 : 0))
      .map((key) => {
        const isDefault = key === "Default";
        const rawValue = configFiles[key];
        const [firstLine, ...rest] = rawValue.split("\n");
        const description = firstLine.match(/DESCRIPTION (.*)/)?.[1];
        let title;
        let contents;
        if (description == null) {
          title = key;
          contents = rawValue;
        } else {
          title = `${key} - ${description}`;
          contents = rest.join("\n");
        }
        return { title, value: { contents, isDefault } };
      });
    return {
      type: "multiselect",
      name: format,
      message: `Select the ${format} config file(s) you want to use`,
      choices,
    };
  });

  const selectedConfigs = await prompts(configFilePrompts);

  const configs = Object.entries(selectedConfigs).reduce(
    (configs, [formatName, attrs]) => {
      const isDefault = attrs.some((attr) => attr.isDefault);
      const contents = attrs.map(({ contents }) => contents).join("\n");
      return { ...configs, [formatName]: { isDefault, contents } };
    },
    {},
  );

  const hasDefaults = Object.values(selectedConfigs).some((config) =>
    config.some(({ isDefault }) => isDefault),
  );

  const overwriteFiles =
    hasDefaults &&
    (
      await prompts({
        type: "toggle",
        name: "overwrite",
        initial: false,
        message:
          "You have selected one or more defaults. Overwrite existing files with available defaults?",
        active: "Overwrite",
        inactive: "Append",
      })
    ).overwrite;

  const fileWrites = Object.entries(configs).map(
    async ([format, { contents, isDefault }]) => {
      const filename = join(".", `.${format}`);
      const overwrite = isDefault && overwriteFiles;
      const writeFn = overwrite ? writeFile : appendFile;

      await writeFn(filename, contents);
      console.log(`Wrote ${filename}`);
    },
  );

  await Promise.all(fileWrites);
}

module.exports = { data, main };
