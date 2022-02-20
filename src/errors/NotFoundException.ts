import { AppError } from "./AppError";

export class NotFoundException extends AppError {
  constructor() {
    super('Not found', 404);
  }
}