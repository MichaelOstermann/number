# orThrow

```ts
function Number.orThrow<T>(target: T): Extract<T, number>
```

Returns the numeric value of `target` if it's a number, otherwise throws an error.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.orThrow(42); // 42
Number.orThrow(NaN); // NaN
Number.orThrow(Infinity); // Infinity
Number.orThrow("hello"); // throws FnError
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.orThrow()); // 42
pipe(NaN, Number.orThrow()); // NaN
pipe(Infinity, Number.orThrow()); // Infinity
pipe("hello", Number.orThrow()); // throws FnError
```

:::
