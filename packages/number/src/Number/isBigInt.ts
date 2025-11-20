import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.isBigInt(target)`
 *
 * Returns `true` if `target` is a bigint, otherwise `false`. This function acts as a type guard.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.isBigInt(123n); // true
 * Number.isBigInt(123); // false
 * Number.isBigInt("123"); // false
 * Number.isBigInt(null); // false
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(123n, Number.isBigInt()); // true
 * pipe(123, Number.isBigInt()); // false
 * pipe("123", Number.isBigInt()); // false
 * pipe(null, Number.isBigInt()); // false
 * ```
 */
export const isBigInt: {
    (): (target: unknown) => target is bigint
    (target: unknown): target is bigint
} = dfdlT((target: unknown): target is bigint => {
    return typeof target === "bigint"
}, 1)
