import { defineVitestConfig } from "@nuxt/test-utils/config";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [vue()],
  test: {
    exclude: [...configDefaults.exclude, "tests/e2e/*"],
    globals: true,
    environment: "jsdom",
  },
});
