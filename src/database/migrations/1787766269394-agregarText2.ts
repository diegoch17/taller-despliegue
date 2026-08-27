import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregarText21787766269394 implements MigrationInterface {
    name = 'AgregarText21787766269394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "text2" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "text2"`);
    }

}
