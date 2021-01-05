import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Laptop{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    brand!: string;

    @Column()
    model!: string;
    
    @Column()
    ram!: string;

    @Column()
    storage!: string;
    
    @Column()
    display!: string;
    
    @Column('bool')
    camera!: boolean;
}