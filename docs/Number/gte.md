# gte

`Number.gte(target, source)`

Returns `true` if `target` is greater than or equal to `source`, otherwise `false`.

## Example

::: code-group

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

:::
