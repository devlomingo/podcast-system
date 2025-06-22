import { MigrationInterface, QueryRunner } from "typeorm";

export class ProgramsFeatureTables1750517102073 implements MigrationInterface {
    name = 'ProgramsFeatureTables1750517102073'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."programs_type_enum" AS ENUM('podcast', 'documentary')`);
        await queryRunner.query(`CREATE TABLE "programs" ("id" SERIAL NOT NULL, "type" "public"."programs_type_enum" NOT NULL, "title" text NOT NULL, "description" text, "language" character varying, "duration" integer, "published_at" TIMESTAMP, "category" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_d43c664bcaafc0e8a06dfd34e05" PRIMARY KEY ("id")); COMMENT ON COLUMN "programs"."type" IS 'نوع البرنامج'; COMMENT ON COLUMN "programs"."title" IS 'العنوان (تم تبسيطه كنص عادي بدلاً من json متعدد اللغات)'; COMMENT ON COLUMN "programs"."description" IS 'الوصف (تم تبسيطه كنص عادي بدلاً من json متعدد اللغات)'; COMMENT ON COLUMN "programs"."duration" IS 'المدة بالدقائق'; COMMENT ON COLUMN "programs"."category" IS '⚠️ هذا الحقل بديل مؤقت للتصنيفات.
      من المفترض أن يكون هناك علاقة Many-to-Many بين البرامج والتصنيفات عبر جدول وسيط (program_categories)،
      ولكن تم تبسيط هذا الحقل لمرحلة الـ MVP فقط لتسهيل التنفيذ وتسريع التسليم.'`);
        await queryRunner.query(`CREATE TYPE "public"."import_programs_source_enum" AS ENUM('excel', 'firebase', 'json')`);
        await queryRunner.query(`CREATE TABLE "import_programs" ("id" SERIAL NOT NULL, "source" "public"."import_programs_source_enum" NOT NULL, "file_path" character varying, "metadata" jsonb, "processed" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_45e51e3da993d2ec44349bbf2ee" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "import_programs"`);
        await queryRunner.query(`DROP TYPE "public"."import_programs_source_enum"`);
        await queryRunner.query(`DROP TABLE "programs"`);
        await queryRunner.query(`DROP TYPE "public"."programs_type_enum"`);
    }

}
