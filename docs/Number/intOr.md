# intOr

```ts
function Number.intOr<T, U>(
    target: T,
    or: U,
): Extract<T, number> | U
```

Returns the numeric value of `target` if it's an integer, otherwise returns the fallback value `or`.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.intOr(42, 0); // 42
Number.intOr(-7, 0); // -7
Number.intOr(3.14, 0); // 0
Number.intOr(NaN, 0); // 0
Number.intOr(Infinity, 0); // 0
Number.intOr("hello", 0); // 0
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.intOr(0)); // 42
pipe(-7, Number.intOr(0)); // -7
pipe(3.14, Number.intOr(0)); // 0
pipe(NaN, Number.intOr(0)); // 0
pipe(Infinity, Number.intOr(0)); // 0
pipe("hello", Number.intOr(0)); // 0
```

:::
