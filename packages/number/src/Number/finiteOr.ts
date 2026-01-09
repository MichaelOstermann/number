import { dfdlT } from "@monstermann/dfdl"

/**
 * # finiteOr
 *
 * ```ts
 * function Number.finiteOr<T, U>(
 *     target: T,
 *     or: U,
 * ): Extract<T, number> | U
 * ```
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.finiteOr(42, 0); // 42
 * Number.finiteOr(3.14, 0); // 3.14
 * Number.finiteOr(-7, 0); // -7
 * Number.finiteOr(NaN, 0); // 0
 * Number.finiteOr(Infinity, 0); // 0
 * Number.finiteOr("hello", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.finiteOr(0)); // 42
 * pipe(3.14, Number.finiteOr(0)); // 3.14
 * pipe(-7, Number.finiteOr(0)); // -7
 * pipe(NaN, Number.finiteOr(0)); // 0
 * pipe(Infinity, Number.finiteOr(0)); // 0
 * pipe("hello", Number.finiteOr(0)); // 0
 * ```
 *
 */
export const finiteOr: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : or
}, 2)
