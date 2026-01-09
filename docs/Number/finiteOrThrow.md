# finiteOrThrow

```ts
function Number.finiteOrThrow<T>(target: T): Extract<T, number>
```

Returns the numeric value of `target` if it's a finite number, otherwise throws an error.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.finiteOrThrow(42); // 42
Number.finiteOrThrow(3.14); // 3.14
Number.finiteOrThrow(-7); // -7
Number.finiteOrThrow(NaN); // throws Error
Number.finiteOrThrow(Infinity); // throws Error
Number.finiteOrThrow("hello"); // throws Error
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(42, Number.finiteOrThrow()); // 42
pipe(3.14, Number.finiteOrThrow()); // 3.14
pipe(-7, Number.finiteOrThrow()); // -7
pipe(NaN, Number.finiteOrThrow()); // throws Error
pipe(Infinity, Number.finiteOrThrow()); // throws Error
pipe("hello", Number.finiteOrThrow()); // throws Error
```

:::
