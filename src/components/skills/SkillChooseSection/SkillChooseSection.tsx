import { useContext } from "react";

//* CONTEXT *//
import { UIContext } from "@/context";

export const SkillChooseSection: React.FC = () => {
  const { skillSectionChoosed, setSkillSectionChoosed } = useContext(UIContext);

  const buttonClass = (skill: string): string => {
    return `border-b ${
      skillSectionChoosed === skill
        ? "border-white text-white bg-darkLight"
        : "border-light/50 text-light/50"
    }  px-2 pb-[2px] text-xl font-light transition-all duration-300 rounded-t-md hover:bg-darkLight hover:text-white md:border-b-0 md:border-l-2 md:rounded-t-none md:rounded-r-md md:py-4`;
  };

  return (
    <div className="flex w-full justify-center md:w-auto md:flex-col">
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
