import { dfdlT } from "@monstermann/dfdl"

/**
 * # floatOrElse
 *
 * ```ts
 * function Number.floatOrElse<T, U>(
 *     target: T,
 *     orElse: (value: NoInfer<T>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a finite floating-point number (not an integer), otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.floatOrElse(3.14, () => 0); // 3.14
 * Number.floatOrElse(0.5, () => 0); // 0.5
 * Number.floatOrElse(42, () => 0); // 0
 * Number.floatOrElse(NaN, () => 0); // 0
 * Number.floatOrElse(Infinity, (val) => 100); // 100
 * Number.floatOrElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(
 *     3.14,
 *     Number.floatOrElse(() => 0),
 * ); // 3.14
 *
 * pipe(
 *     0.5,
 *     Number.floatOrElse(() => 0),
 * ); // 0.5
 *
 * pipe(
 *     42,
 *     Number.floatOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     NaN,
 *     Number.floatOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     Infinity,
 *     Number.floatOrElse((val) => 100),
 * ); // 100
 *
 * pipe(
 *     "hello",
 *     Number.floatOrElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const floatOrElse: {
    <T, U>(orElse: (value: NoInfer<T>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U => {
    return Number.isFinite(target) && !Number.isInteger(target)
        ? target as Extract<T, number>
        : orElse(target)
}, 2)
