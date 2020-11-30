---
id: connect-to-metastores
title: Connect to metastores
sidebar_label: Connect to metastores
---

Ready to migrate metadata? First, connect to your metastores by adding Hive agents. Then, [define metadata rules](./define-metadata-rules.md) before [migrating metadata](./migrate-metadata.md).

## Add hive agents

Hive agents provide LiveData Migrator with the information needed to read content from your source metastore/database and migrate content to your target metastore/database.

A variety of platforms are supported, including [Apache Hive](https://cwiki.apache.org/confluence/display/Hive/Home), [Azure SQL](https://docs.microsoft.com/en-gb/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview), [AWS-hosted database](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/database.html), and local filesystem.

Metadata can be migrated in any direction between these supported metastore and database formats.

| Command | Action |
|:---|:---|
| [`hive agent add azure`](./command-reference.md#hive-agent-add-azure) | Add a hive agent for an Azure SQL database server |
| [`hive agent add filesystem`](./command-reference.md#hive-agent-add-filesystem) | Add a hive agent for a local filesystem |
| [`hive agent add glue`](./command-reference.md#hive-agent-add-glue) | Add a hive agent for an AWS-hosted database server |
| [`hive agent add hive`](./command-reference.md#hive-agent-add-hive) | Add a hive agent for a local or remote Apache Hive metastore |

## Configure existing hive agents

| Command | Action |
|:---|:---|
| [`hive agent configure azure`](./command-reference.md#hive-agent-configure-azure) | Change the configuration of an existing hive agent for the Azure SQL database server |
| [`hive agent configure filesystem`](./command-reference.md#hive-agent-configure-filesystem) | Change the configuration of an existing hive agent for the local filesystem |
| [`hive agent configure glue`](./command-reference.md#hive-agent-configure-glue) | Change the configuration of an existing hive agent for the AWS-hosted database server |
| [`hive agent configure hive`](./command-reference.md#hive-agent-configure-hive) | Change the configuration of an existing hive agent for the Apache Hive metastore |

## Manage hive agents

| Command | Action |
|:---|:---|
| [`hive agent check`](./command-reference.md#hive-agent-check) | Check whether the hive agent can connect to the metastore or database |
| [`hive agent delete`](./command-reference.md#hive-agent-delete) | Delete a hive agent |
| [`hive agent list`](./command-reference.md#hive-agent-list) | List all configured hive agents |
| [`hive agent show`](./command-reference.md#hive-agent-show) | Show the configuration for a hive agent |
| [`hive agent types`](./command-reference.md#hive-agent-types) | List supported hive agent types |

## Next Steps

Once you have connected to your metastores, [define metadata rules](./define-metadata-rules.md) to define which databases and tables you want to migrate.
