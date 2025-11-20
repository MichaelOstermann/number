import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.exp(target, source)`
 *
 * Raises `target` to the power of `source` and returns the result.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.exp(2, 3); // 8
 * Number.exp(5, 2); // 25
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(2, Number.exp(3)); // 8
 * pipe(5, Number.exp(2)); // 25
 * ```
 */
export const exp: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a ** b
}, 2)
