import { dfdlT } from "@monstermann/dfdl"

/**
 * # add
 *
 * ```ts
 * function Number.add(target: number, source: number): number
 * ```
 *
 * Adds `source` to `target` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.add(5, 3); // 8
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(5, Number.add(3)); // 8
 * ```
 *
 */
export const add: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a + b
}, 2)
