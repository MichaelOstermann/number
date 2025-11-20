# isFloat

`Number.isFloat(value)`

Returns `true` if `value` is a finite floating-point number (not an integer), otherwise `false`. This function acts as a type guard.

## Example

::: code-group

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

:::
