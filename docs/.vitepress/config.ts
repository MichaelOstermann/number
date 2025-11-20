import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/number/",
    description: "Functional utilities for numbers.",
    title: "number",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            {
                base: "/Number/",
                text: "Number",
                items: [
                    { link: "create", text: "create" },
                    { link: "add", text: "add" },
                    { link: "ceil", text: "ceil" },
                    { link: "clamp", text: "clamp" },
                    { link: "div", text: "div" },
                    { link: "exp", text: "exp" },
                    { link: "floor", text: "floor" },
                    { link: "gt", text: "gt" },
                    { link: "gte", text: "gte" },
                    { link: "is", text: "is" },
                    { link: "isBigInt", text: "isBigInt" },
                    { link: "isFinite", text: "isFinite" },
                    { link: "isFloat", text: "isFloat" },
                    { link: "isInRange", text: "isInRange" },
                    { link: "isInt", text: "isInt" },
                    { link: "isNotFinite", text: "isNotFinite" },
                    { link: "limitPrecision", text: "limitPrecision" },
                    { link: "lt", text: "lt" },
                    { link: "lte", text: "lte" },
                    { link: "max", text: "max" },
                    { link: "min", text: "min" },
                    { link: "mul", text: "mul" },
                    { link: "or", text: "or" },
                    { link: "orElse", text: "orElse" },
                    { link: "orThrow", text: "orThrow" },
                    { link: "randomInt", text: "randomInt" },
                    { link: "round", text: "round" },
                    { link: "sub", text: "sub" },
                    { link: "toFixed", text: "toFixed" },
                    { link: "toString", text: "toString" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/number" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
