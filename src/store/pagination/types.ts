export type paginationFilter = Record<string, unknown>;

export interface PaginationFilterData {
    url: string;
    filter: Partial<paginationFilter>;
}

export interface PaginationParamsData {
    url: string;
    params: Partial<PaginationParams>;
}

export interface PaginationParams {
    page: number;
    size: number;
    ordering?: string;
}

export type paginationState = {
    params: Record<string, PaginationParams>;
    filter: Record<string, paginationFilter>;
    defaultParams: PaginationParams;
};

export interface PaginationAction {
    setParams: (url: string, params: Partial<PaginationParams>) => void;
    setFilter: (url: string, params: Partial<paginationFilter>) => void;
}
