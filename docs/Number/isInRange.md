# isInRange

```ts
function Number.isInRange(
    target: number,
    start: number,
    end: number,
): boolean
```

Returns `true` if `target` is within the range between `start` and `end` (inclusive), otherwise `false`. The order of `start` and `end` does not matter.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isInRange(5, 1, 10); // true
Number.isInRange(0, 1, 10); // false
Number.isInRange(5, 10, 1); // true
Number.isInRange(5, 5, 10); // true
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(5, Number.isInRange(1, 10)); // true
pipe(0, Number.isInRange(1, 10)); // false
pipe(5, Number.isInRange(10, 1)); // true
pipe(5, Number.isInRange(5, 10)); // true
```

:::
