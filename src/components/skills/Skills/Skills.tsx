import { useContext } from "react";

//* COMPONENTS *//
import {
  BackendSkillsFeed,
  FrontendSkillsFeed,
  SectionTitle,
  SectionXHoc,
  SkillChooseSection,
  TestingSkillsFeed,
  ToolsSkillsFeed,
} from "@/components";

//* CONTEXT *//
import { UIContext } from "@/context";

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
