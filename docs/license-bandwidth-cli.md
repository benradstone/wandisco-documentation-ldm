---
id: license-bandwidth-cli
title: Bandwidth and License management
sidebar_label: Manage bandwidth and your LiveData Migrator license
---

## Bandwidth management

Limit the total amount of bandwidth LiveData Migrator can use by using the `bandwidth policy` command. Once defined, the bandwidth limit will apply immediately to all migrations (new and ongoing).

Only one bandwidth policy can be active at a time. The default policy is unlimited bandwidth.

| Command | Action |
|:---|:---|
| [`bandwidth policy del`](./command-reference.md#bandwidth-policy-del) | Delete a bandwidth policy |
| [`bandwidth policy set`](./command-reference.md#bandwidth-policy-set) | Define the bandwidth policy |
| [`bandwidth policy show`](./command-reference.md#bandwidth-policy-show) | Get details for the current bandwidth policy |

## License management

Upload a new license or show details of your current license with these commands.

See the [How to upgrade your license](https://community.wandisco.com/s/article/How-to-upgrade-your-license) page for information on how to purchase a license key.

| Command | Action |
|:---|:---|
| [`license show`](./command-reference.md#license-show) | Show details of your active license |
| [`license upload`](./command-reference.md#license-upload) | Upload a new license file |
