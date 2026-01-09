import type { IsFloat } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type Float<T> = T extends unknown
    ? number extends T
        ? T
        : IsFloat<T> extends true
            ? T
            : never
    : never

/**
 * # isFloat
 *
 * ```ts
 * function Number.isFloat<T>(value: T): value is Float<T>
 * ```
 *
 * Returns `true` if `value` is a finite floating-point number (not an integer), otherwise `false`. This function acts as a type guard.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.isFloat(3.14); // true
 * Number.isFloat(0.5); // true
 * Number.isFloat(42); // false
 * Number.isFloat(NaN); // false
 * Number.isFloat(Infinity); // false
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(3.14, Number.isFloat()); // true
 * pipe(0.5, Number.isFloat()); // true
 * pipe(42, Number.isFloat()); // false
 * pipe(NaN, Number.isFloat()); // false
 * pipe(Infinity, Number.isFloat()); // false
 * ```
 *
 */
export const isFloat: {
    <T>(): (value: T) => value is Float<T>
    <T>(value: T): value is Float<T>
} = dfdlT(<T>(value: T): value is Float<T> => {
    return Number.isFinite(value)
        && !Number.isInteger(value)
}, 1)
