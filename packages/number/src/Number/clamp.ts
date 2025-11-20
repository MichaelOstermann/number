import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.clamp(value, min, max)`
 *
 * Constrains `value` to be between `min` and `max` (inclusive).
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.clamp(10, 0, 5); // 5
 * Number.clamp(-2, 0, 5); // 0
 * Number.clamp(3, 0, 5); // 3
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(10, Number.clamp(0, 5)); // 5
 * pipe(-2, Number.clamp(0, 5)); // 0
 * pipe(3, Number.clamp(0, 5)); // 3
 * ```
 */
export const clamp: {
    (min: number, max: number): (value: number) => number
    (value: number, min: number, max: number): number
} = dfdlT((value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max)
}, 3)
