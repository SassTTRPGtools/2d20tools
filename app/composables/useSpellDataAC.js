// 法術數據模組 - Cohors Cthulhu RPG 法術系統

export const useSpellData = () => {
  // 法術數據庫
  const spellsDatabase = {
  '凱爾特儀式': [
    {
      englishName: "Balm of Belenus",
      chineseName: "貝勒努斯之膏",
      skill: "醫學",
      difficulty: 2,
      cost: "3🎲消耗",
      duration: "瞬間",
      category: "儀式",
      effect: "施法者可治癒觸及範圍內的一名生物或人類，並選擇治療『物理』或『精神』傷害。每完成一個步驟，可移除一處相應類型的傷勢。亦可改為消除所有疲勞。若同時治療兩處傷勢與一層疲勞，則需三個步驟。",
      flawedSpell: "儀式仍能發揮療效，但結果錯誤。所有被治癒的傷勢將立刻化為永久疤痕，且無法抵抗。僅能恢復一半的疲勞（向下取整），並且施法者因共鳴反噬，會各自承受相同類型的傷勢。",
      momentumOptions: [],
      requirements: "儀式工具",
      maxStress: 10,
      steps: "1+（由遊戲主持人裁定）",
      description: "此治癒儀式呼喚光明之神貝勒努斯的恩典，能修復最可怖的傷口，撫平被戰爭摧殘的心靈，或癒合因祕學恐懼所造成的精神創傷。"
    }
    ],
    '符文儀式': [
    {
      englishName: "Baldur's Shield",
      chineseName: "巴德爾之盾",
      skill: "生存",
      difficulty: 2,
      cost: "3🎲消耗",
      duration: "約半小時",
      category: "儀式",
      effect: "施法者必須決定欲保護的人數；儀式的步驟數等於受保護目標的數量，且所有目標必須在施法時於觸及範圍內。完成後，受術者將獲得對單一攻擊類型（物理或精神）的防護。每名受護者皆被光輝護盾環繞，獲得額外的掩護值（針對物理）或士氣值（針對精神），數值等同於施法者的威能值。",
      flawedSpell: "儀式表面上成功，但當任何受護者首次受到應被防護的攻擊時，該次攻擊造成的壓力增加+2🎲。",
      momentumOptions: [],
      requirements: "儀式工具、血祭",
      maxStress: 15,
      steps: "1+",
      description: "此防護儀式可偏轉或吸收來自物理、精神或魔法的攻擊。施法者呼喚北歐光之神巴德爾的祝福——那位除槲寄生外萬物皆誓不傷害的神靈——以其純潔之力庇護眾人。強化版本可同時防禦兩種攻擊類型（例如魔法與物理）。"
    }
  ],
  '靈能法典': [
    {
      englishName: 'Attenuation',
      chineseName: '削弱',
      skill: '學識',
      difficulty: 2,
      cost: '5🎲消耗，穿透1',
      duration: '等同靈能者威能值一半（向上取整）',
      category: '詛咒法術',
      effect: '以中距離內單一生物為目標。若成功，該目標失去「無敵」特性，成為可被常規攻擊所傷之存在。對未具此特性的生物無效。',
      momentumOptions: [
        { cost: 1, effect: '所有針對目標的物理攻擊獲得穿透1效果。' },
        { cost: 2, effect: '所有盟友在抵抗該生物所造成的精神壓力時獲得+3士氣。' }
      ],
      description: '靈能者能剝除異界生物的防護，使其失去「無敵」能力，暴露於凡人之攻。若專注加深，甚至能增強隊友士氣與攻勢，使其更易殺敵。'
    },
    {
      englishName: 'Atavistic Rage',
      chineseName: '原始之怒',
      skill: '戰鬥',
      difficulty: 2,
      cost: '4🎲消耗',
      duration: '直到當前場景結束',
      category: '祝福法術',
      effect: '選擇近距離內單一角色（可為施法者自身）。該角色陷入狂怒，無法使用遠程攻擊或其他能力。受影響者之近戰攻擊造成威能值+1🎲物理壓力並附帶兇猛效果（若非靈能者，則其近戰攻擊+1🎲）。此外，獲得+3護甲抗性。',
      flawedSpell: '目標無法分辨敵我，將攻擊最近的任何目標。',
      momentumOptions: [
        { cost: 2, effect: '近戰攻擊額外獲得穿透1效果。' }
      ],
      description: '靈能者喚起深層的暴力本能，將其外放至自己或願意的對象，使其陷入殺戮狂暴之中。受此力量影響者會拋棄遠程武器，化身近戰巨獸，直到戰場空無一敵。'
    },
    {
      englishName: 'Combat Perception',
      chineseName: '戰鬥感知',
      skill: '觀察',
      difficulty: 2,
      cost: '3🎲消耗，穿透1',
      duration: '等同威能值的回合數',
      category: '祝福法術',
      effect: '在短時間內，靈能者能預測敵方行動。所有針對其的近戰攻擊難度+2，且靈能者自身的近戰攻擊額外造成+2🎲物理壓力。',
      momentumOptions: [
        { cost: 2, effect: '遠程攻擊對靈能者的難度亦+2。' },
        { cost: 1, effect: '施展時及每回合開始時，靈能者可依「獲取情報」提出一個關於當前局勢的問題。' }
      ],
      description: '部分靈能者能窺見時間的紋理，預知片刻後的戰況。此能力讓他們預判敵方動作，使其在近戰中幾乎無懈可擊。'
    },
    {
      englishName: 'Enhanced Instincts',
      chineseName: '強化本能',
      skill: '觀察',
      difficulty: 2,
      cost: '3🎲消耗',
      duration: '等同威能值的回合數',
      category: '祝福法術',
      effect: '影響施法者或近距離內一名盟友。受影響者無視武器射程帶來的攻擊難度提升，且攻擊額外獲得穿透1效果。',
      momentumOptions: [
        { cost: 2, effect: '每消耗2動力，可額外影響一名盟友。' }
      ],
      description: '靈能者集中精神，強化自身或盟友的感知、反射與直覺，使其能察覺敵人弱點，並在戰鬥中展現致命準確度。'
    },
    {
      englishName: 'Inner Nirvana',
      chineseName: '內在寂靜',
      skill: '韌性',
      difficulty: 2,
      cost: '3🎲消耗',
      duration: '等同威能值的回合數',
      category: '結界法術',
      effect: '影響施法者與近距離內的盟友，總數不超過施法者威能值。受影響者獲得額外掩護，數值為靈能者威能值的一半（向上取整）。此外，每回合開始時，受影響者恢復等同自身韌性的壓力。',
      momentumOptions: [
        { cost: 2, effect: '掩護值改為等同靈能者威能值（而非一半）。' }
      ],
      description: '靈能者汲取同伴之力量，強化集體精神，以削弱敵方攻勢並促進自我修復。子彈與爆裂物似乎在其周圍減速，傷口亦在共享的生命力中逐漸癒合。'
    },
    {
      englishName: 'Primal Scream',
      chineseName: '原始之嘯',
      skill: '說服',
      difficulty: 1,
      cost: '4🎲消耗，震懾',
      duration: '即時',
      category: '攻擊法術',
      effect: '對所有近距離內敵人造成等同靈能者威能值+2🎲的精神壓力，並附帶震懾效果。',
      flawedSpell: '影響範圍內所有生物，而非僅敵人。',
      momentumOptions: [
        { cost: 2, effect: '添加穿透1效果。' },
        { cost: 2, effect: '添加兇猛效果。' },
        { cost: 2, effect: '將範圍擴大至中距離。' }
      ],
      description: '靈能者深入潛意識深處，釋放出強烈的精神咆哮——這聲音並非被聽見，而是被「感知」到，其威力足以使附近敵人陷入混亂與恐慌。'
    },
    {
      englishName: 'Remote Viewing',
      chineseName: '遠程視覺',
      skill: '觀察',
      difficulty: 2,
      cost: '2🎲消耗，穿透1',
      duration: '等同威能值的回合數',
      category: '占卜法術',
      effect: '靈能者選擇一件其已知且位於近距離內的物件，能精確觀察該物之所有部分，即使被遮蔽或封閉。施法期間，靈能者可持續觀察該物件，或每回合更換一次目標。此期間內以「獲取情報」所花的動力，能揭示常人肉眼無法見之事物。',
      momentumOptions: [
        { cost: 1, effect: '可觀察中距離內之物件。' },
        { cost: 2, effect: '可觀察遠距離內之物件。' },
        { cost: 3, effect: '可觀察地球上任一熟悉地點的物件（必須先知曉其存在）。' },
        { cost: 3, effect: '可選擇觸及範圍內之物件，獲得其部分「過往」記憶。' }
      ],
      description: '靈能者能窺見遙遠或隱蔽之物，獲取常人無法得知的知識——此能力對偵察與情報蒐集極為寶貴。'
    },
    {
      englishName: 'Spontaneous Combustion',
      chineseName: '自燃現象',
      skill: '韌性',
      difficulty: 1,
      cost: '4🎲消耗，持續3',
      duration: '即時',
      category: '攻擊或召喚法術',
      effect: '靈能者選擇近距離內一個目標（物件或生物），該目標在瞬間劇烈升溫並可能燃燒，造成施法者威能值+1🎲的物理壓力，附帶持續4效果。此外，靈能者也可使周遭出現一項新的真理——如點燃營火、引爆燃料桶或引燃炸藥等情境。',
      flawedSpell: '法術自動帶有區域效果，但施法者無法控制哪些物件或生物將被波及。',
      momentumOptions: [
        { cost: 2, effect: '添加區域效果。' },
        { cost: 2, effect: '添加穿透2效果。' },
        { cost: 2, effect: '可將目標距離延伸至中距離。' }
      ],
      description: '部分靈能者能以意志擾動物質，使其激發熱能與火焰——萬物似自發燃燒，毫無明顯起因。這是一種罕見且震撼的力量，若善加運用，威力極為驚人。'
    },
    {
      englishName: 'Telekinesis',
      chineseName: '心靈傳動',
      skill: '韌性',
      difficulty: '依效果而異',
      cost: '3🎲消耗',
      duration: '依效果而異',
      category: '顯化法術',
      effect: '靈能者在成功施展時選擇下列其中一種效果：\n操控（Manipulate） — 難度1：可在近距離內移動或操作物件，猶如親手觸碰一般。可同時操控等同其威能值數量的物件，持續回合數亦等於威能值。無法產生足以造成傷害的速度。若欲操作複雜裝置，必須能看見該控制界面。\n投擲（Project） — 難度1：以念力掀起碎片與殘骸，向敵人發出猛烈衝擊。選擇一名近距離敵人，造成等同威能值🎲的物理壓力，附帶震懾效果。此效果為即時。\n心靈握持（Grasp） — 難度等同目標體型等級（最低1）：可移動一個大型生物或物體（體型不超過其威能值一半）。可將目標自原位移動至近距離內任意位置，持續回合數等於靈能者威能值。被握持之目標無法行動，若被拋擲或撞擊堅固物體，將承受威能值🎲物理壓力與震懾效果（被撞物亦受同等傷害）。',
      momentumOptions: [
        { cost: 2, effect: '任意心靈傳動效果可改為影響中距離內物件。' },
        { cost: 1, effect: '在「操控」中，可操縱遠程武器進行攻擊，但仍需進行常規攻擊檢定（需主動作），且一次僅能專注於一件武器。' },
        { cost: 2, effect: '在「操控」中，被控制之物體可提供+2掩護。' },
        { cost: 2, effect: '在「投擲」中，添加區域效果。' },
        { cost: 2, effect: '在「投擲」中，目標將被擊倒（臥倒狀態）。' },
        { cost: 2, effect: '在「心靈握持」中，可作為主動作將目標「碾壓」，造成威能值+2物理壓力並附帶穿透2效果。' }
      ],
      description: '靈能者能以意念操縱周遭的形體、物件與力量，將環境中之物按己意移動或控制。'
    },
    {
      englishName: 'Telepathy',
      chineseName: '心靈感應',
      skill: '觀察',
      difficulty: '依效果而異',
      cost: '1🎲消耗，穿透1',
      duration: '依效果而異',
      category: '顯化法術',
      effect: '靈能者成功施展後可選擇以下一種效果（僅對具人類智慧之存在有效）：\n意念傳訊（Thought Sending） — 難度1：可向中距離內任意對象傳遞思想，等同數秒語句。接收者可即時回覆。此為瞬間傳遞。\n思維連結（Mental Link） — 難度2：可與中距離內最多等同其威能值數量的自願者建立思維連結。於接下來數小時內（等同威能值），連結者可如面對面交談般進行心靈溝通。若任一成員承受精神壓力，所有其他成員亦承受一半（向上取整）。\n讀心術（Mind Reading） — 難度2（對抗目標的意志+韌性）：額外代價+3🎲。可探查近距離內單一生物的心智。成功則得知其表層意念——當下正在思考的內容。可透過動力（依「獲取情報」規則）深入挖掘潛意識。每進行一次持續讀心（主動作），可免費詢問一項問題。',
      momentumOptions: [
        { cost: 1, effect: '距離提升至遠距離。' },
        { cost: 2, effect: '距離提升至「一英里內」。' },
        { cost: 3, effect: '距離提升至「地球上任意熟悉地點」。' },
        { cost: 1, effect: '意念傳訊/思維連結時可共享影像、聲音或記憶。' },
        { cost: 2, effect: '讀心術時目標不會察覺被入侵心智。' }
      ],
      description: '部分靈能者擁有跨越距離的精神交流能力，能將思緒傳達他人心中，或竊聽他人內在思維。'
    }
  ],
  '凱爾特法典': [
      {
        englishName: 'Spear of Lug',
        chineseName: '盧格之槍',
        skill: '戰鬥',
        difficulty: 3,
        cost: '5🎲消耗，穿透1',
        duration: '即時',
        category: '攻擊法術',
        effect: '攻擊法術。以一名位於中距離內的敵人或物件為目標，造成等同施法者威能值+2🎲的物理壓力，並具有穿透3效果。',
        momentumOptions: [
          { cost: 2, effect: '可添加強烈效果。' },
          { cost: 2, effect: '可添加兇猛效果。' }
        ],
        description: '施法者凝聚意志，呼喚古老凱爾特神祇的力量，將兩者合一化為一柄閃耀的活體長槍。這柄燃燒著毀滅之力的長槍被擲出時，能筆直飛向目標，貫穿障礙，無視一切掩護與護甲，直擊敵人。'
      },
      {
        englishName: 'Bounties of Dagda',
        chineseName: '達格達的恩賜',
        skill: '醫學',
        difficulty: 2,
        cost: '4🎲消耗',
        duration: '即時',
        category: '結界法術',
        effect: '立刻為所有近距離內的盟友恢復等同施法者威能值的壓力。',
        momentumOptions: [
          { cost: 2, effect: '所有受影響盟友移除1點傷勢（可為身體或精神）。' },
          { cost: 1, effect: '範圍內任何被擊敗的盟友立即恢復行動。' },
          { cost: 2, effect: '影響範圍擴大至中距離。' }
        ],
        description: '如同那位古代愛爾蘭德魯伊之神的神秘大釜，此治癒法術能滋養並恢復所有受到其力量庇佑者。血液再度流動，傷口癒合，斷骨重接；甚至據說，連剛逝的戰士也可能在其祝福下再度站起，重返戰場。'
      },
      {
        englishName: 'Gaze of Balor',
        chineseName: '巴洛爾之凝視',
        skill: '說服',
        difficulty: 2,
        cost: '5🎲消耗，震懾',
        duration: '即時',
        category: '攻擊法術',
        effect: '攻擊法術。以中距離內單一敵人為目標，造成等同施法者威能值+2🎲的精神壓力，並具有強烈效果。',
        momentumOptions: [
          { cost: 2, effect: '可添加消耗效果。' },
          { cost: 2, effect: '可添加持續6效果。' }
        ],
        description: '借助古代福摩爾王巴洛爾的詛咒之力，施法者的眼神化為毀滅的光芒，使敵人陷入無邊的恐懼。其凝視如錐形光束般掃過戰場，凡被注視者皆心膽俱裂、四肢顫抖，往往丟下武器，喃喃逃竄。'
      },
      {
        englishName: 'Gift of Arduinna',
        chineseName: '阿爾迪娜的恩賜',
        skill: '生存',
        difficulty: 3,
        cost: '4🎲消耗',
        duration: '等同施法者威能值的總回合數，平均分配於所有受影響目標（小數點以下捨去）',
        category: '祝福法術',
        effect: '祝福法術。可作用於施法者本人與所有近距離內的盟友，總數不超過施法者威能值。在法術持續期間，受影響者在進行移動（主動作或副動作）時可額外移動1個區域，且每回合可免費執行1次副動作。',
        momentumOptions: [
          { cost: 2, effect: '施法者或單一受影響盟友可在本回合額外進行1次主動作（每人最多僅能獲得1次額外主動作）。' }
        ],
        description: '凡呼喚阿登森林女神之力者皆受祝福，能迅捷如風、免疫疲勞、以倍速重新裝填，戰鬥時表現如同雙倍於常人。此外，受法術庇佑者可自由穿越森林、碎石地與溪流而不受阻礙。'
      },
      {
        englishName: 'Horn of Néit',
        chineseName: '尼特之號角',
        skill: '生存',
        difficulty: 1,
        cost: '4🎲消耗',
        duration: '等同威能值的回合數',
        category: '詛咒法術',
        effect: '詛咒法術。以施法者為中心，中距離內所有敵對生物為目標。施法者擲威能值🎲，將產生的效果數與每個目標的運動值比較（大型生物額外加上其體型等級）。凡運動值低於效果數的目標皆被纏縛，無法執行除掙脫以外的物理行動。掙脫需進行敏捷+運動或體魄+運動檢定，難度等同效果數。法術結束時，所有被纏縛者自動獲釋。',
        momentumOptions: [
          { cost: 1, effect: '可額外影響一名位於遠距或近距的目標。' },
          { cost: 1, effect: '施法者在擲威能值時額外加擲1🎲。' }
        ],
        description: '來自凱爾特戰神尼特的可怖詛咒。施法者召喚出一支幽冥號角，吹奏之時，大地本身應聲而動，幻化出樹根與藤蔓纏繞敵人，使其動彈不得，徒勞掙扎，直至法力消散。'
      },
      {
        englishName: 'Cyclone of Cernunnos',
        chineseName: '瑟努諾斯之颶風',
        skill: '生存',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '等同威能值的回合數',
        category: '召喚法術',
        effect: '召喚法術。於中距離內召喚出一個風之颶風，該颶風在行動順序中獲得自身的回合，但無法被攻擊或造成傷害。每當其回合開始時，對近距離內的所有生物與可損毀物體造成施法者威能值+1🎲的物理壓力，附帶穿透1與震懾效果；若對超自然生物造成傷害，則額外具兇猛效果。之後颶風會移動至相鄰區域。若施法者位於中距內，可選擇颶風移動方向；若超出此範圍，颶風停滯，主持人可花費1威脅令其移動。',
        flawedSpell: '缺陷版法術無法由施法者控制颶風，且主持人移動颶風時不需花費威脅。',
        momentumOptions: [
          { cost: 1, effect: '使颶風在當前與後續回合造成的壓力提升+1🎲。' }
        ],
        description: '施法者將意志化為旋轉的暴風，朝敵人釋放，可造成巨大破壞。此颶風對神話體系生物尤為致命，其威力遠超凡人所能承受。然而，距離愈遠，施法者對颶風的掌控亦隨之減弱，最終風暴將失控並自行消散。'
      },
      {
        englishName: 'Roots of the Earth',
        chineseName: '大地之根',
        skill: '生存',
        difficulty: 2,
        cost: '3🎲消耗，震懾',
        duration: '即時',
        category: '祝福法術',
        effect: '祝福法術。可作用於施法者及近距離內的盟友，最多等於施法者威能值一半（向上取整）。受影響者瞬間消失，並於視線內任意遠距離位置現身。',
        momentumOptions: [
          { cost: 2, effect: '所有被傳送者在施法者下回合開始前獲得+2掩護。' }
        ],
        description: '施法者觸及大地的古老脈絡與隱秘根網，能將自己與同伴（不包括敵人或抗拒者）傳送至鄰近地點，彷彿被大地吞噬，瞬間於另一處現身，甚至深入敵後。'
      },
      {
        englishName: 'The Ogham Sign',
        chineseName: '歐甘符印',
        skill: '學識',
        difficulty: 3,
        cost: '5🎲消耗，穿透1',
        duration: '即時',
        category: '放逐法術',
        effect: '放逐法術。以中距離內單一超自然生物為目標，造成施法者威能值+2🎲的精神壓力，並具有消耗與穿透2效果，即使該生物通常免疫精神攻擊（視為勇氣6）。若該法術導致目標承受一項或多項精神傷勢，則其「無敵（Invulnerable）」特性於本場景餘下時間內失效；若目標被此法術擊敗，則即刻被放逐回其原始界域。',
        momentumOptions: [
          { cost: 2, effect: '添加強烈效果。' },
          { cost: 2, effect: '添加震懾效果。' }
        ],
        description: '源自凱爾特古聖字母的神秘符印，是針對神話體系生物的強力驅逐術。它不僅造成極大傷害，更能削弱幸存敵人的防禦與抗性。'
      }
  ],
  '符文法典': [
      {
        englishName: 'Ravens of Odin',
        chineseName: '奧丁之鴉',
        skill: '學識',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '等同威能值的回合數',
        category: '結界法術',
        effect: '在法術持續期間，施法者所有近距離內的盟友獲得額外士氣，數值等同施法者的威能值。',
        momentumOptions: [
          { cost: 2, effect: '所有受影響角色的近戰攻擊額外造成+2🎲壓力。' },
          { cost: 3, effect: '任一受影響盟友可獲得1點命運點（若法術結束前未使用，則失效）。' }
        ],
        description: '織符者織出「恩索茲」之符，喚起戰爭之父奧丁的力量。這位被懸掛之神、戰鬥的主宰，派遣其雙鴉胡金與穆寧，將瓦爾哈拉勇士不滅的鬥志灌注於盟友之中。受奧丁之鴉加持者將免於恐懼與驚懼，並以更堅定的勇氣與英勇作戰。'
      },
      {
        englishName: 'Hammer of Thor',
        chineseName: '索爾之鎚',
        skill: '戰鬥',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '即時',
        category: '攻擊法術',
        effect: '以中距離內單一敵人或物件為目標，造成施法者威能值+2🎲傷害，並具區域效果。',
        momentumOptions: [
          { cost: 1, effect: '將區域效果改為穿透2。' },
          { cost: 2, effect: '添加兇猛效果。' },
          { cost: 2, effect: '添加震懾效果。' }
        ],
        description: '織符者引動「蘇里薩茲」符文，召喚雷神索爾的神鎚妙爾尼爾之力。風起雲湧，閃電轟鳴，雷霆自施法者身上迸發，擊中目標與周遭之物，帶來毀滅性的破壞。'
      },
      {
        englishName: 'Swiftness of Sleipnir',
        chineseName: '斯雷普尼爾之迅',
        skill: '生存',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '即時',
        category: '祝福法術',
        effect: '施法者與其近距離內的盟友可立即移動至多兩個區域。此外，在施法者下次行動前，若盟友啟用「保持先機」真理，則不需消耗任何動力。',
        momentumOptions: [
          { cost: 2, effect: '每名受影響角色於下個回合可免費執行1次副動作。' }
        ],
        description: '織符者呼喚「耶瓦茲」符文之力，此符與馬有關，代表奧丁坐騎斯雷普尼爾——牠是洛基與斯瓦迪法里之子，為世上最快與最優之駿馬。'
      },
      {
        englishName: 'Curse of Loki',
        chineseName: '洛基的詛咒',
        skill: '說服',
        difficulty: 2,
        cost: '5🎲消耗，每擲出一個效果，額外產生1點威脅',
        duration: '即時',
        category: '攻擊法術',
        effect: '對所有近距離內敵人造成施法者威能值+2🎲的精神傷害，附帶震懾效果。',
        flawedSpell: '影響範圍內所有生物，而非僅敵人。',
        momentumOptions: [
          { cost: 2, effect: '添加持續6效果。' },
          { cost: 2, effect: '添加纏縛效果。' }
        ],
        description: '惡作劇之王是符視者最合適的庇護者。此法術引動「納歐帝茲」符文之影，使敵軍陷入幻象與恐懼。被洛基詛咒的目標將看到巨人、怪獸與冰原惡靈的幻影，陷入混亂與士氣潰散之中。'
      },
      {
        englishName: 'Bounty of Baldur',
        chineseName: '巴德爾的恩賜',
        skill: '韌性',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '等同威能值的回合數',
        category: '結界法術',
        effect: '在法術持續期間，所有針對施法者及近距離內盟友的攻擊，其難度提升+2。',
        momentumOptions: [
          { cost: 'X', effect: '所有受影響角色獲得+X掩護，X等於消耗的動力量。' }
        ],
        description: '此強力的符文護盾源於「奧吉茲」符文──象徵保護，並汲取自阿薩神族中最受愛戴的神祇巴德爾之力。符文的力量如同神秘護甲般籠罩全身，使施法者與同伴幾乎不受傷害：準確的攻擊會偏離軌道，傷害被消散，惡意之力亦被削弱。'
      },
      {
        englishName: 'Blessing of Eir',
        chineseName: '艾爾的祝福',
        skill: '醫學',
        difficulty: 3,
        cost: '4🎲消耗',
        duration: '即時',
        category: '結界法術',
        effect: '立即為近距離內所有盟友恢復等同施法者威能值的壓力。此外，所有在近距離內被擊敗的盟友立即恢復行動。',
        flawedSpell: '解除近距離內所有生物的壓力，而非僅限盟友。',
        momentumOptions: [
          { cost: 2, effect: '所有受影響盟友移除1點傷勢（可為身體或精神）。' },
          { cost: 2, effect: '將影響範圍擴大至中距離。' }
        ],
        description: '艾爾是北歐掌管治癒的女神與女武神，其名意為「援助」或「慈悲」，她的符文面向透過「拉古茲」展現，象徵療癒與重生。織符者藉此強大神聖咒語借來艾爾的治癒之力，能使傷者痊癒，甚至讓倒下的戰士重返戰場。'
      },
      {
        englishName: 'Wisdom of Frigg',
        chineseName: '芙麗嘉的智慧',
        skill: '觀察',
        difficulty: 1,
        cost: '3🎲消耗，震懾',
        duration: '即時',
        category: '占卜法術',
        effect: '選擇中距離內一名生物。施法者獲得三點額外動力，僅能用於「獲取情報」關於該生物，或創造一項與目標弱點相關的真理。',
        momentumOptions: [
          { cost: 2, effect: '若該生物擁有「無敵」特性，則失效，持續回合數等同施法者威能值。' },
          { cost: 2, effect: '施法者與盟友對該生物的所有攻擊獲得「強烈」或「兇猛」效果（施法者擇一，全體適用）。' }
        ],
        description: '奧丁之妻芙麗嘉以智慧與洞察聞名。當織符者喚醒「肯納茲」符文──象徵火焰與知識──便能借助女神的神識，洞察敵人最脆弱之處，並針對弱點施展致命一擊。神話體系的存在在此法術下會變得易受攻擊，凡人武器亦能對其造成真實且強化的傷害。'
      }
    ],






  };

  // 法術分類清單
  const spellCategories = [
    '攻擊法術',
    '結界法術',
    '祝福法術',
    '占卜法術',
    '顯現法術',
    '祝福或詛咒法術',
    '召喚法術',
    '詛咒法術',
    '放逐法術',
    '儀式'
  ];

  // 技能清單
  const spellSkills = [
    '醫學',
    '韌性',
    '說服',
    '戰鬥',
    '學識',
    '求生',
    '觀察',
    '戰術',
    '潛匿'
  ];

  // 獲取所有法術書分類
  const getSpellbooks = () => {
    return Object.keys(spellsDatabase);
  };

  // 根據法術書獲取法術
  const getSpellsBySpellbook = (spellbook) => {
    return spellsDatabase[spellbook] || [];
  };

  // 根據技能篩選法術
  const getSpellsBySkill = (skill) => {
    const allSpells = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      allSpells.push(...spellbook.filter(spell => spell.skill === skill));
    });
    return allSpells;
  };

  // 根據分類篩選法術
  const getSpellsByCategory = (category) => {
    const allSpells = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      allSpells.push(...spellbook.filter(spell => spell.category === category));
    });
    return allSpells;
  };

  // 根據難度篩選法術
  const getSpellsByDifficulty = (difficulty) => {
    const allSpells = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      allSpells.push(...spellbook.filter(spell => spell.difficulty === difficulty));
    });
    return allSpells;
  };

  // 搜尋法術
  const searchSpells = (searchTerm) => {
    const allSpells = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      allSpells.push(...spellbook);
    });
    
    return allSpells.filter(spell => 
      spell.chineseName.includes(searchTerm) ||
      spell.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spell.description.includes(searchTerm) ||
      spell.effect.includes(searchTerm)
    );
  };

  // 篩選儀式
  const getRituals = () => {
    const rituals = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      rituals.push(...spellbook.filter(spell => spell.category === '儀式'));
    });
    return rituals;
  };

  // 篩選普通法術（非儀式）
  const getRegularSpells = () => {
    const regularSpells = [];
    Object.values(spellsDatabase).forEach(spellbook => {
      regularSpells.push(...spellbook.filter(spell => spell.category !== '儀式'));
    });
    return regularSpells;
  };

  // 檢查是否為儀式
  const isRitual = (spell) => {
    return spell.category === '儀式';
  };

  return {
    spellsDatabase,
    spellCategories,
    spellSkills,
    getSpellbooks,
    getSpellsBySpellbook,
    getSpellsBySkill,
    getSpellsByCategory,
    getSpellsByDifficulty,
    searchSpells,
    getRituals,
    getRegularSpells,
    isRitual
  };
};