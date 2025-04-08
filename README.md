# Realpath Util

<div align="center">
    <img src="images/icon.png" width="128" height="128" />
</div>

English | [简体中文](./README.zh-CN.md)

A Visual Studio Code extension that helps you work with real file paths, especially useful when dealing with symbolic links.

## Features

- **Reveal Real Path in Explorer**: Shows the actual file location in VS Code's explorer
- **Show Real Path in File Explorer**: Opens the actual file location in your system's file explorer
- **Open Real Path in New Window**: Opens the actual folder path in a new VS Code window

## Requirements

- Visual Studio Code ^1.60.0

## Installation

1. Install through VS Code Marketplace
2. Reload VS Code
3. Ready to use!

## Usage

Right-click on any file or folder in VS Code Explorer to access these commands:
- "Reveal Real Path in Explorer"
- "Show Real Path in File Explorer"
- "Open Real Path in New Window" (only available for folders)

## Extension Settings

This extension contributes the following settings:

* `realpath-util.showRevealInExplorer`: Show/Hide "Reveal Real Path in Explorer" option in explorer context menu
* `realpath-util.showRevealFileInOS`: Show/Hide "Show Real Path in File Explorer" option in explorer context menu
* `realpath-util.showRevealInNewWindow`: Show/Hide "Open Real Path in New Window" option in explorer context menu

## License

[MIT License](LICENSE)