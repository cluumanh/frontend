import type {BaseMapper} from "../mappers/baseMapper.ts";
import type {BaseEntity} from "../models/entities/baseEnity.ts";
import type {BaseDTO} from "../models/dtos/baseDto.ts";
import type {AxiosInstance} from "axios";
import type {ListParams} from "../models/requests/listParams.ts";

export class ResourceService<ENTITY extends BaseEntity, DTO extends BaseDTO> {
    private readonly endpoint: string;
    private readonly mapper: BaseMapper<ENTITY, DTO>;
    private readonly httpClient: AxiosInstance;

    constructor(
        endpoint: string,
        mapper: BaseMapper<ENTITY, DTO>,
        httpClient: AxiosInstance
    ) {
        this.endpoint = endpoint;
        this.mapper = mapper;
        this.httpClient = httpClient;
    }

    async getList(params?: ListParams): Promise<{ data: ENTITY[]; total: number }> {
        const res = await this.httpClient.get(this.endpoint, { params });
        const page = res.data;

        return {
            data: page.content.map((dto: DTO) =>
                this.mapper.toEntity(dto)
            ),
            total: page.totalElements,
        };
    }

    async getOne(id: number | string): Promise<ENTITY> {
        const res = await this.httpClient.get(`${this.endpoint}/${id}`);
        return this.mapper.toEntity(res.data);
    }

    async create(entity: ENTITY): Promise<ENTITY> {
        const dto = this.mapper.toDTO(entity);
        const res = await this.httpClient.post(this.endpoint, dto);
        return this.mapper.toEntity(res.data);
    }

    async update(id: number, entity: ENTITY): Promise<ENTITY> {
        const dto = this.mapper.toDTO(entity);
        const res = await this.httpClient.put(`${this.endpoint}/${id}`, dto);
        return this.mapper.toEntity(res.data);
    }

    async delete(id: number | string): Promise<ENTITY> {
        const res = await this.httpClient.delete(`${this.endpoint}/${id}`);
        return this.mapper.toEntity(res.data);
    }
}
