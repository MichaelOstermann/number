# mul

`Number.mul(target, source)`

Multiplies `target` by `source` and returns the result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.mul(5, 3); // 15
Number.mul(7, 2); // 14
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.mul(3)); // 15
pipe(7, Number.mul(2)); // 14
```

:::
