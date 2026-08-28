import { MigrationInterface, QueryRunner } from "typeorm";

export class CambioName1787950894614 implements MigrationInterface {
    name = 'CambioName1787950894614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "text2"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "names" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "numberphone" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "numberphone"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "names"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "text2" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100) NOT NULL`);
    }

}
