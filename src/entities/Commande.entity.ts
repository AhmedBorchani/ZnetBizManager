import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from './Client.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date_commande: Date;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: 'CASCADE' })
  client: Client;
}
