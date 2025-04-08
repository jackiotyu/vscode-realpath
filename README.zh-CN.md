# Realpath Util (中文说明)

<div align="center">
    <img src="images/icon.png" width="128" height="128" />
</div>

[English](./README.md) | 简体中文

一个帮助你处理真实文件路径的 Visual Studio Code 扩展，特别适用于处理符号链接的场景。

## 功能特性

- **在资源管理器中显示真实路径**：在 VS Code 的资源管理器中显示文件的实际位置
- **在文件资源管理器中显示真实路径**：在系统的文件资源管理器中打开文件的实际位置
- **在新窗口中显示真实路径**：在新的 VS Code 窗口中打开文件夹的实际路径

## 系统要求

- Visual Studio Code ^1.60.0

## 安装方法

1. 通过 VS Code 插件市场安装
2. 重新加载 VS Code
3. 即可使用！

## 使用方法

在 VS Code 资源管理器中右键点击任意文件或文件夹，可以看到以下命令：
- "在资源管理器中显示真实路径"
- "在文件资源管理器中显示真实路径"
- "在新窗口中显示真实路径"（仅适用于文件夹）

## 扩展设置

本扩展提供以下设置项：

* `realpath-util.showRevealInExplorer`: 在资源管理器上下文菜单中显示/隐藏"在资源管理器中显示真实路径"选项
* `realpath-util.showRevealFileInOS`: 在资源管理器上下文菜单中显示/隐藏"在文件资源管理器中显示真实路径"选项
* `realpath-util.showRevealInNewWindow`: 在资源管理器上下文菜单中显示/隐藏"在新窗口中显示真实路径"选项

## 许可证

[MIT 许可证](LICENSE)