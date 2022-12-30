import { createContext, useState, useLayoutEffect } from "react";

//* CONTEXT *//
//* CONTEXT *//
interface UIContextProps {
  isMobile: boolean;
  isSidebarOpen: boolean;
  toggleSidebar(): void;
}

export const UIContext = createContext({} as UIContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface UIProviderProps {
  children: React.ReactNode;
}

const useBrowserLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useBrowserLayoutEffect(() => {
    setIsMobile(() => window.innerWidth < 768);

    const event = window.addEventListener("resize", () => {
      setIsMobile(() => window.innerWidth < 768);
    });

    return () => removeEventListener("resize", () => event);
  }, []);

  return (
    <UIContext.Provider
      value={{
        // getters
        isMobile,
        isSidebarOpen,

        // methods
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
