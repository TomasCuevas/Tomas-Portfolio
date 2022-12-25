import { useContext } from "react";

//* icons *//
import { MdMenu } from "react-icons/md";

//* context *//
import { UIContext } from "../../context";

export const Header: React.FC = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <header className="flex h-20 bg-orange px-4 justify-between sticky top-0 left-0 shadow-2xl z-20">
      <img src="/t-logo.png" alt="logo" className="h-full" />
      <button type="button">
        <MdMenu
          onClick={toggleSidebar}
          className="h-10 w-10 text-red relative z-50"
        />
      </button>
    </header>
  );
};
