# eslint-config-the-only-perfect

[![npm](https://img.shields.io/npm/v/eslint-config-the-only-perfect.svg)](https://www.npmjs.com/package/eslint-config-the-only-perfect)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-the-only-perfect.svg?maxAge=2592000)](https://www.npmtrends.com/eslint-config-the-only-perfect)

Forget about eslint-configs hell. All you need is here. One package, one config, one minute to start development.

### Install

```shell
yarn add -D eslint@8.57.x eslint-config-the-only-perfect
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
