---
id: configure-storage-ui
title: Configure storage with the UI
sidebar_label: Configure storage
---

Configure your storages to define at least one source and at least one target to migrate data. LiveData Migrator will connect to these storages for migration.

* Supported sources are: **HDFS**
* Supported targets are: **ADLS Gen2**, **S3**, **Google Cloud Storage**, and **IBM Cloud Object Storage (S3)**

You can also use the Storage panel to:

* Configure S3-compatible Targets using the [Hadoop S3A configuration](http://hadoop.apache.org/docs/current/hadoop-aws/tools/hadoop-aws/index.html) exposed in the UI.
* Connect to additional LiveData Migrator or LiveData Plane instances and configure their respective storages.

## Configure source storage

:::info
The source file system is normally detected on startup. It will not be detected automatically if Kerberos is enabled or your Hadoop configuration does not contain the information needed to connect to the Hadoop file system.
:::

If Kerberos is enabled, on the [Storage](./how-ui-works.md#storage) panel, select to configure your _Unknown source_ and provide your source HDFS configuration:

* **File System ID** - Provide a name for your source storage.
* **Default FS** - Provide the `fs.defaultFS` value from your HDFS configuration.
* Kerberos Configuration
  * **Kerberos Principal** - Provide a principal that will map to the [HDFS super user](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) using [auth_to_local](https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SecureMode.html#Mapping_from_Kerberos_principals_to_OS_user_accounts) rules.
  * **Kerberos Keytab Location** - Provide the path to the Kerberos keytab containing the **Kerberos Principal**. This must be accessible to the local system user running the LiveData Migrator service (default is `hdfs`).
* Additional Configuration
  * **Provide a path to files** - Provide the directory or directories containing your HDFS configuration (such as the `core-site.xml` and `hdfs-site.xml`) on your LiveData Migrator host's local filesystem.
  * **Additional Configuration** (Optional) - Override properties or specify additional properties by adding Key/Value pairs.

## Add target storages

Select your platform from the following list to learn how configure _Target_ storage in the [Storage](#storage) panel.

* ADLS Gen2 - The configuration needed will depend on the **Authentication Type** chosen:
  * [Shared Key](./command-reference.md#mandatory-parameters-2)
  * [Service Principal (OAuth2)](./command-reference.md#mandatory-parameters-1)
* [S3 / IBM Cloud Object Storage (S3)](./command-reference.md#mandatory-parameters-5)
* [Google Cloud Storage](./command-reference.md#mandatory-parameters-3)
