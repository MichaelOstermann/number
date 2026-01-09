<div align="center">

<h1>number</h1>

![Minified](https://img.shields.io/badge/Minified-2.31_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-798_B-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for numbers.**

[Documentation](https://MichaelOstermann.github.io/number)

</div>

## Installation

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

## Tree-shaking

### Installation

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

### Usage

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

## Number

### add

```ts
function Number.add(target: number, source: number): number
```

Adds `source` to `target` and returns the result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.add(5, 3); // 8
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.add(3)); // 8
```

### ceil

```ts
function Number.ceil(target: number): number
```

Returns the smallest integer greater than or equal to `target`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.ceil(4.3); // 5
Number.ceil(-4.7); // -4
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(4.3, Number.ceil()); // 5
pipe(-4.7, Number.ceil()); // -4
```

### clamp

```ts
function Number.clamp(
    value: number,
    min: number,
    max: number,
): number
```

Constrains `value` to be between `min` and `max` (inclusive).

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.clamp(10, 0, 5); // 5
Number.clamp(-2, 0, 5); // 0
Number.clamp(3, 0, 5); // 3
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(10, Number.clamp(0, 5)); // 5
pipe(-2, Number.clamp(0, 5)); // 0
pipe(3, Number.clamp(0, 5)); // 3
```

### create

```ts
function Number.create(target?: any): number
```

An alias for `Number(target)`.

#### Example

#### Example

```ts
import { Number } from "@monstermann/number";

Number.create("10"); // 10
```

### div

```ts
function Number.div(target: number, source: number): number
```

Divides `target` by `source` and returns the result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.div(10, 2); // 5
Number.div(15, 3); // 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(10, Number.div(2)); // 5
pipe(15, Number.div(3)); // 5
```

### exp

```ts
function Number.exp(target: number, source: number): number
```

Raises `target` to the power of `source` and returns the result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.exp(2, 3); // 8
Number.exp(5, 2); // 25
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(2, Number.exp(3)); // 8
pipe(5, Number.exp(2)); // 25
```

### floor

```ts
function Number.floor(target: number): number
```

Returns the largest integer less than or equal to `target`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.floor(4.7); // 4
Number.floor(-4.3); // -5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(4.7, Number.floor()); // 4
pipe(-4.3, Number.floor()); // -5
```

### gt

```ts
function Number.gt(target: number, source: number): boolean
```

Returns `true` if `target` is greater than `source`, otherwise `false`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.gt(5, 3); // true
Number.gt(2, 7); // false
Number.gt(4, 4); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.gt(3)); // true
pipe(2, Number.gt(7)); // false
pipe(4, Number.gt(4)); // false
```

### gte

```ts
function Number.gte(target: number, source: number): boolean
```

Returns `true` if `target` is greater than or equal to `source`, otherwise `false`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.gte(5, 3); // true
Number.gte(2, 7); // false
Number.gte(4, 4); // true
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.gte(3)); // true
pipe(2, Number.gte(7)); // false
pipe(4, Number.gte(4)); // true
```

### is

```ts
function Number.is(target: unknown): target is number
```

Returns `true` if `target` is a number, otherwise `false`. This function acts as a type guard.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.is(42); // true
Number.is(3.14); // true
Number.is(NaN); // true
Number.is(Infinity); // true
Number.is("123"); // false
Number.is(null); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.is()); // true
pipe(3.14, Number.is()); // true
pipe(NaN, Number.is()); // true
pipe(Infinity, Number.is()); // true
pipe("123", Number.is()); // false
pipe(null, Number.is()); // false
```

### isBigInt

```ts
function Number.isBigInt(target: unknown): target is bigint
```

Returns `true` if `target` is a bigint, otherwise `false`. This function acts as a type guard.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isBigInt(123n); // true
Number.isBigInt(123); // false
Number.isBigInt("123"); // false
Number.isBigInt(null); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(123n, Number.isBigInt()); // true
pipe(123, Number.isBigInt()); // false
pipe("123", Number.isBigInt()); // false
pipe(null, Number.isBigInt()); // false
```

### isFinite

```ts
function Number.isFinite(target: number): boolean
```

