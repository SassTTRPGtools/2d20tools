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
    RESILIENCE: 'Resilience',
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
      effects: [],
      folder: null,
      img: "systems/ac2d20/assets/skills.svg",
      name: skillName,
      system: {
        description: "",
        favorite: false,
        defaultAttribute: "agi", // 預設屬性，可以根據技能調整
        focuses: focuses,
        summary: "",
        value: skillData || 0
      },
      type: "skill",
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20", 
        systemVersion: "11.8.2",
        lastModifiedBy: generateId()
      },
      sort: 0,
      flags: {},
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
      _id: generateId(),
      effects: [],
      folder: null,
      img: "systems/ac2d20/assets/doc-icons/weapon.svg",
      name: weaponData.name,
      system: {
        description: "",
        favorite: false,
        cost: 0,
        quantity: 1,
        rarity: 0,
        restriction: 0,
        size: weaponData.size || 0,
        stashed: false,
        weight: "3",
        equippable: true,
        equipped: false,
        ammo: 0,
        effect: {
          area: { rank: 0, value: false },
          backlash_x: { rank: 1, value: false },
          drain: { rank: 0, value: false },
          intense: { rank: 0, value: false },
          persistent_x: { rank: 1, value: false },
          piercing_x: { rank: 1, value: false },
          snare: { rank: 0, value: false },
          stun: { rank: 0, value: false },
          vicious: { rank: 0, value: false }
        },
        escalation: false,
        focus: weaponData.focus || "Melee Weapons",
        melee: weaponData.reach === "close",
        qualities: {
          accurate: { value: false },
          bane: { value: false },
          close_quarters: { value: false },
          cumbersome: { value: false },
          debilitating: { value: false },
          escalation: { value: true },
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
          reliable: { value: true },
          subtle: { value: false },
          unreliable: { value: false },
          venomous: { value: false }
        },
        range: weaponData.reach || "close",
        salvo: weaponData.salvo || "",
        skill: "Fighting",
        stress: parseInt(weaponData.damage) || 4,
        weaponType: "coo"
      },
      type: "weapon",
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2",
        createdTime: getCurrentTimestamp(),
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      sort: 0,
      flags: {},
      ownership: {
        default: 0
      }
    }
  }

  // 創建護甲物件
  const createArmorItem = (armorData) => {
    if (!armorData.name) return null

    return {
      _id: generateId(),
      effects: [],
      folder: null,
      img: "systems/ac2d20/assets/doc-icons/armor.svg", 
      name: armorData.name,
      system: {
        description: "",
        favorite: false,
        cost: 0,
        quantity: 1,
        rarity: 0,
        restriction: 1,
        size: 0,
        stashed: false,
        weight: "3",
        equippable: true,
        equipped: false,
        qualities: {
          heavy: { description: "", label: "Heavy", value: false },
          shield: { description: "", label: "Shield", value: false },
          uncomfortable: { description: "", label: "Uncomfortable", value: false }
        },
        resistance: parseInt(armorData.resistance) || 1
      },
      type: "armor",
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2", 
        createdTime: getCurrentTimestamp(),
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      sort: 0,
      flags: {},
      ownership: {
        default: 0
      }
    }
  }

  // 創建天賦物件
  const createTalentItem = (talentData) => {
    if (!talentData.name) return null

    return {
      _id: generateId(),
      effects: [],
      folder: null,
      img: "systems/ac2d20/assets/doc-icons/talent.svg",
      name: talentData.name,
      system: {
        description: `<p>${talentData.content || '天賦描述'}</p>`,
        favorite: false,
        keywords: talentData.keywords || '關鍵詞'
      },
      type: "talent",
      _stats: {
        coreVersion: "13.348",
        systemId: "ac2d20",
        systemVersion: "11.8.2", 
        createdTime: getCurrentTimestamp(),
        modifiedTime: getCurrentTimestamp(),
        lastModifiedBy: generateId()
      },
      sort: 0,
      flags: {},
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
            max: characterData.stress?.maxStressBoxes || 20,
            mod: 0,
            value: (characterData.attributes?.WIL || 6) + 1
          },
          attributes: {},
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
          createdTime: getCurrentTimestamp(),
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

      // 轉換屬性（僅處理 Achtung Cthulhu 支援的屬性）
      if (characterData.attributes) {
        supportedAttributes.forEach(key => {
          if (characterData.attributes[key] !== undefined) {
            const fvttKey = attributeMapping[key]
            fvttCharacter.system.attributes[fvttKey] = {
              bonus: characterData.attributeBonuses?.[key] || 0,
              value: characterData.attributes[key] || 6
            }
          }
        })
      }

      // 建立技能物件（僅處理 Achtung Cthulhu 支援的技能）
      if (characterData.skills) {
        supportedSkills.forEach(skillCode => {
          if (characterData.skills[skillCode] !== undefined) {
            const skillItem = createSkillItem(skillCode, characterData.skills[skillCode], characterData.selectedFocuses)
            if (skillItem) {
              fvttCharacter.items.push(skillItem)
            }
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