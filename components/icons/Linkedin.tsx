import { createLucideIcon } from "lucide-react";

// `lucide-react@1.x` doesn't ship brand icons like LinkedIn.
// Define a Lucide-style LinkedIn glyph locally.
export const Linkedin = createLucideIcon("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3z",
            key: "linkedin-path-1",
        },
    ],
    [
        "rect",
        {
            x: "2",
            y: "9",
            width: "4",
            height: "12",
            key: "linkedin-rect",
        },
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "linkedin-circle",
        },
    ],
]);
