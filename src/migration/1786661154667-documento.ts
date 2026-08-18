import { MigrationInterface, QueryRunner } from "typeorm";

export class Documento1786661154667 implements MigrationInterface {
    name = 'Documento1786661154667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "documento" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "documento"`);
    }

}
