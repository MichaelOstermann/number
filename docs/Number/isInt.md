# isInt

```ts
function Number.isInt(target: number): boolean
```

Returns `true` if `target` is an integer, otherwise `false`.

## Example

::: code-group

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

:::
