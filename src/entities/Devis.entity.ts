import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from './Client.entity';

@Entity()
export class Devis {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date_creation: Date;

  @Column({ type: 'float' })
  montant_total: number;

  @Column()
  statut: string;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: 'CASCADE' })
  client: Client;
}
