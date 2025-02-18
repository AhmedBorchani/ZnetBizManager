import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Produit } from './Produit.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produit, (produit) => produit.id, { onDelete: 'CASCADE' })
  produit: Produit;

  @Column({ type: 'int' })
  quantite_disponible: number;
}
