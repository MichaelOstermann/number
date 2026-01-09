# finiteOrElse

```ts
function Number.finiteOrElse<T, U>(
    target: T,
    orElse: (value: NoInfer<T>) => U,
): Extract<T, number> | U
```

Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.finiteOrElse(42, () => 0); // 42
Number.finiteOrElse(3.14, () => 0); // 3.14
Number.finiteOrElse(-7, () => 0); // -7
Number.finiteOrElse(NaN, () => 0); // 0
Number.finiteOrElse(Infinity, (val) => 100); // 100
Number.finiteOrElse("hello", (val) => val.length); // 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(
    42,
    Number.finiteOrElse(() => 0),
); // 42

pipe(
    3.14,
    Number.finiteOrElse(() => 0),
); // 3.14

pipe(
    -7,
    Number.finiteOrElse(() => 0),
); // -7

pipe(
    NaN,
    Number.finiteOrElse(() => 0),
); // 0

pipe(
    Infinity,
    Number.finiteOrElse((val) => 100),
); // 100

pipe(
    "hello",
    Number.finiteOrElse((val) => val.length),
); // 5
```

:::
