import { dfdlT } from "@monstermann/dfdl"

/**
 * # round
 *
 * ```ts
 * function Number.round(target: number): number
 * ```
 *
 * Returns `target` rounded to the nearest integer.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.round(4.3); // 4
 * Number.round(4.7); // 5
 * Number.round(-4.3); // -4
 * Number.round(-4.7); // -5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(4.3, Number.round()); // 4
 * pipe(4.7, Number.round()); // 5
 * pipe(-4.3, Number.round()); // -4
 * pipe(-4.7, Number.round()); // -5
 * ```
 *
 */
export const round: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.round(target)
}, 1)
