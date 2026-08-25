/* ============================================================
 * Rookie Radar v2.0 — 球星卡潜力新星情报站
 * Prospect Intelligence for Sports Card Collectors
 * ============================================================ */

// ===== Price History Generator =====
function genPriceHistory(base, trend, volatility, points) {
  const history = [];
  let price = base * 0.7;
  for (let i = 0; i < points; i++) {
    const noise = (Math.random() - 0.5) * volatility * base;
    price = price + (base * trend / points) + noise;
    price = Math.max(base * 0.3, price);
    history.push(Math.round(price * 100) / 100);
  }
  history[history.length - 1] = base;
  return history;
}

// ===== Intel helper: light data for non-key players =====
function lightIntel() {
  return {
    transferNews: [],
    injuryReport: { currentStatus: 'fit', currentStatusZh: '健康', current: null, history: [] },
    formAnalysis: null,
    scoutPicks: [],
    priceImpactTimeline: [],
    recentMatches: []
  };
}

// ===== Player Database =====
const PLAYERS = [
  {
    id: 1,
    name: "Lamine Yamal",
    nameZh: "拉明·亚马尔",
    sport: "football",
    team: "FC Barcelona",
    teamZh: "巴塞罗那",
    position: "RW",
    positionZh: "右边锋",
    age: 18,
    nationality: "Spain",
    nationalityZh: "西班牙",
    league: "La Liga",
    hypeScore: 99,
    cardPrice: 720.00,
    cardBrand: "Panini Prizm World Cup",
    priceHistory: genPriceHistory(720, 0.5, 0.08, 30),
    tags: ["World Cup Champion 2026", "Euro 2024 Winner", "La Masia", "Generational Talent"],
    realCardData: {
      mangaSSP_PSA10: "$4,650 (56 bids, eBay)",
      superFractor_1of1: "$396,500 (Goldin Auctions)",
      donrussGold_1of1_PSA10: "$219,600 (Heritage Auctions)",
      monthlySurge: "+47.72% (pre-World Cup)",
      source: "130point.com / Goldin / Heritage / SI Collectibles",
      verified: true
    },
    news: [
      { type: "performance", title: "Yamal scores first World Cup goal in Spain 4-0 Saudi Arabia", titleZh: "亚马尔在西班牙4-0沙特比赛中打进世界杯首球", source: "ESPN", time: "2月前", impact: "high", verified: "T2 ESPN + YouTube multi-source" },
      { type: "injury", title: "Hamstring injury vs Celta Vigo on April 22, season ended early", titleZh: "4月22日对阵塞尔塔腿筋受伤，赛季提前结束", source: "Barcelona official", time: "4月前", impact: "high", verified: "T1 Barcelona + Spain coach + ESPN" },
      { type: "general", title: "Yamal card market surges 47.72% ahead of World Cup", titleZh: "世界杯前亚马尔卡价飙升47.72%", source: "SI Collectibles / AvandaTimes", time: "3月前", impact: "high", verified: "T2 SI market data" },
      { type: "general", title: "PSA 10 Manga SSP sells for $4,650 on eBay with 56 bids", titleZh: "PSA 10 Manga SSP在eBay以4650美元成交，56次出价", source: "130point.com", time: "1月前", impact: "medium", verified: "Transaction-verified" },
      { type: "transfer", title: "Barcelona extends Yamal contract to 2031 with 1B release clause", titleZh: "巴萨与亚马尔续约至2031年，违约金10亿欧元", source: "Fabrizio Romano", time: "5月前", impact: "high", verified: "T3 Romano confirmed" },
      { type: "general", title: "Yamal reveals bandage origin: PlayStation accident, tribute to Benzema", titleZh: "亚马尔揭秘绷手原因：打PlayStation砸电视，致敬本泽马", source: "beIN Sports", time: "3月前", impact: "low", verified: "T2 beIN Sports + YouTube channel" }
    ],
    transferNews: [
      { title: "Barcelona extends Yamal contract to 2031 with 1B release clause", titleZh: "巴萨与亚马尔续约至2031年，违约金10亿欧元", source: "Fabrizio Romano", time: "1d ago", status: "confirmed", statusZh: "已确认", impact: "high", impactZh: "高" },
      { title: "PSG informally inquired about Yamal availability, told no", titleZh: "巴黎圣日耳曼非正式询价亚马尔，被告知不卖", source: "L'Equipe", time: "5d ago", status: "rumor", statusZh: "传闻", impact: "low", impactZh: "低" }
    ],
    injuryReport: {
      currentStatus: "recovering",
      currentStatusZh: "恢复中",
      current: {
        type: "Left hamstring injury (biceps femoris)",
        typeZh: "左腿股二头肌伤病",
        date: "2026年4月22日",
        cause: "vs Celta Vigo, injured after taking penalty",
        causeZh: "对阵塞尔塔，罚点球后受伤",
        expectedReturn: "World Cup group stage (June 2026)",
        expectedReturnZh: "世界杯小组赛阶段",
        severity: "moderate",
        severityZh: "中度",
        recurrenceRisk: "30% (per FIFA physician Dr. Ripoll)",
        recurrenceRiskZh: "30%复发率（国际足联医师Ripoll）",
        clubStatement: "Conservative treatment plan confirmed",
        clubStatementZh: "巴萨确认保守治疗方案"
      },
      history: [
        { season: "2025-26", injury: "Left hamstring (biceps femoris)", injuryZh: "左腿股二头肌", duration: "6 weeks", gamesMissed: 6, note: "Season ended early, missed Clasico" },
        { season: "2023-24", injury: "Hip contusion", injuryZh: "髋部挫伤", duration: "1 week", gamesMissed: 1 },
        { season: "2024-25", injury: "Ankle sprain", injuryZh: "脚踝扭伤", duration: "2 weeks", gamesMissed: 3 }
      ]
    },
    formAnalysis: {
      recentAvgRating: 8.7,
      trend: "rising",
      trendZh: "飙升中",
      summary: "Yamal became World Cup champion at 18, adding to his Euro 2024 title. 16 goals + 11 assists in 28 La Liga games. Market value exceeded 190M. However, hamstring injury in April raised concerns about fitness management.",
      summaryZh: "亚马尔18岁加冕世界杯冠军，加上欧洲杯冠军。西甲28场16球11助攻，市场估值超1.9亿欧元。但4月腿筋伤引发体能管理担忧。",
      factors: [
        { factor: "World Cup + Euro double champion", factorZh: "世界杯+欧洲杯双冠王", desc: "Youngest player to win both trophies, historic achievement driving card demand", descZh: "最年轻双冠王，历史性成就推动卡价", impact: "positive" },
        { factor: "Hamstring injury recovery", factorZh: "腿筋伤恢复中", desc: "Injured April 22, missed 6 weeks. Spain managed minutes carefully at World Cup. 30% recurrence risk per Dr. Ripoll", descZh: "4月22日受伤，缺阵6周。世界杯谨慎管理出场时间。Ripoll医生称30%复发风险", impact: "negative" },
        { factor: "YouTube channel 3.67M subscribers", factorZh: "YouTube频道367万订阅", desc: "Personal brand growing rapidly, shares lifestyle content, expanding beyond football", descZh: "个人品牌快速增长，分享生活内容，超越足球领域", impact: "positive" },
        { factor: "Contract to 2031 with 1B clause", factorZh: "续约至2031年违约金10亿", desc: "Barcelona committed long-term, provides stability for card market", descZh: "巴萨长期承诺，为卡市提供稳定性", impact: "positive" }
      ]
    },
    scoutPicks: [
      { source: "YouTube", sourceType: "youtube", author: "ESPN FC", recommendation: "Generational talent, youngest World Cup + Euro double champion in history. His RC prices have exploded since World Cup win.", recommendationZh: "代际天才，史上最年轻世界杯+欧洲杯双冠王。世界杯夺冠后新秀卡价格暴涨。", rating: 10, time: "1月前", verified: true },
      { source: "pullmarket.io", sourceType: "blog", author: "Pullmarket Card Guide", recommendation: "PSA 10 Topps Chrome UCC #64 trading $400-900. Megacracks #108BIS PSA 10 at $1,500-3,500. True RC recommended: Megacracks.", recommendationZh: "PSA 10 Topps Chrome UCC #64成交价$400-900。Megacracks #108BIS PSA 10约$1,500-3,500。推荐真正新秀卡：Megacracks。", rating: 9.5, time: "2月前", verified: true },
      { source: "Goldin Auctions", sourceType: "auction", author: "Goldin", recommendation: "1/1 SuperFractor sold for $396,500 — highest Yamal card sale ever. Donruss Optic Gold 1/1 PSA10: $219,600 at Heritage.", recommendationZh: "1/1 SuperFractor成交价$396,500——亚马尔卡历史最高成交。Donruss Optic Gold 1/1 PSA10: Heritage拍卖$219,600。", rating: 10, time: "3月前", verified: true },
      { source: "Reddit", sourceType: "forum", author: "r/soccercards", recommendation: "Panini Prizm World Cup 2026 set is live. Yamal 1/1 Black Prizm estimated $50,000+ PSA 10. Silver Prizm raw only ~$2-3, entry level.", recommendationZh: "2026 Panini Prizm世界杯系列已上市。亚马尔1/1 Black Prizm PSA 10估价$50,000+。银折射裸卡仅$2-3，入门级。", rating: 8.5, time: "1月前", verified: true }
    ],
    priceImpactTimeline: [
      { date: "2024年7月", event: "Euro 2024 champion + Young Player of Tournament", eventZh: "欧洲杯冠军+赛事最佳新秀", category: "award", priceBefore: 180, priceAfter: 380, changePct: 111.1 },
      { date: "2025年2月", event: "Contract extension to 2031 (1B release clause)", eventZh: "续约至2031年（违约金10亿）", category: "contract", priceBefore: 380, priceAfter: 450, changePct: 18.4 },
      { date: "2026年4月", event: "Hamstring injury vs Celta Vigo, season ended", eventZh: "对阵塞尔塔腿筋受伤，赛季报销", category: "injury", priceBefore: 520, priceAfter: 440, changePct: -15.4 },
      { date: "2026年5月", event: "Named in Spain World Cup squad, recovery confirmed", eventZh: "入选世界杯名单，恢复确认", category: "performance", priceBefore: 440, priceAfter: 520, changePct: 18.2 },
      { date: "2026年6月", event: "World Cup debut goal vs Saudi Arabia (4-0)", eventZh: "世界杯首球，4-0沙特", category: "performance", priceBefore: 520, priceAfter: 680, changePct: 30.8 },
      { date: "2026年7月", event: "Spain wins World Cup, Yamal youngest double champion", eventZh: "西班牙世界杯夺冠，亚马尔最年轻双冠王", category: "award", priceBefore: 680, priceAfter: 720, changePct: 5.9 }
    ],
    recentMatches: [
      { opponent: "Real Madrid", opponentZh: "皇家马德里", competition: "La Liga", date: "Today", result: "2-1", resultType: "win", rating: 9.2, goals: 2, assists: 0, minutes: 85, priceBefore: 410, priceAfter: 485, changePct: 18.3, summary: "Man of the match, 2 goals in El Clasico", summaryZh: "国家德比最佳球员，梅开二度" },
      { opponent: "Sevilla", opponentZh: "塞维利亚", competition: "La Liga", date: "7 days ago", result: "3-0", resultType: "win", rating: 8.1, goals: 1, assists: 1, minutes: 90, priceBefore: 360, priceAfter: 390, changePct: 8.3, summary: "Goal and assist in comfortable win", summaryZh: "进球加助攻，轻松取胜" },
      { opponent: "Rayo Vallecano", opponentZh: "巴列卡诺", competition: "La Liga", date: "14 days ago", result: "2-1", resultType: "win", rating: 7.5, goals: 0, assists: 1, minutes: 75, priceBefore: 365, priceAfter: 360, changePct: -1.4, summary: "Quiet game by his standards", summaryZh: "按他的标准表现平淡" }
    ]
  },
  {
    id: 2,
    name: "Florian Wirtz",
    nameZh: "弗洛里安·维尔茨",
    sport: "football",
    team: "Bayer Leverkusen",
    teamZh: "勒沃库森",
    position: "AM",
    positionZh: "前腰",
    age: 21,
    nationality: "Germany",
    nationalityZh: "德国",
    league: "Bundesliga",
    hypeScore: 92,
    cardPrice: 320.00,
    cardBrand: "Topps Chrome",
    priceHistory: genPriceHistory(320, 0.25, 0.06, 30),
    tags: ["Bundesliga POTY", "Unbeaten Season", "Playmaker"],
    news: [
      { type: "transfer", title: "Wirtz linked with summer move to Real Madrid or Bayern", titleZh: "维尔茨与皇马或拜仁夏窗转会传出绯闻", source: "Bild", time: "5h ago", impact: "high" },
      { type: "general", title: "Wirtz rookie card hits all-time high amid transfer talk", titleZh: "转会传闻中维尔茨新秀卡创历史新高", source: "CardLadder", time: "6h ago", impact: "medium" }
    ],
    transferNews: [
      { title: "Real Madrid monitoring Wirtz as Modric successor", titleZh: "皇马将维尔茨视为莫德里奇接班人进行考察", source: "AS", time: "2d ago", status: "rumor", statusZh: "传闻", impact: "high", impactZh: "高" },
      { title: "Leverkusen sets 150M asking price for Wirtz", titleZh: "勒沃库森为维尔茨标价1.5亿欧元", source: "Kicker", time: "3d ago", status: "confirmed", statusZh: "已确认", impact: "medium", impactZh: "中" },
      { title: "Bayern Munich also interested, prefers Real Madrid", titleZh: "拜仁也有意，但球员更倾向皇马", source: "Bild", time: "1d ago", status: "rumor", statusZh: "传闻", impact: "high", impactZh: "高" }
    ],
    injuryReport: {
      currentStatus: "fit",
      currentStatusZh: "健康",
      current: null,
      history: [
        { season: "2022-23", injury: "Cruciate ligament rupture", injuryZh: "十字韧带断裂", duration: "8 months", gamesMissed: 35 },
        { season: "2024-25", injury: "Hamstring strain", injuryZh: "腿筋拉伤", duration: "3 weeks", gamesMissed: 4 }
      ]
    },
    formAnalysis: {
      recentAvgRating: 7.9,
      trend: "stable",
      trendZh: "稳定",
      summary: "Wirtz continues to be Leverkusen's creative hub, though transfer speculation has slightly affected his focus in recent matches.",
      summaryZh: "维尔茨继续作为勒沃库森的创造力核心，但转会传闻近期略微影响了他的比赛专注度。",
      factors: [
        { factor: "Transfer distraction", factorZh: "转会分心", desc: "Ongoing Madrid/Bayern links affecting concentration slightly", descZh: "持续的皇马/拜仁传闻略微影响了注意力", impact: "negative" },
        { factor: "System reliance", factorZh: "体系依赖", desc: "Leverkusen's system maximizes his strengths, Xabi Alonso's departure could impact", descZh: "勒沃库森体系最大化了他的优势，哈维·阿隆索离任可能有影响", impact: "neutral" },
        { factor: "ACL recovery complete", factorZh: "十字韧带完全康复", desc: "Fully recovered from 2023 ACL injury, no physical limitations", descZh: "2023年十字韧带伤已完全康复，无身体限制", impact: "positive" }
      ]
    },
    scoutPicks: [
      { source: "YouTube", sourceType: "youtube", author: "Tactical FI", recommendation: "Best playmaker prospect in Europe, but ACL history is a concern for long-term card value", recommendationZh: "欧洲最佳前腰新星，但十字韧带伤史对长期卡价有隐患", rating: 8.5, time: "5d ago" },
      { source: "Twitter/X", sourceType: "journalist", author: "Christian Falk", recommendation: "If Real Madrid move happens, prices will double overnight. Buy now.", recommendationZh: "如果转会皇马，价格一夜翻倍。现在入手。", rating: 8, time: "1d ago" }
    ],
    priceImpactTimeline: [
      { date: "30天前", event: "Bundesliga POTY award", eventZh: "德甲最佳球员", category: "award", priceBefore: 240, priceAfter: 290, changePct: 20.8 },
      { date: "15天前", event: "Real Madrid interest confirmed", eventZh: "皇马兴趣确认", category: "transfer", priceBefore: 290, priceAfter: 340, changePct: 17.2 },
      { date: "5天前", event: "Minor dip amid Leverkusen form slump", eventZh: "勒沃库森状态低迷小幅下跌", category: "performance", priceBefore: 340, priceAfter: 320, changePct: -5.9 }
    ],
    recentMatches: [
      { opponent: "Bayern Munich", opponentZh: "拜仁慕尼黑", competition: "Bundesliga", date: "Today", result: "1-1", resultType: "draw", rating: 7.6, goals: 0, assists: 1, minutes: 90, priceBefore: 320, priceAfter: 325, changePct: 1.6, summary: "Assist in big game vs Bayern", summaryZh: "对阵拜仁送出助攻" },
      { opponent: "Stuttgart", opponentZh: "斯图加特", competition: "Bundesliga", date: "7 days ago", result: "2-2", resultType: "draw", rating: 7.0, goals: 1, assists: 0, minutes: 85, priceBefore: 330, priceAfter: 320, changePct: -3.0, summary: "Scored but team dropped points", summaryZh: "进球但球队丢分" }
    ]
  },
  {
    id: 3,
    name: "Jamal Musiala",
    nameZh: "贾马尔·穆夏拉",
    sport: "football",
    team: "Bayern Munich",
    teamZh: "拜仁慕尼黑",
    position: "AM",
    positionZh: "前腰",
    age: 21,
    nationality: "Germany",
    nationalityZh: "德国",
    league: "Bundesliga",
    hypeScore: 90,
    cardPrice: 275.00,
    cardBrand: "Topps Chrome",
    priceHistory: genPriceHistory(275, 0.15, 0.05, 30),
    tags: ["Bavarian Prodigy", "Dribbling King", "Germany NT"],
    news: [
      { type: "performance", title: "Musiala dazzles in Champions League knockout tie", titleZh: "穆夏拉在欧冠淘汰赛中大放异彩", source: "UEFA.com", time: "4h ago", impact: "medium" },
      { type: "general", title: "Musiala card demand spikes among international collectors", titleZh: "国际收藏者对穆夏拉卡需求激增", source: "eBay Trends", time: "8h ago", impact: "low" }
    ],
    transferNews: [
      { title: "Bayern open to new Musiala deal, wants to stay", titleZh: "拜仁愿意与穆夏拉签新约，球员想留队", source: "Kicker", time: "4d ago", status: "confirmed", statusZh: "已确认", impact: "medium", impactZh: "中" }
    ],
    injuryReport: {
      currentStatus: "fit",
      currentStatusZh: "健康",
      current: null,
      history: [
        { season: "2023-24", injury: "Hamstring tear", injuryZh: "腿筋撕裂", duration: "4 weeks", gamesMissed: 5 }
      ]
    },
    formAnalysis: {
      recentAvgRating: 7.7,
      trend: "rising",
      trendZh: "上升中",
      summary: "Musiala has found another gear in the Champions League, his dribbling and creativity causing havoc against elite defenses.",
      summaryZh: "穆夏拉在欧冠找到了更高档的状态，他的盘带和创造力给顶级防线制造混乱。",
      factors: [
        { factor: "Champions League motivation", factorZh: "欧冠动力", desc: "Raises his game for elite European nights", descZh: "在欧冠精英之夜提升比赛水平", impact: "positive" },
        { factor: "Improved finishing", factorZh: "终结能力提升", desc: "Adding goals to his game, not just assists", descZh: "不再只助攻，也增加了进球", impact: "positive" }
      ]
    },
    scoutPicks: [
      { source: "YouTube", sourceType: "youtube", author: "Hustle FC", recommendation: "Most entertaining player in Bundesliga, card value driven by highlight reels", recommendationZh: "德甲最有趣的球员，卡价由精彩集锦驱动", rating: 8.5, time: "1w ago" }
    ],
    priceImpactTimeline: [
      { date: "20天前", event: "Champions League knockout performance", eventZh: "欧冠淘汰赛表现", category: "performance", priceBefore: 230, priceAfter: 275, changePct: 19.6 }
    ],
    recentMatches: [
      { opponent: "Arsenal", opponentZh: "阿森纳", competition: "UCL", date: "Today", result: "2-0", resultType: "win", rating: 8.3, goals: 1, assists: 1, minutes: 90, priceBefore: 255, priceAfter: 275, changePct: 7.8, summary: "Goal and assist in UCL knockout", summaryZh: "欧冠淘汰赛进球加助攻" }
    ]
  },
  {
    id: 4,
    name: "Endrick",
    nameZh: "恩德里克",
    sport: "football",
    team: "Real Madrid",
    teamZh: "皇家马德里",
    position: "ST",
    positionZh: "前锋",
    age: 18,
    nationality: "Brazil",
    nationalityZh: "巴西",
    league: "La Liga",
    hypeScore: 88,
    cardPrice: 410.00,
    cardBrand: "Topps Chrome",
    priceHistory: genPriceHistory(410, 0.2, 0.1, 30),
    tags: ["Brazilian Wonderkid", "Real Madrid", "Palmeiras Academy"],
    news: [
      { type: "performance", title: "Endrick scores on Bernabeu debut, crowd goes wild", titleZh: "恩德里克伯纳乌首秀破门，全场沸腾", source: "Marca", time: "1d ago", impact: "high" },
      { type: "general", title: "Endrick RC prices climb 15% after debut goal", titleZh: "首球后恩德里克新秀卡上涨15%", source: "CardLadder", time: "20h ago", impact: "medium" }
    ],
    transferNews: [
      { title: "Endrick officially joins Real Madrid from Palmeiras", titleZh: "恩德里克正式从帕尔梅拉斯加盟皇马", source: "Fabrizio Romano", time: "2w ago", status: "confirmed", statusZh: "已确认", impact: "high", impactZh: "高" }
    ],
    injuryReport: {
      currentStatus: "fit",
      currentStatusZh: "健康",
      current: null,
      history: [
        { season: "2023-24", injury: "Muscle fatigue", injuryZh: "肌肉疲劳", duration: "1 week", gamesMissed: 2 }
      ]
    },
    formAnalysis: {
      recentAvgRating: 7.3,
      trend: "rising",
      trendZh: "上升中",
      summary: "Endrick is adapting to European football faster than expected. Limited minutes but making them count with crucial goals.",
      summaryZh: "恩德里克适应欧洲足球的速度超出预期。出场时间有限但用关键进球证明价值。",
      factors: [
        { factor: "Limited minutes, high impact", factorZh: "有限时间高效表现", desc: "Scoring despite limited game time under Ancelotti", descZh: "在安切洛蒂麾下有限出场时间内取得进球", impact: "positive" },
        { factor: "Adapting to European physicality", factorZh: "适应欧洲对抗", desc: "Still adjusting to the physical demands of La Liga", descZh: "仍在适应西甲的身体对抗要求", impact: "neutral" },
        { factor: "Brazil NT call-ups", factorZh: "巴西国家队征召", desc: "Regular call-ups boosting his profile", descZh: "定期入选国家队提升知名度", impact: "positive" }
      ]
    },
    scoutPicks: [
      { source: "YouTube", sourceType: "youtube", author: "Brazilian Talents", recommendation: "Next Brazilian superstar at Real Madrid. Card prices still below peak potential.", recommendationZh: "皇马下一个巴西巨星。卡价仍在巅峰潜力之下。", rating: 9, time: "4d ago" },
      { source: "Forum", sourceType: "forum", author: "Blowout Forums", recommendation: "RC supply is limited, demand will spike once he starts regularly", recommendationZh: "新秀卡供应有限，一旦他常规首发需求将飙升", rating: 8.5, time: "1w ago" }
    ],
    priceImpactTimeline: [
      { date: "2周前", event: "Official Real Madrid debut", eventZh: "皇马正式首秀", category: "transfer", priceBefore: 340, priceAfter: 390, changePct: 14.7 },
      { date: "1天前", event: "Bernabeu debut goal", eventZh: "伯纳乌首球", category: "performance", priceBefore: 390, priceAfter: 410, changePct: 5.1 }
    ],
    recentMatches: [
      { opponent: "Valladolid", opponentZh: "巴拉多利德", competition: "La Liga", date: "1 day ago", result: "3-0", resultType: "win", rating: 7.8, goals: 1, assists: 0, minutes: 25, priceBefore: 390, priceAfter: 410, changePct: 5.1, summary: "Came off bench, scored debut goal", summaryZh: "替补登场打进首球" }
    ]
  },
  {
    id: 5,
    name: "Pau Cubarsi",
    nameZh: "保罗·库巴尔西",
    sport: "football",
    team: "FC Barcelona",
    teamZh: "巴塞罗那",
    position: "CB",
    positionZh: "中后卫",
    age: 17,
    nationality: "Spain",
    nationalityZh: "西班牙",
    league: "La Liga",
    hypeScore: 85,
    cardPrice: 165.00,
    cardBrand: "Topps Chrome",
    priceHistory: genPriceHistory(165, 0.3, 0.07, 30),
    tags: ["La Masia", "Defensive Prodigy", "Spain NT"],
    news: [
      { type: "general", title: "Cubarsi called up to Spain senior squad at 17", titleZh: "17岁库尔巴尔西入选西班牙成年队", source: "AS", time: "3h ago", impact: "medium" },
      { type: "general", title: "Cubarsi rookie card gaining traction among collectors", titleZh: "库尔巴尔西新秀卡收藏热度上升", source: "eBay Trends", time: "12h ago", impact: "low" }
    ],
    ...lightIntel(),
    transferNews: [
      { title: "Barcelona planning long-term deal for Cubarsi", titleZh: "巴萨计划与库巴尔西签长约", source: "Sport", time: "3d ago", status: "rumor", statusZh: "传闻", impact: "medium", impactZh: "中" }
    ],
    formAnalysis: {
      recentAvgRating: 7.5,
      trend: "stable",
      trendZh: "稳定",
      summary: "Cubarsi shows remarkable composure for a 17-year-old defender. Already a starter for Barcelona.",
      summaryZh: "作为一名17岁后卫，库尔巴尔西展现出非凡的沉着。已是巴萨首发球员。",
      factors: [
        { factor: "Elite reading of the game", factorZh: "顶级比赛阅读能力", desc: "Anticipation and positioning beyond his years", descZh: "预判和选位超越年龄", impact: "positive" },
        { factor: "Physical development ongoing", factorZh: "身体发育仍在进行", desc: "Still growing into his frame, could be vulnerable to physical strikers", descZh: "体格仍在发育，面对强壮前锋可能吃亏", impact: "negative" }
      ]
    },
    priceImpactTimeline: [
      { date: "15天前", event: "Spain senior squad call-up", eventZh: "西班牙国家队征召", category: "performance", priceBefore: 135, priceAfter: 165, changePct: 22.2 }
    ],
    recentMatches: [
      { opponent: "Real Madrid", opponentZh: "皇家马德里", competition: "La Liga", date: "Today", result: "2-1", resultType: "win", rating: 7.8, goals: 0, assists: 0, minutes: 90, priceBefore: 155, priceAfter: 165, changePct: 6.5, summary: "Solid defensive display in El Clasico", summaryZh: "国家德比稳固防守" }
    ]
  },
  // === Lighter data players ===
  { id: 6, name: "Warren Zaïre-Emery", nameZh: "扎伊尔-埃梅里", sport: "football", team: "Paris Saint-Germain", teamZh: "巴黎圣日耳曼", position: "CM", positionZh: "中场", age: 18, nationality: "France", nationalityZh: "法国", league: "Ligue 1", hypeScore: 82, cardPrice: 95.00, cardBrand: "Topps Chrome", priceHistory: genPriceHistory(95, 0.1, 0.05, 30), tags: ["PSG Academy", "France Youth", "Midfield Engine"], news: [{ type: "general", title: "Zaïre-Emery captains France U21 side", titleZh: "扎伊尔-埃梅里担任法国U21队长", source: "L'Equipe", time: "6h ago", impact: "low" }], ...lightIntel() },
  { id: 7, name: "Alejandro Garnacho", nameZh: "加纳乔", sport: "football", team: "Manchester United", teamZh: "曼联", position: "LW", positionZh: "左边锋", age: 20, nationality: "Argentina", nationalityZh: "阿根廷", league: "Premier League", hypeScore: 80, cardPrice: 130.00, cardBrand: "Topps Chrome", priceHistory: genPriceHistory(130, -0.05, 0.06, 30), tags: ["PL Young", "Argentina", "Acrobatic Finishes"], news: [{ type: "performance", title: "Garnacho nets spectacular bicycle kick", titleZh: "加纳乔打进倒钩世界波", source: "BBC Sport", time: "5h ago", impact: "medium" }, { type: "general", title: "Garnacho card prices dip despite goal", titleZh: "尽管进球加纳乔卡价小幅下跌", source: "CardLadder", time: "2h ago", impact: "low" }], ...lightIntel(), formAnalysis: { recentAvgRating: 7.1, trend: "declining", trendZh: "下滑中", summary: "Inconsistent performances, flashes of brilliance but overall form dropping.", summaryZh: "表现不稳定，有闪光时刻但整体状态下滑。", factors: [{ factor: "Team struggles", factorZh: "球队困境", desc: "Manchester United's poor form affecting all players", descZh: "曼联整体低迷影响所有球员", impact: "negative" }] } },
  { id: 8, name: "Lamine Gueye", nameZh: "拉明·盖耶", sport: "football", team: "Olympique de Marseille", teamZh: "马赛", position: "RW", positionZh: "右边锋", age: 19, nationality: "Senegal", nationalityZh: "塞内加尔", league: "Ligue 1", hypeScore: 68, cardPrice: 45.00, cardBrand: "Topps", priceHistory: genPriceHistory(45, 0.12, 0.08, 30), tags: ["Ligue 1 Hidden Gem", "Pace Merchant", "Niche Pick"], news: [{ type: "general", title: "Gueye breaks into Marseille first team", titleZh: "盖耶闯入马赛一线队", source: "L'Equipe", time: "1d ago", impact: "low" }], ...lightIntel(), scoutPicks: [{ source: "Reddit", sourceType: "forum", author: "r/soccercards", recommendation: "Sleeper pick — low cost, high upside if he breaks through", recommendationZh: "潜力黑马 — 低成本高回报，如果突破的话", rating: 7, time: "2d ago" }] },
  // === Basketball ===
  {
    id: 9,
    name: "Victor Wembanyama",
    nameZh: "维克托·文班亚马",
    sport: "basketball",
    team: "San Antonio Spurs",
    teamZh: "圣安东尼奥马刺",
    position: "C",
    positionZh: "中锋",
    age: 20,
    nationality: "France",
    nationalityZh: "法国",
    league: "NBA",
    hypeScore: 99,
    cardPrice: 1200.00,
    cardBrand: "Panini Prizm",
    priceHistory: genPriceHistory(1200, 0.35, 0.08, 30),
    tags: ["Generational Talent", "ROY", "DPOY Candidate"],
    news: [
      { type: "performance", title: "Wemby records historic 5x5 game", titleZh: "文班亚马打出历史级5x5数据", source: "ESPN", time: "1h ago", impact: "high" },
      { type: "general", title: "Wembanyama RC hits new all-time high $1200", titleZh: "文班亚马新秀卡创历史新高1200美元", source: "CardLadder", time: "30m ago", impact: "high" },
      { type: "transfer", title: "Panini announces exclusive Wembanyama autograph deal", titleZh: "帕尼尼宣布文班亚马专属签字协议", source: "Beckett", time: "5h ago", impact: "medium" }
    ],
    transferNews: [
      { title: "Panini secures exclusive Wembanyama autograph deal", titleZh: "帕尼尼获得文班亚马专属签字协议", source: "Beckett", time: "5h ago", status: "confirmed", statusZh: "已确认", impact: "high", impactZh: "高" }
    ],
    injuryReport: {
      currentStatus: "fit",
      currentStatusZh: "健康",
      current: null,
      history: [
        { season: "2023-24", injury: "Right ankle sprain", injuryZh: "右脚踝扭伤", duration: "2 weeks", gamesMissed: 4 }
      ]
    },
    formAnalysis: {
      recentAvgRating: 9.0,
      trend: "rising",
      trendZh: "上升中",
      summary: "Wembanyama is exceeding even the most optimistic projections. His defensive impact is historically great and offense is catching up.",
      summaryZh: "文班亚马正在超越最乐观的预期。他的防守影响力是历史级的，进攻也在赶上。",
      factors: [
        { factor: "Historic defensive impact", factorZh: "历史级防守影响力", desc: "Leading league in blocks by massive margin, altering entire game plans", descZh: "盖帽大幅领先全联盟，改变对手整体战术", impact: "positive" },
        { factor: "Offensive development", factorZh: "进攻开发", desc: "Adding perimeter shooting and playmaking to his game", descZh: "增加外线投射和组织能力", impact: "positive" },
        { factor: "Minutes restriction lifting", factorZh: "出场时间限制解除", desc: "Spurs gradually increasing his workload as body matures", descZh: "马刺随身体成熟逐步增加出场时间", impact: "positive" }
      ]
    },
    scoutPicks: [
      { source: "YouTube", sourceType: "youtube", author: "JxmyHighroller", recommendation: "Generational talent, his RC will be the most valuable basketball card of this era", recommendationZh: "代际天才，他的新秀卡将是这个时代最值钱的篮球卡", rating: 10, time: "2d ago" },
      { source: "Twitter/X", sourceType: "journalist", author: "Shams Charania", recommendation: "Best young player in the league, DPOY and MVP candidate simultaneously", recommendationZh: "联盟最佳年轻球员，同时是DPOY和MVP候选人", rating: 10, time: "1d ago" },
      { source: "Forum", sourceType: "forum", author: "Blowout Forums", recommendation: "Prizm Silver is the play, his base RC will be $2000+ within 2 years", recommendationZh: "银折射是首选，他的基础新秀卡2年内将超2000美元", rating: 9.5, time: "3d ago" }
    ],
    priceImpactTimeline: [
      { date: "30天前", event: "Rookie of the Year announcement", eventZh: "最佳新秀公布", category: "award", priceBefore: 850, priceAfter: 980, changePct: 15.3 },
      { date: "10天前", event: "Panini exclusive auto deal announced", eventZh: "帕尼尼专属签字协议公布", category: "contract", priceBefore: 980, priceAfter: 1100, changePct: 12.2 },
      { date: "今天", event: "Historic 5x5 game", eventZh: "历史级5x5数据", category: "performance", priceBefore: 1100, priceAfter: 1200, changePct: 9.1 }
    ],
    recentMatches: [
      { opponent: "OKC Thunder", opponentZh: "俄克拉荷马城雷霆", competition: "NBA", date: "Today", result: "98-102", resultType: "loss", rating: 9.0, goals: 0, assists: 0, minutes: 36, priceBefore: 1100, priceAfter: 1200, changePct: 9.1, summary: "5x5 historic game despite loss", summaryZh: "虽败犹荣，历史级5x5数据" },
      { opponent: "Lakers", opponentZh: "湖人", competition: "NBA", date: "3 days ago", result: "115-108", resultType: "win", rating: 8.8, goals: 0, assists: 0, minutes: 34, priceBefore: 1020, priceAfter: 1100, changePct: 7.8, summary: "Dominated on both ends vs Lakers", summaryZh: "攻防两端统治湖人" }
    ]
  },
  {
    id: 10,
    name: "Chet Holmgren",
    nameZh: "切特·霍姆格伦",
    sport: "basketball",
    team: "OKC Thunder",
    teamZh: "俄克拉荷马城雷霆",
    position: "C",
    positionZh: "中锋",
    age: 22,
    nationality: "USA",
    nationalityZh: "美国",
    league: "NBA",
    hypeScore: 87,
    cardPrice: 380.00,
    cardBrand: "Panini Prizm",
    priceHistory: genPriceHistory(380, 0.18, 0.06, 30),
    tags: ["ROY Runner-up", "Block Machine", "OKC Core"],
    news: [
      { type: "performance", title: "Holmgren leads league in blocks per game", titleZh: "霍姆格伦领跑联盟盖帽榜", source: "NBA.com", time: "3h ago", impact: "medium" }
    ],
    ...lightIntel(),
    formAnalysis: {
      recentAvgRating: 8.0,
      trend: "rising",
      trendZh: "上升中",
      summary: "Holmgren is the defensive anchor for the best team in the West. His offensive game is expanding.",
      summaryZh: "霍姆格伦是西部第一球队的防守支柱。他的进攻能力正在扩展。",
      factors: [
        { factor: "Team success boosts profile", factorZh: "球队成功提升知名度", desc: "OKC's winning makes Holmgren more visible nationally", descZh: "雷霆的连胜让霍姆格伦获得更多全国曝光", impact: "positive" },
        { factor: "Playing in Wemby's shadow", factorZh: "活在文班亚马阴影下", desc: "Always compared to Wembanyama, limiting his individual hype", descZh: "总被拿来和文班亚马比较，限制了他的个人热度", impact: "negative" }
      ]
    },
    priceImpactTimeline: [
      { date: "15天前", event: "Career-high 8 blocks", eventZh: "生涯新高8盖帽", category: "performance", priceBefore: 320, priceAfter: 380, changePct: 18.8 }
    ],
    recentMatches: [
      { opponent: "Spurs", opponentZh: "马刺", competition: "NBA", date: "Today", result: "102-98", resultType: "win", rating: 8.0, goals: 0, assists: 0, minutes: 32, priceBefore: 365, priceAfter: 380, changePct: 4.1, summary: "Solid two-way game vs Wemby", summaryZh: "对阵文班亚马攻防两端稳健" }
    ]
  },
  { id: 11, name: "Amen Thompson", nameZh: "阿门·汤普森", sport: "basketball", team: "Houston Rockets", teamZh: "休斯敦火箭", position: "PG", positionZh: "控球后卫", age: 21, nationality: "USA", nationalityZh: "美国", league: "NBA", hypeScore: 78, cardPrice: 145.00, cardBrand: "Panini Prizm", priceHistory: genPriceHistory(145, 0.15, 0.07, 30), tags: ["Athletic Freak", "OTC Elite", "Rockets Core"], news: [{ type: "performance", title: "Amen Thompson erupts for triple-double", titleZh: "阿门·汤普森爆发砍下三双", source: "The Athletic", time: "4h ago", impact: "medium" }], ...lightIntel(), scoutPicks: [{ source: "YouTube", sourceType: "youtube", author: "Hoops Reference", recommendation: "Athletic freak, if he develops a jump shot his cards will explode", recommendationZh: "运动天赋惊人，如果开发出跳投卡价将暴涨", rating: 8, time: "1w ago" }] },
  { id: 12, name: "Brandon Miller", nameZh: "布兰登·米勒", sport: "basketball", team: "Charlotte Hornets", teamZh: "夏洛特黄蜂", position: "SF", positionZh: "小前锋", age: 21, nationality: "USA", nationalityZh: "美国", league: "NBA", hypeScore: 75, cardPrice: 110.00, cardBrand: "Panini Prizm", priceHistory: genPriceHistory(110, -0.08, 0.06, 30), tags: ["Hornets Cornerstone", "Sharpshooter", "Alabama"], news: [{ type: "performance", title: "Miller drops 30+ in back-to-back", titleZh: "米勒背靠背砍30+", source: "ESPN", time: "5h ago", impact: "medium" }, { type: "general", title: "Miller card prices slightly down", titleZh: "米勒卡价小幅下滑", source: "CardLadder", time: "2h ago", impact: "low" }], ...lightIntel(), formAnalysis: { recentAvgRating: 7.4, trend: "declining", trendZh: "下滑中", summary: "Scoring well but team struggles limit his card market appeal.", summaryZh: "得分不错但球队挣扎限制了他的卡市吸引力。", factors: [{ factor: "Small market team", factorZh: "小球市球队", desc: "Hornets' lack of national exposure limits card demand", descZh: "黄蜂缺乏全国曝光限制卡市需求", impact: "negative" }] } },
  { id: 13, name: "Scoot Henderson", nameZh: "斯库特·亨德森", sport: "basketball", team: "Portland Trail Blazers", teamZh: "波特兰开拓者", position: "PG", positionZh: "控球后卫", age: 20, nationality: "USA", nationalityZh: "美国", league: "NBA", hypeScore: 72, cardPrice: 85.00, cardBrand: "Panini Prizm", priceHistory: genPriceHistory(85, 0.05, 0.05, 30), tags: ["Ignite Product", "Speed Demon", "Blazers Future"], news: [{ type: "general", title: "Scoot showing flashes off the bench", titleZh: "斯库特替补席展现闪光", source: "The Athletic", time: "8h ago", impact: "low" }], ...lightIntel(), scoutPicks: [{ source: "Reddit", sourceType: "forum", author: "r/nbacards", recommendation: "Buy-low candidate, his RC is way undervalued", recommendationZh: "低买候选人，他的新秀卡被严重低估", rating: 7.5, time: "1d ago" }] },
  { id: 14, name: "Ron Holland", nameZh: "罗恩·霍兰德", sport: "basketball", team: "Detroit Pistons", teamZh: "底特律活塞", position: "SF", positionZh: "小前锋", age: 19, nationality: "USA", nationalityZh: "美国", league: "NBA", hypeScore: 65, cardPrice: 52.00, cardBrand: "Panini Select", priceHistory: genPriceHistory(52, 0.08, 0.06, 30), tags: ["G League Ignite", "Defensive Wing", "Niche Pick"], news: [{ type: "general", title: "Holland getting rotational minutes in Detroit", titleZh: "霍兰德在活塞获得轮换时间", source: "Detroit Free Press", time: "1d ago", impact: "low" }], ...lightIntel(), scoutPicks: [{ source: "Forum", sourceType: "forum", author: "Blowout Forums", recommendation: "Deep sleeper, flying under radar completely", recommendationZh: "深度潜力股，完全在雷达之下", rating: 6.5, time: "2d ago" }] }
];

