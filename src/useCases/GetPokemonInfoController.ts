import { Request, Response } from "express";
import { GetPokemonInfoUseCase } from "./GetPokemonInfoUseCase";

class GetPokemonInfoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const getPokemonInfoUseCase = new GetPokemonInfoUseCase();

    const data = await getPokemonInfoUseCase.execute(name)

    return response.json(data);
  }
}

export { GetPokemonInfoController }