# lt

```ts
function Number.lt(target: number, source: number): boolean
```

Returns `true` if `target` is less than `source`, otherwise `false`.

## Example

::: code-group

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

:::
