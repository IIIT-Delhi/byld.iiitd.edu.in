import { c as create_ssr_component, v as validate_component, e as each } from "../../chunks/index-e2d55fee.js";
import { C as Container } from "../../chunks/Container-f765a598.js";
import { P as ProjectCard, d as data } from "../../chunks/projects-dabff34c.js";
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = data;
  return `<section class="${"text-gray-200 bg-sec-800 py-14"}">${validate_component(Container, "Container").$$render($$result, { heading: "Projects" }, {}, {
    default: () => {
      return `<div class="${"grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"}">${each(projects, (project) => {
        return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, {
          title: project.title,
          subtitle: project.subtitle,
          status: project.status,
          contributors: project.contributors,
          techStack: project.tech,
          link: project.link
        }, {}, {})}`;
      })}</div>`;
    }
  })}</section>`;
});
export { Projects as default };
