import { MigrationInterface, QueryRunner } from "typeorm";

export class Textl1787951832996 implements MigrationInterface {
    name = 'Textl1787951832996'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "names" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "textl" character varying(150) NOT NULL DEFAULT 'Vergas'`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_44795182226a29f56fbf2864350" UNIQUE ("textl")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_44795182226a29f56fbf2864350"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "textl"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "names"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100) NOT NULL`);
    }

}
