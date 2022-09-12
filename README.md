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
`root = true`. For example, to set up an `.editorconfig` file for Python, you
might do this:

```bash
curl https://raw.githubusercontent.com/spenserblack/configfiles/main/configfiles/editorconfig/Default.editorconfig > .editorconfig
echo "" >> .editorconfig # Adding a newline
curl https://raw.githubusercontent.com/spenserblack/configfiles/main/configfiles/editorconfig/Python.editorconfig >> .editorconfig
```


[configfiles]: /configfiles
[github-gitignore]: https://github.com/github/gitignore
