StudentHub Frontend
專案簡介
這是一個使用 React + TypeScript + Vite 開發的學生資料管理系統前端專案，提供直覺的使用者介面和完整的 CRUD 操作功能。

系統架構圖
graph TD
    A[頁面組件] -->|使用| B[UI 組件]
    A -->|調用| C[API 服務]
    C -->|使用| D[Fetch 工具]
    E[路由] -->|管理| A

    專案結構
    src/
├── assets/           # 靜態資源
├── components/ui/    # UI 元件
│   ├── button.tsx
│   ├── card.tsx
│   └── select.tsx
├── enum/            # 列舉定義
│   └── api.ts      # API 端點定義
├── interface/       # 介面定義
│   ├── resp.ts
│   └── Student.ts
├── router/          # 路由配置
│   └── router.tsx
├── style/           # CSS 樣式
│   ├── App.css
│   └── index.css
├── utils/           # 工具函數
│   └── fetch.ts
└── view/            # 頁面元件
    ├── all.tsx     # 學生列表
    ├── App.tsx     # 主應用
    ├── home.tsx    # 首頁
    ├── insert.tsx  # 新增學生
    └── update.tsx  # 更新學生

    API 使用
    // API 端點定義
export enum api {
    findAll = "http://127.0.0.1:2083/api/v1/user/findAll",
    getStudent = "http://127.0.0.1:2083/api/v1/user/getStudent",
    insertOne = "http://127.0.0.1:2083/api/v1/user/insertOne",
    updateStudent = "http://127.0.0.1:2083/api/v1/user/updateNameById",
    deleteStudent = "http://127.0.0.1:2083/api/v1/user/deleteById"
}

功能頁面
1. 首頁 (home.tsx)

系統導航
歡迎訊息

2. 學生列表 (all.tsx)

顯示所有學生
提供編輯和刪除操作

3. 新增學生 (insert.tsx)

學生資料表單
表單驗證

4. 更新學生 (update.tsx)

修改學生資料
即時更新顯示

安裝與執行
環境需求

Node.js 14.x+
npm 或 yarn

安裝步驟
1.安裝依賴:npm install
2.設定環境變數 創建 .env 檔案:VITE_API_URL=http://127.0.0.1:2083
3.啟動開發服務器:npm run dev
4.建置生產版本:npm run build

技術棧
1.React 18
2.TypeScript
3.Vite
4.Tailwind CSS
5.React Router v6
