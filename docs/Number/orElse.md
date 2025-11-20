# orElse

`Number.orElse(target, orElse)`

Returns the numeric value of `target` if it's a finite number, otherwise calls the `orElse` function with the original value and returns its result.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.orElse(42, () => 0); // 42
Number.orElse(NaN, () => 0); // 0
Number.orElse(Infinity, (val) => `Not finite: ${val}`); // "Not finite: Infinity"
Number.orElse("hello", (val) => val.length); // 5
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(
    42,
    Number.orElse(() => 0),
); // 42

pipe(
    NaN,
    Number.orElse(() => 0),
); // 0

pipe(
    Infinity,
    Number.orElse((val) => `Not finite: ${val}`),
); // "Not finite: Infinity"

pipe(
    "hello",
    Number.orElse((val) => val.length),
); // 5
```

:::
