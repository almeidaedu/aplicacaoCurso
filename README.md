put this on your vscode workspace configuration, and enable the "Format On Save" option also in the workspace :

{
"workbench.colorTheme": "Dracula",
"editor.fontFamily": "Fira Code",
"editor.fontLigatures": true,
"editor.fontSize": 18,
"editor.lineHeight": 24,
"workbench.iconTheme": "vscode-icons",
"editor.rulers": [80, 120],
"editor.tabSize": 2,
"editor.renderLineHighlight": "gutter",
"terminal.integrated.fontSize": 14,
"emmet.syntaxProfiles": {
"javascript": "jsx"
},
"emmet.includeLanguages": {
"javascript": "javascriptreact"
},
"javascript.updateImportsOnFileMove.enabled": "never",
"breadcrumbs.enabled": true,
"editor.parameterHints.enabled": false,
"git.autofetch": true,
"[javascript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": false
},
"[javascriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": false
},
"[typescript]": {
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": false
},
"[typescriptreact]": {
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": false
},
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"eslint.validate": [
"javascript",
"javascriptreact",
"typescript",
"typescriptreact"
],
"editor.formatOnSave": true
}
