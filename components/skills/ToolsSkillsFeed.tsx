//* components *//
import { SkillCard } from "./";
import { SkillsFeedHoc } from "../ui";

export const ToolsSkillsFeed: React.FC = () => {
  return (
    <SkillsFeedHoc>
      <SkillCard img="/skills/docker.svg" name="Docker" />
      <SkillCard img="/skills/git.svg" name="Git" />
      <SkillCard img="/skills/github.svg" name="GitHub" />
      <SkillCard img="/skills/npm.svg" name="NPM" />
      <SkillCard img="/skills/vitejs.svg" name="Vite" />
      <SkillCard img="/skills/vscode.svg" name="VS Code" />
    </SkillsFeedHoc>
  );
};
