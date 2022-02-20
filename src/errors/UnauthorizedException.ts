import { AppError } from "./AppError";

class UnauthorizedException extends AppError {
  constructor() {
    super('You are not allowed to access', 401);
  }
}

export { UnauthorizedException }