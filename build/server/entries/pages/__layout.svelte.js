import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape, g as getContext, d as subscribe } from "../../chunks/index-e2d55fee.js";
import { C as Container, I as Icon } from "../../chunks/Container-f765a598.js";
import { L as Logo } from "../../chunks/Logo-48259c36.js";
var ChevronDown = [[{ "fill-rule": "evenodd", "d": "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule": "evenodd" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M19 9l-7 7-7-7" }]];
var Code = [[{ "fill-rule": "evenodd", "d": "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", "clip-rule": "evenodd" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" }]];
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"border-t bg-sec-900 border-sec-400"}">${validate_component(Container, "Container").$$render($$result, { className: "py-7" }, {}, {
    default: () => {
      return `<div class="${"flex flex-col text-sm space-y-3"}"><a href="${"/"}">${validate_component(Logo, "Logo").$$render($$result, { size: "sm", backgroundColor: "black" }, {}, {})}</a>
      <p class="${"text-gray-500"}">Bylt by Mihir Chaturvedi and Ananya Lohani</p>
      <a class="${"flex items-center text-gray-500 space-x-2"}" href="${"https://github.com/IIIT-Delhi/byld.iiitd.edu.in"}">${validate_component(Icon, "Icon").$$render($$result, { src: Code, size: "17", solid: true }, {}, {})}
        <span>Source on GitHub</span></a></div>`;
    }
  })}</section>`;
});
var data = [
  {
    name: "About",
    href: "/"
  },
  {
    name: "Members",
    href: "/members"
  },
  {
    name: "Events",
    href: "/"
  },
  {
    name: "Projects",
    href: "/projects"
  }
];
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = data;
  let showNavigation = false;
  return `<header class="${"sticky top-0 z-10 border-b bg-sec-700 border-sec-400 "}">${validate_component(Container, "Container").$$render($$result, {
    className: "flex items-center justify-between py-4"
  }, {}, {
    default: () => {
      return `<a href="${"/"}"><div class="${"flex flex-col items-center"}">${validate_component(Logo, "Logo").$$render($$result, { backgroundColor: "black", size: "sm" }, {}, {})}
        <span class="${"text-xs text-blueGray-400"}">develop@iiitd</span></div></a>
    <nav class="${"hidden space-x-5 text-sm font-semibold sm:flex text-blueGray-300"}">${each(links, (link) => {
        return `<a${add_attribute("href", link.href, 0)}>${escape(link.name)}</a>`;
      })}</nav>
    <button class="${"self-center sm:hidden text-blueGray-500"}">${validate_component(Icon, "Icon").$$render($$result, {
        src: ChevronDown,
        size: "24",
        class: "transition-transform duration-200 transform " + showNavigation,
        solid: true
      }, {}, {})}</button>`;
    }
  })}
  ${``}</header>`;
});
const SvelteSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { noindex = false } = $$props;
  let { nofollow = false } = $$props;
  let { description = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { jsonLd = void 0 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0)
    $$bindings.noindex(noindex);
  if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0)
    $$bindings.nofollow(nofollow);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0)
    $$bindings.jsonLd(jsonLd);
  return `${$$result.head += `${title ? `${$$result.title = `<title>${escape(title)}</title>`, ""}` : ``}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-48x7jy"><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-48x7jy">${description ? `<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-48x7jy">` : ``}${canonical ? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)} data-svelte="svelte-48x7jy">` : ``}${keywords ? `<meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-48x7jy">` : ``}${openGraph ? `${openGraph.title ? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title, 0)} data-svelte="svelte-48x7jy">` : ``}

    ${openGraph.description ? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description, 0)} data-svelte="svelte-48x7jy">` : ``}

    ${openGraph.url || canonical ? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)} data-svelte="svelte-48x7jy">` : ``}

    ${openGraph.type ? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-48x7jy">` : ``}

    ${openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-48x7jy">` : ``}

      ${openGraph.article.modifiedTime ? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-48x7jy">` : ``}

      ${openGraph.article.expirationTime ? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-48x7jy">` : ``}

      ${openGraph.article.section ? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)} data-svelte="svelte-48x7jy">` : ``}

      ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="${"article:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-48x7jy">`;
  })}` : ``}

      ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-48x7jy">`;
  })}` : ``}` : ``}

    ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-48x7jy">
        ${image.alt ? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-48x7jy">` : ``}
        ${image.width ? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)} data-svelte="svelte-48x7jy">` : ``}
        ${image.height ? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)} data-svelte="svelte-48x7jy">` : ``}`;
  })}` : ``}` : ``}${twitter ? `<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-48x7jy">
    ${twitter.site ? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)} data-svelte="svelte-48x7jy">` : ``}
    ${twitter.title ? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)} data-svelte="svelte-48x7jy">` : ``}
    ${twitter.description ? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)} data-svelte="svelte-48x7jy">` : ``}
    ${twitter.image ? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)} data-svelte="svelte-48x7jy">` : ``}
    ${twitter.imageAlt ? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)} data-svelte="svelte-48x7jy">` : ``}` : ``}${jsonLd ? `<!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    ...jsonLd
  }) + "<"}/script>`}<!-- HTML_TAG_END -->` : ``}${slots.default ? slots.default({}) : ``}`, ""}`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  var _a;
  const navigation = data;
  let subtitle = "";
  subtitle = $page.url.pathname === "/" ? "IIIT Delhi" : ((_a = navigation.find((link) => link.href === $page.url.pathname)) === null || _a === void 0 ? void 0 : _a.name) || "IIIT Delhi";
  $$unsubscribe_page();
  return `${validate_component(SvelteSeo, "SvelteSeo").$$render($$result, {
    title: "Byld \u2022 " + subtitle,
    description: "Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld.",
    openGraph: {
      title: `Byld \u2022 ${subtitle}`,
      description: "Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld.",
      url: `https://byld.iiitd.ac.in/${$page.url.pathname}`,
      type: "website",
      images: [
        {
          url: "/images/byld-hero.jpg",
          width: 1280,
          height: 640,
          alt: "Byld"
        }
      ]
    },
    twitter: {
      title: `Byld \u2022 ${subtitle}`,
      description: "Byld is the software development club of IIIT Delhi. We are a group of students who love building new stuff. We aim to create and continuously improve the dev culture at IIITD by bringing together passionate individuals who love to collaborate, innovate, create and byld.",
      image: "/images/byld-hero.jpg",
      imageAlt: "Byld"
    }
  }, {}, {})}

${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