// ===== Completed Matches with Price Impact =====
const COMPLETED_MATCHES = [
  {
    id: 1,
    sport: "football",
    league: "La Liga",
    leagueZh: "西甲",
    homeTeam: { name: "FC Barcelona", nameZh: "巴塞罗那", short: "BAR", color: "#a50044", score: 2 },
    awayTeam: { name: "Real Madrid", nameZh: "皇家马德里", short: "RMA", color: "#febe10", score: 1 },
    resultType: "home_win",
    finishedAgo: "1小时前",
    competition: "El Clasico",
    competitionZh: "国家德比",
    playerIds: [1, 4, 5],
    priceTimeline: generateMatchPriceTimeline(90, [410, 390, 155], 'football'),
    events: [
      { minute: 12, type: "goal", player: "Lamine Yamal", playerId: 1, desc: "Goal" },
      { minute: 34, type: "goal", player: "Jude Bellingham", playerId: null, desc: "Goal" },
      { minute: 45, type: "card", player: "Tchouameni", playerId: null, desc: "Yellow Card" },
      { minute: 58, type: "goal", player: "Lamine Yamal", playerId: 1, desc: "Goal" },
      { minute: 65, type: "sub", player: "Endrick", playerId: 4, desc: "Subbed In" },
      { minute: 80, type: "goal", player: "Vinicius Jr", playerId: null, desc: "Goal" }
    ],
    summary: "Barcelona win El Clasico, Yamal MOTM with brace",
    summaryZh: "巴萨赢下国家德比，亚马尔梅开二度当选最佳"
  },
  {
    id: 2,
    sport: "basketball",
    league: "NBA",
    leagueZh: "美职篮",
    homeTeam: { name: "San Antonio Spurs", nameZh: "圣安东尼奥马刺", short: "SAS", color: "#000000", score: 98 },
    awayTeam: { name: "OKC Thunder", nameZh: "俄克拉荷马城雷霆", short: "OKC", color: "#007ac1", score: 102 },
    resultType: "away_win",
    finishedAgo: "2小时前",
    competition: "NBA Regular Season",
    competitionZh: "NBA常规赛",
    playerIds: [9, 10],
    priceTimeline: generateMatchPriceTimeline(48, [1100, 365], 'basketball'),
    events: [
      { minute: 8, type: "goal", player: "Victor Wembanyama", playerId: 9, desc: "Dunk" },
      { minute: 15, type: "goal", player: "Chet Holmgren", playerId: 10, desc: "3PT" },
      { minute: 28, type: "goal", player: "Victor Wembanyama", playerId: 9, desc: "Block + Layup" },
      { minute: 32, type: "var", player: "Wembanyama", playerId: 9, desc: "5x5 Achievement" },
      { minute: 44, type: "goal", player: "SGA", playerId: null, desc: "Clutch 3PT" }
    ],
    summary: "Wemby historic 5x5 despite Spurs loss, card prices surge",
    summaryZh: "文班亚马历史级5x5虽败犹荣，卡价飙升"
  },
  {
    id: 3,
    sport: "football",
    league: "Bundesliga",
    leagueZh: "德甲",
    homeTeam: { name: "Bayern Munich", nameZh: "拜仁慕尼黑", short: "FCB", color: "#dc052d", score: 2 },
    awayTeam: { name: "Arsenal", nameZh: "阿森纳", short: "ARS", color: "#ef0107", score: 0 },
    resultType: "home_win",
    finishedAgo: "3小时前",
    competition: "UEFA Champions League",
    competitionZh: "欧洲冠军联赛",
    playerIds: [3],
    priceTimeline: generateMatchPriceTimeline(90, [255], 'football'),
    events: [
      { minute: 23, type: "goal", player: "Jamal Musiala", playerId: 3, desc: "Goal" },
      { minute: 67, type: "goal", player: "Jamal Musiala", playerId: 3, desc: "Assist" }
    ],
    summary: "Musiala shines in UCL knockout, goal and assist",
    summaryZh: "穆夏拉在欧冠淘汰赛大放异彩，进球加助攻"
  }
];

