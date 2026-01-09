# orThrow

```ts
function Number.orThrow<T>(target: T): Extract<T, number>
```

Returns the numeric value of `target` if it's a finite number, otherwise throws an error.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.orThrow(42); // 42
Number.orThrow(NaN); // throws FnError
Number.orThrow(Infinity); // throws FnError
Number.orThrow("hello"); // throws FnError
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.orThrow()); // 42
pipe(NaN, Number.orThrow()); // throws FnError
pipe(Infinity, Number.orThrow()); // throws FnError
pipe("hello", Number.orThrow()); // throws FnError
```

:::
