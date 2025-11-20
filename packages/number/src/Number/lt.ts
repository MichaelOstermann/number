import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.lt(target, source)`
 *
 * Returns `true` if `target` is less than `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.lt(3, 5); // true
 * Number.lt(7, 2); // false
 * Number.lt(4, 4); // false
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(3, Number.lt(5)); // true
 * pipe(7, Number.lt(2)); // false
 * pipe(4, Number.lt(4)); // false
 * ```
 */
export const lt: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a < b
}, 2)
