import { c as create_ssr_component, a as add_attribute, b as escape, e as each } from "./index-e2d55fee.js";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { status = "" } = $$props;
  let { contributors = [] } = $$props;
  let { techStack = [] } = $$props;
  let { link = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.contributors === void 0 && $$bindings.contributors && contributors !== void 0)
    $$bindings.contributors(contributors);
  if ($$props.techStack === void 0 && $$bindings.techStack && techStack !== void 0)
    $$bindings.techStack(techStack);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<div class="${"flex flex-1 p-4 text-gray-100 border-2 cursor-pointer transition-all duration-200 rounded-md group hover:-translate-y-1 hover:shadow-xl hover:bg-sec-600 bg-sec-700 border-sec-500 hover:border-sec-400"}"><a${add_attribute("href", link, 0)} class="${"flex flex-col flex-1 space-y-2 transition-all duration-200 divide-y divide-sec-500 hover:divide-sec-300"}"><div class="${"flex flex-row justify-between"}"><div class="${"flex flex-col items-start space-y-1"}"><h3 class="${"text-lg font-bold"}">${escape(title)}</h3>
        <p class="${"text-sm font-light text-gray-300"}">${escape(subtitle)}</p></div>
      <div><p class="${"italic font-semibold text-tert-900 group-hover:text-tert-700"}">${escape(status)}</p></div></div>
    <div class="${"flex flex-col justify-between flex-1 pt-2"}"><div><p class="${"inline text-sm font-semibold"}">Contributors:</p>
        <p class="${"inline text-sm font-light text-gray-300"}">${escape(contributors.join(", "))}</p></div>
      <div class="${"flex flex-row mt-3 space-x-2"}">${each(techStack, (tech) => {
    return `<div class="${"text-xs font-semibold py-1.5 px-2 rounded border bg-sec-400 border-sec-600 group-hover:border-sec-600 group-hover:bg-sec-300 text-tert-200"}">${escape(tech)}
          </div>`;
  })}</div></div></a></div>`;
});
var data = [
  {
    title: "Opine",
    subtitle: "Feedback System",
    status: "Beta",
    link: "http://opine.iiitd.edu.in/",
    contributors: [
      "Siddharth Gupta",
      "Sarthak Bajaj"
    ],
    tech: ["Django"]
  },
  {
    title: "FindMyStuff",
    subtitle: "Items Locator",
    status: "Released",
    link: "http://findmystuff.iiitd.edu.in/",
    contributors: [
      "Sambhav Satija",
      "Kshitij Jain",
      "Ankur Dohare",
      "Magus Verma"
    ],
    tech: ["Django"]
  },
  {
    title: "Placement/Job Portal",
    subtitle: "IIIT Delhi Job Portal",
    status: "Beta",
    link: "http://jobport.iiitd.edu.in:8081/",
    contributors: [
      "Romil Bhardwaj",
      "Naman Gupta"
    ],
    tech: ["Django"]
  },
  {
    title: "Admission Software",
    subtitle: "PhD Admission Software of IIIT Delhi",
    status: "Released",
    link: "http://phdadmissions.iiitd.edu.in/",
    contributors: [
      "Gitanshu Sardana",
      "Prateek Mehra",
      "Gurshabad Grover",
      "Prasoon Dwivedi",
      "Tushar Gupta",
      "Manav Batra"
    ],
    tech: ["Django"]
  },
  {
    title: "Community Work Portal",
    subtitle: "CW Portal of IIIT Delhi",
    status: "Released",
    link: "http://cw.iiitd.edu.in:8089/",
    contributors: ["Sambhav Satija"],
    tech: ["Django"]
  },
  {
    title: "Self Growth Portal",
    subtitle: "SG Portal of IIIT Delhi",
    status: "Beta",
    link: "http://sg.iiitd.edu.in:8087/",
    contributors: [
      "Lohitaksh Parmar",
      "Kushagra Singh"
    ],
    tech: ["Django"]
  }
];
export { ProjectCard as P, data as d };
