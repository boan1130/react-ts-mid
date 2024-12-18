import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../enum/api';
import { asyncGet, asyncPut } from '../utils/fetch';

interface FormState {
    id:string,
    userName: string;
    sid: string;
    name: string;
    department: string;
    grade: string;
    class: string;
    Email: string;
}

const initialState: FormState = {
    id:'',
    userName: '',
    sid: '',
    name: '',
    department: '',
    grade: '',
    class: '',
    Email: ''
};

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<FormState>(initialState);

    useEffect(() => {
        const fetchStudent = async () => {
            if (!id) return;
            
            try {
                setLoading(true);
                console.log('Fetching student with ID:', id);
                const response = await asyncGet(`${api.findAll}`);
                console.log('API Response:', response);
                
                if (response.code === 200 && Array.isArray(response.body)) {
                    const student = response.body.find(s => s._id === id);
                    console.log('Found student:', student);
                    
                    if (student) {
                        setFormData({
                            id:student._id as string,
                            userName: student.userName,
                            sid: student.sid,
                            name: student.name,
                            department: student.department,
                            grade: student.grade,
                            class: student.class,
                            Email: student.Email
                        });
                    } else {
                        console.log('Student not found');
                        alert('找不到學生資料');
                        navigate('/all');
                    }
                } else {
                    console.log('Invalid response format:', response);
                    alert('讀取資料失敗');
                    navigate('/all');
                }
            } catch (error) {
                console.error('讀取資料失敗:', error);
                alert('讀取資料時發生錯誤');
                navigate('/all');
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        if (!id) return;

        try {
            console.log('Updating student:', formData);
            const response = await asyncPut(`${api.updateStudent}?id=${id}`, formData);
            console.log('Update response:', response);
            
            if (response.code === 200) {
                alert('更新成功！');
                navigate('/all');
            } else {
                alert(response.message || '更新失敗');
            }
        } catch (error) {
            console.error('更新失敗:', error);
            alert('更新時發生錯誤');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (loading) {
        return <div className="text-center py-8">載入中...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">編輯學生資料</h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">學號</label>
                        <input
                            type="text"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">座號</label>
                        <input
                            type="text"
                            name="sid"
                            value={formData.sid}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">姓名</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">系所</label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">年級</label>
                        <select
                            name="grade"
                            value={formData.grade}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">請選擇年級</option>
                            <option value="一年級">一年級</option>
                            <option value="二年級">二年級</option>
                            <option value="三年級">三年級</option>
                            <option value="四年級">四年級</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">班級</label>
                        <input
                            type="text"
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mt-6">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            更新
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/all')}
                            className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition-colors"
                        >
                            取消
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;