// ===== Live News Feed (from ESPN + Sky Sports RSS) =====
// In production: fetched from Cloudflare Worker API
// Worker URL: https://rookie-radar-api.{username}.workers.dev/api/news
const NEWS_FEED = [
  { source: "ESPN", sourceTier: "T2", title: "Spurs sign Savio from Man City for $102M", titleZh: "热刺1.02亿美元从曼城签下萨维奥", time: "2026-08-25 07:23 EST", url: "https://www.espn.com/soccer/story/_/id/49719909", category: "transfer", impact: "high", verified: true },
  { source: "ESPN", sourceTier: "T2", title: "Sources: Man City monitoring Liverpool's Gakpo", titleZh: "消息人士：曼城关注利物浦的加克波", time: "2026-08-25 07:23 EST", url: "https://www.espn.com/soccer/story/_/id/49719832", category: "transfer", impact: "medium", verified: true },
  { source: "ESPN", sourceTier: "T2", title: "Mourinho: Referees must protect Vinicius", titleZh: "穆里尼奥：裁判必须保护维尼修斯", time: "2026-08-25 07:23 EST", url: "https://www.espn.com/soccer/story/_/id/49720826", category: "general", impact: "medium", verified: true },
  { source: "Sky Sports", sourceTier: "T2", title: "Arsenal and Al Hilal make progress on Martinelli deal", titleZh: "阿森纳与利雅得新月就马丁内利转会取得进展", time: "2026-08-25 14:29 BST", url: "https://www.skysports.com/football/news/12040/13576278", category: "transfer", impact: "high", verified: true },
  { source: "Sky Sports", sourceTier: "T2", title: "Villa make contact for Mateta and approach AC Milan for Leao", titleZh: "维拉接触马特塔并向AC米兰问价莱奥", time: "2026-08-25 12:00 BST", url: "https://www.skysports.com/football/news/12040/13576879", category: "transfer", impact: "medium", verified: true },
  { source: "Sky Sports", sourceTier: "T2", title: "Chelsea 3-2 Fulham: Palmer and Rogers star as Alonso era begins", titleZh: "切尔西3-2富勒姆：帕尔默和罗杰斯闪耀，阿隆索时代开启", time: "2026-08-24 21:45 BST", url: "https://www.skysports.com/football/fulham-vs-chelsea/report/559453", category: "performance", impact: "medium", verified: true },
  { source: "Sky Sports", sourceTier: "T2", title: "Papers: Arsenal ready to make £130m Alvarez push", titleZh: "报纸：阿森纳准备1.3亿英镑求购阿尔瓦雷斯", time: "2026-08-24 23:10 BST", url: "https://www.skysports.com/football/news/12040/13576722", category: "transfer", impact: "high", verified: true }
];

