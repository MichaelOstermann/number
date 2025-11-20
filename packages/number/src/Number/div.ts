import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.div(target, source)`
 *
 * Divides `target` by `source` and returns the result.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.div(10, 2); // 5
 * Number.div(15, 3); // 5
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(10, Number.div(2)); // 5
 * pipe(15, Number.div(3)); // 5
 * ```
 */
export const div: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a / b
}, 2)
