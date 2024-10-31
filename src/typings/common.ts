export interface Common {
    readonly id: number;
}

export interface PaginationResult<T> {
    content: Array<T>;
    totalItems: number;
    totalElements: number;
}

export interface PasswordData {
    password: string;
    confirm_password: string;
}
