// 天賦數據模組 - Cohors Cthulhu RPG 天賦系統

export const useTalentData = () => {
  // 天賦數據庫
  const talentsDatabase = {
    '共通天賦': [
      {
        englishName: 'Advisor',
        chineseName: '顧問',
        keywords: '〈技能〉',
        content: '你擅長引導他人解決問題。選擇一項技能，每當你以該技能協助盟友時，被你協助的盟友可在其檢定檢定骰池中重擲一顆d20。'
      },
      {
        englishName: 'Bold',
        chineseName: '大膽',
        keywords: '〈技能〉',
        content: '你在計算風險後行動時，往往比常理更容易成功。選擇一項技能。當你使用該技能進行檢定，並透過為遊戲主持人的威脅池增加威脅來購買額外d20時，你可重擲該檢定骰池中的一顆d20。'
      },
      {
        englishName: 'Cautious',
        chineseName: '謹慎',
        keywords: '〈技能〉',
        content: '你耐心而謹慎，僅在有利時出手。選擇一項技能。當你使用該技能進行檢定，並透過花費動力購買額外d20時，你可重擲該檢定骰池中的一顆d20。'
      },
      {
        englishName: 'Collaboration',
        chineseName: '合作',
        keywords: '〈技能〉',
        content: '需求：進階\n你訓練盟友善用你的專長，而今已有成果。選擇一項你擁有3級或以上的技能。當盟友進行該技能檢定，且能與你交流時，你可花費2點動力，使他們改用你的技能等級與一個專精（若適用），代替他們自身的。'
      },
      {
        englishName: 'Cool Under Pressure',
        chineseName: '臨危不亂',
        keywords: '〈技能〉、命運',
        content: '當情勢艱難時，你能深吸一口氣完成任務。選擇一項技能。當你使用該技能進行檢定時，你可花費1點命運點，自動通過該檢定，但不會獲得任何動力。'
      },
      {
        englishName: 'Prodigialis Fortuna',
        chineseName: '命運寵兒',
        keywords: '命運',
        content: '掌管命運的神祇喜愛戲弄你，讓你隨命運潮汐浮沉。每當你花費命運點時，可擲1顆挑戰骰。若結果為效果，立即回復該命運點；若為空白，則立即為遊戲主持人的威脅池產生3點威脅。'
      },
      {
        englishName: 'Skin of Your Teeth',
        chineseName: '死裡逃生',
        keywords: '命運',
        content: '你總能勉強躲過最嚴重的傷害。每場景一次，當你即將承受一個傷勢時，你可以花費1點命運點以避免承受該傷勢。'
      }
    ],
    
    '學識': [
      {
        englishName: 'Applied Knowledge',
        chineseName: '應用知識',
        keywords: '學識',
        content: '你的積累知識讓你在面對突發挑戰時靈光乍現。每場景一次，你可在檢定中以學識替代其他技能，並視為該檢定有專精。'
      },
      {
        englishName: 'Magister\'s Favorite',
        chineseName: '導師寵愛',
        keywords: '學識',
        content: '你專心於導師教誨、自學不倦，或兼而有之。若你成功通過一次基於學識的檢定，獲得額外1點動力。此獎勵動力不能保存。'
      },
      {
        englishName: 'Platonist',
        chineseName: '柏拉圖信徒',
        keywords: '學識',
        content: '你擅長理解外在實用世界與內心世界的區別。你獲得等同於你學識等級的額外勇氣抗性。此加值不與其他提供額外勇氣抗性的天賦疊加。'
      },
      {
        englishName: 'Savant',
        chineseName: '博學者',
        keywords: '學識',
        content: '你展現出罕見的才能。選擇任意兩個因原型而獲得加成等級的技能。對每個技能，你能再將等級提升 +1，或為其選擇一個專精。'
      }
    ],
    
    '運動': [
      {
        englishName: 'Ludi Champion',
        chineseName: '競技冠軍',
        keywords: '運動',
        content: '你曾在羅馬年度競技比賽，或其他文化的同等比賽中勝出。當你進行基於運動的跑步、騎乘或游泳檢定時，可忽略第一次擲出的糾葛。'
      },
      {
        englishName: 'Marathon Runner',
        chineseName: '馬拉松選手',
        keywords: '運動',
        content: '當你奔跑時，總能保留一分餘力衝向終點。在你的回合，你可進行一次衝刺（主動作），即使你本回合已進行過移動（副動作）。'
      },
      {
        englishName: 'Sculpted from Marble',
        chineseName: '雕塑般的體魄',
        keywords: '運動',
        content: '你是體格卓絕的典範。當你進行基於運動的舉重、跑步、投擲或游泳檢定時，你可重擲任意數量的骰子。'
      }
    ],

    '製作': [
      {
        englishName: 'Field Repair',
        chineseName: '野戰修理',
        keywords: '製作',
        content: '你擅長在資源有限的環境下修理物品。當你以洞察＋製作檢定修理受損物品（如護甲或武器）時，你可為遊戲主持人的威脅池產生2點威脅，使該檢定難度－1（最低1）。修復後的物品獲得「野戰修復」真理。'
      },
      {
        englishName: 'Scavenger',
        chineseName: '拾荒者',
        keywords: '製作',
        content: '你善於尋找補給。花費半小時翻找並通過一次難度1的洞察＋製作檢定，你能收集到足以補充一套製作工具包所需資源的材料。'
      }
    ],

    '工程': [
      {
        englishName: 'Demolitionist',
        chineseName: '爆破專家',
        keywords: '工程',
        content: '你擅長破壞事物。當你攻擊物體、建築或靜止的載具時，可以以工程代替戰鬥，並使用智識加值而非體魄或洞察。當你對此類目標造成傷害時，可以花費2點動力，將最多等同於你工程等級數量的骰子結果改為效果。'
      },
      {
        englishName: 'Quality Crafting',
        chineseName: '精工製造',
        keywords: '工程',
        content: '你製作的物品、載具與建築品質遠超常人，能承受更多損傷。當你建造物體時，其最大壓力+2，可承受的傷勢數量+1。（更多詳情見第34頁〈物體受損〉。）'
      },
      {
        englishName: 'The Tool for the Job',
        chineseName: '專用工具',
        keywords: '工程',
        content: '你習慣透過辛勤工作完成任務。當你在擴展檢定中進行基於工程的技能檢定時，你擲出的傷害骰會獲得「穿透1」傷害效果。'
      }
    ],

    '戰鬥': [
      {
        englishName: 'Aggressive',
        chineseName: '進擊者',
        keywords: '戰鬥',
        content: '當你進行近戰攻擊時，你可將購買第一顆額外d20的動力花費降為0。但若如此，本回合直到下個回合開始前，針對你的攻擊難度－1。擁有此天賦的角色不可同時獲得【防禦者】天賦。'
      },
      {
        englishName: 'Defensive',
        chineseName: '防禦者',
        keywords: '戰鬥',
        content: '你特別擅長避開傷害。選擇近戰攻擊或遠程攻擊。當你被所選攻擊方式鎖定時，該攻擊難度＋1。此天賦可選兩次，各對應一種攻擊方式。擁有此天賦的角色不可同時獲得【進擊者】天賦。'
      },
      {
        englishName: 'Skirmisher',
        chineseName: '游擊者',
        keywords: '戰鬥',
        content: '每輪一次，當敵方角色的近戰或遠程攻擊未命中你時，你可為遊戲主持人的威脅池產生2點威脅，並以自由動作移動到中距範圍內的任意位置。當你如此移動後，直到下回合開始前，你對近戰與遠程攻擊獲得+2掩蔽抗性。'
      },
      {
        englishName: 'Steady Aim',
        chineseName: '穩定瞄準',
        keywords: '戰鬥',
        content: '你使用遠程武器的攻擊異常精準。當你以遠程武器進行「瞄準」（副動作）後，本回合的攻擊檢定可重擲2顆d20，而非僅1顆。'
      }
    ],

    '醫學': [
      {
        englishName: 'Anatomist',
        chineseName: '解剖專家',
        keywords: '醫學',
        content: '你處理傷患的經驗，讓你懂得如何造成最大傷害。當你攻擊人類目標，或是你曾解剖過的動物或生物時，可使用醫學代替戰鬥，並將攻擊附加「兇猛」傷害效果。'
      },
      {
        englishName: 'Combat Medicus',
        chineseName: '戰地醫師',
        keywords: '醫學',
        content: '你熟知野戰急救的基本技巧。當你使用「穩定」（主動作）時，可重擲1顆協調＋醫學檢定的d20。若檢定成功，還可移除一項狀態（見第44頁〈狀態〉）。'
      }
    ],

    '觀察': [
      {
        englishName: 'Keen Eyed',
        chineseName: '鷹眼',
        keywords: '觀察',
        content: '你的視力銳利如鷹。基於感知的檢定在超過近距的區域時，難度減少1（見第31頁〈距離與感知〉）。此外，你使用遠程武器時，其正常射程與下一級射程均視為有效射程。例如，原本有效射程為中距的武器，現在可在中距與遠距下正常使用，無需額外難度。'
      },
      {
        englishName: 'Predator\'s Senses',
        chineseName: '獵者直覺',
        keywords: '觀察',
        content: '你的感官如同狩獵中的狼般敏銳。當你保持清醒時，敵人無法對你發動突襲（見第158頁〈突襲〉）。此外，若NPC要在戰鬥中先於你行動，遊戲主持人必須額外花費1點威脅。'
      },
      {
        englishName: 'Suspicious',
        chineseName: '多疑',
        keywords: '觀察',
        content: '你對所有人事物都心存懷疑。每當戰鬥的第一回合開始前，任何針對你的物理或心智攻擊，其難度＋1。'
      }
    ],

    '說服': [
      {
        englishName: 'Imposing Presence',
        chineseName: '威懾氣場',
        keywords: '說服',
        content: '你一向容易震懾他人。你可以以近戰武器進行心智攻擊，使用威儀＋說服檢定。此攻擊造成的心智傷害等於武器數值＋你的意志加值，並可選擇附加「穿透1」或「震懾」傷害效果。你無需具備「恐懼 X 特殊規則」即可發動此心智攻擊。'
      },
      {
        englishName: 'Lingua Argentea',
        chineseName: '能言善道',
        keywords: '說服',
        content: '你天賦口才，能迅速有效地說服他人接受你的觀點。當你進行說服檢定以改變他人想法或議價時，檢定難度－1。'
      }
    ],

    '韌性': [
      {
        englishName: 'Iron Hide',
        chineseName: '鐵甲之軀',
        keywords: '韌性',
        content: '你能承受可怕的傷害而不形於色。在計算糾葛範圍時，你可忽略你所承受的第一個傷勢。此外，你需承受4個傷勢才會被擊倒，而非3個。是否進入瀕死或失常狀態，由遊戲主持人決定。'
      },
      {
        englishName: 'Mithradatic',
        chineseName: '抗毒體質',
        keywords: '韌性',
        content: '你天生對毒素有抗性，或因長期接觸而逐漸免疫。當你進行韌性檢定以抵抗毒藥、毒素或藥物效果時，難度－1。若因此降至0，則無需檢定。'
      },
      {
        englishName: 'Second Wind',
        chineseName: '再起',
        keywords: '韌性',
        content: '當你執行調息（主動作）時，每有1點韌性等級便擲1顆挑戰骰🎲。每擲出1個效果😈，便可額外移除1點壓力。'
      }
    ],

    '潛匿': [
      {
        englishName: 'Fade Away',
        chineseName: '消隱',
        keywords: '潛匿',
        content: '每場景一次，你可用副動作並為遊戲主持人的威脅池產生2點威脅以隱去身形。若如此，在下個回合開始前，你不能成為攻擊目標（帶有「區域」傷害效果的攻擊除外）。若你處於重度掩蔽中，則不需產生威脅即可使用此天賦。'
      },
      {
        englishName: 'Low Profile',
        chineseName: '低調',
        keywords: '潛匿',
        content: '當你獲得掩蔽抗性時，總掩蔽抗性額外+1。'
      }
    ],

    '求生': [
      {
        englishName: 'Untraceable',
        chineseName: '無跡可尋',
        keywords: '求生',
        content: '你懂得如何在荒野中不留痕跡。當你單獨旅行或帶領一個隊伍時，敵方追蹤你行蹤的檢定難度增加，數值等於你求生等級的一半（向下取整）。'
      },
      {
        englishName: 'Bestiarius',
        chineseName: '獸鬥士',
        keywords: '求生',
        content: '你在荒野中並不孤單。你擁有一隻無智慧的夥伴生物，在危險時刻伴你左右。該生物使用此天賦內建的夥伴生物資料，或附錄B（第211頁）中的資料。此夥伴生物視為由你指揮的盟友NPC。當你覓食時，它能自行照料自身。若它因敵人或不幸而死亡，你立即獲得1點臨時命運點，並可選擇重新訓練此天賦（獲得新夥伴），或將此天賦替換為其他天賦。'
      }
    ],

    '戰術': [
      {
        englishName: 'Coordinator',
        chineseName: '協調者',
        keywords: '戰術',
        content: '你擅長協調隊伍的行動。當你參與一場有協助的檢定時，即使你不是檢定的領導者，每位協助或領導的玩家角色都可以重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Inconspicuous',
        chineseName: '隱晦無痕',
        keywords: '戰術',
        content: '你懂得保持低調，避免引人懷疑。當你的武器或裝備會產生威脅時，總威脅值－1。若是聖物或邪物具有特殊規則能產生額外威脅，則其威脅值無法降至1以下。'
      },
      {
        englishName: 'Rallying Cry',
        chineseName: '激勵戰吼',
        keywords: '戰術',
        content: '你能以自信的吼聲驅散同伴的恐懼。擲等同於你戰術等級數量的挑戰骰🎲。取代對你造成的壓力，每擲出1點壓力可令你或近距內的盟友移除1點壓力；每擲出效果則可移除2點壓力。你可將移除的壓力分配給你與近距盟友，任意分派。'
      }
    ],

    '異質': [
      {
        englishName: 'Bizarre Insight',
        chineseName: '詭異洞察',
        keywords: '異質',
        content: '你的思維時常浮現出不可能知曉的片段。每場景一次，你可為遊戲主持人的威脅池產生1點威脅，即可進行一次「獲取情報」動作（向主持人提出一個問題），且不需進行技能檢定。'
      },
      {
        englishName: 'Foreboding Survival',
        chineseName: '不祥倖存',
        keywords: '異質',
        content: '你似乎總有一股無形之手幫你躲過劫難。然而，厄運卻往往降臨在你身邊的人。每場次一次，當你即將承受一個傷勢時，你可為遊戲主持人的威脅池產生3點威脅以避免承受該傷勢。依主持人裁量，你也可能被允許以同樣方式避免其他不幸事件。'
      },
      {
        englishName: 'Mystical Power',
        chineseName: '神祕之力',
        keywords: '異質，施法者限定',
        content: '只有施法者可以選擇此天賦。你深入探索神話的永恆奧祕與時間的祕密，並帶著強大的魔法能力回歸。你獲得一項額外的個人真理：「窺見凡人不該知曉之物」，或其他能反映此知識代價的真理。當你施展法術時，你可以將威能值提高+2🎲。但若如此，你每擲出1個效果😈，你的每位近距盟友將承受1點心智壓力，因他們被你掌握的超凡祕密所影響。'
      },
      {
        englishName: 'Numb to the Horrors',
        chineseName: '麻木於恐怖',
        keywords: '異質',
        content: '不知何故，血腥、死亡與暴力無法影響你的心智。你的勇氣抗性+6，但不能再疊加其他來源的勇氣抗性。此外，你在進行判定是否獲得心靈創傷的技能檢定時，可以重擲1顆d20。\n然而，你冷漠的態度會令他人感到疏遠，使你所有基於說服的技能檢定，其糾葛範圍＋1。'
      },
      {
        englishName: 'Occult Dabbler',
        chineseName: '祕術涉獵者',
        keywords: '施法者，異質',
        content: '你涉足了超越理解的祕術力量。你現在被視為「涉獵型施法者」，其規則見第58頁〈第四章：魔法〉。'
      }
    ]
  };

  // 獲取所有分類
  const getCategories = () => {
    return Object.keys(talentsDatabase);
  };

  // 根據分類獲取天賦
  const getTalentsByCategory = (category) => {
    return talentsDatabase[category] || [];
  };

  return {
    talentsDatabase,
    getCategories,
    getTalentsByCategory
  };
};