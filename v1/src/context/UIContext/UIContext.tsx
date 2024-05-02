import { createContext, useState, Dispatch } from "react";

//* CONTEXT *//
//* CONTEXT *//
type skillSectionsToChoose = "frontend" | "backend" | "tools" | "testing";
type projectViewStyles = "list" | "card";

interface UIContextProps {
  isSidebarOpen: boolean;
  projectsViewStyle: projectViewStyles;
  skillSectionChoosed: skillSectionsToChoose;
  setProjectsViewStyle: Dispatch<projectViewStyles>;
  setSkillSectionChoosed: Dispatch<skillSectionsToChoose>;
  toggleSidebar(): void;
}

export const UIContext = createContext({} as UIContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projectsViewStyle, setProjectsViewStyle] =
    useState<projectViewStyles>("list");
  const [skillSectionChoosed, setSkillSectionChoosed] =
    useState<skillSectionsToChoose>("frontend");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      if (prev) {
        document.body.classList.remove("body__fix");
      } else {
        document.body.classList.add("body__fix");
      }

      return !prev;
    });
  };

  return (
    <UIContext.Provider
      value={{
        // getters
        isSidebarOpen,
        projectsViewStyle,
        skillSectionChoosed,

        // methods
        toggleSidebar,
        setProjectsViewStyle,
        setSkillSectionChoosed,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
