//* COMPONENTS *//
import {
  DesktopProjectsFeed,
  MobileProjectsFeed,
  SectionTitle,
  SectionXHoc,
} from "@/components";

export const Projects: React.FC = () => {
  return (
    <SectionXHoc id="projects">
      <SectionTitle title="Proyectos" />
      <MobileProjectsFeed />
      <DesktopProjectsFeed />
    </SectionXHoc>
  );
};
