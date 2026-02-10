import type {BaseMapper} from "../mappers/base.mapper.ts";
import type {BaseViewModel} from "../models/viewmodel/BaseViewModel.ts";
import type {BaseDto} from "../models/dto/BaseDto.ts";
import type {AxiosInstance} from "axios";
import type {ListParams} from "../models/requests/ListParams.ts";

export class ResourceService<ViewModel extends BaseViewModel, DTO extends BaseDto> {
    private readonly endpoint: string;
    private readonly mapper: BaseMapper<ViewModel, DTO>;
    private readonly httpClient: AxiosInstance;

    constructor(
        endpoint: string,
        mapper: BaseMapper<ViewModel, DTO>,
        httpClient: AxiosInstance
    ) {
        this.endpoint = endpoint;
        this.mapper = mapper;
        this.httpClient = httpClient;
    }

    async getList(params?: ListParams): Promise<{ data: ViewModel[]; total: number }> {
        const res = await this.httpClient.get(this.endpoint, { params });
        const page = res.data;

        return {
            data: page.content.map((dto: DTO) =>
                this.mapper.toViewModel(dto)
            ),
            total: page.totalElements,
        };
    }

    async getOne(id: number | string): Promise<ViewModel> {
        const res = await this.httpClient.get(`${this.endpoint}/${id}`);
        return this.mapper.toViewModel(res.data);
    }

    async create(entity: ViewModel): Promise<ViewModel> {
        const dto = this.mapper.toDTO(entity);
        const res = await this.httpClient.post(this.endpoint, dto);
        return this.mapper.toViewModel(res.data);
    }

    async update(id: number, entity: ViewModel): Promise<ViewModel> {
        const dto = this.mapper.toDTO(entity);
        const res = await this.httpClient.put(`${this.endpoint}/${id}`, dto);
        return this.mapper.toViewModel(res.data);
    }

    async delete(id: number | string): Promise<ViewModel> {
        const res = await this.httpClient.delete(`${this.endpoint}/${id}`);
        return this.mapper.toViewModel(res.data);
    }
}
