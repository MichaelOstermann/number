import { dfdlT } from "@monstermann/dfdl"

/**
 * # randomInt
 *
 * ```ts
 * function Number.randomInt(start: number, end: number): number
 * ```
 *
 * Returns a random integer within the range between `start` and `end` (inclusive). The order of `start` and `end` does not matter.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Number } from "@monstermann/number";
 *
 * Number.randomInt(1, 10); // random integer between 1 and 10
 * Number.randomInt(10, 1); // random integer between 1 and 10
 * Number.randomInt(0, 5); // random integer between 0 and 5
 * ```
 *
 * ```ts [data-last]
 * import { Number } from "@monstermann/number";
 *
 * pipe(1, Number.randomInt(10)); // random integer between 1 and 10
 * pipe(10, Number.randomInt(1)); // random integer between 1 and 10
 * pipe(0, Number.randomInt(5)); // random integer between 0 and 5
 * ```
 *
 */
export const randomInt: {
    (end: number): (start: number) => number
    (start: number, end: number): number
} = dfdlT((start: number, end: number): number => {
    const a = Math.ceil(Math.min(start, end))
    const b = Math.floor(Math.max(start, end))
    return Math.floor(Math.random() * (b - a + 1) + a)
}, 2)
