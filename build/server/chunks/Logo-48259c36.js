import { c as create_ssr_component } from "./index-e2d55fee.js";
var Logo_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-7h8bnr.svelte-7h8bnr{transform-origin:73% 17.5%;transition:transform .5s cubic-bezier(.64,.11,.82,1.78)}h1.svelte-7h8bnr:active svg.svelte-7h8bnr,h1.svelte-7h8bnr:focus svg.svelte-7h8bnr,h1.svelte-7h8bnr:hover svg.svelte-7h8bnr{transform:rotate(-135deg)}g.svelte-7h8bnr.svelte-7h8bnr{paint-order:stroke}path.svelte-7h8bnr.svelte-7h8bnr{fill:transparent}path.filled.svelte-7h8bnr.svelte-7h8bnr{fill:#3fada8}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundColor = "white" } = $$props;
  let { size = "md" } = $$props;
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `${``}`;
});
export { Logo as L };
