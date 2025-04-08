import * as vscode from 'vscode';
import fs from 'fs/promises';
import path from 'path';
import { open } from './utils';

export function activate(context: vscode.ExtensionContext) {
    console.log(`realpath-util is now active!`);

    const getRealUri = async (uri: vscode.Uri): Promise<vscode.Uri> => {
        const realpath = await fs.realpath(uri.fsPath || '');
        return vscode.Uri.file(realpath);
    };

    const revealInExplorerCmd = vscode.commands.registerCommand(
        'realpath-util.revealInExplorer',
        async (item: vscode.Uri) => {
            vscode.commands.executeCommand('revealInExplorer', await getRealUri(item));
        },
    );

    const revealFileInOSCmd = vscode.commands.registerCommand(
        'realpath-util.revealFileInOS',
        async (item: vscode.Uri) => {
            open((await getRealUri(item)).fsPath);
        },
    );

    const revealInNewWindowCmd = vscode.commands.registerCommand(
        'realpath-util.revealInNewWindow',
        async (item: vscode.Uri) => {
            const folderUri = await getRealUri(item);
            vscode.commands.executeCommand('vscode.openFolder', folderUri, { forceNewWindow: true });
        },
    );

    context.subscriptions.push(revealInExplorerCmd, revealFileInOSCmd, revealInNewWindowCmd);
}

export function deactivate() {}
