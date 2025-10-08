import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        event: resolve(__dirname, "src/event_page/index.html"),
        login: resolve(__dirname, "src/login_page/index.html"),
        home: resolve(__dirname, "src/home_page/index.html"
        ),
      },
    },
  },
});
