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
    ],

    '祕儀師': [
      {
        englishName: 'The Gods Are With Us!',
        chineseName: '神與我同在！',
        keywords: '祕儀師、說服、施法者',
        content: '需求：祕儀師原型，且無其他施法者關鍵詞天賦。\n你以虔誠的信念激勵眾人，祈求神恩的呼喊令盟友心安。你是施法者（詳見第58頁〈魔法〉）。此外，你可用副動作進行一次威儀＋說服檢定（難度2）。若成功，你與同區域內的所有盟友皆獲得＋2士氣抗性，持續至你下個回合結束。'
      },
      {
        englishName: 'Gods Guide You',
        chineseName: '神明指引你',
        keywords: '祕儀師、學識、施法者',
        content: '需求：祕儀師原型，且無其他施法者關鍵詞天賦。\n你在萬事萬物中窺見命運與神意，能引導同伴的手行於天命。你是施法者（詳見第58頁〈魔法〉）。此外，每輪一次，當一名盟友進行近戰、遠程或魔法攻擊，或進行智識＋學識檢定時，你可作為反應動作，為遊戲主持人的威脅池增加2點威脅，以協助該角色。'
      },
      {
        englishName: 'Pain Is Nothing',
        chineseName: '苦痛無礙',
        keywords: '祕儀師、醫學、施法者',
        content: '需求：祕儀師原型，且無其他施法者關鍵詞天賦。\n暫時的苦痛在宇宙奧祕之前不值一提。你理解此理，能超越肉體的極限。你是施法者（詳見第58頁〈魔法〉）。此外，在你回合開始時，可為遊戲主持人的威脅池增加3點威脅，以移除等同於你威能值的壓力，或無視你所承受的一次傷勢，持續至當前場景結束。'
      },
      {
        englishName: 'Spirit Offering',
        chineseName: '靈魂祭獻',
        keywords: '祕儀師、施法者、異質',
        content: '需求：祕儀師原型，且無其他施法者關鍵詞天賦。\n你可汲取自身生命力或倒下敵人的靈魂作為祭獻，以安撫神明。你是施法者（詳見第58頁〈魔法〉）。此外，你可在自由動作中對自己造成2點心智傷害；若如此，或若你在本回合擊敗一名敵人，則直到回合結束前，你施放法術時無需進行〈準備〉副動作，且「施法」行動視同副動作而非主動作。'
      }
    ],

    '盧珀庫斯': [
      {
        englishName: 'Spectral Hunter',
        chineseName: '幽魂獵者',
        keywords: '盧珀庫斯、施法者',
        content: '需求：祕儀師原型、無其他「施法者」關鍵詞天賦\n你為一名施法者（詳見第58頁〈魔法〉）。此外，當你因施放戰場法術承受壓力時，可立即移動至中距離內任意位置。若你已擁有「施法者」天賦，可棄置原天賦並改以此替代。角色僅能同時擁有一項「施法者」天賦。'
      },
      {
        englishName: 'Hasty Ritual',
        chineseName: '急速儀式',
        keywords: '盧珀庫斯',
        content: '需求：幽魂獵者天賦\n選擇一個你已知的法術。每場景一次，你可不進行「準備」副動作而直接施放該法術。此法術視為「缺陷法術」。'
      },
      {
        englishName: 'Instinctive Magic',
        chineseName: '本能魔法',
        keywords: '盧珀庫斯、韌性',
        content: '需求：急速儀式天賦\n每場景一次，當你施放戰場法術時，可使用「韌性」（可套用「堅毅」專精）取代其他技能。此外，該法術消耗🎲減少2（最低為1）。'
      },
      {
        englishName: 'Jaws of the Wolf',
        chineseName: '狼之顎',
        keywords: '盧珀庫斯',
        content: '需求：急速儀式天賦\n當你成功施放攻擊法術時，獲得+1動力，且此動力僅可用於增加該法術造成的傷害+1🎲。'
      },
      {
        englishName: 'Lupercalia',
        chineseName: '盧珀卡利亞儀式',
        keywords: '盧珀庫斯',
        content: '需求：狼之顎天賦\n盧珀卡利亞節乃你所屬祭司團的盛典。此儀式訓練使你精通儀式性魔法。每當你通過儀式的任一組成檢定，可忽略每次擲出效果時最多2點抗性。'
      },
      {
        englishName: 'Wolf Howl',
        chineseName: '狼之咆嘯',
        keywords: '盧珀庫斯、說服、求生',
        content: '需求：狼之顎天賦\n你能呼喚羅馬的母狼之威，以咆哮震懾敵人理智。你可對一個你與之互相察覺、且位於中距離內的生物進行一次心智攻擊，進行意志＋說服或意志＋求生的技能檢定（難度1），無需具備「恐懼 X 特殊規則」。成功時，對目標造成「威能＋2」的心智傷害。'
      }
    ],

    '杖持者': [
      {
        englishName: 'Quiet Wisdom',
        chineseName: '靜默之智',
        keywords: '杖持者、說服、施法者',
        content: '需求：祕儀師原型\n你為施法者（詳見第58頁〈魔法〉）。此外，當你進行基於「說服」的技能檢定時，可重擲1顆d20，但必須接受新結果。若你已擁有帶有「施法者」關鍵詞的天賦，可棄置原天賦並以此替代。角色僅能同時擁有一項「施法者」天賦。'
      },
      {
        englishName: 'Know the Signs',
        chineseName: '識兆之慧',
        keywords: '杖持者、觀察、施法者',
        content: '需求：祕儀師原型\n你親身面對過超自然現象，能辨識其痕跡。你為施法者（詳見第58頁〈魔法〉）。此外，當你接近在過去六小時內受超自然力量影響的人或物時，可進行一次「洞察＋觀察」技能檢定，其難度等於該事件發生後的經過小時數。若成功，你能察覺該超自然污染。若花費2點動力，則可進一步辨明所使用的具體力量。\n若你已擁有帶有「施法者」關鍵詞的天賦，可棄置原天賦並以此替代。角色僅能同時擁有一項「施法者」天賦。'
      },
      {
        englishName: 'Do We Fear This?',
        chineseName: '我們畏懼嗎？',
        keywords: '杖持者、說服',
        content: '需求：氣場威能或護祟迷信天賦\n你能激勵盟友，使他們在逆境中保持信念。作為一個副動作，你可花費1點命運點，讓所有位於近距離內的盟友獲得等同於你「說服」等級的士氣抗性加值，持續至場景結束。'
      },
      {
        englishName: 'Force of Presence',
        chineseName: '氣場威能',
        keywords: '杖持者、異質',
        content: '需求：靜默之智天賦\n你造成心智傷害的攻擊，其額外傷害增加+1🎲。'
      },
      {
        englishName: 'Runecasting',
        chineseName: '符文占卜',
        keywords: '杖持者、觀察',
        content: '需求：靜默之智或識兆之慧天賦\n你精通符文占卜之術，可預見未來。每24小時可占卜一次，進行「洞察＋觀察」技能檢定，難度由你自行決定（1至5）。若成功，擲出與難度數值相同數量的d20，並記錄各骰結果。直到翌日清晨之前，你可使用以下反應：當你或任何在你視線範圍內的生物進行技能檢定時，可將其擲出的任一顆或多顆d20替換為你記錄的結果。每個記錄結果僅能使用一次，且不必一次用完所有結果。'
      },
      {
        englishName: 'Protective Superstitions',
        chineseName: '護祟迷信',
        keywords: '杖持者、觀察',
        content: '需求：識兆之慧天賦\n當你進行「抵抗魔法」（見第66頁）時，每擁有1級「觀察」，即可額外獲得+1動力。'
      }
    ],

    '賢者': [
      {
        englishName: 'Aedificator',
        chineseName: '建造者',
        keywords: '賢者、工程',
        content: '需求：賢者原型\n你擅長從大小不一的工程中創造持久之作。當你以「工程」進行任何含有抗性的擴展檢定時，每擲出一個效果😈，可無視1點抗性。'
      },
      {
        englishName: 'The Best Doctor Is Also a Philosopher',
        chineseName: '良醫亦哲人',
        keywords: '賢者、醫學',
        content: '需求：賢者原型\n你鑽研醫術與哲理，研讀加倫等名醫之學說。你精通希臘語（若已精通，則可另選一種語言精通）。此外，當你進行醫學檢定時，可將難度降低1或2，但同時令該檢定的糾葛範圍增加相同數值。'
      },
      {
        englishName: 'Deep Expertise',
        chineseName: '精研萬學',
        keywords: '賢者、學識',
        content: '需求：賢者原型\n你是多領域的專家。你在每一項達3級或以上的技能中，皆額外獲得一項專精。之後每當你將其他技能提升至3級時，立即為該技能再獲得一項專精。'
      },
      {
        englishName: 'Nero Nihil Verius',
        chineseName: '無物真於觀察',
        keywords: '賢者、觀察',
        content: '需求：賢者原型\n你具備能洞察真理的銳眼。當你進行偵測危險或隱藏敵人的檢定時，將檢定難度降低1。'
      }
    ],

    '工程師': [
      {
        englishName: 'Fabricator',
        chineseName: '構造師',
        keywords: '工程師、製作、工程',
        content: '需求：賢者原型\n當你進行「製作」或「工程」相關的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Dedication',
        chineseName: '專志不移',
        keywords: '工程師、動力',
        content: '需求：構造師天賦\n你對信念與目標的堅定讓你屢度渡過難關。若在場景開始時，你的團隊動力池為0，則擲1顆d20。若結果小於或等於你的「意志」屬性值，則為團隊動力池增加+1動力。'
      },
      {
        englishName: 'In the Nick of Time',
        chineseName: '及時洞察',
        keywords: '工程師、學識、工程',
        content: '需求：精研學識天賦，且「學識」或「工程」等級達3級以上\n每當你在擴展檢定中通過「學識」或「工程」相關技能檢定時，該檢定獲得「兇猛」傷害效果。'
      },
      {
        englishName: 'Incisive Scrutiny',
        chineseName: '銳察分析',
        keywords: '工程師',
        content: '需求：構造師天賦\n你擅長從理論、論點或機械的脆弱處洞察其本質。當你成功通過「洞察」或「智識」相關技能檢定時，獲得+1獎勵動力，此動力僅能用於「獲取情報」的動力選項。'
      },
      {
        englishName: 'Intense Scrutiny',
        chineseName: '深度解析',
        keywords: '工程師',
        content: '需求：具備「銳察分析」或「精研學識」天賦，且「學識」或「工程」等級達3級以上。\n當你在擴展檢定中成功通過「智識」或「意志」相關技能檢定時，該檢定獲得「穿透2」傷害效果。'
      },
      {
        englishName: 'Intense Study',
        chineseName: '精研學識',
        keywords: '工程師',
        content: '需求：專志不移天賦或深度解析天賦\n你博聞強記，通曉廣泛知識，能於危急時展現臨場專業。每次遊戲場次中可使用兩次：在進行技能檢定前，可選擇一個你未具備的專精，並於該次檢定中獲得之，且該專精在本場次餘下時間內持續生效。'
      }
    ],

    '醫師': [
      {
        englishName: 'Physician',
        chineseName: '臨床醫師',
        keywords: '醫師、醫學',
        content: '需求：賢者原型，醫學1級以上\n當你進行以「醫學」為基礎的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Emergency Doctor',
        chineseName: '急救醫師',
        keywords: '醫師、醫學',
        content: '需求：臨床醫師天賦\n當你執行「穩定」主動作時，其難度降低1（最低為0）。'
      },
      {
        englishName: 'Fast Aid',
        chineseName: '迅速救治',
        keywords: '醫師、醫學',
        content: '需求：臨床醫師天賦\n當你進行「醫學」技能檢定時，可選擇承受一項額外糾葛，以換取一次自動成功。'
      },
      {
        englishName: 'Field Medicine',
        chineseName: '野戰醫學',
        keywords: '醫師、醫學',
        content: '需求：臨床醫師天賦\n當你進行「醫學」技能檢定時，可忽略因缺乏合適工具或設備所造成的難度增加。'
      },
      {
        englishName: 'First Response',
        chineseName: '第一應變',
        keywords: '醫師、醫學',
        content: '需求：迅速救治天賦，且醫學3級以上\n在戰鬥中，你可對非垂死角色使用「穩定」主動作。若檢定成功，可選擇以下一項效果：\n• 使目標回復等同於你「醫學」等級的壓力，並可為每花費1點動力額外回復1點壓力。\n• 解除一項狀態。\n• 解除目前影響目標的持續傷害效果（例如「持續」傷害）。'
      },
      {
        englishName: 'Triage',
        chineseName: '分診',
        keywords: '醫師、醫學',
        content: '需求：急救醫師或第一應變天賦，且醫學3級以上\n你能以「智識＋醫學」檢定辨識患者的具體傷病，或判斷其嚴重程度。若成功，獲得+1獎勵動力，僅能用於「獲取情報」的動力選項。\n此外，當你以「智識＋醫學」檢定成功去除創傷時，可額外花費動力，每花費1點，便能同時為另一名患者去除創傷。'
      }
    ],

    '謀士': [
      {
        englishName: 'Backed by Authority',
        chineseName: '權勢加持',
        keywords: '謀士、說服',
        content: '需求：謀士原型\n你獲得區域權威者（如行省總督、軍閥或宗教領袖）的背書。當你進行以「說服」為基礎的檢定時，可重擲1顆d20，但必須採用新結果。另外，你取得物品時，其限制等級視為降低1（最低為1）。'
      },
      {
        englishName: 'Et Tu?',
        chineseName: '你也如此乎？',
        keywords: '謀士、戰鬥',
        content: '需求：謀士原型\n你深知前手示好、後手藏刃方為上策。在同一場景中，若你曾以「說服」通過影響或欺瞞敵人的檢定，之後對其發動的突襲攻擊（見第158頁）若成功，該次攻擊每擲出一個效果😈，便可額外擲＋1🎲；這些額外骰上擲出的效果不再產生進一步的連鎖效果。'
      },
      {
        englishName: 'Play the Part',
        chineseName: '角色扮演',
        keywords: '謀士、學識',
        content: '需求：謀士原型\n你對異域文化熟稔至能以衣著、語彙與舉止逼真偽裝其人。當你嘗試運用偽裝時，可以「學識」取代「潛匿」。'
      },
      {
        englishName: 'Social Network',
        chineseName: '社交網絡',
        keywords: '謀士、觀察',
        content: '需求：謀士原型\n只要在某地久居一段時日，你便能網羅一批跟班與線民。凡你曾於該地進入修整期，你至少擁有一名可動用的有用聯絡人（見第53頁〈人脈、聲望與恩惠〉）；其關係等級為「良好」。另於修整期進行的任一技能檢定中，你購買的第一顆加骰d20免費（前提是該檢定不涉及任何形式的戰鬥）。'
      }
    ],

    '糧務官': [
      {
        englishName: 'Sharp Senses',
        chineseName: '銳敏感覺',
        keywords: '糧務官、觀察',
        content: '需求：謀士原型\n當你進行以「觀察」為基礎的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Do or Die',
        chineseName: '背水一戰',
        keywords: '糧務官、士氣',
        content: '需求：銳敏感覺天賦\n糧務官慣於獨自行動，常與支援斷絕。你可產生1點威脅（加入遊戲主持人的威脅池），以獲得+2士氣抗性，持續至當前場景結束。'
      },
      {
        englishName: 'Know Thy Enemy',
        chineseName: '識敵之道',
        keywords: '糧務官',
        content: '需求：銳敏感覺天賦\n當你進行以「洞察」為基礎的技能檢定以判斷某人是否說謊或隱藏真理時，購買的第一顆d20不需花費動力。'
      },
      {
        englishName: 'Interrogation',
        chineseName: '審訊',
        keywords: '糧務官',
        content: '需求：識敵之道天賦\n當你在社交衝突中成功迫使他人透露情報時，獲得+1獎勵動力，僅能用於「獲取情報」的動力選項。'
      },
      {
        englishName: 'Perfect Facade',
        chineseName: '完美偽裝',
        keywords: '糧務官、潛匿',
        content: '需求：銳敏感覺天賦\n你精通偽裝與角色扮演之術，能完美融入群體、無縫偽裝身分。當你成功以「潛匿」進行偽裝檢定時，獲得等同於你「潛匿」等級（最高+3）的獎勵動力。'
      },
      {
        englishName: 'Thorough Search',
        chineseName: '徹底搜查',
        keywords: '糧務官',
        content: '需求：審訊天賦\n當你成功通過搜尋區域以找出證據的技能檢定時，獲得+1獎勵動力，僅能用於「獲取情報」的動力選項。若你協助其他角色進行該檢定且他成功，則該角色同樣獲得此+1動力（受相同限制）。'
      }
    ],

    '政務官': [
      {
        englishName: 'Charismatic',
        chineseName: '魅力非凡',
        keywords: '政務官、說服',
        content: '需求：謀士原型\n當你進行以「說服」為基礎的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Commanding Presence',
        chineseName: '威儀領導',
        keywords: '政務官、說服、戰術',
        content: '需求：魅力非凡天賦\n你以強大的氣場與說服力領導他人。當你進行以「說服」或「戰術」為基礎的技能檢定時，購買的第一顆d20不需花費動力。'
      },
      {
        englishName: 'Honestas',
        chineseName: '榮譽信用',
        keywords: '政務官',
        content: '需求：魅力非凡天賦\n你維持一種受人尊敬的正直形象。當你進行技能檢定以抵抗被強迫背棄諾言、背叛盟友或做出不名譽行為時，其難度降低1（最低為0）。'
      },
      {
        englishName: 'Lictors',
        chineseName: '執杖侍衛',
        keywords: '政務官、戰術',
        content: '需求：威儀領導天賦\n你可指定與你位於同一區域的任意數量盟友（上限為你的「戰術」等級）作為你的執杖侍衛。本場景內，每當你成為攻擊目標時，其中一名執杖侍衛可選擇代替你成為目標，並獲得等同於你「戰術」等級的勇氣抗性加值。'
      },
      {
        englishName: 'Rhetoric',
        chineseName: '修辭',
        keywords: '政務官',
        content: '需求：魅力非凡天賦\n當你對群眾發表演說並購買額外d20時，可重擲其中1顆d20。'
      },
      {
        englishName: 'Stoic',
        chineseName: '斯多葛哲學者',
        keywords: '政務官',
        content: '需求：榮譽信用天賦\n你奉行斯多葛哲學，對命運、痛苦與快樂皆保持平靜。當你進行任何抵抗強迫、心智侵入、痛苦或其他心智攻擊的技能檢定時，其難度降低2（最低為0）。'
      }
    ],

    '無賴': [
      {
        englishName: 'Cunning Fighter',
        chineseName: '狡詐戰士',
        keywords: '無賴、運動',
        content: '需求：無賴原型\n戰鬥時，你運用一切卑鄙手段——從揚沙至敵眼到狠踢下體。當敵人對你進行近戰攻擊卻未造成任何壓力時，該敵人失去其防備。若你於下一次對該敵人的攻擊成功，則可造成額外傷害🎲，數值等同於你的運動技能等級。'
      },
      {
        englishName: 'Hidden Blade',
        chineseName: '隱刃',
        keywords: '無賴、戰鬥',
        content: '需求：無賴原型\n你擅以隱匿但致命的利刃殺敵。當你進行近戰攻擊時，可為遊戲主持人的威脅池增加1至3點威脅。若攻擊成功，你可依所產生的威脅數，每點威脅獲得＋1傷害🎲，或為攻擊附加一種等量的傷害效果😈：「強烈」或「兇猛」（見第40頁〈傷害效果〉）。'
      },
      {
        englishName: 'Oculus Aurum',
        chineseName: '黃金之眼',
        keywords: '無賴、觀察',
        content: '需求：無賴原型\n你對貴重物品有敏銳的眼光——尤其是那些防守薄弱的。你可在自由動作中為遊戲主持人的威脅池增加1點威脅，以識別你所在區域內最貴重的物品（見第31頁〈環境與區域〉）。若如此進行，還可再增加1點威脅以得知其大致價值與限制等級。'
      },
      {
        englishName: 'Unremarkable',
        chineseName: '無名之姿',
        keywords: '無賴、潛匿',
        content: '需求：無賴原型\n你天生不引人注目，能在人群中自然消失。當你嘗試混入群體時，使察覺你的技能檢定難度提高＋1。'
      }
    ],

    '盜匪': [
      {
        englishName: 'Hasty Retreat',
        chineseName: '急速撤退',
        keywords: '盜匪',
        content: '需求：無賴原型\n當你進行逃避追擊的技能檢定時，若購買了額外的d20，可重擲其中1顆d20。'
      },
      {
        englishName: 'Inconspicuous',
        chineseName: '隱於眾人',
        keywords: '盜匪、潛匿',
        content: '需求：無賴原型\n行竊不難——難的是全身而退。你已熟習如何在人群中消失。若近距離內存在非敵對者，你可進行一次「洞察＋潛匿」檢定以躲藏或避免被注意，即使你正被敵人看見。若你的外貌、服裝或舉止過於引人注目，遊戲主持人可提高此檢定的難度。'
      },
      {
        englishName: 'Alter Ego',
        chineseName: '化名身份',
        keywords: '盜匪',
        content: '需求：隱於眾人天賦\n你能採用另一重身份——一個「我」的化身。當你進入場景時，可選擇要扮演的身分或角色。若如此，你獲得一項代表該身分的新真理，直到被識破或自行放棄為止。若你在場景中暫時脫離他人視線，可花費一個主動作並產生2點威脅（加入遊戲主持人的威脅池），迅速更換偽裝。'
      },
      {
        englishName: 'Nimble',
        chineseName: '敏捷身法',
        keywords: '盜匪、移動',
        content: '需求：急速撤退天賦\n你的腳步輕快，少有障礙能阻擋。當你進行移動、翻越或穿越困難地形等障礙的技能檢定（如追逐或戰鬥中），難度降低2。若因此降至0，則你可自由越過該障礙，視同無物。'
      },
      {
        englishName: 'Scotopia',
        chineseName: '適應昏暗',
        keywords: '盜匪',
        content: '需求：化名身份天賦或敏捷身法天賦\n你的雙眼已適應黑暗。你可無視因昏暗或光線不足造成的技能檢定減值。然而，此天賦在完全黑暗環境中無效。'
      },
      {
        englishName: 'Ransack',
        chineseName: '洗劫',
        keywords: '盜匪、觀察',
        content: '需求：適應昏暗天賦\n時間緊迫時，你寧可留下痕跡也要完成目標。當你進行以「觀察」為基礎的搜尋檢定時，可產生2點威脅（加入遊戲主持人的威脅池），以將該檢定難度降低1，並使搜尋所需時間減半。'
      }
    ],

    '刺客': [
      {
        englishName: 'Subtle Step',
        chineseName: '無痕步',
        keywords: '刺客、潛匿',
        content: '需求：無賴原型\n你熟悉隱行之道，行動謹慎不留痕跡。當你進行以「潛匿」為基礎的潛行或潛入檢定時，購買的第一顆d20不需花費動力。'
      },
      {
        englishName: 'Assassin',
        chineseName: '行刺者',
        keywords: '刺客',
        content: '需求：死神使者天賦或無聲一擊天賦\n你精通殺戮之術，奪命已無情感負擔。當你以具有「隱藏武器特性」的近戰武器攻擊時，可花費2點動力，令檢定骰池中所有「效果」符號的結果視為效果，忽略實際擲值。'
      },
      {
        englishName: 'Backstabber',
        chineseName: '背刺者',
        keywords: '刺客',
        content: '需求：破防者天賦或無痕步天賦\n當你攻擊沒有防備之目標時，若武器尚未具備「強烈」傷害效果，則獲得該效果。'
      },
      {
        englishName: 'Death Dealer',
        chineseName: '死神使者',
        keywords: '刺客、潜匿',
        content: '需求：破防者天賦或無聲一擊天賦\n你是熟練的殺手，擅以詭計與假象致命一擊。當你手持具有「隱藏武器特性」的武器時，可以「潜匿」取代「戰鬥」技能進行攻擊，並使該武器的傷害+1🎲。'
      },
      {
        englishName: 'Guard Break',
        chineseName: '破防者',
        keywords: '刺客',
        content: '需求：背刺者天賦或無痕步天賦\n當你攻擊「距離」比你長的對手時，將其距離視為減少1。'
      },
      {
        englishName: 'Silent Strike',
        chineseName: '無聲一擊',
        keywords: '刺客',
        content: '需求：背刺者天賦或死神使者天賦\n當你使用「距離」為1的近戰武器攻擊時，該武器獲得「精巧」武器特性。'
      }
    ],

    '斥侯': [
      {
        englishName: 'Eye for Weakness',
        chineseName: '視破弱點',
        keywords: '斥侯、觀察',
        content: '需求：斥侯原型\n你能看出獵物（或敵手）在天然或人為防禦上的破綻。當你花費動力以〈獲取情報〉來研究某個生物或敵人時，直到本場景結束，你對該目標的攻擊獲得「穿透1」；若武器已具有「穿透」，則改為傷害＋1🎲。'
      },
      {
        englishName: 'Strike from Hiding',
        chineseName: '暗處出擊',
        keywords: '斥侯、戰鬥',
        content: '需求：斥侯原型\n最佳的一擊，來自獵物尚未知你所在之時。當你對敵人成功發動突襲攻擊（見第158頁「突襲攻擊」）時，該次攻擊每擲出一個效果符號😈，便可額外擲＋1🎲；這些額外骰上擲出的效果不再產生進一步的連鎖效果。'
      },
      {
        englishName: 'Survivalist',
        chineseName: '荒野生存家',
        keywords: '斥侯、求生',
        content: '需求：斥侯原型\n你能以求生之道補足資源匱乏，長期在遠野行動。當你在荒野中進行「覓食、狩獵、搭建庇護所或收集補給」的擴展檢定時，該檢定獲得「兇猛」傷害效果。'
      },
      {
        englishName: 'Woodland Stride',
        chineseName: '林行健步',
        keywords: '斥侯、運動',
        content: '需求：斥侯原型\n你善於穿越破碎與艱難地形，如密林與荊棘叢生之處。當你穿越困難或危險地形時，使你為移動而進行的任何技能檢定難度－1（最低為0）。若因此降至0，則可視同該地形並非困難或危險而自由通過。'
      }
    ],

    '獵人': [
      {
        englishName: 'Tracker',
        chineseName: '追蹤者',
        keywords: '獵人',
        content: '需求：斥侯原型\n當你進行發現或追蹤足跡的技能檢定時，購買的第一顆d20不需花費動力。'
      },
      {
        englishName: 'Constantly Watching',
        chineseName: '警戒不懈',
        keywords: '獵人',
        content: '需求：追蹤者天賦\n當你進行偵測危險或發現隱藏敵人的技能檢定時，難度降低1（最低為0）。'
      },
      {
        englishName: 'Expert Aim',
        chineseName: '精準瞄準',
        keywords: '獵人',
        content: '需求：追蹤者天賦\n當你花時間瞄準時，幾乎不會失手。當你進行「瞄準」副動作時，可在擲骰前指定檢定骰池中的一顆d20，視為其結果為1。'
      },
      {
        englishName: 'Dead Eye',
        chineseName: '致命準星',
        keywords: '獵人',
        content: '需求：精準瞄準天賦\n你深知何處射擊能造成最大傷害。當你以遠程武器攻擊時，該武器傷害+1🎲。'
      },
      {
        englishName: 'Scotopia',
        chineseName: '適應昏暗',
        keywords: '獵人',
        content: '需求：警戒不懈天賦\n你的雙眼已適應黑暗。你可無視因光線不足或昏暗所造成的技能檢定減值，但此能力在完全黑暗環境中無效。'
      },
      {
        englishName: 'Self-Sufficient',
        chineseName: '自給自足',
        keywords: '獵人、求生',
        content: '需求：追蹤者天賦\n當你進行以「求生」為基礎的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      }
    ],

    '輕步兵': [
      {
        englishName: 'Pack Tactics',
        chineseName: '群狼戰術',
        keywords: '輕步兵',
        content: '需求：斥侯原型\n當你在戰鬥中協助其他角色且對方通過技能檢定時，該角色額外獲得+1動力。'
      },
      {
        englishName: 'Acrobatic Dodge',
        chineseName: '翻躍閃避',
        keywords: '輕步兵、運動',
        content: '需求：迅捷制勝天賦\n你行動不停，善於把握敵方出手的空隙逃脫攻勢。當敵人對你進行近戰攻擊時，你可使用「敏捷＋運動」取代「敏捷＋戰鬥」進行對抗檢定。若你勝出，無法造成傷害，但可移動至近距離任意位置；若再花費1點動力，則可改為移動至中距離。'
      },
      {
        englishName: 'Assail',
        chineseName: '標槍突襲',
        keywords: '輕步兵、戰鬥',
        content: '需求：群狼戰術天賦\n輕步兵以突如其來的標槍攻勢聞名。當你以具「投擲武器」專精的武器進行遠程攻擊時，可花費2點動力以在本回合再執行一次主動作。'
      },
      {
        englishName: 'Swift Victory',
        chineseName: '迅捷制勝',
        keywords: '輕步兵',
        content: '需求：群狼戰術天賦\n速度即是勝利，即使伴隨代價。當你進行以「運動」為基礎的技能檢定以執行「衝刺」主動作或跨越困難地形時，可選擇承受一項額外糾葛，以換取一次自動成功。\n此外，在任何衝突開始時，你可產生1點威脅（加入遊戲主持人的威脅池），以搶先於所有其他角色行動。'
      },
      {
        englishName: 'Rejuvenation',
        chineseName: '再起之志',
        keywords: '輕步兵、韌性',
        content: '需求：群狼戰術天賦\n習於於戰場邊緣反覆進退，你已學會迅速恢復戰力。當你執行「調息主動作」時，其技能檢定難度降低1（最低為0）。此外，每花費1點動力以消除壓力，可額外消除1點（共2點）壓力。'
      },
      {
        englishName: 'Fortune Favors the Bold',
        chineseName: '幸運垂青勇者',
        keywords: '輕步兵、命運',
        content: '需求：再起之志天賦\n當你技能檢定失敗並花費命運點重擲時，可先選擇將檢定難度提升+1。若重擲後成功，立即收回該命運點。'
      }
    ],

    '士兵': [
      {
        englishName: 'Brute',
        chineseName: '蠻力猛擊',
        keywords: '士兵、運動',
        content: '需求：士兵原型\n你的攻擊深沉有力，足以撕裂敵人防線。當你進行近戰攻擊時，可重擲任意數量的效果骰😈，以重新決定造成的壓力與傷害效果。'
      },
      {
        englishName: 'Flashing Steel',
        chineseName: '閃鋼連斬',
        keywords: '士兵、戰鬥',
        content: '需求：士兵原型\n你能以迅捷之姿連續出擊。當你執行「攻擊」主動作時，可在副動作中對另一名處於相同距離的角色發動第二次攻擊。若你攻擊的是「敵群」（見《臨戰克蘇魯：遊戲主持人指南》第189頁），則改為使該次攻擊造成的壓力傷害加倍。'
      },
      {
        englishName: 'Hold Fast',
        chineseName: '堅守不退',
        keywords: '士兵、韌性',
        content: '需求：士兵原型\n你能在最猛烈的敵襲下堅守陣地，並激勵同袍效仿。當你或同區域內的盟友遭受近戰攻擊時，可為遊戲主持人的威脅池增加1點威脅，使攻擊者的檢定難度＋1。'
      },
      {
        englishName: 'Shield Wall',
        chineseName: '盾牆陣形',
        keywords: '士兵、戰術',
        content: '需求：士兵原型\n你受過與持盾同袍並肩作戰的訓練。當你與至少一名在相同距離內、持有盾牌的盟友並肩時，可以副動作令陣形緊密、鎖盾成牆。只要所有成員仍保持「防備」，每名成員的盾牌提供的掩蔽抗性皆＋2，直至盾牆維持為止。'
      }
    ],

    '狂戰士': [
      {
        englishName: 'Head Taker',
        chineseName: '獵首者',
        keywords: '狂戰士、戰鬥',
        content: '需求：士兵原型\n選擇一名你在視線範圍內可見的精銳或宿敵NPC，你對該目標的近戰攻擊獲得+1傷害。此效果持續至該NPC死亡、場景結束、或你因其攻擊而承受壓力為止。當你擊敗該NPC時，獲得1點臨時命運點（於場景結束時失效）。'
      },
      {
        englishName: 'War Cry',
        chineseName: '戰吼',
        keywords: '狂戰士',
        content: '需求：獵首者天賦\n當獵首者指定的NPC對你發動近戰攻擊時，你可以反應動作發出震天怒吼。在遊戲主持人擲出攻擊檢定骰池前，你可從該檢定骰池中選擇1顆d20，不擲骰而直接視為結果為20。此外，該NPC攻擊的糾葛範圍增加+1。'
      },
      {
        englishName: 'Hack and Slash',
        chineseName: '砍殺',
        keywords: '狂戰士、戰鬥',
        content: '需求：獵首者天賦\n當你在本場景中再次攻擊先前已擊中的生物時，購買的第一顆d20不需花費動力。'
      },
      {
        englishName: 'Brutal Fighter',
        chineseName: '殘虐戰士',
        keywords: '狂戰士',
        content: '需求：砍殺天賦\n你所持的所有武器獲得「兇猛」傷害效果。若武器原已具此效果，則傷害+2🎲。'
      },
      {
        englishName: 'Bloody-Handed',
        chineseName: '染血之手',
        keywords: '狂戰士、戰鬥',
        content: '需求：殘虐戰士天賦\n當你進行近戰攻擊時，可為該攻擊添加「區域」傷害效果，使每次擲出效果😈時，額外擊中近距離內另一名敵人（由遊戲主持人選擇）。若如此執行，則每擲出一個效果符號，你需增加1點威脅至遊戲主持人的威脅池。此外，遊戲主持人可花費威脅，使你的攻擊誤中非預期目標——每名意外受擊者需消耗2點威脅。'
      },
      {
        englishName: 'Onslaught',
        chineseName: '猛襲',
        keywords: '狂戰士、移動',
        content: '需求：獵首者天賦\n當你完成一次近戰攻擊且對方因該攻擊承受壓力後，可作為自由動作移動至中距離內任意位置。'
      },
      {
        englishName: 'Berserker Rush',
        chineseName: '狂戰奔襲',
        keywords: '狂戰士、戰鬥',
        content: '需求：猛襲天賦\n當你執行「衝刺主動作」後，可花費2點動力，在移動結束時立即進行一次近戰攻擊。若此攻擊造成傷害，則額外對目標造成傷害+1🎲。'
      }
    ],

    '軍團士兵': [
      {
        englishName: 'Legionary Training',
        chineseName: '軍團訓練',
        keywords: '軍團士兵、戰鬥',
        content: '需求：士兵原型\n當你使用矛、短劍或標槍進行以「戰鬥」為基礎的技能檢定時，可重擲1顆d20，但必須接受新結果。'
      },
      {
        englishName: 'Legionary Veteran',
        chineseName: '老兵意志',
        keywords: '軍團士兵',
        content: '需求：軍團訓練天賦\n歷經無數苦戰，你鍛鍊出堅定的意志。你的勇氣抗性+2。'
      },
      {
        englishName: 'Precision Strikes',
        chineseName: '精確打擊',
        keywords: '軍團士兵',
        content: '需求：軍團訓練天賦\n你所持武器獲得「穿透1」傷害效果。若該武器原已具有「穿透」效果，則提升其穿透值+1。'
      },
      {
        englishName: 'Strike as One',
        chineseName: '協同一擊',
        keywords: '軍團士兵、戰術',
        content: '需求：精確打擊天賦\n在攻擊前，你可作為副動作花費任意數量的動力，下令攻擊，每花費1點動力可命令1名盟友（上限為你的戰術等級）。當你進行攻擊（主動作）時，所有收到命令的盟友可使用反應動作進行一次近戰或遠程攻擊。'
      },
      {
        englishName: 'Scutarius',
        chineseName: '盾陣守衛',
        keywords: '軍團士兵',
        content: '需求：軍團訓練天賦\n作為主動作，你可與同區域內的一名盟友「連盾成陣」。雙方皆須裝備盾牌。當你們的盾牌連結時，你獲得額外+X掩蔽抗性（X為盟友盾牌的「盾牌X」等級），而盟友亦獲得等同於你盾牌等級的掩蔽抗性加值。'
      },
      {
        englishName: 'Brace for Impact',
        chineseName: '迎擊防禦',
        keywords: '軍團士兵、戰鬥',
        content: '需求：盾陣守衛天賦\n當你成為近戰攻擊目標但攻擊尚未擲骰時，你可與同區域內的盟友組成防禦陣列。雙方皆須裝備盾牌。你與盟友各獲得+1掩蔽抗性。若你在「敏捷＋戰鬥」對抗檢定中勝出，除可對敵人造成傷害外，還能迫使其後退至你指定的近距離位置。'
      },
      {
        englishName: 'Formation Tactics',
        chineseName: '陣列戰術',
        keywords: '軍團士兵',
        content: '需求：迎擊防禦天賦\n作為主動作，你可與同區域內的盟友組成戰陣。雙方皆須持有盾牌與短劍或類似武器。在此陣型下，你可在有敵人於「距離」內時，仍以自由動作恢復防備。此外，若敵人成功攻擊此陣內的任一成員，該敵人將自受2🎲物理傷害。'
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