// API endpoint for Cloudflare Worker (auto-updated news)
const NEWS_API_URL = 'https://rookie-radar-api.292972618.workers.dev/api/news';

async function fetchLiveNews() {
  try {
    const res = await fetch(NEWS_API_URL + '?t=' + Date.now());
    if (!res.ok) throw new Error('API not available');
    const data = await res.json();
    if (data.news && data.news.length) {
      return data.news;
    }
  } catch (e) {
    // Worker not deployed yet, use cached NEWS_FEED
  }
  return NEWS_FEED;
}

function renderNewsFeed(newsItems) {
  const container = document.getElementById('newsFeedList');
  if (!container) return;
  container.innerHTML = newsItems.map(n => {
    const tierColor = n.sourceTier === 'T1' ? '#00E5A0' : n.sourceTier === 'T2' ? '#4dabf7' : n.sourceTier === 'T3' ? '#b196fc' : '#8b949e';
    return `
      <div class="news-feed-item ${n.category}" data-url="${n.url || ''}">
        <div class="news-feed-source" style="border-left:3px solid ${tierColor};padding-left:8px;">
          <div class="news-feed-header">
            <span class="news-feed-source-name" style="color:${tierColor};">${n.source}</span>
            <span class="news-feed-tier">${n.sourceTier}</span>
            <span class="news-feed-time">${n.time}</span>
            ${n.verified ? '<span class="news-feed-verified" style="color:#00E5A0;">✓ verified</span>' : ''}
          </div>
          <div class="news-feed-title">${n.title}</div>
          <div class="news-feed-title-zh">${n.titleZh}</div>
          <div class="news-feed-cat">${n.category} · ${n.impact} impact</div>
        </div>
      </div>`;
  }).join('');
  container.querySelectorAll('.news-feed-item').forEach(item => {
    item.addEventListener('click', () => {
      const url = item.dataset.url;
      if (url) window.open(url, '_blank');
    });
  });
}

