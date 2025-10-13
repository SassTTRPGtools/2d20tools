// 法術數據模組 - Cohors Cthulhu RPG 法術系統

export const useSpellData = () => {
  // 法術數據庫
  const spellsDatabase = {
    '符文法典': [
      {
        englishName: 'Blessing of Fylgjur',
        chineseName: '族靈之恩',
        skill: '醫學',
        difficulty: 3,
        cost: '4🎲消耗',
        duration: '即時',
        category: '結界法術',
        effect: '此法術可立即為近距離內所有盟友移除等同於施法者威能值的壓力。此外，任何在近距離內被擊敗的盟友都會立刻從「被擊敗」狀態中恢復，但仍保留其原有傷勢。',
        flawedSpell: '若為缺陷版本，此法術會移除近距離內所有生物的壓力，而不僅限於盟友。',
        momentumOptions: [
          {
            cost: 2,
            effect: '所有受影響的盟友可各移除一項物理或心智傷勢。'
          },
          {
            cost: 2,
            effect: '法術範圍擴大至中距離。'
          }
        ],
        description: '族靈是守護部族的祖靈與顧問，保護著家族的血脈。透過拉古茲符文，這些靈體可被召喚，以展現治癒與再生之力。運用強大的符文咒語「族靈之恩」，符文編織者可喚起族靈的治療之手，撫平創傷，甚至讓倒下的戰士重返戰場。'
      },
      {
        englishName: 'Bounty of Baldr',
        chineseName: '巴德爾的庇佑',
        skill: '韌性',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '等同施法者威能值的回合數',
        category: '結界法術',
        effect: '在法術持續期間內，針對施法者或近距離內盟友的所有攻擊，其難度皆增加+2。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: '每點動力',
            effect: '所有受影響角色獲得+X掩蔽抗性，其中X為所消耗的動力數量。'
          }
        ],
        description: '此強大的符文護盾與奧吉茲符文相關，並藉由最受阿薩神族愛戴的巴德爾之力，形成一層神祕防禦。符文在施法者與其同伴周身閃耀，如同以神聖之光遮蔽，使敵方攻擊難以命中，惡意之力亦大幅削弱。'
      },
      {
        englishName: 'Curse of Loki',
        chineseName: '洛基的詛咒',
        skill: '說服',
        difficulty: 2,
        cost: '5🎲消耗；此外，每擲出一個傷害效果會額外產生1威脅',
        duration: '即時',
        category: '攻擊法術',
        effect: '施法者對近距離內所有敵人造成「威能+2」的心智傷害，並附帶震懾效果。',
        flawedSpell: '若為缺陷版本，詛咒影響近距離內所有生物，而不僅限於敵人。',
        momentumOptions: [
          {
            cost: 2,
            effect: '為此法術添加「持續6」效果。'
          },
          {
            cost: 2,
            effect: '為此法術添加「纏縛」效果。'
          }
        ],
        description: '詭計之王洛基是符文觀者的恰當庇主。施法者運用納歐帝茲符文之影，播下混亂與恐懼。受此詛咒影響的敵軍、角色或生物，將目睹來自冰原的巨人與怪物幻象，被錯亂與驚懼吞噬。'
      },
      {
        englishName: 'Hammer of Thunraz',
        chineseName: '索爾之鎚',
        skill: '戰鬥',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '即時',
        category: '攻擊法術',
        effect: '施法者可鎖定中距離內單一敵人或物體，造成「威能+2」的物理傷害，並附帶區域效果。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 1,
            effect: '將區域效果替換為穿透2效果。'
          },
          {
            cost: 2,
            effect: '添加兇猛效果。'
          },
          {
            cost: 2,
            effect: '添加震懾效果。'
          }
        ],
        description: '符文編織者調動蘇里薩茲符文之力，喚起雷神索爾的傳奇戰鎚妙爾尼爾，召來震天的雷霆打擊敵人。暴風湧現，閃電縱橫，施法者化為風暴的中心，雷電之力擊碎一切。'
      },
      {
        englishName: 'Ravens of Wodan',
        chineseName: '奧丁之鴉',
        skill: '學識',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '等同施法者威能值的回合數',
        category: '結界法術',
        effect: '法術持續期間內，施法者與其近距離內所有盟友皆獲得等同施法者威能值的額外士氣抗性。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '所有受影響盟友的近戰攻擊傷害+2🎲。'
          },
          {
            cost: 3,
            effect: '施法者可使一位或多位受影響盟友各獲得1點臨時命運點；若在法術結束前未使用，該命運點即失效。'
          }
        ],
        description: '符文觀者織出恩索茲符文之印，喚起眾父奧丁——懸掛之神、戰爭之主、芙莉嘉的配偶——的神威。祂派出雙鴉胡金與穆寧，賜予盟友瓦爾哈拉勇士的戰魂。受「奧丁之鴉」祝福者能抵抗恐懼，並以更堅定的勇氣與英勇奮戰，在戰場上展現無畏的英雄氣概。'
      },
      {
        englishName: 'Swiftness of Sleipnir',
        chineseName: '斯雷普尼爾之迅',
        skill: '求生',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '即時',
        category: '祝福法術',
        effect: '施法者與近距離內所有盟友可立即移動至多兩個區域。此外，在施法者下個回合開始前，任何盟友若選擇使用「保持先機」皆不需花費動力。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '所有受影響角色在其下個回合可免費執行一次額外副動作。'
          }
        ],
        description: '符文編織者召喚耶瓦茲符文之力，解放奧丁座騎「斯雷普尼爾」的迅捷本質。此八足之駒為洛基與斯瓦迪法里所生，是世間最優與最快的神馬。'
      },
      {
        englishName: 'Wisdom of Frigg',
        chineseName: '芙莉嘉的睿智',
        skill: '觀察',
        difficulty: 1,
        cost: '3🎲消耗，震懾',
        duration: '即時',
        category: '占卜法術',
        effect: '施法者可鎖定中距離內一名生物，立即獲得+3獎勵動力，但此動力僅能用於「獲取情報」或進行「創造真理」主動作；所創造的真理必須與目標生物的弱點有關。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '若目標擁有「無敵」特殊規則，則該規則失效，持續回合數等同施法者威能值。'
          },
          {
            cost: 2,
            effect: '直到場景結束前，施法者與其盟友對該生物的攻擊可選擇獲得「強烈」或「兇猛」傷害效果。'
          }
        ],
        description: '智慧與洞察之女神芙莉嘉以肯納茲符文為象徵。符文編織者呼喚其火焰與知識之力，以洞悉敵人的弱點並加以利用。當此法術釋放時，神話生物變得易受凡俗武器所傷，而法術威能亦隨之倍增。'
      }
    ],

    '神諭法典': [
      {
        englishName: 'Augury',
        chineseName: '占兆',
        skill: '觀察',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '最長二十四小時',
        category: '顯現法術',
        effect: '施法者花費十分鐘觀察鳥類行為，以判斷天命吉凶。由遊戲主持人決定下列哪種結果生效：\n吉兆：命運眷顧當前行動。在法術持續時間內，施法者可重新擲一次技能檢定的任意數量骰，之後法術結束。\n凶兆：當前行動違逆命運，但占兆者獲得警示。在法術持續期間，當遊戲主持人以威脅創造真理（如引入糾葛或變更情境）時，施法者可忽略該真理效果，之後法術結束。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '延長持續時間二十四小時。'
          },
          {
            cost: 2,
            effect: '由施法者自行決定為吉兆或凶兆。'
          }
        ],
        description: '占兆為古羅馬宗教儀式，透過觀察鳥類的行為來解讀神的旨意。執行此術者稱為「占兆者」，整個過程稱為「取兆」。根據所見鳥類不同，預兆可為吉兆或凶兆。'
      },
      {
        englishName: 'Guiding Hand',
        chineseName: '引導之手',
        skill: '戰術',
        difficulty: 2,
        cost: '2🎲消耗，穿透1',
        duration: '二十四小時',
        category: '祝福法術',
        effect: '神諭者對近距離內一位盟友低語未來的徵兆。於法術期間內，該盟友每當消耗命運點時，可擲1🎲。若結果為😈，該命運點立即返還（每次僅能恢復1點）。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '延長持續時間二十四小時。'
          },
          {
            cost: 2,
            effect: '擲骰時改為2🎲。'
          }
        ],
        description: '只需對未來的一絲窺見，神諭者便能引導同伴穿越危險。即使是隱晦的暗示，也能使人對將至的危機有所準備。'
      },
      {
        englishName: 'Invoke the Parcae',
        chineseName: '祈喚帕爾刻',
        skill: '說服',
        difficulty: 4,
        cost: '4🎲消耗，震懾',
        duration: '即時',
        category: '祝福或詛咒法術',
        effect: '神諭者可向帕爾刻祈求改變命運，作為對任何近距離技能檢定（友方或敵方）的反應，選擇以下一項效果：\n關鍵成功：將檢定中一顆d20改為1（自動產生兩次成功）。\n糾葛：將檢定中一顆d20改為20，產生糾葛。\n重擲：迫使目標（友方或敵方）重擲所有檢定骰池。\n施法後，目標獲得創傷「命運須守平衡」，其技能檢定的糾葛範圍增加+1，直到施法者於之後的技能檢定中擲出糾葛為止。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '同時選擇兩種效果。'
          },
          {
            cost: 2,
            effect: '可作為對中距離技能檢定的反應施放。'
          },
          {
            cost: 3,
            effect: '可作為對遠距離技能檢定的反應施放。'
          }
        ],
        description: '帕爾刻，又稱「憐憫者」，為三位命運女神，編織著凡人與神祇的命運。即便眾神亦須遵循她們的裁決，唯有展現足夠敬意的凡人，方可獲其垂憐。'
      },
      {
        englishName: 'Prescience',
        chineseName: '預知',
        skill: '觀察',
        difficulty: 3,
        cost: '4🎲消耗',
        duration: '最長二十四小時',
        category: '祝福法術',
        effect: '神諭者於法術期間獲得真理「未來之視」。可於此期間的任一時刻使用該真理於一次技能檢定上，之後法術結束。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '使用「未來之視」後，法術不會結束。'
          },
          {
            cost: 2,
            effect: '神諭者可改為將「未來之視」賦予他人。'
          }
        ],
        description: '預知乃神諭者窺見未來事件的能力，常於夢境中降臨。這些景象需以洞察解析，才能辨明其意義。'
      },
      {
        englishName: 'Scrying',
        chineseName: '探知術',
        skill: '觀察',
        difficulty: 2,
        cost: '2🎲消耗，穿透1',
        duration: '等同施法者威能值的回合數',
        category: '占卜法術',
        effect: '神諭者選擇近距離內一個已知物體或地點，即可清晰觀察該對象之全貌，包括被遮蔽部分（如密封卷軸文字、鎖住的箱內物品、封閉房間等）。在持續時間內，每回合最多可切換至另一目標。在此期間消耗動力以「獲取情報」時，可得知一般感知無法察覺之事。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: '1/2/3',
            effect: '消耗1動力：可選擇中距離目標；2動力：遠距離目標；3動力：地球上任何熟悉地點（需先知道其存在）。'
          },
          {
            cost: 3,
            effect: '改為觀察距離內的物體，獲得其部分過往記憶。可再花獎勵動力「獲取情報」以詢問該物件歷史。部分過往影像可能晦暗、恐怖，甚至具危險性。使用此選項時，無法延伸距離。'
          }
        ],
        description: '神諭者注視煙霧、火焰或靜水等媒介，獲得遠方景象的幻視，洞察原本無法知曉之事。'
      },
      {
        englishName: 'Second Sight',
        chineseName: '祕視',
        skill: '觀察',
        difficulty: 2,
        cost: '3🎲消耗，穿透1',
        duration: '一小時',
        category: '祝福法術',
        effect: '施法者選擇自己或近距離內一名盟友。目標角色的視覺相關技能檢定難度降低2，忽略黑暗造成的難度與糾葛範圍增加，並可嘗試原本因黑暗而不可能進行的檢定。於法術持續期間內，目標獲得真理「看見未見」。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: '1-5',
            effect: '每消耗1點動力，可額外選擇一名盟友作為目標。'
          }
        ],
        description: '看穿幻象與理性之幕的能力被稱為「祕視」。神諭者能暫時賜予此「真視」之恩，使同伴洞察隱匿之物。'
      }
    ],

    '凱爾特法典': [
      {
        englishName: 'Bounties of the Dagda',
        chineseName: '達格達的恩賜',
        skill: '醫學',
        difficulty: 2,
        cost: '4🎲消耗',
        duration: '即時',
        category: '結界法術',
        effect: '近距離內所有盟友立即移除等同德魯伊威能值的壓力。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 1,
            effect: '範圍內所有被擊敗的盟友立刻從被擊敗狀態中回復。'
          },
          {
            cost: 2,
            effect: '所有受影響盟友各移除1項傷勢（物理或心智）。'
          },
          {
            cost: 2,
            effect: '改為影響中距離內的盟友。'
          }
        ],
        description: '如同以希伯尼亞德魯伊神達格達之神鍋為名的奇器，這道附魔能滋養並恢復鄰近萬物之生機。流血得以復原、傷口縫合、斷骨癒合；甚至傳言，死者亦可再起，重返戰場。'
      },
      {
        englishName: 'Cyclone of Cernunnos',
        chineseName: '瑟努諾斯之颶',
        skill: '求生',
        difficulty: 2,
        cost: '4🎲消耗，穿透1',
        duration: '等同施法者威能值的回合數',
        category: '召喚法術',
        effect: '在中距離內一個區域召喚一個風颶。風颶在行動序中有自己的回合，且無法被攻擊或承受任何傷害。施放時與其每個回合開始時，風颶對其近距離內所有生物與可受損物體造成「威能+1」的物理傷害，並附帶「穿透1」與「震懾」；之後風颶移動至相鄰區域。對超自然生物造成的傷害另附帶「兇猛」效果。\n每當風颶移動時，若施法者距離其在中距離內，施法者可選擇移動方向；若距離超過中距離，風颶改為停留不動；遊戲主持人可花費1點威脅使風颶改為移動。',
        flawedSpell: '施法者無法控制風颶的移動，且遊戲主持人不需花費威脅即可令風颶移動。',
        momentumOptions: [
          {
            cost: '每1動力',
            effect: '風颶造成的傷害+1🎲。'
          }
        ],
        description: '德魯伊以意志凝成旋捲漩渦，朝敵方釋放，足以釀成駭人浩劫。此颶風對神話生物尤為致命，對凡人的毀傷之外還會強化其傷害；然而，距離施法者愈遠，控制力愈衰，風眼將開始任意偏移，最終自行消散。'
      },
      {
        englishName: 'Gaze of Balor',
        chineseName: '巴洛爾之眼',
        skill: '說服',
        difficulty: '2（由目標的意志+韌性對抗）',
        cost: '5🎲消耗，震懾',
        duration: '即時',
        category: '攻擊法術',
        effect: '以中距離內單一敵人為目標，造成「威能+2」的心智傷害，並附帶「強烈」。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '附加「消耗」傷害效果。'
          },
          {
            cost: 2,
            effect: '附加「持續6」傷害效果。'
          }
        ],
        description: '引動福摩爾王之力，兇厲目光直擊敵魂。從德魯伊身上擴散的虛耗弧光，令目標雙膝發軟、四肢顫抖、靈魂戰慄；受其所害者常會丟下武器、轉身逃逸、語無倫次。'
      },
      {
        englishName: 'Gift of Arduinna',
        chineseName: '阿爾杜因娜之賜',
        skill: '求生',
        difficulty: 3,
        cost: '4🎲消耗',
        duration: '總回合數等同施法者威能值，平均分配給所有受影響目標（小數無條件捨去）',
        category: '祝福法術',
        effect: '影響施法者與其近距離內的盟友，總目標數上限為施法者威能值。期間內，每當目標以副動作或主動作移動時，可額外多移動1個區域；且每個自己的回合可免費執行1次額外副動作。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: '每2動力',
            effect: '施法者或單一受影響盟友可在其一個回合中多獲得1次主動作（須在法術結束前使用；每名角色以此法至多獲得1次主動作）。'
          }
        ],
        description: '受阿爾杜因娜（阿登森林之主）的庇佑者，能更迅捷地行軍，無視疲勞影響，迅速再武裝，且在戰鬥中展現雙倍效率；亦可無礙穿越林地、崎嶇地形與溪流。'
      },
      {
        englishName: 'Horn of Néit',
        chineseName: '涅特之角',
        skill: '求生',
        difficulty: 1,
        cost: '4🎲消耗',
        duration: '等同施法者威能值的回合數',
        category: '詛咒法術',
        effect: '以施法者中距離內所有敵對生物為目標。施法者擲出等同其威能值的挑戰骰，將擲出之效果😈數與每個目標的運動等級比較；若目標體型大於人類，將其「規模」加至運動等級。\n運動低於效果數😈的生物承受「纏縛」效果，且除嘗試掙脫外，不能進行任何物理行動。掙脫需通過難度等同於效果數的敏捷+運動或體魄+運動檢定。法術結束時，所有被纏者自動獲釋。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: '每1動力',
            effect: '另令一名遠距離內的生物也受到影響。'
          },
          {
            cost: '每1動力',
            effect: '施法者額外擲+1🎲。'
          }
        ],
        description: '導引凱爾特戰神的詛咒，德魯伊召喚一支神祕之角，號聲令大地本身反撲。幽影的根鬚、藤蔓與樹枝竄出纏縛四肢，使獵物掙扎無用，在施術者面前成為待宰之物。被「涅特之角」困住者在法術結束前無法移動或行動。'
      },
      {
        englishName: 'The Ogham Sign',
        chineseName: '歐甘聖符',
        skill: '學識',
        difficulty: 3,
        cost: '5🎲消耗，穿透1',
        duration: '即時',
        category: '放逐法術',
        effect: '以中距離內單一超自然生物為目標，造成「威能+2」的心智傷害，並附帶「消耗」與「穿透2」，即使其通常免疫心智攻擊（此時視為勇氣抗性為6）。若此術使其承受一個以上心智傷勢，該生物於本場景餘下時間失去「無敵」特殊規則的效益。若其被此術擊敗，則立刻消失，被放逐回其本源界域。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '附加「強烈」效果。'
          },
          {
            cost: 2,
            effect: '附加「震懾」效果。'
          }
        ],
        description: '汲取神聖字母的威能，此術對神話生物極其致命；若其僥倖存活，也會被大幅削弱。'
      },
      {
        englishName: 'Roots of the Earth',
        chineseName: '大地之根',
        skill: '求生',
        difficulty: 2,
        cost: '3🎲消耗，震懾',
        duration: '即時',
        category: '祝福法術',
        effect: '影響施法者與其近距離內的盟友，總目標數上限為施法者威能值的一半（無條件進位）。受影響角色瞬間消失，並在視線所及的遠距離任一點再現。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '所有傳送的生物獲得+2掩蔽抗性，直到施法者下個回合開始。'
          }
        ],
        description: '觸及「空心丘陵」居民所知的遠古脈道與隱祕樹根，施法者將自身與同伴（非敵對或拒絕者）傳送至近處位置；眾人如被大地吞沒般消失，轉瞬在所願之處再現，甚至可出現在敵陣後方。'
      },
      {
        englishName: 'Spear of Lug',
        chineseName: '盧格之槍',
        skill: '戰鬥',
        difficulty: 3,
        cost: '5🎲消耗，穿透1',
        duration: '即時',
        category: '攻擊法術',
        effect: '鎖定中距離內單一敵人或物體，造成「威能+2」的物理傷害，並附帶「穿透3」。',
        flawedSpell: null,
        momentumOptions: [
          {
            cost: 2,
            effect: '附加「強烈」效果。'
          },
          {
            cost: 2,
            effect: '附加「兇猛」效果。'
          }
        ],
        description: '德魯伊專注意志，呼喚凱爾特神盧格之力，凝為一柄鮮亮的活體長槍，投擲而出以施毀滅。此槍奉行施術者之意，無可阻擋，穿透障礙，無視一切掩蔽與護甲，必中其獵物。'
      }
    ],

    '符文儀式': [
      {
        englishName: 'Baldur\'s Shield',
        chineseName: '巴德爾之盾',
        skill: '求生',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '30分鐘',
        category: '儀式',
        effect: '施行者指定任意數量的保護目標。儀式步驟數=目標數；欲獲保護，目標在最後一步完成時必須處於施行者的【距離】內。自最後一步結束起，儀式為距離內所有指定目標抵禦「單一類型」的攻擊或危害（物理、心智或魔法），賦予等同施行者【威能值】的額外抗性。針對物理攻擊與危害：賦予掩蔽抗性；針對心智攻擊與危害：賦予士氣抗性；針對魔法攻擊：若造成物理傷害，視同掩蔽抗性；若造成心智傷害，視同士氣抗性。',
        flawedSpell: '儀式貌似成功，但在持續時間內，每一位受影響角色第一次承受所選類型的攻擊或危害時，該次所受傷害額外+2🎲。',
        momentumOptions: [],
        requirements: '儀式工具、血之犧牲',
        maxStress: 15,
        steps: '1+',
        description: '這個防護儀式用以偏轉、吸收或驅退可能對儀式施行者及其夥伴造成傷害的魔法、投射物與物理攻擊或危害。此強大的祕儀呼喚神祇巴德爾賜下祂的庇佑——因萬物皆曾起誓不傷害祂，唯有卑微的槲寄生例外。'
      },
      {
        englishName: 'Bless or Blight the Land',
        chineseName: '祝福或枯萎大地',
        skill: '求生',
        difficulty: 4,
        cost: '6🎲消耗、穿透2',
        duration: '永久（或直至施行相反儀式）',
        category: '儀式',
        effect: '祝福：在受祝福的地區中，所有角色進行以「求生」為基礎的採集技能檢定時，其難度降低1。若使用「六角探索」規則，則該區域的六角資源數量加倍。\n詛咒：在受詛咒的地區中，所有角色進行以「求生」為基礎的採集技能檢定時，其難度增加+1。若使用「六角探索」規則，則該區域的六角資源數量減半。',
        flawedSpell: '若儀式施行者在進行祝福或詛咒土地的儀式時發生施法失誤，結果可能與原意相反。原欲使土地繁茂的「祝福大地」儀式，可能反令瘟疫或枯萎蔓延；反之，若「詛咒大地」儀式發生施法失誤，則其效果轉為「祝福大地」。',
        momentumOptions: [],
        requirements: '儀式工具、待祝福／枯萎之土地樣本。祝福：果實或穀物、淨水；枯萎：一滴施行者之血或受詛咒之物、被投毒的水',
        maxStress: 20,
        steps: '3',
        description: '此儀式可依儀式施行者的意圖與執行方式，用於祝福或詛咒土地。儀式需取自欲祝福或詛咒之地的一小部分樣本，並配合標準的儀式工具。受影響的範圍半徑達六英里，或在《臨戰克蘇魯：六角探索、隨機遭遇與定居地工具包》中對應地圖的一個六角區域。'
      },
      {
        englishName: 'Craft Tarnkappenstein',
        chineseName: '製作隱身石',
        skill: '潛匿',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '隱身石的效力維持1小時',
        category: '儀式',
        effect: '儀式完成時產出1顆隱身石。角色可將其含於口中，獲得「不可見」真理，最長1小時；且在持續時間內，只要石頭在口中，針對該角色的「觀察」相關檢定與攻擊之難度各+2。',
        flawedSpell: '儀式貌似成功，但第一位嘗試使用隱身石的角色，其口中之石會溶解並視為一劑毒藥。',
        momentumOptions: [],
        requirements: '儀式工具、動物犧牲、1點資源',
        maxStress: 10,
        steps: '2',
        description: '此儀式使施行者能製作出「隱身石」，又稱「隱形斗篷之石」。儀式施行者需獻上一隻「能於夜影中無聲行動的黑犬」作為犧牲，向諸神奉祭，以換取牠那隱蔽於暗中的天性。為製作隱身石，必須取一隻全身無一絲白毛的黑犬之心臟，以雲杉纏裹埋於土中九夜。第十日，將心臟取出，以一顆刻有符文的石頭取而代之；此石賦予持有者「隱形」之力。'
      }
    ],

    '神諭儀式': [
      {
        englishName: 'Helios\'s Concealment',
        chineseName: '海利歐斯之隱',
        skill: '學識',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '直到次日黎明',
        category: '儀式',
        effect: '儀式使施行者或其一名同伴在完成瞬間（需處於施行者【距離】內）自凡俗視線中隱沒，賦予其「凡俗之眼不可見」之真理至持續時間結束。此外，在儀式持續期間，該目標每次進行與「潛匿」相關的檢定時，首次以動力購買的第1顆d20不需花費動力。',
        flawedSpell: '儀式仍會如預期隱蔽目標，但方式錯誤：凡人與其他凡俗生物仍受「凡俗之眼不可見」影響；超自然與神話生物本就不受該真理影響，且牠們「觀察」相關檢定的難度再-1。',
        momentumOptions: [],
        requirements: '儀式工具',
        maxStress: 10,
        steps: '1',
        description: '此儀式呼喚太陽神海利歐斯，使儀式施行者或其夥伴在日落前隱形，直至太陽神再度降臨世間。「取夜鴞之脂肪或眼睛，甲蟲所滾之糞丸，以及未熟橄欖油，將這些材料混合研磨至滑順，然後塗抹於全身，並向海利歐斯祈言。」'
      },
      {
        englishName: 'Visions of Distant Shores',
        chineseName: '遙岸幻視',
        skill: '觀察',
        difficulty: 3,
        cost: '5🎲消耗，穿透2',
        duration: '一小時',
        category: '儀式',
        effect: '儀式施行者可進行遠距離觀視，以某種形式觀察遙遠地區與事件，獲得其中人物、物件與狀況的線索。然而視象並非總是清晰，往往需經解讀或詮釋。',
        flawedSpell: '儀式施行者僅獲得模糊或扭曲影像，並因心靈反噬失去1點【命運點】；此外，可能引來惡意存在的注視。',
        momentumOptions: [],
        requirements: '儀式工具、一幅地圖或可代表觀察地點的物品',
        maxStress: 15,
        steps: '3',
        description: '能從遠方窺見他地與事件的力量極為強大，但不應輕率嘗試。超越自身感官界限去觀察外界，可能引發精神與肉體的極度疲憊，甚至理智喪失。然而，成功施行「遙岸幻視」的儀式施行者，能洞察他人的行動、揭露隱祕的真理，並更深刻地理解世界的全貌。'
      }
    ],

    '凱爾特儀式': [
      {
        englishName: 'Balm of Belenus',
        chineseName: '貝勒努斯之膏',
        skill: '醫學',
        difficulty: 2,
        cost: '3🎲消耗',
        duration: '瞬間',
        category: '儀式',
        effect: '儀式施行者指定【距離】內一個生物，選擇治癒「物理」或「心智」傷勢。每完成一步，即可立即移除一項所選類型的傷勢且不留創傷。若改為解除疲勞，完成一步即可清除目標所有【疲勞】。此兩種效果可組合，例如施行三步者可同時移除全部疲勞與兩項物理傷勢（各耗一步）。',
        flawedSpell: '儀式仍會移除傷勢或疲勞，但方式錯誤：每移除一項傷勢，目標即獲得同類型【創傷】，且不得進行抗拒檢定。若移除疲勞，則僅解除一半（向下取整）。並且，每移除一項傷勢，儀式施行者承受一項相同類型的傷勢——治癒之力以同感痛楚為代價啟動。',
        momentumOptions: [],
        requirements: '儀式工具',
        maxStress: 10,
        steps: '1+（由遊戲主持人裁定）',
        description: '此儀式呼喚光輝凱爾特神祇「貝勒努斯」的治癒之力，用以療癒深重創傷、撫慰因大規模戰鬥而破碎的心靈，或修復被奧祕恐懼所摧殘的精神。'
      },
      {
        englishName: 'Commune with Dead',
        chineseName: '與亡靈溝通',
        skill: '說服',
        difficulty: 3,
        cost: '3🎲消耗，穿透1',
        duration: '一小時',
        category: '儀式',
        effect: '「與亡靈溝通」法術使尋求指引、知識或心靈解脫的儀式施行者，得以與亡者之靈魂交流。成功的亡靈溝通可能以多種形式出現，例如夢境、幻視，或透過施行者的聲音與身體進行直接對話。然而，這些經驗對施行者而言往往造成極大的情感負擔，應以謹慎之心面對。與亡靈溝通往往伴隨代價。靈魂可能要求供品或恩惠以換取協助，而其要求往往難以預測，甚至危險。',
        flawedSpell: '儀式施行者無法接觸亡靈，並因反噬失去1點【命運點】；可能惹怒亡靈，或吸引惡靈覬覦。',
        momentumOptions: [],
        requirements: '儀式工具、亡者的私人物品、食物或飲品供品',
        maxStress: 10,
        steps: '2',
        description: '能與亡靈對話的力量極其強大，卻也充滿危險。與死者之靈對話，尤其是被摩莉甘、奧迦斯或赫爾等死之神祇奪走的靈魂，往往導致施行者的理智受創，靈魂陷於危險之中，因這些恩惠從不無代價。'
      }
    ]
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