import { createDirectus, rest } from "@directus/sdk";

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
const directusToken = process.env.DIRECTUS_TOKEN;

console.log(directusUrl);
const directus = createDirectus(directusUrl).with(
  rest({
    auth: {
      staticToken: directusToken,
    },
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  })
);

export default directus;
