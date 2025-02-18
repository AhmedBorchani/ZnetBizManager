import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Commande } from './Commande.entity';
import { Produit } from './Produit.entity';

@Entity()
export class LigneCommande {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Commande, (commande) => commande.id, { onDelete: 'CASCADE' })
  commande: Commande;

  @ManyToOne(() => Produit, (produit) => produit.id, { onDelete: 'CASCADE' })
  produit: Produit;

  @Column({ type: 'int' })
  quantite: number;

  @Column({ type: 'float' })
  prix_total: number;
}
