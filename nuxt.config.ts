// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@prisma/nuxt"],
  prisma: {
    formatSchema: false,
    installClient: false,
    installCLI: false,
  },
  typescript: {
    typeCheck: true,
  },
});
