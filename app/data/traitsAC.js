// 角色特徵資料
// 根據 Achtung! Cthulhu 2d20 規則書製作

export const traitsAC = [
  {
    key: 'bookworm',
    chineseName: '書蟲',
    englishName: 'Bookworm',
    icon: '📚',
    description: '你熱愛學習，對知識懷有深厚的熱情。你是那個總能說出冷門事實與奇特數據的人，閒暇時光寧願埋首書堆，也不願花在其他事上。',
    attributeBonus: {
      INS: 1,  // 洞察
      REA: 1   // 智識
    },
    flexibleAttributePoints: 1, // 另 +1 任一屬性
    skillBonus: {
      ACADEMIA: 1  // 學識
    },
    flexibleSkillPoints: 1, // 另 +1 於三項其他技能（不可重複）
    flexibleSkillCount: 3,
    talentRequirement: {
      keyword: '學識',
      description: '從具「學識」關鍵詞的天賦中擇一'
    },
    truthOptions: ['書蟲', '自創與對文字熱愛相關的真理'],
    equipment: ['與研究相關的書籍與筆記，支撐你的學術知識']
  },
  
  {
    key: 'born-behind-the-wheel',
    chineseName: '天生駕手',
    englishName: 'Born Behind the Wheel',
    icon: '🚗',
    description: '你的人生總是在駕駛座上度過，或是埋首於最愛的載具機構之中。',
    attributeBonus: {
      COO: 1,  // 協調
      REA: 1   // 智識
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ENGINEERING: 1,  // 工程
      VEHICLES: 1      // 載具
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '載具',
      description: '從具「載具」關鍵詞的天賦中擇一'
    },
    truthOptions: ['天生駕手', '自創與對載具熱愛相關的真理'],
    equipment: ['工作服、駕駛手套與護目鏡']
  },

  {
    key: 'built-like-a-brick-outhouse',
    chineseName: '銅牆鐵壁',
    englishName: 'Built Like a Brick Outhouse',
    icon: '💪',
    description: '你高大壯碩，身形雄偉遠超常人。這份體格不僅是外觀上的威勢，你的力量實際可觀，並且總能找到發揮力量的方式。',
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 1   // 協調
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ATHLETICS: 1,   // 運動
      FIGHTING: 1,    // 戰鬥
      RESILIENCE: 1   // 韌性
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 1,
    talentRequirement: {
      keyword: '運動|韌性',
      description: '從具「運動」或「韌性」關鍵詞的天賦中擇一'
    },
    truthOptions: ['銅牆鐵壁', '自創與身形或力量相關的真理'],
    equipment: ['你的衣物要不是尺寸不合，就是被大幅改造以適應你的魁梧體型']
  },

  {
    key: 'conscientious-objector',
    chineseName: '良知拒服者',
    englishName: 'Conscientious Objector',
    icon: '☮️',
    description: '你深信暴力從來不是答案，但那並不意味你懦弱。許多良知拒服者在各種崗位上表現卓越，為戰事做出實際貢獻。然而，接觸隱密之戰後，你的信念將面臨極限考驗。',
    attributeBonus: {
      REA: 1,  // 智識
      WIL: 1   // 意志
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      RESILIENCE: 1  // 韌性
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 3,
    skillRestrictions: ['FIGHTING', 'TACTICS'], // 不可選擇戰鬥或戰術
    talentRequirement: {
      keyword: '韌性',
      description: '從具「韌性」關鍵詞的天賦中擇一'
    },
    truthOptions: ['良知拒服者', '自創與道德立場相關的真理'],
    equipment: ['一組技能工具包，用於你具 2 級或以上的技能']
  },

  {
    key: 'criminal-mindset',
    chineseName: '犯罪心態',
    englishName: 'Criminal Mindset',
    icon: '🗝️',
    description: '你無視法律這類微不足道的束縛，總能找到牟利的機會——而你的行為總有無數藉口。或許你的這份獨特手腕，也能在隱密之戰中派上用場。',
    attributeBonus: {
      INS: 1,  // 洞察
      AGI: 1   // 敏捷
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      OBSERVATION: 1,  // 觀察
      STEALTH: 1       // 潛匿
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '潛匿|說服',
      description: '從具「潛匿」或「說服」關鍵詞的天賦中擇一'
    },
    truthOptions: ['犯罪心態', '自創與你的犯罪傾向相關的真理'],
    equipment: ['一件限制值 3 或以下的物品，並以非法手段取得']
  },

  {
    key: 'dilettante',
    chineseName: '博學多能者',
    englishName: 'Dilettante',
    icon: '🎭',
    description: '你是個萬事通，幾乎任何事都能試著上手並小有所成，雖然你往往很快就興趣轉移。',
    attributeBonus: {
      COO: 1,  // 協調
      INS: 1   // 洞察
    },
    flexibleAttributePoints: 1,
    skillBonus: {},
    specialSkillRule: 'all-zero-skills', // 對所有目前等級為 0 的技能獲得 +1
    talentRequirement: {
      keyword: '任意',
      description: '從任意關鍵詞的天賦中擇一'
    },
    truthOptions: ['博學多能者', '自創與廣泛實用知識相關的真理'],
    equipment: ['數件瑣碎卻可能派上用場的小物，如懷錶、螺絲起子、火柴等']
  },

  {
    key: 'dreamwalker',
    chineseName: '夢行者',
    englishName: 'Dreamwalker',
    icon: '💭',
    description: '對你而言，睡眠只是通往另一個門扉的過程。自幼你便在幻夢境中徘徊，無數奇異存在曾試圖誘惑你臣服於它們，但你始終避開了那些墜入虛空的悲劇命運。',
    attributeBonus: {
      INS: 1,  // 洞察
      WIL: 1   // 意志
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      RESILIENCE: 1,   // 韌性
      OBSERVATION: 1   // 觀察
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '觀察|異質',
      description: '從具「觀察」或「異質」關鍵詞的天賦中擇一'
    },
    truthOptions: ['夢行者', '自創與你在幻夢境旅行相關的真理'],
    equipment: ['一隻忠誠的寵物，它似乎能看見別人看不見的事物']
  },

  {
    key: 'escaped-from-europe',
    chineseName: '逃離歐洲者',
    englishName: 'Escaped from Europe',
    icon: '🚢',
    description: '你所熱愛的一切，都被德國戰爭機器與其恐怖主宰吞噬。你奮力抵抗，竭盡所能，卻終究只能為了逃離死亡或更可怕的命運而亡命天涯。',
    attributeBonus: {
      INS: 1,  // 洞察
      WIL: 1   // 意志
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ACADEMIA: 1,    // 學識
      ATHLETICS: 1,   // 運動
      PERSUASION: 1,  // 說服
      SURVIVAL: 1     // 求生
    },
    talentRequirement: {
      keyword: '說服|求生',
      description: '從具「說服」或「求生」關鍵詞的天賦中擇一'
    },
    truthOptions: ['逃離歐洲者', '自創與難民身分相關的真理'],
    equipment: ['一件破舊卻珍貴的紀念物，提醒你那遙遠的故鄉']
  },

  {
    key: 'experimental-subject',
    chineseName: '實驗體',
    englishName: 'Experimental Subject',
    icon: '🧪',
    description: '戰爭需要犧牲者，以探究科學、科技，甚至神秘力量的極限。在那些不被記錄的祕密實驗中，科學家嘗試改造士兵，使其獲得駭人的新能力。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 1   // 體魄
    },
    flexibleAttributePoints: 1,
    skillBonus: {},
    specialSkillRule: 'choose-four', // 任選四項技能，各 +1
    talentRequirement: {
      keyword: '異質',
      description: '從具「異質」關鍵詞的天賦中擇一'
    },
    truthOptions: ['實驗體', '自創與被用作人類實驗有關的真理'],
    equipment: ['奇怪的識別符號、皮膚上的印記或符號、未完成的文件，或與你試驗時期相關的異樣制服']
  },

  {
    key: 'my-war-started-early',
    chineseName: '提早開戰者',
    englishName: 'My War Started Early',
    icon: '⚔️',
    description: '無論你是在阿比西尼亞、捷克斯洛伐克、滿洲還是西班牙開戰——對你而言，戰爭早已開始。多年的征戰讓你見盡人間地獄，如今戰爭的恐怖對你而言，幾乎成了日常。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 1,  // 體魄
      COO: 1   // 協調
    },
    skillBonus: {
      FIGHTING: 1,  // 戰鬥
      MEDICINE: 1   // 醫學
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '戰鬥|醫學',
      description: '從具「戰鬥」或「醫學」關鍵詞的天賦中擇一'
    },
    truthOptions: ['提早開戰者', '自創與你早期戰場經驗相關的真理'],
    equipment: ['珍愛的信物，如家族照片、父親的懷錶，或宗教／文化護身符']
  },

  {
    key: 'nomadic',
    chineseName: '遊牧者',
    englishName: 'Nomadic',
    icon: '🗺️',
    description: '你曾有過家，但如今道路才是你的歸宿。你是個不安的靈魂，從不在同一地方停留太久。總是領先麻煩一步，你學會了享受漂泊生活所帶來的自由。',
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 1,  // 協調
      REA: 1   // 智識
    },
    skillBonus: {
      SURVIVAL: 1,  // 求生
      VEHICLES: 1   // 載具
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '求生|載具',
      description: '從具「求生」或「載具」關鍵詞的天賦中擇一'
    },
    truthOptions: ['遊牧者', '自創描述你漂泊生活的真理'],
    equipment: ['許多小物，如折刀、骰子、繩線等實用雜物，以及可用來賺取些微金錢的物品，如樂器或一副撲克牌']
  },

  {
    key: 'own-an-occult-artefact',
    chineseName: '擁有祕學遺物',
    englishName: 'Own an Occult Artefact',
    icon: '🔮',
    description: '這件物品在你的家族中代代相傳，如今輪到你負起保管之責。它也許是一件能對抗帝國的武器、一個被囚禁怪物的靈魂、或是一段被封存於奇異容器中的異界碎片。',
    attributeBonus: {
      REA: 1,  // 智識
      WIL: 1   // 意志
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      RESILIENCE: 1,  // 韌性
    },
    specialSkillChoice: ['OBSERVATION', 'PERSUASION', 'STEALTH'], // 觀察、說服或潛匿任一 +1
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '異質',
      description: '從具「異質」關鍵詞的天賦中擇一'
    },
    truthOptions: ['擁有祕學遺物', '自創與其獲得過程相關的真理'],
    equipment: ['一件祕學遺物，例如恐怖的神話體系典籍、神祇信物、黑曜石占卜鏡、或一只在你夢中低語的盒子']
  },

  {
    key: 'raised-by-a-cult',
    chineseName: '邪教養育',
    englishName: 'Raised by a Cult',
    icon: '🕯️',
    description: '你生於並長於一個隱密的祕教組織。平日裡你或許仍上教堂、唱聖詩，但當群星歸位時，你的家族便會與同道共度黑暗的儀式。',
    attributeBonus: {
      BRA: 1,  // 體魄
      INS: 1   // 洞察
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ACADEMIA: 1,     // 學識
      RESILIENCE: 1,   // 韌性
      STEALTH: 1       // 潛匿
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 1,
    talentRequirement: {
      keyword: '潛匿|韌性|異質',
      description: '從具「潛匿」、「韌性」或「異質」關鍵詞的天賦中擇一'
    },
    truthOptions: ['邪教養育', '自創描述你與教團之關係的真理'],
    equipment: ['儀式長袍、符咒、護符與其他教團遺留的私人物品']
  },

  {
    key: 'raised-in-the-colonies',
    chineseName: '殖民地長大',
    englishName: 'Raised in the Colonies',
    icon: '🏕️',
    description: '當戰火燃遍歐洲時，你遠在邊陲之地。你的家鄉幾乎未被戰爭波及，但你仍為了國王與國家挺身而出，跨越千里加入戰事。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 1,  // 體魄
      WIL: 1   // 意志
    },
    skillBonus: {
      ATHLETICS: 1,  // 運動
      SURVIVAL: 1    // 求生
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '運動|求生',
      description: '從具「運動」或「求生」關鍵詞的天賦中擇一'
    },
    truthOptions: ['殖民地長大', '自創與你遠方成長背景相關的真理'],
    equipment: ['幾件來自祖國的衣物或私人物品']
  },

  {
    key: 'read-from-an-occult-book',
    chineseName: '讀過祕學書籍',
    englishName: 'Read from an Occult Book',
    icon: '📖',
    description: '在你生命中的某個時刻，你曾閱讀一本禁忌的書籍。那本書揭示了宇宙恐怖與秘奧真理的片段。你已不記得那些文字的全部，但符文與句式仍刻在心靈深處。',
    attributeBonus: {
      INS: 1,  // 洞察
      WIL: 1   // 意志
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      OBSERVATION: 1,  // 觀察
      RESILIENCE: 1    // 韌性
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '異質',
      description: '從具「異質」關鍵詞的天賦中擇一'
    },
    truthOptions: ['讀過祕學書籍', '自創與禁書知識相關的真理'],
    equipment: ['從祕學典籍中抄錄的個人筆記與片段']
  },

  {
    key: 'scientific-visionary',
    chineseName: '科學先覺',
    englishName: 'Scientific Visionary',
    icon: '🔬',
    description: '透過研究，你完成了一項驚人的發現，這項成果可能對戰爭努力具有無可估量的價值。',
    attributeBonus: {
      INS: 1,  // 洞察
      REA: 1   // 智識
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ACADEMIA: 1,     // 學識
      ENGINEERING: 1   // 工程
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '學識|工程',
      description: '從具「學識」或「工程」關鍵詞的天賦中擇一'
    },
    truthOptions: ['科學先覺', '自創與你的科學才能相關的真理'],
    equipment: ['一名聯絡人，專精於以下任一領域：密碼學、科學、電子學、爆裂物學或醫學']
  },

  {
    key: 'street-kid',
    chineseName: '街頭少年',
    englishName: 'Street Kid',
    icon: '🏙️',
    description: '你的生活一直艱困，為了生存你必須拼盡全力。即使身無長物，你總能設法混口飯吃。你聰明、機警，靠著街頭智慧與反應存活下來。',
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 1,  // 協調
      REA: 1   // 智識
    },
    skillBonus: {
      RESILIENCE: 1,  // 韌性
      SURVIVAL: 1,    // 求生
      STEALTH: 1      // 潛匿
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 1,
    skillRestrictions: ['ACADEMIA'], // 不可選擇學識
    talentRequirement: {
      keyword: '求生',
      description: '從具「求生」關鍵詞的天賦中擇一'
    },
    truthOptions: ['街頭少年', '自創描述你早年生活的真理'],
    equipment: ['一個幸運符或象徵好運的護身物']
  },

  {
    key: 'the-lucky-one',
    chineseName: '幸運之人',
    englishName: 'The Lucky One',
    icon: '🍀',
    description: '當撤離命令下達時，所有人都照辦。然後炸彈落下，而你是唯一倖存者。你無法解釋為何自己能活下來——但如今別人低聲稱你為「喬納」，暗示你是不祥之人。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      BRA: 1,  // 體魄
      WIL: 1   // 意志
    },
    skillBonus: {
      ATHLETICS: 1,  // 運動
      TACTICS: 1     // 戰術
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '命運',
      description: '從具「命運」關鍵詞的天賦中擇一'
    },
    truthOptions: ['幸運之人', '自創與你死裡逃生經驗相關的真理'],
    equipment: ['一件陣亡戰友的紀念物']
  },

  {
    key: 'veteran-of-the-great-war',
    chineseName: '大戰老兵',
    englishName: 'Veteran of the Great War',
    icon: '🎖️',
    description: '你曾參與第一次世界大戰，記得當年人們稱那是「終結所有戰爭的戰爭」。如今，另一場全球衝突爆發，你的舊技能——與那支舊制左輪——再次派上用場。',
    attributeBonus: {
      BRA: 1,  // 體魄
      COO: 1,  // 協調
      WIL: 1   // 意志
    },
    skillBonus: {
      FIGHTING: 1,  // 戰鬥
      SURVIVAL: 1   // 求生
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '戰鬥|求生',
      description: '從具「戰鬥」或「求生」關鍵詞的天賦中擇一'
    },
    truthOptions: ['大戰老兵', '自創與你在第一次世界大戰的經歷相關的真理'],
    equipment: ['一把舊式服役手槍（恩菲爾德服役左輪手槍）']
  },

  {
    key: 'wanted-by-the-authorities',
    chineseName: '通緝犯',
    englishName: 'Wanted by the Authorities',
    icon: '🚨',
    description: '你犯下重大罪行並在逃，但至今仍未被警方逮捕。途中你設法展現價值，如今成為一個研究祕術的秘密組織成員。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      INS: 1   // 洞察
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      PERSUASION: 1,  // 說服
      STEALTH: 1      // 潛匿
    },
    flexibleSkillPoints: 1,
    flexibleSkillCount: 2,
    talentRequirement: {
      keyword: '說服|潛匿',
      description: '從具「說服」或「潛匿」關鍵詞的天賦中擇一'
    },
    truthOptions: ['通緝犯', '自創描述你黑暗過往的真理'],
    equipment: ['與罪行相關的限制值 2 或以下物品，或一組假身分證件']
  },

  {
    key: 'young-at-heart',
    chineseName: '童心未泯',
    englishName: 'Young at Heart',
    icon: '🌟',
    description: '你或許年輕，或只是天真無畏，但當情勢緊迫時，你總能迅速學會所需的技能，並憑藉青春的活力迎戰挑戰。',
    attributeBonus: {
      AGI: 1,  // 敏捷
      REA: 1   // 智識
    },
    flexibleAttributePoints: 1,
    skillBonus: {
      ATHLETICS: 1,  // 運動
      STEALTH: 1     // 潛匿
    },
    specialSkillRule: 'choose-low-level', // 另 +2 於任一目前等級為 0 或 1 的技能
    specialSkillPoints: 2,
    talentRequirement: {
      keyword: '任意',
      description: '從任意關鍵詞的天賦中擇一'
    },
    truthOptions: ['童心未泯', '自創描述你旺盛膽識與活力的真理'],
    equipment: ['1 額外資源，用於任何你持有的技能工具組']
  }
]