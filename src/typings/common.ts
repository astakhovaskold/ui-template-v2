export interface Common {
    readonly id: string;
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
