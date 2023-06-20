import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { FetchAdapter } from 'src/common/adapters/fetch.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: FetchAdapter,
  ) {}

  async executeSeed() {
    this.pokemonService.deleteAll();
    const data: PokeResponse = await this.http.get(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    const pokemons = data.results.map(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      return { name, no };
    });
    this.pokemonService.createMany(pokemons);

    return 'Seed executed';
  }
}
