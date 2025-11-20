# add

`Number.add(target, source)`

Adds `source` to `target` and returns the result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.add(5, 3); // 8
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.add(3)); // 8
```

:::
