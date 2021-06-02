# check package
npm info "eslint-config-airbnb@latest" peerDependencies

yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
yarn add -D babel-eslint eslint-plugin-babel


// vscode addon setting Ctrl + ,
{
    "workbench.startupEditor": "newUntitledFile",
    "workbench.iconTheme": "vscode-icons",
    "vsicons.dontShowNewVersionMessage": true,
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "javascript.updateImportsOnFileMove.enabled": "always",

    "javascript.format.enable": false,
    "prettier.eslintIntegration": true,

    "editor.defaultFormatter": "esbenp.prettier-vscode",,
    "editor.formatOnSave": true,
    "editor.formatOnPaste": false,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}