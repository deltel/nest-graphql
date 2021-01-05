import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Laptop extends BaseEntity{
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

export class CreateLaptopInput {
    brand: string;
    model: string;
    ram: string;
    storage: string;
    display: string;
    camera: boolean;
}

export class UpdateLaptopInput {
    brand?: string;
    model?: string;
    ram?: string;
    storage?: string;
    display?: string;
    camera?: boolean;
}