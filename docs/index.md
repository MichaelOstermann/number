---
aside: true
---

# number

<Badge type="info" class="size">
    <span>Minified</span>
    <span>3.10 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>936 B</span>
</Badge>

**Functional utilities for numbers.**

## Installation

::: code-group

```sh [npm]
npm install @monstermann/number
```

```sh [pnpm]
pnpm add @monstermann/number
```

```sh [yarn]
yarn add @monstermann/number
```

```sh [bun]
bun add @monstermann/number
```

:::

## Tree-shaking

### Installation

::: code-group

```sh [npm]
npm install -D @monstermann/unplugin-number
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-number
```

```sh [yarn]
yarn -D add @monstermann/unplugin-number
```

```sh [bun]
bun -D add @monstermann/unplugin-number
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import number from "@monstermann/unplugin-number/vite";

export default defineConfig({
    plugins: [number()],
});
```

```ts [Rollup]
// rollup.config.js
import number from "@monstermann/unplugin-number/rollup";

export default {
    plugins: [number()],
};
```

```ts [Rolldown]
// rolldown.config.js
import number from "@monstermann/unplugin-number/rolldown";

export default {
    plugins: [number()],
};
```

```ts [Webpack]
// webpack.config.js
const number = require("@monstermann/unplugin-number/webpack");

module.exports = {
    plugins: [number()],
};
```

```ts [Rspack]
// rspack.config.js
const number = require("@monstermann/unplugin-number/rspack");

module.exports = {
    plugins: [number()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import number from "@monstermann/unplugin-number/esbuild";

build({
    plugins: [number()],
});
```

:::
