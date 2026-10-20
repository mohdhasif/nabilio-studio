import { cacheLife } from "next/cache";

/** Cached so the footer stays in the static shell while the year still refreshes. */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
