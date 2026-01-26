import type {
    DataProvider,
    GetListParams,
    GetListResult,
    RaRecord,
} from 'react-admin';

import { serviceRegistry } from './serviceRegistry';
import type {ListParams} from "../../models/requests/listParams.ts";

const notImplemented = async (): Promise<never> => {
    throw new Error('Not implemented');
};

export const dataProvider: DataProvider = {
    getList: async <RecordType extends RaRecord>(
        resource: string,
        params: GetListParams
    ): Promise<GetListResult<RecordType>> => {

        const service =
            serviceRegistry[resource as keyof typeof serviceRegistry];

        if (!service) {
            throw new Error(`No service registered for ${resource}`);
        }

        const listParams: ListParams = {
            page: params.pagination?.page ?? 1,
            size: params.pagination?.perPage ?? 10,
            sort: params.sort
                ? `${params.sort.field},${params.sort.order}`
                : undefined,
            filters: params.filter,
        };

        // map RA params → service params
        const result = await service.getList(listParams);

        return {
            data: result.data as unknown as RecordType[],
            total: result.total,
        };
    },
    getOne:notImplemented as DataProvider['getOne'],
    getMany: notImplemented as DataProvider['getMany'],
    getManyReference: notImplemented as DataProvider['getManyReference'],
    create: notImplemented as DataProvider['create'],
    update: notImplemented as DataProvider['update'],
    delete: notImplemented as DataProvider['delete'],
    updateMany: notImplemented as DataProvider['updateMany'],
    deleteMany: notImplemented as DataProvider['deleteMany'],
};
