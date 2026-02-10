import type {BaseViewModel} from "../models/viewmodel/BaseViewModel.ts";
import type {BaseDto} from "../models/dto/BaseDto.ts";

export interface BaseMapper<E extends BaseViewModel, D extends BaseDto> {
    toViewModel(dto: D): E;
    toDTO(entity: E): D;
}