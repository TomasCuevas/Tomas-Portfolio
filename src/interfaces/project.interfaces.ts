export interface IProject {
  active: boolean;
  cover: string;
  description: string;
  name: string;
  technologies: string[];

  link?: string;
  repository?: string;
}
