# gt

```ts
function Number.gt(target: number, source: number): boolean
```

Returns `true` if `target` is greater than `source`, otherwise `false`.

## Example

::: code-group

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

:::
