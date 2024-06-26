import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // csp({
    //   directives:{
    //     'frame-src' : ['https://connect-js.stripe.com','https://js.stripe.com'],
    //     'img-src' : ['https://*.stripe.com'],
    //     'style-src' : ['sha256-0hAheEzaMe6uXIKV4EehS9pu1am1lj/KnnzrOYqckXk='],
    //   }
    // })
  ],
});
