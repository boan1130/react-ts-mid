import React from 'react';
import { Routes, Route } from 'react-router-dom';
import All from './all';
import Insert from './Insert';
import Update from './update';
import Home from './home';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
    );
};

export default App;