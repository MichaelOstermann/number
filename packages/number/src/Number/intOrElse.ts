import { dfdlT } from "@monstermann/dfdl"

/**
 * # intOrElse
 *
 * ```ts
 * function Number.intOrElse<T, U>(
 *     target: T,
 *     orElse: (value: NoInfer<T>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's an integer, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.intOrElse(42, () => 0); // 42
 * Number.intOrElse(-7, () => 0); // -7
 * Number.intOrElse(3.14, () => 0); // 0
 * Number.intOrElse(NaN, () => 0); // 0
 * Number.intOrElse(Infinity, (val) => 100); // 100
 * Number.intOrElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(
 *     42,
 *     Number.intOrElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     -7,
 *     Number.intOrElse(() => 0),
 * ); // -7
 *
 * pipe(
 *     3.14,
 *     Number.intOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     NaN,
 *     Number.intOrElse(() => 0),
 * ); // 0
 *
 * pipe(
 *     Infinity,
 *     Number.intOrElse((val) => 100),
 * ); // 100
 *
 * pipe(
 *     "hello",
 *     Number.intOrElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const intOrElse: {
    <T, U>(orElse: (value: NoInfer<T>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: NoInfer<T>) => U): Extract<T, number> | U => {
    return Number.isInteger(target)
        ? target as Extract<T, number>
        : orElse(target)
}, 2)
