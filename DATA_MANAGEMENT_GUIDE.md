# Cohors Cthulhu 角色管理系統 - 數據管理功能指南

## 概述
此專案為 Cohors Cthulhu RPG 系統的完整角色管理工具，包含角色表單、法術系統、裝備管理、筆記系統，以及全域數據管理功能。

## 核心功能

### 1. 角色表單系統 (CohorsCthvlhvSheet.vue)
- **基本信息**: 姓名、文化、階級、財富等
- **屬性值**: 體魄、敏捷、理智、人格
- **技能系統**: 完整的技能點分配和管理
- **經驗值**: 經驗記錄和自動計算

### 2. 法術系統 (CohorsCthvlhvSpells.vue)
- **28種法術**: 涵蓋符文、神諭、凱爾特魔法傳統
- **6本法術書**: 符文法典、神諭聖書、凱爾特祕法等
- **互動式介面**: 法術選擇 modal、搜尋功能、分類顯示
- **傷害效果 tooltip**: 詳細的法術效果說明
- **無限法術槽位**: 動態新增和管理法術

### 3. 裝備管理系統 (CohorsCthvlhvEquipment.vue)
- **武器庫**: 完整的武器資料庫
- **防具系統**: 各類護甲和防具
- **技能工具**: 專業工具和裝備
- **天賦系統**: 角色天賦管理
- **自訂裝備**: 可新增自定義武器和裝備

### 4. 筆記系統 (CohorsCthvlhvNotes.vue)
- **角色特質**: 記錄角色性格特徵
- **歷史背景**: 角色的過往經歷
- **個人目標**: 角色的動機和目標
- **聯絡人**: 重要的 NPC 和關係
- **派系關係**: 各組織的關係狀態
- **日誌筆記**: 遊戲進行中的記錄

## 全域數據管理系統

### 角色卡特定的數據管理
- **模組化設計**: 懸浮按鈕組件支援不同的角色卡類型
- **獨立儲存**: 每種角色卡類型使用獨立的儲存空間
- **主題支援**: 根據角色卡類型顯示不同的顏色主題
- **擴展性**: 容易添加新的角色卡類型和主題

### 懸浮動作按鈕 (FloatingActionButtons.vue)
位於左側的懸浮按鈕提供以下功能，並且會根據不同角色卡類型顯示不同的主題顏色：

#### 🔵 儲存 (藍色)
- 將所有角色數據保存到瀏覽器的 localStorage
- 包含所有表單、法術、裝備、筆記數據
- 自動添加時間戳記

#### 🟢 載入 (綠色)
- 從瀏覽器 localStorage 讀取之前保存的數據
- 自動填入所有表單欄位
- 恢復法術選擇和裝備配置

#### 🟡 匯出 (黃色)
- 將角色數據匯出為 JSON 檔案
- 檔名格式：`cohors-cthulhu-character-YYYY-MM-DD.json`
- 包含完整的角色資訊，可用於備份或分享

#### 🟣 載入JSON (紫色)
- 從 JSON 檔案匯入角色數據
- 支援之前匯出的角色檔案
- 自動驗證檔案格式

#### 🔴 清除 (紅色)
- 清除所有角色數據
- 重置所有表單為初始狀態
- 包含確認對話框防止誤操作

### 技術架構

#### FloatingActionButtons 組件參數
- `characterType`: 角色卡類型 (預設: 'cohors-cthulhu')
- `storageKey`: 自訂儲存鍵名 (可選)

#### useCharacterData.js Composable
全域數據管理的核心，提供：
- `getAllCharacterData()`: 收集所有組件的數據
- `saveToLocalStorage()`: 保存到瀏覽器儲存
- `loadFromLocalStorage()`: 從瀏覽器讀取
- `exportToJSON()`: 匯出 JSON 檔案
- `importFromJSON()`: 匯入 JSON 檔案
- `clearAllData()`: 清除所有數據
- `applyDataToForm()`: 將數據應用到各組件

#### 組件間通信
使用 CustomEvent 系統進行組件間的數據同步：
- `getSheetData`: 請求角色表單數據
- `getSpellData`: 請求法術數據
- `getEquipmentData`: 請求裝備數據
- `getNotesData`: 請求筆記數據
- `loadCharacterData`: 載入完整角色數據
- `clearCharacterData`: 清除所有數據

#### 數據結構
```javascript
{
  characterSheet: {
    name: "角色姓名",
    culture: "文化背景",
    // ... 其他角色屬性
  },
  spells: {
    selectedCasterType: "施法者類型",
    selectedTraditions: ["符文", "神諭"],
    spellSlots: [/* 法術槽位數據 */]
  },
  equipment: {
    selectedWeapons: [/* 武器清單 */],
    selectedArmor: [/* 防具清單 */],
    // ... 其他裝備
  },
  notes: {
    traits: "角色特質",
    history: "歷史背景",
    // ... 其他筆記
  },
  timestamp: "2024-01-15T10:30:00.000Z"
}
```

## 使用方式

### 基本操作流程
1. **建立角色**: 在各個頁籤中填入角色資料
2. **儲存進度**: 點擊藍色儲存按鈕保存到瀏覽器
3. **匯出備份**: 點擊黃色匯出按鈕下載 JSON 檔案
4. **載入資料**: 使用綠色載入按鈕或紫色 JSON 載入恢復數據
5. **清除重置**: 紅色清除按鈕重置所有資料

### 頁籤導航
- **基本**: 角色基本資料和屬性
- **裝備**: 武器、防具、工具管理
- **法術**: 法術選擇和魔法傳統
- **筆記**: 角色背景和遊戲筆記

### 瀏覽器相容性
- 支援現代瀏覽器 (Chrome, Firefox, Safari, Edge)
- 使用 localStorage 進行本地儲存
- 支援檔案上傳/下載功能

## 開發資訊

### 技術棧
- **框架**: Nuxt 4 + Vue 3 Composition API
- **樣式**: Tailwind CSS
- **狀態管理**: Composables 模式
- **數據持久化**: localStorage + JSON 檔案

### 檔案結構
```
app/
├── components/
│   ├── CohorsCthvlhvSheet.vue      # 角色表單
│   ├── CohorsCthvlhvSpells.vue     # 法術系統
│   ├── CohorsCthvlhvEquipment.vue  # 裝備管理
│   ├── CohorsCthvlhvNotes.vue      # 筆記系統
│   └── FloatingActionButtons.vue   # 懸浮按鈕
├── composables/
│   ├── useCharacterData.js         # 數據管理
│   ├── useSpellData.js            # 法術資料庫
│   ├── useEquipmentData.js        # 裝備資料庫
│   └── useTalentData.js           # 天賦資料庫
├── pages/
│   ├── index.vue                  # 首頁
│   └── character.vue              # 角色管理頁面
└── layouts/
    └── default.vue                # 主佈局
```

### 未來擴展
- 多角色管理
- 雲端同步功能
- 遊戲大師工具
- 自動計算功能增強
- 打印友好介面

## 授權
此專案為 Cohors Cthulhu RPG 系統的非官方工具，僅供個人使用。