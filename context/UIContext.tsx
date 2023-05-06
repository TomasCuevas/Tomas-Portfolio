import { createContext, useState, Dispatch } from "react";

//* CONTEXT *//
//* CONTEXT *//
interface UIContextProps {
  isSidebarOpen: boolean;
  projectsViewStyle: "list" | "card";
  skillSectionChoosed: "frontend" | "backend" | "tools" | "testing";
  setProjectsViewStyle: Dispatch<"list" | "card">;
  setSkillSectionChoosed: Dispatch<
    "frontend" | "backend" | "tools" | "testing"
  >;
  toggleSidebar(): void;
}

export const UIContext = createContext({} as UIContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [projectsViewStyle, setProjectsViewStyle] = useState<"list" | "card">(
    "list"
  );
  const [skillSectionChoosed, setSkillSectionChoosed] = useState<
    "frontend" | "backend" | "tools" | "testing"
  >("frontend");

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
