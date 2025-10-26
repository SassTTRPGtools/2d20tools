// 裝備數據模組 - Cohors Cthulhu RPG 裝備系統
// 包含武器、盔甲、技能工具和其他裝備的完整數據庫

export const useEquipmentDataAC = () => {
  // 武器數據庫
  const weaponsDatabase = [
    //異域遠程武器
      {
    "name": "弓",
    "focus": "異域",
    "reach": "中距",
    "damage": "3🎲穿透",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠", "靜音"]
  },
  {
    "name": "長弓",
    "focus": "異域",
    "reach": "遠距",
    "damage": "5🎲穿透",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠", "靜音"]
  },
  {
    "name": "弩",
    "focus": "異域",
    "reach": "中距",
    "damage": "4🎲穿透",
    "salvo": [],
    "size": "主要",
    "qualities": ["可靠", "靜音"]
  },
    //手榴彈與炸彈
  {
    "name": "1½ 磅／3 磅 標準裝藥",
    "focus": "爆裂物學",
    "reach": "近距",
    "damage": "10🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["強烈"]
  },
  {
    "name": "GP 手榴彈",
    "focus": "投擲",
    "reach": "近距",
    "damage": "6🎲",
    "salvo": ["區域", "兇猛"],
    "size": "次要",
    "qualities": ["笨重", "不精準", "彈藥型"]
  },
  {
    "name": "米爾斯炸彈",
    "focus": "投擲",
    "reach": "近距",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["不精準", "彈藥型"]
  },
  {
    "name": "米爾斯炸彈（步槍型）",
    "focus": "步槍",
    "reach": "中距",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["不精準", "彈藥型"]
  },
  {
    "name": "鳳梨手榴彈",
    "focus": "投擲",
    "reach": "近距",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["不精準", "彈藥型"]
  },
  {
    "name": "鳳梨手榴彈（步槍型）",
    "focus": "步槍",
    "reach": "中距",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["不精準", "彈藥型"]
  },
  {
    "name": "破胎彈",
    "focus": "投擲",
    "reach": "近距",
    "damage": "6🎲",
    "salvo": ["區域", "穿透1"],
    "size": "次要",
    "qualities": ["笨重", "不精準", "彈藥型"]
  },
    //重型武器與火砲
  {
    "name": "博伊斯反坦克步槍",
    "focus": "重型武器",
    "reach": "遠距",
    "damage": "7🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["精準", "笨重", "局勢升高", "重型"]
  },
  {
    "name": "擲行式火焰噴射器 No.2 Mk.II",
    "focus": "重型武器",
    "reach": "近距",
    "damage": "5🎲",
    "salvo": ["區域", "持續4"],
    "size": "主要",
    "qualities": ["局勢升高", "削弱"]
  },
  {
    "name": "M1A1 火箭筒",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "6🎲兇猛",
    "salvo": [],
    "size": "主要",
    "qualities": ["笨重", "局勢升高", "巨物殺手", "重型", "彈藥型"]
  },
  {
    "name": "M2 迫擊砲",
    "focus": "重型武器",
    "reach": "極遠",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "主要",
    "qualities": ["局勢升高", "重型", "間接"]
  },
  {
    "name": "M9 火箭筒",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "6🎲穿透1, 兇猛",
    "salvo": [],
    "size": "主要",
    "qualities": ["笨重", "局勢升高", "巨物殺手", "重型", "不精準", "彈藥型"]
  },
  {
    "name": "PIAT 反坦克武器",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "6🎲穿透1, 兇猛",
    "salvo": [],
    "size": "主要",
    "qualities": ["笨重", "局勢升高", "重型", "不精準", "彈藥型"]
  },
  {
    "name": "2 吋迫擊砲",
    "focus": "重型武器",
    "reach": "極遠",
    "damage": "6🎲",
    "salvo": ["區域", "震懾"],
    "size": "次要",
    "qualities": ["局勢升高", "重型", "間接"]
  },
    //輕機槍與機槍
      {
    "name": "布倫機槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "白朗寧自動步槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "白朗寧 M1919 機槍",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "7🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["局勢升高", "不精準"]
  },
  {
    "name": "強森 M1941 機槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "MAC 1924/29 機槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "ERMA 1935 式衝鋒槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準", "不可靠"]
  },
  {
    "name": "史登 Mk.IIS 消音衝鋒槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準", "靜音"]
  },
  {
    "name": "史登 Mk.V 衝鋒槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "湯普森衝鋒槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "聯合防務 M42 衝鋒槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "維克斯機槍",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "7🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["局勢升高", "不精準"]
  },
    //步槍與霰彈槍
      {
    "name": "貝蒂耶 1892 M16 卡賓槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "德利耶卡賓槍 Mk.I",
    "focus": "步槍",
    "reach": "中距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["靜音"]
  },
  {
    "name": "李–恩菲爾德步槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "6🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "M1 卡賓槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "M1 加蘭德步槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "MAS 1936 式步槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "春田步槍 M1903 步槍",
    "focus": "步槍",
    "reach": "遠距",
    "damage": "6🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠", "精準"]
  },
  {
    "name": "溫徹斯特 M12 霰彈槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠", "不精準"]
  },
    //手槍
  {
    "name": "隱匿手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "隱藏"]
  },
  {
    "name": "白朗寧大威力半自動手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰"]
  },
  {
    "name": "恩菲爾德 No.2 .38/200 制式左輪",
    "focus": "手槍",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "可靠"]
  },
  {
    "name": "Enpen Mk.I",
    "focus": "手槍",
    "reach": "近距",
    "damage": "2🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "靜音"]
  },
  {
    "name": "High Standard HDM 手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "靜音"]
  },
  {
    "name": "M1911A1 手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰"]
  },
  {
    "name": "MAB Modèle D 手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "隱藏"]
  },
  {
    "name": "MAS Modèle 1873 左輪",
    "focus": "手槍",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "可靠"]
  },
  {
    "name": "Welrod Mk.IIA 手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "靜音"]
  },
    // 異域近戰武器
  {
    name: '闊劍',
    focus: '異域',
    reach: '鄰近',
    damage: '5🎲',
    salvo: [],
    size: '主要',
    qualities: []
  },
  {
    name: '長矛',
    focus: '異域',
    reach: '鄰近',
    damage: '4🎲　穿透 1',
    salvo: [],
    size: '主要',
    qualities: []
  },
  {
    name: '長劍',
    focus: '異域',
    reach: '鄰近',
    damage: '4🎲',
    salvo: [],
    size: '主要',
    qualities: ['招架']
  },
    // 近戰武器
  {
    name: '斧頭',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲兇猛',
    salvo: [],
    size: '次要',
    qualities: []
  },
  {
    name: '球棒',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲震懾',
    salvo: [],
    size: '主要',
    qualities: []
  },
  {
    name: '警棍',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲',
    salvo: [],
    size: '次要',
    qualities: ['靜音']
  },
  {
    name: '刺刀',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲穿透',
    salvo: [],
    size: '次要',
    qualities: []
  },
  {
    name: '指虎',
    focus: '徒手戰鬥',
    reach: '鄰近',
    damage: '2🎲震懾',
    salvo: [],
    size: '次要',
    qualities: ['隱藏']
  },
  {
    name: '工兵鏟',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲',
    salvo: [],
    size: '次要',
    qualities: []
  },
  {
    name: '戰鬥匕首',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '2🎲穿透 1',
    salvo: [],
    size: '次要',
    qualities: ['隱藏', '靜音']
  },
  {
    name: '消防斧',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '4🎲兇猛',
    salvo: [],
    size: '主要',
    qualities: []
  },
  {
    name: '絞索',
    focus: '徒手戰鬥',
    reach: '鄰近',
    damage: '3🎲纏縛',
    salvo: [],
    size: '小物品',
    qualities: []
  },
  {
    name: '軍刀',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲穿透 1',
    salvo: [],
    size: '主要',
    qualities: ['招架']
  },
  {
    name: '槍托',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲',
    salvo: [],
    size: '鄰近',
    qualities: []
  },
  {
    name: '拇指刀',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '1🎲穿透1',
    salvo: [],
    size: '次要',
    qualities: ['隱藏', '靜音']
  },
  {
    name: '塹壕匕首',
    focus: '近戰武器',
    reach: '鄰近',
    damage: '3🎲兇猛',
    salvo: [],
    size: '次要',
    qualities: ['隱藏']
  },
  {
    name: '徒手攻擊',
    focus: '徒手戰鬥',
    reach: '鄰近',
    damage: '2🎲',
    salvo: [],
    size: '—',
    qualities: ['靜音']
  },
  {
    "name": "戰鬥匕首 42",
    "focus": "近戰武器",
    "reach": "鄰近",
    "damage": "1🎲穿透1",
    "salvo": [],
    "size": "次要",
    "qualities": ["隱藏", "靜音"]
  },
  {
    "name": "德國空軍多用途折刀",
    "focus": "近戰武器",
    "reach": "鄰近",
    "damage": "2🎲穿透1",
    "salvo": [],
    "size": "次要",
    "qualities": ["隱藏", "靜音"]
  },
  {
    "name": "黨衛軍匕首",
    "focus": "近戰武器",
    "reach": "鄰近",
    "damage": "2🎲穿透1",
    "salvo": [],
    "size": "次要",
    "qualities": ["靜音"]
  },
  {
    "name": "傘兵步槍 FG 42",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "格章爾／卡賓 43（G/K43）",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "卡賓98k",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "卡賓98k（狙擊型）",
    "focus": "步槍",
    "reach": "遠距",
    "damage": "5🎲",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["精準", "可靠"]
  },
  {
    "name": "突擊步槍 44（StG 44）",
    "focus": "步槍",
    "reach": "中距",
    "damage": "5🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["不可靠"]
  },
    {
    "name": "魯格手槍",
    "focus": "手槍",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰"]
  },
  {
    "name": "華瑟 P 系列",
    "focus": "手槍",
    "reach": "近距",
    "damage": "3🎲",
    "salvo": ["兇猛"],
    "size": "次要",
    "qualities": ["近戰", "隱藏", "可靠"]
  },
    {
    "name": "MG42 機槍",
    "focus": "步槍",
    "reach": "中距",
    "damage": "6🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["不精準"]
  },
  {
    "name": "MP40 衝鋒槍",
    "focus": "近距作戰",
    "reach": "近距",
    "damage": "4🎲",
    "salvo": ["震懾"],
    "size": "主要",
    "qualities": ["可靠"]
  },
  {
    "name": "MG131 機槍",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "7🎲",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["可靠"]
  },
    {
    "name": "火焰噴射器 41",
    "focus": "重型武器",
    "reach": "中距",
    "damage": "5🎲持續4",
    "salvo": ["區域"],
    "size": "主要",
    "qualities": ["削弱", "局勢升高"]
  },
  {
    "name": "GrW36 迫擊砲",
    "focus": "重型武器",
    "reach": "極遠",
    "damage": "7🎲",
    "salvo": ["區域", "震懾"],
    "size": "主要",
    "qualities": ["局勢升高", "重型", "間接"]
  },
  {
    "name": "反坦克榴彈發射器 60",
    "focus": "重型武器",
    "reach": "遠距",
    "damage": "5🎲穿透1",
    "salvo": ["兇猛"],
    "size": "主要",
    "qualities": ["笨重", "局勢升高", "巨物殺手", "重型", "不精準", "彈藥型"]
  },
  {
    "name": "棍式手榴彈 24",
    "focus": "投擲",
    "reach": "近距",
    "damage": "5🎲",
    "salvo": ["區域", "震懾"],
    "size": "主要",
    "qualities": ["彈藥型"]
  }

  ];

  // 盔甲數據庫
  const armorsDatabase = [
  {
    "name": "防彈背心",
    "resistance": "+2",
    "size": "主要",
    "qualities": ["不適"]
  },
  {
    "name": "皮甲",
    "resistance": "+1",
    "size": "主要",
    "qualities": []
  },
  {
    "name": "板甲",
    "resistance": "+3",
    "size": "主要",
    "qualities": ["沉重", "不適"]
  },
  {
    "name": "盾牌",
    "resistance": "+2",
    "size": "主要",
    "qualities": ["盾牌"]
  }
  ];

  // 技能工具數據庫
  const skillToolsDatabase = [
  {
    "name": "分析工具",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "攜帶式化學分析裝備，可用於鑑定各種化合物、反應與鑑識調查。附帶足量試劑。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "彈藥腰帶",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "彈藥腰帶、袋或槍帶，可儲存 3 單位彈藥，供火器使用。",
    "effect": "可攜帶 3 單位彈藥。"
  },
  {
    "name": "竊賊工具",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "裝有開鎖器、螺絲起子、短撬棍、錘子、鞋油及潤滑油等道具的工具包，用於潛入與破門行動。附帶足量用品。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "電工工具組",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "內含修理與改裝無線電、通訊設備、車輛與設施電氣系統所需的工具與零件。附帶足夠零件與電池。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "爆破工具組",
    "restrictionLevel": 2,
    "requirement": null,
    "size": "主要",
    "description": "包含工兵或破壞者塑形炸藥、設置陷阱與引爆裝置、或拆除現場炸藥所需的一切。",
    "effect": "內含 3 單位用於設置炸藥的彈藥。"
  },
  {
    "name": "偽裝組",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "包含義肢、化妝品與服飾配件，可足以改變外貌偽裝成他人。附帶足量資源。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "急救包",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "個人急救包內含繃帶、嗎啡針筒、抗菌藥片與粉末及止血帶。軍醫版本包含更多戰地醫療用品。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "身分文件組",
    "restrictionLevel": 2,
    "requirement": null,
    "size": "次要",
    "description": "同盟國特工專用假身分與訓練文件，用於敵後長期行動與偽裝。",
    "effect": "可在檢定前提供最多 3 點額外動力購買 20 面骰，使用後即失效。"
  },
  {
    "name": "機械工具組",
    "restrictionLevel": 1,
    "requirement": null,
    "size": "次要",
    "description": "包含修理車輛、坦克、飛機及機械所需的工具、油料、潤滑劑與螺帽螺栓。附帶足量零件。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  },
  {
    "name": "儀式工具組",
    "restrictionLevel": 2,
    "requirement": null,
    "size": "次要",
    "description": "包含儀式用短刃、香、蠟燭、羊皮紙、墨水與紙張等基本施法材料。附帶足量供應。",
    "effect": "可獲得 3 點額外動力購買 20 面骰。"
  }
  ];

  // 其他裝備數據庫
  const miscellaneousDatabase = [
  {
    "name": "照相機",
    "restrictionLevel": 2,
    "size": "主要",
    "shortDescription": "戰地新聞攝影用相機",
    "description": "Speed Graphic 攝影機為時代代表性相機，用於戰地記者拍攝戰爭與民生影像。每次曝光需更換底片與閃光燈泡，設置耗時但快門反應迅速。",
    "effect": "可記錄高品質影像作為證據或情報素材；依場景可為搜尋或記錄檢定提供情境加成。"
  },
  {
    "name": "身分識別牌",
    "restrictionLevel": 0,
    "size": "小物品",
    "shortDescription": "軍人識別用金屬牌",
    "description": "大多數軍人配發兩枚金屬或纖維製識別牌，上刻姓名、軍號、宗教與血型。若士兵陣亡，一枚留於遺體，另一枚交由指揮官通報。",
    "effect": "標準小物品，於需要確認身分或處理遺體情境時提供識別便利。"
  },
  {
    "name": "口糧包",
    "restrictionLevel": 0,
    "size": "次要",
    "shortDescription": "一日口糧（或三餐）",
    "description": "各國軍用口糧包形式不同（美軍 C 口糧、英軍 Compo、德軍鐵口糧等），通常足供一名士兵一日食用，可冷食或加熱。",
    "effect": "補給用途：恢復或維持一日所需體力或狀態，屬次要。"
  },
  {
    "name": "瞄準鏡",
    "restrictionLevel": 2,
    "size": "小物品",
    "shortDescription": "步槍用遠距精準鏡片組",
    "description": "安裝於步槍上的鏡片組，可在遠距射擊時提供極高精度；每次安裝需由合格工匠或槍械師固定調校。",
    "effect": "將所裝步槍的射程增加 1 個距離等級（通常中距→遠距）；若該武器未具「精準」特性，則獲得該特性。"
  },
  {
    "name": "制服",
    "restrictionLevel": 0,
    "size": "主要",
    "shortDescription": "軍服套裝（含內衣與外套）",
    "description": "軍服包含內衣、襯衫、上衣與長褲等，視兵種與氣候有不同款式（大衣、熱帶服、飛行夾克等）。未穿戴時視為主要物品。",
    "effect": "作為身份識別與社交情境使用；穿戴時在軍中或佔領地情境可提供服裝相關檢定加成。"
  },
  {
    "name": "祕密服裝",
    "restrictionLevel": 1,
    "size": "次要",
    "shortDescription": "特工用易於偽裝之衣物",
    "description": "SOE 或 OSS 特工專用的難民衣物或精良仿製品，設計以避免暴露身份，適合潛入與長期滯留敵後。",
    "effect": "在偽裝、通行或滯留任務中提供情境加值。"
  },
  {
    "name": "祕密通訊設備",
    "restrictionLevel": 2,
    "size": "主要",
    "shortDescription": "便攜且抗干擾之祕密無線電設備",
    "description": "包含 Paraset Mk.VII、MCR1、B2、S-phone 等多種祕密通訊設備，設計便於藏匿並抗干擾，供特工使用以聯絡與定位空投。",
    "effect": "屬主要物品，能在祕密任務中建立穩定通訊並提供相關檢定加成或特殊功能。"
  },
  {
    "name": "拖車釘",
    "restrictionLevel": 2,
    "size": "次要",
    "shortDescription": "道路與跑道破壞用四爪釘",
    "description": "SOE 或 OSS 供應之四爪拖車釘，設計確保總有一尖端朝上，用於破壞車輛與馬匹。可在區域部署造成危險地帶。",
    "effect": "在所置一個區域內造成危險，凡通過者承受 2🎲 傷害。"
  },
  {
    "name": "伊士曼微型照相機",
    "restrictionLevel": 2,
    "size": "小物品",
    "shortDescription": "可藏於火柴盒之微型相機",
    "description": "由 OSS 委託研發，體積極小，使用 16mm 底片，適合祕密拍攝。屬小物品。",
    "effect": "可用於偵查與情報搜集，提供影像證據或情報檢定加值。"
  },
  {
    "name": "吉胡伊印刷機",
    "restrictionLevel": 2,
    "size": "主要",
    "shortDescription": "便攜接觸印刷機，用於偽造或複製文件",
    "description": "OSS 提供之便攜式接觸印刷機，可放入公事包，內建光源與電池，附感光紙與藥劑，重約 5.4 公斤，用於複製文件、地圖與傳單。",
    "effect": "在偽造、散佈或情報作業中提供顯著功能與檢定加成。"
  },
  {
    "name": "鑰匙複製組",
    "restrictionLevel": 2,
    "size": "次要",
    "shortDescription": "製作鑰匙印模與鑄造用具",
    "description": "包含製作鑰匙印模、模具與低熔點金屬鑄造器材，並附蠟燭作為加熱源，由 SOE 或 OSS 配發。",
    "effect": "可用於製作鎖具的複製鑰匙，提升潛入任務成功率。"
  },
  {
    "name": "開鎖小刀",
    "restrictionLevel": 2,
    "size": "小物品",
    "shortDescription": "口袋型開鎖工具兼小刀",
    "description": "口袋刀型開鎖工具，含刀刃與多種撬鎖器，附扭力桿，可悄然開啟鎖具。由 SOE 或 OSS 使用，戰鬥中視為拇指刀使用。",
    "effect": "提供開鎖與潛入檢定加成，戰鬥中可作為輔助近戰武器。"
  },
  {
    "name": "M19 逃生刀",
    "restrictionLevel": 2,
    "size": "次要",
    "shortDescription": "多功能折刀（含破鎖、剪線器等）",
    "description": "多功能折刀，含剪線器、破鎖刃、主刀、鋸片與螺絲起子，長約 18 公分，常藏於板球拍柄中運送給戰俘，戰鬥中視為格鬥短刀使用。",
    "effect": "在逃脫與維修情境提供工具功能，戰鬥中作為近戰武器。"
  },
  {
    "name": "明諾克斯微型照相機",
    "restrictionLevel": 2,
    "size": "小物品",
    "shortDescription": "典型間諜相機（使用 8×11mm 底片）",
    "description": "由 VEF 公司製造的微型相機，體積小、可藏匿，使用 8×11mm 底片，可拍攝約 50 張影像，常作為間諜標準裝備。",
    "effect": "適合祕密拍攝與情報蒐集，提供影像記錄功能與檢定加值。"
  },
  {
    "name": "消音器",
    "restrictionLevel": 2,
    "size": "小物品",
    "shortDescription": "降低射擊聲與槍口閃光之裝置",
    "description": "安裝於槍口的圓筒裝置，可降低射擊聲與槍口閃光。戰前少見於常規部隊，但為情報單位廣泛使用，常配備於突襲與暗殺任務。",
    "effect": "可安裝於手槍、衝鋒槍與步槍，使武器獲得「靜音」特性。"
  }
  ];

  // 武器特殊能力數據庫
  const weaponSpecialAbilities = {
  '精準': {
    name: '精準',
    description: '若角色在攻擊前採取瞄準（副動作），該攻擊獲得「強烈」效果。'
  },
  '近戰': {
    name: '近戰',
    description: '此武器設計緊湊，能在狹小空間與混戰中靈活使用。當敵人位於你的觸及範圍內時，進行遠程攻擊不會受到懲罰。'
  },
  '笨重': {
    name: '笨重',
    description: '武器沉重難以靈活運用，特別是對付人形等小型目標時。若攻擊目標為人類大小或更小，該次攻擊難度 +1。'
  },
  '削弱': {
    name: '削弱',
    description: '治療由此武器造成的身體傷勢之技能檢定難度 +1。'
  },
  '局勢升高': {
    name: '局勢升高',
    description: '持此武器進入場景時，為遊戲主持人增加 1 威脅。'
  },
  '巨物殺手': {
    name: '巨物殺手',
    description: '此武器對小型或軟性目標浪費威力，但對龐大目標能發揮致命威能。擲傷害骰時，額外增加目標體型等級數值的🎲，但不得超過武器的基礎傷害值（例如基礎傷害 6🎲 的武器，額外🎲不得超過 +6🎲）。'
  },
  '重型': {
    name: '重型',
    description: '使用此武器攻擊時，若未設置（如抵住地面或三腳架），攻擊難度 +2。設置需花費準備副動作。'
  },
  '隱藏': {
    name: '隱藏',
    description: '此武器在隱藏時，旁人僅以目視無法察覺。搜尋此武器之技能檢定難度 +1。'
  },
  '不精準': {
    name: '不精準',
    description: '使用此武器時無法從瞄準（副動作）中獲益。'
  },
  '間接': {
    name: '間接',
    description: '此武器設計為拋射用途，可越過長距離投射目標。攻擊難度 +1，但不需視線。'
  },
  '彈藥型': {
    name: '彈藥型',
    description: '此武器的彈藥體積龐大。每次攻擊須消耗 1 枚彈藥，且無法進行齊射攻擊。'
  },
  '招架': {
    name: '招架',
    description: '使用者在防禦近戰攻擊時，進行對抗檢定可重擲一顆 d20。若角色持有多件招架武器，此效果不疊加。'
  },
  '可靠': {
    name: '可靠',
    description: '在行動場景中使用此武器時，角色可忽略第一次擲出的糾葛結果。'
  },
  '靜音': {
    name: '靜音',
    description: '攻擊聲響難以察覺，需以「洞察＋觀察」檢定（難度 2）察覺。遊戲主持人可依距離或環境噪音調整難度。'
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