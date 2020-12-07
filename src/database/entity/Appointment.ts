import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm'

import User from './User'

@Entity('appointments')
export default class Appointment {
    @PrimaryGeneratedColumn('uuid')
    appointment_id: string;

    @Column()
    appointment_provider: string;

    @Column()
    provider_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name:  'provider_id'})
    provider: User;


    @Column('timestamp with time zone')
    appointment_date: Date

}