Returns `true` if `target` is a finite number, otherwise `false`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isFinite(42); // true
Number.isFinite(3.14); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite(NaN); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.isFinite()); // true
pipe(3.14, Number.isFinite()); // true
pipe(Infinity, Number.isFinite()); // false
pipe(-Infinity, Number.isFinite()); // false
pipe(NaN, Number.isFinite()); // false
```

### isFloat

```ts
function Number.isFloat<T>(value: T): value is Float<T>
```

Returns `true` if `value` is a finite floating-point number (not an integer), otherwise `false`. This function acts as a type guard.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isFloat(3.14); // true
Number.isFloat(0.5); // true
Number.isFloat(42); // false
Number.isFloat(NaN); // false
Number.isFloat(Infinity); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3.14, Number.isFloat()); // true
pipe(0.5, Number.isFloat()); // true
pipe(42, Number.isFloat()); // false
pipe(NaN, Number.isFloat()); // false
pipe(Infinity, Number.isFloat()); // false
```

### isInRange

```ts
function Number.isInRange(
    target: number,
    start: number,
    end: number,
): boolean
```

Returns `true` if `target` is within the range between `start` and `end` (inclusive), otherwise `false`. The order of `start` and `end` does not matter.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isInRange(5, 1, 10); // true
Number.isInRange(0, 1, 10); // false
Number.isInRange(5, 10, 1); // true
Number.isInRange(5, 5, 10); // true
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.isInRange(1, 10)); // true
pipe(0, Number.isInRange(1, 10)); // false
pipe(5, Number.isInRange(10, 1)); // true
pipe(5, Number.isInRange(5, 10)); // true
```

### isInt

```ts
function Number.isInt<T>(value: T): value is Int<T>
```

Returns `true` if `value` is an integer, otherwise `false`. This function acts as a type guard.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isInt(42); // true
Number.isInt(-7); // true
Number.isInt(0); // true
Number.isInt(3.14); // false
Number.isInt(NaN); // false
Number.isInt(Infinity); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.isInt()); // true
pipe(-7, Number.isInt()); // true
pipe(0, Number.isInt()); // true
pipe(3.14, Number.isInt()); // false
pipe(NaN, Number.isInt()); // false
pipe(Infinity, Number.isInt()); // false
```

### limitPrecision

```ts
function Number.limitPrecision(
    target: number,
    precision: number,
): number
```

Rounds `target` to the specified number of decimal places defined by `precision`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.limitPrecision(3.14159, 2); // 3.14
Number.limitPrecision(2.7182818, 3); // 2.718
Number.limitPrecision(123.456, 0); // 123
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3.14159, Number.limitPrecision(2)); // 3.14
pipe(2.7182818, Number.limitPrecision(3)); // 2.718
pipe(123.456, Number.limitPrecision(0)); // 123
```

### lt

```ts
function Number.lt(target: number, source: number): boolean
```

Returns `true` if `target` is less than `source`, otherwise `false`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.lt(3, 5); // true
Number.lt(7, 2); // false
Number.lt(4, 4); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3, Number.lt(5)); // true
pipe(7, Number.lt(2)); // false
pipe(4, Number.lt(4)); // false
```

### lte

```ts
function Number.lte(target: number, source: number): boolean
```

Returns `true` if `target` is less than or equal to `source`, otherwise `false`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.lte(3, 5); // true
Number.lte(7, 2); // false
Number.lte(4, 4); // true
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3, Number.lte(5)); // true
pipe(7, Number.lte(2)); // false
pipe(4, Number.lte(4)); // true
```

### max

```ts
function Number.max(target: number, source: number): number
```

Returns the larger of `target` and `source`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.max(5, 3); // 5
Number.max(2, 7); // 7
Number.max(4, 4); // 4
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.max(3)); // 5
pipe(2, Number.max(7)); // 7
pipe(4, Number.max(4)); // 4
```

### min

```ts
function Number.min(target: number, source: number): number
```

Returns the smaller of `target` and `source`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.min(5, 3); // 3
Number.min(2, 7); // 2
Number.min(4, 4); // 4
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.min(3)); // 3
pipe(2, Number.min(7)); // 2
pipe(4, Number.min(4)); // 4
```

### mul

```ts
function Number.mul(target: number, source: number): number
```

Multiplies `target` by `source` and returns the result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.mul(5, 3); // 15
Number.mul(7, 2); // 14
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.mul(3)); // 15
pipe(7, Number.mul(2)); // 14
```

