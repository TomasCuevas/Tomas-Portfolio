import { useContext } from "react";

//* CONTEXT *//
import { UIContext } from "@/context";

export const SkillChooseSection: React.FC = () => {
  const { skillSectionChoosed, setSkillSectionChoosed } = useContext(UIContext);

  const buttonClass = (skill: string): string => {
    return `border-b ${
      skillSectionChoosed === skill
        ? "text-dark border-dark bg-gray-300/40 dark:border-white dark:text-white dark:bg-darkLight"
        : "border-light/50 text-gray-500 dark:text-light/50"
    }  px-2 pb-[2px] text-base font-light transition-all rounded-t-md hover:bg-gray-300/40 dark:hover:bg-darkLight hover:text-dark dark:hover:text-white md:border-b-0 md:border-l-2 md:text-xl md:rounded-t-none md:rounded-r-md md:py-4`;
  };

  return (
    <div className="flex w-full justify-center flex-wrap md:w-auto md:flex-col">
      <button
        onClick={() => setSkillSectionChoosed("frontend")}
        className={buttonClass("frontend")}
      >
        Frontend
      </button>
      <button
        onClick={() => setSkillSectionChoosed("backend")}
        className={buttonClass("backend")}
      >
        Backend
      </button>
      <button
        onClick={() => setSkillSectionChoosed("testing")}
        className={buttonClass("testing")}
      >
        Testing
      </button>
      <button
        onClick={() => setSkillSectionChoosed("tools")}
        className={buttonClass("tools")}
      >
        Herramientas
      </button>
    </div>
  );
};
