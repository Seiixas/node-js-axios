import { AppError } from "./AppError";

export class NotFoundException extends AppError {
  constructor() {
    super('User not found', 404);
  }
}