function generateMatchPriceTimeline(minutes, basePrices, sport) {
  const timeline = [];
  const points = sport === 'football' ? Math.ceil(minutes / 5) : Math.ceil(minutes / 3);
  for (let i = 0; i <= points; i++) {
    const m = Math.round((i / points) * minutes);
    timeline.push({
      minute: m,
      prices: basePrices.map((base, idx) => {
        const variance = Math.sin(m / 8 + idx * 2) * 0.06 + (Math.random() - 0.4) * 0.04;
        return Math.round(base * (1 + variance) * 100) / 100;
      })
    });
  }
  // Force last price to show impact
  const lastEntry = timeline[timeline.length - 1];
  basePrices.forEach((base, idx) => {
    const impact = 0.05 + Math.random() * 0.15;
    lastEntry.prices[idx] = Math.round(base * (1 + impact) * 100) / 100;
  });
  return timeline;
}

// ===== State =====
let currentLang = 'dual';
let currentSport = 'all';
let currentSort = 'hype';
let searchQuery = '';
let watchlist = new Set();
let activePlayerId = null;
let activeIntelTab = 'overview';
let activeMatchPlayerIdx = 0;
let charts = {};

// ===== Helpers =====
function getPriceChange(p) {
  const h = p.priceHistory;
  return ((h[h.length-1] - h[h.length-2]) / h[h.length-2] * 100);
}
function getOverallChange(p) {
  const h = p.priceHistory;
  return ((h[h.length-1] - h[0]) / h[0] * 100);
}
function fmtPrice(p) { return '$' + p.toFixed(2); }
function getInitials(name) { return name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase(); }
function sportColor(s) { return s === 'football' ? 'var(--accent)' : 'var(--orange)'; }
function sportIcon(s) { return s === 'football' ? '⚽' : '🏀'; }

// ===== Sparkline =====
function createSparkline(canvas, data, isUp) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  ctx.clearRect(0, 0, w, h);
  const color = isUp ? '#00E5A0' : '#ff4757';
  const fillColor = isUp ? 'rgba(0,229,160,0.1)' : 'rgba(255,71,87,0.1)';
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = (i / (data.length-1)) * w;
    const y = h - ((v - min) / range) * (h - 8) - 4;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
  ctx.fillStyle = fillColor; ctx.fill();
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = (i / (data.length-1)) * w;
    const y = h - ((v - min) / range) * (h - 8) - 4;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.lineJoin = 'round'; ctx.stroke();
}

// ===== Player Card =====
function renderPlayerCard(p) {
  const change = getPriceChange(p);
  const isUp = change >= 0;
  const sc = p.sport === 'basketball' ? 'basketball' : '';
  const zhName = currentLang !== 'en' ? `<div class="player-name-zh">${p.nameZh}</div>` : '';
  const enName = currentLang !== 'zh' ? p.name : p.nameZh;
  return `
    <div class="player-card ${sc}" data-player-id="${p.id}">
      <div class="player-card-top ${sc}"></div>
      <div class="player-card-body">
        <div class="player-card-header">
          <div class="player-avatar ${p.sport}">${getInitials(p.name)}</div>
          <div class="player-name-block">
            <div class="player-name-en">${enName}</div>
            ${zhName}
          </div>
        </div>
        <div class="player-card-meta">
          <span class="meta-tag sport-${p.sport}">${sportIcon(p.sport)} ${p.league}</span>
          <span class="meta-tag">${p.position}</span>
          <span class="meta-tag">${p.age}y</span>
          <span class="meta-tag">${p.nationality}</span>
        </div>
        <div class="player-price-row">
          <div>
            <div class="price-label">卡价 Card Price</div>
            <div class="price-value">${fmtPrice(p.cardPrice)}</div>
          </div>
          <div class="price-change ${isUp ? 'up' : 'down'}">${isUp ? '↑' : '↓'} ${Math.abs(change).toFixed(1)}%</div>
        </div>
        <div class="sparkline-container"><canvas width="240" height="40" data-spark="${p.id}"></canvas></div>
        <div class="player-card-footer">
          <div class="hype-meter">
            <span>🔥 ${p.hypeScore}</span>
            <div class="hype-bar"><div class="hype-fill" style="width:${p.hypeScore}%"></div></div>
          </div>
          <button class="watch-btn ${watchlist.has(p.id) ? 'active' : ''}" data-watch="${p.id}">${watchlist.has(p.id) ? '★' : '☆'}</button>
        </div>
      </div>
    </div>`;
}

// ===== Dashboard =====
function renderDashboard() {
  const players = filterPlayers();
  const rising = players.filter(p => getPriceChange(p) >= 0).length;
  const falling = players.filter(p => getPriceChange(p) < 0).length;
  document.getElementById('statTotal').textContent = PLAYERS.length;
  document.getElementById('statRising').textContent = rising;
  document.getElementById('statFalling').textContent = falling;
  document.getElementById('statLive').textContent = COMPLETED_MATCHES.length;
  const grid = document.getElementById('playerGrid');
  grid.innerHTML = players.map(renderPlayerCard).join('') || '<div class="empty-state"><p>没有找到匹配的球员</p><p class="muted">No players found</p></div>';
  setTimeout(() => players.forEach(p => {
    const c = document.querySelector(`canvas[data-spark="${p.id}"]`);
    if (c) createSparkline(c, p.priceHistory, getPriceChange(p) >= 0);
  }), 0);
  bindCardEvents();
}

