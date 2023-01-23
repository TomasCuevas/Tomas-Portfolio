import { useContext } from "react";

//* components *//
import {
  BackendSkillsFeed,
  FrontendSkillsFeed,
  SkillChooseSection,
  TestingSkillsFeed,
} from "./";
import { SectionTitle, SectionXHoc } from "../ui";

//* context *//
import { UIContext } from "../../context";
import { ToolsSkillsFeed } from "./ToolsSkillsFeed";

export const Skills: React.FC = () => {
  const { skillSectionChoosed } = useContext(UIContext);

  return (
    <SectionXHoc id="skills">
      <SectionTitle title="Mis habilidades" />
      <div className="flex flex-col items-start gap-6 md:mt-5 md:flex-row">
        <SkillChooseSection />
        {skillSectionChoosed === "frontend" ? <FrontendSkillsFeed /> : null}
        {skillSectionChoosed === "backend" ? <BackendSkillsFeed /> : null}
        {skillSectionChoosed === "testing" ? <TestingSkillsFeed /> : null}
        {skillSectionChoosed === "tools" ? <ToolsSkillsFeed /> : null}
      </div>
    </SectionXHoc>
  );
};
