# toFixed

`Number.toFixed(target, length)`

Returns a string representation of `target` formatted with exactly `length` digits after the decimal point.

## Example

::: code-group

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

:::