### or

```ts
function Number.or<T, U>(target: T, or: U): Extract<T, number> | U
```

Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.or(42, 0); // 42
Number.or(NaN, 0); // 0
Number.or(Infinity, 0); // 0
Number.or("hello", 0); // 0
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.or(0)); // 42
pipe(NaN, Number.or(0)); // 0
pipe(Infinity, Number.or(0)); // 0
pipe("hello", Number.or(0)); // 0
```

### orElse

```ts
function Number.orElse<T, U>(
    target: T,
    orElse: (value: NoInfer<T>) => U,
): Extract<T, number> | U
```

Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.orElse(42, () => 0); // 42
Number.orElse(NaN, () => 0); // 0
Number.orElse(Infinity, (val) => `Not finite: ${val}`); // "Not finite: Infinity"
Number.orElse("hello", (val) => val.length); // 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(
    42,
    Number.orElse(() => 0),
); // 42

pipe(
    NaN,
    Number.orElse(() => 0),
); // 0

pipe(
    Infinity,
    Number.orElse((val) => `Not finite: ${val}`),
); // "Not finite: Infinity"

pipe(
    "hello",
    Number.orElse((val) => val.length),
); // 5
```

### orThrow

```ts
function Number.orThrow<T>(target: T): Extract<T, number>
```

Returns the numeric value of `target` if it's a finite number, otherwise throws an error.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.orThrow(42); // 42
Number.orThrow(NaN); // throws FnError
Number.orThrow(Infinity); // throws FnError
Number.orThrow("hello"); // throws FnError
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.orThrow()); // 42
pipe(NaN, Number.orThrow()); // throws FnError
pipe(Infinity, Number.orThrow()); // throws FnError
pipe("hello", Number.orThrow()); // throws FnError
```

### randomInt

```ts
function Number.randomInt(start: number, end: number): number
```

Returns a random integer within the range between `start` and `end` (inclusive). The order of `start` and `end` does not matter.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.randomInt(1, 10); // random integer between 1 and 10
Number.randomInt(10, 1); // random integer between 1 and 10
Number.randomInt(0, 5); // random integer between 0 and 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(1, Number.randomInt(10)); // random integer between 1 and 10
pipe(10, Number.randomInt(1)); // random integer between 1 and 10
pipe(0, Number.randomInt(5)); // random integer between 0 and 5
```

### round

```ts
function Number.round(target: number): number
```

Returns `target` rounded to the nearest integer.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.round(4.3); // 4
Number.round(4.7); // 5
Number.round(-4.3); // -4
Number.round(-4.7); // -5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(4.3, Number.round()); // 4
pipe(4.7, Number.round()); // 5
pipe(-4.3, Number.round()); // -4
pipe(-4.7, Number.round()); // -5
```

### sub

```ts
function Number.sub(target: number, source: number): number
```

Subtracts `source` from `target` and returns the result.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.sub(10, 3); // 7
Number.sub(5, 8); // -3
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(10, Number.sub(3)); // 7
pipe(5, Number.sub(8)); // -3
```

### toFixed

```ts
function Number.toFixed(target: number, length: number): string
```

Returns a string representation of `target` formatted with exactly `length` digits after the decimal point.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.toFixed(3.14159, 2); // "3.14"
Number.toFixed(42, 3); // "42.000"
Number.toFixed(1.005, 2); // "1.01"
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3.14159, Number.toFixed(2)); // "3.14"
pipe(42, Number.toFixed(3)); // "42.000"
pipe(1.005, Number.toFixed(2)); // "1.01"
```

### toString

```ts
function Number.toString(target: number): string
```

Converts `target` to a string representation.

#### Example

```ts [data-first]
import { Number } from "@monstermann/number";

Number.toString(42); // "42"
Number.toString(3.14); // "3.14"
Number.toString(NaN); // "NaN"
Number.toString(Infinity); // "Infinity"
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.toString()); // "42"
pipe(3.14, Number.toString()); // "3.14"
pipe(NaN, Number.toString()); // "NaN"
pipe(Infinity, Number.toString()); // "Infinity"
```
