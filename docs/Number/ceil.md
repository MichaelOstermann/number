# ceil

```ts
function Number.ceil(target: number): number
```

Returns the smallest integer greater than or equal to `target`.

## Example

::: code-group

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

:::
