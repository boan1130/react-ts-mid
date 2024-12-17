import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-3xl font-bold text-center mb-8">學生管理系統</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => navigate('/all')}
                        className="p-6 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        查看所有學生
                    </button>
                    <button
                        onClick={() => navigate('/insert')}
                        className="p-6 text-xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        新增學生資料
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;