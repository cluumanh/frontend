export interface ListParams {
    page?: number;
    size?: number;
    sort?: string;
    filters?: Record<string, string | number | boolean>;
}
