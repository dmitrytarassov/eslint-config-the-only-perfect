# eslint-config-the-only-perfect

Forget about eslint-configs hell. All you need is here. One package, one config, one minute to start development.

[![npm](https://img.shields.io/npm/v/eslint-config-the-only-perfect.svg)](https://www.npmjs.com/package/eslint-config-the-only-perfect)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-the-only-perfect.svg?maxAge=2592000)](https://www.npmtrends.com/eslint-config-the-only-perfect)

### Install

```shell
yarn add -D eslint@9 eslint-config-the-only-perfect
```

### Edit `eslint.config.js`

```javascript
import config from "eslint-config-the-only-perfect";

export default config;
```

### Done

## Looking for eslint@8?

[eslint-config-the-only-perfect@1.3](https://github.com/dmitrytarassov/eslint-config-the-only-perfect/tree/v1.3.8)

### Ok, what is inside?

This configuration includes a comprehensive setup to ensure clean, maintainable, and readable TypeScript code:

- **Parser**:
    - `@typescript-eslint/parser`: Parses TypeScript code for ESLint.

- **Base Configurations**:
    - `eslint:recommended`: Enables a set of recommended ESLint rules.
    - `plugin:@typescript-eslint/recommended`: Adds recommended rules for TypeScript.
    - `plugin:prettier/recommended`: Integrates Prettier for code formatting.
    - `plugin:import/recommended`: Adds rules for managing import statements.

- **Plugins**:
    - `@typescript-eslint`: Provides TypeScript-specific linting rules.

- **Custom Rules**:
    - `import/no-unresolved`: Disabled to avoid false positives in TypeScript projects.
    - `import/named`: Disabled as TypeScript handles named imports.
    - `no-async-promise-executor`: Disabled for flexibility in promise handling.
    - `import/order`: Enforces a consistent import order:
        - Groups: `external`, `builtin`, `internal`, `sibling`, `parent`, `index`.
        - `newlines-between`: Ensures newlines between groups.
        - Alphabetizes imports within groups in ascending order.

- **Environment Settings**:
    - `browser`: Enables browser global variables.
    - `es2017`: Supports ES2017 features.
    - `node`: Enables Node.js global variables.

- **Root Setting**:
    - `root: true`: Ensures this is the root ESLint configuration for the project.


