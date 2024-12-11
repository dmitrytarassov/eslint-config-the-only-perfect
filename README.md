# The Only Perfect eslint config.

## All you need is here:

### Install

```shell
yarn add eslint@8.57.x eslint-config-the-only-perfect
```

### Edit `.eslintrc.cjs`

```javascript
module.exports = {
    extends: ["the-only-perfect"],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
        sourceType: "module",
        ecmaVersion: 2021,
    }
}
```

### Done
