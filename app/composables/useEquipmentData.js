// 裝備數據模組 - Cohors Cthulhu RPG 裝備系統
// 包含武器、盔甲、技能工具和其他裝備的完整數據庫

export const useEquipmentData = () => {
  // 武器數據庫
  const weaponsDatabase = [
    // 近戰武器
  {
    name: '斧',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲兇猛',
    size: '次要',
    qualities: ['特殊-斧']
  },
  {
    name: '棍',
    focus: '近戰武器',
    reach: '2',
    damage: '2🎲',
    size: '次要',
    qualities: []
  },
  {
    name: '棍杖',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲震懾',
    size: '主要',
    qualities: []
  },
  {
    name: '匕首',
    focus: '近戰武器',
    reach: '1',
    damage: '2🎲穿透1',
    size: '次要',
    qualities: ['隱藏', '精巧']
  },
  {
    name: '多用途軍斧',
    focus: '近戰武器',
    reach: '1',
    damage: '3🎲穿透1',
    size: '次要',
    qualities: []
  },
  {
    name: '標槍',
    focus: '近戰武器',
    reach: '2',
    damage: '3🎲穿透1',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '長矛',
    focus: '近戰武器',
    reach: '3',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: []
  },
  {
    name: '杖',
    focus: '近戰武器',
    reach: '3',
    damage: '2🎲',
    size: '主要',
    qualities: ['特殊-杖']
  },
  {
    name: '劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲',
    size: '主要',
    qualities: ['格擋']
  },
  {
    name: '鐮刀劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲兇猛',
    size: '主要',
    qualities: []
  },
  {
    name: '羅馬短劍',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['格擋']
  },
  {
    name: '長劍',
    focus: '近戰武器',
    reach: '2',
    damage: '5🎲',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '騎士長劍',
    focus: '近戰武器',
    reach: '2',
    damage: '5🎲穿透1',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '徒手攻擊',
    focus: '徒手',
    reach: '0',
    damage: '2🎲',
    size: '—',
    qualities: ['精巧']
  },
  {
    name: '戰斧',
    focus: '近戰武器',
    reach: '2',
    damage: '4🎲兇猛',
    size: '主要',
    qualities: ['雙手']
  },
  {
    name: '小盾',
    focus: '近戰武器',
    reach: '1',
    damage: '2🎲震懾',
    size: '次要',
    qualities: ['盾牌2']
  },
  {
    name: '大盾',
    focus: '近戰武器',
    reach: '1',
    damage: '3🎲震懾',
    size: '主要',
    qualities: ['盾牌3']
  },
  // 遠程武器
  {
    name: '弩弓',
    focus: '弓術',
    reach: '中距',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['精準', '裝填']
  },
  {
    name: '弓',
    focus: '弓術',
    reach: '中距',
    damage: '3🎲穿透1',
    size: '主要',
    qualities: ['精巧']
  },
  {
    name: '複合弓',
    focus: '弓術',
    reach: '遠距',
    damage: '4🎲穿透1',
    size: '主要',
    qualities: ['精巧']
  },
  {
    name: '標槍',
    focus: '投擲武器',
    reach: '中距',
    damage: '3🎲',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '羅馬重標槍',
    focus: '投擲武器',
    reach: '近距',
    damage: '4🎲穿透1',
    size: '次要',
    qualities: ['特殊-標槍']
  },
  {
    name: '鉛鏢',
    focus: '投擲武器',
    reach: '近距',
    damage: '2🎲穿透1',
    size: '次要',
    qualities: []
  },
  {
    name: '投石索',
    focus: '投擲武器',
    reach: '遠距',
    damage: '3🎲震懾',
    size: '次要',
    qualities: ['不精準', '精巧', '特殊-投石索']
  }
  ];

  // 盔甲數據庫
  const armorsDatabase = [
  {
    name: '鎖子甲/分環鎧',
    resistance: '+2',
    size: '主要',
    qualities: ['不適']
  },
  {
    name: '皮甲',
    resistance: '+1',
    size: '主要',
    qualities: []
  },
  {
    name: '分片鎧',
    resistance: '+3',
    size: '主要',
    qualities: ['不適']
  },
  {
    name: '鱗甲',
    resistance: '+3',
    size: '主要',
    qualities: ['沉重', '不適']
  }
  ];

  // 技能工具數據庫
  const skillToolsDatabase = [
  {
    name: '製作工具',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含製造各類物品所需的工具，如：木工鋸、槌與鑿；金工鉗、錘與銼；或石雕用重鑿與鐵桿。每組皆附量具與刻記工具。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '馴獸師工具組',
    restrictionLevel: 1,
    requirement: '馴獸專精',
    size: '次要',
    description: '包含馬銜、韁繩、訓練餌、鞭與各類動物訓練用具。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '醫師工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '由各種外科器具組成，用於戰場醫療，包括復位用骨桿、手鑽、取箭鉗、手術刀與藥膏。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '羊皮紙卷軸',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '羅馬時期的書籍多以紙草或羊皮卷成冊，內容廣泛，從帝國史到哲學論述皆有。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '儀式工具',
    restrictionLevel: 2,
    requirement: '宗教專精',
    size: '次要',
    description: '基本儀式工具包含：儀式短劍、香、油燈、羊皮紙與墨水。滿足施行者進行多種儀式的需求。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '無賴工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含開鎖器、鑿、短撬棍與小錘，並附煤粉與潤滑油，用於潛入或破門而入。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '士兵工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '包含備用衣物、乾糧、小鏟與炊具，另附搭營與炊事用品。',
    effect: '提供 3 點動力用於購買 d20'
  },
  {
    name: '求生工具組',
    restrictionLevel: 1,
    requirement: null,
    size: '次要',
    description: '內含生火材料（火絨盒、打火石與鋼片）、毛毯或獸皮、野外乾糧，並附繩索、岩釘與帆布，可搭建單人帳篷。',
    effect: '提供 3 點動力用於購買 d20'
  }
  ];

  // 其他裝備數據庫
  const miscellaneousDatabase = [
  {
    name: '護符',
    restrictionLevel: 0,
    size: '小物品',
    effect: '防護超自然攻擊',
    shortDescription: '防止詛咒、惡靈、邪眼攻擊',
    description: '人們會購買或製作護符與護身符，以防止詛咒、惡靈、「邪眼」與其他邪惡之物。孩童通常會配戴名為布拉或月形護符的護身飾物直到成年，因其被視為特別脆弱。',
    usage: '角色在被超自然力量、法術、邪眼或神話生物之心智攻擊鎖定時，可消耗 1 點命運點啟動護符，以防止該力量或攻擊的負面效果。之後擲 1 顆挑戰骰🎲。若結果為效果😈，護符仍然有效並可再次使用；若否，則護符失效，必須更換。'
  },
  {
    name: '手持油燈',
    restrictionLevel: 1,
    size: '小物品',
    effect: '產生光源',
    shortDescription: '近距範圍微弱光源，燃燒一小時',
    description: '陶製或金屬製手燈，以橄欖油或其他常見燃料為燃料，在羅馬時代十分普遍。',
    usage: '手燈可在近距範圍內產生微弱光源，燃燒一小時後需重新添油。'
  },
  {
    name: '連帽披風',
    restrictionLevel: 0,
    size: '小物品',
    effect: '保暖防護與隱匿',
    shortDescription: '保暖、防風雨、遮掩身份',
    description: '雖在溫暖的羅馬本地並不常見，但來自日耳曼北方的厚重披風「拉刻爾納」已在邊境地區流行。此披風能保暖、防風雨，且深兜帽可用於遮掩身份。',
    usage: '提供保暖與防護，兜帽可用於隱匿身份。'
  },
  {
    name: '鎖箱',
    restrictionLevel: 3,
    size: '次要',
    effect: '安全儲存物品',
    shortDescription: '保管財物與秘密的精製裝備',
    description: '堅固的木箱配以青銅鎖，是用來保管財物與秘密的昂貴精製裝備。',
    usage: '可用鑰匙開啟，或進行一次「協調＋潛匿」檢定（難度 3）開鎖；若角色具「開鎖」專精，可套用之。'
  },
  {
    name: '銅鏡',
    restrictionLevel: 1,
    size: '小物品',
    effect: '反射與觀察',
    shortDescription: '拋光青銅或鍍銀鏡',
    description: '鏡子材質多樣，最常見為拋光青銅鏡，而富裕階層則使用鍍銀鏡。',
    usage: '用於個人梳理或觀察周圍環境。'
  },
  {
    name: '銅筆與蠟板',
    restrictionLevel: 1,
    size: '小物品',
    effect: '書寫與記錄',
    shortDescription: '可重複使用的書寫工具',
    description: '書寫者常使用一端尖銳、一端鏟平的銅筆，於木或金屬框中盛裝的蠟板上刻寫暫時性筆記。',
    usage: '欲清除內容時，可用筆尾鏟端抹平痕跡。'
  },
  {
    name: '計時蠟燭',
    restrictionLevel: 1,
    size: '小物品',
    effect: '計時功能',
    shortDescription: '側面刻有時間刻度的蠟燭',
    description: '以蜂蠟或牛脂製成的蠟燭，側面刻或塗有時間刻度。理論上每燃燒一段至標記即過一小時，但受溫度與濕度影響，實際時間常有偏差。',
    usage: '用於粗略計時，但精度受環境因素影響。'
  },
  {
    name: '鐵蒺藜',
    restrictionLevel: 1,
    size: '次要',
    effect: '區域防禦武器',
    shortDescription: '造成物理危害的防禦器具',
    description: '鐵製蒺藜為羅馬軍與敵軍皆常使用的防禦器具。四刺呈金字塔狀排列，確保落地時必有一尖端朝上。',
    usage: '在一個區域中構成物理危害，對踏入者造成 3🎲傷害（詳見第 33 頁〈物理危害〉）。'
  },
  
  // 藥劑與藥理
  {
    name: '鴉片',
    restrictionLevel: 2,
    size: '小物品',
    effect: '額外消除1點壓力',
    shortDescription: '強效止痛與助眠藥物',
    description: '從罌粟提煉的強效藥物。輕劑量可泡製為稱作「克里特酒」的飲品，用於助眠；其葉則可製成「梅科尼翁」，用以減緩傷痛。',
    usage: '執行調息（主動作）消除壓力時可服用，額外消除1點壓力。若擲出效果😈，本場景中所有技能檢定的糾葛範圍+1。'
  },
  {
    name: '毒藥',
    restrictionLevel: 2,
    size: '小物品',
    effect: '致命傷害或武器強化',
    shortDescription: '致命的暗殺工具',
    description: '羅馬政壇上常見的暗殺手段。最常見的種類源自植物，如天仙子、曼陀羅與毒芹，某些動物毒液亦同樣致命。雖被視為懦夫之器，毒藥卻能迅速除去棘手敵人。',
    usage: '服用：立即承受4🎲物理傷害，並附帶「持續3」與「穿透3」效果。塗抹武器：本場景內該武器攻擊獲得+2傷害並具「持續3」效果。'
  },
  {
    name: '幻靈劑',
    restrictionLevel: 3,
    size: '小物品',
    effect: '施法強化或心靈保護',
    shortDescription: '改變心智狀態的致幻物質',
    description: '「幻靈劑」泛指能改變心智狀態的物質——從蜜蜂採集劇毒花蜜釀成的致幻蜂蜜、以藍蓮花泡製的茶，到被稱為「夢魚」的鯛魚肉。此類物質常用於魔法儀式與宗教祭典，可引發幻覺與靈視。',
    usage: '造成3🎲心智傷害，並附帶「持續2」與「穿透3」效果。選擇效果：1）施法者所施法術難度降低1（持續1小時）；2）角色在1小時內免受心靈創傷負面影響。無論選擇哪項，角色在此期間獲得個人真理：「目睹異象，真假難辨」。'
  },
  
  // 個人物品
  {
    name: '幸運符',
    restrictionLevel: 0,
    size: '小物品',
    effect: '每場冒險一次命運點',
    shortDescription: '吉兆紀念物或遺物',
    description: '部分背景與特質會賦予角色象徵過往的紀念物、事件遺物或其他吉兆之物。無論其具體外觀如何，效果皆相同。',
    usage: '每場冒險中一次，你可如同使用一點命運點般啟動幸運符。角色每次冒險僅能啟用一個幸運符。若背景與特質各提供一個幸運符，雖可同時保留兩件物品，但每場冒險僅能啟用其中之一。此外，角色可額外獲得一件限制等級為1或以下的裝備。'
  }
  ];

  // 武器特殊能力數據庫
  const weaponSpecialAbilities = {
  '精準': {
    name: '精準',
    description: '若角色在攻擊前採取瞄準（副動作），該攻擊獲得「強烈」效果。'
  },
  '剋敵': {
    name: '剋敵',
    description: '此武器對神話生物特別有效，無視其「無敵」特殊規則。此外，具「堅韌 X」特質的生物無法以消耗威脅來忽略此武器造成的傷勢。'
  },
  '削弱': {
    name: '削弱',
    description: '治療由此武器造成的身體傷勢之技能檢定難度 +1。'
  },
  '局勢升高': {
    name: '局勢升高',
    description: '持此武器進入場景時，為遊戲主持人增加 1 威脅。'
  },
  '沉重': {
    name: '沉重',
    description: '若持用者體魄低於 10，使用此武器攻擊時難度 +1。'
  },
  '隱藏': {
    name: '隱藏',
    description: '此武器在隱藏時，旁人僅以目視無法察覺。搜尋此武器之技能檢定難度 +1。'
  },
  '饑渴': {
    name: '饑渴',
    description: '每當此武器造成至少一處傷勢時，使用者可選擇以下獎勵之一：移除 5 點壓力、治癒一處傷勢，或獲得 +1 威能直至場景結束（此加成每場景僅能獲得一次）。'
  },
  '不精準': {
    name: '不精準',
    description: '使用此武器時無法從瞄準（副動作）中獲益。'
  },
  '間接': {
    name: '間接',
    description: '此武器設計為拋射用途，可越過長距離投射目標。攻擊難度 +1，但不需視線。'
  },
  '格擋': {
    name: '格擋',
    description: '當持用者遭近戰攻擊並進行對抗檢定時，可重擲一顆 d20。若持有多件格擋武器，此效果不疊加。'
  },
  '可靠': {
    name: '可靠',
    description: '在行動場景中使用此武器時，角色可忽略第一次擲出的糾葛結果。'
  },
  '裝填': {
    name: '裝填',
    description: '攻擊後需重新裝填，耗費一個主動作。'
  },
  '盾牌': {
    name: '盾牌 X',
    description: '當角色遭受近戰攻擊時，其距離視為 X；若角色處於防備狀態，則獲得 +X 掩蔽抗性。'
  },
  '特殊': {
    name: '特殊',
    description: '此武器具有特殊性質或能力，於描述中另行說明。'
  },
  '特殊-斧': {
    name: '特殊（斧）',
    description: '單手斧亦可作為「投擲武器」使用，射程為近距，造成與近戰相同的傷害。'
  },
  '特殊-杖': {
    name: '特殊（杖）',
    description: '若以雙手持杖，將距離降為 2，基礎傷害提升為 3。'
  },
  '特殊-標槍': {
    name: '特殊（標槍）',
    description: '雖非為近戰而造，若角色擁有「近戰武器」專精，則可以標槍進行近戰攻擊。此時距離為 2，造成的傷害與遠程相同。'
  },
  '特殊-投石索': {
    name: '特殊（投石索）',
    description: '此時代的標準彈藥為橢圓形鉛彈。然而此武器最大優勢在於「可就地取材」。若角色因「彈盡」真理失去彈藥，可於地面拾石代替。使用石塊時，武器傷害值減 1。'
  },
  '精巧': {
    name: '精巧',
    description: '攻擊聲響難以察覺，需以「洞察＋觀察」檢定（難度 2）察覺。遊戲主持人可依距離或環境噪音調整難度。'
  },
  '雙手': {
    name: '雙手',
    description: '此武器以雙手使用為佳。若單手使用，攻擊難度 +1。'
  },
  '不可靠': {
    name: '不可靠',
    description: '使用此武器攻擊時，檢定的糾葛範圍+1。'
  }
  };

  return {
    weaponsDatabase,
    armorsDatabase,
    skillToolsDatabase,
    miscellaneousDatabase,
    weaponSpecialAbilities
  };
};