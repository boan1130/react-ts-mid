import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentFormData, ListResponse } from '../interface/Student';
import { api } from '../enum/api';
import { asyncPost, asyncGet } from '../utils/fetch';

const Insert = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<StudentFormData>({
        userName: '',
        sid: '',
        name: '',
        department: '',
        grade: '',
        class: '',
        Email: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // 驗證座號是否為有效數字
            const seatNumber = parseInt(formData.sid);
            if (isNaN(seatNumber)) {
                alert('請輸入有效的座號數字');
                return;
            }

            // 檢查座號是否超出合理範圍
            if (seatNumber <= 0 || seatNumber > 100) {
                alert('請輸入有效的座號（1-100之間）');
                return;
            }

            // 檢查座號是否存在
            const checkResponse = await asyncGet<ListResponse>(api.findAll);
            if (checkResponse.code === 200) {
                // 將所有座號轉換為數字進行比較
                const existingSeats = checkResponse.body
                    .map(student => parseInt(student.sid))
                    .filter(seat => !isNaN(seat));  // 過濾掉無效的座號

                if (existingSeats.includes(seatNumber)) {
                    alert(`座號 ${seatNumber} 已經存在！`);
                    return;
                }

                // 如果座號不存在，進行新增
                const response = await asyncPost(api.insertOne, formData);
                if (response.code === 200) {
                    alert('新增成功！');
                    navigate('/all');
                } else {
                    alert(response.message || '新增失敗');
                }
            }
        } catch (error) {
            console.error('新增失敗:', error);
            alert('新增時發生錯誤');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">新增學生資料</h1>
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
                            type="number"
                            name="sid"
                            value={formData.sid}
                            onChange={handleInputChange}
                            min="1"
                            max="100"
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
                            新增
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

export default Insert;