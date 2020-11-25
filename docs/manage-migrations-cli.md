---
id: manage-migrations-cli
title: Manage migrations with the CLI
sidebar_label: Manage migrations
---

Use the following commands to learn how to manage your data migrations.

| Command | Action |
|:---|:---|
| [`migration stop`](./command-reference.md#migration-stop) | Stop a migration |
| [`migration resume`](./command-reference.md#migration-resume) | Resume a stopped migration |
| [`migration del`](./command-reference.md#migration-del) | Delete a migration |
| [`migration exclusion add`](./command-reference.md#migration-exclusion-add) | Add an exclusion to a migration |
| [`migration exclusion del`](./command-reference.md#migration-exclusion-del) | Remove an exclusion from a migration |
| [`migration list`](./command-reference.md#migration-list) | List running and active migrations |
| [`migration run`](./command-reference.md#migration-run) | Start a migration |
| [`migration show`](./command-reference.md#migration-show) | Get migration details |
| [`status`](./command-reference.md#status) | Get migration status |

## Add pending regions

LiveData Migrator uses pending regions to keep your directories up to date if they change during data migrations. If directories are updated while being migrated, the changed paths on the source filesystem are tracked by the migration so they can be re-scanned for updates when the migration finishes.

LiveData Migrator collects pending regions automatically during a migration, but you can manually add them if you want the directories to be re-scanned after further updates. You can also re-run the entire migration by making the root directory the pending region.

[`migration pending-region add`](./command-reference.md#migration-pending-region-add)

## Data migration states

Migrations can be in one of eight states:

`NONSCHEDULED`
: A *non-scheduled migration* has been defined but not yet started. Create a migration in this state by not specifying the `--auto-start` parameter on creation.

`SCHEDULED`
: A *scheduled* migration will start when directed to run.

`STARTING`
: A *starting* migration is being started and will soon begin transferring content to the target.

`RUNNING`
: A *running* migration is scanning through source content and transferring content to the target, as well as responding to change notifications from the source if applicable.

`LIVE`
: A *live* migration has completed scanning through source content, continues to respond to change notifications from the source, and will transfer content to and make changes in the target as required.

`PAUSING`
: A *pausing* migration has been instructed to pause transfer, but is temporarily continuing to make changes to the target.

`PAUSED`
: A *paused* migration has been instructed to pause transfer, and is not transferring content or making other changes to the target.

`ABORTED`
: An *aborted* migration will not make any changes to the target and cannot be run again.
