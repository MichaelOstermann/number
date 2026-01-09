import { dfdlT } from "@monstermann/dfdl"

/**
 * # lte
 *
 * ```ts
 * function Number.lte(target: number, source: number): boolean
 * ```
 *
 * Returns `true` if `target` is less than or equal to `source`, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.lte(3, 5); // true
 * Number.lte(7, 2); // false
 * Number.lte(4, 4); // true
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(3, Number.lte(5)); // true
 * pipe(7, Number.lte(2)); // false
 * pipe(4, Number.lte(4)); // true
 * ```
 *
 */
export const lte: {
    (source: number): (target: number) => boolean
    (target: number, source: number): boolean
} = dfdlT((a: number, b: number): boolean => {
    return a <= b
}, 2)
