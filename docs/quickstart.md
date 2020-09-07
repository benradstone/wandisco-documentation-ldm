---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---

## Step 1 - Download and install
<div class="download">
<a href="https://customer.wandisco.com">Download LiveData Migrator</a>
</div>

1. Install LiveData Migrator by running this command:

    ```bash title="Red Hat/CentOS"
    chmod +x one-ui_lm_rpm_installer.sh && ./one-ui_lm_rpm_installer.sh
    ```

    ```bash title="Debian"
    chmod +x one-ui_lm_deb_installer.sh && ./one-ui_lm_deb_installer.sh
    ```

2. Check the service statuses by running these commands:

    ```
    service livedata-migrator status
    ```

    ```
    service one-ui-server status
    ```

1. Connect to the UI with your web browser on [port 8081](./operation-ui.md#before-you-start) and register your LiveData Migrator account.

## Step 2 - Define a source and a target
You'll need a source and at least one target to migrate data. You might find LiveData Migrator has discovered your source storage already.
1. If your source storage isn't already defined, click the pulsing + button to add a source.
1. Once added, repeat the process to add a target.

See the [Configure storage](./operation-ui.md#configure-storage) guide for more details.

## Step 3 - Migrate your data
1. Choose a source and target from previously defined [storages](./operation-ui.md#configure-storage).
2. Choose the Path to set the scope of the migration.
3. [Apply any exclusions](./operation-ui.md#add-new-exclusions) to reduce the scope within this Path.

See the [Create migrations](./operation-ui.md#create-migrations) guide for more details.

## Get started
For a more comprehensive guide to getting up and running with LiveData Migrator, including full installation, see the [Installation](./installation.md) guide.
