# exp

`Number.exp(target, source)`

Raises `target` to the power of `source` and returns the result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.exp(2, 3); // 8
Number.exp(5, 2); // 25
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(2, Number.exp(3)); // 8
pipe(5, Number.exp(2)); // 25
```

:::
