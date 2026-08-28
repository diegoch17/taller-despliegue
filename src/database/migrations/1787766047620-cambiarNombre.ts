import { MigrationInterface, QueryRunner } from "typeorm";

export class CambiarNombre1787766047620 implements MigrationInterface {
    name = 'CambiarNombre1787766047620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "numberphone" TO "phone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "phone" TO "numberphone"`);
    }

}
