import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import {
  connect,
  Connection,
  connection,
  disconnect,
  Mongoose,
} from 'mongoose';
import { mongoDbUrl } from '../env/envoriment';

@Injectable()
export class MongooseConfigService implements OnModuleInit, OnModuleDestroy {
  private mongooseInstance: Mongoose;

  async onModuleInit() {
    this.mongooseInstance = await connect(mongoDbUrl);
    console.log('🟢 Mongoose connected');
  }

  async onModuleDestroy() {
    await disconnect();
    console.log('🔴 Mongoose disconnected');
  }

  getConnection(): Connection {
    return connection;
  }

  getMongoose(): Mongoose {
    return this.mongooseInstance;
  }
}
