import type { IsInteger } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type Int<T> = T extends unknown
    ? number extends T
        ? T
        : IsInteger<T> extends true
            ? T
            : never
    : never

/**
 * # isInt
 *
 * ```ts
 * function Number.isInt<T>(value: T): value is Int<T>
 * ```
 *
 * Returns `true` if `value` is an integer, otherwise `false`. This function acts as a type guard.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.isInt(42); // true
 * Number.isInt(-7); // true
 * Number.isInt(0); // true
 * Number.isInt(3.14); // false
 * Number.isInt(NaN); // false
 * Number.isInt(Infinity); // false
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.isInt()); // true
 * pipe(-7, Number.isInt()); // true
 * pipe(0, Number.isInt()); // true
 * pipe(3.14, Number.isInt()); // false
 * pipe(NaN, Number.isInt()); // false
 * pipe(Infinity, Number.isInt()); // false
 * ```
 *
 */
export const isInt: {
    <T>(): (value: T) => value is Int<T>
    <T>(value: T): value is Int<T>
} = dfdlT(<T>(value: T): value is Int<T> => {
    return Number.isInteger(value)
}, 1)
