import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Devis } from './Devis.entity';
import { Client } from './Client.entity';

@Entity()
export class Facture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date_emission: Date;

  @Column({ type: 'float' })
  montant_total: number;

  @Column()
  statut_paiement: string;

  @ManyToOne(() => Devis, (devis) => devis.id, { onDelete: 'SET NULL' })
  devis: Devis;

  @ManyToOne(() => Client, (client) => client.id, { onDelete: 'CASCADE' })
  client: Client;
}