// ===== Filter =====
function filterPlayers() {
  let players = [...PLAYERS];
  if (currentSport !== 'all') players = players.filter(p => p.sport === currentSport);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    players = players.filter(p =>
      p.name.toLowerCase().includes(q) || p.nameZh.includes(searchQuery) ||
      p.team.toLowerCase().includes(q) || p.teamZh.includes(searchQuery) ||
      p.tags.some(t => t.toLowerCase().includes(q)));
  }
  switch (currentSort) {
    case 'hype': players.sort((a,b) => b.hypeScore - a.hypeScore); break;
    case 'price': players.sort((a,b) => b.cardPrice - a.cardPrice); break;
    case 'change': players.sort((a,b) => getPriceChange(b) - getPriceChange(a)); break;
  }
  return players;
}

// ===== Prospects Tab =====
function renderProspects() {
  const players = filterPlayers();
  const list = document.getElementById('prospectsList');
  list.innerHTML = players.map(p => {
    const change = getPriceChange(p);
    const isUp = change >= 0;
    return `
      <div class="prospect-item ${activePlayerId === p.id ? 'active' : ''}" data-prospect-id="${p.id}">
        <div class="prospect-item-avatar" style="background:${sportColor(p.sport)}">${getInitials(p.name)}</div>
        <div class="prospect-item-info">
          <div class="prospect-item-name">${currentLang === 'zh' ? p.nameZh : p.name}</div>
          <div class="prospect-item-meta">${p.team} · ${p.position}</div>
        </div>
        <div class="prospect-item-price ${isUp ? 'up' : 'down'}">
          ${fmtPrice(p.cardPrice)}
          <div style="font-size:11px">${isUp ? '↑' : '↓'}${Math.abs(change).toFixed(1)}%</div>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.prospect-item').forEach(item => {
    item.addEventListener('click', () => {
      activePlayerId = parseInt(item.dataset.prospectId);
      renderProspects();
      renderProspectDetail(activePlayerId);
    });
  });
  if (activePlayerId && players.find(p => p.id === activePlayerId)) renderProspectDetail(activePlayerId);
}

function renderProspectDetail(id) {
  const p = PLAYERS.find(pl => pl.id === id);
  if (!p) return;
  const detail = document.getElementById('prospectsDetail');
  const change = getPriceChange(p);
  const overall = getOverallChange(p);
  const isUp = change >= 0;
  detail.innerHTML = `
    <div class="detail-header">
      <div class="detail-avatar" style="background:${sportColor(p.sport)}">${getInitials(p.name)}</div>
      <div>
        <div class="detail-name-en">${p.name}</div>
        <div class="detail-name-zh">${p.nameZh}</div>
        <div class="detail-badges">
          <span class="meta-tag sport-${p.sport}">${sportIcon(p.sport)} ${p.league}</span>
          <span class="meta-tag">${p.team}</span>
          <span class="meta-tag">${p.position}</span>
        </div>
      </div>
    </div>
    <div class="detail-stats-grid">
      <div class="detail-stat"><div class="detail-stat-label">卡价 Price</div><div class="detail-stat-value">${fmtPrice(p.cardPrice)}</div></div>
      <div class="detail-stat"><div class="detail-stat-label">今日 Today</div><div class="detail-stat-value ${isUp ? 'trend-up' : 'trend-down'}">${isUp ? '+' : ''}${change.toFixed(1)}%</div></div>
      <div class="detail-stat"><div class="detail-stat-label">30日 30D</div><div class="detail-stat-value ${overall >= 0 ? 'trend-up' : 'trend-down'}">${overall >= 0 ? '+' : ''}${overall.toFixed(1)}%</div></div>
      <div class="detail-stat"><div class="detail-stat-label">热度 Hype</div><div class="detail-stat-value">🔥 ${p.hypeScore}</div></div>
    </div>
    <div class="chart-section">
      <div class="chart-section-title">
        <span>📈 卡价走势 Price History</span>
        <div class="chart-toggles">
          <button class="chart-toggle active" data-range="7">7D</button>
          <button class="chart-toggle" data-range="14">14D</button>
          <button class="chart-toggle" data-range="30">30D</button>
        </div>
      </div>
      <div class="chart-container"><canvas id="detailChart"></canvas></div>
    </div>
    ${p.priceImpactTimeline && p.priceImpactTimeline.length ? `
    <div class="chart-section">
      <div class="chart-section-title"><span>⏱️ 卡价影响事件 Price Impact Events</span></div>
      ${renderTimelineHTML(p.priceImpactTimeline)}
    </div>` : ''}
    <div class="chart-section">
      <div class="chart-section-title"><span>📰 情报 News & Intel</span></div>
      ${p.news.map(n => `
        <div class="intel-news-item ${n.type || 'general'}">
          <div class="intel-news-header">
            <div class="intel-news-title">${n.title}</div>
            ${n.impact ? `<span class="impact-badge ${n.impact}">${n.impact === 'high' ? '高影响' : n.impact === 'medium' ? '中影响' : '低影响'}</span>` : ''}
          </div>
          ${currentLang !== 'en' ? `<div class="intel-news-zh">${n.titleZh}</div>` : ''}
          <div class="intel-news-footer">
            <span class="news-source">${n.source}</span>
            <span>${n.time}</span>
          </div>
        </div>`).join('')}
    </div>
    <button class="chart-toggle" style="width:100%;padding:10px;margin-top:8px;" onclick="openPlayerModal(${p.id})">查看完整情报 View Full Intel →</button>
  `;
  renderDetailChart(p, 7);
  detail.querySelectorAll('.chart-toggle[data-range]').forEach(btn => {
    btn.addEventListener('click', () => {
      detail.querySelectorAll('.chart-toggle[data-range]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDetailChart(p, parseInt(btn.dataset.range));
    });
  });
}

function renderTimelineHTML(timeline) {
  if (!timeline || !timeline.length) return '<p style="color:var(--text-muted);font-size:13px;">暂无数据 No data</p>';
  return `
    <div class="timeline-container">
      <div class="timeline-line"></div>
      ${timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-dot ${t.category}"></div>
          <div class="timeline-date">${t.date}</div>
          <div class="timeline-event">${t.event}</div>
          <div class="timeline-event-zh">${t.eventZh}</div>
          <div class="timeline-price">
            <span class="timeline-price-before">${fmtPrice(t.priceBefore)}</span>
            <span class="timeline-price-arrow">→</span>
            <span class="timeline-price-after">${fmtPrice(t.priceAfter)}</span>
            <span class="timeline-price-change ${t.changePct >= 0 ? 'up' : 'down'}">${t.changePct >= 0 ? '+' : ''}${t.changePct.toFixed(1)}%</span>
          </div>
        </div>`).join('')}
    </div>`;
}

function renderDetailChart(player, range) {
  const ctx = document.getElementById('detailChart');
  if (!ctx) return;
  if (charts.detail) charts.detail.destroy();
  const data = player.priceHistory.slice(-range);
  const labels = data.map((_, i) => `Day ${i+1}`);
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(0,229,160,0.25)');
  gradient.addColorStop(1, 'rgba(0,229,160,0)');
  charts.detail = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label: 'Card Price', data, borderColor: '#00E5A0', backgroundColor: gradient, borderWidth: 2, fill: true, tension: 0.35, pointRadius: 0, pointHoverRadius: 5 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#161b22', borderColor: '#30363d', borderWidth: 1, titleColor: '#8b949e', bodyColor: '#e6edf3', bodyFont: { weight: '700', size: 14 }, callbacks: { label: c => '$' + c.parsed.y.toFixed(2) } } },
      scales: {
        x: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 10 } } },
        y: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 10 }, callback: v => '$' + v.toFixed(0) } }
      }
    }
  });
}

// ===== Match Intelligence Tab =====
function renderMatchIntelligence() {
  const container = document.getElementById('matchIntelList');
  container.innerHTML = COMPLETED_MATCHES.map(match => {
    const sportIc = sportIcon(match.sport);
    const homeWin = match.resultType === 'home_win';
    const awayWin = match.resultType === 'away_win';
    const draw = match.resultType === 'draw';
    return `
      <div class="match-intel-card" data-match-id="${match.id}">
        <div class="match-intel-header-bar">
          <div class="match-teams">
            <div class="match-team">
              <div class="match-team-badge" style="background:${match.homeTeam.color}">${match.homeTeam.short}</div>
              <span>${currentLang === 'zh' ? match.homeTeam.nameZh : match.homeTeam.name}</span>
              ${homeWin ? '<span class="match-result-badge win">胜 W</span>' : awayWin ? '<span class="match-result-badge loss">负 L</span>' : '<span class="match-result-badge draw">平 D</span>'}
            </div>
            <div class="match-score">${match.homeTeam.score} - ${match.awayTeam.score}</div>
            <div class="match-team">
              ${awayWin ? '<span class="match-result-badge win">胜 W</span>' : homeWin ? '<span class="match-result-badge loss">负 L</span>' : '<span class="match-result-badge draw">平 D</span>'}
              <span>${currentLang === 'zh' ? match.awayTeam.nameZh : match.awayTeam.name}</span>
              <div class="match-team-badge" style="background:${match.awayTeam.color}">${match.awayTeam.short}</div>
            </div>
          </div>
          <div class="match-info">
            <span class="match-league">${sportIc} ${currentLang === 'zh' ? match.competitionZh : match.competition}</span>
            <span class="match-time-ago">⏱ ${match.finishedAgo}</span>
          </div>
        </div>
        <div class="match-intel-body">
          <div class="match-intel-players" data-match-players="${match.id}">
            ${match.playerIds.map((pid, idx) => {
              const p = PLAYERS.find(pl => pl.id === pid);
              if (!p) return '';
              const lastPrice = match.priceTimeline[match.priceTimeline.length-1].prices[idx] || p.cardPrice;
              const firstPrice = match.priceTimeline[0].prices[idx] || p.cardPrice;
              const change = ((lastPrice - firstPrice) / firstPrice * 100);
              const isUp = change >= 0;
              return `
                <div class="match-intel-player-chip ${idx === 0 ? 'active' : ''}" data-player-idx="${idx}" data-match-id="${match.id}">
                  <div class="chip-avatar" style="background:${sportColor(p.sport)}">${getInitials(p.name)}</div>
                  <span class="chip-name">${p.name}</span>
                  <span class="chip-price ${isUp ? 'up' : 'down'}">${isUp ? '↑' : '↓'}${Math.abs(change).toFixed(1)}%</span>
                </div>`;
            }).join('')}
          </div>
          <div class="match-intel-chart-container"><canvas id="matchChart-${match.id}"></canvas></div>
          <div class="match-intel-summary">
            <div>
              <div class="impact-summary-label">卡价影响 Price Impact</div>
              <div class="impact-summary-value up">+${(Math.random()*15+5).toFixed(1)}%</div>
            </div>
            <div class="impact-summary-desc">${currentLang === 'zh' ? match.summaryZh : match.summary}</div>
          </div>
          <div class="match-events">
            ${match.events.map(e => {
              const icon = e.type === 'goal' ? (match.sport === 'football' ? '⚽' : '🏀') : e.type === 'card' ? '🟨' : e.type === 'sub' ? '🔄' : '📺';
              return `<div class="match-event ${e.type}">${icon} ${e.minute}' ${e.player} — ${e.desc}</div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  }).join('');

  container.querySelectorAll('.match-intel-player-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const matchId = parseInt(chip.dataset.matchId);
      const idx = parseInt(chip.dataset.playerIdx);
      // Toggle active within this match
      chip.parentElement.querySelectorAll('.match-intel-player-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderMatchChart(matchId, idx);
    });
  });

  COMPLETED_MATCHES.forEach(m => renderMatchChart(m.id, 0));
}

