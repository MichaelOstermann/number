import { dfdlT } from "@monstermann/dfdl"

/**
 * # orThrow
 *
 * ```ts
 * function Number.orThrow<T>(target: T): Extract<T, number>
 * ```
 *
 * Returns the numeric value of `target` if it's a number, otherwise throws an error.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.orThrow(42); // 42
 * Number.orThrow(NaN); // NaN
 * Number.orThrow(Infinity); // Infinity
 * Number.orThrow("hello"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(42, Number.orThrow()); // 42
 * pipe(NaN, Number.orThrow()); // NaN
 * pipe(Infinity, Number.orThrow()); // Infinity
 * pipe("hello", Number.orThrow()); // throws FnError
 * ```
 *
 */
export const orThrow: {
    (): <T>(target: T) => Extract<T, number>
    <T>(target: T): Extract<T, number>
} = dfdlT(<T>(target: T): Extract<T, number> => {
    if (typeof target === "number") return target as Extract<T, number>
    throw new Error("Number.orThrow: Value is not a number.")
}, 1)
