
# VS Code Expose UI

Expose VS Code UI values for external use through commands.

## Purpose

This extension provides a simple way to access VS Code UI values from external scripts and tasks.

## Usage

Access any VS Code UI value using the command `extension.getVSCodeValue`:

```json
{
    "command": "bash",
    "args": [
        "-c",
        "echo $(code --execute-command extension.getVSCodeValue 'scm.inputBox.value')"
    ]
}
```

## Examples

Common VS Code values you can access:
- `scm.inputBox.value` - Current Source Control input message
- `window.activeTextEditor.document.fileName` - Current file name
- `workspace.workspaceFolders` - Workspace folders

## Contributing

Feel free to open issues and PRs on GitHub.