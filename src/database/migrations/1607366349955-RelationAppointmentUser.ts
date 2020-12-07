import {MigrationInterface, QueryRunner, TableForeignKey, TableColumn} from "typeorm";

export class RelationAppointmentUser1607366349955 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'appointments',
            new TableColumn( {
                name: 'provider_id',
                type: 'uuid',
                isNullable: true
            })
        )
        await queryRunner.createForeignKey('appointments', new TableForeignKey({
            name: 'AppointmentProvider',
            columnNames: ['provider_id'],
            referencedColumnNames: ['user_id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('apointments', 'AppointmentProvider')

        await queryRunner.dropColumn('appointments', 'provider_id')

    }

}
