---
title: Uploading files to Azure Blob Storage using AzCopy
date: 2024-09-25 00:00:00 +/0000
categories: [TIL]
tags: [azure, azure-storage, azure-blob-storage]
---

This can be necessary as there seems to be an issue loading files more than 2GB in size via the Azure Storage UI in Chrome - attempting it results in [a "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired" error](https://stackoverflow.com/questions/63376248/domexception-the-requested-file-could-not-be-read-typically-due-to-permission).

AzCopy needs to be run from the directory in which it is located.

`azcopy login --tenant-id=<tenant-id>`
where <tenant-id> is available from the Azure Portal Microsoft Entra ID landing page ([ref.]((https://stackoverflow.com/questions/62487154/azcopy-authenticate-selected-user-account-does-not-exist-in-tenant))).

followed by
`azcopy copy "<path-of-file-to-upload" "https://<storage-account-name>.blob.core.windows.net/<container-name>/<file-name>" --block-size-mb 1000` ([ref. 1](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs-upload), [ref. 2](https://learn.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy-copy))

Commands need to be run as a single Command Prompt command.

Before applying `--block-size-mb 1000` this resulted in a 'The specified blob or block content is invalid' error - though the explanations from Microsoft ([ref. 1](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-storage/blobs/connectivity/invalid-blob-or-block-content-or-invalid-block-list), [ref. 2](https://techcommunity.microsoft.com/t5/azure-paas-blog/troubleshooting-invalidblock-the-specified-block-list-is-invalid/ba-p/1870350)) don't particularly seem to stack up with my use case.

After applying `--block-size-mb 1000`, the script ran for around six hours before resulting in a 'context deadline exceeded/'Early close of chunk in singleChunkReader with context still active' error. There may be a fix involving setting the `AZCOPY_CONCURRENCY_VALUE` to a value such as 4, but this is likely to lead to a long runtime again.
