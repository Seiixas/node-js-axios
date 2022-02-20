import { Router } from 'express';
import { GetPokemonInfoController } from '../useCases/GetPokemonInfoController';

const pokemonRoutes = Router();

const getPokemonInfoController = new GetPokemonInfoController();

pokemonRoutes.get('/pokemon/:name', getPokemonInfoController.handle);

export { pokemonRoutes}