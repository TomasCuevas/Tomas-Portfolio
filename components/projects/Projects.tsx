//* components *//
import { SectionTitle, SectionXHoc } from "../ui";
import { DesktopProjectsFeed, MobileProjectsFeed } from "./";

export const Projects: React.FC = () => {
  return (
    <SectionXHoc id="projects">
      <SectionTitle title="Projectos" />
      <MobileProjectsFeed />
      <DesktopProjectsFeed />
    </SectionXHoc>
  );
};
