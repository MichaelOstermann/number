import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.isNotFinite(target)`
 *
 * Returns `true` if `target` is not a finite number, otherwise `false`.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.isNotFinite(Infinity); // true
 * Number.isNotFinite(-Infinity); // true
 * Number.isNotFinite(NaN); // true
 * Number.isNotFinite(42); // false
 * Number.isNotFinite(3.14); // false
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(Infinity, Number.isNotFinite()); // true
 * pipe(-Infinity, Number.isNotFinite()); // true
 * pipe(NaN, Number.isNotFinite()); // true
 * pipe(42, Number.isNotFinite()); // false
 * pipe(3.14, Number.isNotFinite()); // false
 * ```
 */
export const isNotFinite: {
    (): (target: number) => boolean
    (target: number): boolean
} = dfdlT((target: number): boolean => {
    return !Number.isFinite(target)
}, 1)
