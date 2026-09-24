import { MetricFoot, SlideData } from '../types';

export const METRIC_FEET: MetricFoot[] = [
  {
    id: 1,
    bracketText: '[Shall／I]',
    unstressed: { text: 'Shall', isStressed: false, parentWord: 'Shall' },
    stressed: { text: 'I', isStressed: true, parentWord: 'I' },
    translationNote: '我是否能把你比作…',
  },
  {
    id: 2,
    bracketText: '[com／pare]',
    unstressed: { text: 'com', isStressed: false, parentWord: 'compare' },
    stressed: { text: 'pare', isStressed: true, parentWord: 'compare' },
    translationNote: '比擬、比較',
  },
  {
    id: 3,
    bracketText: '[thee／to]',
    unstressed: { text: 'thee', isStressed: false, parentWord: 'thee' },
    stressed: { text: 'to', isStressed: true, parentWord: 'to' },
    translationNote: '你（古英語受格）…',
  },
  {
    id: 4,
    bracketText: '[a／sum]',
    unstressed: { text: 'a', isStressed: false, parentWord: 'a' },
    stressed: { text: 'sum', isStressed: true, parentWord: "summer's", isWordBreak: true },
    translationNote: '一個夏日的… (sum- 前半截)',
  },
  {
    id: 5,
    bracketText: "[mer's／day]",
    unstressed: { text: "mer's", isStressed: false, parentWord: "summer's", isWordBreak: true },
    stressed: { text: 'day', isStressed: true, parentWord: 'day' },
    translationNote: '…日子 (後半截 -mer\'s 與 day)',
  },
];

export interface SonnetLine {
  num: number;
  text: string;
  rhymeLetter: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
  rhymeWord: string;
  translation: string;
  section: 'Q1' | 'Q2' | 'Q3' | 'Couplet';
}

export const SONNET_18_LINES: SonnetLine[] = [
  {
    num: 1,
    text: "Shall I compare thee to a summer's day?",
    rhymeLetter: 'A',
    rhymeWord: 'day',
    translation: '我能否把你比作炎炎夏日？',
    section: 'Q1',
  },
  {
    num: 2,
    text: 'Thou art more lovely and more temperate:',
    rhymeLetter: 'B',
    rhymeWord: 'temperate',
    translation: '你卻比夏天更可愛，也更溫婉寧和。',
    section: 'Q1',
  },
  {
    num: 3,
    text: 'Rough winds do shake the darling buds of May,',
    rhymeLetter: 'A',
    rhymeWord: 'May',
    translation: '狂風常吹落五月嬌嫩的花蕊，',
    section: 'Q1',
  },
  {
    num: 4,
    text: "And summer's lease hath all too short a date:",
    rhymeLetter: 'B',
    rhymeWord: 'date',
    translation: '夏日的租約又未免太過匆匆。',
    section: 'Q1',
  },
  {
    num: 5,
    text: 'Sometime too hot the eye of heaven shines,',
    rhymeLetter: 'C',
    rhymeWord: 'shines',
    translation: '有時蒼穹之眼（烈日）照耀得過於灼熱，',
    section: 'Q2',
  },
  {
    num: 6,
    text: "And often is his gold complexion dimm'd;",
    rhymeLetter: 'D',
    rhymeWord: "dimm'd",
    translation: '它金色的容顏又常常被陰雲遮蔽；',
    section: 'Q2',
  },
  {
    num: 7,
    text: 'And every fair from fair sometime declines,',
    rhymeLetter: 'C',
    rhymeWord: 'declines',
    translation: '世間所有的美好終將凋零消逝，',
    section: 'Q2',
  },
  {
    num: 8,
    text: "By chance, or nature's changing course, untrimm'd;",
    rhymeLetter: 'D',
    rhymeWord: "untrimm'd",
    translation: '因機緣偶合，或在自然運轉的無常中褪色。',
    section: 'Q2',
  },
  {
    num: 9,
    text: 'But thy eternal summer shall not fade',
    rhymeLetter: 'E',
    rhymeWord: 'fade',
    translation: '但你永恆的夏天卻永遠不會凋零，',
    section: 'Q3',
  },
  {
    num: 10,
    text: "Nor lose possession of that fair thou ow'st;",
    rhymeLetter: 'F',
    rhymeWord: "ow'st",
    translation: '你所擁有的絕美風華也不會喪失；',
    section: 'Q3',
  },
  {
    num: 11,
    text: "Nor shall Death brag thou wander'st in his shade,",
    rhymeLetter: 'E',
    rhymeWord: 'shade',
    translation: '死神也絕不敢誇口你在他的陰影中遊蕩，',
    section: 'Q3',
  },
  {
    num: 12,
    text: "When in eternal lines to time thou grow'st:",
    rhymeLetter: 'F',
    rhymeWord: "grow'st",
    translation: '當你在這永恆的詩行中與時光一同生長。',
    section: 'Q3',
  },
  {
    num: 13,
    text: 'So long as men can breathe or eyes can see,',
    rhymeLetter: 'G',
    rhymeWord: 'see',
    translation: '只要世人尚能呼吸，雙眼尚能看見，',
    section: 'Couplet',
  },
  {
    num: 14,
    text: 'So long lives this, and this gives life to thee.',
    rhymeLetter: 'G',
    rhymeWord: 'thee',
    translation: '這首詩就會長存，並賦予你永恆的生命。',
    section: 'Couplet',
  },
];

