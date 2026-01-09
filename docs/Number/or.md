# or

```ts
function Number.or<T, U>(target: T, or: U): Extract<T, number> | U
```

Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.or(42, 0); // 42
Number.or(NaN, 0); // 0
Number.or(Infinity, 0); // 0
Number.or("hello", 0); // 0
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.or(0)); // 42
pipe(NaN, Number.or(0)); // 0
pipe(Infinity, Number.or(0)); // 0
pipe("hello", Number.or(0)); // 0
```

:::
