import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { SupplierEntity } from '../supplier/supplier.entity';

@Entity({ name: 'address' })
export class AddressEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  zip: string;

  @Column()
  notes: string;

  @Column('simple-json')
  geo: { lng: string, lat: string };

  @Column({ nullable: true })
  supplierId: number;

  @ManyToOne((type) => SupplierEntity, (supplier) => supplier.addresses)
  supplier: SupplierEntity;

}
