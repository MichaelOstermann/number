import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.is(target)`
 *
 * Returns `true` if `target` is a number, otherwise `false`. This function acts as a type guard.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.is(42); // true
 * Number.is(3.14); // true
 * Number.is(NaN); // true
 * Number.is(Infinity); // true
 * Number.is("123"); // false
 * Number.is(null); // false
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.is()); // true
 * pipe(3.14, Number.is()); // true
 * pipe(NaN, Number.is()); // true
 * pipe(Infinity, Number.is()); // true
 * pipe("123", Number.is()); // false
 * pipe(null, Number.is()); // false
 * ```
 */
export const is: {
    (): (target: unknown) => target is number
    (target: unknown): target is number
} = dfdlT((target: unknown): target is number => {
    return typeof target === "number"
}, 1)
