import { dfdlT } from "@monstermann/dfdl"

/**
 * # ceil
 *
 * ```ts
 * function Number.ceil(target: number): number
 * ```
 *
 * Returns the smallest integer greater than or equal to `target`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.ceil(4.3); // 5
 * Number.ceil(-4.7); // -4
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(4.3, Number.ceil()); // 5
 * pipe(-4.7, Number.ceil()); // -4
 * ```
 *
 */
export const ceil: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.ceil(target)
}, 1)
