//* components *//
import { SkillCard } from "./";
import { SkillsFeedHoc } from "../ui";

export const FrontendSkillsFeed: React.FC = () => {
  return (
    <SkillsFeedHoc>
      <SkillCard img="/skills/react.svg" name="React" />
      <SkillCard img="/skills/css.svg" name="CSS" />
      <SkillCard img="/skills/html5.svg" name="HTML" />
      <SkillCard img="/skills/javascript.svg" name="JavaScript" />
      <SkillCard img="/skills/NEXTJS.svg" name="NextJs" />
      <SkillCard img="/skills/tailwindcss.svg" name="Tailwind" />
      <SkillCard img="/skills/typescript.svg" name="TypeScript" />
      <SkillCard img="/skills/redux.svg" name="Redux" />
      <SkillCard img="/skills/materialui.svg" name="Material UI" />
      <SkillCard img="/skills/bootstrap.svg" name="Boostrap" />
      <SkillCard img="/skills/chakra-ui.svg" name="Chakra UI" />
      <SkillCard img="/skills/reactquery.svg" name="React Query" />
      <SkillCard img="/skills/styledcomponents.svg" name="Styled Components" />
    </SkillsFeedHoc>
  );
};
