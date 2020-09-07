---
id: installation
title: Installation
sidebar_label: Installation
---

Ready to install? Check the prerequisites and then follow these steps to get up and running with LiveData Migrator.

If you're new to the concept of LiveData, or want to know what LiveData Migrator does, see the [introduction to LiveData Migrator](./about.md).

## Before you start

### Prerequisites

* Linux host running either Red Hat, CentOS, Debian or Ubuntu.
  * Java 1.8 64-bit.
  * Network connectivity from your LiveData Migrator host to your target storage (for example: ADLS Gen2 endpoint or S3 bucket).
  * Port 8081 accessible on your Linux host (to access the UI through a web browser).
  * If migrating from HDFS:
    * Hadoop client libraries must be installed on the Linux host.
    * Ability to authenticate as the [HDFS superuser](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsPermissionsGuide.html#The_Super-User) (for example: `hdfs`).
    * If Kerberos is enabled on your Hadoop cluster, a valid keytab containing a suitable principal for the HDFS superuser must be available on the Linux host.

### Machine specification

* **16 CPUs, 32 GB RAM** (minimum **4 CPUs, 16 GB RAM**)
* **200 GB** (SSD-backed volumes) (minimum **100 GB**)
* **2 Gbps** minimum network. Your network bandwidth must be able to cope with transferring data and ongoing changes from your source storage.

### License

The LiveData Migrator preview license is limited to 14 days operation and 5TB of data migration. This gives you full use of LiveData Migrator, but operation will stop after reaching either of these limits. [Contact WANdisco](https://www.wandisco.com) to upgrade to a full license.

## Download and install LiveData Migrator

1. Upload your license key to access the customer download page.

1. Download LiveData Migrator from the WANdisco Customer Portal.

<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

2. Make the script executable and install as the root (or sudo) user. If you're migrating from HDFS, install LiveData Migrator on an edge node in the Hadoop      cluster.

1. Install LiveData Migrator with the appropriate command:

    ```bash title="Red Hat/CentOS"
    chmod +x one-ui_lm_rpm_installer.sh && ./one-ui_lm_rpm_installer.sh
    ```

    ```bash title="Debian"
    chmod +x one-ui_lm_deb_installer.sh && ./one-ui_lm_deb_installer.sh
    ```

   The above commands assume that the installer is inside your working directory.

1. You have two options for running LiveData Migrator.

   1. [Configure the LiveData Migrator system service](#configure-the-livedata-migrator-system-service).
   1. [Run LiveData Migrator using the jar file (CLI access only)](./operation-cli.md#using-the-livedata-migrator-jar-optional).

## Configure Kerberos authentication (optional)

If Kerberos is enabled in your environment:

1. Edit the Kerberos security properties in the `/etc/wandisco/livedata-migrator/application.properties` file. Refer to the [Kerberos Integration](./configuration.md#kerberos-integration) section for details about the required properties.

1. Restart the LiveData Migrator service to make any configuration changes live:

`service livedata-migrator restart`

## Using LiveData Migrator

Once you have LiveData Migrator running, you can use the [UI](./operation-ui.md), [CLI](./operation-cli.md), or [REST API](./api-reference.md) to start migrating data.
