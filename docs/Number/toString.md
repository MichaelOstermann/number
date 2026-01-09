# toString

```ts
function Number.toString(target: number): string
```

Converts `target` to a string representation.

## Example

::: code-group

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

:::