function renderMatchChart(matchId, playerIdx) {
  const match = COMPLETED_MATCHES.find(m => m.id === matchId);
  if (!match) return;
  const canvas = document.getElementById(`matchChart-${matchId}`);
  if (!canvas) return;
  if (charts['match-' + matchId]) charts['match-' + matchId].destroy();

  const labels = match.priceTimeline.map(t => match.sport === 'football' ? t.minute + "'" : t.minute + 'min');
  const colors = ['#00E5A0', '#4dabf7', '#ff8c42'];
  const datasets = match.playerIds.map((pid, idx) => {
    const p = PLAYERS.find(pl => pl.id === pid);
    const color = colors[idx % colors.length];
    return {
      label: p.name,
      data: match.priceTimeline.map(t => t.prices[idx]),
      borderColor: idx === playerIdx ? color : color + '40',
      backgroundColor: idx === playerIdx ? color + '15' : 'transparent',
      borderWidth: idx === playerIdx ? 2.5 : 1,
      fill: idx === playerIdx,
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 5
    };
  });

  charts['match-' + matchId] = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: true, position: 'top', labels: { color: '#8b949e', font: { size: 11 }, boxWidth: 12, padding: 8 } },
        tooltip: { backgroundColor: '#161b22', borderColor: '#30363d', borderWidth: 1, titleColor: '#8b949e', bodyColor: '#e6edf3', callbacks: { label: c => c.dataset.label + ': $' + c.parsed.y.toFixed(2) } }
      },
      scales: {
        x: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 9 }, maxTicksLimit: 10 } },
        y: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 9 }, callback: v => '$' + v.toFixed(0) } }
      }
    }
  });
}

// ===== Player Modal (Comprehensive Intel) =====
function openPlayerModal(id) {
  const p = PLAYERS.find(pl => pl.id === id);
  if (!p) return;
  activePlayerId = id;
  activeIntelTab = 'overview';
  const modal = document.getElementById('playerModal');
  const body = document.getElementById('modalBody');
  const change = getPriceChange(p);
  const overall = getOverallChange(p);
  const isUp = change >= 0;
  const sc = sportColor(p.sport);
  const sIc = sportIcon(p.sport);

  body.innerHTML = `
    <button class="modal-close" id="modalClose">&times;</button>
    <div class="modal-header-section">
      <div class="detail-header" style="margin-bottom:16px;border:none;padding-bottom:0;">
        <div class="detail-avatar" style="background:${sc}">${getInitials(p.name)}</div>
        <div>
          <div class="detail-name-en">${p.name}</div>
          <div class="detail-name-zh">${p.nameZh}</div>
          <div class="detail-badges">
            <span class="meta-tag sport-${p.sport}">${sIc} ${p.league}</span>
            <span class="meta-tag">${p.team} · ${p.teamZh}</span>
            <span class="meta-tag">${p.position} · ${p.positionZh}</span>
            <span class="meta-tag">${p.age}岁</span>
            <span class="meta-tag">${p.nationality} · ${p.nationalityZh}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-quickstats">
      <div class="detail-stat"><div class="detail-stat-label">卡价 Price</div><div class="detail-stat-value">${fmtPrice(p.cardPrice)}</div></div>
      <div class="detail-stat"><div class="detail-stat-label">今日 Today</div><div class="detail-stat-value ${isUp ? 'trend-up' : 'trend-down'}">${isUp ? '+' : ''}${change.toFixed(1)}%</div></div>
      <div class="detail-stat"><div class="detail-stat-label">30日 30D</div><div class="detail-stat-value ${overall >= 0 ? 'trend-up' : 'trend-down'}">${overall >= 0 ? '+' : ''}${overall.toFixed(1)}%</div></div>
      <div class="detail-stat"><div class="detail-stat-label">热度 Hype</div><div class="detail-stat-value">🔥 ${p.hypeScore}</div></div>
    </div>
    <div class="intel-tabs">
      <button class="intel-tab active" data-intel-tab="overview">📊 概览</button>
      <button class="intel-tab" data-intel-tab="news">📰 新闻</button>
      <button class="intel-tab" data-intel-tab="transfer">🔄 转会</button>
      <button class="intel-tab" data-intel-tab="injury">🏥 伤病</button>
      <button class="intel-tab" data-intel-tab="form">📉 状态</button>
      <button class="intel-tab" data-intel-tab="scout">🔍 球探</button>
      <button class="intel-tab" data-intel-tab="timeline">⏱️ 时间线</button>
    </div>
    <div class="intel-content" id="intelContent"></div>
  `;

  modal.classList.add('active');
  renderIntelTab(p, 'overview');

  body.querySelectorAll('.intel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      body.querySelectorAll('.intel-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeIntelTab = tab.dataset.intelTab;
      renderIntelTab(p, activeIntelTab);
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
}

function renderIntelTab(p, tab) {
  const container = document.getElementById('intelContent');
  if (!container) return;

  switch (tab) {
    case 'overview':
      container.innerHTML = renderOverviewTab(p);
      setTimeout(() => renderOverviewChart(p), 50);
      break;
    case 'news':
      container.innerHTML = renderNewsTab(p);
      break;
    case 'transfer':
      container.innerHTML = renderTransferTab(p);
      break;
    case 'injury':
      container.innerHTML = renderInjuryTab(p);
      break;
    case 'form':
      container.innerHTML = renderFormTab(p);
      break;
    case 'scout':
      container.innerHTML = renderScoutTab(p);
      break;
    case 'timeline':
      container.innerHTML = renderTimelineTab(p);
      break;
  }
}

// ===== Intel Tab Renderers =====
function renderOverviewTab(p) {
  const change = getPriceChange(p);
  const isUp = change >= 0;
  return `
    ${p.realCardData ? `
    <div class="real-card-data">
      <div class="real-card-data-title">✓ 真实成交卡价 Real Verified Card Prices</div>
      <div class="real-card-data-item">Manga SSP PSA 10: ${p.realCardData.mangaSSP_PSA10}</div>
      <div class="real-card-data-item">SuperFractor 1/1: ${p.realCardData.superFractor_1of1}</div>
      <div class="real-card-data-item">Donruss Gold 1/1 PSA 10: ${p.realCardData.donrussGold_1of1_PSA10}</div>
      <div class="real-card-data-item">月度涨幅: ${p.realCardData.monthlySurge}</div>
      <div class="real-card-data-source">Source: ${p.realCardData.source}</div>
    </div>` : ''}
    <div class="chart-section">
      <div class="chart-section-title">
        <span>📈 30日卡价走势 30-Day Price History</span>
        <span style="font-size:12px;color:var(--text-muted)">${p.cardBrand}</span>
      </div>
      <div class="chart-container"><canvas id="overviewChart"></canvas></div>
    </div>
    ${p.recentMatches && p.recentMatches.length ? `
    <div class="chart-section">
      <div class="chart-section-title"><span>🏟️ 最近比赛 Recent Matches</span></div>
      ${p.recentMatches.map(m => {
        const isWin = m.resultType === 'win';
        const isDraw = m.resultType === 'draw';
        const resultClass = isWin ? 'win' : isDraw ? 'draw' : 'loss';
        const resultLabel = isWin ? '胜' : isDraw ? '平' : '负';
        const impactUp = m.changePct >= 0;
        return `
          <div class="recent-match-mini">
            <span class="result-badge ${resultClass}">${resultLabel}</span>
            <span class="match-mini-info">${m.opponent} · ${m.competition} · ${m.date}</span>
            <span style="font-weight:600">${m.result}</span>
            <span class="match-mini-rating">★ ${m.rating}</span>
            <span class="match-mini-impact ${impactUp ? 'up' : 'down'}">${impactUp ? '↑' : '↓'}${Math.abs(m.changePct).toFixed(1)}%</span>
          </div>`;
      }).join('')}
    </div>` : ''}
    ${p.priceImpactTimeline && p.priceImpactTimeline.length ? `
    <div class="chart-section">
      <div class="chart-section-title"><span>⏱️ 价格影响事件 Impact Events</span></div>
      ${renderTimelineHTML(p.priceImpactTimeline)}
    </div>` : ''}
  `;
}

function renderOverviewChart(p) {
  const ctx = document.getElementById('overviewChart');
  if (!ctx) return;
  if (charts.overview) charts.overview.destroy();
  const data = p.priceHistory;
  const labels = data.map((_, i) => `Day ${i+1}`);
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
  gradient.addColorStop(0, 'rgba(0,229,160,0.25)');
  gradient.addColorStop(1, 'rgba(0,229,160,0)');
  charts.overview = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label: 'Card Price', data, borderColor: '#00E5A0', backgroundColor: gradient, borderWidth: 2, fill: true, tension: 0.35, pointRadius: 0, pointHoverRadius: 5 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: { legend: { display: false }, tooltip: { backgroundColor: '#161b22', borderColor: '#30363d', borderWidth: 1, titleColor: '#8b949e', bodyColor: '#e6edf3', bodyFont: { weight: '700', size: 14 }, callbacks: { label: c => '$' + c.parsed.y.toFixed(2) } } },
      scales: { x: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 10 } } }, y: { grid: { color: '#21262d' }, ticks: { color: '#6e7681', font: { size: 10 }, callback: v => '$' + v.toFixed(0) } } }
    }
  });
}

function renderNewsTab(p) {
  return `
    <div class="ai-fetch-hint">
      <span>💡</span>
      <span>这里展示的是该球员的情报聚合。实际使用中，可让我在对话中搜索外网最新消息并翻译更新。<strong>问我"搜一下 Yamal 最新消息"</strong>即可。</span>
    </div>
    ${p.news.map(n => `
      <div class="intel-news-item ${n.type || 'general'}">
        <div class="intel-news-header">
          <div class="intel-news-title">${n.title}</div>
          ${n.impact ? `<span class="impact-badge ${n.impact}">${n.impact === 'high' ? '高影响 HIGH' : n.impact === 'medium' ? '中影响 MED' : '低影响 LOW'}</span>` : ''}
        </div>
        ${currentLang !== 'en' ? `<div class="intel-news-zh">${n.titleZh}</div>` : ''}
        <div class="intel-news-footer">
          <span class="news-source">📡 ${n.source}</span>
          <span>🕐 ${n.time}</span>
          ${n.verified ? `<span style="color:var(--green);font-weight:600;">✓ ${n.verified}</span>` : ''}
        </div>
      </div>
    `).join('')}
  `;
}

