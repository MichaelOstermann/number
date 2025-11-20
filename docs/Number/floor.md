# floor

`Number.floor(target)`

Returns the largest integer less than or equal to `target`.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.floor(4.7); // 4
Number.floor(-4.3); // -5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(4.7, Number.floor()); // 4
pipe(-4.3, Number.floor()); // -5
```

:::
