import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.floor(target)`
 *
 * Returns the largest integer less than or equal to `target`.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.floor(4.7); // 4
 * Number.floor(-4.3); // -5
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(4.7, Number.floor()); // 4
 * pipe(-4.3, Number.floor()); // -5
 * ```
 */
export const floor: {
    (): (target: number) => number
    (target: number): number
} = dfdlT((target: number): number => {
    return Math.floor(target)
}, 1)
