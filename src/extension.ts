// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-expose-ui" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// const disposable = vscode.commands.registerCommand('vscode-expose-ui.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from vscode-expose-ui!');
	// });
	
	const disposable = vscode.commands.registerCommand('extension.getGitInputValue', () => {
		try {
			const value = vscode.extensions.getExtension('vscode.git')?.exports.getAPI(1).repositories[0].inputBox.value;
			vscode.window.showInformationMessage(`Git Input Value: ${value}`);
			return value;
		} catch (error) {
			console.error(`Error getting Git input value: ${error}`);
			return undefined;
		}
	});
	
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

/*
    const sourceControl = vscode.scm.getSourceControl('git');
    if (sourceControl) {
        // Clear the commit message input
        sourceControl.inputBox.value = '';

or     

vscode.extensions.getExtension('vscode.git')?.exports.getAPI(1).repositories[0].inputBox.value

maybe these are ways to get valueo of SCM field
*/