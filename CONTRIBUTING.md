# Contributing

## Adding a new config file

The easiest way to contribute is to add a new configuration file. These go in the
[`configfiles`](./configfiles) directory. The structure of this directory controls
how the CLI works, so the structure is `configfiles/<category>/<config name>`.

These files can contain a commented line in the first line starting with `DESCRIPTION`,
which will be shown in the CLI prompts.

## Updating packages

This project uses [yarn], so make sure it is installed.
Once you make your changes, make sure that the code is formatted properly
by running `yarn format`.

[yarn]: https://yarnpkg.com/
