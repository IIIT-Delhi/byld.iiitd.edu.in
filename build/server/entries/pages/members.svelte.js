import { c as create_ssr_component, b as escape, e as each, a as add_attribute, v as validate_component } from "../../chunks/index-e2d55fee.js";
import { C as Container, I as Icon } from "../../chunks/Container-f765a598.js";
import { I as Icon$1 } from "../../chunks/Icon-e29dd9b2.js";
var Mail = [[{ "d": "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }, { "d": "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }], [{ "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", "d": "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }]];
var data$1 = [
  {
    name: "Lakshya Agrawal",
    position: "Admin",
    image: "/images/members/lakshya.jpg"
  },
  {
    name: "Vasu Goel",
    position: "Admin",
    image: "/images/members/vasu.jpg"
  },
  {
    name: "Mihir Chaturvedi",
    position: "Admin",
    image: "/images/members/mihir.jpg"
  },
  {
    name: "Srijan Jain",
    position: "Admin",
    image: "/images/members/srijan.jpg"
  },
  {
    name: "Saksham Mrig",
    position: "Admin",
    image: "/images/members/mihir.jpg"
  }
];
const Admins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const positions = data$1;
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div class="${"grid grid-cols-3 grid-rows-2 py-5 gap-y-10 md:grid-rows-1 md:grid-cols-5 " + escape(className)}">${each(positions, (admin) => {
    return `<div class="${"flex flex-col items-center space-y-3"}"><img class="${"w-20 h-20 rounded-full"}"${add_attribute("src", admin.image, 0)}${add_attribute("alt", admin.name, 0)}>
      <div class="${"space-y-1 text-center"}"><p class="${"text-sm font-bold text-white"}">${escape(admin.name)}</p>
        <p class="${"text-xs text-blueGray-300"}">${escape(admin.position)}</p></div>
    </div>`;
  })}</div>`;
});
var data = [
  {
    github: "https://github.com/danish-goel",
    name: "Danish Goel",
    skills: ["Android"],
    email: "danish12032@iiitd.ac.in"
  },
  {
    github: "https://github.com/MnnGkhr",
    name: "Manan Gakhar",
    skills: ["Android"],
    email: "manan12054@iiitd.ac.in"
  },
  {
    github: null,
    name: "Prasant Chidella",
    skills: [],
    email: "prasant12075@iiitd.ac.in"
  },
  {
    github: "https://github.com/pulkitarora21",
    name: "Pulkit Arora",
    skills: ["PHP"],
    email: "pulkit12082@iiitd.ac.in"
  },
  {
    github: "https://github.com/Udayan12167",
    name: "Udayan Tandon",
    skills: [
      "Java",
      "C",
      "Python",
      "Ruby on Rails"
    ],
    email: "udayan12167@iiitd.ac.in"
  },
  {
    github: "https://github.com/shubham12101",
    name: "Shubham Singh",
    skills: [
      "C",
      "Java",
      "C++",
      "Python"
    ],
    email: "shubham12101@iiitd.ac.in"
  },
  {
    github: "https://github.com/Tushar-Gupta",
    name: "Tushar Gupta",
    skills: [
      "HTML",
      "CSS",
      "Python",
      "Django",
      "C"
    ],
    email: "tushar13113@iiitd.ac.in"
  },
  {
    github: "https://github.com/gaurav13035",
    name: "Gaurav Bansal",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "PHP",
      "C"
    ],
    email: "gaurav13035@iiitd.ac.in"
  },
  {
    github: null,
    name: "Jaisurya B",
    skills: [],
    email: "jaisurya13028@iiitd.ac.in"
  },
  {
    github: "https://github.com/gurshabad",
    name: "Gurshabad Grover",
    email: "gurshabad13038@iiitd.ac.in",
    details: "awesomness and rolling"
  },
  {
    github: "https://github.com/sahilshekhawat",
    name: "Sahil Shekhawat",
    skills: [
      "Python",
      "Django",
      "C",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    email: "sahil13083@iiitd.ac.in"
  },
  {
    github: null,
    name: "Mohit Wadhwa",
    skills: [],
    email: "mohit13063@iiitd.ac.in"
  },
  {
    github: "https://github.com/krngrvr09",
    name: "Karan Grover",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "C"
    ],
    email: "karan13048@iiitd.ac.in"
  },
  {
    github: "https://github.com/manavbatra",
    name: "Manav Batra",
    skills: [
      "Python",
      "C",
      "C++",
      "HTML",
      "Shell"
    ],
    email: "manav13057@iiitd.ac.in"
  },
  {
    github: "https://github.com/namchester",
    name: "Naman Gupta",
    skills: [
      "Python",
      "Flask"
    ],
    email: "naman13064@iiitd.ac.in"
  },
  {
    github: null,
    name: "Aditi Mithal",
    skills: [],
    email: "aditim13122@iiitd.ac.in"
  },
  {
    github: "https://github.com/lionaneesh",
    name: "Aneesh Dogra",
    skills: [
      "Python",
      "Django",
      "App Engine",
      "C",
      "Shell",
      "Flask"
    ],
    email: "aneesh13014@iiitd.ac.in"
  },
  {
    github: "https://github.com/SrijanBatra",
    name: "Srijan Batra",
    skills: ["Python"],
    email: "srijan13107@iiitd.ac.in"
  },
  {
    github: "https://github.com/mananwason",
    name: "Manan Wasan",
    skills: ["Android"],
    email: "manan13056@iiitd.ac.in"
  },
  {
    github: "https://github.com/atul10595",
    name: "Atul Jain",
    skills: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery"
    ],
    email: "atul13025@iiitd.ac.in"
  },
  {
    github: null,
    name: "Anjali Ujjainia",
    skills: [],
    email: "anjali13016@iiitd.ac.in"
  },
  {
    github: null,
    name: "Megha Arora",
    skills: [],
    email: "megha12059@iiitd.ac.in"
  },
  {
    github: "https://github.com/darkryder",
    name: "Sambhav Satija",
    skills: [
      "Python",
      "Django",
      "C"
    ],
    email: "sambhav13085@iiitd.ac.in"
  },
  {
    github: "https://github.com/rush-skills",
    name: "Ankur Singh",
    skills: [],
    email: "ankur13019@iiitd.ac.in"
  },
  {
    github: "https://github.com/soummyaah",
    name: "Soumya Sharma",
    skills: [],
    email: "soumya13106@iiitd.ac.in"
  },
  {
    github: "https://github.com/kshanmol",
    name: "Anmol Singh",
    skills: [],
    email: "anmol13012@iiitd.ac.in",
    details: "MAD skillz"
  },
  {
    email: "abhinay18209@iiitd.ac.in",
    name: "Abhinay Gupta",
    skills: [
      "Python",
      "Java"
    ]
  },
  {
    email: "abhishek16005@iiitd.ac.in",
    name: "abshishek16005",
    github: "https://github.com/ovshake",
    skills: [
      "Machine Learning",
      "Reinforcement Learning",
      "Deep Learning"
    ],
    details: "Machine Intelligence and its fields"
  },
  {
    email: "aditya15007@iiitd.ac.in",
    name: "Aditya Adhikary",
    github: "https://github.com/indianauthority97",
    skills: [
      "Java",
      "GWT"
    ]
  },
  {
    email: "akarsha15010@iiitd.ac.in",
    name: "Akarsha Sehwag",
    github: "https://github.com/aksh98",
    skills: [
      "Django",
      "Python",
      "C++"
    ],
    details: "Development - can learn and do"
  },
  {
    email: "anant16129@iiitd.ac.in",
    name: "Anant Sharma"
  },
  {
    email: "anish17281@iiitd.ac.in",
    name: "Anish Bhardwaj",
    github: "https://github.com/bhardwajanish",
    skills: [
      "Python",
      "C"
    ]
  },
  {
    email: "anushka16134@iiitd.ac.in",
    name: "anushka16134"
  },
  {
    email: "baani16234@iiitd.ac.in",
    name: "baani16234",
    github: "https://github.com/baani_leen",
    skills: [
      "Android",
      "3D VR Game",
      "JavaFX",
      "Flask",
      "TKinter"
    ]
  },
  {
    email: "brihi16142@iiitd.ac.in",
    name: "Brihi Joshi",
    github: "https://github.com/brihijoshi",
    skills: [
      "Python",
      "IoT",
      "Node.js",
      "Ruby on Rails",
      "Hadoop"
    ]
  },
  {
    email: "chirag17041@iiitd.ac.in",
    name: "Chirag Jain",
    github: "https://github.com/chirag-jn",
    skills: [
      "Python",
      "Android",
      "Firebase",
      "React",
      "Web Development"
    ]
  },
  {
    email: "daksh17336@iiitd.ac.in",
    name: "Daksh",
    github: "https://github.com/Daksh",
    skills: [
      "C",
      "Python"
    ]
  },
  {
    email: "deepak16030@iiitd.ac.in",
    name: "Deepak Magesh Srivatsav",
    github: "https://github.com/dvatsav",
    skills: ["Android"],
    details: "Although it's not a top skill. I have started contributing to open source a little more frequently."
  },
  {
    email: "diptanshu18232@iiitd.ac.in",
    name: "Diptanshu Mittal",
    skills: [
      "Python",
      "Java",
      "Flutter",
      "Android",
      "Web Development"
    ]
  },
  {
    email: "divam14038@iiitd.ac.in",
    name: "Divam Gupta",
    github: "https://github.com/divamgupta",
    skills: [
      "Node.js",
      "JavaScript",
      "PHP",
      "HTML",
      "cocos2d-JavaScript",
      "Python"
    ]
  },
  {
    email: "divyam17339@iiitd.ac.in",
    name: "Divyam Bhagchandani"
  },
  {
    email: "divyanshu15028@iiitd.ac.in",
    name: "Divyanshu Talwar",
    github: "https://github.com/divyanshu-talwar",
    skills: [
      "Pytorch",
      "Tensorflow",
      "CUDA",
      "Node.js",
      "Django",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Shell",
      "Python",
      "C",
      "C++",
      "Java",
      "Git",
      "ML",
      "Reinforcement Learning",
      "Deep Learning",
      "Collaborative Filtering",
      "GPU computing"
    ]
  },
  {
    email: "falak16018@iiitd.ac.in",
    name: "Falak"
  },
  {
    email: "gunkirat15032@iiitd.ac.in",
    name: "Gunkirat Kaur",
    github: "https://github.com/gunkiratk",
    skills: [
      "Andriod",
      "Django",
      "Ruby",
      "Flask"
    ]
  },
  {
    email: "gurek15033@iiitd.ac.in",
    name: "Gurek"
  },
  {
    email: "himanshu18337@iiitd.ac.in",
    name: "Himanshu Garg",
    github: "https://github.com/Himanshu-Garg",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C++"
    ]
  },
  {
    email: "kanika16047@iiitd.ac.in",
    name: "Kanika Saini",
    github: "https://github.com/kanikasaini",
    skills: [
      "JavaScript",
      "React",
      "Django",
      "Python",
      "Git",
      "Mercurial",
      "Firefox"
    ]
  },
  {
    email: "katyayani15046@iiitd.ac.in",
    name: "Katyayni Singh"
  },
  {
    email: "kushagra14056@iiitd.ac.in",
    name: "Kushagra Singh",
    github: "https://github.com/Kush789",
    skills: [
      "Django",
      "Tensorflow"
    ]
  },
  {
    email: "lohitaksh14059@iiitd.ac.in",
    name: "Lohitaksh Parmar",
    github: "https://github.com/Lohit13",
    skills: [
      "App Development",
      "Networks",
      "Network Security"
    ]
  },
  {
    email: "madhur16053@iiitd.ac.in",
    name: "Madhur Tandon"
  },
  {
    email: "mahika16241@iiitd.ac.in",
    name: "mahika16241",
    github: "https://github.com/mahikaw",
    skills: [
      "Android",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "CSS",
      "HTML",
      "Git",
      "GitHub",
      "Shell",
      "Python"
    ]
  },
  {
    email: "manik15053@iiitd.ac.in",
    name: "Manik Arora"
  },
  {
    email: "mansi14062@iiitd.ac.in",
    name: "Mansi Goel",
    github: "https://github.com/Mansi14062",
    skills: ["Python"]
  },
  {
    email: "mayank15056@iiitd.ac.in",
    name: "Mayank Mohindra",
    github: "https://github.com/mayankmtg",
    skills: [
      "Web",
      "Angular",
      "Firebase",
      "Django"
    ]
  },
  {
    email: "meghna16056@iiitd.ac.in",
    name: "Meghna Gupta"
  },
  {
    email: "mihir19061@iiitd.ac.in",
    name: "Mihir Chaturvedi",
    github: "https://github.com/plibither8",
    skills: [
      "Svelte",
      "Sapper",
      "SvelteKit",
      "React",
      "Next.js",
      "TailwindCSS",
      "HTML",
      "Pug",
      "CSS",
      "Stylus",
      "SASS",
      "LESS",
      "JavaScript",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "SQL",
      "PHP",
      "Bash",
      "C++"
    ]
  },
  {
    email: "mukesh14149@iiitd.ac.in",
    name: "Mukesh Gupta",
    github: "https://github.com/mukesh14149",
    skills: [
      "Java",
      "Android",
      "Machine Learning",
      "Ionic Framework"
    ]
  },
  {
    email: "nalin14065@iiitd.ac.in",
    name: "Nalin Gupta",
    github: "https://github.com/nalin1096",
    skills: [
      "Django",
      "Android",
      "MongoDB",
      "SQL",
      "Natural Language Processing",
      "Data Mining",
      "Machine Learning"
    ]
  },
  {
    email: "nikhil15065@iiitd.ac.in",
    name: "nikhil15065",
    github: "https://github.com/nikhilhassija",
    skills: ["Django"]
  },
  {
    email: "palash14072@iiitd.ac.in",
    name: "palash14072",
    github: "https://github.com/palashbansal96",
    skills: []
  },
  {
    email: "palash16064@iiitd.ac.in",
    name: "Palash Aggrawal",
    github: "https://github.com/Cosmopal",
    skills: [
      "Android",
      "Firebase",
      "Java",
      "Python",
      "Machine Learning",
      "Natural Language Processing"
    ],
    details: "in general dev stuff - fun and frustration"
  },
  {
    email: "paridhi16065@iiitd.ac.in",
    name: "paridhi16065",
    github: "https://github.com/paridhi16065",
    skills: [
      "Python",
      "Java",
      "C",
      "Flask",
      "SQL"
    ]
  },
  {
    email: "parimi15068@iiitd.ac.in",
    name: "parimi15068",
    github: "https://github.com/viraj96",
    skills: [
      "JavaScript",
      "Python"
    ]
  },
  {
    email: "peeyush16254@iiitd.ac.in",
    name: "Peeyush",
    github: "https://github.com/peey",
    skills: ["JavaScript and Compilers"]
  },
  {
    email: "raghav17082@iiitd.ac.in",
    name: "Raghav Kukreti",
    github: "https://github.com/raghav-kukreti",
    skills: [
      "HTML5",
      "SASS",
      "Stylus",
      "CSS",
      "JavaScript",
      "jQuery",
      "Node.js",
      "CoffeeScript",
      "Deep Learning",
      "Machine Learning",
      "Django",
      "Jekyll",
      "Haskell",
      "Ruby",
      "C",
      "C++",
      "Java",
      "Python",
      "Firebase",
      "Git"
    ]
  },
  {
    email: "rishabh15076@iiitd.ac.in",
    name: "rishabh16076",
    github: "https://github.com/bigharshrag",
    skills: [
      "Deep Learning",
      "Machine Learning",
      "Django/Flask"
    ]
  },
  {
    email: "riya17309@iiitd.ac.in",
    name: "Riya Singh"
  },
  {
    email: "royal17310@iiitd.ac.in",
    name: "Royal"
  },
  {
    email: "rudraroop17311@iiitd.ac.in",
    name: "Rudraroop Roy"
  },
  {
    email: "rushil18408@iiitd.ac.in",
    name: "Rushil Thareja",
    skills: [
      "Python",
      "Java",
      "Android"
    ]
  },
  {
    email: "saatvik16261@iiitd.ac.in",
    name: "saatvik16261",
    github: "https://github.com/saatvikj",
    skills: [
      "Android",
      "Firebase",
      "Arduino"
    ],
    details: "(IoT based applications primarily connected to android)"
  },
  {
    email: "sahar14091@iiitd.ac.in",
    name: "sahar14091",
    github: "https://github.com/sahar2012",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development"
    ]
  },
  {
    email: "sanchit15083@iiitd.ac.in",
    name: "Sanchit Sinha"
  },
  {
    email: "saumya15172@iiitd.ac.in",
    name: "Saumya Balodi"
  },
  {
    email: "shiven15094@iiitd.ac.in",
    name: "shiven15094",
    github: "https://github.com/shivenmian",
    skills: [
      "Android",
      "MEAN Stack",
      "Python"
    ]
  },
  {
    email: "shravika16093@iiitd.ac.in",
    name: "Shravika Mittal"
  },
  {
    email: "shwetank16095@iiitd.ac.in",
    name: "shwetank16095",
    github: "https://github.com/shwetankshrey",
    skills: [
      "Python",
      "Java",
      "Backend Development"
    ]
  },
  {
    email: "siddharth16268@iiitd.ac.in",
    name: "siddharth16268",
    github: "https://github.com/geekSiddharth",
    details: "Ctrl+C <-> Ctrl+V"
  },
  {
    email: "sonali18317@iiitd.ac.in",
    name: "Sonali Singhal",
    github: "https://github.com/Sonalisinghal",
    skills: [
      "C",
      "Web Development",
      "Python"
    ]
  },
  {
    email: "suryatej16102@iiitd.ac.in",
    name: "suryatej16102",
    github: "https://github.com/suryatejreddy",
    skills: [
      "Django",
      "JavaScript",
      "Android"
    ]
  },
  {
    email: "taneea14166@iiitd.ac.in",
    name: "Taneea S Agrawaal",
    github: "https://github.com/TanSA05",
    skills: [
      "Python",
      "Ruby",
      "Rails",
      "JavaScript",
      "jQuery"
    ]
  },
  {
    email: "tarun14110@iiitd.ac.in",
    name: "tarun14110",
    github: "https://github.com/tarun14110",
    skills: [
      "Networks",
      "Cyber Security",
      "Android"
    ]
  },
  {
    email: "varun13168@iiitd.ac.in",
    name: "Varun Bansal",
    github: "https://github.com/bansalvarun",
    skills: [
      "Django",
      "Ruby on Rails",
      "JavaScript",
      "Elasticsearch",
      "Android",
      "Node.js",
      "ROS",
      "Bash",
      "Linux",
      "Git",
      "AWS",
      "DigitalOcean",
      "Arduino",
      "Code Blocks",
      "Eclipse",
      "NetBeans",
      "MATLAB",
      "OpenGL",
      "Latex"
    ]
  },
  {
    email: "viresh16118@iiitd.ac.in",
    name: "Viresh Gupta",
    github: "https://github.com/virresh",
    skills: [
      "Web Development",
      "Git",
      "Python",
      "Unity",
      "Automation",
      "Scraping"
    ],
    details: "and any generic dev stuff"
  },
  {
    email: "vrinda14122@iiitd.ac.in",
    name: "Vrinda Malhotra",
    github: "https://github.com/TheChirpyWitch",
    skills: [
      "Android",
      "Flask",
      "Ruby on Rails"
    ]
  },
  {
    email: "yashasvi15116@iiitd.ac.in",
    name: "Yashasvi Baweja",
    github: "https://github.com/yashasvi97",
    details: "Anything related to data mining"
  },
  {
    email: "yellapragada15117@iiitd.ac.in",
    name: "yellapragada15117",
    github: "https://github.com/meriki",
    skills: [
      "Django",
      "python",
      "C",
      "C++"
    ]
  },
  {
    email: "aniket17133@iiitd.ac.in",
    name: "Aniket Pradhan",
    github: "https://github.com/Aniket-Pradhan",
    skills: [
      "Android",
      "Java",
      "Python",
      "Web Development",
      "React Native"
    ]
  },
  {
    email: "aman17017@iiitd.ac.in",
    name: "Aman Mehra",
    github: "https://github.com/amehra-github",
    skills: [
      "Python",
      "Java",
      "Flask"
    ]
  },
  {
    email: "smera18315@iiitd.ac.in",
    name: "Smera Goel",
    github: "https://github.com/smera18315",
    skills: [
      "Python",
      "Dart",
      "Design"
    ]
  },
  {
    name: "Saksham Mrig",
    email: "saksham19385@iiitd.ac.in",
    github: "https://github.com/sksum",
    skills: [
      "Java",
      "MERN",
      "TypeScript",
      "Python",
      "Flask",
      "Rust"
    ]
  },
  {
    email: "vishwesh18119@iiitd.ac.in",
    name: "Vishwesh Kumar",
    github: "https://github.com/vishwesh-D-kumar",
    skills: [
      "Python",
      "Java",
      "Django",
      "Astor"
    ]
  },
  {
    email: "bassam19032@iiitd.ac.in",
    name: "Bassam Pervez",
    github: "https://github.com/basp0",
    skills: [
      "Python",
      "Java",
      "Django",
      "JavaScript",
      "Bash",
      "Processing",
      "Arduino",
      "OpenCV",
      "Git"
    ]
  }
];
var AiFillGithub = {
  a: {
    viewBox: "0 0 1024 1024"
  },
  c: '<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>'
};
var members_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header-row.svelte-egq6fz th.svelte-egq6fz{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(21 45 62/var(--tw-bg-opacity));border-color:rgb(5 12 18/var(--tw-border-opacity));border-radius:.5rem;border-width:2px;padding:.5rem 1rem;text-align:left}.row.svelte-egq6fz.svelte-egq6fz{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.row.svelte-egq6fz.svelte-egq6fz:nth-child(2n){--tw-bg-opacity:1;background-color:rgb(9 20 29/var(--tw-bg-opacity))}.row.svelte-egq6fz>td.svelte-egq6fz{--tw-border-opacity:1;border-color:rgb(5 12 18/var(--tw-border-opacity));border-radius:.5rem;border-width:2px;font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}@media only screen and (max-width:640px){#skills.svelte-egq6fz.svelte-egq6fz{min-width:30rem}}",
  map: null
};
const iconColor = "#2A5776";
const Members = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const members = data;
  $$result.css.add(css);
  return `<section class="${"text-gray-200 bg-sec-800 py-14"}">${validate_component(Container, "Container").$$render($$result, { heading: "Members" }, {}, {
    default: () => {
      return `<div class="${"overflow-x-auto"}"><table class="${"w-full mt-10"}"><thead><tr class="${"header-row svelte-egq6fz"}"><th class="${"svelte-egq6fz"}">Name</th>
            <th class="${"svelte-egq6fz"}">Skills</th></tr></thead>
        <tbody>${each(members, (member) => {
        return `<tr class="${"row svelte-egq6fz"}"><td class="${"svelte-egq6fz"}"><div class="${"flex flex-row w-full space-x-2"}"><p class="${"whitespace-nowrap"}">${escape(member.name)}</p>
                  ${member.email ? `<a class="${"text-sec-100"}" href="${"mailto:" + escape(member.email)}">${validate_component(Icon, "IconHi").$$render($$result, { src: Mail, solid: true, class: "w-5 h-5" }, {}, {})}</a>` : ``}
                  ${member.github ? `<a class="${"text-sec-100"}"${add_attribute("href", member.github, 0)}>${validate_component(Icon$1, "Icon").$$render($$result, {
          src: AiFillGithub,
          className: "h-5 w-5",
          color: iconColor
        }, {}, {})}</a>` : ``}
                </div></td>
              <td class="${"svelte-egq6fz"}">${member.skills && member.skills.length ? `<div id="${"skills"}" class="${"flex flex-wrap sm:w-full svelte-egq6fz"}">${each(member.skills, (skill) => {
          return `<div class="${"text-xs py-1.5 px-2 rounded border bg-sec-400 border-sec-600 text-tert-200 m-0.5"}">${escape(skill)}
                      </div>`;
        })}
                  </div>` : ``}
                ${member.details ? `<p class="${"mt-1 ml-1 text-xs"}">${escape(member.details)}</p>` : ``}</td>
            </tr>`;
      })}</tbody></table></div>`;
    }
  })}</section>

<section class="${"py-14 bg-sec-800"}">${validate_component(Container, "Container").$$render($$result, { heading: "Admins" }, {}, {
    default: () => {
      return `${validate_component(Admins, "Admins").$$render($$result, { className: "mt-10" }, {}, {})}`;
    }
  })}
</section>`;
});
export { Members as default };
