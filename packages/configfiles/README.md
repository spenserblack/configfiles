# configfiles

## Install CLI

```bash
npm install --global @spenserblack/configfiles
# or
yarn global add @spenserblack/configfiles
```

## Usage

### CLI

Run `configfiles` and follow the prompts.

If you select at least one `Default` configuration, then you will be asked if
you want to overwrite files. If you choose to overwrite, then any config file
with a selected `Default` snippet will be overwritten. For example, if you chose
`Default` for npmignore, but not for editorconfig, then the `.npmignore` file
can be overwritten, but the `.editorconfig` will be appended to even if you
chose "overwrite".

### Library

```javascript
const { data } = require("@spenserblack/configfiles");
console.log(data);
```
