import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  prix_unitaire: number;

  @Column({ type: 'int' })
  stock_disponible: number;
}
