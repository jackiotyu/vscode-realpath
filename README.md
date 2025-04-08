# README
create vscode extension with rspack and pnpm

## GitHub Actions
Auto publish to vscode marketplace and open-vsx marketplace when the tag `v*.*.*` is created.

### GitHub Actions Secrets
You need to set the following secrets in the repository settings.
- TOKEN: [token](https://github.com/settings/personal-access-tokens) is required to create the github release.
- VSCE_TOKEN: [token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token) is required to publish the extension to the vscode marketplace.
- OVSX_TOKEN: [token](https://open-vsx.org/user-settings/tokens) is required to publish the extension to the open-vsx marketplace.
