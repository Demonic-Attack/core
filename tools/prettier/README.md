![MasterHead](https://prettier.io/icon.png)

<h1 align="start">Prettier config by @demonicattack</h1>

# npm

```sh
npm install -D @demonicattack/prettier
```

# yarn

```sh
yarn add -D @demonicattack/prettier
```

# pnpm

```sh
pnpm add -D @demonicattack/prettier
```

# configuration file

```js
// prettier.config.mjs or prettier.config.js -> set "type": "module" in package.json 

import { prettier } from '@demonicattack/prettier';

/** @type {import('@demonicattack/prettier').PrettierOptions} */
export default prettier;
```

# .prettierignore

```bash
# unix
cp node_modules/@demonicattack/prettier/.prettierignore .prettierignore

# windows
copy node_modules/@demonicattack/prettier/.prettierignore .prettierignore
```

# script

```json
{
    "scripts": {
        "format": "prettier --write \"**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,json,prisma,md}\""
    }
}
```
