import { Type } from "class-transformer";
import { IsIn, IsOptional } from "class-validator";

export class ListLoanRequestsDto {
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @IsOptional ()
  @IsIn(["pending" , "Prestado"])
  @Type(() => Number)
  toolId?: number;
}