export const SLIDES_CONFIG: SlideData[] = [
  {
    id: 1,
    title: '聲韻之美：莎士比亞十四行詩',
    subtitle: 'Sonnet 18 抑揚格五音步與韻律大師課',
    category: '導言與名句',
    teacherNotes: '【開場破冰】引起學生好奇心：詢問全班「你覺得英文詩聽起來像音樂嗎？還是像機器人說話？」。今天我們要解開莎翁詩歌宛如心跳一樣動人的節奏秘密。',
  },
  {
    id: 2,
    title: '傳統思維 vs. 詩歌音律思維',
    subtitle: '打破單字原本邊界，重組發音單位',
    category: '直觀反思',
    teacherNotes: '【引導觀察】投影片對比「書寫單字（7個）」與「發音單位（5個音部/10個音節）」。提醒學生：英文是按照「音部重音節奏」在流動，而不是死板地照空格停頓。',
  },
  {
    id: 3,
    title: '解析步驟一 · 切分音節（／）',
    subtitle: '巧妙的跨詞重組：以 summer\'s 為關鍵範例',
    category: '步驟 1 · 音節切分',
    teacherNotes: '【重點講授】展示「／」切分符號。特別指出 "summer\'s" 被分開在 sum 和 mer\'s！讓學生驚嘆：「原來 summer 不是一口氣唸完，而是被詩人拆進了前後兩個節奏箱子裡！」',
  },
  {
    id: 4,
    title: '解析步驟二 · 框出音部（[ ]）',
    subtitle: '完美切分成 5 個 [輕／重] 抑揚格音步',
    category: '步驟 2 · 音部框選',
    teacherNotes: '【教學動作】展示方括號 [ ]。講解 Iambic Pentameter（抑揚格五音步）就像人類的心跳 "lub-DUB, lub-DUB..."。5 個音部 × 2 個音節 = 剛好 10 個音節，自然而深情。',
  },
  {
    id: 5,
    title: '解析步驟三 · 戲劇化朗讀示範',
    subtitle: '誇張強調深藍色重音：I, pare, to, sum, day',
    category: '步驟 3 · 老師示範',
    teacherNotes: '【老師表演時間】請您以戲劇化的方式，誇張地強調深藍色的重音（I, pare, to, sum, day）！輕音輕輕帶過，重音重重拍擊或踏步，讓全班清楚感受到能量起伏。',
  },
  {
    id: 6,
    title: '全班跟著節奏打拍子唸 Rap！',
    subtitle: '鼓點啟動 · 拍桌拍手 · 節奏挑戰',
    category: '互動實戰',
    teacherNotes: '【課堂活動】開啟節拍伴奏（BPM 85–100），帶領全班「輕拍桌、重拍手」，全班齊聲像唸 Rap 一樣喊出節奏！可讓不同小組輪流挑戰！',
  },
  {
    id: 7,
    title: '押韻格律深度解析：ABAB CDCD EFEF GG',
    subtitle: '莎士比亞十四行詩的建築美學',
    category: '格律架構',
    teacherNotes: '【結構剖析】展示 3 個四行詩節（Quatrains）+ 1 個雙行對句（Couplet）。色塊對照尾韻詞（day/May, temperate/date 等），說明經典的英國十四行詩格式。',
  },
  {
    id: 8,
    title: '結構如何影響「節奏」與「詩意」？',
    subtitle: '律動推力、轉折 (Volta) 與永恆昇華',
    category: '意境昇華',
    teacherNotes: '【深層文學解析】說明交叉韻 (ABAB) 如何如潮水般向前推進；第9行 But 出現轉折 (Volta)；最後 GG 雙行對句像突然敲響的金色鐘聲，將平凡夏日昇華為永恆生命的奇蹟！',
  },
  {
    id: 9,
    title: '課堂總結與大師心法',
    subtitle: '記憶口訣 · 朗誦挑戰 · 課堂回顧',
    category: '複習精通',
    teacherNotes: '【總結驗收】帶領全班齊唸記憶口訣，並可邀請自願學生搭配節拍器完成全句無伴奏 Rap 朗讀挑戰！',
  },
];
