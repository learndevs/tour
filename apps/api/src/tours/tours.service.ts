import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class ToursService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(createTourDto: CreateTourDto) {
    const { data, error } = await this.supabaseService.client
      .from('tours')
      .insert(createTourDto)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll() {
    const { data, error } = await this.supabaseService.client
      .from('tours')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.client
      .from('tours')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async update(id: string, updateTourDto: UpdateTourDto) {
    const { data, error } = await this.supabaseService.client
      .from('tours')
      .update(updateTourDto)
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.client
      .from('tours')
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);
    return { message: 'Tour deleted successfully' };
  }
}
