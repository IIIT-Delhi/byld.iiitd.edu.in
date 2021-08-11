import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";
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
    adapter: adapter(),
    target: "#svelte",
    vite: {
      plugins: [yaml()],
    },
  },
};

export default config;
