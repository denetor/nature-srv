import { Module } from '@nestjs/common';
import { WorldController } from './world.controller';

@Module({
  controllers: [WorldController]
})
export class WorldModule {}
