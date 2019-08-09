import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, AfterLoad, OneToMany, RelationId, ManyToMany, JoinTable } from 'typeorm';
import { AddressEntity } from '../address/address.entity';
import { Type } from 'class-transformer';

@Entity({ name: 'supplier' })
export class SupplierEntity extends BaseEntity {
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

  @OneToMany((type) => AddressEntity, (address) => address.supplier)
  @Type((t) => AddressEntity)
  addresses: AddressEntity[];
}
