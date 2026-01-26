import type {BaseEntity} from "../models/entities/baseEnity.ts";
import type {BaseDTO} from "../models/dtos/baseDto.ts";

export interface BaseMapper<E extends BaseEntity, D extends BaseDTO> {
    toEntity(dto: D): E;
    toDTO(entity: E): D;
}