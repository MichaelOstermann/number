import { dfdlT } from "@monstermann/dfdl"

/**
 * # toString
 *
 * ```ts
 * function Number.toString(target: number): string
 * ```
 *
 * Converts `target` to a string representation.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.toString(42); // "42"
 * Number.toString(3.14); // "3.14"
 * Number.toString(NaN); // "NaN"
 * Number.toString(Infinity); // "Infinity"
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.toString()); // "42"
 * pipe(3.14, Number.toString()); // "3.14"
 * pipe(NaN, Number.toString()); // "NaN"
 * pipe(Infinity, Number.toString()); // "Infinity"
 * ```
 *
 */
export const toString: {
    (): (target: number) => string
    (target: number): string
} = dfdlT((target: number): string => {
    return String(target)
}, 1)
