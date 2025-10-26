// 角色背景資料
// 根據 Achtung! Cthulhu 2d20 規則書製作

export const backgrounds = [
  {
    key: 'academic',
    chineseName: '學者',
    englishName: 'Academic',
    icon: '📚',
    
    // 基本描述
    description: '你的一生浸淫於書籍與知識之中。你可能是某個特定學科的專家，例如歷史學家或科學家；也可能是知識的守護者與傳播者。',
    
    detailDescription: '你的一生浸淫於書籍與知識之中。你可能是某個特定學科的專家，例如歷史學家或科學家；也可能是知識的守護者與傳播者，如教師、圖書館員或博物館館長。',
    
    // 屬性加成
    attributeBonus: {
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2,  // 智識
      WIL: 1   // 意志
    },
    
    // 技能加成
    skillBonus: {
      ACADEMIA: 2,     // 學識
      OBSERVATION: 1,  // 觀察
      PERSUASION: 1    // 說服
    },
    
    // 專精要求
    focusRequirements: [
      {
        skill: 'ACADEMIA',
        count: 1,
        description: '自「學識」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    // 天賦要求
    talentRequirement: {
      keyword: '學識',
      description: '選擇 1 項具「學識」關鍵詞的天賦'
    },
    
    // 真理選項
    truthOptions: [
      '某學科博士',
      '博物館館長', 
      '某學科教授'
    ],
    
    // 裝備
    equipment: [
      '一名「學識」領域的聯絡人'
    ]
  },
  {
    key: 'air_force',
    chineseName: '空軍',
    englishName: 'Air Force',
    icon: '✈️',
    
    description: '你隸屬於同盟國的空軍部隊，可能是飛行員、轟炸機機組成員、領航員，或是地勤維修人員。',
    
    detailDescription: '你隸屬於同盟國的空軍部隊，可能是飛行員、轟炸機機組成員、領航員，或是地勤維修人員。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      COO: 2,  // 協調
      INS: 2,  // 洞察
      REA: 1   // 智識
    },
    
    skillBonus: {
      ENGINEERING: 1,  // 工程
      TACTICS: 1,      // 戰術
      VEHICLES: 2      // 載具
    },
    
    focusRequirements: [
      {
        skill: 'VEHICLES',
        count: 1,
        description: '自「載具」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '載具',
      description: '選擇 1 項具「載具」關鍵詞的天賦'
    },
    
    truthOptions: [
      '王牌飛行員',
      '專業領航員',
      '天才技師'
    ],
    
    equipment: [
      '機械工具組，或一名擁有以下專精的聯絡人：機械、重型載具或飛機'
    ]
  },
  {
    key: 'army',
    chineseName: '陸軍',
    englishName: 'Army',
    icon: '🪖',
    
    description: '你隸屬於同盟國的陸軍部隊。可能是步兵，也可能是隸屬於龐大軍隊中各種職務的一員。',
    
    detailDescription: '你隸屬於同盟國的陸軍部隊。可能是步兵，也可能是隸屬於龐大軍隊中各種職務的一員，如坦克與砲兵組員、後勤與技術人員、偵察兵與神射手，或受過精英訓練的傘兵與突擊隊員。本背景亦涵蓋如皇家海軍陸戰隊與美國海軍陸戰隊等具備戰鬥與快速部署訓練的單位。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      BRA: 2,  // 體魄
      COO: 1,  // 協調
      WIL: 1   // 意志
    },
    
    skillBonus: {
      ATHLETICS: 1,  // 運動
      FIGHTING: 2,   // 戰鬥
      TACTICS: 1     // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'FIGHTING',
        count: 1,
        description: '自「戰鬥」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '戰鬥',
      description: '選擇 1 項具「戰鬥」關鍵詞的天賦'
    },
    
    truthOptions: [
      '受訓神射手',
      '傘兵',
      '致命突擊兵'
    ],
    
    equipment: [
      '彈藥帶'
    ]
  },
  {
    key: 'athlete',
    chineseName: '運動員',
    englishName: 'Athlete',
    icon: '🏃‍♂️',
    
    description: '你是一名職業運動員。雖然嘗試維持正常生活，但戰爭期間多數職業競賽被迫中止。',
    
    detailDescription: '你是一名職業運動員。雖然嘗試維持正常生活，但戰爭期間多數職業競賽被迫中止，運動員轉而以其他方式為戰爭貢獻力量。一些技藝高超的軍人被留下來參與「陸軍對海軍」等比賽，以提升國內士氣。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      BRA: 2,  // 體魄
      COO: 1,  // 協調
      INS: 1   // 洞察
    },
    
    skillBonus: {
      ATHLETICS: 2,   // 運動
      FIGHTING: 1,    // 戰鬥
      RESILIENCE: 1   // 韌性
    },
    
    focusRequirements: [
      {
        skill: 'ATHLETICS',
        count: 1,
        description: '自「運動」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '運動',
      description: '選擇 1 項具「運動」關鍵詞的天賦'
    },
    
    truthOptions: [
      '足球明星',
      '棒球冠軍',
      '奧運拳擊手'
    ],
    
    equipment: [
      '取得一件體育裝備（如球棒、板球棒或其他），可作為臨時武器使用'
    ]
  },
  {
    key: 'covert_operative',
    chineseName: '祕密行動人員',
    englishName: 'Covert Operative',
    icon: '🕵️‍♂️',
    
    description: '你在敵後活動，隸屬於特務機構，如英國的特別行動執行處（SOE）或美國的戰略情報局（OSS）。',
    
    detailDescription: '你在敵後活動，隸屬於特務機構，如英國的特別行動執行處（SOE）或美國的戰略情報局（OSS）。無論是蒐集情報、發展線人網絡，還是進行破壞與宣傳，你的工作既危險又關鍵，對支持那些為解放家園而奮戰的抵抗組織尤為重要。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      COO: 1,  // 協調
      INS: 1,  // 洞察
      WIL: 2   // 意志
    },
    
    skillBonus: {
      PERSUASION: 1,  // 說服
      STEALTH: 2,     // 潛匿
      TACTICS: 1      // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'STEALTH',
        count: 1,
        description: '自「潛匿」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '潛匿',
      description: '選擇 1 項具「潛匿」關鍵詞的天賦'
    },
    
    truthOptions: [
      '掩護身份',
      '無聲殺手',
      '抵抗組織成員'
    ],
    
    equipment: [
      '身份文件，以及一件限制值 2 或以下且具「隱匿」特性的武器'
    ]
  },
  {
    key: 'criminal',
    chineseName: '犯罪者',
    englishName: 'Criminal',
    icon: '🔫',
    
    description: '你是個職業罪犯，長年遊走於法律邊緣，但戰爭或許改變了你的忠誠。',
    
    detailDescription: '你是個職業罪犯，長年遊走於法律邊緣，但戰爭或許改變了你的忠誠。許多犯罪組織利用其關係網協助國家，也有些趁著戰亂擴張黑市勢力。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      BRA: 1,  // 體魄
      INS: 2,  // 洞察
      WIL: 1   // 意志
    },
    
    skillBonus: {
      PERSUASION: 2,  // 說服
      STEALTH: 1,     // 潛匿
      TACTICS: 1      // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'PERSUASION',
        count: 1,
        description: '自「說服」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '說服',
      description: '選擇 1 項具「說服」關鍵詞的天賦'
    },
    
    truthOptions: [
      '狡詐搬運工',
      '犯罪策劃者',
      '黑市商人'
    ],
    
    equipment: [
      '取得任一限制值 1 或以下的物品'
    ]
  },
  {
    key: 'driver',
    chineseName: '駕駛員',
    englishName: 'Driver',
    icon: '🚗',
    
    description: '你的人生多半在駕駛座上度過。你可能是巴士或計程車司機、貨運駕駛員，也可能是民航飛行員或商船船員。',
    
    detailDescription: '你的人生多半在駕駛座上度過。你可能是巴士或計程車司機、貨運駕駛員，也可能是民航飛行員或商船船員。戰爭期間，這些以運輸為主的技能被廣泛運用於輸送人員與物資。',
    
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      INS: 2,  // 洞察
      REA: 1   // 智識
    },
    
    skillBonus: {
      ATHLETICS: 1,    // 運動
      ENGINEERING: 1,  // 工程
      VEHICLES: 2      // 載具
    },
    
    focusRequirements: [
      {
        skill: 'VEHICLES',
        count: 1,
        description: '自「載具」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '載具',
      description: '選擇 1 項具「載具」關鍵詞的天賦'
    },
    
    truthOptions: [
      '執著的車迷',
      '速度狂',
      '空中特技手'
    ],
    
    equipment: [
      '取得一名具以下專精之一的聯絡人：汽車、重型載具、飛機或船艇'
    ]
  },
  {
    key: 'engineer',
    chineseName: '工程師',
    englishName: 'Engineer',
    icon: '⚙️',
    
    description: '你擅長處理各類機械，不論是修復損壞設備以維生，還是設計新型裝備與尖端科技。',
    
    detailDescription: '你擅長處理各類機械，不論是修復損壞設備以維生，還是設計新型裝備與尖端科技。戰時，許多頂尖人才投入製造戰爭機具；也有些人留在後方，維持國內運作。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2   // 智識
    },
    
    skillBonus: {
      ACADEMIA: 1,     // 學識
      ENGINEERING: 2,  // 工程
      OBSERVATION: 1   // 觀察
    },
    
    focusRequirements: [
      {
        skill: 'ENGINEERING',
        count: 1,
        description: '自「工程」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '工程',
      description: '選擇 1 項具「工程」關鍵詞的天賦'
    },
    
    truthOptions: [
      '勤奮機修師',
      '實驗天才',
      '書呆技師'
    ],
    
    equipment: [
      '取得下列之一：機械工具組、電工工具組，或一名具電子學或機械專精的聯絡人'
    ]
  },
  {
    key: 'entertainer',
    chineseName: '藝人／表演者',
    englishName: 'Entertainer',
    icon: '🎭',
    
    description: '你是演員、喜劇家、音樂家，或綜藝表演者，以娛樂他人為生。',
    
    detailDescription: '你是演員、喜劇家、音樂家，或綜藝表演者，以娛樂他人為生。在戰爭的恐怖與艱困之中，娛樂成為維繫士氣的重要方式，同時也是政府宣傳的媒介，許多表演者受召參與提升國內外士氣的活動。人們透過廣播與新聞短片暫時逃離煩憂，音樂與舞蹈在同盟國間蔚為風潮。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      COO: 1,  // 協調
      INS: 1,  // 洞察
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ATHLETICS: 1,    // 運動
      OBSERVATION: 1,  // 觀察
      PERSUASION: 2    // 說服
    },
    
    focusRequirements: [
      {
        skill: 'PERSUASION',
        count: 1,
        description: '自「說服」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '說服',
      description: '選擇 1 項具「說服」關鍵詞的天賦'
    },
    
    truthOptions: [
      '舞台與銀幕明星',
      '一人秀奇才',
      '世代之聲'
    ],
    
    equipment: [
      '你擁有一名「說服」領域的聯絡人'
    ]
  },
  {
    key: 'journalist',
    chineseName: '記者',
    englishName: 'Journalist',
    icon: '📰',
    
    description: '你報導新聞、記錄事件，揭露影響人們日常生活的真相。',
    
    detailDescription: '你報導新聞、記錄事件，揭露影響人們日常生活的真相。戰爭時期，新聞成為訊息與宣傳的武器。報紙、廣播與新聞短片帶來前所未有的深度報導。你可能是自由撰稿人、受雇記者，或是官方新聞機構的戰地特派員。',
    
    attributeBonus: {
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 1,     // 學識
      OBSERVATION: 2,  // 觀察
      PERSUASION: 1    // 說服
    },
    
    focusRequirements: [
      {
        skill: 'OBSERVATION',
        count: 1,
        description: '自「觀察」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '觀察',
      description: '選擇 1 項具「觀察」關鍵詞的天賦'
    },
    
    truthOptions: [
      '調查記者',
      '陰謀論狂人',
      '獲獎新聞人'
    ],
    
    equipment: [
      '攝影機或攜帶式無線電組'
    ]
  },
  {
    key: 'labourer',
    chineseName: '勞工',
    englishName: 'Labourer',
    icon: '👷‍♂️',
    
    description: '你長年從事繁重的體力勞動，但在戰爭時期，由於勞動力短缺與高需求，無技能工也能獲得不錯的報酬。',
    
    detailDescription: '你長年從事繁重的體力勞動，但在戰爭時期，由於勞動力短缺與高需求，無技能工也能獲得不錯的報酬。你可能在農場、工地、工廠或礦坑工作，也可能歷經多種職業。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      COO: 2,  // 協調
      WIL: 1   // 意志
    },
    
    skillBonus: {
      ATHLETICS: 1,    // 運動
      RESILIENCE: 2,   // 韌性
      SURVIVAL: 1      // 求生
    },
    
    focusRequirements: [
      {
        skill: 'RESILIENCE',
        count: 1,
        description: '自「韌性」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '韌性',
      description: '選擇 1 項具「韌性」關鍵詞的天賦'
    },
    
    truthOptions: [
      '勤勉農工',
      '萬事通工人',
      '資深礦工'
    ],
    
    equipment: [
      '取得一名具以下專精之一的聯絡人：建築學、機械學、動物操控、採集、狩獵或定向'
    ]
  },
  {
    key: 'military_officer',
    chineseName: '軍官',
    englishName: 'Military Officer',
    icon: '👨‍💼',
    
    description: '你是軍中領導者，經過訓練並被授權指揮部屬。',
    
    detailDescription: '你是軍中領導者，經過訓練並被授權指揮部屬。你可能出身富裕之家、軍人世家，或殖民部隊，曾受訓於軍校，並保持專業的距離與紀律。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      INS: 1,  // 洞察
      REA: 2,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      FIGHTING: 1,     // 戰鬥
      PERSUASION: 1,   // 說服
      TACTICS: 2       // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'TACTICS',
        count: 1,
        description: '自「戰術」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '戰術',
      description: '選擇 1 項具「戰術」關鍵詞的天賦'
    },
    
    truthOptions: [
      '精於算計的戰略家',
      '鼓舞人心的領袖',
      '前線指揮官'
    ],
    
    equipment: [
      '每場冒險中，你可將對 M 部門或馬傑斯特局提出之特殊軍需申請的難度降低 1'
    ]
  },
  {
    key: 'navy',
    chineseName: '海軍',
    englishName: 'Navy',
    icon: '⚓',
    
    description: '你是水手，航行於世界各地的海洋，隸屬於戰艦、航空母艦或潛艇船員。',
    
    detailDescription: '你是水手，航行於世界各地的海洋，隸屬於戰艦、航空母艦或潛艇船員。海軍職務多為技術性工作，需小組合作，常在狹窄空間中與重型機具共事。',
    
    attributeBonus: {
      AGI: 2,  // 敏捷
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      REA: 1   // 智識
    },
    
    skillBonus: {
      ENGINEERING: 1,  // 工程
      TACTICS: 1,      // 戰術
      VEHICLES: 2      // 載具
    },
    
    focusRequirements: [
      {
        skill: 'VEHICLES',
        count: 1,
        description: '自「載具」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '載具',
      description: '選擇 1 項具「載具」關鍵詞的天賦'
    },
    
    truthOptions: [
      '老水手',
      '熱血船員',
      '資深潛艇兵'
    ],
    
    equipment: [
      '機械工具組或工程師工具組'
    ]
  },
  {
    key: 'physician',
    chineseName: '醫師',
    englishName: 'Physician',
    icon: '👩‍⚕️',
    
    description: '你遵守古老的誓言「首先，不可傷害」，致力於治療病患與傷者。',
    
    detailDescription: '你遵守古老的誓言「首先，不可傷害」，致力於治療病患與傷者。你可能是受過高等訓練的醫生，也可能是護士、精神科醫師或藥劑師。軍醫駐紮於基地與戰地醫院，或前線附近的醫療船。平民醫師則照護那些重傷或創傷後歸鄉的士兵。',
    
    attributeBonus: {
      COO: 2,  // 協調
      INS: 1,  // 洞察
      REA: 2,  // 智識
      WIL: 1   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 1,    // 學識
      MEDICINE: 2,    // 醫學
      RESILIENCE: 1   // 韌性
    },
    
    focusRequirements: [
      {
        skill: 'MEDICINE',
        count: 1,
        description: '自「醫學」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '醫學',
      description: '選擇 1 項具「醫學」關鍵詞的天賦'
    },
    
    truthOptions: [
      '體貼護士',
      '深入探究的心理醫師',
      '堅毅的前線軍醫'
    ],
    
    equipment: [
      '急救包或一名「醫學」領域的聯絡人'
    ]
  },
  {
    key: 'police',
    chineseName: '警察',
    englishName: 'Police',
    icon: '👮‍♂️',
    
    description: '你曾經或仍是警察部門的一員，可能服務於地方警局，也可能隸屬於國家級機構。',
    
    detailDescription: '你曾經或仍是警察部門的一員，可能服務於地方警局，也可能隸屬於國家級機構，如英國的軍情五處（MI5）或美國的聯邦調查局（FBI）。你可能是巡邏員、偵探，或特別調查探員。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 1,  // 體魄
      COO: 2,  // 協調
      INS: 2   // 洞察
    },
    
    skillBonus: {
      FIGHTING: 1,     // 戰鬥
      OBSERVATION: 2,  // 觀察
      PERSUASION: 1    // 說服
    },
    
    focusRequirements: [
      {
        skill: 'OBSERVATION',
        count: 1,
        description: '自「觀察」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '觀察',
      description: '選擇 1 項具「觀察」關鍵詞的天賦'
    },
    
    truthOptions: [
      '忙碌的巡警',
      '具威嚴的憲兵',
      '老派硬漢偵探'
    ],
    
    equipment: [
      '選擇一件限制值 2 或以下的近戰武器，或一把手槍'
    ]
  },
  {
    key: 'politician',
    chineseName: '政治人物',
    englishName: 'Politician',
    icon: '🏛️',
    
    description: '你擔任民選公職，或為政要工作。你人脈廣、受過良好教育，擅長辯論與領導。',
    
    detailDescription: '你擔任民選公職，或為政要工作。你人脈廣、受過良好教育，擅長辯論與領導。此背景可涵蓋各級政治職位，美國尤多公職與選舉代表。這也包括文官與官僚，雖非民選，卻與政府高層密切合作。',
    
    attributeBonus: {
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 1,     // 學識
      PERSUASION: 2,   // 說服
      TACTICS: 1       // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'PERSUASION',
        count: 1,
        description: '自「說服」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '說服',
      description: '選擇 1 項具「說服」關鍵詞的天賦'
    },
    
    truthOptions: [
      '魅力四射的公眾人物',
      '狡詐的內閣大臣',
      '勞心勞力的公務員'
    ],
    
    equipment: [
      '每場冒險開始時，你為小隊額外獲得 2 點軍需點，可用於裝備申請'
    ]
  },
  {
    key: 'resistance',
    chineseName: '抵抗組織成員',
    englishName: 'Resistance',
    icon: '✊',
    
    description: '你來自被納粹佔領的國家，在第三帝國的壓迫下奮起反抗。',
    
    detailDescription: '你來自被納粹佔領的國家，在第三帝國的壓迫下奮起反抗。在英美情報機構的支援下，你進行破壞與間諜活動。許多抵抗戰士是受訓於海外後返回家鄉的難民，隨時面臨被捕與處決的危險。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      COO: 1,  // 協調
      REA: 2,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      PERSUASION: 1,  // 說服
      STEALTH: 2,     // 潛匿
      TACTICS: 1      // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'STEALTH',
        count: 1,
        description: '自「潛匿」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '潛匿',
      description: '選擇 1 項具「潛匿」關鍵詞的天賦'
    },
    
    truthOptions: [
      '自信的破壞者',
      '流亡的同盟情報員',
      '英勇的小組領袖'
    ],
    
    equipment: [
      '取得下列之一：祕密通訊設備、破壞者工具組、一件限制值 2 或以下的武器，或一名「潛匿」領域的聯絡人'
    ]
  },
  {
    key: 'spiritual_leader',
    chineseName: '靈性領袖',
    englishName: 'Spiritual Leader',
    icon: '🔯',
    
    description: '你可能是牧師、薩滿、祕學實踐者，或探索未知領域的研究者。',
    
    detailDescription: '你可能是牧師、薩滿、祕學實踐者，或探索未知領域的研究者，出身於同盟國或遙遠的異地。你窺探超越物質界的領域，尋求啟迪、力量或靈性報償，並常引導他人踏上同樣的道路。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 2,     // 學識
      PERSUASION: 1,   // 說服
      RESILIENCE: 1    // 韌性
    },
    
    focusRequirements: [
      {
        skill: 'ACADEMIA',
        count: 1,
        description: '自「學識」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '學識',
      description: '選擇 1 項具「學識」關鍵詞的天賦'
    },
    
    truthOptions: [
      '充滿魅惑的教主',
      '虔誠的聖職者',
      '洞悉冥界的靈媒'
    ],
    
    equipment: [
      '取得符合身分的服飾與標誌，以及一名「神秘學」領域的聯絡人'
    ]
  },
  {
    key: 'interrogator',
    chineseName: '審訊員',
    englishName: 'Interrogator',
    icon: '🔍',
    
    description: '你擅長從謊言、半真半假的說辭與模糊的敘述中抽絲剝繭。',
    
    detailDescription: '你擅長從謊言、半真半假的說辭與模糊的敘述中抽絲剝繭。或許你曾受過政府組織的專業訓練，也或許只是天生擁有洞悉人心的直覺。你所採用的方法多種多樣——從魅力與威嚇，到脅迫甚至暴力。最重要的是：你能挖掘出組織所需的情報。',
    
    attributeBonus: {
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 2,  // 智識
      WIL: 1   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 1,     // 學識
      OBSERVATION: 1,  // 觀察
      PERSUASION: 2    // 說服
    },
    
    focusRequirements: [
      {
        skill: 'PERSUASION',
        count: 1,
        description: '自「說服」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '說服',
      description: '選擇 1 項具「說服」關鍵詞的天賦'
    },
    
    truthOptions: [
      '富有磁性的個人魅力',
      '人性的觀察者',
      '令人畏懼的審問者'
    ],
    
    equipment: [
      '一位具以下任一專精的聯絡人：密碼學、爆裂物學、歷史學、語言學、神秘學或外科手術'
    ]
  },
  {
    key: 'liberated_prisoner',
    chineseName: '被解放的囚犯',
    englishName: 'Liberated Prisoner',
    icon: '⛓️‍💥',
    
    description: '你曾被關押於監獄、駐軍、勞改營或集中營。',
    
    detailDescription: '你曾被關押於監獄、駐軍、勞改營或集中營。也許你是被抵抗軍突襲營救，也許你靠自己逃出。無論如何，如今你自由了——而該如何運用這份自由，由你決定。你可能是戰俘、政治犯、異議者、被迫勞動者，或僅僅是不幸的被選中者。無論過去的你是誰，如今你已截然不同，並能將那段經歷化為力量。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      COO: 1,  // 協調
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ATHLETICS: 1,    // 運動
      MEDICINE: 1,     // 醫學
      RESILIENCE: 2    // 韌性
    },
    
    focusRequirements: [
      {
        skill: 'RESILIENCE',
        count: 1,
        description: '自「韌性」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '韌性',
      description: '選擇 1 項具「韌性」關鍵詞的天賦'
    },
    
    truthOptions: [
      '集中營倖存者',
      '復仇為燃',
      '為第三帝國效勞的苦工'
    ],
    
    equipment: [
      '竊盜工具組或保險箱破解工具組'
    ]
  },
  {
    key: 'partisan',
    chineseName: '游擊隊員',
    englishName: 'Partisan',
    icon: '🌲',
    
    description: '你的祖國遭受入侵。或許你曾在佔領下苟且度日，但最終，你再也無法忍受。',
    
    detailDescription: '你的祖國遭受入侵。或許你曾在佔領下苟且度日，但最終，你再也無法忍受。某件事讓你徹底覺醒——宵禁、襲擊、電台的宣傳，或摯友的處決。你可能從小規模抵抗開始，逐漸轉向直接行動，也可能從拿起武器的那一刻起就未曾停手。你是數千名為奪回家園而戰的游擊戰士之一。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      COO: 1,  // 協調
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ATHLETICS: 2,  // 運動
      STEALTH: 1,    // 潛匿
      SURVIVAL: 1    // 求生
    },
    
    focusRequirements: [
      {
        skill: 'ATHLETICS',
        count: 1,
        description: '自「運動」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '運動',
      description: '選擇 1 項具「運動」關鍵詞的天賦'
    },
    
    truthOptions: [
      '家園軍士兵',
      '新手小隊長',
      '祖國解放者'
    ],
    
    equipment: [
      '以下擇一：祕密通訊設備、破壞者工具組、限制值 2 或更低的武器、或一位具戰鬥專精的聯絡人'
    ]
  },
  {
    key: 'striker',
    chineseName: '罷工者',
    englishName: 'Striker',
    icon: '✊',
    
    description: '你曾參與反戰示威，無論是遊行、總罷工，或面對納粹戰爭機器的公民抗命。',
    
    detailDescription: '你曾參與反戰示威，無論是遊行、總罷工，或面對納粹戰爭機器的公民抗命。你的堅定意志換來殘酷鎮壓，但你深知：第三帝國不會被孤軍奮戰擊敗，而是要靠工人、知識份子、戰士與領袖的團結力量才能推翻。',
    
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 2,  // 體魄
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      ACADEMIA: 1,     // 學識
      FIGHTING: 1,     // 戰鬥
      PERSUASION: 2    // 說服
    },
    
    focusRequirements: [
      {
        skill: 'PERSUASION',
        count: 1,
        description: '自「說服」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '說服',
      description: '選擇 1 項具「說服」關鍵詞的天賦'
    },
    
    truthOptions: [
      '鼓動型演說家',
      '中產階級工人',
      '學生組織者'
    ],
    
    equipment: [
      '一位具以下任一專精的聯絡人：學識、徒手戰鬥、歷史學、急救、修辭或戰術'
    ]
  },
  {
    key: 'turncoat',
    chineseName: '變節者',
    englishName: 'Turncoat',
    icon: '🔄',
    
    description: '你曾是第三帝國的一員，但那已成過去。',
    
    detailDescription: '你曾是第三帝國的一員，但那已成過去。無論你原隸屬於國防軍、納粹黨、蓋世太保，甚至黑日會或夜狼部隊，你如今已有理由背棄那份意識形態，轉而為同盟國與被佔領國家而戰。雖然他人對你仍存疑慮，但你的見識與內部情報是對抗昔日同僚的寶貴武器。',
    
    attributeBonus: {
      COO: 1,  // 協調
      INS: 2,  // 洞察
      REA: 1,  // 智識
      WIL: 2   // 意志
    },
    
    skillBonus: {
      OBSERVATION: 1,  // 觀察
      PERSUASION: 1,   // 說服
      TACTICS: 2       // 戰術
    },
    
    focusRequirements: [
      {
        skill: 'TACTICS',
        count: 1,
        description: '自「戰術」中選擇 1 項專精'
      },
      {
        skill: 'ANY',
        count: 1,
        description: '並自其他任一技能中再選 1 項'
      }
    ],
    
    talentRequirement: {
      keyword: '戰術',
      description: '選擇 1 項具「戰術」關鍵詞的天賦'
    },
    
    truthOptions: [
      '前黨衛軍軍官',
      '叛逃的國防軍士兵',
      '夜狼部隊叛逃者'
    ],
    
    equipment: [
      '身份證件與一把德製手槍'
    ]
  }
]

// 導出預設背景
export default backgrounds