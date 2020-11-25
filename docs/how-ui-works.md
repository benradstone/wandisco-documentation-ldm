---
id: how-ui-works
title: How the UI works
sidebar_label: How the UI works
---

The UI has four main panels and a Notification system.

## License information

Use the License information panel to see current license information (including warnings if the product is approaching license limits), and uploading a new license.

## Bandwidth usage

The Bandwidth panel shows how much bandwidth LiveData Migrator is currently using to migrate data. It shows this over the most recent 5 minute period and continually updates. The left axis scales automatically to accommodate the highest throughput during that period.

## Storage

The Storage panel shows the underlying storage used by LiveData Migrator as either a source or target. LiveData Migrator supports one source and one or more targets. Each storage displays its associated processes, such as which LiveData Migrator is used to access it.

Use the Storage panel to:

* View and configure the source and target storages
* Add further targets
* Add additional LiveData Migrator servers and [LiveData Plane](https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/get-started) servers

For more information about sources and targets, see the [introduction to LiveData Migrator](./about.md).

## Rules and Migrations

The Rules and Migrations panel in LiveData Migrator shows migrations and their progress. If the UI also manages LiveData Plane, the panel will also show rules.

Use the Rules and Migrations panel to:

* Add further migrations or rules
* View more detail about existing rules and migrations

## Notifications

The bell icon in the top-right of the UI is where you'll receive notifications about errors, warnings, or important milestones in your usage.
