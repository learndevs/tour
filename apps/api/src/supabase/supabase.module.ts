import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from './supabase.service';

@Module({
  imports: [ConfigModule], // for accessing .env variables
  providers: [SupabaseService],
  exports: [SupabaseService], // <--- VERY IMPORTANT: export it so others can use
})
export class SupabaseModule {}
