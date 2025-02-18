import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AlfrescoDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_path: string;

  @Column()
  document_type: string;

  @Column({ type: 'int' })
  reference_id: number;
}
