import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/number/src/Number",
    }),
    flat({
        entries: "./packages/number/src",
        include: ["*", "Number/index.js"],
    }),
])
