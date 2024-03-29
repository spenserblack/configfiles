# [configfiles]

[![npm](https://img.shields.io/npm/v/@spenserblack/configfiles)](https://www.npmjs.com/package/@spenserblack/configfiles)

## :warning: Archive Notice

I originally wrote this because I was constantly copying and pasting things like `.editorconfig`
files, `.gitattributes` files, etc. from one repository to another. However, I've decided that,
instead of creating a collection of file snippets in a single repository and making myself and
other users wait for new releases, it makes much more sense to let users define their own collection
of snippets. So I made [snippit](https://github.com/spenserblack/snippit), which has a much catchier
name, and isn't nearly as overdesigned. For me, personally, I find it much more useful, so I'm
archiving this. Feel free to fork if you stumble on this repo and want to continue its development.
Reach out to me in your fork's issues if necessary.

******

These are project-specific config files that are commonly repeated among repositories

This is kind of like [github/gitignore][github-gitignore], but the
config files are intended to be used as snippets that get added to your project
instead of providing one large config file for your project. It is a good idea to
still use the `.gitignore` files from [github/gitignore][github-gitignore], since
this project won't recreate the work from those files, which are excellent starting
points.

The `Default.*` config files are configurations that can be reasonably placed in
any project. These files may make the assumption that you don't have an existing
config file of the same type already in your project. For example,
[`Default.editorconfig`](/configfiles/editorconfig/Default.editorconfig) has
`root = true`.

## Manual usage example

```bash
curl https://raw.githubusercontent.com/spenserblack/configfiles/main/configfiles/editorconfig/Default.editorconfig > .editorconfig
echo "" >> .editorconfig # Adding a newline
curl https://raw.githubusercontent.com/spenserblack/configfiles/main/configfiles/editorconfig/Python.editorconfig >> .editorconfig
```

## CLI

```bash
npm install --global @spenserblack/configfiles
# or
yarn global add @spenserblack/configfiles
```

## Licensing

The [config files][configfiles] are licensed under
[`CC0 1.0 Universal`][cc0-license]. The [NPM packages][npm-packages] have their
own licenses specified in their corresponding `packages/<package>/LICENSE` files,
where `<package>` is a folder within the [`packages/`][npm-packages] folder.

[cc0-license]: /LICENSE
[configfiles]: /configfiles
[github-gitignore]: https://github.com/github/gitignore
[npm-packages]: /packages
