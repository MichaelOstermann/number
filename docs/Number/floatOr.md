# floatOr

```ts
function Number.floatOr<T, U>(
    target: T,
    or: U,
): Extract<T, number> | U
```

Returns the numeric value of `target` if it's a finite floating-point number (not an integer), otherwise returns the fallback value `or`.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.floatOr(3.14, 0); // 3.14
Number.floatOr(0.5, 0); // 0.5
Number.floatOr(42, 0); // 0
Number.floatOr(NaN, 0); // 0
Number.floatOr(Infinity, 0); // 0
Number.floatOr("hello", 0); // 0
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(3.14, Number.floatOr(0)); // 3.14
pipe(0.5, Number.floatOr(0)); // 0.5
pipe(42, Number.floatOr(0)); // 0
pipe(NaN, Number.floatOr(0)); // 0
pipe(Infinity, Number.floatOr(0)); // 0
pipe("hello", Number.floatOr(0)); // 0
```

:::
