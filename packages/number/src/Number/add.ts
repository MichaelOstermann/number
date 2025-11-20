import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.add(target, source)`
 *
 * Adds `source` to `target` and returns the result.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.add(5, 3); // 8
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(5, Number.add(3)); // 8
 * ```
 */
export const add: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a + b
}, 2)
