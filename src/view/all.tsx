import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Student, ListResponse } from '../interface/Student';
import { api } from '../enum/api';
import { asyncGet, asyncDelete } from '../utils/fetch';

const All = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const cache = useRef<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cache.current) {
            cache.current = true;
            fetchStudents();
        }
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await asyncGet<ListResponse>(api.findAll);
            if (response.code === 200) {
                setStudents(response.body);
            }
        } catch (error) {
            console.error('讀取資料失敗:', error);
            alert('讀取資料時發生錯誤');
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('確定要刪除這筆資料嗎？')) return;

        try {
            const response = await asyncDelete(`${api.deleteStudent}?id=${id}`);
            if (response.code === 200) {
                alert('刪除成功！');
                await fetchStudents();
            } else {
                alert(response.message || '刪除失敗');
            }
        } catch (error) {
            console.error('刪除失敗:', error);
            alert('刪除時發生錯誤');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">學生資料列表</h1>
                <button
                    onClick={() => navigate('/insert')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    新增學生
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map((student) => (
                    <div key={student._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md">
                        <p><span className="font-bold">學號:</span> {student.userName}</p>
                        <p><span className="font-bold">座號:</span> {student.sid}</p>
                        <p><span className="font-bold">姓名:</span> {student.name}</p>
                        <p><span className="font-bold">系所:</span> {student.department}</p>
                        <p><span className="font-bold">年級:</span> {student.grade}</p>
                        <p><span className="font-bold">班級:</span> {student.class}</p>
                        <p><span className="font-bold">Email:</span> {student.Email}</p>
                        <p><span className="font-bold">缺席次數:</span> {student.absences ?? 0}</p>
                        <div className="mt-4 flex gap-2">
                            <button
                                onClick={() => student._id && navigate(`/update/${student._id}`)}
                                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                            >
                                編輯
                            </button>
                            <button
                                onClick={() => student._id && handleDelete(student._id)}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                            >
                                刪除
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default All;