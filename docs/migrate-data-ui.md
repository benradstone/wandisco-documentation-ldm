---
id: migrate-data-ui
title: Migrate data with the UI
sidebar_label: Migrate data
---

Migrations transfer existing data from the defined source to a target. LiveData Migrator migrates any changes made to the source data while it is being migrated and ensures that the target is up to date with those changes. It does this while continuing to perform the migration.

You will typically create multiple migrations so that you can select specific content from your source storage by Path. You can also migrate to multiple independent storages at the same time by defining multiple migration resources.

## Create a migration

1. Choose a source and target from previously defined [storages](./configure-storage-ui.md).
1. Choose the Path to set the scope of the migration.
1. Enable the **Auto-start migration** option if you want to start the migration immediately after creation.  
   Migrations can be started at a later point when [viewing migration details](./manage-migrations-ui.md).
1. [Apply any exclusions](#assign-exclusions-to-a-new-migration) to reduce the scope within this Path.
1. Select the **Overwrite** or **Skip if Size Match** setting for the migration.  
   * **Skip if Size Match** - If the file size is identical between the source and target, the file is skipped. If it’s a different size, the whole file is replaced.
   * **Overwrite** - Everything is replaced, even if the file size is identical.

If you've already migrated some data from the same source to the same target, you can choose whether to overwrite all the content (Overwrite) or only migrate new content that isn't already there (Skip if Size Match).

## Assign exclusions to a new migration

Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions.

1. In the new migration page, click **Add new exclusion**
1. Select the appropriate exclusion template from the drop-down list.

The exclusion appears in the list, and can be removed before the migration is started.
