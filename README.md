# [configfiles]

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

## Licensing

The [config files][configfiles] are licensed under
[`CC0 1.0 Universal`][cc0-license]. The [NPM packages][npm-packages] have their
own licenses specified in their corresponding `packages/<package>/LICENSE` files,
where `<package>` is a folder within the [`packages/`][npm-packages] folder.

[cc0-license]: /LICENSE
[configfiles]: /configfiles
[github-gitignore]: https://github.com/github/gitignore
[npm-packages]: /packages
