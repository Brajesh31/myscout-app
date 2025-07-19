// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "MyScout",
      titleTemplate: "%s - MyScout",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "A plataforma de gestão escoteira" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: ["@primevue/nuxt-module", "nuxt-lucide-icons"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
  primevue: {
    autoImport: true,
    options: {
      unstyled: false,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "system",
        },
      },
    },
  },
  lucide: {
    namePrefix: "Icon",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
