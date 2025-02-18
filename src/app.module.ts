import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import de toutes les entités
import { Client } from './entities/Client.entity';
import { Utilisateur } from './entities/Utilisateur.entity';
import { Devis } from './entities/Devis.entity';
import { Facture } from './entities/Facture.entity';
import { Commande } from './entities/Commande.entity';
import { LigneCommande } from './entities/LigneCommande.entity';
import { Produit } from './entities/Produit.entity';
import { Stock } from './entities/Stock.entity';
import { AlfrescoDocument } from './entities/AlfrescoDocument.entity';
import { Rapport } from './entities/Rapport.entity';

// Import des modules (si nécessaires)
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Rendre les variables d'environnement accessibles globalement
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,

      // Chargement automatique de toutes les entités
      entities: [__dirname + '/**/*.entity.{js,ts}'],

      // Synchroniser automatiquement les schémas avec la base de données
      synchronize: true,

      // Chargement automatique des entités
      autoLoadEntities: true,

      // Activer les logs pour faciliter le débogage
      logging: true,
    }),
    TypeOrmModule.forFeature([
      Client,
      Utilisateur,
      Devis,
      Facture,
      Commande,
      LigneCommande,
      Produit,
      Stock,
      AlfrescoDocument,
      Rapport,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
