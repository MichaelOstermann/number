import { dfdlT } from "@monstermann/dfdl"

/**
 * # min
 *
 * ```ts
 * function Number.min(target: number, source: number): number
 * ```
 *
 * Returns the smaller of `target` and `source`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.min(5, 3); // 3
 * Number.min(2, 7); // 2
 * Number.min(4, 4); // 4
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(5, Number.min(3)); // 3
 * pipe(2, Number.min(7)); // 2
 * pipe(4, Number.min(4)); // 4
 * ```
 *
 */
export const min: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return Math.min(a, b)
}, 2)
