import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracion11787764378365 implements MigrationInterface {
    name = 'Migracion11787764378365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "phone" TO "numberphone"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "numberphone" TO "phone"`);
    }

}
