/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path, { resolve } from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

function addEntryFiles() {
  const componentsDir = path.join(__dirname, "src/components");

  // Get all directories in src/components
  const componentDirs = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Initialize entry object with index.ts entry
  const entry = {
    index: path.resolve(__dirname, "src/index.ts"),
  };

  // Check each component directory for an index.ts file
  for (const componentDir of componentDirs) {
    const indexPath = path.join(componentsDir, componentDir, "index.ts");
    if (fs.existsSync(indexPath)) {
      entry[componentDir] = path.resolve(
        __dirname,
        `src/components/${componentDir}/index.ts`
      );
    }
  }

  return entry;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      // beforeWriteFile: (filePath, content) => {
      //   console.log(filePath);
      // },
    }),
    // chunkSplitPlugin({
    //   strategy: "unbundle",
    //   customChunk: (args) => {
    //     // files into src directory is export in single files
    //     let { file, id, moduleId, root } = args;
    //     if (file.startsWith("src/")) {
    //       file = file.substring(4);
    //       file = file.replace(/\.[^.$]+$/, "");
    //       return file;
    //     }
    //     return null;
    //   },
    // }),
    svgr({
      exportAsDefault: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup.ts"],
  },
  build: {
    sourcemap: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: addEntryFiles(),
      name: "blofin-ui",
      // the proper extensions will be added
      // formats: ["es", "umd"],
      formats: ["es"],
      fileName: (format) => `[name].${format}.js`,
      // fileName: (format, entryName) => {
      //   if (entryName === "index") {
      //     return `index.${format}.js`;
      //   } else {
      //     return `components/[name]/index.${format}.js`;
      //   }
      // },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
        assetFileNames: "blofin.css",
        // chunkFileNames: "[name].js",
        // manualChunks: undefined,
        // inlineDynamicImports: false,
      },
    },
  },
});
