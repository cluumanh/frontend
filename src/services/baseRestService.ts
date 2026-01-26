import type {BaseEntity} from "../models/entities/baseEnity.ts";
import type {BaseDTO} from "../models/dtos/baseDto.ts";
import {ResourceService} from "./resourceService.ts";


export abstract class BaseService<
    DTO extends BaseDTO,
    ENTITY extends BaseEntity
> extends ResourceService<ENTITY, DTO> {

}
