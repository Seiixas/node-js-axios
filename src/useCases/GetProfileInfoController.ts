import { Request, Response } from "express";
import { GetProfileInfoUseCase } from "./GetProfileInfoUseCase";

class GetProfileInfoController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getProfileInfoUseCase = new GetProfileInfoUseCase();

    const githubData = await getProfileInfoUseCase.execute(id);

    return response.json(githubData);
  }

}

export { GetProfileInfoController };