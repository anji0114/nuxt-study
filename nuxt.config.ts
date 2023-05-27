// https://nuxt.com/docs/api/configuration/nuxt-config

const { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
  srcDir: "src/",
  runtimeConfig: {
    apiKey: MICROCMS_API_KEY,
    serviceDomain: MICROCMS_SERVICE_DOMAIN,
  },
  css: ["~/assets/css/reset.css", "~/assets/css/style.css"],
});
