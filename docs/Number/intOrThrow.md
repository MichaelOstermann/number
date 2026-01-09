# intOrThrow

```ts
function Number.intOrThrow<T>(target: T): Extract<T, number>
```

Returns the numeric value of `target` if it's an integer, otherwise throws an error.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.intOrThrow(42); // 42
Number.intOrThrow(-7); // -7
Number.intOrThrow(0); // 0
Number.intOrThrow(3.14); // throws Error
Number.intOrThrow(NaN); // throws Error
Number.intOrThrow(Infinity); // throws Error
Number.intOrThrow("hello"); // throws Error
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.intOrThrow()); // 42
pipe(-7, Number.intOrThrow()); // -7
pipe(0, Number.intOrThrow()); // 0
pipe(3.14, Number.intOrThrow()); // throws Error
pipe(NaN, Number.intOrThrow()); // throws Error
pipe(Infinity, Number.intOrThrow()); // throws Error
pipe("hello", Number.intOrThrow()); // throws Error
```

:::
