import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mern-ecommercewebsite-1.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/user": {
        target: "https://mern-ecommercewebsite-1.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
