import type {BaseViewModel} from "../models/viewmodel/BaseViewModel.ts";
import type {BaseDto} from "../models/dto/BaseDto.ts";
import {ResourceService} from "./resource.service.ts";


export abstract class BaseService<
    DTO extends BaseDto,
    ViewModel extends BaseViewModel
> extends ResourceService<ViewModel, DTO> {

}
