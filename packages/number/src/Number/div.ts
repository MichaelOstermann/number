import { dfdlT } from "@monstermann/dfdl"

/**
 * # div
 *
 * ```ts
 * function Number.div(target: number, source: number): number
 * ```
 *
 * Divides `target` by `source` and returns the result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.div(10, 2); // 5
 * Number.div(15, 3); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(10, Number.div(2)); // 5
 * pipe(15, Number.div(3)); // 5
 * ```
 *
 */
export const div: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a / b
}, 2)
