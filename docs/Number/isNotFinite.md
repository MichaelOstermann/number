# isNotFinite

```ts
function Number.isNotFinite(target: number): boolean
```

Returns `true` if `target` is not a finite number, otherwise `false`.

## Example

::: code-group

```ts [data-first]
import { Number } from "@monstermann/number";

Number.isNotFinite(Infinity); // true
Number.isNotFinite(-Infinity); // true
Number.isNotFinite(NaN); // true
Number.isNotFinite(42); // false
Number.isNotFinite(3.14); // false
```

```ts [data-last]
import { Number } from "@monstermann/number";

pipe(Infinity, Number.isNotFinite()); // true
pipe(-Infinity, Number.isNotFinite()); // true
pipe(NaN, Number.isNotFinite()); // true
pipe(42, Number.isNotFinite()); // false
pipe(3.14, Number.isNotFinite()); // false
```

:::
