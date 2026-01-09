# limitPrecision

```ts
function Number.limitPrecision(
    target: number,
    precision: number,
): number
```

Rounds `target` to the specified number of decimal places defined by `precision`.

## Example

::: code-group

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

:::
