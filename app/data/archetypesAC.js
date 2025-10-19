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
      FIGHTING: ['步槍', '手槍', '近戰武器', '重武器', '戰術射擊'],
      SURVIVAL: ['行軍', '攀爬', '游泳', '耐力', '野外生存'],
      TACTICS: ['陸軍戰術', '空軍戰術', '海軍戰術', '特種作戰', '戰略規劃']
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
      OBSERVATION: ['視覺', '聽覺', '嗅覺', '直覺', '觀察細節'],
      PERSUASION: ['欺瞞', '魅力', '威脅', '誘惑', '談判'],
      STEALTH: ['都市潛行', '偽裝', '隱匿', '監視', '滲透']
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
      ENGINEERING: ['機械工程', '汽車維修', '航空工程', '船舶工程', '重型機械'],
      PERSUASION: ['交易談判', '後勤協調', '軍需採購', '人際關係', '市場交涉'],
      VEHICLES: ['汽車駕駛', '摩托車', '重型載具', '飛機駕駛', '船艇操作']
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
      ATHLETICS: ['攀爬', '跳躍', '平衡', '跑酷', '體操'],
      FIGHTING: ['近戰武器', '手槍', '無聲武器', '暗殺技巧', '突襲戰術'],
      STEALTH: ['都市潛行', '野外潛行', '監視', '滲透', '無聲移動']
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
      ACADEMIA: ['歷史學', '考古學', '語言學', '法律', '政治學', '軍事史'],
      MEDICINE: ['法醫學', '毒理學', '精神醫學', '病理學', '急救', '解剖學'],
      OBSERVATION: ['證據分析', '現場調查', '監視', '情報蒐集', '心理側寫']
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
      ACADEMIA: ['神秘學', '秘學', '宗教學', '古代語言', '考古學', '民俗學'],
      PERSUASION: ['儀式主持', '召喚術', '魅惑', '威脅', '神秘談判'],
      RESILIENCE: ['精神防護', '意志抵抗', '恐懼克制', '創傷復原', '異界侵蝕抗性'],
      SURVIVAL: ['野外求生', '都市生存', '異界生存', '資源搜尋', '環境適應']
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
      FIGHTING: ['步槍', '重機槍', '近戰武器', '手榴彈', '重武器', '戰術射擊'],
      RESILIENCE: ['戰鬥耐力', '傷痛忍受', '恐懼抗性', '壓力管理', '戰場適應'],
      SURVIVAL: ['戰場求生', '野外作戰', '都市戰鬥', '極地作戰', '叢林戰']
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
  }
  // 已完成所有八個官方原型
]

// 導出預設原型（完整的八個官方原型：技術專家、指揮官、騙徒、機械工、滲透者、調查員、神秘學者、士兵）
export default archetypesAC