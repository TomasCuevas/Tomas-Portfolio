import { useContext } from "react";

//* DATA *//
import projects from "@/data/projects.json";

//* ICONS *//
import { BsGridFill, BsGrid, BsListUl } from "react-icons/bs";

//* COMPONENTS *//
import { ProjectCard, ProjectCardExpanded } from "@/components";

//* CONTEXT *//
import { UIContext } from "@/context";

export const DesktopProjectsFeed: React.FC = () => {
  const { projectsViewStyle, setProjectsViewStyle } = useContext(UIContext);

  return (
    <div>
      <div className="mb-5 mt-2 hidden items-center justify-end gap-5 px-8 lg:flex">
        <button onClick={() => setProjectsViewStyle("list")}>
          <BsListUl
            className={`h-9 w-9 ${
              projectsViewStyle === "list" ? "text-purple" : "text-white"
            }`}
          />
        </button>
        <button onClick={() => setProjectsViewStyle("card")}>
          {projectsViewStyle === "card" ? (
            <BsGridFill className="h-7 w-7 text-purple" />
          ) : (
            <BsGrid className="h-7 w-7 text-white" />
          )}
        </button>
      </div>
      {projectsViewStyle === "list" ? (
        <div className="hidden w-full grid-cols-1 gap-14 lg:grid">
          {projects.map((project, key) => (
            <ProjectCardExpanded
              key={project.name}
              project={project}
              reverse={key % 2 === 1}
            />
          ))}
        </div>
      ) : (
        <div className="hidden w-full grid-cols-2 gap-10 lg:grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};
