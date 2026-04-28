import { createLucideIcon } from "lucide-react";

// `lucide-react@1.x` doesn't ship brand icons like Twitter/X.
// Define a Lucide-style Twitter bird locally.
export const Twitter = createLucideIcon("Twitter", [
    [
        "path",
        {
            d: "M22 5.8c-.8.35-1.6.6-2.5.7.9-.55 1.6-1.4 1.9-2.45-.85.5-1.8.85-2.8 1.05A4.2 4.2 0 0 0 12 8.5c0 .35.04.7.12 1.02-3.6-.18-6.8-1.9-8.95-4.55A4.2 4.2 0 0 0 4.5 10.1c-.7-.02-1.35-.2-1.92-.53v.05c0 2.02 1.45 3.7 3.36 4.08-.35.1-.75.16-1.15.16-.28 0-.55-.03-.8-.08.55 1.7 2.1 2.95 4 2.98A8.4 8.4 0 0 1 2 18.2 11.85 11.85 0 0 0 8.4 20c7.7 0 11.9-6.4 11.9-11.95 0-.18 0-.36-.02-.55.82-.58 1.55-1.32 2.12-2.15z",
            key: "twitter-path",
        },
    ],
]);
