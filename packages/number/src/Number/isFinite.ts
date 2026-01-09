import { dfdlT } from "@monstermann/dfdl"

/**
 * # isFinite
 *
 * ```ts
 * function Number.isFinite(target: number): boolean
 * ```
 *
 * Returns `true` if `target` is a finite number, otherwise `false`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.isFinite(42); // true
 * Number.isFinite(3.14); // true
 * Number.isFinite(Infinity); // false
 * Number.isFinite(-Infinity); // false
 * Number.isFinite(NaN); // false
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.isFinite()); // true
 * pipe(3.14, Number.isFinite()); // true
 * pipe(Infinity, Number.isFinite()); // false
 * pipe(-Infinity, Number.isFinite()); // false
 * pipe(NaN, Number.isFinite()); // false
 * ```
 *
 */
export const isFinite: {
    (): (target: number) => boolean
    (target: number): boolean
} = dfdlT((target: number): boolean => {
    return Number.isFinite(target)
}, 1)
