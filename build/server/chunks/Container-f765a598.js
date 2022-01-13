import { c as create_ssr_component, f as compute_rest_props, h as spread, i as escape_attribute_value, j as escape_object, e as each, b as escape, v as validate_component, a as add_attribute } from "./index-e2d55fee.js";
var Link = [[{ "fill-rule": "evenodd", "d": "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z", "clip-rule": "evenodd" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }]];
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "size", "solid", "class"]);
  let { src = [] } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `${src && src != [] ? `${solid ? `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { fill: "currentColor" },
    { viewBox: "0 0 20 20" },
    {
      class: escape_attribute_value(customClass)
    },
    { width: escape_attribute_value(size) },
    { height: escape_attribute_value(size) },
    escape_object($$restProps)
  ], {})}>${each(src[0] ?? [], (att) => {
    return `
        <path${spread([escape_object(att)], {})}></path>`;
  })}</svg>` : `<svg${spread([
    { xmlns: "http://www.w3.org/2000/svg" },
    { fill: "none" },
    { viewBox: "0 0 24 24" },
    { stroke: "currentColor" },
    {
      class: escape_attribute_value(customClass)
    },
    { width: escape_attribute_value(size) },
    { height: escape_attribute_value(size) },
    escape_object($$restProps)
  ], {})}>${each(src[1] ?? [], (att) => {
    return `
        <path${spread([escape_object(att)], {})}></path>`;
  })}</svg>`}` : ``}`;
});
const normalizeForId = (str) => str.replace(/[^\w]/g, "-").toLowerCase();
const DeepLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { size = "20" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${"relative flex items-center mb-5 group"}"><a class="${"absolute pr-2 opacity-0 group-hover:opacity-100 right-full transition-opacity"}" href="${"#" + escape(id)}">${validate_component(Icon, "Icon").$$render($$result, { src: Link, size, class: "text-gray-300" }, {}, {})}</a>
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  let { heading = "" } = $$props;
  let { id = normalizeForId(heading) } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="${"max-w-4xl mx-auto w-11/12 " + escape(className)}">${heading ? `${validate_component(DeepLink, "DeepLink").$$render($$result, { id }, {}, {
    default: () => {
      return `<h2 class="${"text-3xl font-black text-gray-100"}">${escape(heading)}</h2>`;
    }
  })}` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
export { Container as C, Icon as I };
