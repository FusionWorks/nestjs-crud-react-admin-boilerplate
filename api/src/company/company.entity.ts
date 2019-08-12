import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'company' })
export class CompanyEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'json',
    comment: `[{ name: "string", url: "string"}]`,
    nullable: true,
  })
  cover: Array<{ name: string, url: string }>;

  @OneToMany((type) => AddressEntity, (address) => address.company)
  @Type((t) => AddressEntity)
  addresses: AddressEntity[];
}
