//* components *//
import { SkillCard } from "../";
import { SkillsFeedHoc } from "@/components/ui";

export const TestingSkillsFeed: React.FC = () => {
  return (
    <SkillsFeedHoc>
      <SkillCard img="/skills/jest.svg" name="Jest" />
      <SkillCard img="/skills/testinglibrary.svg" name="Testing Library" />
      <SkillCard img="/skills/vitest.svg" name="Vitest" />
    </SkillsFeedHoc>
  );
};
