---
id: configure-storage-cli
title: Configure storage with the CLI
sidebar_label: Configure storage
---

## Validate your source

LiveData Migrator migrates data from a source file system. Validate that the correct source file system is registered or delete the existing one (you'll define a new source in the [Add File Systems](#add-file-systems) step).

:::info
The source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.

If Kerberos is enabled, use the [`filesystem auto-discover-source hdfs`](./command-reference.md#filesystem-auto-discover-source-hdfs) command to provide your Kerberos credentials and auto-discover your source HDFS configuration.
:::

You can manage the source file system through these commands.

| Command | Action |
|:---|:---|
| [`source clear`](./command-reference.md#source-clear) | Delete all sources |
| [`source del`](./command-reference.md#source-del) | Delete a source |
| [`source fs show`](./command-reference.md#source-fs-show) | Show the source FileSystem configuration |
| [`filesystem auto-discover-source hdfs`](./command-reference.md#filesystem-auto-discover-source-hdfs) | Provide your Kerberos credentials to access your source HDFS configuration |

## Add file systems

Add file systems to provide LiveData Migrator with the information needed to read content from your source and migrate content to your target.

A range of different file system types are supported as targets, including [ADLS Gen 2](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction), [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html), [GCS](https://cloud.google.com/storage), and [S3A](https://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html).

:::note
LiveData Migrator currently supports HDFS file systems as a migration source.

If your source file system was not discovered automatically or you wish to assign a new source file system, use the `--source` parameter with the `filesystem add hdfs` command to add a suitable HDFS source file system.
:::

You can define multiple target file systems, which you can migrate to at the same time.

:::caution
Although present when invoking the `help` command, Local Filesystem functionality is not yet available. This will be coming in a future release.
:::

| Command | Action |
|:---|:---|
| [`filesystem add adls2 oauth`](./command-reference.md#filesystem-add-adls2-oauth) | Add an ADLS Gen 2 file system resource using a service principal and oauth credentials |
| [`filesystem add adls2 sharedKey`](./command-reference.md#filesystem-add-adls2-sharedkey) | Add an ADLS Gen 2 file system resource using access key credentials |
| [`filesystem add gcs`](./command-reference.md#filesystem-add-gcs) | Add a Google Cloud Storage file system resource |
| [`filesystem add hdfs`](./command-reference.md#filesystem-add-hdfs) | Add a Hadoop HDFS file system resource |
| [`filesystem add s3a`](./command-reference.md#filesystem-add-s3a) | Add a S3 file system resource (choose this when using IBM COS) |

## Manage file systems

| Command | Action |
|:---|:---|
| [`filesystem clear`](./command-reference.md#filesystem-clear) | Delete all target file systems |
| [`filesystem del`](./command-reference.md#filesystem-del) | Delete a target file system |
| [`filesystem list`](./command-reference.md#filesystem-list) | List of target file systems |
| [`filesystem show`](./command-reference.md#filesystem-show) | Get target file system details |
| [`filesystem types`](./command-reference.md#filesystem-types) | List the types of target file systems available |
