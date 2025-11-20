/**
 * `Number.create(target)`
 *
 * An alias for `Number(target)`.
 *
 * ## Example
 *
 * ## Example
 *
 * ```ts
 * import { Number } from "@monstermann/number";
 *
 * Number.create("10"); // 10
 * ```
 */
export function create(target?: any): number {
    return globalThis.Number(target)
}
