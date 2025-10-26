// 角色原型資料
// 根據 Achtung! Cthulhu 2d20 規則書製作

export const archetypesAC = [
  {
    key: 'boffin',
    chineseName: '技術專家',
    englishName: 'Boffin',
    icon: '🔬',
    
    // 基本描述
    description: '技術專家深諳萬物運作的原理，擁有豐富的技術與實務知識，並擅長將這些知識轉化為實際行動。',
    
    detailDescription: '技術專家深諳萬物運作的原理，擁有豐富的技術與實務知識，並擅長將這些知識轉化為實際行動。若技術專家一時不知答案，他們多半能靠著嘗試與實驗自行推導出來，毫不畏懼弄髒雙手。',
    
    // 扮演提示
    roleplayTips: [
      '成為團隊中最聰明的人',
      '總能找到辦法解決問題',
      '破解密碼、拆除戰車、智勝納粹！'
    ],
    
    // 角色特色
    features: [
      '出色的技術知識和實驗能力',
      '能夠分析和理解複雜的機械系統',
      '擅長醫療救援和工程解決方案',
      '對載具操作有深度理解'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['COO', 'REA'],
    
    // 屬性加成（根據原文：體魄+1, 協調+2, 洞察+1, 智識+2）
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2   // 智識
    },
    
    // 技能加成（根據原文：學識+1, 工程+2, 醫學+2, 觀察+1, 潛匿+1, 載具+2）
    skillBonus: {
      ACADEMIA: 1,     // 學識
      ENGINEERING: 2,  // 工程
      MEDICINE: 2,     // 醫學
      OBSERVATION: 1,  // 觀察
      STEALTH: 1,      // 潛匿
      VEHICLES: 2      // 載具
    },
    
    // 專精選擇說明
    focusDescription: '從「工程」「醫學」「載具」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「工程」「醫學」「載具」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ENGINEERING: ['建築學', '戰鬥工兵', '電子學', '爆裂物學', '機械工程'],
      MEDICINE: ['急救', '傳染病學', '藥理學', '精神醫學', '外科手術', '毒理學'],
      VEHICLES: ['汽車', '摩托車', '重型載具', '坦克', '飛機', '船艇']
    },

    // 所持物品選項
    belongings: [
      {
        category: '工具或聯絡人',
        note: '選擇任意兩組工具、兩位聯絡人，或各一',
        selectCount: 2,
        options: [
          {
            name: '機械工具',
            type: 'equipment',
            alternative: {
              name: '聯絡人（機械師）',
              type: 'contact'
            }
          },
          {
            name: '電工工具',
            type: 'equipment',
            alternative: {
              name: '聯絡人（電工）',
              type: 'contact'
            }
          },
          {
            name: '爆破組',
            type: 'equipment',
            alternative: {
              name: '聯絡人（爆破）',
              type: 'contact'
            }
          },
          {
            name: '醫療包',
            type: 'equipment',
            alternative: {
              name: '聯絡人（醫師）',
              type: 'contact'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'commander',
    chineseName: '指揮官',
    englishName: 'Commander',
    icon: '👨‍✈️',
    
    // 基本描述
    description: '子彈、刺刀與炸彈若無妥善運用，終究無法贏得戰爭——而指揮官正是掌握全局的戰術專家。',
    
    detailDescription: '子彈、刺刀與炸彈若無妥善運用，終究無法贏得戰爭——而指揮官正是掌握全局的戰術專家。他能從高處看清戰場全貌，調度士兵與資源，確保每個人都能以最高效率完成任務。',
    
    // 扮演提示
    roleplayTips: [
      '成為團隊的領袖',
      '發號施令、協助他人',
      '衝鋒陷陣、運用大膽戰術，引領英雄達成目標！'
    ],
    
    // 角色特色
    features: [
      '卓越的領導能力和戰術思維',
      '能夠協調和指揮團隊行動',
      '在壓力下保持冷靜和決斷',
      '擅長制定和執行作戰計劃'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['COO', 'REA'],
    
    // 屬性加成（根據原文：協調+2, 洞察+1, 智識+2, 意志+1）
    attributeBonus: {
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2,  // 智識
      WIL: 1   // 意志
    },
    
    // 技能加成（根據原文：學識+1, 戰鬥+2, 說服+1, 求生+2, 潛匿+1, 戰術+2）
    skillBonus: {
      ACADEMIA: 1,    // 學識
      FIGHTING: 2,    // 戰鬥
      PERSUASION: 1,  // 說服
      SURVIVAL: 2,    // 求生
      STEALTH: 1,     // 潛匿
      TACTICS: 2      // 戰術
    },
    
    // 專精選擇說明
    focusDescription: '從「戰鬥」「求生」「戰術」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「戰鬥」「求生」「戰術」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      FIGHTING: ['徒手戰鬥', '近戰武器', '手槍', '近距作戰', '步槍', '重型武器', '威脅感知', '異域'],
      SURVIVAL: ['動物操控', '採集', '狩獵', '秘學', '定向', '追蹤'],
      TACTICS: ['空軍', '陸軍', '祕密行動', '領導', '海軍', '技術專案']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '指揮官特權',
        note: '每次冒險開始時，你可免費申請一項「限制值 2」以下的物品',
        selectCount: 0, // 特殊規則，不需要選擇
        options: [
          {
            name: '申請限制值2以下物品',
            type: 'special',
            alternative: {
              name: '任務開始時可申請裝備',
              type: 'privilege'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'con_artist',
    chineseName: '騙徒',
    englishName: 'Con Artist',
    icon: '🎭',
    
    // 基本描述
    description: '騙徒能在任何社交圈中如魚得水——他們會說任何需要的語言、模仿任何需要的人格，只為達成目的。',
    
    detailDescription: '騙徒能在任何社交圈中如魚得水——他們會說任何需要的語言、模仿任何需要的人格，只為達成目的。這些老練的操縱者能以威嚇、誘惑、說服與欺瞞遊走世間，同時也擅長察覺他人試圖操弄的意圖。',
    
    // 扮演提示
    roleplayTips: [
      '成為團隊中最具魅力的人',
      '欺瞞敵人、變換絕妙偽裝',
      '操控對象、唬過守衛、或堂而皇之地隱身其中！'
    ],
    
    // 角色特色
    features: [
      '出色的欺騙和偽裝技巧',
      '善於讀懂他人心理和動機',
      '能夠快速適應不同身份',
      '在社交場合如魚得水'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['INS', 'WIL'],
    
    // 屬性加成（根據原文：協調+1, 洞察+2, 智識+1, 意志+2）
    attributeBonus: {
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    // 技能加成（根據原文：學識+1, 觀察+2, 說服+2, 韌性+1, 潛匿+2, 戰術+1）
    skillBonus: {
      ACADEMIA: 1,     // 學識
      OBSERVATION: 2,  // 觀察
      PERSUASION: 2,   // 說服
      RESILIENCE: 1,   // 韌性
      STEALTH: 2,      // 潛匿
      TACTICS: 1       // 戰術
    },
    
    // 專精選擇說明
    focusDescription: '從「觀察」「說服」「潛匿」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「觀察」「說服」「潛匿」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺'],
      PERSUASION: ['魅力', '暗示', '恐嚇', '談判', '修辭', '欺瞞', '祈招'],
      STEALTH: ['偽裝', '迷彩', '都市潛行', '野外潛行']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '騙徒裝備',
        note: '偽裝工具組與一位對應任意技能或專精的聯絡人',
        selectCount: 1, // 特殊規則：固定獲得偽裝工具組 + 選擇一位聯絡人
        options: [
          {
            name: '偽裝工具組',
            type: 'equipment',
            alternative: {
              name: '偽裝工具組（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '聯絡人（學術專家）',
            type: 'contact',
            alternative: {
              name: '聯絡人（對應任意技能或專精）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（體能教練）',
            type: 'contact',
            alternative: {
              name: '聯絡人（對應任意技能或專精）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（工程師）',
            type: 'contact',
            alternative: {
              name: '聯絡人（對應任意技能或專精）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（戰鬥專家）',
            type: 'contact',
            alternative: {
              name: '聯絡人（對應任意技能或專精）',
              type: 'contact'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'grease_monkey',
    chineseName: '機械工',
    englishName: 'Grease Monkey',
    icon: '🔧',
    
    // 基本描述
    description: '幾乎生於方向盤之後的你，是運輸專家，能在任何情況下把人與物資送達目的地。',
    
    detailDescription: '幾乎生於方向盤之後的你，是運輸專家，能在任何情況下把人與物資送達目的地。你在危險任務中無可取代，不僅因為精通載具操作，更因你能讓它們在最惡劣的條件下持續運轉。',
    
    // 扮演提示
    roleplayTips: [
      '成為載具與機械的專家',
      '能打造或修好任何東西',
      '駕駛飛機、操縱火炮、在激烈追逐中掌握全場！'
    ],
    
    // 角色特色
    features: [
      '精通各種載具的操作和維修',
      '能夠在惡劣條件下保持機械運轉',
      '對機械構造有天生的理解力',
      '擅長運輸和後勤支援'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['COO', 'REA'],
    
    // 屬性加成（根據原文：體魄+1, 協調+2, 洞察+1, 智識+2）
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2   // 智識
    },
    
    // 技能加成（根據原文：運動+1, 工程+2, 說服+2, 韌性+1, 求生+1, 載具+2）
    skillBonus: {
      ATHLETICS: 1,    // 運動
      ENGINEERING: 2,  // 工程
      PERSUASION: 2,   // 說服
      RESILIENCE: 1,   // 韌性
      SURVIVAL: 1,     // 求生
      VEHICLES: 2      // 載具
    },
    
    // 專精選擇說明
    focusDescription: '從「工程」「說服」「載具」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「工程」「說服」「載具」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ENGINEERING: ['建築學', '戰鬥工兵', '電子學', '爆裂物學', '機械工程'],
      PERSUASION: ['魅力', '暗示', '恐嚇', '談判', '修辭', '欺瞞', '祈招'],
      VEHICLES: ['汽車', '摩托車', '重型載具', '坦克', '飛機', '船艇']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '機械工裝備',
        note: '固定獲得：機械工具組與一位載具相關聯絡人',
        selectCount: 1, // 選擇一位載具相關聯絡人
        options: [
          {
            name: '聯絡人（汽車經銷商）',
            type: 'contact',
            alternative: {
              name: '聯絡人（載具相關）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（飛行員）',
            type: 'contact',
            alternative: {
              name: '聯絡人（載具相關）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（船長）',
            type: 'contact',
            alternative: {
              name: '聯絡人（載具相關）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（機械師）',
            type: 'contact',
            alternative: {
              name: '聯絡人（載具相關）',
              type: 'contact'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'infiltrator',
    chineseName: '滲透者',
    englishName: 'Infiltrator',
    icon: '🥷',
    
    // 基本描述
    description: '滲透者擅長潛入禁區。他們能避開偵測、繞過防護，從嚴密設防的地方竊取情報與珍貴物資。',
    
    detailDescription: '滲透者擅長潛入禁區。他們能避開偵測、繞過防護，從嚴密設防的地方竊取情報與珍貴物資。在戰火紛飛的戰場上，能夠無聲無息地移動是一項致命的優勢。',
    
    // 扮演提示
    roleplayTips: [
      '從暗影中發動戰爭',
      '喜歡潛行於敵後，執行祕密任務',
      '擅長隱匿身形、出沒於不該出現的地方！'
    ],
    
    // 角色特色
    features: [
      '精通潛行和滲透技巧',
      '能夠無聲無息地移動和行動',
      '擅長繞過安全防護系統',
      '在敵後執行祕密任務的專家'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['AGI', 'COO'],
    
    // 屬性加成（根據原文：敏捷+2, 體魄+1, 協調+2, 洞察+1）
    attributeBonus: {
      AGI: 2,  // 敏捷
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      INS: 1   // 洞察
    },
    
    // 技能加成（根據原文：運動+2, 工程+1, 戰鬥+2, 觀察+1, 潛匿+2, 求生+1）
    skillBonus: {
      ATHLETICS: 2,    // 運動
      ENGINEERING: 1,  // 工程
      FIGHTING: 2,     // 戰鬥
      OBSERVATION: 1,  // 觀察
      STEALTH: 2,      // 潛匿
      SURVIVAL: 1      // 求生
    },
    
    // 專精選擇說明
    focusDescription: '從「運動」「戰鬥」「潛匿」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「運動」「戰鬥」「潛匿」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ATHLETICS: ['攀爬', '游泳', '奔跑', '運動訓練', '投擲', '舉重'],
      FIGHTING: ['徒手戰鬥', '近戰武器', '手槍', '近距作戰', '步槍', '重型武器', '威脅感知', '異域'],
      STEALTH: ['偽裝', '迷彩', '都市潛行', '野外潛行']
    },
    
    
    // 所持物品選項
    belongings: [
      {
        category: '滲透者裝備',
        note: '固定獲得：迷彩服、攀爬裝備、竊盜工具組',
        selectCount: 0, // 固定獲得所有物品
        options: [
          {
            name: '迷彩服',
            type: 'equipment',
            alternative: {
              name: '迷彩服（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '攀爬裝備',
            type: 'equipment',
            alternative: {
              name: '攀爬裝備（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '竊盜工具組',
            type: 'equipment',
            alternative: {
              name: '竊盜工具組（固定獲得）',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'investigator',
    chineseName: '調查員',
    englishName: 'Investigator',
    icon: '🔍',
    
    // 基本描述
    description: '調查員對真相有著無止境的渴求，願意不惜一切追尋真相。當戰爭雙方的宣傳戰方興未艾，真相變得比以往更難辨識，也更為珍貴。',
    
    detailDescription: '調查員對真相有著無止境的渴求，願意不惜一切追尋真相。當戰爭雙方的宣傳戰方興未艾，真相變得比以往更難辨識，也更為珍貴。無論是私家偵探、憲兵，還是記者——這些揭露事實的人都成為動盪時代的重要行動者。',
    
    // 扮演提示
    roleplayTips: [
      '不惜代價揭露真相',
      '挖掘陰謀的根源',
      '搜查文件、尋找線索、拼湊真相的碎片！'
    ],
    
    // 角色特色
    features: [
      '對真相的無止境渴求',
      '精通資料分析和線索拼湊',
      '擁有廣博的知識背景',
      '善於從細節中發現關鍵訊息'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['INS', 'REA'],
    
    // 屬性加成（根據原文：敏捷+1, 協調+1, 洞察+2, 智識+2）
    attributeBonus: {
      AGI: 1,  // 敏捷
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 2   // 智識
    },
    
    // 技能加成（根據原文：學識+2, 工程+1, 醫學+2, 觀察+2, 說服+1, 潛匿+1）
    skillBonus: {
      ACADEMIA: 2,     // 學識
      ENGINEERING: 1,  // 工程
      MEDICINE: 2,     // 醫學
      OBSERVATION: 2,  // 觀察
      PERSUASION: 1,   // 說服
      STEALTH: 1       // 潛匿
    },
    
    // 專精選擇說明
    focusDescription: '從「學識」「醫學」「觀察」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「學識」「醫學」「觀察」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ACADEMIA: ['藝術', '密碼學', '財務學', '歷史學', '語言學', '神秘學', '科學'],
      MEDICINE: ['急救', '傳染病學', '藥理學', '精神醫學', '外科手術', '毒理學'],
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺']
    },

    // 所持物品選項
    belongings: [
      {
        category: '調查員裝備',
        note: '選擇以下任一組：分析工具組或聯絡人（科學）、急救包或聯絡人（醫學）、手槍或聯絡人（學識）',
        selectCount: 1, // 三組中每組選一個
        options: [
          {
            name: '分析工具組',
            type: 'equipment',
            group: 'group1',
            alternative: {
              name: '聯絡人（科學專家）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（科學專家）',
            type: 'contact',
            group: 'group1',
            alternative: {
              name: '分析工具組',
              type: 'equipment'
            }
          },
          {
            name: '急救包',
            type: 'equipment',
            group: 'group2',
            alternative: {
              name: '聯絡人（醫學專家）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（醫學專家）',
            type: 'contact',
            group: 'group2',
            alternative: {
              name: '急救包',
              type: 'equipment'
            }
          },
          {
            name: '手槍',
            type: 'equipment',
            group: 'group3',
            alternative: {
              name: '聯絡人（學術專家）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（學術專家）',
            type: 'contact',
            group: 'group3',
            alternative: {
              name: '手槍',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'occultist',
    chineseName: '神秘學者',
    englishName: 'Occultist',
    icon: '🔮',
    
    // 基本描述
    description: '神秘學者探索宇宙深層而詭異的力量，並窺得如何將這些力量屈服於自身意志的祕密。',
    
    detailDescription: '神秘學者探索宇宙深層而詭異的力量，並窺得如何將這些力量屈服於自身意志的祕密。雖然只有最狂妄或妄想的神秘學者敢自稱掌握超自然之力，但即使是微弱的秘學天賦，若落在對的人手中，也能帶來驚人的力量——若落在錯的人手裡，則可能招致災厄。',
    
    // 扮演提示
    roleplayTips: [
      '對宇宙運行的奧祕有異常洞察',
      '操控不可思議的魔法',
      '施展法術、喚醒沉睡的神祇，對抗納粹教團！'
    ],
    
    // 角色特色
    features: [
      '精通秘學知識和超自然研究',
      '能夠施展魔法和儀式',
      '對異界力量有深度理解',
      '擁有對抗超自然威脅的能力'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['INS', 'REA', 'WIL'],
    
    // 屬性加成（根據原文：體魄+1, 意志+2, 並擇一組合）
    // 注意：這裡提供兩種選擇組合，實際應用時需要讓玩家選擇
    attributeBonus: {
      BRA: 1,  // 體魄
      WIL: 2,  // 意志
      // 玩家需要選擇以下其中一組：
      // 選項1: INS: 2, REA: 1  (洞察+2, 智識+1)
      // 選項2: INS: 1, REA: 2  (洞察+1, 智識+2)
    },
    
    // 屬性選擇說明
    attributeChoices: [
      {
        name: '洞察導向',
        description: '洞察+2, 智識+1',
        bonuses: { INS: 2, REA: 1 }
      },
      {
        name: '智識導向', 
        description: '洞察+1, 智識+2',
        bonuses: { INS: 1, REA: 2 }
      }
    ],
    
    // 技能加成（根據原文：觀察+1, 說服+2, 韌性+2, 潛匿+1, 並擇一組合）
    skillBonus: {
      OBSERVATION: 1,  // 觀察
      PERSUASION: 2,   // 說服
      RESILIENCE: 2,   // 韌性
      STEALTH: 1,      // 潛匿
      // 玩家需要選擇以下其中一組：
      // 選項1: ACADEMIA: 2, SURVIVAL: 1  (學識+2, 求生+1)
      // 選項2: ACADEMIA: 1, SURVIVAL: 2  (學識+1, 求生+2)
    },
    
    // 技能選擇說明
    skillChoices: [
      {
        name: '學識導向',
        description: '學識+2, 求生+1',
        bonuses: { ACADEMIA: 2, SURVIVAL: 1 }
      },
      {
        name: '求生導向',
        description: '學識+1, 求生+2', 
        bonuses: { ACADEMIA: 1, SURVIVAL: 2 }
      }
    ],
    
    // 專精選擇說明
    focusDescription: '從「學識」「說服」「韌性」「求生」四項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「學識」「說服」「韌性」「求生」四項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ACADEMIA: ['藝術', '密碼學', '財務學', '歷史學', '語言學', '神秘學', '科學'],
      PERSUASION: ['魅力', '暗示', '恐嚇', '談判', '修辭', '欺瞞', '祈招'],
      RESILIENCE: ['堅毅', '紀律', '免疫力'],
      SURVIVAL: ['動物操控', '採集', '狩獵', '秘學', '定向', '追蹤']
    },
    
    
    // 所持物品選項
    belongings: [
      {
        category: '神秘學者裝備',
        note: '固定獲得：儀式工具與一位擁有「神秘學」或「秘學」專精的聯絡人',
        selectCount: 0, // 固定獲得所有物品
        options: [
          {
            name: '儀式工具',
            type: 'equipment',
            alternative: {
              name: '儀式工具（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '聯絡人（神秘學專家）',
            type: 'contact',
            alternative: {
              name: '聯絡人（神秘學或秘學專精）',
              type: 'contact'
            }
          }
        ]
      }
    ],
    
    // 特殊規則說明
    specialRules: [
      '神秘學者擁有兩組屬性和技能的選擇組合',
      '角色同時只能擁有一項帶有「施法者（Spellcaster）」關鍵詞的天賦',
      '施法者相關規則詳見第九章〈魔法與神話體系〉'
    ]
  },
  {
    key: 'soldier',
    chineseName: '士兵',
    englishName: 'Soldier',
    icon: '🪖',
    
    // 基本描述
    description: '士兵精於戰鬥，擅長擊潰敵人並保護戰友。即使在戰火遍地、軍隊壓境的歐洲戰場上，士兵仍能脫穎而出。',
    
    detailDescription: '士兵精於戰鬥，擅長擊潰敵人並保護戰友。即使在戰火遍地、軍隊壓境的歐洲戰場上，士兵仍能脫穎而出——他們往往能在他人難以倖存的災厄中活下來，並被指派執行最艱險的戰鬥任務。',
    
    // 扮演提示
    roleplayTips: [
      '成為團隊中最強壯的戰士',
      '操作重型火力與致命武器',
      '在槍林彈雨中翻滾掩護、完成不可能的射擊、或衝鋒奮戰取勝！'
    ],
    
    // 角色特色
    features: [
      '精通各種武器和戰鬥技法',
      '擁有出色的戰場生存能力',
      '能夠保護戰友並承受火力',
      '善於利用地形和戰術優勢'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['BRA', 'COO'],
    
    // 屬性加成（根據原文：敏捷+1, 體魄+2, 協調+2, 洞察+1）
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      COO: 2,  // 協調
      INS: 1   // 洞察
    },
    
    // 技能加成（根據原文：運動+1, 戰鬥+2, 觀察+1, 韌性+2, 求生+2, 戰術+1）
    skillBonus: {
      ATHLETICS: 1,    // 運動
      FIGHTING: 2,     // 戰鬥
      OBSERVATION: 1,  // 觀察
      RESILIENCE: 2,   // 韌性
      SURVIVAL: 2,     // 求生
      TACTICS: 1       // 戰術
    },
    
    // 專精選擇說明
    focusDescription: '從「戰鬥」「韌性」「求生」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「戰鬥」「韌性」「求生」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      FIGHTING: ['徒手戰鬥', '近戰武器', '手槍', '近距作戰', '步槍', '重型武器', '威脅感知', '異域'],
      RESILIENCE: ['堅毅', '紀律', '免疫力'],
      SURVIVAL: ['動物操控', '採集', '狩獵', '秘學', '定向', '追蹤']
    },
        
    // 所持物品選項
    belongings: [
      {
        category: '士兵裝備',
        note: '固定獲得：一把限制值3或以下的武器與一把限制值1的手槍',
        selectCount: 0, // 固定獲得所有物品
        options: [
          {
            name: '限制值3或以下武器',
            type: 'equipment',
            alternative: {
              name: '限制值3或以下武器（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '限制值1手槍',
            type: 'equipment',
            alternative: {
              name: '限制值1手槍（固定獲得）',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'assassin',
    chineseName: '刺客',
    englishName: 'Assassin',
    icon: '🗡️',
    
    // 基本描述
    description: '無論是在月光下相遇、豪華宴會中潛伏，或潛行於敵後線內，刺客皆以死亡為業。身為抵抗運動的一員，刺客以佔領軍軍官、關鍵人員、合作者與叛徒為目標。',
    
    detailDescription: '無論是在月光下相遇、豪華宴會中潛伏，或潛行於敵後線內，刺客皆以死亡為業。身為抵抗運動的一員，刺客以佔領軍軍官、關鍵人員、合作者與叛徒為目標。其技藝包括暗藏的刀刃、消音手槍與致命毒藥，但他們也能即興取材，讓任何物件成為致命武器。',
    
    // 扮演提示
    roleplayTips: [
      '施展迅捷而致命的攻擊',
      '調製並施放陰險的毒藥',
      '當情勢失控時從容脫身'
    ],
    
    // 角色特色
    features: [
      '精通暗殺技巧和致命武器',
      '擅長調製和使用毒藥',
      '能夠在危險中迅速脫身',
      '善於偽裝和潛入目標地點'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['AGI', 'COO'],
    
    // 屬性加成（根據原文：敏捷+2, 協調+2, 洞察+1, 智識+1）
    attributeBonus: {
      AGI: 2,  // 敏捷
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 1   // 智識
    },
    
    // 技能加成（根據原文：運動+1, 戰鬥+2, 醫學+1, 觀察+2, 說服+1, 潛匿+2）
    skillBonus: {
      ATHLETICS: 1,    // 運動
      FIGHTING: 2,     // 戰鬥
      MEDICINE: 1,     // 醫學
      OBSERVATION: 2,  // 觀察
      PERSUASION: 1,   // 說服
      STEALTH: 2       // 潛匿
    },
    
    // 專精選擇說明
    focusDescription: '從「戰鬥」「觀察」「潛匿」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「戰鬥」「觀察」「潛匿」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      FIGHTING: ['徒手戰鬥', '近戰武器', '手槍', '近距作戰', '步槍', '重型武器', '威脅感知', '異域'],
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺'],
      STEALTH: ['偽裝', '迷彩', '都市潛行', '野外潛行']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '刺客裝備',
        note: '製毒者工具組與隱藏武器',
        selectCount: 0, // 固定獲得所有物品
        options: [
          {
            name: '製毒者工具組',
            type: 'equipment',
            alternative: {
              name: '製毒者工具組（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '隱藏武器',
            type: 'equipment',
            alternative: {
              name: '隱藏武器（固定獲得）',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'propagandist',
    chineseName: '宣傳員',
    englishName: 'Propagandist',
    icon: '📢',
    
    // 基本描述
    description: '宣傳員操縱情感與信念。他們可能擅長演說或文字傳播，也可能精於向群眾散布資訊。',
    
    detailDescription: '宣傳員操縱情感與信念。他們可能擅長演說或文字傳播，也可能精於向群眾散布資訊。作為抵抗運動的一員，宣傳員總是掌握消息，負責凝聚盟友以求生存與壯大。他們的工作需要隱密與耐心，雖不持武器，卻能憑言語與思想，激勵人民對抗壓迫者。',
    
    // 扮演提示
    roleplayTips: [
      '鼓舞被壓迫的民眾',
      '建立可靠的人脈網絡',
      '破解常規戰或隱密之戰的情報密碼'
    ],
    
    // 角色特色
    features: [
      '精通宣傳和煽動技巧',
      '擁有廣泛的人脈網絡',
      '擅長密碼學和情報分析',
      '能夠凝聚民心對抗壓迫'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['INS', 'WIL'],
    
    // 屬性加成（根據原文：體魄+1, 洞察+2, 智識+1, 意志+2）
    attributeBonus: {
      BRA: 1,  // 體魄
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    // 技能加成（根據原文：學識+2, 運動+1, 戰鬥+1, 觀察+1, 說服+2, 戰術+2）
    skillBonus: {
      ACADEMIA: 2,     // 學識
      ATHLETICS: 1,    // 運動
      FIGHTING: 1,     // 戰鬥
      OBSERVATION: 1,  // 觀察
      PERSUASION: 2,   // 說服
      TACTICS: 2       // 戰術
    },
    
    // 專精選擇說明
    focusDescription: '從「學識」「說服」「戰術」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「學識」「說服」「戰術」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ACADEMIA: ['藝術', '密碼學', '財務學', '歷史學', '語言學', '神秘學', '科學'],
      PERSUASION: ['魅力', '暗示', '恐嚇', '談判', '修辭', '欺瞞', '祈招'],
      TACTICS: ['空軍', '陸軍', '祕密行動', '領導', '海軍', '技術專案']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '宣傳員裝備',
        note: '身分證件與一位聯絡人（任意專精）',
        selectCount: 1, // 選擇一位聯絡人
        options: [
          {
            name: '身分證件',
            type: 'equipment',
            alternative: {
              name: '身分證件（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '聯絡人（任意專精）',
            type: 'contact',
            alternative: {
              name: '聯絡人（對應任意專精）',
              type: 'contact'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'raider',
    chineseName: '襲擊者',
    englishName: 'Raider',
    icon: '⚔️',
    
    // 基本描述
    description: '身為游擊戰專家，襲擊者熟知伏擊、竊取與脫身之道，總能在增援抵達前全身而退。',
    
    detailDescription: '身為游擊戰專家，襲擊者熟知伏擊、竊取與脫身之道，總能在增援抵達前全身而退。他們行動迅速、打擊猛烈、隨即消失，待危險過去後再現身。在抵抗運動中，襲擊者的任務是擾亂敵軍與警察行動，將敵方的資源轉化為己用，以延長戰線，讓抵抗持續數週甚至數月。',
    
    // 扮演提示
    roleplayTips: [
      '解放被壓迫軍隊掠奪的物資',
      '成為緊密游擊隊中的可靠成員',
      '快速出擊、猛烈打擊、自由生存'
    ],
    
    // 角色特色
    features: [
      '精通游擊戰術和伏擊技巧',
      '擅長快速打擊後脫身',
      '能夠奪取和利用敵方資源',
      '在團隊中發揮關鍵作用'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['BRA', 'COO'],
    
    // 屬性加成（根據原文：敏捷+1, 體魄+2, 協調+2, 意志+1）
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      COO: 2,  // 協調
      WIL: 1   // 意志
    },
    
    // 技能加成（根據原文：戰鬥+2, 觀察+2, 潛匿+1, 求生+1, 戰術+1, 載具+2）
    skillBonus: {
      FIGHTING: 2,     // 戰鬥
      OBSERVATION: 2,  // 觀察
      STEALTH: 1,      // 潛匿
      SURVIVAL: 1,     // 求生
      TACTICS: 1,      // 戰術
      VEHICLES: 2      // 載具
    },
    
    // 專精選擇說明
    focusDescription: '從「戰鬥」「觀察」「載具」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「戰鬥」「觀察」「載具」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      FIGHTING: ['徒手戰鬥', '近戰武器', '手槍', '近距作戰', '步槍', '重型武器', '威脅感知', '異域'],
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺'],
      VEHICLES: ['汽車', '摩托車', '重型載具', '坦克', '飛機', '船艇']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '襲擊者裝備',
        note: '爆破工具組或保險箱破解工具組、限制值2或更低武器、聯絡人（載具）',
        selectCount: 1, // 選擇工具組類型
        options: [
          {
            name: '爆破工具組',
            type: 'equipment',
            alternative: {
              name: '保險箱破解工具組',
              type: 'equipment'
            }
          },
          {
            name: '限制值2或更低武器',
            type: 'equipment',
            alternative: {
              name: '限制值2或更低武器（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '聯絡人（載具）',
            type: 'contact',
            alternative: {
              name: '聯絡人（載具專精）',
              type: 'contact'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'resistance_leader',
    chineseName: '抵抗運動領袖',
    englishName: 'Resistance Leader',
    icon: '🛡️',
    
    // 基本描述
    description: '兼具戰術家、政治家與軍需官職能的抵抗運動領袖，必須熟知組織運作的每個細節，並能與其他抵抗小組、同情者及正規軍建立聯繫。',
    
    detailDescription: '兼具戰術家、政治家與軍需官職能的抵抗運動領袖，必須熟知組織運作的每個細節，並能與其他抵抗小組、同情者及正規軍建立聯繫。他們在缺乏支援與成功保證的情況下仍須做出艱難決策——然而，鮮有人能比他們更致力於追求自由的理想。',
    
    // 扮演提示
    roleplayTips: [
      '帶領你的抵抗小組',
      '在風險與報酬間取得平衡以達成目標',
      '打破壓迫的枷鎖，解放你的人民與祖國'
    ],
    
    // 角色特色
    features: [
      '出色的領導能力和組織技巧',
      '能夠建立和維持複雜的聯盟關係',
      '擅長在資源匱乏中做出艱難決策',
      '致力於自由與解放的崇高理想'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['INS', 'WIL'],
    
    // 屬性加成（根據原文：體魄+1, 協調+1, 洞察+2, 意志+2）
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 1,  // 協調
      INS: 2,  // 洞察
      WIL: 2   // 意志
    },
    
    // 技能加成（根據原文：學識+1, 觀察+2, 說服+2, 韌性+1, 求生+1, 戰術+2）
    skillBonus: {
      ACADEMIA: 1,     // 學識
      OBSERVATION: 2,  // 觀察
      PERSUASION: 2,   // 說服
      RESILIENCE: 1,   // 韌性
      SURVIVAL: 1,     // 求生
      TACTICS: 2       // 戰術
    },
    
    // 專精選擇說明
    focusDescription: '從「觀察」「說服」「戰術」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「觀察」「說服」「戰術」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺'],
      PERSUASION: ['魅力', '暗示', '恐嚇', '談判', '修辭', '欺瞞', '祈招'],
      TACTICS: ['空軍', '陸軍', '祕密行動', '領導', '海軍', '技術專案']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '抵抗運動領袖裝備',
        note: '兩位聯絡人（各自擁有一項專精）、步槍或衝鋒槍與任意手槍各一另附手榴彈、偽裝工具組',
        selectCount: 2, // 選擇兩位聯絡人和武器類型
        options: [
          {
            name: '聯絡人（專精1）',
            type: 'contact',
            alternative: {
              name: '聯絡人（擁有專精）',
              type: 'contact'
            }
          },
          {
            name: '聯絡人（專精2）',
            type: 'contact',
            alternative: {
              name: '聯絡人（擁有專精）',
              type: 'contact'
            }
          },
          {
            name: '步槍',
            type: 'equipment',
            alternative: {
              name: '衝鋒槍',
              type: 'equipment'
            }
          },
          {
            name: '手槍與手榴彈',
            type: 'equipment',
            alternative: {
              name: '手槍與手榴彈（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '偽裝工具組',
            type: 'equipment',
            alternative: {
              name: '偽裝工具組（固定獲得）',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  },
  {
    key: 'saboteur',
    chineseName: '破壞者',
    englishName: 'Saboteur',
    icon: '💣',
    
    // 基本描述
    description: '破壞者深諳如何摧毀、損壞或癱瘓設施以達最大效果。在抵抗運動中，優秀的破壞者是無可取代的行動人員。',
    
    detailDescription: '破壞者深諳如何摧毀、損壞或癱瘓設施以達最大效果。在抵抗運動中，優秀的破壞者是無可取代的行動人員。許多任務的目標都是讓法西斯的機械齒輪停轉——破壞者擁有各種達成此目的的手段：無論是爆破、隱密破壞或單純蠻力，你都具備讓它實現的技能。',
    
    // 扮演提示
    roleplayTips: [
      '成為最具資源應變力的人',
      '在壓力下冷靜行動',
      '摧毀敵軍防禦與基礎設施'
    ],
    
    // 角色特色
    features: [
      '精通爆破和破壞技術',
      '能夠在高壓環境中保持冷靜',
      '擅長摧毀敵方設施和裝備',
      '具備出色的資源應變能力'
    ],
    
    // 關鍵屬性（用於顯示）
    keyAttributes: ['BRA', 'REA'],
    
    // 屬性加成（根據原文：體魄+2, 協調+1, 智識+2, 意志+1）
    attributeBonus: {
      BRA: 2,  // 體魄
      COO: 1,  // 協調
      REA: 2,  // 智識
      WIL: 1   // 意志
    },
    
    // 技能加成（根據原文：運動+1, 工程+2, 醫學+1, 觀察+2, 潛匿+2, 載具+1）
    skillBonus: {
      ATHLETICS: 1,    // 運動
      ENGINEERING: 2,  // 工程
      MEDICINE: 1,     // 醫學
      OBSERVATION: 2,  // 觀察
      STEALTH: 2,      // 潛匿
      VEHICLES: 1      // 載具
    },
    
    // 專精選擇說明
    focusDescription: '從「工程」「觀察」「潛匿」三項技能中選擇任意兩項專精',
    
    // 可選專精列表（用於顯示）
    availableFocuses: [
      '從「工程」「觀察」「潛匿」三項技能中選擇任意兩項專精'
    ],
    
    // 專精選項（對應到實際技能代碼）
    focusOptions: {
      ENGINEERING: ['建築學', '戰鬥工兵', '電子學', '爆裂物學', '機械工程'],
      OBSERVATION: ['聽覺', '直覺', '視覺', '嗅覺與味覺'],
      STEALTH: ['偽裝', '迷彩', '都市潛行', '野外潛行']
    },
    
    // 所持物品選項
    belongings: [
      {
        category: '破壞者裝備',
        note: '爆破工具組、隱藏炸藥、步槍或衝鋒槍與任意手槍各一另附手榴彈',
        selectCount: 1, // 選擇武器類型
        options: [
          {
            name: '爆破工具組',
            type: 'equipment',
            alternative: {
              name: '爆破工具組（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '隱藏炸藥',
            type: 'equipment',
            alternative: {
              name: '隱藏炸藥（固定獲得）',
              type: 'equipment'
            }
          },
          {
            name: '步槍',
            type: 'equipment',
            alternative: {
              name: '衝鋒槍',
              type: 'equipment'
            }
          },
          {
            name: '手槍與手榴彈',
            type: 'equipment',
            alternative: {
              name: '手槍與手榴彈（固定獲得）',
              type: 'equipment'
            }
          }
        ]
      }
    ]
  }
  // 已完成所有十三個原型（八個官方 + 五個抵抗運動）
]

// 導出預設原型（完整的十三個原型：技術專家、指揮官、騙徒、機械工、滲透者、調查員、神秘學者、士兵、刺客、宣傳員、襲擊者、抵抗運動領袖、破壞者）
export default archetypesAC