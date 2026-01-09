import { dfdlT } from "@monstermann/dfdl"

/**
 * # orElse
 *
 * ```ts
 * function Number.orElse<T, U>(
 *     target: T,
 *     orElse: (value: Exclude<T, number>) => U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a number, otherwise calls the `orElse` function with the original value and returns its result.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.orElse(42, () => 0); // 42
 * Number.orElse(NaN, () => 0); // NaN
 * Number.orElse(Infinity, (val) => 100); // Infinity
 * Number.orElse("hello", (val) => val.length); // 5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(
 *     42,
 *     Number.orElse(() => 0),
 * ); // 42
 *
 * pipe(
 *     NaN,
 *     Number.orElse(() => 0),
 * ); // NaN
 *
 * pipe(
 *     Infinity,
 *     Number.orElse((val) => 100),
 * ); // Infinity
 *
 * pipe(
 *     "hello",
 *     Number.orElse((val) => val.length),
 * ); // 5
 * ```
 *
 */
export const orElse: {
    <T, U>(orElse: (value: Exclude<T, number>) => U): (target: T) => Extract<T, number> | U
    <T, U>(target: T, orElse: (value: Exclude<T, number>) => U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, orElse: (value: Exclude<T, number>) => U): Extract<T, number> | U => {
    return typeof target === "number"
        ? target as Extract<T, number>
        : orElse(target as Exclude<T, number>)
}, 2)
