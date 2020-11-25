---
id: configure-exclusions-cli
title: Configure exclusions with the CLI
sidebar_label: Configure exclusions
---

Exclusions constrain content migrated from a source file system. Adding exclusions to an existing migration will change the future actions performed for that migration, but will not affect previously migrated content.

## Define exclusions

Define exclusions so you can apply them to migrations.

| Command | Action |
|:---|:---|
| [`exclusion add date`](./command-reference.md#exclusion-add-date) | Create a new date-based rule |
| [`exclusion add file-size`](./command-reference.md#exclusion-add-file-size) | Create a new file size rule |
| [`exclusion add regex`](./command-reference.md#exclusion-add-regex) | Create a new regex exclusion rule |

## Manage exclusions

| Command | Action |
|:---|:---|
| [`exclusion del`](./command-reference.md#exclusion-del) | Delete an exclusion rule |
| [`exclusion list`](./command-reference.md#exclusion-list) | List all exclusion rules |
| [`exclusion show`](./command-reference.md#exclusion-show) | Get details for a particular exclusion rule |
