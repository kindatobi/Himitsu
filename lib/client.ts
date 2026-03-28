import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

export const api = treaty<App>(
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL!
    : "localhost:3000",
).api;
