StudentHub Frontend
專案簡介
這是一個使用 React + TypeScript 開發的學生資料管理系統前端專案，提供直覺的使用者介面和完整的 CRUD 操作功能。
設計概念

響應式設計：確保在不同裝置上都能有良好的瀏覽體驗
模組化開發：組件化設計，提高代碼複用性
直覺操作：清晰的導航和操作流程
即時反饋：操作狀態的及時顯示

技術選用

核心框架：

React 18
TypeScript
Vite 建置工具


樣式設計：

Tailwind CSS
客製化組件



功能規劃

1.學生管理

新增學生資料
學生列表顯示
更新學生資訊
刪除學生記錄


2.介面特色

表單驗證
操作提示
資料篩選
響應式設計

專案結構
src/
├── assets/           # 靜態資源
│   └── react.svg
├── components/ui/    # UI 元件
│   ├── button.tsx
│   ├── card.tsx
│   └── select.tsx
├── enum/            # 列舉定義
│   └── api.ts
├── interface/       # 介面定義
│   ├── resp.ts
│   └── Student.ts
├── router/          # 路由配置
│   └── router.tsx
├── style/           # CSS 樣式
├── utils/           # 工具函數
└── view/            # 頁面元件
    ├── all.tsx
    ├── home.tsx
    ├── insert.tsx
    └── update.tsx

    安裝與執行

1.環境要求
Node.js 14.x+
npm 或 yarn

2.安裝步驟
# 安裝依賴
npm install

# 設定環境變數
# 創建 .env 檔案
VITE_API_URL=後端API網址

# 啟動開發服務器
npm run dev

# 建置生產版本
npm run build

開發心得
在開發過程中，特別注意了以下幾點：

TypeScript 的型別定義和檢查
React 組件的最佳實踐
前後端串接的處理方式
使用者體驗的優化

未來展望

1.功能擴充

進階搜尋功能
資料匯出功能
批量處理功能


2.效能優化

程式碼分割
圖片優化
快取策略


參考資源

React 官方文件
TypeScript 手冊
Tailwind CSS 文件
Vite 官方指南



