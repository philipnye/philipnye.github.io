---
title: Uploading files to Azure Blob Storage
date: 2024-09-25 00:00:00 +/0000
categories: [TIL]
tags: [azure, azure-storage, azure-blob-storage]
---

The [Storage Blob Data Owner role is needed to upload data](https://stackoverflow.com/questions/60602497/azcopy-error-this-request-is-not-authorized-to-perform-this-operation/60628323#60628323) - even when the Owner role is held.

It can [take up to five minutes for role assignments to propagate](https://stackoverflow.com/questions/60602497/azcopy-error-this-request-is-not-authorized-to-perform-this-operation#comment110982605_60628323).
