# max

```ts
function Number.max(target: number, source: number): number
```

Returns the larger of `target` and `source`.

## Example

::: code-group

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

:::
