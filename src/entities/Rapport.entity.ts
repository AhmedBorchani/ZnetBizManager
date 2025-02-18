import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rapport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column('text')
  contenu: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date_creation: Date;
}
