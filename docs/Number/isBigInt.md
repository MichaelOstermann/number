# isBigInt

```ts
function Number.isBigInt(target: unknown): target is bigint
```

Returns `true` if `target` is a bigint, otherwise `false`. This function acts as a type guard.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isBigInt(123n); // true
Number.isBigInt(123); // false
Number.isBigInt("123"); // false
Number.isBigInt(null); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(123n, Number.isBigInt()); // true
pipe(123, Number.isBigInt()); // false
pipe("123", Number.isBigInt()); // false
pipe(null, Number.isBigInt()); // false
```

:::
