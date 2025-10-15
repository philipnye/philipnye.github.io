---
title: Debugging Azure App Service issues
date: 2025-10-12 00:00:00 +/0000
categories: [TIL]
tags: [azure, azure-app-service, python, github-actions]
---

# Debugging Azure App Service issues
## Conflict (CODE: 409)
When deploying an app to Azure App Service using GitHub Actions, it is possible to encounter the error message `Deployment Failed, Error: Failed to deploy web package using OneDeploy to App Service. Conflict (CODE: 409)` (followed by the error `Failed to deploy web package to App Service.`).

This can occur when the app is over the resource limits, which can be the case where a previous deployment has failed and left behind files.

To fix this:

1. Access the Kudu Debug Console at `https://<your-app-name>.scm.azurewebsites.net/DebugConsole`
1. Navigate to the `wwwroot` folder using `cd /home/site/wwwroot`
1. Delete all of the existing contents of `wwwroot` using `rm -rf /home/site/wwwroot/*`
1. Restart the app via the Azure portal and try redeploying.

[Ref.](https://stackoverflow.com/a/79685663/4659442)
