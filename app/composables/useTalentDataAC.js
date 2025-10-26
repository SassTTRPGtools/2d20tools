// 天賦數據模組 - Cohors Cthulhu RPG 天賦系統

export const useTalentDataAC = () => {
  // 天賦數據庫
  const talentsDatabase = {
    '載具': [
      {
        englishName: 'Combat Gunner',
        chineseName: '戰鬥炮手',
        keywords: '〈載具〉',
        content: '你受過駕駛戰鬥載具與操控車載武器的訓練。當你使用載具上裝設的武器進行攻擊時，可用載具技能代替戰鬥技能。'
      },
      {
        englishName: 'Drive All Night',
        chineseName: '通宵駕駛',
        keywords: '〈載具〉',
        content: '你習慣長時間駕駛。當你操作載具時，可用載具技能代替韌性，以抵抗因疲勞或睡眠不足造成的檢定。'
      },
      {
        englishName: 'Off-Road',
        chineseName: '越野專家',
        keywords: '〈載具〉',
        content: '即便車輛設計不佳，你仍能在崎嶇地形中駕馭自如。當你進行載具地形檢定時，將難度減少 1。'
      },
      {
        englishName: 'Smuggler',
        chineseName: '走私者',
        keywords: '〈載具〉',
        content: '你熟悉如何在車輛中藏人或隱匿物資。當你試圖在車輛內藏匿角色或物品時，可用載具技能代替潛匿，並可重擲骰池中的 1 顆 d20。'
      },
      {
        englishName: 'Still in Control',
        chineseName: '穩中掌控',
        keywords: '〈載具〉',
        content: '即使車輛失控，你仍能維持一定掌握。當你操作的載具出現糾葛時，你可自行決定其影響結果，但遊戲主持人可否決任何不合情境的結果。'
      },
      {
        englishName: 'Strafing Run',
        chineseName: '掃射專家',
        keywords: '〈載具〉、〈進階〉',
        content: '你擅長在高速中精準掃射，造成致命火力。當你駕駛載具並使用武器進行齊射攻擊時，可無視因車速或地形顛簸所造成的難度或糾葛範圍增加。'
      },
      {
        englishName: 'Speed Demon',
        chineseName: '極速狂人',
        keywords: '〈載具〉',
        content: '城市街道？鄉間小路？高空雲端？無論何處皆是你的遊樂場，只要能開快你就如魚得水。你駕駛、飛行或操縱的任何載具，其基礎速度增加 1。當你以載具進行延伸檢定成功時，可在壓力骰上額外加入 2🎲 以推進任務進度。'
      },
      {
        englishName: 'Three Wheels on My Wagon',
        chineseName: '我的三輪馬車',
        keywords: '〈載具〉',
        content: '你知道如何從每輛車中榨取最大效能，並以堅毅與意志克服任何損壞或機械故障。當你操作載具時，該載具需額外承受 1 點傷害（超出其正常傷害閾值）才會被判定為毀損。'
      }
    ],
    '異質': [
      {
        englishName: 'Bizarre Insight',
        chineseName: '詭異洞見',
        keywords: '〈異質〉',
        content: '你的心智偶爾會浮現出常人無法理解的片段啟示。每場景可產生 1 點威脅，直接進行一次「獲取情報」行動（向遊戲主持人提出一個問題），無需進行技能檢定。'
      },
      {
        englishName: 'Foreboding Survival',
        chineseName: '預感倖存',
        keywords: '〈異質〉',
        content: '某種無形之力似乎多次引導你避開災厄——然而厄運卻降臨在他人身上。每場劇本中一次，當你即將承受傷勢時，可產生 3 點威脅以避免該傷勢。\n由遊戲主持人裁定時，你也可能以產生 3 點威脅為代價，避免其他形式的不幸。'
      },
      {
        englishName: 'Minor Pact',
        chineseName: '微小契約',
        keywords: '〈異質〉',
        content: '你發現若夜裡留下一些食物與飲料，隔日便會消失，且會有好事發生。若你持續這些供奉，每次冒險開始時獲得額外 1 點命運。\n經由遊戲主持人裁定，若提供更豐盛或重要的供品，可能獲得更大的回報。'
      },
      {
        englishName: 'Mystical Power',
        chineseName: '神祕之力',
        keywords: '〈異質〉（僅限施法者）',
        content: '你深入探索神話體系與時間的祕密，從禁忌知識中獲得更強的魔法能力。\n你獲得一項新的角色真理：「窺見凡人不該知之事（Glimpsed What Mortals Should Not Know）」或類似描述其代價的真理。\n當你施放法術時，可使威能增加 +2🎲。若如此做，每位近距離內的盟友將因暴露於不可名狀的知識而承受等同於每個效果🎲的精神壓力。'
      },
      {
        englishName: 'Numb to the Horrors',
        chineseName: '麻木於恐怖',
        keywords: '〈異質〉',
        content: '血腥與暴力對你幾乎毫無影響。你的勇氣抗性提高 +6，並可在判定是否獲得精神傷疤的技能檢定中重擲 1 顆 d20。\n然而，你冷漠的態度讓人不安，使你進行的所有說服檢定之糾葛範圍增加 +1。'
      },
      {
        englishName: 'Occult Dabbler',
        chineseName: '祕學涉獵者',
        keywords: '〈施法者〉，〈異質〉',
        content: '你涉足了難以理解的祕學力量。你成為「涉獵魔法」傳統的施法者，詳見第九章〈魔法與神話體系〉。'
      },
      {
        englishName: 'Child of Carcosa',
        chineseName: '卡爾科薩之子',
        keywords: '〈異質〉',
        content: '你被「黃印（Yellow Sign）」所標記。無論你曾侍奉那位黃衣之王，或只是其信徒的受害者，你已被其詛咒奪取。你面色蒼白、體弱多病，常陷於疲憊。真正的恐怖在於你能將這詛咒傳染他人。每場遊戲一次，當你以近戰攻擊成功時，可為該攻擊附加持續 4（Persistent 4）效果。'
      },
      {
        englishName: 'Empath',
        chineseName: '共感者',
        keywords: '〈異質〉',
        content: '荷蘭形上學者與超心理學家已研究超感知覺數十年。無論你是天生敏感，還是某事件喚醒了你的天賦，你皆能準確感知他人情緒。每場景一次，你可免費獲取一名中距離角色的情緒狀態資訊。'
      },
      {
        englishName: 'Impish Familiar',
        chineseName: '惡作靈契',
        keywords: '〈異質〉',
        content: '你與安德拉薩惡靈（Andrasian Imp）締結契約，這是狡詐而邪惡的魔性生物。透過儀式、祭品或奇異事件，它成為你的夥伴，卻又多變難測。它每場任務僅能被召喚一次，持續 2🎲 個場景。此惡靈視為你的盟友 NPC，受你指揮。若牠因敵人行動或意外而死，你立即獲得 1 點命運，並可選擇重新訓練此天賦（或召喚新惡靈）或改學其他天賦。'
      },
      {
        englishName: 'Psychic Power',
        chineseName: '靈能之力',
        keywords: '〈異質〉，命運',
        content: '你探索心靈深處，喚醒了超凡的形上能力。雖未完全掌握，但你能在專注時展現驚人潛能。當你施展「靈能與超感知」法術書（Player\'s Guide 第150頁）中的法術時，可花費 1 點命運，忽略該法術的缺陷（Flawed）狀態。'
      }
    ],

    '求生': [
      {
        englishName: 'Companion',
        chineseName: '夥伴',
        keywords: '〈求生〉',
        content: '你在荒野中並不孤單——你有一隻忠誠的狗作為朋友與盟友。\n這隻狗使用指定的角色資料，視為你指揮下的友方 NPC。當你進行資源採集時，牠會自行覓食。\n若該狗因敵方攻擊或意外喪命，你立即獲得 1 點命運，並可選擇重新訓練此天賦（獲得新狗）或改換其他天賦。'
      },
      {
        englishName: 'Dig for Victory',
        chineseName: '開墾為營',
        keywords: '〈求生〉',
        content: '你善於在荒野中建立舒適與安全的據點。當你進行求生檢定以搭建營地或構築防禦據點時，所需時間減半。'
      },
      {
        englishName: 'Everything I Need Is Here',
        chineseName: '一切所需皆在此',
        keywords: '〈求生〉',
        content: '你充分運用背包與裝備，攜帶的物品比常人更多。你可額外攜帶一項主要物品，此效果可與體魄屬性帶來的額外攜帶加成疊加。'
      },
      {
        englishName: 'Fieldcraft',
        chineseName: '野外匿蹤',
        keywords: '〈求生〉',
        content: '你在荒野環境中如魚得水。於惡劣的自然環境中試圖隱藏或避免被注意時，可使用求生代替潛匿。'
      },
      {
        englishName: 'Survive and Thrive',
        chineseName: '野外生存專家',
        keywords: '〈求生〉',
        content: '你擅長在自然中尋找所需資源。當你進行求生檢定以覓食、取水、收集燃料或必需品時，難度減少 1，並可為每花費 1 點動力額外取得一份食物或飲水。'
      },
      {
        englishName: 'Tracker',
        chineseName: '追蹤者',
        keywords: '〈求生〉',
        content: '你能追蹤最微弱的痕跡。當你進行求生檢定以追蹤動物、人類或異界生物時，第一顆購買的額外 d20 免費。\n若此追蹤為延展任務之一部分，則每擲出一個效果🎲時，額外造成 +1 壓力。'
      },
      {
        englishName: 'Sheltered',
        chineseName: '庇護所',
        keywords: '〈求生〉',
        content: '你有個基地——也許是荒原的抵抗據點、佔領區的安全屋，或貧民區的隱藏房間。每場任務一次，當你造訪此庇護所時，可獲得價值 4 點軍需點的次要或小物品，代表你事前準備的物資。此外，獲得 1 名額外的（潛匿）聯絡人。'
      },
      {
        englishName: 'Urban Scavenger',
        chineseName: '都市拾荒者',
        keywords: '〈求生〉',
        content: '你知道如何在社會縫隙間尋找所需——無論是黑市、地下網絡或佔領區。你獲得三名聯絡人，各自專精於載具、爆裂物、急救、談判或都市潛行之一。'
      }
    ],
    '戰術': [
      {
        englishName: 'Call to Action',
        chineseName: '行動號召',
        keywords: '〈戰術〉',
        content: '你發號施令明確，使盟友能迅速佔據有利位置。於行動場景中，你可花費一個副動作，使一名盟友立即執行一個副動作。\n此外，你可作為主要動作進行一次協調＋戰術檢定（難度 1），成功後可讓數量等同於你戰術技能值的盟友各立即執行一個副動作。\n你必須能與這些盟友溝通，才能讓他們獲得額外行動。'
      },
      {
        englishName: 'Band of Brothers',
        chineseName: '戰友之情',
        keywords: '〈戰術〉',
        content: '你與盟友在共患難中培養了深厚情誼。當行動場景開始時，若團隊動力池中的點數少於擁有此天賦的角色數量，立即向團隊動力池中補充 1 點動力。'
      },
      {
        englishName: 'Convey Intent',
        chineseName: '意傳無聲',
        keywords: '〈戰術〉',
        content: '你不需多言即可讓人明白意圖，有時一個手勢便勝過千言萬語。當你進行戰術檢定以傳達指令或溝通新戰略時，第一顆購買的額外 d20 免費。'
      },
      {
        englishName: 'Decisive Plan',
        chineseName: '果斷策劃',
        keywords: '〈戰術〉',
        content: '你擅長在戰場中迅速提供支援。當你在行動場景中協助盟友時，若能讓該盟友成為下一位行動者，你可**保持先機（Keep the Initiative）**而無需支付動力。'
      },
      {
        englishName: 'Direct',
        chineseName: '指揮行動',
        keywords: '〈戰術〉',
        content: '你的強項在於領導他人。於行動場景中，你可作為主要動作選擇一名能與你溝通的盟友。該盟友可立即執行一個主要動作；若該行動包含技能檢定，你以戰術技能協助其行動。'
      },
      {
        englishName: 'Teamwork',
        chineseName: '團隊合作',
        keywords: '〈戰術〉',
        content: '你的領導讓團隊發揮超越個體總和的力量。當你領導或協助進行技能檢定時，若其中任一角色擁有適用專精，則所有參與者皆視為擁有該專精。\n若該技能檢定為延展任務之一部分，則在🎲池中額外加入 +2🎲 壓力。'
      },
      {
        englishName: 'Guerrilla Warfare',
        chineseName: '游擊戰術',
        keywords: '〈戰術〉，命運',
        content: '你擁有盟友與志同道合的反抗者網絡，能協調突襲、破壞與誘敵。每場任務一次，你可花費 1 點命運召集援軍。四名抵抗戰士／游擊隊員 NPC 會於 2🎲 回合內抵達，並在接下來三個場景中聽從你的指揮。'
      },
      {
        englishName: 'Tactical Genius',
        chineseName: '戰術天才',
        keywords: '〈戰術〉',
        content: '你懂得將盟友的成功化為整體優勢，推動團隊行動。當盟友於近距離內的檢定中獲得致命成功時，你可在下次檢定中重擲 1🎲。這些重擲可用於 d20 或挑戰骰，視戰術技能而定。'
      }
    ],
    '觀察': [
      {
        englishName: 'Constantly Watching',
        chineseName: '時時警戒',
        keywords: '〈觀察〉',
        content: '每當你進行偵測危險或發現隱藏敵人的技能檢定時，將難度減少 1（最低為 0）。'
      },
      {
        englishName: 'Forward Observer',
        chineseName: '前線校射員',
        keywords: '〈觀察〉',
        content: '你為友軍砲火標定目標，協助其命中。若你能與持有間接特性的武器之盟友溝通，你可使用智識＋觀察協助其攻擊；當你這麼做時，該盟友之攻擊難度再降低 1。'
      },
      {
        englishName: 'Lights Out',
        chineseName: '黑暗視覺',
        keywords: '〈觀察〉',
        content: '你在昏暗環境下依然表現優異。你可忽略因低光照造成的難度提升或糾葛範圍增加；但在全然黑暗中仍照常受影響。'
      },
      {
        englishName: 'Ransack',
        chineseName: '翻箱倒櫃',
        keywords: '〈觀察〉',
        content: '你深知時間寶貴，搜查徹底但略顯凌亂。當你進行區域搜尋的觀察檢定時，可產生 2 點威脅：使該檢定之難度降低 1，且搜尋時間減半。'
      },
      {
        englishName: 'Scout',
        chineseName: '斥候',
        keywords: '〈觀察〉',
        content: '你善於快速掌握地形與重點。於行動場景開始時，你可免費提出 1 個問題，效果等同於花費動力以獲取情報。'
      },
      {
        englishName: 'Scrutinise',
        chineseName: '細察入微',
        keywords: '〈觀察〉',
        content: '你總是留心細節。當你在戰鬥外進行觀察檢定並將所需時間加倍時，你購買的第一顆額外 d20免費。'
      },
      {
        englishName: 'A Nose for Poison',
        chineseName: '嗅毒敏銳',
        keywords: '〈觀察〉',
        content: '你精通各種毒物的氣味與味道，知道哪些可被偽裝、哪些見效快、哪些隱蔽。當嘗試偵測或辨識毒物時，檢定難度減少 2（最低為 0）。此外，若你被下毒，只會在每場景結束時承受 1 點疲勞，而非全劑量影響。'
      },
      {
        englishName: 'Three Moves Ahead',
        chineseName: '洞察先機（三步預判）',
        keywords: '〈觀察〉',
        content: '你善於觀察、預測並準備應變。行動場景開始時，可為團隊動力池額外增加 1 點動力，象徵你提前的洞察。'
      }
    ],
    '說服': [
      {
        englishName: 'An Answer for Everything',
        chineseName: '妙辯如流',
        keywords: '〈說服〉',
        content: '你熱愛激烈的辯論，總能洞悉對手論點並反轉局勢。當你在延展任務中成功進行說服檢定時，可重擲數量等同於你說服技能值的🎲。'
      },
      {
        englishName: 'Hog the Spotlight',
        chineseName: '搶佔焦點',
        keywords: '〈說服〉',
        content: '你習慣成為眾人注目的中心，且知道如何吸引所有目光。當你成功以說服檢定分散或吸引他人注意時，可花費 1 點動力，使敵方的所有觀察檢定難度提高 +1。'
      },
      {
        englishName: 'Imposing Presence',
        chineseName: '威嚴氣勢',
        keywords: '〈說服〉',
        content: '你天生具備威懾他人的氣場。當你以近戰武器進行精神攻擊時，可用說服代替戰鬥，並可為該攻擊賦予「穿透 1」或「震懾」武器效果。'
      },
      {
        englishName: 'Reasoned Discourse',
        chineseName: '理性論辯',
        keywords: '〈說服〉',
        content: '你語言精確、邏輯嚴密，能快速傳達複雜資訊。當你以理性取代情感進行溝通或辯論時，將該次說服檢定難度減少 1。'
      },
      {
        englishName: 'Rousing Speaker',
        chineseName: '鼓舞演說者',
        keywords: '〈說服〉',
        content: '你擅長公開演說，能激發聽眾情緒。當你以說服檢定進行鼓舞性演說時，檢定難度減少 1。\n此外，你可於行動場景中以主要動作進行激勵呼喊（難度 1 的意志＋說服檢定）。若成功，所有能聽見你的盟友獲得 2 點勇氣，並可為每花費 1 點動力額外增加 +1 勇氣，效果持續至該場景結束。'
      },
      {
        englishName: 'Subtle Cues',
        chineseName: '細微暗示',
        keywords: '〈說服〉',
        content: '你能洞察他人的情緒，察覺姿態、語氣與表情中的暗示，也擅長偽裝這些線索。當你花時間與某人交談或觀察後，在同場景內對其進行說服檢定時，第一次購買的額外 d20 成本降為 0。'
      },
      {
        englishName: 'Gift of the Gab',
        chineseName: '能言善道',
        keywords: '〈說服〉',
        content: '你擅長交談、溝通、與人打成一片，能讓對方放鬆並接受你的觀點。當你以說服進行延伸檢定時，可將檢定的阻力降低 2（最低為 1）。此外，若說服檢定出現糾葛，你可花費動力而非威脅來消除該糾葛。'
      },
      {
        englishName: 'Menacing Words',
        chineseName: '威懾之言',
        keywords: '〈說服〉、〈進階〉',
        content: '你周身帶有危險氣息，若將其針對某人，對方便會感受到威壓與恐懼。當你以恐嚇、談判或修辭進行技能檢定時，可將糾葛範圍增加 2，以將致命成功範圍加倍（最高至技能等級兩倍）。'
      }
    ],
    '韌性': [
      {
        englishName: 'A Stiff Drink',
        chineseName: '烈酒鎮魂',
        keywords: '〈韌性〉',
        content: '烈酒能讓你穩住心神。將一瓶烈酒隨身攜入個人物品中。當你使用「喘口氣」行動為自己或盟友移除壓力時，若有人飲用此酒，額外移除 1🎲 壓力。\n但若擲出效果，則因酒精麻痺而使你本場景所有技能檢定的糾葛範圍提高 +1。若酒喝完（可能作為糾葛結果），則無法再次使用此天賦，但補充酒水應不成問題。'
      },
      {
        englishName: 'Courageous',
        chineseName: '勇氣十足',
        keywords: '〈韌性〉',
        content: '你不易被嚇倒。獲得等同於你韌性技能值的勇氣抗性。'
      },
      {
        englishName: 'Dauntless',
        chineseName: '無畏不屈',
        keywords: '〈韌性〉',
        content: '每當你進行抵抗恐嚇、威脅、恐懼或驚慌的技能檢定時，你購買的第一顆額外 d20 免費。'
      },
      {
        englishName: 'Extra Effort',
        chineseName: '超限發揮',
        keywords: '〈韌性〉',
        content: '選擇一項屬性。當你以該屬性進行技能檢定時，可消耗疲勞代替動力購買額外 d20，每取代 1 點動力需承受 1 點疲勞。'
      },
      {
        englishName: 'Hard as Nails',
        chineseName: '堅如鐵釘',
        keywords: '〈韌性〉',
        content: '你比他人更為強韌。你的護甲抗性提高 +1。'
      },
      {
        englishName: 'Second Wind',
        chineseName: '再起之息',
        keywords: '〈韌性〉、〈命運〉',
        content: '在你的回合中可作為自由動作，花費 1 點命運以移除你目前所有的壓力。'
      },
      {
        englishName: 'Tough',
        chineseName: '堅毅如山',
        keywords: '〈韌性〉',
        content: '你能承受比常人更多的壓力。你的壓力軌上限增加 +3。'
      },
      {
        englishName: 'Impenetrable Mind',
        chineseName: '堅不可侵之心',
        keywords: '〈韌性〉、〈進階〉',
        content: '你的思緒曲折難測，別人難以讀懂，而超自然恐懼更難影響你。當防禦精神攻擊或心靈入侵時，你購買的每顆額外 d20 皆減少 1 點成本。'
      },
      {
        englishName: 'Relentless',
        chineseName: '不屈不撓',
        keywords: '〈韌性〉',
        content: '你歷經苦難——也許是囚徒、勞工，或僅僅熬過嚴酷寒冬——無論如何，你學會了超越極限。當你採取「喘息（Catch Breath）」主要動作時，可額外花費動力以移除疲勞（每 1 點動力移除 1 點疲勞）。'
      }
    ],
    '潛匿': [
      {
        englishName: 'All the Best Hiding Spots',
        chineseName: '藏匿高手',
        keywords: '〈潛匿〉',
        content: '你很難被偷襲，因為你早已熟知所有最佳藏身之處。任何在你視線範圍內進行潛匿檢定的敵人，其檢定難度提高 +1。'
      },
      {
        englishName: 'Exploit Weakness',
        chineseName: '利用弱點',
        keywords: '〈潛匿〉',
        content: '當你攻擊毫無防備的敵人，或攻擊受「弱點」或「脆弱」真理影響的敵人時，該攻擊獲得「穿透 2」武器效果。'
      },
      {
        englishName: 'Face in the Crowd',
        chineseName: '人群之中',
        keywords: '〈潛匿〉',
        content: '你懂得如何在眾目睽睽下隱藏自己，只要看似合理、行為自然即可。當你身著適當服裝或偽裝時，敵人欲在群眾中以觀察檢定察覺你，其難度提高 +1。'
      },
      {
        englishName: 'Hit and Run',
        chineseName: '打了就跑',
        keywords: '〈潛匿〉',
        content: '你知道敵人會先搜尋攻擊發生的地方，因此你總在那之前撤離。當你成功攻擊毫無防備的目標後，可花費 1 點動力，移動至近距離範圍內，即使該回合已移動亦可。'
      },
      {
        englishName: 'Like a Shadow',
        chineseName: '如影隨形',
        keywords: '〈潛匿〉',
        content: '你行動無聲，即使情況失控也能迅速減低動靜。當場景中包含與敵方警覺或追擊相關的後果軌時，該後果的抗性增加 +2。'
      },
      {
        englishName: 'Perfect Timing',
        chineseName: '完美時機',
        keywords: '〈潛匿〉',
        content: '你總能在千鈞一髮之際抵達目標地。當潛匿檢定有時間限制（如在守衛回頭前抵達、避開移動探照燈等）時，你購買的第一顆額外 d20 成本為 0。'
      },
      {
        englishName: 'False Trail',
        chineseName: '假線索',
        keywords: '〈潛匿〉',
        content: '誤導他人是你的專長。當你在對抗潛匿檢定中成功時，可花費 1 點動力創造一個「真理」，代表追蹤者被誤導或走錯方向。'
      },
      {
        englishName: 'Quick Change',
        chineseName: '快速換裝',
        keywords: '〈潛匿〉',
        content: '時尚即是偽裝的藝術。添上圍巾、更換外套、調換帽子——這些細節足以改變整體印象，使追兵與目擊者困惑。當你進行「準備（Prepare）」副動作時，可調整幾處服裝細節，創造一項與偽裝效果相關的「真理」。'
      }
    ],
    '工程': [
      {
        englishName: 'Demolitions',
        chineseName: '爆破專家',
        keywords: '〈工程〉、〈進階〉',
        content: '你精通製作、安置與拆除爆炸物。當你進行與爆炸裝置相關的工程檢定時，第一次購買的額外骰免費。\n此外，每場景可忽略一次與爆炸物相關的工程檢定所產生的第一次糾葛。'
      },
      {
        englishName: 'Elbow Grease',
        chineseName: '苦幹實幹',
        keywords: '〈工程〉',
        content: '你習慣透過勤奮完成任務。當你進行延展任務中的工程檢定時，每擲出一個效果🎲，可忽略 1 點阻力。'
      },
      {
        englishName: 'Gunsmith',
        chineseName: '槍械匠',
        keywords: '〈工程〉',
        content: '你熟悉槍械的內部構造，並擅長維修與保養。在任務開始時，你可選擇一把隊伍持有的遠程武器，使其獲得「可靠」特性，或移除其「不可靠」特性。'
      },
      {
        englishName: 'Jury Rig',
        chineseName: '臨時修補',
        keywords: '〈工程〉',
        content: '當你嘗試修理機械時，可產生 2 點威脅以將檢定難度降低 1（最低 0），但此修理僅為暫時性。\n該修理在當前場景結束前有效，之後當遊戲主持人花費 2 點威脅時，該裝置將失效。'
      },
      {
        englishName: 'Saboteur',
        chineseName: '破壞者',
        keywords: '〈工程〉',
        content: '你擅長破壞物體。當攻擊物件、建築或固定載具時，可使用工程技能代替戰鬥，並以智識取代體魄或洞察來獲得額外挑戰骰。\n當對此類目標造成壓力時，你可花費 2 點動力，將任意數量的挑戰骰結果轉換為效果🎲，最多不超過你的工程等級。'
      },
      {
        englishName: 'Make Do and Mend',
        chineseName: '修補維生',
        keywords: '〈工程〉',
        content: '你擅長利用機械零件製造所需資源。你可花費半小時拆解一台機械，並進行一次難度 1 的洞察＋工程檢定。\n若成功，可獲得足夠零件以補充機械工具或電工工具的資源。此檢定可在代價下成功，該被拆解的物品將報廢。'
      },
      {
        englishName: 'Bottomless Pockets',
        chineseName: '無底口袋',
        keywords: '〈工程〉',
        content: '你有滿滿的袋子與包包，裡頭裝滿零件與半成品裝置。你可攜帶額外兩件次要物品而不受累贅影響。任務開始時可選擇一組能產生動力的技能工具組，使該工具組額外獲得 1 點可用於購買 d20 的動力。'
      },
      {
        englishName: 'Fine Tuning',
        chineseName: '微調',
        keywords: '〈工程〉',
        content: '你習慣調校難以駕馭的新裝備或科技原型，花時間測試與修正。任務開始時，可選擇團隊擁有的一件具實驗性（Experimental）特性的裝備，該裝備每場景第一次產生糾葛可被忽略。'
      }
    ],
    '戰鬥': [
      {
        englishName: 'Defensive',
        chineseName: '防禦專家',
        keywords: '〈戰鬥〉',
        content: '你特別擅長閃避傷害。選擇一項攻擊類型：近戰攻擊或遠程攻擊。針對你的該類攻擊難度提高 +1。\n此天賦可選兩次，分別對應兩種攻擊類型。'
      },
      {
        englishName: 'Five Rounds Rapid',
        chineseName: '五連速射',
        keywords: '〈戰鬥〉',
        content: '你能以猛烈火力壓制敵人。當你進行遠程攻擊並花費彈藥進行齊射時，第一次購買的額外骰免費。'
      },
      {
        englishName: 'Guardian',
        chineseName: '守護者',
        keywords: '〈戰鬥〉',
        content: '你習慣挺身擋下攻擊。當近距離內的盟友成為攻擊目標時，你可立即進行反應，迫使攻擊者改以你為目標。'
      },
      {
        englishName: 'Mean Right Hook',
        chineseName: '重拳出擊',
        keywords: '〈戰鬥〉',
        content: '你的徒手攻擊獲得「兇猛」武器效果。'
      },
      {
        englishName: 'Sharpshooter',
        chineseName: '神射手',
        keywords: '〈戰鬥〉',
        content: '你是神準的射手，能擊中常人難以命中的目標。當你在進行遠程攻擊前使用「瞄準」副動作時，第一次購買的額外骰免費。\n此外，該攻擊獲得「穿透」特性，或使武器的穿透等級提高 1。'
      },
      {
        englishName: "They Don't Like It Up 'Em",
        chineseName: '貼身突刺',
        keywords: '〈戰鬥〉',
        content: '你擅長近距肉搏，以無可抵擋的突擊壓制敵人。當你移動至敵人可及範圍並進行近戰攻擊時，第一次購買的額外骰免費。\n若攻擊成功，目標將被擊倒。'
      },
      {
        englishName: 'Dirty Fighter',
        chineseName: '骯髒戰法',
        keywords: '〈戰鬥〉',
        content: '榮譽？你沒聽過這回事。當對手在近戰或遠程攻擊檢定中擲出糾葛時，你對其下一次攻擊可重擲 1d20。'
      },
      {
        englishName: 'Shield Specialist',
        chineseName: '盾牌專家',
        keywords: '〈戰鬥〉、〈進階〉',
        content: '你受訓將盾牌融入戰技，使防禦與攻擊合而為一。使用盾牌時獲得額外 +1 護甲。若在持盾時使用「準備」副動作後進行近戰攻擊，可為該攻擊附加震懾效果。'
      }
    ],
    '醫學': [
      {
        englishName: 'Long-Term Care',
        chineseName: '長期照護',
        keywords: '〈醫學〉',
        content: '你擅長減輕戰爭創傷並確保夥伴獲得妥善治療。每當你進行判定角色是否獲得傷疤，或嘗試治療傷疤的醫學檢定時，可重擲其中 1 顆 d20。'
      },
      {
        englishName: 'Medic',
        chineseName: '戰地醫護',
        keywords: '〈醫學〉',
        content: '當你成功使一名盟友穩定時，你可花費 2 點動力，立即治療該盟友的一項身體傷勢；但其狀態仍為被擊倒（defeated）。'
      },
      {
        englishName: 'Placebo Effect',
        chineseName: '安慰劑效應',
        keywords: '〈醫學〉',
        content: '物資吃緊時，你能物盡其用。當你在醫學檢定中花費急救箱資源時，每使用一次藥物擲 1 🎲；每擲出 1 個效果，立刻返還其中 1 份已花費的資源。'
      },
      {
        englishName: 'Out of Harm’s Way',
        chineseName: '遠離危險',
        keywords: '〈醫學〉',
        content: '你擅長在固定患者與轉移至安全處之間取得平衡。當你嘗試搬運或約束他人時，可用醫學代替運動，且可忽略該檢定首次產生的糾葛。'
      },
      {
        englishName: 'Reassuring',
        chineseName: '安心撫慰',
        keywords: '〈醫學〉',
        content: '你的臨床態度讓病患放下恐懼。當你嘗試治療患者的心靈傷勢時，可花費 2 點動力，以額外再治療 1 個心靈傷勢。'
      },
      {
        englishName: 'Seen Worse',
        chineseName: '見多不怪',
        keywords: '〈醫學〉、〈進階〉',
        content: '你有強健的胃與責任感，不讓恐懼凌駕於病患需求之上。你可花費 2 點動力，獲得等同於你能看見或聽見之受傷盟友人數的勇氣抗性。'
      },
      {
        englishName: 'Field Medicine Expertise',
        chineseName: '戰地醫學專家',
        keywords: '〈醫學〉、〈進階〉',
        content: '你擅長在艱難環境下救治傷者。當你在非正規醫療設施中以醫學檢定治療身體或精神壓力時，可將糾葛範圍減少 2（最低為 1）。若治療成功，病患的恢復時間視同在正規醫療環境中。'
      },
      {
        englishName: 'First on the Scene',
        chineseName: '第一現場',
        keywords: '〈醫學〉',
        content: '你懂得在危急時刻果斷行動。每場行動場景開始時，你可增加 2 點威脅以搶先行動。若有隊友瀕死，你可「保持先機」而不需花費動力，只要你是下一位行動者。'
      }
    ],
    '學術': [
      {
        englishName: 'Book Smart',
        chineseName: '博覽群書',
        keywords: '〈學識〉',
        content: '你博學多聞、閱歷極廣。當你在場景中花費動力以「獲取情報」時，本場景中你之後購買的一枚額外 20 面骰，其動力消耗減少 1 點。'
      },
      {
        englishName: 'Deep Expertise',
        chineseName: '深厚專業',
        keywords: '〈學識〉',
        content: '你在多個領域皆為專家。對於任何技能等級達 3 以上的技能，你獲得一項額外專精。日後若有技能等級提升至 3，立即為該技能獲得一項新的專精。'
      },
      {
        englishName: 'Did the Reading',
        chineseName: '讀過資料',
        keywords: '〈學識〉、〈進階〉',
        content: '你事先研究過所有任務中可能遇到的細節與背景。每場景可使用一次「學術」取代任何其他技能進行檢定，並視為擁有該檢定的專精。'
      },
      {
        englishName: 'Dedication',
        chineseName: '專注投入',
        keywords: '〈學識〉',
        content: '你能在關鍵時刻全神貫注。當你進行擁有適用專精的技能檢定時，可花費 1 點命運，使你的致命成功範圍加倍（最大不得超過技能值的兩倍）。'
      },
      {
        englishName: 'Library Dweller',
        chineseName: '圖書館居民',
        keywords: '〈學識〉',
        content: '你在書籍與知識的殿堂中如魚得水。當你以「學術」進行研究檢定時，所需時間減半。'
      },
      {
        englishName: 'Polyglot',
        chineseName: '多語者',
        keywords: '〈學識〉',
        content: '你必須擁有「語言學」專精方可選擇此天賦。你獲得一項額外真相：「多語者」。你還能額外掌握三種任意語言（見語言表，p.62–63）。當你遇到未知語言時，可花費 1 點動力以理解文本或對話的大意。'
      },
      {
        englishName: 'Studious',
        chineseName: '勤學不倦',
        keywords: '〈學識〉',
        content: '當你首次在成功的技能檢定中「獲取情報」時，可額外提出一個問題。'
      },
      {
        englishName: 'Explosive Chemist',
        chineseName: '爆裂物化學家',
        keywords: '〈學識〉、〈進階〉',
        content: '你理解炸藥、揮發性化學物質與彈藥背後的科學。設置或拆除爆裂物時，你可用學識代替工程。此外，當以爆裂物造成壓力時，可重擲數量等同於你學識等級的挑戰骰。'
      },
      {
        englishName: 'Forger',
        chineseName: '偽造專家',
        keywords: '〈學識〉',
        content: '你洞察細節——紙張厚度、筆劃形狀、墨水氣味。你研究過簽名、官方文件與軍事手續，能製作或複製足以欺瞞官僚的偽件。\n製作身分文件時，檢定難度降低 1。敵人檢查文件時，識破難度提高 1。\n此外，凡依賴偽造文件的檢定，使用該文件的探員可重擲其中 1🎲。\n當你為團隊申請身分文件時，每份僅需花費 1 點軍需點（而非 2 點）。'
      }
    ],
    '通用天賦': [
      {
        englishName: 'Advisor',
        chineseName: '顧問',
        keywords: '〈技能〉',
        content: '你擅長引導他人解決問題。選擇此天賦時，請選擇一項技能。\n當你協助一位盟友且使用該技能時，被你協助的盟友可重擲其骰池中的一顆骰子。'
      },
      {
        englishName: 'Bold',
        chineseName: '大膽',
        keywords: '〈技能〉',
        content: '你在經過計算的風險中，成功的頻率總是高得令人驚訝。選擇此天賦時，請選擇一項技能。\n當你以該技能進行技能檢定，並透過為遊戲主持人產生威脅購買額外骰時，你可以重擲該骰池中的一顆骰子。'
      },
      {
        englishName: 'Cautious',
        chineseName: '謹慎',
        keywords: '〈技能〉',
        content: '你謹慎周全，只在勝算明顯時才行動。選擇此天賦時，請選擇一項技能。\n當你以該技能進行技能檢定，並透過花費動力購買額外骰時，你可以重擲該骰池中的一顆骰子。'
      },
      {
        englishName: 'Collaboration',
        chineseName: '協作',
        keywords: '〈技能〉、〈進階〉',
        content: '你訓練盟友活用你的專業，這份努力已獲得成果。選擇此天賦時，請選擇一項技能（該技能等級須達 3 或以上）。\n當任一盟友嘗試進行該技能的檢定時，只要你能與其溝通，你可花費 2 點動力，讓該盟友使用你的該技能數值與其中一項專精（若適用）。'
      },
      {
        englishName: 'Cool Under Pressure',
        chineseName: '臨危不亂',
        keywords: '〈技能〉、〈命運〉',
        content: '當情勢緊迫時，你能深吸一口氣並完成任務。選擇此天賦時，請選擇一項技能。\n當你以該技能進行技能檢定時，你可花費 1 點命運以自動成功該檢定，但不會產生任何動力。'
      },
      {
        englishName: 'Frugal',
        chineseName: '節儉',
        keywords: '〈命運〉',
        content: '你一向謹慎用錢，因此當有機會採購時，總能拿出些多餘物資交換、或懂得如何議價。當你申請軍需時，可花費 1 點命運，為團隊額外獲得 5 點軍需點以購買裝備。'
      },
      {
        englishName: 'Individualist',
        chineseName: '個人主義者',
        keywords: '—',
        content: '你並非孤僻，只是明白有時候最好的解決方式是親自上陣。你獲得 1 點個人動力，每場遊戲開始時刷新。你可在未獲協助、或未使用團隊動力的檢定上花費此點數。當你使用個人動力時，仍可藉由產生威脅來購買額外骰。'
      },
      {
        englishName: 'Highly Effective',
        chineseName: '高效能',
        keywords: '〈技能〉',
        content: '讓成功發揮最大效益是你的首要任務，無論是攻擊或挑戰，你都確保成果徹底落實。選擇一項技能作為此天賦之對象。每場景一次，當你以該技能造成壓力（或進行延伸任務）時，可重擲至多 2🎲。'
      },
      {
        englishName: 'Never Surrender!',
        chineseName: '永不投降！',
        keywords: '〈命運〉',
        content: '你擁有堅毅的意志與鬥志，當情勢險惡時，能激發內在決心重整旗鼓。當你花費 1 點命運以避免敗北時，立即重新加入場景，回復 3🎲 壓力，並獲得 2 點士氣。此士氣加成持續至場景結束。'
      },
      {
        englishName: 'Practised Skill',
        chineseName: '熟練技能',
        keywords: '〈技能〉、〈進階〉',
        content: '你是該領域的專家，無論是經驗、訓練或天賦，皆能讓事情顯得輕而易舉。選擇一項等級 3 以上的技能。當你以該技能進行檢定時，糾葛範圍減少 2（最低為 1）。'
      }
    ],
    '運動': [
      {
        englishName: 'Athletic Prodigy',
        chineseName: '體能神童',
        keywords: '〈運動〉',
        content: '你比任何人都能將身體推向極限。當你在延展任務中成功進行一次運動檢定時，你可在壓力擲骰中額外加入 🎲🎲 以推進進度。'
      },
      {
        englishName: 'Might Makes Right',
        chineseName: '強壯為勝',
        keywords: '〈運動〉、〈進階〉',
        content: '你懂得如何在戰鬥中發揮自身的力量與體型。當你進行近戰對抗檢定時，可使用「體魄 + 運動」進行。\n此外，你可無視所持武器的「沉重」特性。'
      },
      {
        englishName: 'Fighting Fit',
        chineseName: '健壯如常',
        keywords: '〈運動〉',
        content: '你的體能極佳，不易因劇烈活動而疲憊。每當你因體力消耗而承受疲勞時，擲 1🎲 以抵消每一點疲勞。每擲出一個效果即可忽略 1 點疲勞。'
      },
      {
        englishName: 'Sure-Footed',
        chineseName: '穩步如山',
        keywords: '〈運動〉',
        content: '你平衡感極佳，幾乎不會跌倒或絆倒。當你進行運動檢定時，可忽略第一次出現的糾葛。\n此外，敵人必須花費 3 點威脅，而非 2 點，才能在戰鬥中將你擊倒。'
      },
      {
        englishName: 'Hail Mary',
        chineseName: '遠投奇襲',
        keywords: '〈運動〉',
        content: '你擁有非凡的投擲能力，能精準命中遠距離目標。當你使用投擲武器時，可產生 1 點威脅以提升武器射程一級（例如由近距提升至中距），並使該武器的傷害提高 +1🎲。'
      },
      {
        englishName: 'Hit the Dirt',
        chineseName: '臥倒掩護',
        keywords: '〈運動〉',
        content: '當你在戰鬥中使用「衝鋒」動作時，對你發動的攻擊難度提高 +1，直到你下一回合開始為止。'
      },
      {
        englishName: 'Disarming Technique',
        chineseName: '繳械技術',
        keywords: '〈運動〉',
        content: '你受訓以近戰奪取敵人武器。當你花費動力解除敵人武裝時，可將武器移出其近距離，甚至置於觸及範圍外。此外，你可用敏捷 + 運動替代敏捷 + 戰鬥來防禦近戰攻擊。\n若成功防禦近戰攻擊，可選擇解除攻擊者武裝，而非對其造成壓力或重置位置，且無須再花費動力。'
      },
      {
        englishName: 'Grenadier',
        chineseName: '擲彈兵',
        keywords: '〈運動〉、〈進階〉',
        content: '你不僅擅長投擲手榴彈，更精於掌握時機與角度，以達到最大效果。當你以運動檢定擲出手榴彈時，可花費 2 點動力，將任意挑戰骰結果變更為效果面，最多至你的運動等級。'
      }
    ],
    '士兵': [
      {
        englishName: 'Army of One',
        chineseName: '孤軍之鋒',
        keywords: '〈士兵〉、〈戰鬥〉',
        content: '你精通各種武器與戰鬥技法。當你進行攻擊時，可消耗2點動力，為該攻擊附加以下任一武器效果：「消耗」「穿透」或「震懾」。每次攻擊僅能以此方式添加一種效果。'
      },
      {
        englishName: 'Draw Their Fire!',
        chineseName: '吸引火力！',
        keywords: '〈士兵〉、〈韌性〉',
        content: '你以自身吸引敵人火力，保護同伴安全。當你完成一次攻擊後，可消耗2點動力使敵人注意到你。若如此作，任何能攻擊你的敵人若改以你的盟友為目標，其攻擊難度提高1。'
      },
      {
        englishName: 'Own the Battlefield',
        chineseName: '掌控戰場',
        keywords: '〈士兵〉、〈求生〉、〈命運〉',
        content: '你是老練的戰士，善於利用地形取得優勢。你可花費1點命運，立即執行以下其中一項反應行動：\n速射：當一名位於中距離內的敵人嘗試穿越困難地形且檢定失敗時，你可對其造成等同於你「戰鬥」技能值的物理壓力。此攻擊無法消耗彈藥進行齊射，也無法花費動力增加壓力傷害。你必須持有可用且已裝彈的火器才能執行此反應。\n把頭低下：當敵人對你或中距離內的盟友成功進行遠程攻擊時，該攻擊目標獲得等同於你「觀察」技能值的掩護抗性，直到其下回合開始為止。'
      }
    ],
    '神秘學者': [
      {
        englishName: 'Occult Scholar',
        chineseName: '祕學學者',
        keywords: '〈神秘學者〉、〈學識〉、〈施法者〉',
        content: '你精通秘學傳統、超心理學及各種超自然研究領域，並掌握數種強化心智以抵禦異界恐懼的技巧。\n你是一名施法者（詳見第九章〈魔法與神話體系〉）。\n你獲得等同於「學識」技能值的勇氣加值（此效果不可與〈勇敢者〉天賦重複計算）。'
      },
      {
        englishName: 'Summoner',
        chineseName: '召喚者',
        keywords: '〈神秘學者〉、〈說服〉、〈施法者〉',
        content: '你曾與超越物質界的存在交談，並能召喚異次元的生物。\n你是一名施法者（詳見第九章〈魔法與神話體系〉）。\n此外，當你施放召喚類法術時，可消耗2點動力以確保被召喚生物服從你。此服從持續時間（以分鐘計，或在戰鬥中以回合計）等同於你的「說服」技能值，之後需再次進行指令檢定以維持控制。'
      },
      {
        englishName: 'A Price to Pay',
        chineseName: '代價之印',
        keywords: '〈神秘學者〉、〈韌性〉、〈施法者〉',
        content: '你深知魔法必有代價，並心甘情願地付出，甚至以自身為祭增幅咒能。\n你是一名施法者（詳見第九章〈魔法與神話體系〉）。\n此外，當你成功施放法術時，可獲得額外2點動力，但這些動力只能用於強化該法術的效果且無法儲存。若你如此作，該法術的代價增加2點，且消耗類型改為「身體壓力」而非「精神壓力」。'
      }
    ],
    '技術專家': [
      {
        englishName: 'Prototype',
        chineseName: '原型裝置',
        keywords: '〈技術專家〉、〈工程〉',
        content: '你能以工程檢定（難度2）製作奇特且實驗性的裝置。製作時，從「天賦」章節（第86頁）中選擇一項天賦，其效果將附加於該裝置。任何使用該裝置的人都可在檢定中套用此天賦效果。 每次使用後，擲1顆🎲，並為每次先前的使用額外多擲1顆🎲；若擲出效果符號，該裝置即報廢且無法修復。'
      },
      {
        englishName: 'Lifesaver',
        chineseName: '救命專家',
        keywords: '〈技術專家〉、〈命運〉、〈醫學〉',
        content: '你能讓垂死之人起死回生。任何用以穩定或復甦瀕死角色的醫學檢定，其難度減少1。 此外，你可嘗試挽回於本場景中剛死去的角色。你必須花費1點命運，並進行協調＋醫學檢定（難度3）；若成功，該角色僅為「戰敗」而非真正死亡。'
      },
      {
        englishName: 'Push the Limits',
        chineseName: '極限推進',
        keywords: '〈技術專家〉、〈載具〉',
        content: '你精通機械構造，能讓任何載具發揮極限性能。若你能接近該載具引擎，可進行協調＋載具檢定（難度3）；成功時，該載具的速度提升1，或在地形與機動上視為體型縮小1級。 然而，這些調整將使載具不穩定——之後任何操作該載具的檢定，其失誤範圍增加1。此效果持續至場景結束。'
      }
    ],
    '指揮官': [
      {
        englishName: 'Opportunist',
        chineseName: '機會主義者',
        keywords: '〈指揮官〉、〈戰鬥〉',
        content: '你擅長利用敵人的失誤進行反制。當敵人出現糾葛或在難度3以上的檢定中失敗時，你可作為反應行動消耗2點動力，立即創造一項「真理」，其內容必須代表戰術優勢，並持續至該戰鬥場景結束。'
      },
      {
        englishName: 'Wilderness Guide',
        chineseName: '荒野嚮導',
        keywords: '〈指揮官〉、〈求生〉',
        content: '你不僅能在野外生存，還能指導他人同樣做到。當你的同伴進行求生檢定而你無法直接協助時，你可消耗2點動力以代表你的指導與建議進行「遠距協助」。此方式輔助的檢定，其糾葛範圍增加1。'
      },
      {
        englishName: 'Born Leader',
        chineseName: '天生領袖',
        keywords: '〈指揮官〉、〈戰術〉、〈命運〉',
        content: '你天生擁有激勵他人的領導力。你可花費1點命運，令一位盟友立即獲得1點命運。'
      }
    ],
    '騙徒': [
      {
        englishName: 'Cold Reading',
        chineseName: '冷讀術',
        keywords: '〈騙徒〉、〈觀察〉',
        content: '你善於藉由細微觀察與誘導性言語，營造出深不可測的印象。當你與他人交談時，可消耗2點動力進行一次「冷讀」，在場未察覺詐術的角色會誤以為你擁有極為詳盡且專業的情報來源。'
      },
      {
        englishName: 'A Way with Words',
        chineseName: '言辭之道',
        keywords: '〈騙徒〉、〈說服〉',
        content: '你從不多言，只說足以影響他人的話語。當你在說服檢定中產生糾葛時，可消耗1點動力以取消該糾葛。'
      },
      {
        englishName: 'Chameleon',
        chineseName: '千面偽裝者',
        keywords: '〈騙徒〉、〈潛匿〉、〈命運〉',
        content: '你天生擅長偽裝成他人，連你展現的身份都未必是真實的自己。當你採取偽裝時，可花費1點命運，宣告你已事先準備好一個合適的化名，並擁有相關文件與物品，這些可能在身上或存放於附近安全地點。'
      }
    ],
    '機械工': [
      {
        englishName: 'Keep It Steady',
        chineseName: '穩定維修',
        keywords: '〈機械工〉、〈工程〉',
        content: '你熱衷於調校愛車，能讓它在最糟的情況下仍維持運作。當你操作一輛曾親自維修或改裝的載具時，可在進行載具檢定時消耗2點動力，以忽略該載具在本次檢定中所受傷害造成的負面影響。'
      },
      {
        englishName: 'Quartermaster',
        chineseName: '後勤軍需官',
        keywords: '〈機械工〉、〈說服〉、〈命運〉',
        content: '你熟悉補給運輸與軍需交易，且總會為緊急狀況留下備品。你可花費1點命運，宣告你手邊擁有特定物品。該物品可能藏於身上、存放於你近期使用的載具內，或放在附近隱蔽地點（由遊戲主持人決定）。該物品必須為限制值3或以下的小型物品，且不得為武器，除非該武器具備「投擲（Thrown）」特性。'
      },
      {
        englishName: 'Born to Drive',
        chineseName: '天生車手',
        keywords: '〈機械工〉、〈載具〉',
        content: '你能完美掌控任何載具，駕馭技巧令人嘆為觀止。當你進行難度3或以上的載具檢定時，可花費最多3點動力，每消耗1點動力便可使難度降低1點（最多降低3點）。但檢定的糾葛範圍會隨降低的難度等量增加，代表此動作的高風險性。'
      }
    ],
    '滲透者': [
      {
        englishName: 'Acrobatic',
        chineseName: '特技身手',
        keywords: '〈滲透者〉、〈運動〉',
        content: '你身手矯健，能以最小的力氣迅速越過障礙。當你面對障礙物時，可消耗2點動力直接越過該障礙，無須進行檢定，也不需使用任何工具（如攀爬裝備）。此障礙須為一般可克服的類型，例如可跳越的裂縫、可攀的牆面或可翻越的障柵。'
      },
      {
        englishName: 'Assassination',
        chineseName: '暗殺',
        keywords: '〈滲透者〉、〈戰鬥〉',
        content: '你是潛行殺敵的專家，能以迅雷不及掩耳之勢解決毫無防備的敵人。當你對未察覺你存在的目標發動攻擊時，可消耗2點動力執行「暗殺」，為攻擊賦予「強烈（Intense）」效果（若武器已有該效果，則額外造成+2 傷害）。若此攻擊擊敗目標，則攻擊完全無聲，不會被任何人察覺。'
      },
      {
        englishName: 'Silent Step',
        chineseName: '無聲步伐',
        keywords: '〈滲透者〉、〈潛匿〉',
        content: '你的腳步幾近無聲，行動如影隨形。當你在潛匿檢定中產生糾葛時，可消耗1點動力以取消該糾葛。'
      }
    ],
    '調查員': [
      {
        englishName: 'Polymath',
        chineseName: '博學多才',
        keywords: '〈調查員〉、〈學識〉',
        content: '你涉獵廣博，於各領域皆有專長。每場景可消耗2點動力，臨時獲得一項額外的專精，該專精必須屬於你在該技能中已有2點或以上等級的技能。此效果持續至場景結束。'
      },
      {
        englishName: 'The Cutting Edge',
        chineseName: '醫學前沿',
        keywords: '〈調查員〉、〈醫學〉',
        content: '你熟知最新的醫學進展——從新手術技術、藥物配方到新興疾病的研究——使你能為任何情況做好準備。當你進行難度3以上的醫學檢定時，可花費最多3點動力，每消耗1點動力可使難度降低1點（最多降低3點）。但檢定的糾葛範圍會隨降低的難度等量增加，代表這些新技術仍具風險。'
      },
      {
        englishName: 'Detailed Analysis',
        chineseName: '細緻分析',
        keywords: '〈調查員〉、〈觀察〉',
        content: '你善於注意細節，能從蛛絲馬跡中找出真相。每場景可消耗2點動力，立即向遊戲主持人提出三個關於當前場景的問題，視同使用「獲取情報」的動力花費，但不需先進行檢定。'
      }
    ],
    '刺客': [
      {
        englishName: 'Deadly Assassination',
        chineseName: '致命暗殺',
        keywords: '〈刺客〉、〈戰鬥〉',
        content: '你擅長對毫無防備的敵人迅速下手。當你對無防備目標發動攻擊時，可消耗 2 點威脅以執行致命暗殺，為該次攻擊賦予「穿透 2」與「強烈」效果（若攻擊原本已為強烈，則改為穿透 2 並額外 +3🎲 傷害）。若目標被擊倒或殺死，攻擊行動無聲無息，無人察覺。'
      },
      {
        englishName: 'Skilled Poisoner',
        chineseName: '熟練製毒者',
        keywords: '〈刺客〉、〈醫學〉',
        content: '你精通調製與混合毒藥配方，使材料發揮最大效用。當你使用製毒者工具組的彈藥時，可花費 1 點動力以增加 洞察 + 醫學 檢定難度 +1，或加速毒性發作，使目標於每回合結束（而非場景結束）時承受 1 點疲勞。'
      },
      {
        englishName: 'Smooth Criminal',
        chineseName: '優雅罪犯',
        keywords: '〈刺客〉、〈運動〉、〈說服〉',
        content: '你天生擅長脫身於危險情境，總能找到最聰明的出路。當你嘗試說服、脫逃或擺脫危險狀況時，你擲的第一顆 1🎲 不需消耗動力。'
      }
    ],
    '宣傳員': [
      {
        englishName: 'Codebreaker',
        chineseName: '密碼破譯者',
        keywords: '〈宣傳員〉、〈學識〉',
        content: '你是數學天才、填字高手或密碼專家。你曾被各國徵召，用於破解軍用電報或公開廣播中的隱密訊息。當你解謎或破譯密碼時，可將檢定難度降低 2（最低至 0）。此外，你可花費 1 點動力為自己的外發訊息加密。若他人試圖破解你的加密訊息，必須進行一次難度 2 的 智識 + 學識（密碼學） 檢定。'
      },
      {
        englishName: 'Righteous Rage',
        chineseName: '正義之怒',
        keywords: '〈宣傳員〉、〈說服〉',
        content: '你善於激起被壓迫者的憤怒與怒火。當你煽動群眾暴力或憤慨時，可將難度降低 1（最低至 0）。此外，你可在任何行動場景中發出鼓舞吶喊，進行一次 意志 + 說服 檢定（難度 1）作為主要動作。若成功，所有能聽見你的人在本場景的近戰攻擊中獲得「兇猛」效果。若他們已有此效果，則改為額外 +2🎲 傷害。'
      },
      {
        englishName: 'Web of Contacts',
        chineseName: '人脈之網',
        keywords: '〈宣傳員〉、〈說服〉',
        content: '你認識各式人物——有的可靠，有的則難以信任。在戰亂與佔領下的動盪環境中，情報來源時常變動。你可消耗 2 點威脅以在同一任務中再次動用同一聯絡人。'
      }
    ],
    '襲擊者': [
      {
        englishName: 'Against All Odds',
        chineseName: '逆境求生',
        keywords: '〈襲擊者〉、〈戰鬥〉',
        content: '你習慣於劣勢下奮戰——撤退、被包圍或人數劣勢時皆然。當戰鬥開始且你與盟友人數少於敵方時，你與所有「近距範圍」內的盟友於首回合獲得 +1 物理抗性。你可於首回合任意時刻花費 2 點動力，將此效果延長至本場景結束。'
      },
      {
        englishName: 'Bolt Hole',
        chineseName: '藏匿據點',
        keywords: '〈襲擊者〉、〈命運〉',
        content: '你能無聲無息地消失，對追蹤者而言宛如魔法，但其實是精準規劃與躲避技巧的結果。你可花費 1 點命運，宣告附近有一處可供你與至多 10 名盟友藏身的地點。追蹤者必須通過難度 3 的 洞察 + 觀察 檢定才能發現你們；若失敗，你與盟友至少 30 分鐘內不會被發現。'
      },
      {
        englishName: 'Scrimp and Save',
        chineseName: '節儉生存',
        keywords: '〈襲擊者〉、〈說服〉',
        content: '你在資源匱乏的情況下仍能延長補給的使用時間。當你在任務中第一次耗盡彈藥時，可進行一次 戰鬥 + 戰術 檢定（難度 1）。若成功，你回復 2🎲 彈藥。'
      }
    ],
    '抵抗運動領袖': [
      {
        englishName: 'Emergency Resupply',
        chineseName: '緊急補給',
        keywords: '〈抵抗運動領袖〉、〈說服〉',
        content: '你深知求生之道在於隨時獲得團隊所需資源，並培養了能於危急時刻協助你的聯絡網。然而，壓迫者的眼線無處不在，而迅速行動往往引來關注。每場任務可使用一次：當你呼叫聯絡人以請求補給時，可增加 2 點威脅以獲得至多 5 點軍需點的裝備。'
      },
      {
        englishName: 'Force Multiplier',
        chineseName: '力量倍增',
        keywords: '〈抵抗運動領袖〉、〈戰術〉、〈命運〉',
        content: '你知道何時應集中火力，也懂得在運氣不佳時如何減輕損失。你可花費 1 點命運以執行下列反應之一：穩定陣線（Steady Up!）：當中距離內的盟友宣告「齊射攻擊（Salvo）」時，可將其中一顆骰子設定為 1（視為致命成功）。若攻擊命中，他們可重新擲一次挑戰骰。弱點標記（Vulnerable Spot!）：當中距離內盟友進行遠程攻擊時，你可進行 洞察 + 戰術 檢定以協助。無論檢定是否成功，該盟友的攻擊皆獲得「穿透 +1」效果，或提升其武器的穿透等級 1。'
      },
      {
        englishName: 'Unexpected Reinforcement',
        chineseName: '意外增援',
        keywords: '〈抵抗運動領袖〉、〈戰術〉',
        content: '你建立了名聲，並能在關鍵時刻喚起鄰近的支援。當你以威脅創造「地方支援」的真理時（如干擾、破壞、臨時裝備援助等），你與中距離內所有盟友立即恢復等同你戰術技能的壓力。此外，你可再增加 1 點威脅，使你與所有盟友在本場景結束前獲得等同你戰術技能的士氣回復。'
      }
    ],
    '破壞者': [
      {
        englishName: 'Booby Trap',
        chineseName: '陷阱設置',
        keywords: '〈破壞者〉、〈潛匿〉',
        content: '你知道如何讓人打消拆除裝置或干擾你作品的念頭。當你完成工程檢定後，可花費 1 點動力在成果中添加陷阱。除非搜索者通過難度 2 的 洞察 + 觀察 檢定，否則陷阱不會被發現。拆除陷阱的檢定難度比正常高 1，若陷阱被觸發，所有「近距範圍」內的人將承受 4🎲 壓力。'
      },
      {
        englishName: 'Gremlins in the Machine',
        chineseName: '機械妖精',
        keywords: '〈破壞者〉、〈工程〉',
        content: '你精通如何在系統中引入微妙的缺陷，使其不致完全失效卻持續低效。當你進行工程檢定以破壞設備時，可選擇增加該設備所有相關檢定的糾葛範圍 +2，使其操作時間加倍，因為該裝置會反覆故障或出現問題。'
      },
      {
        englishName: 'Timing is Everything',
        chineseName: '精準時機',
        keywords: '〈破壞者〉、〈工程〉',
        content: '你的行動如同精密時鐘般運作，而團隊也懂得如何利用你的嚴密計畫。當你的破壞、爆破或其他破壞行動被敵人察覺的同一場景內，每位盟友可在他們的單次檢定中重擲一顆骰子。'
      }
    ],
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