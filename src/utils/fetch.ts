import { Student, ListResponse, SingleResponse, ApiResponse } from '../interface/Student';

export const asyncGet = async <T extends ListResponse | SingleResponse>(url: string): Promise<T> => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('GET 請求錯誤:', error);
        throw error;
    }
};

export const asyncPost = async (url: string, data: Student): Promise<SingleResponse> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('POST 請求錯誤:', error);
        throw error;
    }
};

export const asyncPut = async (url: string, data: Student): Promise<SingleResponse> => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('PUT 請求錯誤:', error);
        throw error;
    }
};

export const asyncDelete = async (url: string): Promise<ApiResponse<void>> => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error('DELETE 請求錯誤:', error);
        throw error;
    }
};