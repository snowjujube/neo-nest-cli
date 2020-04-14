// rely module import
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// config import
import { databaseConfig } from './config';

@Module({
  imports: [ConfigModule.forRoot({
    // isGlobal: true, // 全局注册
    load: [
      databaseConfig // 数据库config
    ],
  }),

  ],
})
export class AppModule {
}
