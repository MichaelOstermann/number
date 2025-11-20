# sub

`Number.sub(target, source)`

Subtracts `source` from `target` and returns the result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.sub(10, 3); // 7
Number.sub(5, 8); // -3
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(10, Number.sub(3)); // 7
pipe(5, Number.sub(8)); // -3
```

:::
