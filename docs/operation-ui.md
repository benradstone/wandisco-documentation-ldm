---
id: operation-ui
title: Using LiveData Migrator through the User Interface
sidebar_label: UI
---

You can use either the UI or the CLI to use LiveData Migrator. This page tells you how to use the UI to interact with LiveData Migrator to create and manage resources that control your migrations.

The UI is designed to be capable of managing multiple LiveData Migrators as well as LiveData Plane from one convenient interface. It is designed to be intuitive to use, and most often you should be able to use LiveData Migrator by following the instructions on-screen.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md) before learning [how to install](./installation.md) and use LiveData Migrator.

## Access the UI

The User Interface is available on port 8081 by default on the host you have installed LiveData Migrator. For example, if you were running it locally, the port would be:

http://127.0.0.1:8081

## Register

You'll be asked to register a LiveData Migrator account the first time you use the UI. Fill in the registration form to create your user account.

Internet access from the host is not required, but when it is available, you'll be sent confirmation of your registration. We'll use your registration information to send you important information about your LiveData Migrator account, such as a reminder before your license expires. You can also opt in to receive additional product updates.

## Using the UI

The UI has four main panels and a Notification system.

### License information

Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license.

### Bandwidth usage

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

### Storage

The Storage panel shows the underlying storage used by LiveData Migrator as either a Source or Target. LiveData Migrator supports one Source and one or more Targets. Each Storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:
* View and configure the Source and Target Storages
* Adding further Targets
* Adding additional LiveData Migrators and LiveData Plane

For more information about Sources and Targets, see the [introduction to LiveData Migrator](./about.md).

### Rules and Migrations

The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. Where the UI also manages LiveData Plane, the panel will also show Rules.

Use the Rules and Migrations panel to:
* Add further Migrations or Rules
* View more detail about existing Rules and Migrations

### Notifications

The bell icon in the top-right of the UI provides access to a Notification system which will inform you of milestones in your use of the product or any errors or warnings which need to be considered.

## Configuring Storage

LiveData Migrator connects to one Source and one or more Targets for migration.
These are configured in the Storage section on the right hand side.

To begin with, a Source and at least one Target must be defined.

Supported Sources are:
* HDFS

Supported Targets are:

* ADSL Gen2
* S3

It is possible to configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.

In addition to the Storage configuration, this page also displays information regarding the process used to access the Storage itself. It is also possible to apply process-specific configuration here, such as creating [Exclusion Templates](##Exclusiontemplates) to be used for Migrations.

Furthermore it is possible to connect to additional LiveData Migrator or LiveData Plane instances and configure their respective Storages from this panel.

## Creating Migrations

Migrations will transfer existing data, as well as any subsequent changes made to data in their scope, automatically maintaining the data in the target to be as current as possible with any changes to the source while LiveData Migrator remains in operation.

You will typically create multiple migrations so that you can select specific content from your Source Storage by Path. It is also possible to migrate to multiple independent Storages at the same time by defining multiple migration resources.

Creating a Migration is as simple as:

1. Choosing a Source and Target from previously defined [Storages](##ConfiguringStorage)
2. Choosing the Path to set the scope of a given migration
3. [Applying any Exclusions](###Assignexclusiontemplatestoanewmigration) to reduce the scope within this Path

Migrations can be automatically started upon creation, or started at a later point when [viewing migration details](##ViewingMigrations).

## Viewing Migrations

The Dashboard provides an overview of Migrations and their status, and it is possible to drill down for more detail.

They will display what pre-existing data has been moved as well as data added since the Migration started.

A migration must be stopped before it can be deleted.

## Exclusion templates

Define exclusion templates that are used to exclude certain file sizes or file names (defined using [regex](https://regexr.com/) patterns) during a migration. These templates are associated with a storage allowing you to selectively ignore content during migration when that storage is used as the source.

Exclusion templates are assigned to a new migration or an existing migration. Adding exclusions to a new migration ensures the outcome is consistent with those chosen exclusions.

Modifying exclusions on an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

:::note
Default exclusions will automatically apply to certain storages depending on the platform. For example, ADLS storage types have a maximum individual file size limit of 5TB.
:::

### Add new exclusion

When viewing the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.

Click **Add new exclusion** to associate the exclusion with this storage and enter the parameters for the exclusion:

* **Exclusion type** - _File Size_ or _Regex_.
* **Name** - The name given to the exclusion template (for example: `100gbfilelimit`).
* **Description** - A brief description of what the exclusion is doing (for example: "_Files larger than 100GB are excluded_").
* _File Size_ = **Value / Unit**
  * The value and unit for the file size limit (for example: `100` `GB`).
* _Regex_ = **Regex**
  * The regex pattern to be used for the filename exclusion (for example: `/**/.hive-staging**`)

Once the exclusion is added and passed validation, it will appear on the exclusion list.

### Remove exclusion from templates list

When viewing the **Storages** list on the dashboard, click the settings cog for the desired storage to enter the configuration page. Select **LiveData Migrator** under the _Processes_ list to display the exclusion templates.

Remove the exclusion by clicking the trash icon.

:::note
This will not remove the exclusion from an existing migration. See the [Remove exclusion from an existing migration](#remove-exclusion-from-an-existing-migration) section for guidance on how to do this.
:::

### Assign exclusion templates to a new migration

In the new migration page, **Add new exclusion** and select the desired template from the drop-down list.

These will appear on the exclusion list. You can remove them at any time prior to starting the migration.

### Assign exclusion templates to an existing migration

Select an ongoing migration on the dashboard to view the **Exclusions** assigned to it.

Click to **Add** new ones and select the desired template from the drop-down list.

### Remove exclusion from an existing migration

Select an ongoing migration on the dashboard to view the **Exclusions** assigned to it.

Remove any of the exclusions one at a time.
