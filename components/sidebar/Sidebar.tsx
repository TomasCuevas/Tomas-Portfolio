import { useContext } from "react";

//* icons *//
import { MdClose } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <aside className="h-screen w-screen bg-orange backdrop-blur-xl fixed top-0 left-0 z-50">
      <div className="flex justify-end items-center h-20 p-4">
        <button type="button">
          <MdClose
            onClick={toggleSidebar}
            className="h-10 w-10 text-red relative z-50"
          />
        </button>
      </div>
    </aside>
  );
};
