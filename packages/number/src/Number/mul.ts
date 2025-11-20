import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.mul(target, source)`
 *
 * Multiplies `target` by `source` and returns the result.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.mul(5, 3); // 15
 * Number.mul(7, 2); // 14
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(5, Number.mul(3)); // 15
 * pipe(7, Number.mul(2)); // 14
 * ```
 */
export const mul: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a * b
}, 2)
