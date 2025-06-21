import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProgramsFeatureTables1750507628479 implements MigrationInterface {
    name = 'CreateProgramsFeatureTables1750507628479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."programs_type_enum" AS ENUM('podcast', 'documentary')`);
        await queryRunner.query(`CREATE TABLE "programs" ("id" SERIAL NOT NULL, "type" "public"."programs_type_enum" NOT NULL, "title" jsonb NOT NULL, "description" jsonb, "language" character varying, "duration" integer, "published_at" TIMESTAMP, "category" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d43c664bcaafc0e8a06dfd34e05" PRIMARY KEY ("id")); COMMENT ON COLUMN "programs"."type" IS 'نوع البرنامج'; COMMENT ON COLUMN "programs"."title" IS 'العنوان متعدد اللغات'; COMMENT ON COLUMN "programs"."description" IS 'الوصف متعدد اللغات'; COMMENT ON COLUMN "programs"."duration" IS 'المدة بالدقائق'; COMMENT ON COLUMN "programs"."category" IS '⚠️ هذا الحقل بديل مؤقت للتصنيفات.
      من المفترض أن يكون هناك علاقة Many-to-Many بين البرامج والتصنيفات عبر جدول وسيط (program_categories)،
      ولكن تم تبسيط هذا الحقل لمرحلة الـ MVP فقط لتسهيل التنفيذ وتسريع التسليم.'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "programs"`);
        await queryRunner.query(`DROP TYPE "public"."programs_type_enum"`);
    }

}
