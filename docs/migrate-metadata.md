---
id: migrate-metadata
title: Migrate metadata
sidebar_label: Migrate metada
---

## Create metadata migrations

Migrate metadata from your source metastore/database to a target metastore/database using the `hive migration` command. Migrations will transfer existing metadata, as well as any subsequent changes made to the source metadata (in its scope), while HiveMigrator remains in operation.

Define the source and target using the [hive agent names](#add-hive-agents), and apply the [hive rule names](#add-hive-rules) to the migration.

Follow the command links to learn how to set the parameters and see examples.

1. Create a new hive migration:

   [`hive migration add`](./command-reference.md#hive-migration-add)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-10) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`hive migration start`](./command-reference.md#hive-migration-start)

## Manage metadata migrations

| Command | Action |
|:---|:---|
| [`hive migration delete`](./command-reference.md#hive-migration-delete) | Delete a hive migration |
| [`hive migration list`](./command-reference.md#hive-migration-list) | List all hive migrations |
| [`hive migration pause`](./command-reference.md#hive-migration-pause) | Pause a hive migration or a list of hive migrations |
| [`hive migration pause --all`](./command-reference.md#hive-migration-pause---all) | Pause all hive migrations |
| [`hive migration resume`](./command-reference.md#hive-migration-resume) | Resume a hive migration or a list of hive migrations |
| [`hive migration resume --all`](./command-reference.md#hive-migration-resume---all) | Resume all hive migrations |
| [`hive migration show`](./command-reference.md#hive-migration-show) | Display information about a hive migration |
| [`hive migration start`](./command-reference.md#hive-migration-start) | Start a hive migration or a list of hive migrations |
| [`hive migration start --all`](./command-reference.md#hive-migration-start---all) | Start all hive migrations |
| [`hive migration status`](./command-reference.md#hive-migration-status) | Show the status of a hive migration or a list of hive migrations |
| [`hive migration status --all`](./command-reference.md#hive-migration-status---all) | Show the status of all hive migrations |
| [`hive migration stop`](./command-reference.md#hive-migration-stop) | Stop a hive migration or a list of hive migrations |
| [`hive migration stop --all`](./command-reference.md#hive-migration-stop---all) | Stop all hive migrations |
