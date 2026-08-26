import { MigrationInterface, QueryRunner } from "typeorm";

export class QuitarPhone1787763067763 implements MigrationInterface {
    name = 'QuitarPhone1787763067763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20) NOT NULL`);
    }

}
