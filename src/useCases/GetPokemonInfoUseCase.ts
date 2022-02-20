import axios from 'axios';
import { NotFoundException } from '../errors/NotFoundException';
import { UnauthorizedException } from '../errors/UnauthorizedException';
import { IPokedex } from '../interfaces/IPokedex';

class GetPokemonInfoUseCase {
  async execute(name: string): Promise<IPokedex[]> {
    try {
      const requestPokemon = await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
      });

      const pokemonInfo: IPokedex[] = [];

      requestPokemon.data.abilities.forEach((data: any) => {
        pokemonInfo.push({
          name: data.ability.name,
          url: data.ability.url
        })
      })

      return pokemonInfo;
    } catch (err) {
      throw new UnauthorizedException;
    }

  }
}

export { GetPokemonInfoUseCase }