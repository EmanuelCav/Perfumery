import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/users/users.module';
import { ProductsModule } from './app/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(
    ),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: process.env.NODE_DEV !== 'production'
      })
    }),
    ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
