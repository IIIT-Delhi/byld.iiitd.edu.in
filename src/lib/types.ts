export interface Member {
  name: String;
  email: string;
  github: string;
  skills: [String];
  details: String;
}

export interface Position {
  name: String;
  position: String;
  image: string;
}

export interface NavLink {
  name: String;
  href: string;
}

export interface Project {
  title: String;
  subtitle: String;
  status: String;
  link: string;
  contributors: String[];
  tech: String[];
}
