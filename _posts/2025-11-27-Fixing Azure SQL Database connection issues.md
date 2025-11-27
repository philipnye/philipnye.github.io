---
title: Fixing Azure SQL Database connection issues
date: 2025-11-27 00:00:00 +/0000
categories: [TIL]
tags: azure, sql, azure-sql-database, connection, azure-app-service
---

# Setting Azure App Service to 'Always on'

Azure App Service having the 'Always on' setting disabled can apparently lead to the container going to sleep, with the first d/b call after wake-up often failing because the d/b connection pool is stale.

## Fix
Enable 'Always on' in App Service > Settings > Configuration (preview) > General settings

([Ref.](https://chatgpt.com/g/g-p-68eff7e0f8108191b895c31567e0f00f-sq/c/69281677-1b68-8331-b8c3-ab6eb77712a3))
