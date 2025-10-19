// FoundryVTT JSON 匯出功能
// 用於將角色表資料轉換為 FVTT 相容格式

import { ref } from 'vue'

export const useFVTTExport = () => {
  const isExporting = ref(false)

  // 生成唯一ID（FVTT 的 16 字符格式）
  const generateId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // 生成當前時間戳
  const getCurrentTimestamp = () => {
    return Date.now()
  }

  // 中文武器尺寸轉換
  const translateWeaponSize = (size) => {
    const sizeMap = {
      '次要': '次要',
      '主要': '主要',
      '重型': '重型',
      'minor': '次要',
      'major': '主要',
      'heavy': '重型'
    }
    return sizeMap[size] || size || '次要'
  }

  // 根據武器尺寸獲取對應重量
  const getWeaponWeightBySize = (size) => {
    const weightMap = {
      '次要': '1',
      '主要': '3',
      '重型': '5', // 假設重型武器重量為5
      'minor': '1',
      'major': '3', 
      'heavy': '5'
    }
    return weightMap[size] || '1'
  }

  // 中文武器射程轉換
  const translateWeaponRange = (range) => {
    const rangeMap = {
      // 中文射程轉換
      '近距': 'close',
      '短距': 'short', 
      '中距': 'medium',
      '遠距': 'long',
      '極遠距': 'extreme',
      '鄰近': 'reach',
      // 英文保持不變
      'close': 'close',
      'short': 'short',
      'medium': 'medium', 
      'long': 'long',
      'extreme': 'extreme',
      'reach': 'reach'
    }
    return rangeMap[range] || range || 'close'
  }

  // 中文武器齊射轉換
  const translateSalvo = (salvo) => {
    const salvoMap = {
      '兇猛': '兇猛',
      '爆發': '爆發',
      '全自動': '全自動',
      'vicious': '兇猛',
      'burst': '爆發',
      'auto': '全自動'
    }
    return salvoMap[salvo] || salvo || ''
  }

  // 武器專精轉換（基於 FIGHTING 技能的 defaultFocuses）
  const translateWeaponFocus = (focus) => {
    const focusMap = {
      // 中文到英文
      '徒手戰鬥': 'Hand-to-Hand',
      '近戰武器': 'Melee Weapons',
      '手槍': 'Handguns',
      '近距作戰': 'Close Quarters',
      '步槍': 'Rifles',
      '重型武器': 'Heavy Weapons',
      '威脅感知': 'Threat Awareness',
      '異域': 'Exotic',
      // 英文保持不變
      'Hand-to-Hand': 'Hand-to-Hand',
      'Melee Weapons': 'Melee Weapons',
      'Handguns': 'Handguns',
      'Close Quarters': 'Close Quarters',
      'Rifles': 'Rifles',
      'Heavy Weapons': 'Heavy Weapons',
      'Threat Awareness': 'Threat Awareness',
      'Exotic': 'Exotic'
    }
    return focusMap[focus] || focus || 'Melee Weapons'
  }

  // 護甲特性處理（根據護甲資料中的特性設定對應的 qualities）
  const getArmorQualities = (armorData) => {
    // 中文特性到英文 quality 的對照
    const qualityMap = {
      '重型': 'heavy',
      '厚重': 'heavy',
      '盾牌': 'shield',
      '護盾': 'shield',
      '不舒適': 'uncomfortable',
      '不適': 'uncomfortable',
      '笨重': 'uncomfortable'
    }

    const qualities = {
      heavy: {
        description: "",
        label: "Heavy",
        value: false
      },
      shield: {
        description: "",
        label: "Shield", 
        value: false
      },
      uncomfortable: {
        description: "",
        label: "Uncomfortable",
        value: false
      }
    }

    // 根據 armorData 中的布林屬性設定
    if (armorData.heavy) qualities.heavy.value = true
    if (armorData.shield) qualities.shield.value = true
    if (armorData.uncomfortable) qualities.uncomfortable.value = true

    // 根據 armorData 中的特性陣列或字串設定
    if (armorData.qualities) {
      const qualityList = Array.isArray(armorData.qualities) ? armorData.qualities : [armorData.qualities]
      qualityList.forEach(quality => {
        const englishQuality = qualityMap[quality] || quality
        if (qualities[englishQuality]) {
          qualities[englishQuality].value = true
        }
      })
    }

    return qualities
  }

  // 武器特性處理（根據武器資料中的特性設定對應的 qualities）
  const getWeaponQualities = (weaponData) => {
    // 中文特性到英文 quality 的對照
    const qualityMap = {
      '精準': 'accurate',
      '禍根': 'bane',
      '近戰': 'close_quarters',
      '笨重': 'cumbersome',
      '削弱': 'debilitating',
      '局勢升高': 'escalation',
      '實驗性': 'experimental',
      '巨物殺手': 'giant_killer',
      '重型': 'heavy',
      '隱藏': 'hidden',
      '飢渴': 'hunger',
      '不精準': 'inaccurate',
      '間接': 'indirect',
      '彈藥型': 'munition',
      '招架': 'parrying',
      '精確': 'precise',
      '可靠': 'reliable',
      '靜音': 'subtle',
      '不可靠': 'unreliable',
      '劇毒': 'venomous'
    }

    const qualities = {
      accurate: { value: false },
      bane: { value: false },
      close_quarters: { value: false },
      cumbersome: { value: false },
      debilitating: { value: false },
      escalation: { value: false },
      experimental: { value: false },
      giant_killer: { value: false },
      heavy: { value: false },
      hidden: { value: false },
      hunger: { value: false },
      inaccurate: { value: false },
      indirect: { value: false },
      munition: { value: false },
      parrying: { value: false },
      precise: { value: false },
      reliable: { value: false },
      subtle: { value: false },
      unreliable: { value: false },
      venomous: { value: false }
    }

    // 根據 weaponData 中的布林屬性設定
    Object.keys(qualities).forEach(key => {
      if (weaponData[key]) {
        qualities[key].value = true
      }
    })

    // 根據 weaponData 中的特性陣列設定
    if (weaponData.qualities && Array.isArray(weaponData.qualities)) {
      weaponData.qualities.forEach(quality => {
        const englishQuality = qualityMap[quality] || quality
        if (qualities[englishQuality]) {
          qualities[englishQuality].value = true
        }
      })
    }

    return qualities
  }

  // 屬性代碼轉換對照表（僅 Achtung Cthulhu 支援的屬性）
  const attributeMapping = {
    AGI: 'agi',
    BRA: 'bra', 
    COO: 'coo',
    INS: 'ins',
    REA: 'rea',
    WIL: 'wil'
  }

  // Achtung Cthulhu 支援的屬性列表
  const supportedAttributes = ['AGI', 'BRA', 'COO', 'INS', 'REA', 'WIL']

  // 技能代碼轉換對照表（僅 Achtung Cthulhu 支援的技能）
  const skillMapping = {
    ACADEMIA: 'Academia',
    ATHLETICS: 'Athletics',
    ENGINEERING: 'Engineering', 
    FIGHTING: 'Fighting',
    MEDICINE: 'Medicine',
    OBSERVATION: 'Observation',
    PERSUASION: 'Persuasion',
    RESILIENCE: 'Resilience',  // 確保拼寫正確
    STEALTH: 'Stealth',
    SURVIVAL: 'Survival',
    TACTICS: 'Tactics',
    VEHICLES: 'Vehicles'
  }

  // Achtung Cthulhu 支援的技能列表
  const supportedSkills = ['ACADEMIA', 'ATHLETICS', 'ENGINEERING', 'FIGHTING', 'MEDICINE', 'OBSERVATION', 'PERSUASION', 'RESILIENCE', 'STEALTH', 'SURVIVAL', 'TACTICS', 'VEHICLES']

  // 創建技能物件
  const createSkillItem = (skillCode, skillData, focusData = {}) => {
    const skillName = skillMapping[skillCode] || skillCode
    const focuses = getFocusesForSkill(skillCode, focusData)

    return {
      _id: generateId(),
      name: skillName,
      type: "skill",
      img: "systems/ac2d20/assets/skills.svg",
      system: {
        description: "",
        favorite: false,
        defaultAttribute: "agi", // 預設屬性，可以根據技能調整
        focuses: focuses,
        summary: "",
        value: skillData || 0
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20", 
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 根據技能獲取專精選項
  const getFocusesForSkill = (skillCode, focusData) => {
    // 中英文專精對照表
    const focusMapping = {
      '藝術': 'Art',
      '密碼學': 'Cryptography',
      '金融': 'Finance',
      '財務學': 'Finance',
      '歷史': 'History',
      '歷史學': 'History',
      '語言學': 'Linguistics',
      '神秘學': 'Occultism',
      '科學': 'Science',
      '攀爬': 'Climbing',
      '舉重': 'Lifting',
      '體能訓練': 'Physical Training',
      '運動訓練': 'Physical Training',
      '跑步': 'Running',
      '奔跑': 'Running',
      '游泳': 'Swimming',
      '投擲': 'Throwing',
      '建築學': 'Architecture',
      '戰鬥工兵': 'Combat Engineering',
      '電子學': 'Electronics',
      '爆裂物學': 'Explosives',
      '機械工程': 'Mechanical Engineering',
      '徒手戰鬥': 'Hand-to-Hand',
      '近戰武器': 'Melee Weapons',
      '手槍': 'Handguns',
      '近距作戰': 'Close Quarters',
      '步槍': 'Rifles',
      '重型武器': 'Heavy Weapons',
      '威脅感知': 'Threat Awareness',
      '異域': 'Exotic',
      '急救': 'First Aid',
      '傳染病學': 'Infectious Diseases',
      '藥理學': 'Pharmacology',
      '精神醫學': 'Psychiatry',
      '外科手術': 'Surgery',
      '毒理學': 'Toxicology',
      '聽覺': 'Hearing',
      '直覺': 'Instincts',
      '視覺': 'Sight',
      '嗅覺與味覺': 'Smell and Taste',
      '魅力': 'Charm',
      '暗示': 'Innuendo',
      '威嚇': 'Intimidation',
      '恐嚇': 'Intimidation',
      '談判': 'Negotiation',
      '雄辯': 'Rhetoric',
      '修辭': 'Rhetoric',
      '欺騙': 'Deceive',
      '欺瞞': 'Deceive',
      '祈招': 'Invocation',
      '毅力': 'Fortitude',
      '紀律': 'Discipline',
      '免疫': 'Immunity',
      '偽裝': 'Disguise',
      '偽裝術': 'Camouflage',
      '迷彩': 'Camouflage',
      '都市潛行': 'Urban Stealth',
      '野外潛行': 'Rural Stealth',
      '動物馴養': 'Animal Handling',
      '動物操控': 'Animal Handling',
      '覓食': 'Foraging',
      '採集': 'Foraging',
      '狩獵': 'Hunting',
      '神秘主義': 'Mysticism',
      '秘學': 'Mysticism',
      '導航': 'Orienteering',
      '定向': 'Orienteering',
      '追蹤': 'Tracking',
      '空軍': 'Air Force',
      '陸軍': 'Army',
      '秘密行動': 'Covert Operations',
      '祕密行動': 'Covert Operations',
      '領導': 'Leadership',
      '海軍': 'Navy',
      '技術專案': 'Technical Projects',
      '汽車': 'Cars',
      '機車': 'Motorcycles',
      '摩托車': 'Motorcycles',
      '重型載具': 'Heavy Vehicles',
      '坦克': 'Tanks',
      '航空器': 'Aircraft',
      '飛機': 'Aircraft',
      '水上載具': 'Watercraft',
      '船艇': 'Watercraft'
    }

    // 預設的專精選項（根據 AC 2d20 規則）
    const defaultFocuses = {
      ACADEMIA: [
        { title: "Art", isfocus: false },
        { title: "Cryptography", isfocus: false },
        { title: "Finance", isfocus: false },
        { title: "History", isfocus: false },
        { title: "Linguistics", isfocus: false },
        { title: "Occultism", isfocus: false },
        { title: "Science", isfocus: false }
      ],
      ATHLETICS: [
        { title: "Climbing", isfocus: false },
        { title: "Lifting", isfocus: false },
        { title: "Physical Training", isfocus: false },
        { title: "Running", isfocus: false },
        { title: "Swimming", isfocus: false },
        { title: "Throwing", isfocus: false }
      ],
      ENGINEERING: [
        { title: "Architecture", isfocus: false },
        { title: "Combat Engineering", isfocus: false },
        { title: "Electronics", isfocus: false },
        { title: "Explosives", isfocus: false },
        { title: "Mechanical Engineering", isfocus: false }
      ],
      FIGHTING: [
        { title: "Hand-to-Hand", isfocus: false },
        { title: "Melee Weapons", isfocus: false },
        { title: "Handguns", isfocus: false },
        { title: "Close Quarters", isfocus: false },
        { title: "Rifles", isfocus: false },
        { title: "Heavy Weapons", isfocus: false },
        { title: "Threat Awareness", isfocus: false },
        { title: "Exotic", isfocus: false }
      ],
      MEDICINE: [
        { title: "First Aid", isfocus: false },
        { title: "Infectious Diseases", isfocus: false },
        { title: "Pharmacology", isfocus: false },
        { title: "Psychiatry", isfocus: false },
        { title: "Surgery", isfocus: false },
        { title: "Toxicology", isfocus: false }
      ],
      OBSERVATION: [
        { title: "Hearing", isfocus: false },
        { title: "Instincts", isfocus: false },
        { title: "Sight", isfocus: false },
        { title: "Smell and Taste", isfocus: false }
      ],
      PERSUASION: [
        { title: "Charm", isfocus: false },
        { title: "Innuendo", isfocus: false },
        { title: "Intimidation", isfocus: false },
        { title: "Negotiation", isfocus: false },
        { title: "Rhetoric", isfocus: false },
        { title: "Deceive", isfocus: false },
        { title: "Invocation", isfocus: false }
      ],
      RESILIENCE: [
        { title: "Fortitude", isfocus: false },
        { title: "Discipline", isfocus: false },
        { title: "Immunity", isfocus: false }
      ],
      STEALTH: [
        { title: "Disguise", isfocus: false },
        { title: "Camouflage", isfocus: false },
        { title: "Urban Stealth", isfocus: false },
        { title: "Rural Stealth", isfocus: false }
      ],
      SURVIVAL: [
        { title: "Animal Handling", isfocus: false },
        { title: "Foraging", isfocus: false },
        { title: "Hunting", isfocus: false },
        { title: "Mysticism", isfocus: false },
        { title: "Orienteering", isfocus: false },
        { title: "Tracking", isfocus: false }
      ],
      TACTICS: [
        { title: "Air Force", isfocus: false },
        { title: "Army", isfocus: false },
        { title: "Covert Operations", isfocus: false },
        { title: "Leadership", isfocus: false },
        { title: "Navy", isfocus: false },
        { title: "Technical Projects", isfocus: false }
      ],
      VEHICLES: [
        { title: "Cars", isfocus: false },
        { title: "Motorcycles", isfocus: false },
        { title: "Heavy Vehicles", isfocus: false },
        { title: "Tanks", isfocus: false },
        { title: "Aircraft", isfocus: false },
        { title: "Watercraft", isfocus: false }
      ]
    }

    let focuses = [...(defaultFocuses[skillCode] || [])]
    
    // 根據角色的專精選擇標記為已選
    if (focusData[skillCode]) {
      focusData[skillCode].forEach(selectedFocus => {
        // 先嘗試直接匹配英文名稱
        let focus = focuses.find(f => f.title === selectedFocus)
        
        // 如果直接匹配失敗，嘗試中文轉英文匹配
        if (!focus) {
          const englishName = focusMapping[selectedFocus]
          if (englishName) {
            focus = focuses.find(f => f.title === englishName)
            console.log(`[FVTT Export] 專精翻譯成功: ${selectedFocus} → ${englishName}`)
          } else {
            console.warn(`[FVTT Export] 找不到專精翻譯: 技能=${skillCode}, 專精=${selectedFocus}`)
          }
        } else {
          console.log(`[FVTT Export] 專精直接匹配: ${selectedFocus}`)
        }
        
        if (focus) {
          focus.isfocus = true
        } else {
          console.error(`[FVTT Export] 專精標記失敗: 技能=${skillCode}, 專精=${selectedFocus}`)
        }
      })
    }

    return focuses
  }

  // 創建武器物件
  const createWeaponItem = (weaponData) => {
    if (!weaponData.name) return null

    return {
      name: weaponData.name,
      type: "weapon",
      _id: generateId(),
      img: "systems/ac2d20/assets/doc-icons/weapon.svg",
      system: {
        description: weaponData.description || "",
        favorite: false,
        cost: weaponData.cost || 0,
        quantity: weaponData.quantity || 1,
        rarity: weaponData.rarity || 0,
        restriction: weaponData.restriction || 0,
        size: translateWeaponSize(weaponData.size),
        stashed: false,
        weight: weaponData.weight || getWeaponWeightBySize(weaponData.size),
        equippable: true,
        equipped: weaponData.equipped || false,
        ammo: weaponData.ammo || 0,
        effect: {
          area: {
            rank: 0,
            value: false
          },
          backlash_x: {
            rank: 1,
            value: false
          },
          drain: {
            rank: 0,
            value: false
          },
          intense: {
            rank: 0,
            value: false
          },
          persistent_x: {
            rank: 1,
            value: false
          },
          piercing_x: {
            rank: 1,
            value: false
          },
          snare: {
            rank: 0,
            value: false
          },
          stun: {
            rank: 0,
            value: false
          },
          vicious: {
            rank: 0,
            value: weaponData.vicious || false
          }
        },
        escalation: weaponData.escalation || true,
        focus: translateWeaponFocus(weaponData.focus),
        melee: weaponData.reach === "close" || false,
        qualities: getWeaponQualities(weaponData),
        range: translateWeaponRange(weaponData.reach || weaponData.range),
        salvo: translateSalvo(weaponData.salvo),
        skill: weaponData.skill || "Fighting",
        stress: parseInt(weaponData.damage) || 4,
        weaponType: weaponData.weaponType || "agi",
        focuses: weaponData.focuses || []
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 創建護甲物件
  const createArmorItem = (armorData) => {
    if (!armorData.name) return null

    return {
      name: armorData.name,
      type: "armor",
      _id: generateId(),
      img: "systems/ac2d20/assets/doc-icons/armor.svg",
      system: {
        description: armorData.description || "",
        favorite: false,
        cost: armorData.cost || 0,
        quantity: armorData.quantity || 1,
        rarity: armorData.rarity || 0,
        restriction: armorData.restriction || 0,
        size: parseInt(armorData.size) || 0,
        stashed: false,
        weight: armorData.weight || "0",
        equippable: true,
        equipped: armorData.equipped || false,
        qualities: getArmorQualities(armorData),
        resistance: parseInt(armorData.resistance) || 1
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 創建技能包物件
  const createSkillkitItem = (skillkitData) => {
    if (!skillkitData.name) return null

    return {
      name: skillkitData.name,
      type: "skillkit",
      _id: generateId(),
      img: "systems/ac2d20/assets/doc-icons/skillkit.svg",
      system: {
        description: skillkitData.description || "",
        favorite: false,
        cost: skillkitData.cost || 0,
        quantity: skillkitData.quantity || 1,
        rarity: skillkitData.rarity || 0,
        restriction: skillkitData.restriction || 0,
        size: parseInt(skillkitData.size) || 0,
        stashed: false,
        weight: skillkitData.weight || "1",
        equippable: true,
        equipped: skillkitData.equipped || false,
        resources: skillkitData.resources || 3,
        skill: skillkitData.skill || ""
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 創建天賦物件
  const createTalentItem = (talentData) => {
    if (!talentData.name) return null

    return {
      name: talentData.name,
      type: "talent",
      _id: generateId(),
      img: "systems/ac2d20/assets/doc-icons/talent.svg",
      system: {
        description: `<p>${talentData.content || '天賦描述'}</p>`,
        favorite: false,
        keywords: talentData.keywords || '關鍵詞'
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 創建法術物件
  const createSpellItem = (spellSlot) => {
    if (!spellSlot.spell || !spellSlot.spell.chineseName) return null

    const spell = spellSlot.spell
    
    // 法術類型映射
    const getSpellType = (category) => {
      const typeMap = {
        '攻擊法術': 'att',
        '結界法術': 'bar',
        '祝福法術': 'ble',
        '占卜法術': 'div',
        '顯現法術': 'man',
        '祝福或詛咒法術': 'cur',
        '召喚法術': 'sum',
        '詛咒法術': 'cur',
        '放逐法術': 'ban',
        '儀式': 'ins'  // 儀式應該是 ins 類型
      }
      return typeMap[category] || 'ins' // 默認為瞬發法術
    }

    // 技能映射 - 統一使用與 skillMapping 相同的名稱
    const translateSkill = (skill) => {
      const skillMap = {
        '醫學': 'Medicine',
        '韌性': 'Resilience', 
        '說服': 'Persuasion',  // 修正為與 skillMapping 一致
        '戰鬥': 'Fighting',
        '學識': 'Academia',
        '求生': 'Survival',
        '觀察': 'Observation',
        '戰術': 'Tactics',
        '潛匿': 'Stealth'
      }
      return skillMap[skill] || 'Academia'  // 改為 Academia 作為默認
    }

    // 專精映射
    const translateFocus = (skill) => {
      const focusMap = {
        '醫學': 'Medicine',
        '韌性': 'Resilience',
        '說服': 'Persuasion',  // 修正為與 skillMapping 一致
        '戰鬥': 'Fighting',
        '學識': 'Occultism',  // 專精仍使用 Occultism
        '求生': 'Survival',
        '觀察': 'Observation',
        '戰術': 'Tactics',
        '潛匿': 'Stealth'
      }
      return focusMap[skill] || 'Occultism'
    }

    // 解析儀式步驟
    const parseRitualSteps = (stepsString) => {
      if (!stepsString) return 0
      
      // 提取數字，例如 "1+（由遊戲主持人裁定）" 提取出 1
      const stepsMatch = stepsString.match(/(\d+)/)
      return stepsMatch ? parseInt(stepsMatch[1]) : 0
    }

    // 解析消耗文字
    const parseCost = (costString) => {
      if (!costString) return { cost: 1, effects: '' }
      
      // 提取數字部分作為基本消耗
      const costMatch = costString.match(/(\d+)/)
      const baseCost = costMatch ? parseInt(costMatch[1]) : 1
      
      // 移除數字和🎲，剩下的作為效果
      const effects = costString.replace(/\d+🎲?消耗[，,]?/, '').trim()
      
      return {
        cost: baseCost,
        effects: effects
      }
    }

    // 解析傷害文字
    const parseDamage = (effectString) => {
      if (!effectString) return { damage: 0, effects: '', formula: '' }
      
      // 查找傷害數值
      const damageMatch = effectString.match(/(\d+)🎲/)
      const damage = damageMatch ? parseInt(damageMatch[1]) : 0
      
      // 查找傷害效果
      const effectMatch = effectString.match(/🎲(.+?)(?:傷害|，|$)/)
      const effects = effectMatch ? effectMatch[1].trim() : ''
      
      // 生成傷害公式
      const formula = damage > 0 ? `${damage}d6` : ''
      
      return {
        damage: damage,
        effects: effects,
        formula: formula
      }
    }

    const costData = parseCost(spell.cost)
    const damageData = parseDamage(spell.effect)

    return {
      name: spell.chineseName||spell.englishName,
      type: "spell",
      _id: generateId(),
      img: "systems/ac2d20/assets/doc-icons/spell.svg",
      system: {
        description: `<p>${spell.description || spell.effect || '法術描述'}</p>`,
        favorite: false,
        bonusChallenge: 0,
        complication: 20,
        cost: costData.cost,
        costEffects: costData.effects,
        damage: damageData.damage,
        damageEffects: damageData.effects,
        damageFormula: damageData.formula,
        damageStressType: damageData.damage > 0 ? "mental" : "",
        difficulty: spell.difficulty || 1,
        duration: spell.duration || '即時',
        effect: spell.effect || '',
        flawed: spell.flawedSpell || '',
        focus: translateFocus(spell.skill),
        mantle: false,
        momentum: spell.momentumOptions ? spell.momentumOptions.map(opt => 
          `${opt.cost}動力：${opt.effect}`
        ).join('\n') : '',
        ritualRequirements: spell.requirements || '',
        ritualResistance: '', // 目前資料中沒有抗性資訊，保持空白
        ritualSteps: {
          max: spell.category === '儀式' ? parseRitualSteps(spell.steps) : 0,
          value: 0
        },
        ritualStress: {
          max: spell.category === '儀式' ? (parseInt(spell.maxStress) || 0) : 0,
          value: 0
        },
        skill: 'Academia',
        spellType: getSpellType(spell.category)
      },
      effects: [],
      folder: null,
      sort: 0,
      flags: {},
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20", 
        systemVersion: "11.8.2",
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      ownership: {
        default: 0
      }
    }
  }

  // 主要匯出函數
  const exportToFVTT = (characterData) => {
    isExporting.value = true

    try {
      // 基本角色資訊
      const characterName = characterData.basicInfo?.characterName || '未命名角色'
      
      // 建立 FVTT 角色物件
      const fvttCharacter = {
        folder: null,
        name: characterName,
        type: "character",
        img: "systems/ac2d20/assets/doc-icons/character.svg", // 角色頭像
        system: {
          biography: "",
          fortune: {
            max: characterData.combat?.fate || 0,
            value: characterData.combat?.fate || 0
          },
          injuries: {
            count: 3,
            injury0: { injuryType: false, text: "", treated: false },
            injury1: { injuryType: false, text: "", treated: false },
            injury2: { injuryType: false, text: "", treated: false },
            treated: 0,
            value: 0
          },
          truths: characterData.personalTruths?.filter(truth => truth?.trim()) || [],
          xp: {
            log: characterData.character?.experienceRecords || [],
            min: 0,
            spent: 0,
            total: characterData.character?.currentExperience || 0,
            value: characterData.character?.currentExperience || 0
          },
          armorResistance: {
            max: characterData.combat?.totalArmor || 0,
            value: characterData.combat?.totalArmor || 0
          },
          carryCapacity: {
            mod: 0,
            value: (characterData.attributes?.BRA || 6)
          },
          courageResistance: {
            max: characterData.combat?.courage || 0,
            value: characterData.combat?.courage || 2
          },
          fatigue: 0,
          power: {
            max: 0,
            value: 0
          },
          stress: {
            max: characterData.stress?.maxStressBoxes || 0,
            mod: 0,
            value: (characterData.attributes?.WIL || 6) + 6
          },
          attributes: {
            agi: {
              bonus: characterData.attributeBonuses?.AGI || 0,
              value: characterData.attributes?.AGI || 6
            },
            bra: {
              bonus: characterData.attributeBonuses?.BRA || 0,
              value: characterData.attributes?.BRA || 6
            },
            coo: {
              bonus: characterData.attributeBonuses?.COO || 0,
              value: characterData.attributes?.COO || 6
            },
            ins: {
              bonus: characterData.attributeBonuses?.INS || 0,
              value: characterData.attributes?.INS || 6
            },
            rea: {
              bonus: characterData.attributeBonuses?.REA || 0,
              value: characterData.attributes?.REA || 6
            },
            wil: {
              bonus: characterData.attributeBonuses?.WIL || 0,
              value: characterData.attributes?.WIL || 6
            }
          },
          archetype: characterData.basicInfo?.archetype || "",
          background: characterData.basicInfo?.background || "",
          characteristic: "",
          languages: characterData.character?.languages || "",
          nationality: characterData.basicInfo?.culture || "",
          rank: characterData.basicInfo?.rank || "",
          spellcastingType: "traditional"
        },
        prototypeToken: {
          name: characterName,
          displayName: 0,
          actorLink: true,
          width: 1,
          height: 1,
          texture: {
            src: "systems/ac2d20/assets/doc-icons/character.svg",
            anchorX: 0.5,
            anchorY: 0.5,
            offsetX: 0,
            offsetY: 0,
            fit: "contain",
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            tint: "#ffffff",
            alphaThreshold: 0.75
          },
          lockRotation: false,
          rotation: 0,
          alpha: 1,
          disposition: 1,
          displayBars: 0,
          bar1: { attribute: null },
          bar2: { attribute: null },
          light: {
            negative: false,
            priority: 0,
            alpha: 0.5,
            angle: 360,
            bright: 0,
            color: null,
            coloration: 1,
            dim: 0,
            attenuation: 0.5,
            luminosity: 0.5,
            saturation: 0,
            contrast: 0,
            shadows: 0,
            animation: { type: null, speed: 5, intensity: 5, reverse: false },
            darkness: { min: 0, max: 1 }
          },
          sight: {
            enabled: true,
            range: 0,
            angle: 360,
            visionMode: "basic",
            color: null,
            attenuation: 0.1,
            brightness: 0,
            saturation: 0,
            contrast: 0
          },
          detectionModes: [],
          occludable: { radius: 0 },
          ring: {
            enabled: false,
            colors: { ring: null, background: null },
            effects: 0,
            subject: { scale: 1, texture: null }
          },
          turnMarker: {
            mode: 1,
            animation: null,
            src: null,
            disposition: false
          },
          movementAction: null,
          flags: {},
          randomImg: false,
          appendNumber: false,
          prependAdjective: false,
          randomImg: false,
          appendNumber: false,
          prependAdjective: false
        },
        items: [],
        effects: [],
        folder: null,
        flags: {},
        _stats: {
          coreVersion: "13.348",
          systemId: "ac2d20",
          systemVersion: "11.8.2",
          modifiedTime: getCurrentTimestamp(),
          lastModifiedBy: generateId(),
          exportSource: {
            worldId: "2d20tools-export",
            uuid: `Actor.${generateId()}`,
            coreVersion: "13.348",
            systemId: "ac2d20",
            systemVersion: "11.8.2"
          }
        },
        ownership: {
          default: 0
        }
      }

      // 建立技能物件（僅處理 Achtung Cthulhu 支援的技能）
      if (characterData.skills) {
        console.log('[FVTT Export] 開始處理技能，角色技能資料:', characterData.skills)
        
        // 確保所有支援的技能都被創建，即使沒有資料也創建預設值
        supportedSkills.forEach(skillCode => {
          const skillValue = characterData.skills[skillCode] !== undefined ? characterData.skills[skillCode] : 0
          console.log(`[FVTT Export] 創建技能: ${skillCode} -> ${skillMapping[skillCode]}, 值: ${skillValue}`)
          
          const skillItem = createSkillItem(skillCode, skillValue, characterData.selectedFocuses)
          if (skillItem) {
            console.log(`[FVTT Export] 技能物件創建成功: ${skillItem.name}`)
            fvttCharacter.items.push(skillItem)
          } else {
            console.warn(`[FVTT Export] 技能物件創建失敗: ${skillCode}`)
          }
        })
      } else {
        console.warn('[FVTT Export] 角色資料中沒有技能資料，創建預設技能')
        // 如果完全沒有技能資料，創建所有支援技能的預設版本
        supportedSkills.forEach(skillCode => {
          const skillItem = createSkillItem(skillCode, 0, {})
          if (skillItem) {
            fvttCharacter.items.push(skillItem)
          }
        })
      }

      // 建立武器物件
      if (characterData.weapons) {
        characterData.weapons.forEach(weapon => {
          const weaponItem = createWeaponItem(weapon)
          if (weaponItem) {
            fvttCharacter.items.push(weaponItem)
          }
        })
      }

      // 建立護甲物件
      if (characterData.armors) {
        characterData.armors.forEach(armor => {
          const armorItem = createArmorItem(armor)
          if (armorItem) {
            fvttCharacter.items.push(armorItem)
          }
        })
      }

      // 建立天賦物件
      if (characterData.talents) {
        characterData.talents.forEach(talent => {
          const talentItem = createTalentItem(talent)
          if (talentItem) {
            fvttCharacter.items.push(talentItem)
          }
        })
      }

      // 建立法術物件
      if (characterData.spells && characterData.spells.spellSlots) {
        characterData.spells.spellSlots.forEach(spellSlot => {
          const spellItem = createSpellItem(spellSlot)
          if (spellItem) {
            fvttCharacter.items.push(spellItem)
          }
        })
      }

      // 建立技能包物件
      if (characterData.skillkits) {
        characterData.skillkits.forEach(skillkit => {
          const skillkitItem = createSkillkitItem(skillkit)
          if (skillkitItem) {
            fvttCharacter.items.push(skillkitItem)
          }
        })
      }

      return fvttCharacter

    } finally {
      isExporting.value = false
    }
  }

  // 下載 FVTT JSON 檔案
  const downloadFVTTFile = (characterData) => {
    const fvttData = exportToFVTT(characterData)
    const characterName = characterData.basicInfo?.characterName || '未命名角色'
    const timestamp = new Date().toISOString().split('T')[0]
    const fileName = `fvtt-Actor-${characterName}-${generateId()}.json`
    
    const jsonStr = JSON.stringify(fvttData, null, 2)
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    isExporting,
    exportToFVTT,
    downloadFVTTFile
  }
}