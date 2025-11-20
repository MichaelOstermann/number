import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.sub(target, source)`
 *
 * Subtracts `source` from `target` and returns the result.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.sub(10, 3); // 7
 * Number.sub(5, 8); // -3
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(10, Number.sub(3)); // 7
 * pipe(5, Number.sub(8)); // -3
 * ```
 */
export const sub: {
    (source: number): (target: number) => number
    (target: number, source: number): number
} = dfdlT((a: number, b: number): number => {
    return a - b
}, 2)
