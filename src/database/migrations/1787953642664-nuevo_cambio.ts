import { MigrationInterface, QueryRunner } from "typeorm";

export class NuevoCambio1787953642664 implements MigrationInterface {
    name = 'NuevoCambio1787953642664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "numberphone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_669b7ff6d1d097d3fff03e782e5"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "textlineal"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "textl" character varying(150) NOT NULL DEFAULT 'Vergas'`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_44795182226a29f56fbf2864350" UNIQUE ("textl")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "text2" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "text2"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_44795182226a29f56fbf2864350"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "textl"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "textlineal" character varying(150) NOT NULL DEFAULT 'Vergas'`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_669b7ff6d1d097d3fff03e782e5" UNIQUE ("textlineal")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "numberphone" character varying(20) NOT NULL`);
    }

}
