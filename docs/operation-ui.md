---
id: operation-ui
title: Using LiveData Migrator: UI
sidebar_label: UI
---

The UI can manage multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive to use and contains on-screen instructions to help you perform migrations and configuration tasks successfully.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Before you start

The UI is available on port 8081 on the host with your LiveData Migrator installation. For example, if you were running LiveData Migrator locally, the port would be:

http://127.0.0.1:8081

### Register

You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

## How the UI works

The UI has four main panels and a Notification system.

### License information

Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license.

### Bandwidth usage

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

### Storage

The Storage panel shows the underlying storage used by LiveData Migrator as either a Source or Target. LiveData Migrator supports one Source and one or more Targets. Each Storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:
* View and configure the Source and Target Storages
* Add further Targets
* Add additional LiveData Migrators and LiveData Plane

For more information about Sources and Targets, see the [introduction to LiveData Migrator](./about.md).

### Rules and Migrations

The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show Rules.

Use the Rules and Migrations panel to:
* Add further Migrations or Rules
* View more detail about existing Rules and Migrations

### Notifications

The bell icon in the top-right of the UI is where you'll receive Notifications about errors, warnings, or important milestones in your usage.

## Migrate data

### Configure Storage

* Configure your Storages to define at least one Source and at least one Target to migrate data. LiveData Migrator will connect to these Storages for migration.
    * Supported Sources are: **HDFS**
    * Supported Targets are: **ADSL Gen2** and **S3**
* Configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.
* Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective Storages.

### Create Migrations

Migrations transfer existing data, and any subsequent changes made to data in their scope, automatically maintaining the data in the target to be as current as possible with any changes to the source while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your Source Storage by Path. You can also migrate to multiple independent Storages at the same time by defining multiple migration resources.

To create a migration:

1. Choose a Source and Target from previously defined [Storages](##ConfiguringStorage).
2. Choose the Path to set the scope of the migration.
3. [Apply any Exclusions](###Assignexclusiontemplatestoanewmigration) to reduce the scope within this Path.

Migrations can be automatically started when they're created, or started at a later point when [viewing migration details](##ViewingMigrations).

### View Migrations

The Dashboard displays an overview of Migrations and their status, showing what pre-existing data has been moved and data added since the Migration started.

Click into the migrations to see more detail.

:::note
A migration must be stopped before it can be deleted.
:::

## Add and remove Exclusions

Define exclusion templates to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage, allowing you to selectively ignore content during migration when that storage is used as the source.

Exclusion templates are assigned to a new migration or an existing migration. Adding exclusions to a new migration ensures the outcome is consistent with those chosen exclusions. Modifying exclusions on an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB.
:::

### Add new exclusion

1. In the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Click **Add new exclusion** to associate the exclusion with this storage and enter the parameters for the exclusion:
    * **Exclusion type** - _File Size_ or _Regex_.
    * **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
    * **Description** - A brief description of what the exclusion is doing (for example: "_Files larger than 100GB are excluded_").
    * _File Size_ = **Value / Unit**
    * The value and unit for the file size limit (for example: `100` `GB`).
    * _Regex_ = **Regex**
    * The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`)

Once the exclusion is added and passed validation, it appears on the exclusion list.

### Remove exclusions from the templates list

1. In the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page.
1. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.
1. Remove the exclusion by clicking the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusion from an existing migration](#remove-exclusion-from-an-existing-migration) section for guidance on how to do this.
:::

### Assign exclusion templates to a new migration

1. In the new migration page, **Add new exclusion**
1. Select the desired template from the drop-down list.

The exclusion appears on the exclusion list, and can be removed before the migration is started.

### Assign exclusion templates to an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Click **Add** and select the desired template from the drop-down list.

### Remove exclusion from an existing migration

1. In the dashboard, select an ongoing migration to view its **Exclusions**.
1. Remove any of the exclusions one at a time.