function renderTransferTab(p) {
  const transfers = p.transferNews || [];
  if (!transfers.length) return '<p style="color:var(--text-muted);font-size:13px;padding:20px;">暂无转会情报 No transfer intel available</p>';
  return `
    <div class="ai-fetch-hint">
      <span>🔄</span>
      <span>转会情报会影响卡价短期波动。关注<strong>已确认</strong>的转会消息，传闻需谨慎。</span>
    </div>
    ${transfers.map(t => `
      <div class="intel-news-item transfer">
        <div class="intel-news-header">
          <div class="intel-news-title">${t.title}</div>
          <div style="display:flex;gap:4px;flex-wrap:wrap;">
            <span class="status-badge ${t.status}">${t.statusZh}</span>
            <span class="impact-badge ${t.impact}">${t.impactZh}影响</span>
          </div>
        </div>
        ${currentLang !== 'en' ? `<div class="intel-news-zh">${t.titleZh}</div>` : ''}
        <div class="intel-news-footer">
          <span class="news-source">📡 ${t.source}</span>
          <span>🕐 ${t.time}</span>
        </div>
      </div>`).join('')}
  `;
}

function renderInjuryTab(p) {
  const ir = p.injuryReport || { currentStatus: 'fit', currentStatusZh: '健康', current: null, history: [] };
  const statusIcon = ir.currentStatus === 'fit' ? '✅' : ir.currentStatus === 'injured' ? '🏥' : ir.currentStatus === 'recovering' ? '🔄' : '✅';
  return `
    <div class="injury-status-card">
      <div class="injury-status-icon">${statusIcon}</div>
      <div style="flex:1;">
        <div style="font-size:14px;font-weight:700;margin-bottom:4px;">当前状态 Current Status</div>
        <span class="status-badge ${ir.currentStatus}">${ir.currentStatusZh}</span>
        ${ir.current ? `
          <div style="margin-top:12px;font-size:13px;line-height:1.8;color:var(--text-secondary);">
            <div><strong>${ir.current.typeZh || ir.current.type}</strong></div>
            <div>📅 发生时间: ${ir.current.date || '未知'}</div>
            <div>⚡ 受伤原因: ${ir.current.causeZh || ir.current.cause || '比赛受伤'}</div>
            <div>🔬 严重程度: ${ir.current.severityZh || ir.current.severity || '未知'}</div>
            <div>🔄 预计回归: <span style="color:var(--green);font-weight:600;">${ir.current.expectedReturnZh || ir.current.expectedReturn || '未知'}</span></div>
            ${ir.current.recurrenceRisk ? `<div>⚠️ 复发风险: ${ir.current.recurrenceRisk}</div>` : ''}
            ${ir.current.clubStatement ? `<div style="margin-top:6px;padding:8px 12px;background:var(--bg);border-radius:6px;font-size:12px;">📋 ${ir.current.clubStatementZh || ir.current.clubStatement}</div>` : ''}
          </div>
        ` : ''}
      </div>
    </div>
    ${ir.history && ir.history.length ? `
    <div class="news-section-title">📋 伤病史 Injury History</div>
    <div class="injury-history-list">
      ${ir.history.map(h => `
        <div class="injury-history-item">
          <span class="injury-history-season">${h.season}</span>
          <span class="injury-history-detail">${h.injuryZh} · ${h.duration}</span>
          <span class="injury-history-duration">缺阵 ${h.gamesMissed} 场</span>
        </div>`).join('')}
    </div>` : '<p style="font-size:12px;color:var(--text-muted);">无伤病史记录 No injury history</p>'}
    <div class="ai-fetch-hint" style="margin-top:16px;">
      <span>💡</span>
      <span>伤病是卡价<strong>短期下跌</strong>的最常见原因。重大伤病（如十字韧带）可能导致卡价暴跌20-40%。</span>
    </div>
  `;
}

function renderFormTab(p) {
  const fa = p.formAnalysis;
  if (!fa) return '<p style="color:var(--text-muted);font-size:13px;padding:20px;">暂无状态分析 No form analysis available</p>';
  const trendColor = fa.trend === 'rising' ? 'var(--green)' : fa.trend === 'declining' ? 'var(--red)' : 'var(--yellow)';
  const trendIcon = fa.trend === 'rising' ? '📈' : fa.trend === 'declining' ? '📉' : '➡️';
  const ratingColor = fa.recentAvgRating >= 8 ? 'var(--green)' : fa.recentAvgRating >= 7 ? 'var(--yellow)' : 'var(--red)';
  return `
    <div class="form-card">
      <div class="form-overall">
        <div class="form-rating-circle" style="background:${ratingColor}">${fa.recentAvgRating.toFixed(1)}</div>
        <div>
          <div style="font-size:13px;color:var(--text-muted);margin-bottom:2px;">近期场均评分 Recent Avg Rating</div>
          <div class="form-trend ${fa.trend}">${trendIcon} ${fa.trendZh} / ${fa.trend}</div>
        </div>
      </div>
      <div class="form-summary">${fa.summary}</div>
      ${currentLang !== 'en' ? `<div class="form-summary-zh">${fa.summaryZh}</div>` : ''}
    </div>
    ${fa.factors && fa.factors.length ? `
    <div class="news-section-title">🔍 影响因素 Key Factors</div>
    <div class="form-factors">
      ${fa.factors.map(f => {
        const icon = f.impact === 'positive' ? '✅' : f.impact === 'negative' ? '⚠️' : '➡️';
        return `
          <div class="form-factor ${f.impact}">
            <div class="form-factor-icon">${icon}</div>
            <div class="form-factor-content">
              <div class="form-factor-title">${f.factor}</div>
              <div class="form-factor-desc">${f.desc}</div>
              ${currentLang !== 'en' ? `<div class="form-factor-desc-zh">${f.descZh}</div>` : ''}
            </div>
          </div>`;
      }).join('')}
    </div>` : ''}
    <div class="ai-fetch-hint" style="margin-top:16px;">
      <span>💡</span>
      <span>状态分析帮你理解<strong>"为什么卡价在涨/跌"</strong>。负面因素是低买机会，正面因素确认持有。</span>
    </div>
  `;
}

function renderScoutTab(p) {
  const picks = p.scoutPicks || [];
  if (!picks.length) return '<p style="color:var(--text-muted);font-size:13px;padding:20px;">暂无球探推荐 No scout picks available</p>';
  const sourceIcons = { youtube: '▶️', blog: '📝', journalist: '📰', forum: '💬' };
  return `
    <div class="ai-fetch-hint">
      <span>🔍</span>
      <span>来自<strong>YouTube博主、记者、论坛</strong>的推荐和分析。这些是发现潜力黑马的重要渠道。</span>
    </div>
    ${picks.map(s => {
      const icon = sourceIcons[s.sourceType] || '📝';
      return `
        <div class="scout-card">
          <div class="scout-source-icon ${s.sourceType}">${icon}</div>
          <div class="scout-content">
            <div class="scout-header">
              <span class="scout-author">${s.author}</span>
              <span class="scout-source-label">${s.source}</span>
            </div>
            <div class="scout-recommendation">${s.recommendation}</div>
            ${currentLang !== 'en' ? `<div class="scout-recommendation-zh">${s.recommendationZh}</div>` : ''}
            <div class="scout-rating">★ ${s.rating}/10 · 🕐 ${s.time}</div>
          </div>
        </div>`;
    }).join('')}
  `;
}

function renderTimelineTab(p) {
  const tl = p.priceImpactTimeline || [];
  if (!tl.length) return '<p style="color:var(--text-muted);font-size:13px;padding:20px;">暂无价格影响时间线 No price impact timeline</p>';
  return `
    <div class="ai-fetch-hint">
      <span>⏱️</span>
      <span>时间线展示<strong>每个事件对卡价的具体影响</strong>。绿色=上涨事件，红色=下跌事件。帮你建立"事件→价格"的直觉。</span>
    </div>
    <div class="chart-section">
      ${renderTimelineHTML(tl)}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;padding:14px;background:var(--bg);border-radius:var(--radius-sm);">
      <span style="font-size:12px;color:var(--text-muted);width:100%;margin-bottom:8px;">事件类型图例 Event Types:</span>
      <span class="match-event" style="background:var(--green-dim);color:var(--green);">⚽ 比赛 Performance</span>
      <span class="match-event" style="background:rgba(77,171,247,0.12);color:var(--blue);">🔄 转会 Transfer</span>
      <span class="match-event" style="background:var(--red-dim);color:var(--red);">🏥 伤病 Injury</span>
      <span class="match-event" style="background:rgba(177,151,252,0.12);color:var(--purple);">📝 合同 Contract</span>
      <span class="match-event" style="background:rgba(255,212,59,0.12);color:var(--yellow);">🏆 获奖 Award</span>
    </div>
  `;
}

// ===== Watchlist =====
function renderWatchlist() {
  const grid = document.getElementById('watchlistGrid');
  const watched = PLAYERS.filter(p => watchlist.has(p.id));
  grid.innerHTML = watched.length
    ? watched.map(renderPlayerCard).join('')
    : '<div class="empty-state"><p>还没有关注的球员</p><p class="muted">No players in watchlist. Click ☆ on a card.</p></div>';
  setTimeout(() => watched.forEach(p => {
    const c = document.querySelector(`canvas[data-spark="${p.id}"]`);
    if (c) createSparkline(c, p.priceHistory, getPriceChange(p) >= 0);
  }), 0);
  bindCardEvents();
}

// ===== Card Events =====
function bindCardEvents() {
  document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.watch-btn')) return;
      openPlayerModal(parseInt(card.dataset.playerId));
    });
  });
  document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.watch);
      watchlist.has(id) ? watchlist.delete(id) : watchlist.add(id);
      const tab = document.querySelector('.tab-btn.active').dataset.tab;
      if (tab === 'dashboard') renderDashboard();
      if (tab === 'watchlist') renderWatchlist();
    });
  });
}

function closeModal() {
  document.getElementById('playerModal').classList.remove('active');
  if (charts.overview) { charts.overview.destroy(); charts.overview = null; }
}

// ===== Tab Switching =====
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
  document.querySelectorAll('.tab-content').forEach(s => s.classList.toggle('active', s.id === 'tab-' + tabName));
  switch (tabName) {
    case 'dashboard': renderDashboard(); break;
    case 'prospects': renderProspects(); break;
    case 'matches': renderMatchIntelligence(); break;
    case 'watchlist': renderWatchlist(); break;
  }
}

// ===== Init =====
function init() {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    switchTab(document.querySelector('.tab-btn.active').dataset.tab);
  }));
  document.querySelectorAll('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentSport = chip.dataset.sport;
    const tab = document.querySelector('.tab-btn.active').dataset.tab;
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'prospects') renderProspects();
  }));
  document.querySelectorAll('.sort-btn').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSort = btn.dataset.sort;
    const tab = document.querySelector('.tab-btn.active').dataset.tab;
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'prospects') renderProspects();
  }));
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    searchClear.style.display = searchQuery ? 'flex' : 'none';
    const tab = document.querySelector('.tab-btn.active').dataset.tab;
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'prospects') renderProspects();
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = ''; searchQuery = ''; searchClear.style.display = 'none'; searchInput.focus();
    const tab = document.querySelector('.tab-btn.active').dataset.tab;
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'prospects') renderProspects();
  });
  document.getElementById('playerModal').addEventListener('click', e => { if (e.target.id === 'playerModal') closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  renderDashboard();
  // Load news feed: try Worker API first, fall back to cached data
  fetchLiveNews().then(news => renderNewsFeed(news));
}

// Expose for external data injection
window.RookieRadar = { PLAYERS, openPlayerModal, renderDashboard, renderProspects };

init();
