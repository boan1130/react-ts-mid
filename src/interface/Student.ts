export interface Student {
    _id?: string;
    userName: string;
    sid: string;
    name: string;
    department: string;
    grade: string;
    class: string;
    Email: string;
    absences?: number;
}

export interface ApiResponse<T> {
    code: number;
    message?: string;
    body: T;
}

export type ListResponse = ApiResponse<Student[]>;
export type SingleResponse = ApiResponse<Student>;

export type StudentFormData = Omit<Student, '_id' | 'absences'>;