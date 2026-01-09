import { dfdlT } from "@monstermann/dfdl"

/**
 * # floatOrThrow
 *
 * ```ts
 * function Number.floatOrThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's a finite floating-point number (not an integer), otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.floatOrThrow(3.14); // 3.14
 * Number.floatOrThrow(0.5); // 0.5
 * Number.floatOrThrow(42); // throws Error
 * Number.floatOrThrow(NaN); // throws Error
 * Number.floatOrThrow(Infinity); // throws Error
 * Number.floatOrThrow("hello"); // throws Error
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(3.14, Number.floatOrThrow()); // 3.14
 * pipe(0.5, Number.floatOrThrow()); // 0.5
 * pipe(42, Number.floatOrThrow()); // throws Error
 * pipe(NaN, Number.floatOrThrow()); // throws Error
 * pipe(Infinity, Number.floatOrThrow()); // throws Error
 * pipe("hello", Number.floatOrThrow()); // throws Error
 * ```
 *
 */
export const floatOrThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (Number.isFinite(target) && !Number.isInteger(target)) return target as Extract<T, number>
    throw new Error("Number.floatOrThrow: Value is not a floating-point number.")
}, 1)
