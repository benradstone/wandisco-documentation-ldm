---
id: configure-exclusions-ui
title: Configure exclusions with the UI
sidebar_label: Configure exclusions
---

Define exclusion templates to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

Assign exclusion templates to new migration or existing migrations. Adding exclusions to a new migration ensures the outcome is consistent with the chosen exclusions. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB.
:::

## Add new exclusions

1. In the **Storages** list on the dashboard, click the settings cog for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click **Add new exclusion** to associate the exclusion with the selected storage and enter the parameters for the exclusion:
    * **Exclusion type** - _File Size_ or _Regex_.
    * **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
    * **Description** - A brief description of what the exclusion is doing. For example: "_Files larger than 100GB are excluded_").
    * _File Size_ = **Value / Unit** - The value and unit for the file size limit (for example: `100` `GB`).
    * _Regex_ = **Regex** - The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`)

Once the exclusion is added and passed validation, it appears on the exclusion list.

## Remove exclusions from the templates list

1. In the **Storages** list on the dashboard, click the settings cog for the appropriate storage.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusion from an existing migration](#remove-exclusion-from-an-existing-migration) section for guidance on how to do this.
:::

## Assign exclusion templates to a new migration

1. In the new migration page, click **Add new exclusion**
1. Select the appropriate exclusion template from the drop-down list.

The exclusion appears in the list, and can be removed before the migration is started.

## Assign exclusion templates to an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Click **Add** and select the appropriate exclusion template from the drop-down list.

## Remove exclusions from an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Remove any of the exclusions one at a time.
