---
id: migrate-data-cli
title: Migrate data with the CLI
sidebar_label: Migrate data
---

You can use the CLI to migrate data and metadata with LiveData Migrator. This article explains how to create data migrations. See [migrate metadata](./migrate-metadata.md) for instructions about migrating metadata.

Migrate data from your source file system to a target defined using the `migration` command. Migrations will transfer existing data, as well as any subsequent changes made to the source data (in its scope), while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your source file system by path/directory. It is also possible to migrate to multiple independent file systems at the same time by defining multiple migration resources.

## Create data migrations

Follow the command links to learn how to set the parameters and see examples.

1. Create a new migration:

   [`migration new`](./command-reference.md#migration-new)

   Apply the [`--auto-start`](./command-reference.md#optional-parameters-4) parameter if you would like the migration to start right away.

1. If you don't have auto-start enabled, manually start the migration:

   [`migration run`](./command-reference.md#migration-run)
