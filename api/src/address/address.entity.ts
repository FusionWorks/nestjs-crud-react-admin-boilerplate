import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { CompanyEntity } from '../company/company.entity';

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
  companyId: number;

  @ManyToOne((type) => CompanyEntity, (company) => company.addresses)
  company: CompanyEntity;

}
