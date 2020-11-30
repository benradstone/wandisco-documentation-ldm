---
id: operation-cli
title: Using LiveData Migrator with the CLI
sidebar_label: Before you start
---

You can use the LiveData Migrator command line interface (CLI) to create and manage resources that control your migrations in LiveData Migrator.

## Log in

Log in to the LiveData Migrator CLI using the following command:

```bash
livedata-migrator --host=localhost
```

The command prompt will then load and automatically connect to the LiveData Migrator services located on your host.

## Command line help

Find a full list of commands that can be used at the action prompt with the `help` command. Get command specific help by typing `help <command>` for each command available.

Type the `<tab>` key if you are uncertain whether a command requires an additional parameter, or if you need to provide a specific value. It will help auto-complete parameter values, and display options available for any command.

## Built-in commands

The built-in commands are always available in a LiveData Migrator command line interactive session. They are unrelated to migration resources and operation (other than `exit`/`quit`), but help you to interact with LiveData Migrator and automate processing through scripts for the action prompt.

See the [Built-In Commands](./command-reference.md#built-in-commands) section in Command Reference for further details of the available commands.
