import { dfdlT } from "@monstermann/dfdl"

/**
 * `Number.or(target, or)`
 *
 * Returns the numeric value of `target` if it's a finite number, otherwise returns the fallback value `or`.
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.or(42, 0); // 42
 * Number.or(NaN, 0); // 0
 * Number.or(Infinity, 0); // 0
 * Number.or("hello", 0); // 0
 * ```
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.or(0)); // 42
 * pipe(NaN, Number.or(0)); // 0
 * pipe(Infinity, Number.or(0)); // 0
 * pipe("hello", Number.or(0)); // 0
 * ```
 */
export const or: {
    <U>(or: U): <T>(target: T) => Extract<T, number> | U
    <T, U>(target: T, or: U): Extract<T, number> | U
} = dfdlT(<T, U>(target: T, or: U): Extract<T, number> | U => {
    return Number.isFinite(target)
        ? target as Extract<T, number>
        : or
}, 2)
