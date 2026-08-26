import { MigrationInterface, QueryRunner } from "typeorm";

export class QuitarTest1787765962960 implements MigrationInterface {
    name = 'QuitarTest1787765962960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test1"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test1" character varying(100) NOT NULL`);
    }

}
