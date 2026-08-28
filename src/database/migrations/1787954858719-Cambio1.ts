import { MigrationInterface, QueryRunner } from "typeorm";

export class Cambio11787954858719 implements MigrationInterface {
    name = 'Cambio11787954858719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "names" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "name" TO "names"`);
    }

}
