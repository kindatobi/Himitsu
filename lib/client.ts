import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

export const api = treaty<App>(
  process.env.NODE_ENV === "production"
    ? window.location.origin
    : "localhost:3000",
).api;
