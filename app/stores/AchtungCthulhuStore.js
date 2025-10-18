import { defineStore } from 'pinia'

export const useCohorsCthvlhvStore = defineStore('cohorsCthvlhvCharacter', {
  state: () => ({
    // 基本角色資訊
    basicInfo: {
      characterName: '',
      culture: '',
      rank: '',
      wealth: '',
      archetype: '',
      background: '',
      talent: ''
    },

    // 個人真理與傷疤 (10個欄位)
    personalTruths: Array(10).fill(''),

    // 屬性系統 (7個屬性)
    attributes: {
      AGI: 0,  // 敏捷
      BRA: 0,  // 體魄
      COO: 0,  // 協調  
      GRA: 0,  // 威儀
      INS: 0,  // 洞察
      REA: 0,  // 智識
      WIL: 0   // 意志
    },

    // 屬性額外傷害
    attributeBonuses: {
      AGI: 0,
      BRA: 0,
      COO: 0,
      GRA: 0,
      INS: 0,
      REA: 0,
      WIL: 0
    },

    // 技能系統 (12個技能)
    skills: {
      ACADEMIA: 0,
      ATHLETICS: 0,
      CRAFTING: 0,
      ENGINEERING: 0,
      FIGHTING: 0,
      MEDICINE: 0,
      OBSERVATION: 0,
      PERSUASION: 0,
      RESILIENCE: 0,
      STEALTH: 0,
      SURVIVAL: 0,
      TACTICS: 0
    },

    // 技能專精選擇
    selectedFocuses: {},

    // 壓力系統
    stress: {
      maxStressBoxes: 20,
      stressBoxes: Array(2).fill().map(() => Array(10).fill(false))
    },

    // 傷勢系統
    wounds: {
      maxWounds: 3,
      woundBoxes: Array(3).fill(''), // 每個傷勢格可以輸入影響內容
      isWounded: Array(3).fill(false) // 傷勢格是否已標記
    },

    // 戰鬥相關屬性
    combat: {
      courage: 0,
      fate: 0,
      baseArmor: 0,
      totalArmor: 0,
      injuries: ''
    },

    // 語言與經驗
    character: {
      languages: '',
      currentExperience: 0,
      totalExperience: 0,
      experienceRecords: []
    },

    // 武器系統 (5個武器槽位)
    weapons: Array(5).fill().map(() => ({
      name: '',
      focus: '',
      reach: '',
      damage: '',
      size: '',
      qualities: []
    })),

    // 護甲系統 (3個護甲槽位)
    armors: Array(3).fill().map(() => ({
      name: '',
      resistance: '',
      qualities: []
    })),

    // 物品系統
    items: {
      itemList: [],
      maxMajorItems: 2,
      maxMinorItems: 3
    },

    // 天賦系統 (8個天賦槽位)
    talents: Array(8).fill().map(() => ({
      name: '',
      keywords: '',
      content: ''
    })),

    // 筆記系統
    notes: {
      traits: '',
      history: '',
      personalAgenda: '',
      contacts: '',
      factions: '',
      journal: ''
    },

    // 法術系統
    spells: {
      selectedCasterType: '',
      selectedTraditions: [],
      spellSlots: [],
      powerValue: '',      // 威能值
      basePower: ''        // 基礎威能
    },

    // 元數據
    metadata: {
      lastSaved: null,
      version: '1.0.0',
      componentType: 'CohorsCthvlhv'
    }
  }),

  getters: {
    // 基本資訊 getters
    getBasicInfo: (state) => state.basicInfo,
    getCharacterName: (state) => state.basicInfo.characterName,
    
    // 屬性相關 getters
    getAttributes: (state) => state.attributes,
    getAttribute: (state) => (attributeCode) => state.attributes[attributeCode] || 0,
    getAttributeBonus: (state) => (attributeCode) => state.attributeBonuses[attributeCode] || 0,
    
    // 技能相關 getters
    getSkills: (state) => state.skills,
    getSkill: (state) => (skillCode) => state.skills[skillCode] || 0,
    getSelectedFocuses: (state) => (skillCode) => state.selectedFocuses[skillCode] || [],
    
    // 壓力系統 getters
    getCurrentStress: (state) => {
      let currentStress = 0
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const index = i * 10 + j
          if (index >= state.stress.maxStressBoxes) break
          if (state.stress.stressBoxes[i][j]) {
            currentStress = index + 1
          } else {
            break
          }
        }
      }
      return currentStress
    },

    // 傷勢系統 getters
    getWounds: (state) => state.wounds,
    getWoundBoxes: (state) => state.wounds.woundBoxes,
    getActiveWounds: (state) => {
      return state.wounds.woundBoxes
        .map((description, index) => ({
          index,
          description,
          isActive: state.wounds.isWounded[index]
        }))
        .filter(wound => wound.isActive)
    },
    getCurrentWoundCount: (state) => {
      return state.wounds.isWounded.filter(Boolean).length
    },

    // 戰鬥相關 getters
    getCombatStats: (state) => state.combat,
    
    // 裝備相關 getters
    getWeapons: (state) => state.weapons,
    getArmors: (state) => state.armors,
    getItems: (state) => state.items,
    
    // 物品攜帶量計算
    getCurrentMajorItems: (state) => {
      let majorCount = 0
      
      // 計算武器的主要物品
      state.weapons.forEach(weapon => {
        if (weapon.name && weapon.size === '主要') {
          majorCount++
        }
      })
      
      // 計算護甲的主要物品（有「沉重」特性）
      state.armors.forEach(armor => {
        if (armor.name && armor.qualities.includes('沉重')) {
          majorCount++
        }
      })
      
      // 計算物品清單中的主要物品
      state.items.itemList.forEach(item => {
        if ((item.type === 'weapon' && item.size === '主要') ||
            (item.type === 'armor' && item.qualities.includes('沉重')) ||
            (item.type === 'tool' && item.size === '主要') ||
            (item.type === 'miscellaneous' && item.size === '主要')) {
          majorCount++
        }
      })
      
      return majorCount
    },

    getCurrentMinorItems: (state) => {
      let minorCount = 0
      
      // 計算武器的次要物品
      state.weapons.forEach(weapon => {
        if (weapon.name && weapon.size === '次要') {
          minorCount++
        }
      })
      
      // 計算物品清單中的次要物品
      state.items.itemList.forEach(item => {
        if ((item.type === 'weapon' && item.size === '次要') ||
            (item.type === 'armor' && !item.qualities.includes('沉重')) ||
            (item.type === 'tool' && item.size === '次要') ||
            (item.type === 'miscellaneous' && item.size === '次要')) {
          minorCount++
        }
      })
      
      return minorCount
    },

    isOverloaded() {
      return this.getCurrentMajorItems > this.items.maxMajorItems || 
             this.getCurrentMinorItems > this.items.maxMinorItems
    },

    // 天賦相關 getters
    getTalents: (state) => state.talents,
    getActiveTalents: (state) => state.talents.filter(talent => talent.name),
    
    // 筆記相關 getters
    getNotes: (state) => state.notes,
    
    // 法術相關 getters
    getSpells: (state) => state.spells,
    getActiveSpells: (state) => state.spells.spellSlots.filter(slot => slot.spell),
    
    // 經驗點計算
    getTotalGainedExperience: (state) => {
      return state.character.experienceRecords
        .filter(record => record.amount > 0)
        .reduce((sum, record) => sum + record.amount, 0)
    },

    getTotalSpentExperience: (state) => {
      return Math.abs(state.character.experienceRecords
        .filter(record => record.amount < 0)
        .reduce((sum, record) => sum + record.amount, 0))
    },

    getNetExperience: (state) => {
      return state.character.experienceRecords
        .reduce((sum, record) => sum + record.amount, 0)
    },

    // 完整角色資料 getter
    getFullCharacterData: (state) => {
      return {
        basicInfo: state.basicInfo,
        personalTruths: state.personalTruths,
        attributes: state.attributes,
        attributeBonuses: state.attributeBonuses,
        skills: state.skills,
        selectedFocuses: state.selectedFocuses,
        stress: state.stress,
        wounds: state.wounds,
        combat: state.combat,
        character: state.character,
        weapons: state.weapons,
        armors: state.armors,
        items: state.items,
        talents: state.talents,
        notes: state.notes,
        spells: state.spells,
        metadata: {
          ...state.metadata,
          lastSaved: new Date().toISOString()
        }
      }
    }
  },

  actions: {
    // 基本資訊 actions
    updateBasicInfo(info) {
      Object.assign(this.basicInfo, info)
    },

    setCharacterName(name) {
      this.basicInfo.characterName = name
    },

    // 屬性 actions
    setAttribute(attributeCode, value) {
      if (this.attributes.hasOwnProperty(attributeCode)) {
        this.attributes[attributeCode] = Number(value) || 0
      }
    },

    setAttributeBonus(attributeCode, value) {
      if (this.attributeBonuses.hasOwnProperty(attributeCode)) {
        this.attributeBonuses[attributeCode] = Number(value) || 0
      }
    },

    // 技能 actions
    setSkill(skillCode, value) {
      if (this.skills.hasOwnProperty(skillCode)) {
        this.skills[skillCode] = Number(value) || 0
      }
    },

    toggleSkillFocus(skillCode, focusName) {
      if (!this.selectedFocuses[skillCode]) {
        this.selectedFocuses[skillCode] = []
      }
      
      const index = this.selectedFocuses[skillCode].indexOf(focusName)
      if (index > -1) {
        this.selectedFocuses[skillCode].splice(index, 1)
      } else {
        this.selectedFocuses[skillCode].push(focusName)
      }
    },

    // 壓力系統 actions
    toggleStress(row, col) {
      const clickedIndex = (row - 1) * 10 + (col - 1)
      
      if (clickedIndex >= this.stress.maxStressBoxes) {
        return
      }
      
      // 計算當前已填滿的格子數
      let currentFilledCount = 0
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const index = i * 10 + j
          if (index >= this.stress.maxStressBoxes) break
          if (this.stress.stressBoxes[i][j]) {
            currentFilledCount = index + 1
          } else {
            break
          }
        }
      }
      
      // 清空所有格子
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          this.stress.stressBoxes[i][j] = false
        }
      }
      
      // 如果點擊的位置等於當前填滿的位置，則清空
      if (clickedIndex + 1 === currentFilledCount) {
        return
      }
      
      // 填滿從第一格到點擊位置的所有格子
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const index = i * 10 + j
          if (index <= clickedIndex && index < this.stress.maxStressBoxes) {
            this.stress.stressBoxes[i][j] = true
          }
        }
      }
    },

    clearStress() {
      this.stress.stressBoxes = Array(2).fill().map(() => Array(10).fill(false))
    },

    setMaxStressBoxes(value) {
      this.stress.maxStressBoxes = Math.max(1, Math.min(20, Number(value) || 20))
    },

    // 傷勢系統 actions
    toggleWound(woundIndex) {
      if (woundIndex >= 0 && woundIndex < this.wounds.maxWounds) {
        this.wounds.isWounded[woundIndex] = !this.wounds.isWounded[woundIndex]
        // 如果取消傷勢，清空描述
        if (!this.wounds.isWounded[woundIndex]) {
          this.wounds.woundBoxes[woundIndex] = ''
        }
      }
    },

    setWoundDescription(woundIndex, description) {
      if (woundIndex >= 0 && woundIndex < this.wounds.maxWounds) {
        this.wounds.woundBoxes[woundIndex] = description
      }
    },

    clearWound(woundIndex) {
      if (woundIndex >= 0 && woundIndex < this.wounds.maxWounds) {
        this.wounds.isWounded[woundIndex] = false
        this.wounds.woundBoxes[woundIndex] = ''
      }
    },

    clearAllWounds() {
      this.wounds.isWounded = Array(3).fill(false)
      this.wounds.woundBoxes = Array(3).fill('')
    },

    // 戰鬥屬性 actions
    updateCombatStats(stats) {
      Object.assign(this.combat, stats)
    },

    // 武器 actions
    setWeapon(index, weaponData) {
      if (index >= 0 && index < this.weapons.length) {
        this.weapons[index] = { ...weaponData }
      }
    },

    clearWeapon(index) {
      if (index >= 0 && index < this.weapons.length) {
        this.weapons[index] = {
          name: '',
          focus: '',
          reach: '',
          damage: '',
          size: '',
          qualities: []
        }
      }
    },

    // 護甲 actions
    setArmor(index, armorData) {
      if (index >= 0 && index < this.armors.length) {
        this.armors[index] = { ...armorData }
      }
    },

    clearArmor(index) {
      if (index >= 0 && index < this.armors.length) {
        this.armors[index] = {
          name: '',
          resistance: '',
          qualities: []
        }
      }
    },

    // 物品 actions
    addItem(item) {
      this.items.itemList.push({
        ...item,
        id: Date.now() + Math.random()
      })
    },

    removeItem(index) {
      if (index >= 0 && index < this.items.itemList.length) {
        this.items.itemList.splice(index, 1)
      }
    },

    setItemLimits(majorLimit, minorLimit) {
      this.items.maxMajorItems = Number(majorLimit) || 2
      this.items.maxMinorItems = Number(minorLimit) || 3
    },

    // 天賦 actions
    setTalent(index, talentData) {
      if (index >= 0 && index < this.talents.length) {
        this.talents[index] = { ...talentData }
      }
    },

    addTalent(talentData) {
      // 找到第一個空的位置
      let targetIndex = this.talents.findIndex(t => !t.name)
      
      if (targetIndex === -1) {
        // 如果沒有空位置，新增一個
        this.talents.push({
          name: talentData.chineseName || talentData.name,
          keywords: talentData.keywords,
          content: talentData.content
        })
      } else {
        // 使用現有的空位置
        this.talents[targetIndex] = {
          name: talentData.chineseName || talentData.name,
          keywords: talentData.keywords,
          content: talentData.content
        }
      }
    },

    removeTalent(index) {
      if (index >= 0 && index < this.talents.length) {
        this.talents[index] = {
          name: '',
          keywords: '',
          content: ''
        }
      }
    },

    // 筆記 actions
    updateNotes(notesData) {
      Object.assign(this.notes, notesData)
    },

    // 法術 actions
    setCasterType(type) {
      this.spells.selectedCasterType = type
    },

    toggleMagicalTradition(traditionKey) {
      const index = this.spells.selectedTraditions.indexOf(traditionKey)
      if (index > -1) {
        this.spells.selectedTraditions.splice(index, 1)
      } else {
        this.spells.selectedTraditions.push(traditionKey)
      }
    },

    setPowerValue(value) {
      this.spells.powerValue = value
    },

    setBasePower(value) {
      this.spells.basePower = value
    },

    addSpellSlot(spell, casterLevel = 1, difficulty = 'D1') {
      const newSlotId = this.spells.spellSlots.length + 1
      this.spells.spellSlots.push({
        id: newSlotId,
        spell: spell || '',
        casterLevel: casterLevel,
        difficulty: difficulty
      })
    },

    removeSpellSlot(slotId) {
      const slotIndex = this.spells.spellSlots.findIndex(s => s.id === slotId)
      if (slotIndex !== -1) {
        this.spells.spellSlots.splice(slotIndex, 1)
        // 重新編號剩餘的槽位
        this.spells.spellSlots.forEach((slot, index) => {
          slot.id = index + 1
        })
      }
    },

    // 經驗點 actions
    addExperienceRecord(record) {
      this.character.experienceRecords.push({
        amount: record.amount,
        date: record.date,
        description: record.description
      })
      // 自動更新當前經驗值
      this.character.currentExperience = this.getNetExperience
    },

    removeExperienceRecord(index) {
      if (index >= 0 && index < this.character.experienceRecords.length) {
        this.character.experienceRecords.splice(index, 1)
        // 自動更新當前經驗值
        this.character.currentExperience = this.getNetExperience
      }
    },

    // 完整資料管理 actions
    loadCharacterData(data) {
      if (!data) return

      // 基本資訊
      if (data.basicInfo) {
        Object.assign(this.basicInfo, data.basicInfo)
      }

      // 個人真理
      if (data.personalTruths) {
        this.personalTruths = [...data.personalTruths]
      }

      // 屬性系統
      if (data.attributes) {
        Object.assign(this.attributes, data.attributes)
      }
      if (data.attributeBonuses) {
        Object.assign(this.attributeBonuses, data.attributeBonuses)
      }

      // 技能系統
      if (data.skills) {
        Object.assign(this.skills, data.skills)
      }
      if (data.selectedFocuses) {
        this.selectedFocuses = { ...data.selectedFocuses }
      }

      // 壓力系統
      if (data.stress) {
        Object.assign(this.stress, data.stress)
      }

      // 傷勢系統
      if (data.wounds) {
        Object.assign(this.wounds, data.wounds)
      }

      // 戰鬥屬性
      if (data.combat) {
        Object.assign(this.combat, data.combat)
      }

      // 角色資訊
      if (data.character) {
        Object.assign(this.character, data.character)
      }

      // 裝備系統
      if (data.weapons) {
        this.weapons = [...data.weapons]
      }
      if (data.armors) {
        this.armors = [...data.armors]
      }
      if (data.items) {
        Object.assign(this.items, data.items)
      }

      // 天賦系統
      if (data.talents) {
        this.talents = [...data.talents]
      }

      // 筆記系統
      if (data.notes) {
        Object.assign(this.notes, data.notes)
      }

      // 法術系統
      if (data.spells) {
        Object.assign(this.spells, data.spells)
      }

      // 更新元數據
      this.metadata.lastSaved = new Date().toISOString()
    },

    clearAllData() {
      // 重置所有狀態到初始值
      Object.assign(this.basicInfo, {
        characterName: '',
        culture: '',
        rank: '',
        wealth: '',
        archetype: '',
        background: '',
        talent: ''
      })

      this.personalTruths = Array(10).fill('')

      Object.assign(this.attributes, {
        AGI: 6, BRA: 6, COO: 6, GRA: 6, INS: 6, REA: 6, WIL: 6
      })

      Object.assign(this.attributeBonuses, {
        AGI: 0, BRA: 0, COO: 0, GRA: 0, INS: 0, REA: 0, WIL: 0
      })

      Object.assign(this.skills, {
        ACADEMIA: 0, ATHLETICS: 0, CRAFTING: 0, ENGINEERING: 0,
        FIGHTING: 0, MEDICINE: 0, OBSERVATION: 0, PERSUASION: 0,
        RESILIENCE: 0, STEALTH: 0, SURVIVAL: 0, TACTICS: 0
      })

      this.selectedFocuses = {}

      this.stress = {
        maxStressBoxes: 20,
        stressBoxes: Array(2).fill().map(() => Array(10).fill(false))
      }

      this.wounds = {
        maxWounds: 3,
        woundBoxes: Array(3).fill(''),
        isWounded: Array(3).fill(false)
      }

      Object.assign(this.combat, {
        courage: 0,
        fate: 0,
        baseArmor: 0,
        totalArmor: 0,
        injuries: ''
      })

      Object.assign(this.character, {
        languages: '',
        currentExperience: 0,
        totalExperience: 0,
        experienceRecords: []
      })

      this.weapons = Array(5).fill().map(() => ({
        name: '', focus: '', reach: '', damage: '', size: '', qualities: []
      }))

      this.armors = Array(3).fill().map(() => ({
        name: '', resistance: '', qualities: []
      }))

      this.items = {
        itemList: [],
        maxMajorItems: 2,
        maxMinorItems: 3
      }

      this.talents = Array(8).fill().map(() => ({
        name: '', keywords: '', content: ''
      }))

      Object.assign(this.notes, {
        traits: '',
        history: '',
        personalAgenda: '',
        contacts: '',
        factions: '',
        journal: ''
      })

      Object.assign(this.spells, {
        selectedCasterType: '',
        selectedTraditions: [],
        spellSlots: [],
        powerValue: '',
        basePower: ''
      })

      this.metadata.lastSaved = new Date().toISOString()
    },

    // 自動儲存相關 actions
    updateLastSaved() {
      this.metadata.lastSaved = new Date().toISOString()
    }
  },
  persist: {
    key: 'cohors-cthvlhv-character-v2',
    storage: process.client ? localStorage : undefined
  }
})