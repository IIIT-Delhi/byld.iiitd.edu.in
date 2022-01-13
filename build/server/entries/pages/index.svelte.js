import { c as create_ssr_component, b as escape, a as add_attribute, v as validate_component, e as each } from "../../chunks/index-e2d55fee.js";
import { C as Container, I as Icon } from "../../chunks/Container-f765a598.js";
import { L as Logo } from "../../chunks/Logo-48259c36.js";
import { I as Icon$1 } from "../../chunks/Icon-e29dd9b2.js";
import { d as data, P as ProjectCard } from "../../chunks/projects-dabff34c.js";
var ChatAlt2 = [[{ "d": "M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" }, { "d": "M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" }]];
var UserGroup = [[{ "d": "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }]];
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { as = "button" } = $$props;
  let { type = "primary" } = $$props;
  let { href = "" } = $$props;
  const newTab = !href.startsWith("/");
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${as === "button" || as === "button-link" ? `<button class="${"py-2 px-3 text-lg text-blueGray-200 font-bold rounded-md border-2 border-sec-200 hover:border-sec-100 transition-all duration-200 outline-none shadow-md hover:bg-sec-100 filter focus:brightness-125 transform active:scale-95 hover:-translate-y-0.5 " + escape(type === "primary" ? "bg-sec-200" : "bg-transparent text-blueGray-200")}">${as === "button-link" ? `<a${add_attribute("href", href, 0)}${add_attribute("target", newTab ? "_blank" : "", 0)} rel="${"noopener"}">${slots.default ? slots.default({}) : ``}</a>` : `${slots.default ? slots.default({}) : ``}`}</button>` : `<a${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`}`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"relative bg-gradient-to-tl from-sec-500 to-sec-900"}">${validate_component(Container, "Container").$$render($$result, {
    className: "z-20 flex flex-col items-center py-20 space-y-10 transform translate-y-0"
  }, {}, {
    default: () => {
      return `${validate_component(Logo, "Logo").$$render($$result, { backgroundColor: "black", size: "lg" }, {}, {})}
    ${``}`;
    }
  })}</section>`;
});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${``}`;
});
const HowToJoin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"border-t py-14 bg-sec-850 border-sec-600"}">${validate_component(Container, "Container").$$render($$result, {
    className: "space-y-5",
    heading: "How to join"
  }, {}, {
    default: () => {
      return `<p class="${"text-lg leading-normal text-gray-400"}">Byld organizes a Hackathon once every month of the semester. The members
      of the teams which finish at the top in the Hackathons are recruited into
      the club.
    </p>
    <p class="${"text-lg leading-normal text-gray-400"}">Byld membership is not permanent and the members of the club need to have
      at least 50% attendance in Byld events to stay a part of the club.
    </p>
    <div class="${"flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `When&#39;s the next hack?`;
        }
      })}
      ${validate_component(Button, "Button").$$render($$result, {
        type: "outline",
        as: "button-link",
        href: "https://t.me/joinchat/Dv6-w41T66YxYWNl"
      }, {}, {
        default: () => {
          return `<div class="${"flex items-center justify-center space-x-2"}">${validate_component(Icon, "Icon").$$render($$result, { src: ChatAlt2, size: "20" }, {}, {})}
          <span>Telegram Group</span></div>`;
        }
      })}</div>`;
    }
  })}</section>`;
});
const WhoAreWe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"py-14 bg-sec-800"}">${validate_component(Container, "Container").$$render($$result, {
    className: "space-y-5",
    heading: "Who are we?"
  }, {}, {
    default: () => {
      return `<p class="${"text-xl leading-normal text-gray-400"}">We\u2019re a bunch of students who love building apps and hacks using various
      tools and technologies.
    </p>

    ${validate_component(Button, "Button").$$render($$result, { as: "button-link", href: "/members" }, {}, {
        default: () => {
          return `<div class="${"flex items-center justify-center space-x-2"}">${validate_component(Icon, "Icon").$$render($$result, { src: UserGroup, size: "20" }, {}, {})}
        <span>All members</span></div>`;
        }
      })}`;
    }
  })}</section>`;
});
var EmailIcon = {
  a: {
    viewBox: "0 0 512 512"
  },
  c: '<path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>'
};
var TelegramIcon = {
  a: {
    viewBox: "0 0 448 512"
  },
  c: '<path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>'
};
var GithubIcon = {
  a: {
    viewBox: "0 0 496 512"
  },
  c: '<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>'
};
var FacebookIcon = {
  a: {
    viewBox: "0 0 320 512"
  },
  c: '<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>'
};
var LinkedinIcon = {
  a: {
    viewBox: "0 0 448 512"
  },
  c: '<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>'
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const networks = [
    {
      name: "Email",
      link: "mailto:byld@iiitd.ac.in",
      icon: EmailIcon
    },
    {
      name: "Telegram",
      link: "https://t.me/joinchat/Dv6-w41T66YxYWNl",
      icon: TelegramIcon
    },
    {
      name: "GitHub",
      link: "https://github.com/IIIT-Delhi",
      icon: GithubIcon
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/byld.iiitd/",
      icon: FacebookIcon
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/byld-iiit-delhi/",
      icon: LinkedinIcon
    }
  ];
  return `<section class="${"border-t py-14 bg-sec-850 border-sec-600"}">${validate_component(Container, "Container").$$render($$result, {
    className: "space-y-5",
    heading: "Contact us"
  }, {}, {
    default: () => {
      return `<p class="${"text-lg leading-normal text-gray-400"}">For the quickest replies, consider email us or sending a message on Byld&#39;s
      public Telegram group.
    </p>
    <div class="${"grid gap-5 grid-row-3 sm:grid-rows-2 lg:grid-rows-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 "}">${each(networks, (network) => {
        return `${validate_component(Button, "Button").$$render($$result, {
          type: "outline",
          as: "button-link",
          href: network.link
        }, {}, {
          default: () => {
            return `<div class="${"flex items-center justify-center space-x-2"}">${validate_component(Icon$1, "Icon").$$render($$result, {
              src: network.icon,
              color: "rgb(203, 213, 225)"
            }, {}, {})}
            <span class="${"text-base font-bold text-blueGray-300"}">${escape(network.name)}
            </span></div>
        `;
          }
        })}`;
      })}</div>`;
    }
  })}</section>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = data.slice(0, 2);
  return `<section class="${"w-full border-t py-14 bg-sec-800 border-sec-600"}">${validate_component(Container, "Container").$$render($$result, {
    className: "w-full space-y-5",
    heading: "Projects"
  }, {}, {
    default: () => {
      return `<p class="${"text-lg leading-normal text-gray-400"}">Check out the projects our members have bylt.
    </p>
    <div class="${"grid grid-cols-1 md:grid-cols-2 gap-3"}">${each(projects, (project) => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, {
          title: project.title,
          subtitle: project.subtitle,
          status: project.status,
          contributors: project.contributors,
          techStack: project.tech,
          link: project.link
        }, {}, {})}`;
      })}</div>
    ${validate_component(Button, "Button").$$render($$result, { as: "button-link", href: "/projects" }, {}, {
        default: () => {
          return `All Projects`;
        }
      })}`;
    }
  })}</section>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}

${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}

${validate_component(WhoAreWe, "WhoAreWe").$$render($$result, {}, {}, {})}

${validate_component(HowToJoin, "HowToJoin").$$render($$result, {}, {}, {})}

${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}

${validate_component(ContactUs, "ContactUs").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
