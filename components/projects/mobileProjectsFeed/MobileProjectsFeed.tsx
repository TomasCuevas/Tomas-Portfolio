//* data *//
import projects from "@/data/projects.json";

//* components *//
import { ProjectCard } from "../";

export const MobileProjectsFeed: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 xs:gap-8 md:grid-cols-2 md:gap-4 lg:hidden">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};
