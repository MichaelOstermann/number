# randomInt

`Number.randomInt(start, end)`

Returns a random integer within the range between `start` and `end` (inclusive). The order of `start` and `end` does not matter.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.randomInt(1, 10); // random integer between 1 and 10
Number.randomInt(10, 1); // random integer between 1 and 10
Number.randomInt(0, 5); // random integer between 0 and 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(1, Number.randomInt(10)); // random integer between 1 and 10
pipe(10, Number.randomInt(1)); // random integer between 1 and 10
pipe(0, Number.randomInt(5)); // random integer between 0 and 5
```

:::
