//* components *//
import { SkillCard } from "./";
import { SkillsFeedHoc } from "../ui";

export const BackendSkillsFeed: React.FC = () => {
  return (
    <SkillsFeedHoc>
      <SkillCard img="/skills/nodejs.svg" name="NodeJs" />
      <SkillCard img="/skills/expressjs.svg" name="ExpressJs" />
      <SkillCard img="/skills/nestjs.svg" name="NestJs" />
      <SkillCard img="/skills/graphql.svg" name="GraphQL" />
      <SkillCard img="/skills/postgresql.svg" name="PostgreSQL" />
      <SkillCard img="/skills/mysql.svg" name="MySQL" />
      <SkillCard img="/skills/mongodb.svg" name="MongoDB" />
      <SkillCard img="/skills/sequelize.svg" name="Sequelize" />
      <SkillCard img="/skills/mongoose.svg" name="Mongoose" />
      <SkillCard img="/skills/typeorm.svg" name="TypeORM" />
      <SkillCard img="/skills/firebase.svg" name="Firabase" />
      <SkillCard img="/skills/supabase.svg" name="Supabase" />
      <SkillCard img="/skills/swagger.svg" name="Swagger" />
    </SkillsFeedHoc>
  );
};
