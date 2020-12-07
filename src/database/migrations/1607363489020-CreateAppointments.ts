import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1607363489020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'appointments',
            columns: [
                {
                    name: 'appointment_id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'appointment_provider',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'appointment_date',
                    type: 'timestamp with time zone',
                    isNullable: false
                }
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }

}
