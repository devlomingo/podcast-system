import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProgramsFeatureTables1750464688621 implements MigrationInterface {
    name = 'CreateProgramsFeatureTables1750464688621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" jsonb NOT NULL, "deleted_at" TIMESTAMP, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")); COMMENT ON COLUMN "categories"."name" IS 'اسم التصنيف متعدد اللغات'`);
        await queryRunner.query(`CREATE TABLE "program_categories" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "program_id" integer, "category_id" integer, CONSTRAINT "PK_25646f607ec9ac896ad0c661ee0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."programs_type_enum" AS ENUM('podcast', 'documentary')`);
        await queryRunner.query(`CREATE TABLE "programs" ("id" SERIAL NOT NULL, "type" "public"."programs_type_enum" NOT NULL, "title" jsonb NOT NULL, "description" jsonb, "language" character varying, "duration" integer, "published_at" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d43c664bcaafc0e8a06dfd34e05" PRIMARY KEY ("id")); COMMENT ON COLUMN "programs"."type" IS 'نوع البرنامج'; COMMENT ON COLUMN "programs"."title" IS 'العنوان متعدد اللغات'; COMMENT ON COLUMN "programs"."description" IS 'الوصف متعدد اللغات'; COMMENT ON COLUMN "programs"."duration" IS 'المدة بالدقائق'`);
        await queryRunner.query(`ALTER TABLE "program_categories" ADD CONSTRAINT "FK_9ffc3dcde33bf60737b597c964b" FOREIGN KEY ("program_id") REFERENCES "programs"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "program_categories" ADD CONSTRAINT "FK_91e064c7e56c34f43ada6d2f8cd" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "program_categories" DROP CONSTRAINT "FK_91e064c7e56c34f43ada6d2f8cd"`);
        await queryRunner.query(`ALTER TABLE "program_categories" DROP CONSTRAINT "FK_9ffc3dcde33bf60737b597c964b"`);
        await queryRunner.query(`DROP TABLE "programs"`);
        await queryRunner.query(`DROP TYPE "public"."programs_type_enum"`);
        await queryRunner.query(`DROP TABLE "program_categories"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
