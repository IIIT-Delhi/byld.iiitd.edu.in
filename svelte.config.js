import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import yaml from "@rollup/plugin-yaml";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({ out: "build" }),
    target: "#svelte",
    vite: {
      plugins: [yaml()],
      ssr: {
        noExternal: ["svelte-hero-icons"],
      },
    },
  },
};

export default config;
