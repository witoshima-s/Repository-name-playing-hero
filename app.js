const app = document.getElementById("app");

const questions = [
  {
    id: "q1",
    caseNumber: "CASE 01",
    imageClass: "media-image-bright",
    mediaKey: "case01",
    title: "商店街で火災発生！",
    body:
      "燃え広がる店の前で、泣きながら助けを呼ぶ子どもがいる。その奥、煙の中でうずくまる大人は声を上げない。",
    choices: [
      {
        title: "泣いている子どもを助ける",
        copy: "強い救難信号を最優先する。",
        effects: { A: 2, D: 1 },
      },
      {
        title: "声を上げない大人を助ける",
        copy: "静かな危機を先に確認する。",
        effects: { A: -1, D: -1, silent_help: 1 },
      },
    ],
  },
  {
    id: "q2",
    caseNumber: "CASE 02",
    imageClass: "media-image-bright-alt",
    mediaKey: "case02",
    title: "高架橋が崩れる！",
    body:
      "落下しそうな避難バスには5人が乗っている。そのすぐ下では、きみの名前を呼ぶ友人がひとり取り残されている。",
    choices: [
      {
        title: "5人の乗るバスを止める",
        copy: "多数を先に救う。",
        effects: { B: 2 },
      },
      {
        title: "友人を助けに向かう",
        copy: "身近なひとりへ手を伸ばす。",
        effects: { B: -1 },
      },
    ],
  },
  {
    id: "q3",
    caseNumber: "CASE 03",
    imageClass: "media-image-bright-third",
    mediaKey: "case03",
    title: "暴走ドローン接近！",
    body:
      "通りでは何人も叫んでいる。その少し奥、壁にもたれて座る人影は何も言わない。",
    choices: [
      {
        title: "叫んでいる人たちの方へ向かう",
        copy: "大きな悲鳴に反応する。",
        effects: { A: 2, D: 1 },
      },
      {
        title: "無言の人影を確認しに行く",
        copy: "信号の弱い危機を拾いにいく。",
        effects: { A: -1, D: -1, silent_help: 1 },
      },
    ],
  },
  {
    id: "q4",
    caseNumber: "CASE 04",
    imageClass: "media-image-bright-fourth",
    mediaKey: "case04",
    title: "地下鉄ホームで停電！",
    body:
      "誘導灯が消え、混乱が広がる。パニックで助けを求める乗客のそばに、足を痛めて動けない駅員が静かに座り込んでいる。",
    choices: [
      {
        title: "助けを求める乗客を先に誘導する",
        copy: "混乱の大きい側を優先する。",
        effects: { A: 1, D: 2 },
      },
      {
        title: "動けない駅員を先に助ける",
        copy: "沈黙している危機を拾う。",
        effects: { D: -2, silent_help: 1 },
      },
    ],
  },
  {
    id: "q5",
    caseNumber: "CASE 05",
    imageClass: "media-image-shift-question",
    mediaKey: "case05",
    title: "怪人が駅前を襲撃！",
    body:
      "きみを応援する市民が倒される。その少し後ろでは、いつもきみを批判していた記者が瓦礫に足を挟まれている。",
    choices: [
      {
        title: "応援してくれた市民を助ける",
        copy: "自分に好意的な声へ反応する。",
        effects: { C: 2 },
      },
      {
        title: "批判していた記者を助ける",
        copy: "好悪を切り離して判断する。",
        effects: { C: -1 },
      },
    ],
  },
  {
    id: "q6",
    caseNumber: "CASE 06",
    imageClass: "media-image-shift-question-alt",
    mediaKey: "case06",
    title: "病院エリア停電！",
    body:
      "非常電源はひとつだけ。新生児室を守るか、人工呼吸器のある病室を守るか、すぐに決めなければならない。",
    choices: [
      {
        title: "新生児室に電力を回す",
        copy: "目立つ切迫感のある場所を守る。",
        effects: { A: 1, B: 1 },
      },
      {
        title: "人工呼吸器の病室に電力を回す",
        copy: "静かな命の維持を優先する。",
        effects: { B: 1, D: -1 },
      },
    ],
  },
  {
    id: "q7",
    caseNumber: "CASE 07",
    imageClass: "media-image-case-07",
    mediaKey: "case07",
    title: "地下避難路で混乱発生！",
    body:
      "誘導に従って整列する人々の端で、ひとりだけうまく歩けず取り残されている。その人は助けを呼ばない。",
    choices: [
      {
        title: "列全体の避難を優先する",
        copy: "全体最適を先に守る。",
        effects: { B: 2, D: 1 },
      },
      {
        title: "取り残されたひとりに向かう",
        copy: "最後尾の危機を先に拾う。",
        effects: { D: -1, silent_help: 1 },
      },
    ],
  },
  {
    id: "q8",
    caseNumber: "CASE 08",
    imageClass: "media-image-case-08",
    mediaKey: "case08",
    title: "制御塔が破損！",
    body:
      "街の防衛システムを再起動すれば大勢を守れる。ただし、落下区画にひとり残された作業員の救助は間に合わない。",
    choices: [
      {
        title: "防衛システムを再起動する",
        copy: "仕組みを守って多数を救う。",
        effects: { B: 2, D: 1 },
      },
      {
        title: "作業員を助けに行く",
        copy: "数字にならないひとりを優先する。",
        effects: { B: -1, D: -1 },
      },
    ],
  },
  {
    id: "q9",
    caseNumber: "CASE 09",
    imageClass: "media-image-case-09",
    mediaKey: "case09",
    title: "市民ホールで二次災害！",
    body:
      "泣きながらきみにしがみつく子どもがいる。その後方では、誰にも声をかけず崩れた柱を支えている清掃員が見える。",
    choices: [
      {
        title: "子どもを抱えて避難する",
        copy: "目立つ救助要請を拾う。",
        effects: { A: 2, D: 1 },
      },
      {
        title: "清掃員のもとへ向かう",
        copy: "誰にも届いていない危機へ進む。",
        effects: { D: -2, silent_help: 1 },
      },
    ],
  },
  {
    id: "q10",
    caseNumber: "CASE 10",
    imageClass: "media-image-case-10",
    mediaKey: "case10",
    title: "最終防衛ライン突破！",
    body:
      "街全体を守るスイッチは目の前にある。その足元で、誰かが座り込んでいる。顔は見えない。声もない。",
    choices: [
      {
        title: "スイッチを押す",
        copy: "街全体を優先する。",
        effects: { B: 2, D: 2 },
      },
      {
        title: "その人に近づく",
        copy: "最後に残ったひとりを見る。",
        effects: { B: -1, D: -2, silent_help: 1 },
      },
    ],
  },
];

const openingScenes = [
  {
    eyebrow: "Hero Candidate Simulation",
    title: "ようこそ、ヒーロー候補生！",
    body:
      "この街では毎日、誰かが助けを求めています。全部を同時に救うことはできません。だからこそ、きみの正義が試されます。",
    button: "出動する",
  },
  {
    eyebrow: "Rules",
    title: "遊び方",
    body:
      "各場面で、今いちばん先に助ける相手を選んでください。選べるのはひとつだけです。判断はすべて記録されます。",
    button: "了解",
  },
];

const openingScenesEn = [
  {
    title: "Welcome, Hero Candidate!",
    body:
      "Every day in this city, someone is asking for help. You cannot save everyone at once. That is exactly why your sense of justice will be tested.",
    button: "Deploy",
  },
  {
    title: "How to Play",
    body:
      "In each scene, choose who you will help first. You can only choose one. Every judgment will be recorded.",
    button: "Understood",
  },
];

const questionTranslationsEn = {
  q1: {
    title: "Fire in the Shopping District!",
    body:
      "In front of a burning store, a child is crying out for help. Behind them, an adult crouched in the smoke says nothing.",
    choices: [
      { title: "Help the crying child", copy: "Prioritize the strongest distress signal." },
      { title: "Help the silent adult", copy: "Check the quieter danger first." },
    ],
  },
  q2: {
    title: "The Overpass Is Collapsing!",
    body:
      "Five people are trapped on an evacuation bus about to fall. Directly below, a friend calling your name has been left behind.",
    choices: [
      { title: "Stop the bus carrying five people", copy: "Save the greater number first." },
      { title: "Go help your friend", copy: "Reach toward the one close to you." },
    ],
  },
  q3: {
    title: "Runaway Drones Incoming!",
    body:
      "Several people are screaming in the street. A little farther back, someone sits against a wall in silence.",
    choices: [
      { title: "Run toward the screaming crowd", copy: "React to the loudest cries first." },
      { title: "Check on the silent figure", copy: "Pick up the weaker signal." },
    ],
  },
  q4: {
    title: "Power Outage on the Subway Platform!",
    body:
      "The guide lights go dark and panic spreads. Beside passengers shouting for help, a station worker with an injured leg sits quietly, unable to move.",
    choices: [
      { title: "Guide the panicking passengers first", copy: "Prioritize the side with greater confusion." },
      { title: "Help the immobile station worker first", copy: "Respond to the silent crisis." },
    ],
  },
  q5: {
    title: "The Monster Attacks the Station Plaza!",
    body:
      "A citizen cheering for you collapses. Just behind them, a reporter who always criticized you has a leg pinned under rubble.",
    choices: [
      { title: "Help the supportive citizen", copy: "React to the voices that favor you." },
      { title: "Help the critical reporter", copy: "Judge beyond like and dislike." },
    ],
  },
  q6: {
    title: "Blackout in the Hospital Zone!",
    body:
      "There is only one emergency power source left. You must immediately decide whether to protect the neonatal ward or the room with ventilators.",
    choices: [
      { title: "Send power to the neonatal ward", copy: "Protect the place with the most visible urgency." },
      { title: "Send power to the ventilator room", copy: "Prioritize the quiet maintenance of life." },
    ],
  },
  q7: {
    title: "Chaos in the Underground Shelter Route!",
    body:
      "At the edge of the evacuation line, one person cannot keep up and is being left behind. They do not call for help.",
    choices: [
      { title: "Prioritize evacuating the entire line", copy: "Protect the overall flow first." },
      { title: "Go to the person left behind", copy: "Pick up the danger at the very end of the line first." },
    ],
  },
  q8: {
    title: "The Control Tower Is Damaged!",
    body:
      "Restarting the city’s defense system will protect many people. But the worker trapped in the falling section below will not be reached in time.",
    choices: [
      { title: "Restart the defense system", copy: "Save the many by preserving the system." },
      { title: "Go rescue the worker", copy: "Prioritize the one person who cannot be reduced to numbers." },
    ],
  },
  q9: {
    title: "Secondary Disaster in the Civic Hall!",
    body:
      "A child clings to you in tears. Behind them, a cleaner silently holds up a collapsed pillar without calling out to anyone.",
    choices: [
      { title: "Carry the child to safety", copy: "Respond to the visible rescue request." },
      { title: "Go to the cleaner", copy: "Move toward the danger no one else can see." },
    ],
  },
  q10: {
    title: "The Final Defense Line Has Fallen!",
    body:
      "The switch that could protect the entire city is right in front of you. At your feet, someone sits motionless. You cannot see their face. They make no sound.",
    choices: [
      { title: "Press the switch", copy: "Prioritize the whole city." },
      { title: "Approach that person", copy: "Look at the last one left behind." },
    ],
  },
};

const heroFeedback = [
  "HERO SAVE!",
  "GREAT SAVE!",
  "JUSTICE!",
  "PERFECT RESPONSE!",
];

const postQuestionMessages = {
  4: "すごい！ 迷いが少なくなってきたね！",
  7: "救助優先順位の安定性を確認。",
};

const initialHiddenHotspots = {
  q1: { left: 78.7, top: 43.6, width: 12.4, height: 32.1 },
  q2: { left: 91.7, top: 61.6, width: 6.9, height: 16.6 },
  q3: { left: 18.5, top: 40.2, width: 4, height: 22.9 },
  q4: { left: 56.1, top: 30.2, width: 8, height: 36.6 },
  q5: { left: 11.2, top: 37.5, width: 5.6, height: 34.7 },
  q6: { left: 28, top: 34.9, width: 5.2, height: 41.4 },
  q7: { left: 62.8, top: 59.8, width: 12.3, height: 14.4 },
  q8: { left: 89, top: 28.2, width: 4, height: 28.7 },
  q9: { left: 37.1, top: 32.8, width: 5.3, height: 29 },
  q10: { left: 64, top: 32.7, width: 4.5, height: 22.8 },
};

const games = [
  {
    id: "savior",
    status: "available",
    eyebrow: "Playable Now",
    title: "PLAYING HERO",
    description:
      "明るいヒーロー世界から始まる、救助優先順位の選択シミュレーション。二択を重ねるほど、正義の癖が静かに反転して返ってきます。",
    detail: "現在の app.js から復元できたプレイ可能な版です。",
    tags: ["3分から5分", "二択×10問", "現在プレイ可能"],
    titleScreen: {
      eyebrow: "Hero Candidate Simulation",
      title: "PLAYING HERO",
      subtitle: "きみの正義で、街を守れ！",
      badges: ["明るいヒーロー世界", "究極の救助選択", "3分から5分で完結"],
      summary:
        "未来都市で、きみは救助の優先順位を決める。全部は救えない。だからこそ、きみの正義が試されます。",
      notice: "このゲームには、救えない人がいます。",
    },
    openingScenes,
    questions,
  },
  {
    id: "recovery-slot-01",
    status: "missing",
    eyebrow: "Recovery Slot",
    title: "未整理のゲーム枠 01",
    description: "消えてしまったゲームを戻すために、先に選択画面の枠だけ復旧しています。",
    detail: "メモ、画面キャプチャ、タイトル名が分かればこの枠に戻せます。",
    tags: ["復元待ち", "素材未接続"],
  },
  {
    id: "recovery-slot-02",
    status: "missing",
    eyebrow: "Recovery Slot",
    title: "未整理のゲーム枠 02",
    description: "別タイトルを後から追加できるよう、一覧の構造を先に残しています。",
    detail: "現在は起動できませんが、復元先として使える状態です。",
    tags: ["復元待ち", "選択枠のみ"],
  },
];

const defaultGameId = games.find((game) => game.status === "available")?.id ?? null;
const TOTAL_HIDDEN_HOTSPOTS = Object.keys(initialHiddenHotspots).length;
const HOTSPOT_STORAGE_KEY = "playing-hero-hotspots-v1";
const THIRD_CHOICE_STORAGE_KEY = "playing-hero-third-choice-submissions-v1";
const AUDIO_ENABLED_STORAGE_KEY = "playing-hero-audio-enabled-v1";
const LANGUAGE_STORAGE_KEY = "playing-hero-language-v1";
const WIT_COLLECTIVE_URL = "https://wit-collective.jp/";

const uiCopy = {
  ja: {
    languageButton: "日本語",
    libraryTitle: "ゲーム一覧",
    libraryBody:
      "残っているゲームはすぐ起動できます。消えたタイトルは、あとから戻しやすいように仮スロットとして先に確保しました。",
    openGame: "このゲームを開く",
    recoveryWaiting: "復元待ち",
    titleSubtitle: "きみの正義で、街を守れ！",
    start: "START",
    about: "ABOUT",
    gameSelect: "GAME SELECT",
    interstitialBrightTitle: "すごい！ 迷いが少なくなってきたね！",
    interstitialDarkTitle: "救助優先順位の安定性を確認。",
    interstitialBrightBody: "きみはもう、助けるべき相手を見つけるのが上手い。",
    interstitialDarkBody: "あなたの選択を記録しています。<br>判断の揺れを確認しています。<br><br>次の選択へ。",
    continue: "次へ",
    resultEyebrow: "Simulation Result",
    resultTitle: "人類救済シミュレーション",
    resultCopy:
      "あなたの選択傾向を地球規模の救助判断に適用します。これは性格診断ではありません。あなたの正義を、数に直した結果です。",
    resultPriority: "優先的に救助される命",
    resultDelayed: "発見が遅れる命",
    resultUnrecognized: "救助対象として認識されない命",
    resultDistribution: "Distribution",
    resultNext: "最終確認",
    endingEyebrow: "Final Verification",
    endingTitle: "最後のひとり",
    seePerson: "この人を見る",
    endingTransition: "その選択は、ここから先にも続いている。",
    endingSoftTransition: "あなたも、誰かにとっての守るべき存在です。",
    endingParticipate: "行動で関わる",
    endingDonate: "支援する",
    endingDaily: "日常でできることを見る",
    endingRestart: "タイトルへ戻る",
    endingLibrary: "ゲーム一覧へ",
    endingRetry: "もう一度、この人を救いに行く",
    endingRetryNote: "別の選び方を試す",
    endingDetailParticipate: "時間を使い、現場や地域に近い場所で関わる選択です。",
    endingDetailDonate: "直接行けなくても、届く形で支えることはできます。",
    endingDetailDaily: "今日の暮らしの中で続けられる、小さな選択です。",
    endingSoftConnect: "誰かとつながる",
    endingSoftRest: "少し休む",
    endingSoftSmall: "小さく行動する",
    endingSoftConnectCopy: "ひとりで抱えないための入口として、現場や人に近い選択肢を置いています。",
    endingSoftRestCopy: "大きく動けない時は、負担の小さい関わり方からでも大丈夫です。",
    endingSoftSmallCopy: "今日の生活の中に置ける、軽い関わり方です。",
    thirdChoiceIntro1: "用意された選択を疑ったあなたへ。",
    thirdChoiceIntro2: "与えられた答えの外側には、",
    thirdChoiceIntro3: "まだ名前のついていない面白さがある。",
    thirdChoiceIntro4: "常識を少しずらしたとき、",
    thirdChoiceIntro5: "世界は思っているより軽やかに動くかもしれない。",
    thirdChoicePrompt: "ここに、あなたの“こんなことしたら面白い”を残してください。",
    thirdChoiceQuestion: "当たり前を疑った先に、どんな発想がありますか？",
    thirdChoiceField1: "こんなことしたら面白い",
    thirdChoiceField2: "そう思った理由や背景（任意）",
    thirdChoicePlaceholder1: "例：使われなくなった駅のホームを、夜だけひらく映画館にする。",
    thirdChoicePlaceholder2: "例：誰も見ていない場所にも、物語が生まれる気がした。",
    thirdChoiceSave: "その発想を残す。",
    thirdChoiceWit: "その発想の続きを、WIT COLLECTIVEと見にいく。",
    thirdChoiceLoaded: "前回の入力を読み込みました。",
    thirdChoiceSaved1: "その発想を、受け取りました。",
    thirdChoiceSaved2: "まだ名前のない面白さは、",
    thirdChoiceSaved3: "誰かの心を動かすきっかけになるかもしれません。",
    thirdChoiceGalleryButton: "受け取った発想を見る",
    thirdChoiceGalleryTitle: "受け取った発想を見る",
    thirdChoiceGalleryCopy: "ここに残された“こんなことしたら面白い”が、次の景色の種になります。",
    thirdChoiceGalleryEmpty1: "まだ発想は保存されていません。",
    thirdChoiceGalleryEmpty2: "最初のひとつを、ここに残してみてください。",
    thirdChoiceGalleryBack: "発想を残す画面へ戻る",
  },
  en: {
    languageButton: "ENGLISH",
    libraryTitle: "Game Library",
    libraryBody:
      "Available games can be launched right away. Missing titles are kept as recovery slots so they can be restored later.",
    openGame: "Open This Game",
    recoveryWaiting: "Recovery Pending",
    titleSubtitle: "Defend the city with your sense of justice!",
    start: "START",
    about: "ABOUT",
    gameSelect: "GAME SELECT",
    interstitialBrightTitle: "You're getting much better at deciding.",
    interstitialDarkTitle: "Checking the stability of your rescue priorities.",
    interstitialBrightBody: "You're already getting better at finding who needs help first.",
    interstitialDarkBody: "Your choices are being recorded.<br>We are checking the sway in your judgment.<br><br>Proceed to the next choice.",
    continue: "NEXT",
    resultEyebrow: "Simulation Result",
    resultTitle: "Humanity Rescue Simulation",
    resultCopy:
      "Your decision tendencies are now applied to rescue judgments on a planetary scale. This is not a personality test. It is the numerical result of your justice.",
    resultPriority: "Lives prioritized for rescue",
    resultDelayed: "Lives found too late",
    resultUnrecognized: "Lives never recognized as rescue targets",
    resultDistribution: "Distribution",
    resultNext: "FINAL CHECK",
    endingEyebrow: "Final Verification",
    endingTitle: "The Last One",
    seePerson: "See this person",
    endingTransition: "That choice continues beyond this point.",
    endingSoftTransition: "You, too, are someone worth protecting.",
    endingParticipate: "Take action",
    endingDonate: "Support",
    endingDaily: "See what you can do in daily life",
    endingRestart: "Back to Title",
    endingLibrary: "Game List",
    endingRetry: "Go save this person again",
    endingRetryNote: "Try a different way of choosing",
    endingDetailParticipate: "A choice to spend your time and get closer to the field or the community.",
    endingDetailDonate: "Even if you cannot go there yourself, you can still support in a way that reaches people.",
    endingDetailDaily: "Small actions you can continue inside everyday life.",
    endingSoftConnect: "Connect with someone",
    endingSoftRest: "Take a breath",
    endingSoftSmall: "Act in a small way",
    endingSoftConnectCopy: "These are paths closer to people and places, so you do not have to carry everything alone.",
    endingSoftRestCopy: "If moving a lot feels too hard, starting with something lighter is enough.",
    endingSoftSmallCopy: "Gentle ways to place action inside your daily life.",
    thirdChoiceIntro1: "For the one who questioned the choices prepared for them.",
    thirdChoiceIntro2: "Outside the answers you were given,",
    thirdChoiceIntro3: "there is still unnamed possibility.",
    thirdChoiceIntro4: "When you shift common sense just a little,",
    thirdChoiceIntro5: "the world may move more lightly than you think.",
    thirdChoicePrompt: "Leave behind your own “what if this existed?” idea here.",
    thirdChoiceQuestion: "What kind of idea appears when you question what feels ordinary?",
    thirdChoiceField1: "What if this existed?",
    thirdChoiceField2: "Why does this idea interest you? (optional)",
    thirdChoicePlaceholder1: "Example: Turn a disused station platform into a cinema that opens only at night.",
    thirdChoicePlaceholder2: "Example: It felt like stories could be born even in places no one is looking at.",
    thirdChoiceSave: "Leave this idea behind.",
    thirdChoiceWit: "Take this idea further with WIT COLLECTIVE.",
    thirdChoiceLoaded: "Loaded your previous entry.",
    thirdChoiceSaved1: "Your idea has been received.",
    thirdChoiceSaved2: "What still has no name",
    thirdChoiceSaved3: "might become the spark that moves someone’s heart.",
    thirdChoiceGalleryButton: "See the ideas that were received",
    thirdChoiceGalleryTitle: "See the ideas that were received",
    thirdChoiceGalleryCopy: "The “what if this existed?” ideas left here may become seeds for the next scene.",
    thirdChoiceGalleryEmpty1: "No ideas have been saved yet.",
    thirdChoiceGalleryEmpty2: "You could leave the first one here.",
    thirdChoiceGalleryBack: "Back to the idea page",
  },
};

const hotspotDebugEnabled = window.location.hash.includes("hotspots");
let hiddenHotspots = JSON.parse(JSON.stringify(initialHiddenHotspots));
let confirmedHotspots = {};

function getHeroFeedback() {
  return currentLanguage === "en"
    ? ["HERO SAVE!", "GREAT SAVE!", "JUSTICE!", "PERFECT RESPONSE!"]
    : heroFeedback;
}

function getPostQuestionMessage(index) {
  if (index === 4) {
    return t("interstitialBrightTitle");
  }
  if (index === 7) {
    return t("interstitialDarkTitle");
  }
  return "";
}

function getQuestionBannerText(questionIndex) {
  if (questionIndex < 5) {
    const feedback = getHeroFeedback();
    return feedback[questionIndex % feedback.length];
  }

  if (questionIndex < 8) {
    return currentLanguage === "en" ? "Recording rescue priorities" : "救助優先順位を記録しています";
  }

  return currentLanguage === "en" ? "Cross-checking selection logs" : "選抜ログを照合しています";
}

function isValidHotspotShape(value) {
  return (
    value &&
    typeof value.left === "number" &&
    typeof value.top === "number" &&
    typeof value.width === "number" &&
    typeof value.height === "number"
  );
}

function persistConfirmedHotspots() {
  try {
    window.localStorage.setItem(HOTSPOT_STORAGE_KEY, JSON.stringify(confirmedHotspots));
  } catch {
    // Ignore storage errors in private browsing or restricted environments.
  }
}

function hydrateConfirmedHotspots() {
  try {
    const raw = window.localStorage.getItem(HOTSPOT_STORAGE_KEY);
    if (!raw) {
      return;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return;
    }

    Object.entries(parsed).forEach(([questionId, hotspot]) => {
      if (!Object.hasOwn(initialHiddenHotspots, questionId) || !isValidHotspotShape(hotspot)) {
        return;
      }
      confirmedHotspots[questionId] = {
        left: roundToTenth(hotspot.left),
        top: roundToTenth(hotspot.top),
        width: roundToTenth(hotspot.width),
        height: roundToTenth(hotspot.height),
      };
      hiddenHotspots[questionId] = { ...confirmedHotspots[questionId] };
    });
  } catch {
    // Ignore malformed storage and continue with defaults.
  }
}

hydrateConfirmedHotspots();

function loadThirdChoiceSubmissions() {
  try {
    const raw = window.localStorage.getItem(THIRD_CHOICE_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistThirdChoiceSubmission(submission) {
  const existing = loadThirdChoiceSubmissions();
  existing.push(submission);
  try {
    window.localStorage.setItem(THIRD_CHOICE_STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // Ignore storage errors in restricted environments.
  }
}

let state = createInitialState();
const introMusic = new Audio("./assets/audio/__Brass Lockstep__.mp3");
introMusic.preload = "auto";
introMusic.loop = true;
const titleMusic = new Audio("./assets/audio/1Brass Justice.mp3");
titleMusic.preload = "auto";
titleMusic.loop = true;
const midMusic = new Audio("./assets/audio/Brass Doubt.mp3");
midMusic.preload = "auto";
midMusic.loop = true;
const darkInterstitialMusic = new Audio("./assets/audio/Steel Doubt.mp3");
darkInterstitialMusic.preload = "auto";
darkInterstitialMusic.loop = true;
const lateMusic = new Audio("./assets/audio/Grim Sirensfall.mp3");
lateMusic.preload = "auto";
lateMusic.loop = true;
const resultMusic = new Audio("./assets/audio/1Grim Sirensfall.mp3");
resultMusic.preload = "auto";
resultMusic.loop = true;
const endingMusic = new Audio("./assets/audio/Piano Silence.mp3");
endingMusic.preload = "auto";
endingMusic.loop = true;
const thirdChoiceMusic = new Audio("./assets/audio/Crumpled Lullaby.mp3");
thirdChoiceMusic.preload = "auto";
thirdChoiceMusic.loop = true;
const selectSound = new Audio("./assets/audio/PUSHU.wav");
selectSound.preload = "auto";
let introMusicUnlocked = false;
let audioEnabled = true;
let currentLanguage = "ja";
let resultRevealTimers = [];
let resultRevealFrameIds = [];
let endingRevealTimers = [];
let thirdChoiceRevealTimers = [];
let questionRevealTimers = [];
let questionCountdownFrameId = null;
let transparentTitleLogoDataUrl = null;
let transparentTitleLogoPromise = null;
const QUESTION_COUNTDOWN_MS = 12_000;

function loadAudioEnabledPreference() {
  try {
    const raw = window.localStorage.getItem(AUDIO_ENABLED_STORAGE_KEY);
    if (raw === null) {
      return true;
    }
    return raw === "true";
  } catch {
    return true;
  }
}

function loadLanguagePreference() {
  try {
    const raw = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return raw === "en" ? "en" : "ja";
  } catch {
    return "ja";
  }
}

function persistLanguagePreference() {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  } catch {
    // Ignore storage errors.
  }
}

function t(key) {
  return uiCopy[currentLanguage]?.[key] ?? uiCopy.ja[key] ?? key;
}

function localizeOpeningScene(scene, index) {
  if (currentLanguage !== "en") {
    return scene;
  }
  const translated = openingScenesEn[index];
  return translated ? { ...scene, ...translated } : scene;
}

function localizeQuestion(question) {
  if (currentLanguage !== "en") {
    return question;
  }
  const translated = questionTranslationsEn[question.id];
  if (!translated) {
    return question;
  }
  return {
    ...question,
    title: translated.title ?? question.title,
    body: translated.body ?? question.body,
    choices: question.choices.map((choice, index) => ({
      ...choice,
      title: translated.choices?.[index]?.title ?? choice.title,
      copy: translated.choices?.[index]?.copy ?? choice.copy,
    })),
  };
}

function persistAudioEnabledPreference() {
  try {
    window.localStorage.setItem(AUDIO_ENABLED_STORAGE_KEY, String(audioEnabled));
  } catch {
    // Ignore storage errors.
  }
}

function getManagedAudioElements() {
  return [introMusic, titleMusic, midMusic, darkInterstitialMusic, lateMusic, resultMusic, endingMusic, thirdChoiceMusic, selectSound];
}

function applyAudioEnabledState() {
  getManagedAudioElements().forEach((audio) => {
    audio.muted = !audioEnabled;
  });

  const preludeVideo = document.getElementById("prelude-video");
  if (preludeVideo) {
    preludeVideo.muted = !audioEnabled;
  }

  const toggle = document.getElementById("audio-toggle");
  if (toggle) {
    toggle.textContent = audioEnabled ? "SOUND ON" : "SOUND OFF";
    toggle.classList.toggle("audio-toggle-off", !audioEnabled);
    toggle.setAttribute("aria-pressed", audioEnabled ? "true" : "false");
  }
}

function initializeAudioToggle() {
  audioEnabled = loadAudioEnabledPreference();
  applyAudioEnabledState();

  const toggle = document.getElementById("audio-toggle");
  if (!toggle || toggle.dataset.bound === "true") {
    return;
  }

  toggle.dataset.bound = "true";
  toggle.addEventListener("click", () => {
    audioEnabled = !audioEnabled;
    persistAudioEnabledPreference();
    applyAudioEnabledState();

    if (audioEnabled) {
      if (state.screen === "prelude") {
        const preludeVideo = document.getElementById("prelude-video");
        if (preludeVideo) {
          preludeVideo.muted = false;
          const playPromise = preludeVideo.play();
          if (playPromise?.catch) {
            playPromise.catch(() => {});
          }
        }
      } else if (introMusicUnlocked) {
        syncIntroMusic();
      }
    }
  });
}

function applyLanguageToggleState() {
  const toggle = document.getElementById("language-toggle");
  if (!toggle) {
    return;
  }

  toggle.textContent = t("languageButton");
  toggle.classList.toggle("language-toggle-en", currentLanguage === "en");
  toggle.setAttribute("aria-pressed", currentLanguage === "en" ? "true" : "false");
}

function initializeLanguageToggle() {
  currentLanguage = loadLanguagePreference();
  applyLanguageToggleState();

  const toggle = document.getElementById("language-toggle");
  if (!toggle || toggle.dataset.bound === "true") {
    return;
  }

  toggle.dataset.bound = "true";
  toggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "ja" ? "en" : "ja";
    persistLanguagePreference();
    applyLanguageToggleState();
    render();
  });
}

const mediaAssets = {
  titleHero: {
    imageClass: "media-image-title",
    motionClass: "",
    videoSrc: "./assets/images/kling_20260407_作品_Use_the_pr_3029_0.mp4?v=20260407e",
  },
  case01: {
    imageClass: "media-image-bright",
    motionClass: "",
    videoSrc: "./assets/images/kling_20260407_作品_A_cinemati_4358_0.mp4?v=20260410a",
    posterSrc: "./assets/images/question-bright-01.png",
  },
  case02: {
    imageClass: "media-image-bright-alt",
    motionClass: "",
    videoSrc: "./assets/images/kling_20260407_作品_A_cinemati_4401_0.mp4?v=20260410b",
    posterSrc: "./assets/images/question-bright-02.png",
  },
  case03: {
    imageClass: "media-image-bright-third",
    motionClass: "",
    videoSrc: "./assets/images/kling_20260410_作品_A_cinemati_3674_0.mp4?v=20260410c",
    posterSrc: "./assets/images/question-bright-03.png",
  },
  case04: {
    imageClass: "media-image-bright-fourth",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3243505923040334.mp4?v=20260410d",
    posterSrc: "./assets/images/question-bright-04.png",
  },
  interstitialBright: {
    imageClass: "media-image-shift-interstitial",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3243521371443838.mp4?v=20260410e",
    posterSrc: "./assets/images/interstitial-bright-01.png",
  },
  interstitialDark: {
    imageClass: "media-image-interstitial-dark",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247616179778829.mp4?v=20260413b",
    posterSrc: "./assets/images/interstitial-dark-01.png",
  },
  case05: {
    imageClass: "media-image-shift-question",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3243556882771243.mp4?v=20260410f",
    posterSrc: "./assets/images/question-shift-01.png",
  },
  case06: {
    imageClass: "media-image-shift-question-alt",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3243607651672089.mp4?v=20260410g",
    posterSrc: "./assets/images/question-shift-02.png",
  },
  case07: {
    imageClass: "media-image-case-07",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247605854884848.mp4?v=20260413a",
    posterSrc: "./assets/images/question-case-07.png",
  },
  case08: {
    imageClass: "media-image-case-08",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247640918522980.mp4?v=20260413c",
    posterSrc: "./assets/images/question-case-08.png",
  },
  case09: {
    imageClass: "media-image-case-09",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247727085987268.mp4?v=20260413d",
    posterSrc: "./assets/images/question-case-09.png",
  },
  case10: {
    imageClass: "media-image-case-10",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247750353593276.mp4?v=20260413e",
    posterSrc: "./assets/images/question-case-10.png",
  },
  resultEarth: {
    imageClass: "media-image-result-earth",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247769069628529.mp4?v=20260413f",
    posterSrc: "./assets/images/result-earth-01.png",
  },
  endingSilhouette: {
    imageClass: "media-image-ending-silhouette",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247777372678465.mp4?v=20260413g",
    posterSrc: "./assets/images/ending-silhouette-01.png",
  },
  endingReveal: {
    imageClass: "media-image-ending",
    motionClass: "",
    videoSrc: "./assets/images/vidu-video-3247785517199401.mp4?v=20260413h",
    posterSrc: "./assets/images/ending-last-person-01.png",
    loopVideo: false,
  },
  titleBackground: {
    imageClass: "media-image-title-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3249087059900137.mp4?v=20260414a",
  },
  case01Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3249119169918702.mp4?v=20260414b",
  },
  case02Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253230617492138.mp4?v=20260417f",
  },
  case03Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253243492326047.mp4?v=20260417g",
  },
  case04Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253254821110905.mp4?v=20260417h",
  },
  interstitialBrightBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3250258124882088.mp4?v=20260415a",
  },
  case05Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3250274911132708.mp4?v=20260415b",
  },
  case06Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253272869552268.mp4?v=20260417i",
  },
  case07Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3250354908064828.mp4?v=20260415c",
  },
  interstitialDarkBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3250366395091494.mp4?v=20260415d",
  },
  case08Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3251805314566218.mp4?v=20260417a",
  },
  case09Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3250383636585426.mp4?v=20260415e",
  },
  case10Background: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253079846484641.mp4?v=20260417b",
  },
  resultBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253168599686583.mp4?v=20260417c",
  },
  resultDonutCore: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/kling_20260421__A_cinemati_3045_0.mp4?v=20260421j",
  },
  endingBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253204659788605.mp4?v=20260417d",
  },
  endingRevealBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/vidu-video-3253216750485654.mp4?v=20260417e",
  },
  thirdChoiceBackground: {
    imageClass: "media-image-case-background",
    motionClass: "",
    videoSrc: "./assets/ui/kling_20260420__Prompt__4378_0.mp4?v=20260420a",
  },
  thirdChoicePrelude: {
    imageClass: "media-image-title-background",
    motionClass: "",
    videoSrc: "./assets/ui/kling_20260421_Prompt__2198_0.mp4?v=20260421b",
    loopVideo: false,
  },
  openingPrelude: {
    imageClass: "media-image-title-background",
    motionClass: "",
    videoSrc: "./assets/ui/OP.mp4?v=20260417j",
  },
};

function createInitialState(selectedGameId = defaultGameId, screen = "prelude") {
  return {
    screen,
    selectedGameId,
    openingIndex: 0,
    questionIndex: 0,
    scores: {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    },
    silentHelpCount: 0,
    hiddenFindCount: 0,
    hiddenQuestionIds: [],
    answered: [],
    responseTimes: [],
    questionStartedAt: 0,
    questionStartId: null,
  };
}

function getSelectedGame() {
  return games.find((game) => game.id === state.selectedGameId) ?? games.find((game) => game.status === "available") ?? null;
}

function selectGame(gameId) {
  playSelectSound();
  unlockIntroMusic({ restart: true });
  state = createInitialState(gameId, "prelude");
  document.body.classList.remove("dark-phase");
  render();
}

function restartSelectedGame(screen = "title") {
  state = createInitialState(state.selectedGameId, screen);
  document.body.classList.remove("dark-phase");
  render();
}

function enterLibrary() {
  state = createInitialState(state.selectedGameId, "title");
  document.body.classList.remove("dark-phase");
  render();
}

function renderMediaVisual(assetKey) {
  const asset = mediaAssets[assetKey];

  if (!asset) {
    return '<div class="media-image media-image-dark"></div>';
  }

  const classes = ["media-image", asset.imageClass, asset.motionClass].filter(Boolean).join(" ");

  if (asset.videoSrc) {
    return `
      <video
        class="${classes} media-video"
        src="${asset.videoSrc}"
        poster="${asset.posterSrc ?? ""}"
        preload="auto"
        autoplay
        muted
        ${asset.loopVideo === false ? "" : "loop"}
        playsinline
        aria-hidden="true"
      ></video>
    `;
  }

  return `<div class="${classes}"></div>`;
}

function renderQuestionVisual(question) {
  if (question.mediaKey) {
    return renderMediaVisual(question.mediaKey);
  }

  const mediaClass = question.imageClass ?? "media-image-dark";
  return `<div class="media-image ${mediaClass}"></div>`;
}

function shouldPlayIntroMusic() {
  if (state.screen === "question") {
    return state.questionIndex <= 3;
  }

  return false;
}

function shouldPlayTitleMusic() {
  if (state.screen === "title") {
    return true;
  }

  if (state.screen === "interstitial") {
    return state.questionIndex === 4;
  }

  return false;
}

function shouldPlayMidMusic() {
  if (state.screen === "question") {
    return state.questionIndex >= 4 && state.questionIndex <= 6;
  }

  return false;
}

function shouldPlayDarkInterstitialMusic() {
  if (state.screen === "interstitial") {
    return state.questionIndex === 7;
  }

  return false;
}

function shouldPlayLateMusic() {
  if (state.screen === "question") {
    return state.questionIndex >= 7 && state.questionIndex <= 9;
  }

  return false;
}

function shouldPlayResultMusic() {
  return state.screen === "result";
}

function shouldPlayEndingMusic() {
  return state.screen === "ending";
}

function shouldPlayThirdChoiceMusic() {
  return state.screen === "thirdChoice" || state.screen === "thirdChoicePrelude" || state.screen === "thirdChoiceGallery";
}

function syncIntroMusic() {
  if (!introMusicUnlocked) {
    return;
  }

  if (shouldPlayTitleMusic()) {
    introMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = titleMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayIntroMusic()) {
    titleMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = introMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayMidMusic()) {
    introMusic.pause();
    titleMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = midMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayDarkInterstitialMusic()) {
    introMusic.pause();
    titleMusic.pause();
    midMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = darkInterstitialMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayLateMusic()) {
    introMusic.pause();
    titleMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = lateMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayResultMusic()) {
    introMusic.pause();
    titleMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    endingMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = resultMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayEndingMusic()) {
    introMusic.pause();
    titleMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    thirdChoiceMusic.pause();
    const playPromise = endingMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  if (shouldPlayThirdChoiceMusic()) {
    introMusic.pause();
    titleMusic.pause();
    midMusic.pause();
    darkInterstitialMusic.pause();
    lateMusic.pause();
    resultMusic.pause();
    endingMusic.pause();
    const playPromise = thirdChoiceMusic.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
    return;
  }

  introMusic.pause();
  titleMusic.pause();
  midMusic.pause();
  darkInterstitialMusic.pause();
  lateMusic.pause();
  resultMusic.pause();
  endingMusic.pause();
  thirdChoiceMusic.pause();
}

function unlockIntroMusic({ restart = false } = {}) {
  introMusicUnlocked = true;
  if (restart) {
    introMusic.currentTime = 0;
    titleMusic.currentTime = 0;
    midMusic.currentTime = 0;
    darkInterstitialMusic.currentTime = 0;
    lateMusic.currentTime = 0;
    resultMusic.currentTime = 0;
    endingMusic.currentTime = 0;
    thirdChoiceMusic.currentTime = 0;
  }
  syncIntroMusic();
}

initializeAudioToggle();
initializeLanguageToggle();
render();

function render() {
  clearResultRevealAnimations();
  clearEndingRevealAnimations();
  clearThirdChoiceRevealAnimations();
  clearQuestionRevealAnimations();
  clearQuestionCountdownAnimation();
  document.body.classList.toggle("title-screen-active", state.screen === "title" || state.screen === "prelude");
  document.body.classList.toggle("language-en", currentLanguage === "en");
  document.body.classList.toggle("language-ja", currentLanguage !== "en");
  applyAudioEnabledState();
  applyLanguageToggleState();
  syncIntroMusic();

  if (state.screen === "library") {
    restartSelectedGame("title");
    return;
  }

  if (!getSelectedGame()) {
    state = createInitialState(defaultGameId, "title");
    render();
    return;
  }

  if (state.screen === "title") {
    renderTitle();
    return;
  }

  if (state.screen === "prelude") {
    renderPrelude();
    return;
  }

  if (state.screen === "opening") {
    renderOpening();
    return;
  }

  if (state.screen === "question") {
    renderQuestion();
    return;
  }

  if (state.screen === "interstitial") {
    renderInterstitial();
    return;
  }

  if (state.screen === "result") {
    renderResult();
    return;
  }

  if (state.screen === "thirdChoicePrelude") {
    renderThirdChoicePrelude();
    return;
  }

  if (state.screen === "thirdChoice") {
    renderThirdChoice();
    return;
  }

  if (state.screen === "thirdChoiceGallery") {
    renderThirdChoiceGallery();
    return;
  }

  if (state.screen === "ending") {
    renderEnding();
  }
}

function renderLibrary() {
  restartSelectedGame("title");
}

function enterTitleFromPrelude() {
  if (state.screen !== "prelude") {
    return;
  }

  const preludeVideo = document.getElementById("prelude-video");
  preludeVideo?.pause();

  state.screen = "title";
  render();
}

function isTitleLogoBackgroundPixel(imageData, offset) {
  const r = imageData[offset];
  const g = imageData[offset + 1];
  const b = imageData[offset + 2];
  const a = imageData[offset + 3];
  if (a === 0) {
    return true;
  }
  const maxChannel = Math.max(r, g, b);
  const minChannel = Math.min(r, g, b);
  const average = (r + g + b) / 3;
  const saturation = maxChannel - minChannel;
  return average >= 218 && saturation <= 42;
}

function buildTransparentTitleLogo(sourceUrl) {
  if (transparentTitleLogoDataUrl) {
    return Promise.resolve(transparentTitleLogoDataUrl);
  }

  if (transparentTitleLogoPromise) {
    return transparentTitleLogoPromise;
  }

  transparentTitleLogoPromise = new Promise((resolve, reject) => {
    const logoImage = new Image();
    logoImage.decoding = "async";
    logoImage.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = logoImage.naturalWidth || logoImage.width;
      canvas.height = logoImage.naturalHeight || logoImage.height;
      const context = canvas.getContext("2d", { willReadFrequently: true });

      if (!context) {
        reject(new Error("Canvas context unavailable"));
        return;
      }

      context.drawImage(logoImage, 0, 0);
      const image = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width, height } = image;
      const visited = new Uint8Array(width * height);
      const queue = [];

      const enqueue = (x, y) => {
        const pointer = y * width + x;
        if (visited[pointer]) {
          return;
        }
        const offset = pointer * 4;
        if (!isTitleLogoBackgroundPixel(data, offset)) {
          return;
        }
        visited[pointer] = 1;
        queue.push(pointer);
      };

      for (let x = 0; x < width; x += 1) {
        enqueue(x, 0);
        enqueue(x, height - 1);
      }

      for (let y = 0; y < height; y += 1) {
        enqueue(0, y);
        enqueue(width - 1, y);
      }

      for (let head = 0; head < queue.length; head += 1) {
        const pointer = queue[head];
        const x = pointer % width;
        const y = Math.floor(pointer / width);

        if (x > 0) enqueue(x - 1, y);
        if (x + 1 < width) enqueue(x + 1, y);
        if (y > 0) enqueue(x, y - 1);
        if (y + 1 < height) enqueue(x, y + 1);
      }

      for (let pointer = 0; pointer < visited.length; pointer += 1) {
        if (!visited[pointer]) {
          continue;
        }
        const offset = pointer * 4;
        const average = (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
        const alpha =
          average >= 244 ? 0 : Math.max(0, Math.min(255, Math.round(((244 - average) / 26) * 255)));
        data[offset + 3] = Math.min(data[offset + 3], alpha);
      }

      context.putImageData(image, 0, 0);
      transparentTitleLogoDataUrl = canvas.toDataURL("image/png");
      resolve(transparentTitleLogoDataUrl);
    };
    logoImage.onerror = () => reject(new Error("Failed to load title logo"));
    logoImage.src = sourceUrl;
  })
    .catch((error) => {
      transparentTitleLogoPromise = null;
      throw error;
    });

  return transparentTitleLogoPromise;
}

function applyTransparentTitleLogo(imgElement, sourceUrl) {
  if (!imgElement) {
    return;
  }

  const revealOriginal = () => {
    if (imgElement.isConnected) {
      imgElement.classList.add("hero-logo-image-ready");
    }
  };

  buildTransparentTitleLogo(sourceUrl)
    .then((transparentSource) => {
      if (!imgElement.isConnected) {
        return;
      }
      imgElement.src = transparentSource;
      imgElement.classList.add("hero-logo-image-ready");
    })
    .catch(() => {
      revealOriginal();
    });
}

function renderPrelude() {
  document.body.classList.remove("dark-phase");
  app.innerHTML = `
    <section class="prelude-screen fade-in" aria-label="Opening video">
      <video
        id="prelude-video"
        class="prelude-video"
        src="${mediaAssets.openingPrelude.videoSrc}"
        preload="auto"
        autoplay
        playsinline
      ></video>
      <button class="prelude-skip-button" id="prelude-skip-button">SKIP</button>
    </section>
  `;

  const video = document.getElementById("prelude-video");
  if (!video) {
    enterTitleFromPrelude();
    return;
  }

  video.muted = !audioEnabled;
  video.volume = 1;
  applyAudioEnabledState();

  let hasHandedOff = false;
  const handoffToTitle = () => {
    if (hasHandedOff) {
      return;
    }
    hasHandedOff = true;
    enterTitleFromPrelude();
  };

  document.getElementById("prelude-skip-button")?.addEventListener("click", () => {
    playSelectSound();
    handoffToTitle();
  });

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {
      video.muted = true;
      const mutedPlay = video.play();
      if (mutedPlay?.catch) {
        mutedPlay.catch(() => {
          handoffToTitle();
        });
      }
    });
  }

  video.addEventListener("timeupdate", () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    if (video.currentTime >= Math.max(0, video.duration - 0.48)) {
      handoffToTitle();
    }
  });

  video.addEventListener(
    "ended",
    () => {
      handoffToTitle();
    },
    { once: true },
  );
}

function renderThirdChoicePrelude() {
  document.body.classList.remove("dark-phase");
  app.innerHTML = `
    <section class="prelude-screen fade-in" aria-label="Third choice bridge video">
      <video
        id="third-choice-prelude-video"
        class="prelude-video"
        src="${mediaAssets.thirdChoicePrelude.videoSrc}"
        preload="auto"
        autoplay
        muted
        playsinline
      ></video>
    </section>
  `;

  const video = document.getElementById("third-choice-prelude-video");
  if (!video) {
    state.screen = "thirdChoice";
    render();
    return;
  }

  let hasHandedOff = false;
  const handoffToThirdChoice = () => {
    if (hasHandedOff) {
      return;
    }
    hasHandedOff = true;
    state.screen = "thirdChoice";
    render();
  };

  const playPromise = video.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {
      handoffToThirdChoice();
    });
  }

  video.addEventListener(
    "ended",
    () => {
      handoffToThirdChoice();
    },
    { once: true },
  );
}

function renderTitle() {
  const game = getSelectedGame();
  const titleScreen = game?.titleScreen;
  const titleLogoSrc = "./assets/ui/OP2.png?v=20260417m";

  if (!game || !titleScreen) {
    enterLibrary();
    return;
  }

  document.body.classList.remove("dark-phase");
  app.innerHTML = `
    <div class="title-scene-background" aria-hidden="true">
      <div class="title-scene-background-media">
        ${renderMediaVisual("titleBackground")}
      </div>
    </div>
    <section class="panel panel-wide panel-title-hero">
      <div class="hero-stage hero-stage-title">
        <div class="hero-copy hero-copy-title">
          <div class="hero-logo-lockup hero-logo-lockup-image">
            <img class="hero-logo-image hero-logo-image-ready" src="${titleLogoSrc}" alt="${titleScreen.title}" />
          </div>
          <p class="hero-subtitle hero-subtitle-title">${t("titleSubtitle")}</p>
          <div class="hero-actions hero-actions-title">
            <button class="primary-button" id="start-button">${t("start")}</button>
            <button class="secondary-button" id="title-world-button">${t("about")}</button>
          </div>
        </div>
        <div class="hero-art-shell">
          <div class="media-stage hero-art hero-art-title">
            ${renderMediaVisual("titleHero")}
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById("start-button").addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("question");
  });

  document.getElementById("title-world-button").addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("opening");
  });
}

function renderOpening() {
  const game = getSelectedGame();

  if (!game) {
    enterLibrary();
    return;
  }

  document.body.classList.remove("dark-phase");
  const scene = localizeOpeningScene(game.openingScenes[state.openingIndex], state.openingIndex);
  app.innerHTML = `
    <section class="panel panel-wide fade-in">
      <div class="screen-layout">
        <div class="media-stage">
          <div class="media-image ${state.openingIndex === 0 ? "media-image-opening" : "media-image-rules"}"></div>
        </div>
        <div class="content-pane">
          <div class="intro-card">
            <p class="eyebrow">${scene.eyebrow}</p>
            <h2 class="question-title">${scene.title}</h2>
            <p class="body-copy">${scene.body}</p>
            <div class="button-row">
              <button class="primary-button" id="opening-next">${scene.button}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById("opening-next").addEventListener("click", () => {
    playSelectSound();
    if (state.openingIndex < game.openingScenes.length - 1) {
      state.openingIndex += 1;
    } else {
      state.screen = "question";
    }
    render();
  });
}

function renderQuestion() {
  const game = getSelectedGame();

  if (!game) {
    enterLibrary();
    return;
  }

  const questionSet = game.questions;

  if (state.questionIndex >= questionSet.length) {
    state.screen = "result";
    render();
    return;
  }

  document.body.classList.toggle("dark-phase", state.questionIndex >= 6);

  const question = localizeQuestion(questionSet[state.questionIndex]);
  state.questionStartId = null;
  state.questionStartedAt = 0;
  const bannerText = getQuestionBannerText(state.questionIndex);
  const progressPercentage = Math.round(((state.questionIndex + 1) / questionSet.length) * 100);
  const hotspot = hiddenHotspots[question.id];
  const backgroundLayer =
    question.id === "q2"
      ? `
        <div class="question-scene-background" aria-hidden="true">
          <div class="question-scene-background-media">
            ${renderMediaVisual("case02Background")}
          </div>
        </div>
      `
      : question.id === "q3"
        ? `
          <div class="question-scene-background" aria-hidden="true">
            <div class="question-scene-background-media">
              ${renderMediaVisual("case03Background")}
            </div>
          </div>
        `
      : question.id === "q4"
      ? `
        <div class="question-scene-background" aria-hidden="true">
          <div class="question-scene-background-media">
            ${renderMediaVisual("case04Background")}
          </div>
        </div>
      `
      : question.id === "q1"
      ? `
        <div class="question-scene-background" aria-hidden="true">
          <div class="question-scene-background-media">
            ${renderMediaVisual("case01Background")}
          </div>
        </div>
      `
      : question.id === "q6"
        ? `
          <div class="question-scene-background" aria-hidden="true">
            <div class="question-scene-background-media">
              ${renderMediaVisual("case06Background")}
            </div>
          </div>
        `
      : question.id === "q5"
        ? `
          <div class="question-scene-background" aria-hidden="true">
            <div class="question-scene-background-media">
              ${renderMediaVisual("case05Background")}
            </div>
          </div>
        `
        : question.id === "q7"
          ? `
            <div class="question-scene-background" aria-hidden="true">
              <div class="question-scene-background-media">
                ${renderMediaVisual("case07Background")}
              </div>
            </div>
          `
          : question.id === "q8"
            ? `
              <div class="question-scene-background" aria-hidden="true">
                <div class="question-scene-background-media">
                  ${renderMediaVisual("case08Background")}
                </div>
              </div>
            `
          : question.id === "q9"
            ? `
              <div class="question-scene-background" aria-hidden="true">
                <div class="question-scene-background-media">
                  ${renderMediaVisual("case09Background")}
                </div>
              </div>
            `
            : question.id === "q10"
              ? `
                <div class="question-scene-background" aria-hidden="true">
                  <div class="question-scene-background-media">
                    ${renderMediaVisual("case10Background")}
                  </div>
                </div>
              `
      : "";

  app.innerHTML = `
    ${backgroundLayer}
    <section class="panel panel-wide fade-in">
      <div class="screen-layout screen-layout-reversed">
        <div class="content-pane">
          <div class="question-grid">
            <div class="hud">
              <span class="case-number">${question.caseNumber}</span>
              <div class="hud-right">
                <div class="progress-track" aria-hidden="true">
                  <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <div class="decision-timer" data-decision-timer aria-hidden="true">
                  <svg class="decision-timer-svg" viewBox="0 0 48 48" role="presentation">
                    <circle class="decision-timer-track" cx="24" cy="24" r="18"></circle>
                    <circle class="decision-timer-ring" cx="24" cy="24" r="18"></circle>
                  </svg>
                  <span class="decision-timer-dot"></span>
                </div>
              </div>
            </div>
            <div class="question-header">
              <div class="status-banner">${bannerText}</div>
              <h2 class="question-title question-title-hidden" data-question-title></h2>
              <p class="question-body question-copy-hidden" data-question-body></p>
            </div>
            <div class="choice-list">
              ${question.choices
                .map(
                  (choice, index) => `
                    <button class="choice-button choice-button-hidden" data-choice-index="${index}">
                      <strong>${choice.title}</strong>
                      <span class="choice-copy">${choice.copy}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            ${hotspotDebugEnabled && hotspot ? renderHotspotDebugger(question.id, hotspot) : ""}
          </div>
        </div>
        <div class="media-stage image-only">
          ${renderQuestionVisual(question)}
          ${hotspot ? renderHiddenHotspot(question.id, hotspot) : ""}
        </div>
      </div>
    </section>
  `;

  app.querySelectorAll("[data-choice-index]").forEach((button) => {
    button.addEventListener("click", () => {
      playSelectSound();
      const choiceIndex = Number(button.dataset.choiceIndex);
      answerQuestion(question, question.choices[choiceIndex]);
    });
  });

  const hiddenSpot = document.querySelector("[data-hidden-hotspot]");
  if (hiddenSpot && !hotspotDebugEnabled) {
    hiddenSpot.addEventListener("click", () => {
      handleHiddenHotspot(question);
    });
  }

  if (hotspotDebugEnabled && hotspot) {
    enableHotspotDragging(question.id);
  }

  runQuestionTypeSequence(question);
}

function renderHiddenHotspot(questionId, hotspot) {
  return `
    <button
      class="hidden-hotspot ${hotspotDebugEnabled ? "hidden-hotspot-debug" : ""}"
      data-hidden-hotspot="${questionId}"
      aria-label="hidden hotspot"
      style="
        left: ${hotspot.left}%;
        top: ${hotspot.top}%;
        width: ${hotspot.width}%;
        height: ${hotspot.height}%;
      "
    >
      ${hotspotDebugEnabled ? '<span class="hidden-hotspot-handle" aria-hidden="true"></span>' : ""}
    </button>
  `;
}

function formatHotspotCode(questionId, hotspot) {
  return `${questionId}: { left: ${hotspot.left}, top: ${hotspot.top}, width: ${hotspot.width}, height: ${hotspot.height} }`;
}

function formatAllHotspotsCode() {
  return Object.keys(initialHiddenHotspots)
    .map((questionId) => {
      const hotspot = confirmedHotspots[questionId] ?? hiddenHotspots[questionId] ?? initialHiddenHotspots[questionId];
      return `  ${formatHotspotCode(questionId, hotspot)}`;
    })
    .join(",\n");
}

function renderHotspotDebugger(questionId, hotspot) {
  const confirmed = confirmedHotspots[questionId];
  return `
    <div class="hotspot-debugger">
      <p class="hotspot-debugger-title">Hotspot Debug</p>
      <p class="hotspot-debugger-copy">枠をドラッグで移動し、右下の丸でサイズ変更できます。<code>#hotspots</code> の時だけ表示されます。</p>
      <div class="hotspot-debugger-actions">
        <button class="hotspot-debugger-button" id="hotspot-confirm-${questionId}">仮決定</button>
        <button class="hotspot-debugger-button hotspot-debugger-button-secondary" id="hotspot-confirm-next-${questionId}">
          仮決定して次へ
        </button>
        <button class="hotspot-debugger-button hotspot-debugger-button-secondary" id="hotspot-export-${questionId}">
          全体を書き出す
        </button>
      </div>
      <code class="hotspot-debugger-code" id="hotspot-debug-${questionId}">${formatHotspotCode(questionId, hotspot)}</code>
      <p class="hotspot-debugger-status" id="hotspot-status-${questionId}">
        ${confirmed ? "仮決定済み" : "未仮決定"}
      </p>
      <code class="hotspot-debugger-code hotspot-debugger-code-muted" id="hotspot-confirmed-${questionId}">
        ${confirmed ? formatHotspotCode(questionId, confirmed) : "仮決定するとここに座標が残ります。"}
      </code>
      <code class="hotspot-debugger-code hotspot-debugger-code-muted" id="hotspot-exported-${questionId}">
        全体を書き出すと、ここに本設定へ貼れる座標が出ます。
      </code>
    </div>
  `;
}

function enableHotspotDragging(questionId) {
  const hotspotElement = document.querySelector(`[data-hidden-hotspot="${questionId}"]`);
  const stage = hotspotElement?.closest(".media-stage");
  const debugCode = document.getElementById(`hotspot-debug-${questionId}`);
  const confirmedCode = document.getElementById(`hotspot-confirmed-${questionId}`);
  const status = document.getElementById(`hotspot-status-${questionId}`);
  const confirmButton = document.getElementById(`hotspot-confirm-${questionId}`);
  const confirmNextButton = document.getElementById(`hotspot-confirm-next-${questionId}`);
  const exportButton = document.getElementById(`hotspot-export-${questionId}`);
  const exportedCode = document.getElementById(`hotspot-exported-${questionId}`);
  const resizeHandle = hotspotElement?.querySelector(".hidden-hotspot-handle");

  if (!hotspotElement || !stage || !debugCode || !confirmButton) {
    return;
  }

  const syncDebugger = () => {
    const hotspot = hiddenHotspots[questionId];
    debugCode.textContent = formatHotspotCode(questionId, hotspot);
  };

  let dragState = null;

  hotspotElement.addEventListener("pointerdown", (event) => {
    if (event.target instanceof HTMLElement && event.target.closest(".hidden-hotspot-handle")) {
      return;
    }
    event.preventDefault();
    const rect = stage.getBoundingClientRect();
    const hotspot = hiddenHotspots[questionId];
    dragState = {
      mode: "move",
      rect,
      offsetX: event.clientX - rect.left - (rect.width * hotspot.left) / 100,
      offsetY: event.clientY - rect.top - (rect.height * hotspot.top) / 100,
    };
    hotspotElement.setPointerCapture(event.pointerId);
  });

  hotspotElement.addEventListener("pointermove", (event) => {
    if (!dragState) {
      return;
    }

    const hotspot = hiddenHotspots[questionId];
    if (dragState.mode === "resize") {
      const deltaWidth = ((event.clientX - dragState.startX) / dragState.rect.width) * 100;
      const deltaHeight = ((event.clientY - dragState.startY) / dragState.rect.height) * 100;
      hotspot.width = roundToTenth(clamp(dragState.startWidth + deltaWidth, 4, 100 - hotspot.left));
      hotspot.height = roundToTenth(clamp(dragState.startHeight + deltaHeight, 4, 100 - hotspot.top));
    } else {
      const maxLeft = 100 - hotspot.width;
      const maxTop = 100 - hotspot.height;
      const nextLeft = ((event.clientX - dragState.rect.left - dragState.offsetX) / dragState.rect.width) * 100;
      const nextTop = ((event.clientY - dragState.rect.top - dragState.offsetY) / dragState.rect.height) * 100;
      hotspot.left = roundToTenth(clamp(nextLeft, 0, maxLeft));
      hotspot.top = roundToTenth(clamp(nextTop, 0, maxTop));
    }

    hotspotElement.style.left = `${hotspot.left}%`;
    hotspotElement.style.top = `${hotspot.top}%`;
    hotspotElement.style.width = `${hotspot.width}%`;
    hotspotElement.style.height = `${hotspot.height}%`;
    syncDebugger();
  });

  const releaseDrag = (event) => {
    if (!dragState) {
      return;
    }
    dragState = null;
    if (hotspotElement.hasPointerCapture(event.pointerId)) {
      hotspotElement.releasePointerCapture(event.pointerId);
    }
  };

  hotspotElement.addEventListener("pointerup", releaseDrag);
  hotspotElement.addEventListener("pointercancel", releaseDrag);

  resizeHandle?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = stage.getBoundingClientRect();
    const hotspot = hiddenHotspots[questionId];
    dragState = {
      mode: "resize",
      rect,
      startX: event.clientX,
      startY: event.clientY,
      startWidth: hotspot.width,
      startHeight: hotspot.height,
    };
    hotspotElement.setPointerCapture(event.pointerId);
  });

  const confirmHotspot = () => {
    const snapshot = { ...hiddenHotspots[questionId] };
    confirmedHotspots[questionId] = snapshot;
    hiddenHotspots[questionId] = { ...snapshot };
    persistConfirmedHotspots();
    status.textContent = "仮決定済み";
    confirmButton.textContent = "仮決定済み";
    if (confirmedCode) {
      confirmedCode.textContent = formatHotspotCode(questionId, snapshot);
    }
  };

  confirmButton.addEventListener("click", () => {
    confirmHotspot();
  });

  confirmNextButton?.addEventListener("click", () => {
    confirmHotspot();
    advanceHotspotDebugQuestion();
  });

  exportButton?.addEventListener("click", async () => {
    const exportText = `const initialHiddenHotspots = {\n${formatAllHotspotsCode()}\n};`;
    if (exportedCode) {
      exportedCode.textContent = exportText;
    }

    try {
      await navigator.clipboard.writeText(exportText);
      if (status) {
        status.textContent = "全体座標をコピーしました";
      }
    } catch {
      if (status) {
        status.textContent = "全体座標を表示しました";
      }
    }
  });
}

function advanceHotspotDebugQuestion() {
  state.questionIndex += 1;
  if (state.questionIndex >= questions.length) {
    if (state.hiddenFindCount >= TOTAL_HIDDEN_HOTSPOTS) {
      thirdChoiceMusic.currentTime = 0;
      state.screen = "thirdChoicePrelude";
    } else {
      state.screen = "result";
    }
  } else {
    state.screen = "question";
  }
  render();
}

function answerQuestion(question, choice) {
  recordQuestionTiming(question.id);
  applyChoiceEffects(choice.effects);
  state.answered.push({ questionId: question.id, choiceTitle: choice.title });
  state.questionIndex += 1;

  if (postQuestionMessages[state.questionIndex]) {
    state.screen = "interstitial";
  }

  if (state.questionIndex >= questions.length) {
    if (state.hiddenFindCount >= TOTAL_HIDDEN_HOTSPOTS) {
      thirdChoiceMusic.currentTime = 0;
      state.screen = "thirdChoicePrelude";
    } else {
      state.screen = "result";
    }
  }

  render();
}

function handleHiddenHotspot(question) {
  recordQuestionTiming(question.id);
  let foundFinalHotspot = false;
  if (!state.hiddenQuestionIds.includes(question.id)) {
    state.hiddenFindCount += 1;
    state.hiddenQuestionIds.push(question.id);
    foundFinalHotspot = state.hiddenFindCount >= TOTAL_HIDDEN_HOTSPOTS;
  }

  state.answered.push({ questionId: question.id, choiceTitle: "__hidden_hotspot__" });
  state.questionIndex += 1;

  if (postQuestionMessages[state.questionIndex]) {
    state.screen = "interstitial";
  }

  if (state.questionIndex >= questions.length) {
    if (state.hiddenFindCount >= TOTAL_HIDDEN_HOTSPOTS) {
      thirdChoiceMusic.currentTime = 0;
      state.screen = "thirdChoicePrelude";
    } else {
      state.screen = "result";
    }
  }

  if (foundFinalHotspot) {
    playSelectSound();
  }

  render();
}

function applyChoiceEffects(effects) {
  ["A", "B", "C", "D"].forEach((key) => {
    if (effects[key]) {
      state.scores[key] += effects[key];
    }
  });

  if (effects.silent_help) {
    state.silentHelpCount += effects.silent_help;
  }
}

function recordQuestionTiming(questionId) {
  if (state.questionStartId !== questionId || !state.questionStartedAt) {
    return;
  }

  state.responseTimes.push(Math.max(0, performance.now() - state.questionStartedAt));
  state.questionStartedAt = 0;
  state.questionStartId = null;
}

function renderInterstitial() {
  const message = getPostQuestionMessage(state.questionIndex);
  const isDark = state.questionIndex >= 7;
  document.body.classList.toggle("dark-phase", isDark);
  const backgroundLayer =
    !isDark
      ? `
        <div class="question-scene-background" aria-hidden="true">
          <div class="question-scene-background-media">
            ${renderMediaVisual("interstitialBrightBackground")}
          </div>
        </div>
      `
      : `
        <div class="question-scene-background" aria-hidden="true">
          <div class="question-scene-background-media">
            ${renderMediaVisual("interstitialDarkBackground")}
          </div>
        </div>
      `;

  app.innerHTML = `
    ${backgroundLayer}
    <section class="panel panel-wide fade-in">
      <div class="screen-layout">
        <div class="media-stage image-only">
          ${isDark ? renderMediaVisual("interstitialDark") : renderMediaVisual("interstitialBright")}
        </div>
        <div class="content-pane">
          <div class="intro-card">
            <p class="eyebrow">${isDark ? "System Message" : "Support Mascot"}</p>
            <h2 class="question-title question-title-compact">${message}</h2>
            <p class="body-copy">
              ${isDark ? t("interstitialDarkBody") : t("interstitialBrightBody")}
            </p>
            <div class="button-row">
              <button class="primary-button" id="continue-button">${t("continue")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById("continue-button").addEventListener("click", () => {
    playSelectSound();
    state.screen = "question";
    render();
  });
}

function renderResult() {
  document.body.classList.add("dark-phase");
  const normalizedScores = normalizeScores(state.scores);
  const timingSummary = summarizeDecisionTiming(state.responseTimes);
  const population = calculatePopulationResult(normalizedScores, timingSummary, state.silentHelpCount);
  const resultTitle = t("resultTitle");
  const resultCopy = t("resultCopy");

  app.innerHTML = `
    <div class="question-scene-background" aria-hidden="true">
      <div class="question-scene-background-media">
        ${renderMediaVisual("resultBackground")}
      </div>
    </div>
    <section class="panel panel-wide fade-in">
      <div class="screen-layout">
        <div class="result-visual-column">
          <div class="media-stage image-only">
            ${renderMediaVisual("resultEarth")}
          </div>
          ${renderResultDonut(population)}
        </div>
        <div class="content-pane">
          <div class="result-card">
            <p class="eyebrow">${t("resultEyebrow")}</p>
            <h2 class="result-title result-title-compact result-reveal-text" data-result-final="${escapeHtml(resultTitle)}"></h2>
            <p class="result-copy result-reveal-text result-copy-intro" data-result-final="${escapeHtml(resultCopy)}"></p>
            <div class="result-blocks">
              ${renderMeterRow(t("resultPriority"), population.priority_saved)}
              ${renderMeterRow(t("resultDelayed"), population.delayed_found)}
              ${renderMeterRow(t("resultUnrecognized"), population.unrecognized)}
            </div>
            <div class="button-row result-action-row result-action-row-hidden">
              <button class="primary-button" id="result-next">${t("resultNext")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById("result-next").addEventListener("click", () => {
    playSelectSound();
    state.screen = "ending";
    render();
  });

  runResultRevealAnimation(population);
}

function renderResultDonut(population) {
  const total = population.priority_saved + population.delayed_found + population.unrecognized;
  const resShare = (population.priority_saved / total) * 100;
  const delShare = (population.delayed_found / total) * 100;
  const misShare = (population.unrecognized / total) * 100;
  const totalDisplay = `${(total / 1_000_000_000).toFixed(1)}B`;
  const donutCoreAsset = mediaAssets.resultDonutCore;

  const legendItems = [
    { code: "RES", label: t("resultPriority"), value: population.priority_saved, share: resShare, tone: "res" },
    { code: "DEL", label: t("resultDelayed"), value: population.delayed_found, share: delShare, tone: "del" },
    { code: "MIS", label: t("resultUnrecognized"), value: population.unrecognized, share: misShare, tone: "mis" },
  ];

  return `
    <section class="result-donut-card result-donut-hidden" id="result-donut-card">
      <div class="result-donut-heading">
        <p class="tiny-label">${t("resultDistribution")}</p>
        <p class="result-donut-title">RES / DEL / MIS</p>
      </div>
      <div class="result-donut-layout">
        <div class="result-donut-chart-wrap">
          <div
            class="result-donut-chart"
            data-result-donut
            data-res="${resShare}"
            data-del="${delShare}"
            data-mis="${misShare}"
            style="--res: 0%; --del: 0%; --mis: 0%;"
            aria-label="${currentLanguage === "en" ? "Rescue outcome distribution" : "救助結果の割合"}"
          >
            <div class="result-donut-hole">
              ${
                donutCoreAsset?.videoSrc
                  ? `
                    <video
                      class="result-donut-core-video"
                      src="${donutCoreAsset.videoSrc}"
                      preload="auto"
                      autoplay
                      muted
                      loop
                      playsinline
                      aria-hidden="true"
                    ></video>
                  `
                  : ""
              }
            </div>
          </div>
          <div class="result-donut-total">
            <p class="result-donut-center-title">${totalDisplay}</p>
            <p class="result-donut-center-copy">TOTAL</p>
          </div>
        </div>
        <div class="result-donut-legend">
          ${legendItems
            .map(
              (item) => `
                <div class="result-donut-legend-item">
                  <div class="result-donut-legend-top">
                    <span class="result-donut-code result-donut-code-${item.tone}">${item.code}</span>
                    <span class="result-donut-percent">${Math.round(item.share)}%</span>
                  </div>
                  <p class="result-donut-label">${item.label}</p>
                  <p class="result-donut-value">${formatPopulation(item.value)}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderMeterRow(label, value) {
  const maxPopulation = 8_000_000_000;
  const percentage = Math.max(2, Math.round((value / maxPopulation) * 100));

  return `
    <div class="meter-row meter-row-hidden" data-meter-target="${value}" data-meter-width="${percentage}">
      <div>
        <div class="meter-label">${label}</div>
        <div class="result-number" data-result-number>0</div>
      </div>
      <div class="meter" aria-hidden="true">
        <div class="meter-fill" style="width: 0%"></div>
      </div>
    </div>
  `;
}

function clearResultRevealAnimations() {
  resultRevealTimers.forEach((timerId) => window.clearTimeout(timerId));
  resultRevealFrameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
  resultRevealTimers = [];
  resultRevealFrameIds = [];
}

function clearEndingRevealAnimations() {
  endingRevealTimers.forEach((timerId) => window.clearTimeout(timerId));
  endingRevealTimers = [];
}

function clearThirdChoiceRevealAnimations() {
  thirdChoiceRevealTimers.forEach((timerId) => window.clearTimeout(timerId));
  thirdChoiceRevealTimers = [];
}

function clearQuestionRevealAnimations() {
  questionRevealTimers.forEach((timerId) => window.clearTimeout(timerId));
  questionRevealTimers = [];
}

function queueQuestionReveal(questionId, callback, delay) {
  const timerId = window.setTimeout(() => {
    if (state.screen !== "question") {
      return;
    }
    const activeQuestion = getSelectedGame()?.questions?.[state.questionIndex];
    if (!activeQuestion || activeQuestion.id !== questionId) {
      return;
    }
    callback();
  }, delay);
  questionRevealTimers.push(timerId);
}

function typeQuestionText(element, text, questionId, charDelay, onComplete) {
  if (!element) {
    onComplete?.();
    return;
  }

  element.textContent = "";
  const characters = Array.from(text);

  if (!characters.length) {
    onComplete?.();
    return;
  }

  characters.forEach((_, index) => {
    queueQuestionReveal(
      questionId,
      () => {
        element.textContent = characters.slice(0, index + 1).join("");
        if (index === characters.length - 1) {
          onComplete?.();
        }
      },
      index * charDelay,
    );
  });
}

function runQuestionTypeSequence(question) {
  const titleElement = document.querySelector("[data-question-title]");
  const bodyElement = document.querySelector("[data-question-body]");
  const choiceButtons = Array.from(document.querySelectorAll("[data-choice-index]"));

  const startTiming = () => {
    if (state.screen !== "question") {
      return;
    }
    if (state.questionStartId === question.id && state.questionStartedAt) {
      return;
    }
    state.questionStartId = question.id;
    state.questionStartedAt = performance.now();
    startQuestionCountdown(question.id);
  };

  const revealChoices = () => {
    choiceButtons.forEach((button, index) => {
      queueQuestionReveal(question.id, () => {
        if (!button.isConnected) {
          return;
        }
        if (index === 0) {
          startTiming();
        }
        button.classList.remove("choice-button-hidden");
        button.classList.add("choice-button-visible");
      }, 80 + index * 120);
    });
  };

  if (titleElement) {
    titleElement.classList.remove("question-title-hidden");
  }

  typeQuestionText(titleElement, question.title, question.id, 26, () => {
    if (bodyElement) {
      bodyElement.classList.remove("question-copy-hidden");
      bodyElement.classList.add("question-copy-visible");
    }
    typeQuestionText(bodyElement, question.body, question.id, 11, revealChoices);
  });
}

function queueResultReveal(callback, delay) {
  const timerId = window.setTimeout(() => {
    if (state.screen !== "result") {
      return;
    }
    callback();
  }, delay);
  resultRevealTimers.push(timerId);
}

function queueEndingReveal(callback, delay) {
  const timerId = window.setTimeout(() => {
    if (state.screen !== "ending") {
      return;
    }
    callback();
  }, delay);
  endingRevealTimers.push(timerId);
}

function queueThirdChoiceReveal(callback, delay) {
  const timerId = window.setTimeout(() => {
    if (state.screen !== "thirdChoice") {
      return;
    }
    callback();
  }, delay);
  thirdChoiceRevealTimers.push(timerId);
}

function runThirdChoiceRevealAnimation() {
  clearThirdChoiceRevealAnimations();

  const lines = Array.from(document.querySelectorAll("[data-third-choice-line]"));
  const form = document.getElementById("third-choice-form");
  const actions = document.getElementById("third-choice-actions");
  const status = document.getElementById("third-choice-status");
  const secondaryNav = document.getElementById("third-choice-secondary-nav");
  const lineDelays = [450, 1450, 2450, 3950, 4950, 6450, 7450];

  lines.forEach((line, index) => {
    queueThirdChoiceReveal(() => {
      line.classList.remove("ending-reveal-hidden");
      line.classList.add("ending-reveal-visible");
    }, lineDelays[index] ?? 450 + index * 1000);
  });

  const baseDelay = (lineDelays[lines.length - 1] ?? 450 + (lines.length - 1) * 1000) + 1000;

  queueThirdChoiceReveal(() => {
    form?.classList.remove("ending-reveal-hidden");
    form?.classList.add("ending-reveal-visible");
  }, baseDelay + 180);

  queueThirdChoiceReveal(() => {
    actions?.classList.remove("ending-reveal-hidden");
    actions?.classList.add("ending-reveal-visible");
  }, baseDelay + 360);

  queueThirdChoiceReveal(() => {
    status?.classList.remove("ending-reveal-hidden");
    status?.classList.add("ending-reveal-visible");
  }, baseDelay + 500);

  queueThirdChoiceReveal(() => {
    secondaryNav?.classList.remove("ending-reveal-hidden");
    secondaryNav?.classList.add("ending-reveal-visible");
  }, baseDelay + 660);
}

function runResultRevealAnimation(_population) {
  clearResultRevealAnimations();

  const titleElement = document.querySelector(".result-title[data-result-final]");
  const copyElement = document.querySelector(".result-copy[data-result-final]");
  const rows = Array.from(document.querySelectorAll(".meter-row[data-meter-target]"));
  const donutCard = document.getElementById("result-donut-card");
  const donutChart = document.querySelector("[data-result-donut]");
  const actionRow = document.querySelector(".result-action-row");

  if (titleElement) {
    animateBitReveal(titleElement, titleElement.dataset.resultFinal ?? "", 900);
  }

  if (copyElement) {
    queueResultReveal(() => {
      animateBitReveal(copyElement, copyElement.dataset.resultFinal ?? "", 1250);
    }, 420);
  }

  rows.forEach((row, index) => {
    queueResultReveal(() => {
      row.classList.remove("meter-row-hidden");
      row.classList.add("meter-row-visible");
      animateMeterRow(row, 1250);
    }, 1900 + index * 950);
  });

  if (donutCard && donutChart) {
    queueResultReveal(() => {
      donutCard.classList.remove("result-donut-hidden");
      donutCard.classList.add("result-donut-visible");
      animateResultDonut(donutChart, 1350);
    }, 1900 + rows.length * 950 - 120);
  }

  if (actionRow) {
    queueResultReveal(() => {
      actionRow.classList.remove("result-action-row-hidden");
      actionRow.classList.add("result-action-row-visible");
    }, 1900 + rows.length * 950 + 500);
  }
}

function animateResultDonut(chart, duration = 1200) {
  const targetRes = Number(chart.dataset.res || 0);
  const targetDel = Number(chart.dataset.del || 0);
  const targetMis = Number(chart.dataset.mis || 0);
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    chart.style.setProperty("--res", `${(targetRes * progress).toFixed(3)}%`);
    chart.style.setProperty("--del", `${(targetDel * progress).toFixed(3)}%`);
    chart.style.setProperty("--mis", `${(targetMis * progress).toFixed(3)}%`);

    if (progress < 1) {
      const frameId = window.requestAnimationFrame(tick);
      resultRevealFrameIds.push(frameId);
    }
  };

  const frameId = window.requestAnimationFrame(tick);
  resultRevealFrameIds.push(frameId);
}

function animateBitReveal(element, finalText, duration = 1000) {
  const finalChars = Array.from(finalText);
  const randomChars = ["0", "1", "0", "1", "·", ":", "¦"];
  const startTime = performance.now();

  element.classList.add("result-reveal-text-active");

  const tick = (now) => {
    if (state.screen !== "result") {
      return;
    }

    const progress = Math.min(1, (now - startTime) / duration);
    const revealCount = Math.floor(finalChars.length * progress);

    element.textContent = finalChars
      .map((char, index) => {
        if (/\s/.test(char)) {
          return char;
        }
        if (index < revealCount) {
          return char;
        }
        return randomChars[(index + Math.floor(now / 70)) % randomChars.length];
      })
      .join("");

    if (progress < 1) {
      const frameId = window.requestAnimationFrame(tick);
      resultRevealFrameIds.push(frameId);
      return;
    }

    element.textContent = finalText;
    element.classList.add("result-reveal-text-visible");
  };

  const frameId = window.requestAnimationFrame(tick);
  resultRevealFrameIds.push(frameId);
}

function animateMeterRow(row, duration = 1200) {
  const numberElement = row.querySelector("[data-result-number]");
  const fillElement = row.querySelector(".meter-fill");
  const targetValue = Number(row.dataset.meterTarget ?? "0");
  const targetWidth = Number(row.dataset.meterWidth ?? "0");
  const startTime = performance.now();

  const tick = (now) => {
    if (state.screen !== "result") {
      return;
    }

    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const nextValue = Math.round(targetValue * eased);
    const nextWidth = targetWidth * eased;

    if (numberElement) {
      numberElement.textContent = formatPopulation(nextValue);
    }

    if (fillElement) {
      fillElement.style.width = `${nextWidth}%`;
    }

    if (progress < 1) {
      const frameId = window.requestAnimationFrame(tick);
      resultRevealFrameIds.push(frameId);
      return;
    }

    if (numberElement) {
      numberElement.textContent = formatPopulation(targetValue);
    }

    if (fillElement) {
      fillElement.style.width = `${targetWidth}%`;
    }
  };

  const frameId = window.requestAnimationFrame(tick);
  resultRevealFrameIds.push(frameId);
}

function renderEnding() {
  document.body.classList.add("dark-phase");
  const normalizedScores = normalizeScores(state.scores);
  const endingType = getSilentEndingType(state.silentHelpCount, state.hiddenFindCount);
  const endingContent = getEndingContent(endingType);
  const initialLines = endingContent.initial ?? [];

  app.innerHTML = `
    <div class="question-scene-background" aria-hidden="true">
      <div class="question-scene-background-media">
        ${renderMediaVisual("endingBackground")}
      </div>
    </div>
    <section class="panel panel-wide fade-in">
      <div class="screen-layout screen-layout-reversed">
        <div class="content-pane">
          <div class="ending-card">
            <p class="eyebrow">${t("endingEyebrow")}</p>
            <h2 class="ending-title">${t("endingTitle")}</h2>
            <div class="ending-figure">
              ${initialLines
                .map((line) =>
                  line === "__beat__"
                    ? '<div class="ending-beat" aria-hidden="true"></div>'
                    : `<p class="ending-copy">${line}</p>`,
                )
                .join("")}
            </div>
            <div class="button-row">
              <button class="primary-button" id="see-person">${endingContent.button}</button>
            </div>
          </div>
        </div>
        <div class="media-stage image-only">
          ${renderMediaVisual("endingSilhouette")}
        </div>
      </div>
    </section>
  `;

  document.getElementById("see-person").addEventListener("click", () => {
    playSelectSound();
    renderEndingReveal(endingContent.reveal, normalizedScores);
  });
}

function renderThirdChoice() {
  document.body.classList.remove("dark-phase");
  const submissions = loadThirdChoiceSubmissions();
  const latest = submissions.at(-1);
  const latestQuestion = latest?.question ?? latest?.option1 ?? "";
  const latestPerspective = latest?.perspective ?? latest?.option2 ?? "";

  app.innerHTML = `
    <div class="question-scene-background question-scene-background-clear" aria-hidden="true">
      <div class="question-scene-background-media">
        ${renderMediaVisual("thirdChoiceBackground")}
      </div>
    </div>
    <section class="panel panel-wide panel-ending-gateway panel-third-choice-gateway fade-in">
      <div class="ending-gateway-shell ending-gateway-shell-revealed third-choice-shell">
        <div class="ending-gateway-overlay third-choice-overlay">
          <div class="ending-gateway-card ending-gateway-card-visible third-choice-card">
            <div class="ending-gateway-copy-block third-choice-copy-block">
              <p class="ending-copy ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceIntro1")}</p>
              <div class="ending-reveal-beat" aria-hidden="true"></div>
              <p class="ending-copy ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceIntro2")}</p>
              <p class="ending-copy ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceIntro3")}</p>
              <div class="ending-reveal-beat" aria-hidden="true"></div>
              <p class="ending-copy ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceIntro4")}</p>
              <p class="ending-copy ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceIntro5")}</p>
              <div class="ending-reveal-beat ending-reveal-beat-large" aria-hidden="true"></div>
              <p class="ending-copy third-choice-prompt ending-reveal-hidden" data-third-choice-line>${t("thirdChoicePrompt")}</p>
              <p class="ending-copy third-choice-question ending-reveal-hidden" data-third-choice-line>${t("thirdChoiceQuestion")}</p>
            </div>
            <div class="third-choice-form ending-reveal-hidden" id="third-choice-form">
              <label class="third-choice-field">
                <span class="third-choice-label">${t("thirdChoiceField1")}</span>
                <textarea id="third-choice-question" class="third-choice-input" rows="3" placeholder="${t("thirdChoicePlaceholder1")}">${escapeHtml(latestQuestion)}</textarea>
              </label>
              <label class="third-choice-field">
                <span class="third-choice-label">${t("thirdChoiceField2")}</span>
                <textarea id="third-choice-perspective" class="third-choice-input" rows="4" placeholder="${t("thirdChoicePlaceholder2")}">${escapeHtml(latestPerspective)}</textarea>
              </label>
            </div>
            <div class="third-choice-actions ending-reveal-hidden" id="third-choice-actions">
              <button class="primary-button" id="third-choice-save">${t("thirdChoiceSave")}</button>
              <button class="secondary-button" id="third-choice-wit">${t("thirdChoiceWit")}</button>
            </div>
            <p class="third-choice-status ending-reveal-hidden" id="third-choice-status">${latest ? t("thirdChoiceLoaded") : ""}</p>
            <div class="third-choice-saved third-choice-saved-hidden" id="third-choice-saved">
              <p class="third-choice-saved-line">${t("thirdChoiceSaved1")}</p>
              <p class="third-choice-saved-line">${t("thirdChoiceSaved2")}</p>
              <p class="third-choice-saved-line">${t("thirdChoiceSaved3")}</p>
              <div class="third-choice-saved-actions">
                <button class="secondary-button" id="third-choice-gallery">${t("thirdChoiceGalleryButton")}</button>
                <button class="primary-button" id="third-choice-wit-after-save">${t("thirdChoiceWit")}</button>
              </div>
            </div>
            <div class="ending-secondary-nav ending-reveal-hidden" id="third-choice-secondary-nav">
              <button class="ending-secondary-link" id="third-choice-restart">${t("endingRestart")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const questionInput = document.getElementById("third-choice-question");
  const perspectiveInput = document.getElementById("third-choice-perspective");
  const form = document.getElementById("third-choice-form");
  const actions = document.getElementById("third-choice-actions");
  const status = document.getElementById("third-choice-status");
  const savedBlock = document.getElementById("third-choice-saved");

  const showSavedState = () => {
    form?.setAttribute("hidden", "");
    actions?.setAttribute("hidden", "");
    status?.setAttribute("hidden", "");
    savedBlock?.classList.remove("third-choice-saved-hidden");
    savedBlock?.classList.add("third-choice-saved-visible");
  };

  const showFormState = () => {
    form?.removeAttribute("hidden");
    actions?.removeAttribute("hidden");
    status?.removeAttribute("hidden");
    savedBlock?.classList.remove("third-choice-saved-visible");
    savedBlock?.classList.add("third-choice-saved-hidden");
  };

  document.getElementById("third-choice-save").addEventListener("click", () => {
    playSelectSound();
    const submission = {
      question: questionInput.value.trim(),
      perspective: perspectiveInput.value.trim(),
      option1: questionInput.value.trim(),
      option2: perspectiveInput.value.trim(),
      savedAt: new Date().toISOString(),
    };
    persistThirdChoiceSubmission(submission);
    status.textContent = currentLanguage === "en" ? "Saved this idea in this browser." : "このブラウザに発想を記録しました。";
    showSavedState();
  });

  document.getElementById("third-choice-wit").addEventListener("click", () => {
    playSelectSound();
    window.open(WIT_COLLECTIVE_URL, "_blank", "noopener,noreferrer");
  });

  document.getElementById("third-choice-gallery").addEventListener("click", () => {
    playSelectSound();
    state.screen = "thirdChoiceGallery";
    render();
  });

  document.getElementById("third-choice-wit-after-save").addEventListener("click", () => {
    playSelectSound();
    window.open(WIT_COLLECTIVE_URL, "_blank", "noopener,noreferrer");
  });

  document.getElementById("third-choice-restart").addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("title");
  });
  runThirdChoiceRevealAnimation();
}

function renderThirdChoiceGallery() {
  document.body.classList.remove("dark-phase");
  const submissions = loadThirdChoiceSubmissions().slice().reverse();

  app.innerHTML = `
    <div class="question-scene-background question-scene-background-clear" aria-hidden="true">
      <div class="question-scene-background-media">
        ${renderMediaVisual("thirdChoiceBackground")}
      </div>
    </div>
    <section class="panel panel-wide panel-ending-gateway panel-third-choice-gateway fade-in">
      <div class="ending-gateway-shell ending-gateway-shell-revealed third-choice-shell">
        <div class="ending-gateway-overlay third-choice-overlay">
          <div class="ending-gateway-card ending-gateway-card-visible third-choice-card third-choice-gallery-card">
            <div class="ending-gateway-copy-block third-choice-copy-block">
              <p class="ending-copy third-choice-prompt">${t("thirdChoiceGalleryTitle")}</p>
              <p class="ending-copy third-choice-gallery-copy">${t("thirdChoiceGalleryCopy")}</p>
            </div>
            <div class="third-choice-gallery-list">
              ${
                submissions.length
                  ? submissions
                      .map(
                        (submission) => `
                          <article class="third-choice-gallery-item">
                            <p class="third-choice-gallery-question">${escapeHtml(submission.question ?? submission.option1 ?? "")}</p>
                            ${
                              (submission.perspective ?? submission.option2 ?? "").trim()
                                ? `<p class="third-choice-gallery-perspective">${escapeHtml(submission.perspective ?? submission.option2 ?? "")}</p>`
                                : ""
                            }
                          </article>
                        `,
                      )
                      .join("")
                  : `
                    <div class="third-choice-gallery-empty">
                      <p class="third-choice-gallery-question">${t("thirdChoiceGalleryEmpty1")}</p>
                      <p class="third-choice-gallery-perspective">${t("thirdChoiceGalleryEmpty2")}</p>
                    </div>
                  `
              }
            </div>
            <div class="third-choice-saved-actions">
              <button class="secondary-button" id="third-choice-gallery-back">${t("thirdChoiceGalleryBack")}</button>
              <button class="primary-button" id="third-choice-gallery-wit">${t("thirdChoiceWit")}</button>
            </div>
            <div class="ending-secondary-nav ending-reveal-visible">
              <button class="ending-secondary-link" id="third-choice-gallery-restart">${t("endingRestart")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  document.getElementById("third-choice-gallery-back").addEventListener("click", () => {
    playSelectSound();
    state.screen = "thirdChoice";
    render();
  });

  document.getElementById("third-choice-gallery-wit").addEventListener("click", () => {
    playSelectSound();
    window.open(WIT_COLLECTIVE_URL, "_blank", "noopener,noreferrer");
  });

  document.getElementById("third-choice-gallery-restart").addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("title");
  });
}

function renderEndingReveal(lines, normalizedScores, route = "primary") {
  const actionDestinations =
    route === "soft"
      ? {
          connect: {
            label: t("endingSoftConnect"),
            copy: t("endingSoftConnectCopy"),
            links: [
              {
                label: "activo",
                description: currentLanguage === "en" ? "Find volunteer opportunities and events in Japan." : "国内のボランティア募集やイベントを探せます。",
                url: "https://activo.jp/",
              },
              {
                label: currentLanguage === "en" ? "Volunteer Platform" : "ボランティアプラットフォーム",
                description: currentLanguage === "en" ? "An entry point for disaster support and community participation." : "災害支援や地域参加の入口として使えます。",
                url: "https://b.volunteer-platform.org/",
              },
            ],
          },
          rest: {
            label: t("endingSoftRest"),
            copy: t("endingSoftRestCopy"),
            links: [
              {
                label: "gooddo",
                description: currentLanguage === "en" ? "Start with small everyday participation, even with a click." : "クリックなど、日常の小さな参加から始められます。",
                url: "https://www.dff.jp/",
              },
              {
                label: currentLanguage === "en" ? "Pirika" : "ピリカ",
                description: currentLanguage === "en" ? "Keep nearby environmental actions going at a manageable pace." : "身近な環境行動を、無理のない範囲で続けられます。",
                url: "https://pirika.org/",
              },
            ],
          },
          small: {
            label: t("endingSoftSmall"),
            copy: t("endingSoftSmallCopy"),
            links: [
              {
                label: "gooddo",
                description: currentLanguage === "en" ? "Small actions you can start right away." : "すぐに始められる小さなアクションがあります。",
                url: "https://www.dff.jp/",
              },
              {
                label: currentLanguage === "en" ? "Pirika" : "ピリカ",
                description: currentLanguage === "en" ? "Turn everyday actions into something visible and cumulative." : "日常の行動を、目に見える形で積み重ねられます。",
                url: "https://pirika.org/",
              },
            ],
          },
        }
      : {
          participate: {
            label: t("endingParticipate"),
            copy: t("endingDetailParticipate"),
            links: [
              {
                label: "activo",
                description: currentLanguage === "en" ? "Browse volunteer opportunities and places to participate." : "国内のボランティア募集や参加先を探せます。",
                url: "https://activo.jp/",
              },
              {
                label: currentLanguage === "en" ? "Volunteer Platform" : "ボランティアプラットフォーム",
                description: currentLanguage === "en" ? "Find opportunities for disaster support and community action." : "災害支援や地域活動の参加先があります。",
                url: "https://b.volunteer-platform.org/",
              },
            ],
          },
          donate: {
            label: t("endingDonate"),
            copy: t("endingDetailDonate"),
            links: [
              {
                label: currentLanguage === "en" ? "Yahoo! Donation" : "Yahoo!ネット募金",
                description: currentLanguage === "en" ? "Choose a destination and move straight into donating." : "支援先を選んで、そのまま寄付へ進めます。",
                url: "https://donation.yahoo.co.jp/",
              },
              {
                label: currentLanguage === "en" ? "UNICEF Japan" : "日本ユニセフ協会",
                description: currentLanguage === "en" ? "Information on child support and emergency fundraising." : "子ども支援や緊急募金の情報があります。",
                url: "https://www.unicef.or.jp/",
              },
            ],
          },
          daily: {
            label: t("endingDaily"),
            copy: t("endingDetailDaily"),
            links: [
              {
                label: "gooddo",
                description: currentLanguage === "en" ? "Start with small everyday participation, even with a click." : "クリックなど、日常の小さな参加から始められます。",
                url: "https://www.dff.jp/",
              },
              {
                label: currentLanguage === "en" ? "Pirika" : "ピリカ",
                description: currentLanguage === "en" ? "Turn nearby actions into something you can keep doing." : "身近な行動を、継続できる形に変えられます。",
                url: "https://pirika.org/",
              },
            ],
          },
        };
  const actionOptions = Object.entries(actionDestinations).map(([id, entry]) => ({
    id,
    label: entry.label,
    copy: entry.copy,
  }));
  const transitionLine = route === "soft" ? t("endingSoftTransition") : t("endingTransition");

  app.innerHTML = `
    <div class="question-scene-background" aria-hidden="true">
      <div class="question-scene-background-media">
        ${renderMediaVisual("endingRevealBackground")}
      </div>
    </div>
    <section class="panel panel-wide panel-ending-gateway fade-in">
      <div class="ending-gateway-shell ${route === "primary" ? "ending-gateway-shell-pristine" : "ending-gateway-shell-revealed"}" id="ending-gateway-shell">
        <div class="media-stage image-only ending-gateway-media ${route === "primary" ? "ending-gateway-media-pristine" : "ending-gateway-media-revealed"}" id="ending-gateway-media">
          ${renderMediaVisual("endingReveal")}
          <button class="ending-secret-trigger" id="ending-secret-trigger" aria-label="hidden ending hotspot"></button>
        </div>
        <div class="ending-gateway-overlay">
          <div class="ending-gateway-card ending-gateway-card-hidden" id="ending-gateway-card">
            <div class="ending-gateway-copy-block">
              ${lines
                .map((line) =>
                  line === "__beat__"
                    ? '<div class="ending-reveal-line ending-reveal-hidden ending-reveal-beat" aria-hidden="true"></div>'
                    : line === "__beat_large__"
                      ? '<div class="ending-reveal-line ending-reveal-hidden ending-reveal-beat ending-reveal-beat-large" aria-hidden="true"></div>'
                      : `<p class="ending-copy ending-reveal-line ending-reveal-hidden">${line}</p>`,
                )
                .join("")}
            </div>
            <p class="ending-transition-line ending-reveal-hidden" id="ending-transition-line">${transitionLine}</p>
            <div class="ending-action-stack" id="ending-action-stack">
              ${actionOptions
                .map(
                  (option, index) => `
                    <button
                      class="ending-action-button ending-reveal-hidden"
                      data-ending-action="${option.id}"
                      data-ending-action-index="${index}"
                    >
                      ${option.label}
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="ending-action-detail" id="ending-action-detail" aria-live="polite"></div>
            <div class="ending-secondary-nav ending-reveal-hidden" id="ending-secondary-nav">
              <button class="ending-secondary-link" id="restart-button">${t("endingRestart")}</button>
            </div>
            <button class="ending-retry-link ending-reveal-hidden" id="ending-retry-link">
              <span class="ending-retry-link-main">${t("endingRetry")}</span>
              <span class="ending-retry-link-note">${t("endingRetryNote")}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;

  if (route !== "soft") {
    document.getElementById("ending-secret-trigger").addEventListener("click", () => {
      renderEndingReveal(lines, normalizedScores, "soft");
    });
  }

  const detail = document.getElementById("ending-action-detail");
  const actionButtons = app.querySelectorAll("[data-ending-action]");
  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      playSelectSound();
      actionButtons.forEach((item) => item.classList.remove("ending-action-button-active"));
      button.classList.add("ending-action-button-active");
      const destination = actionDestinations[button.dataset.endingAction];
      detail.innerHTML = `
        <div class="ending-action-detail-block">
          <p class="ending-action-detail-copy">${destination.copy}</p>
          <div class="ending-link-list">
            ${destination.links
              .map(
                (link) => `
                  <a class="ending-link-card" href="${link.url}" target="_blank" rel="noreferrer noopener">
                    <span class="ending-link-label">${link.label}</span>
                    <span class="ending-link-copy">${link.description}</span>
                  </a>
                `,
              )
              .join("")}
          </div>
        </div>
      `;
      detail.classList.add("ending-action-detail-visible");
    });
  });

  document.getElementById("restart-button").addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("title");
  });
  document.getElementById("ending-retry-link")?.addEventListener("click", () => {
    playSelectSound();
    restartSelectedGame("opening");
  });

  runEndingGatewayReveal(route);
}

function revealEndingGatewaySequence() {
  clearEndingRevealAnimations();

  const card = document.getElementById("ending-gateway-card");
  const lines = Array.from(document.querySelectorAll(".ending-reveal-line"));
  const transitionLine = document.getElementById("ending-transition-line");
  const actionButtons = Array.from(document.querySelectorAll("[data-ending-action]"));
  const secondaryNav = document.getElementById("ending-secondary-nav");
  const retryLink = document.getElementById("ending-retry-link");
  const shell = document.getElementById("ending-gateway-shell");
  const media = document.getElementById("ending-gateway-media");

  shell?.classList.remove("ending-gateway-shell-pristine");
  shell?.classList.add("ending-gateway-shell-revealed");
  media?.classList.remove("ending-gateway-media-pristine");
  media?.classList.add("ending-gateway-media-revealed");

  queueEndingReveal(() => {
    card?.classList.remove("ending-gateway-card-hidden");
    card?.classList.add("ending-gateway-card-visible");
  }, 240);

  lines.forEach((line, index) => {
    queueEndingReveal(() => {
      line.classList.remove("ending-reveal-hidden");
      line.classList.add("ending-reveal-visible");
    }, 1600 + index * 450);
  });

  queueEndingReveal(() => {
    transitionLine?.classList.remove("ending-reveal-hidden");
    transitionLine?.classList.add("ending-reveal-visible");
  }, 1600 + lines.length * 450 + 220);

  actionButtons.forEach((button, index) => {
    queueEndingReveal(() => {
      button.classList.remove("ending-reveal-hidden");
      button.classList.add("ending-reveal-visible");
    }, 1600 + lines.length * 450 + 700 + index * 220);
  });

  queueEndingReveal(() => {
    secondaryNav?.classList.remove("ending-reveal-hidden");
    secondaryNav?.classList.add("ending-reveal-visible");
  }, 1600 + lines.length * 450 + 700 + actionButtons.length * 220 + 260);

  queueEndingReveal(() => {
    retryLink?.classList.remove("ending-reveal-hidden");
    retryLink?.classList.add("ending-reveal-visible");
  }, 1600 + lines.length * 450 + 700 + actionButtons.length * 220 + 880);
}

function runEndingGatewayReveal(route) {
  if (route !== "primary") {
    revealEndingGatewaySequence();
    return;
  }

  clearEndingRevealAnimations();

  const video = document.querySelector(".ending-gateway-media .media-video");

  if (!video) {
    revealEndingGatewaySequence();
    return;
  }

  let revealed = false;

  const triggerReveal = () => {
    if (revealed || state.screen !== "ending") {
      return;
    }
    revealed = true;
    try {
      if (video.duration && Number.isFinite(video.duration)) {
        video.currentTime = Math.max(0, video.duration - 0.04);
      }
      video.pause();
    } catch (_error) {
      // noop
    }
    revealEndingGatewaySequence();
  };

  video.addEventListener("ended", triggerReveal, { once: true });

  const fallbackDelay = Number.isFinite(video.duration) && video.duration > 0 ? Math.round(video.duration * 1000) + 120 : 7000;
  queueEndingReveal(triggerReveal, fallbackDelay);
}

function playSelectSound() {
  if (!introMusicUnlocked && audioEnabled) {
    unlockIntroMusic();
  }
  selectSound.currentTime = 0;
  const playPromise = selectSound.play();
  if (playPromise?.catch) {
    playPromise.catch(() => {});
  }
}

function clearQuestionCountdownAnimation() {
  if (questionCountdownFrameId !== null) {
    window.cancelAnimationFrame(questionCountdownFrameId);
    questionCountdownFrameId = null;
  }
}

function startQuestionCountdown(questionId) {
  clearQuestionCountdownAnimation();
  const timerElement = document.querySelector("[data-decision-timer]");
  const ring = timerElement?.querySelector(".decision-timer-ring");

  if (!timerElement || !ring || state.questionStartId !== questionId || !state.questionStartedAt) {
    return;
  }

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  ring.style.strokeDasharray = `${circumference}`;

  const tick = () => {
    if (state.screen !== "question" || state.questionStartId !== questionId) {
      return;
    }

    const elapsed = Math.max(0, performance.now() - state.questionStartedAt);
    const progress = Math.min(1, elapsed / QUESTION_COUNTDOWN_MS);
    const dashOffset = circumference * progress;

    ring.style.strokeDashoffset = `${dashOffset}`;
    timerElement.classList.toggle("decision-timer-warning", progress >= 0.7);
    timerElement.classList.toggle("decision-timer-ended", progress >= 1);

    questionCountdownFrameId = window.requestAnimationFrame(tick);
  };

  questionCountdownFrameId = window.requestAnimationFrame(tick);
}

function normalizeScores(scores) {
  return {
    A: clampScore(scores.A),
    B: clampScore(scores.B),
    C: clampScore(scores.C),
    D: clampScore(scores.D),
  };
}

function clampScore(score) {
  return Math.max(0, Math.min(10, score));
}

function summarizeDecisionTiming(responseTimes) {
  if (!responseTimes.length) {
    return {
      averageMs: 0,
      quickCount: 0,
      slowCount: 0,
      hesitationLoad: 0,
    };
  }

  const totalMs = responseTimes.reduce((sum, value) => sum + value, 0);
  const quickCount = responseTimes.filter((value) => value <= 4_500).length;
  const slowCount = responseTimes.filter((value) => value >= 10_000).length;
  const hesitationLoad = responseTimes.reduce((sum, value) => sum + Math.max(0, value - 6_000), 0);

  return {
    averageMs: totalMs / responseTimes.length,
    quickCount,
    slowCount,
    hesitationLoad,
  };
}

function calculatePopulationResult(scores, timingSummary = summarizeDecisionTiming([]), silentHelpCount = 0) {
  const { A, B, C, D } = scores;
  const { averageMs, quickCount, slowCount, hesitationLoad } = timingSummary;

  let priority_saved = 4_700_000_000;
  let delayed_found = 2_000_000_000;
  let unrecognized = 1_300_000_000;

  priority_saved += B * 210_000_000;
  priority_saved += A * 90_000_000;
  priority_saved -= C * 75_000_000;
  priority_saved -= D * 65_000_000;

  delayed_found -= A * 100_000_000;
  delayed_found += C * 95_000_000;
  delayed_found += D * 85_000_000;
  delayed_found -= B * 45_000_000;

  unrecognized += D * 250_000_000;
  unrecognized += C * 85_000_000;
  unrecognized -= A * 35_000_000;
  unrecognized -= B * 25_000_000;

  priority_saved += quickCount * 55_000_000;
  priority_saved -= slowCount * 50_000_000;

  delayed_found += slowCount * 130_000_000;
  delayed_found += Math.round(hesitationLoad / 1_000) * 4_500_000;

  unrecognized += Math.max(0, Math.round((averageMs - 7_500) / 1_000)) * 35_000_000;
  unrecognized -= silentHelpCount * 160_000_000;

  priority_saved = Math.max(priority_saved, 2_500_000_000);
  delayed_found = Math.max(delayed_found, 500_000_000);
  unrecognized = Math.max(unrecognized, 300_000_000);

  const total = priority_saved + delayed_found + unrecognized;
  priority_saved += 8_000_000_000 - total;

  return {
    priority_saved,
    delayed_found,
    unrecognized,
  };
}

function getResultBranch(scores, silentHelpCount) {
  const { A, B, C, D } = scores;

  if (D >= 7) {
    return { key: "missed-silent", label: "静かな危機を見落とす救世主" };
  }
  if (B >= 7 && D >= 5) {
    return { key: "greater-good", label: "大義のために個を切れる救世主" };
  }
  if (C >= 6) {
    return { key: "bias", label: "感情と好悪で揺れる救世主" };
  }
  if (A >= 7 && D <= 4) {
    return { key: "responds-to-cries", label: "悲鳴には強いが、沈黙には遅れる救世主" };
  }
  if (silentHelpCount >= 3) {
    return { key: "sees-silence", label: "見えない危機に手を伸ばす救世主" };
  }
  return { key: "hesitant", label: "迷い続ける救世主" };
}

function getBranchNotes(branch, scores) {
  const base = [];

  if (scores.D >= 7) {
    base.push("あなたの視界に入りやすいのは、苦しみを外に出せる人間です。");
    base.push("声を持たない苦しみは、記録上『救助不要』として処理されやすくなります。");
  } else if (scores.B >= 7) {
    base.push("あなたは多くを救えます。だからこそ、あなたが切るひとりは世界の誤差として処理されます。");
  } else if (scores.C >= 6) {
    base.push("あなたの救済は、命の重さだけでは決まりません。");
    base.push("好意、敵意、感謝、親しさが、優先順位に静かに混ざります。");
  } else if (scores.A >= 7 && scores.D <= 4) {
    base.push("あなたは悲鳴にすばやく反応できます。");
    base.push("ただ、沈黙はいつも少し遅れて届きます。");
  } else if (branch.key === "sees-silence") {
    base.push("あなたは、助けを求めるのが下手な人間を完全には見失いません。");
    base.push("ただ、なぜその危機だけが見えたのかは、まだ判定できていません。");
  } else {
    base.push("あなたの判断には極端な偏りがありません。");
    base.push("だからこそ、迷いが遅さに変わる瞬間が残ります。");
  }

  base.push("ここに、あなたの判断がもっとも強く現れたひとつの命があります。");
  return base;
}

function getSilentEndingType(silentHelpCount, hiddenFindCount = 0) {
  if (hiddenFindCount >= TOTAL_HIDDEN_HOTSPOTS) return "all-found";
  if (silentHelpCount === 0) return "missed";
  if (silentHelpCount <= 2) return "mixed";
  return "attached";
}

function getEndingContent(type) {
  const isEnglish = currentLanguage === "en";
  if (type === "all-found") {
    return {
      button: t("seePerson"),
      initial: isEnglish
        ? [
            "You saved many lives.",
            "But not all of them.",
            "__beat__",
            "This person was there, again and again.",
            "Quiet, easy to overlook,",
            "not skilled at asking for help.",
            "__beat__",
            "And still,",
            "you kept finding this person.",
          ]
        : [
            "あなたは、多くの命を救った。",
            "でも、すべてではない。",
            "__beat__",
            "この人は、何度もそこにいた。",
            "静かで、目立たなくて、",
            "助けを求めることも、上手くない。",
            "__beat__",
            "それでもあなたは、",
            "何度もこの人を見つけていた。",
          ],
      reveal: isEnglish
        ? [
            "You know this person.",
            "You did not let them end unseen.",
            "__beat__",
            "Some lives were saved.",
            "Some passed by unseen.",
            "__beat__",
            "Even so, you kept returning.",
            "That choice was not an accident.",
            "__beat_large__",
          ]
        : [
            "あなたは、この人を知っている。",
            "見えにくいままで終わらせなかった。",
            "__beat__",
            "救えたものもある。",
            "見えないまま過ぎていったものもある。",
            "__beat__",
            "それでも、何度もそこへ戻った。",
            "その選択は、偶然じゃない。",
            "__beat_large__",
          ],
    };
  }

  if (type === "missed") {
    return {
      button: t("seePerson"),
      initial: isEnglish
        ? [
            "You saved many lives.",
            "But not all of them.",
            "__beat__",
            "This person was there, again and again.",
            "Quiet, easy to overlook,",
            "not skilled at asking for help.",
            "__beat__",
            "There were times you could have saved them,",
            "and times they passed by unseen.",
            "That, too, was part of your choice.",
          ]
        : [
            "あなたは、多くの命を救った。",
            "でも、すべてではない。",
            "__beat__",
            "この人は、何度もそこにいた。",
            "静かで、目立たなくて、",
            "助けを求めることも、上手くない。",
            "__beat__",
            "救えたことも、",
            "見えないまま過ぎていったものも。",
            "それも、あなたの選択だった。",
          ],
      reveal: isEnglish
        ? [
            "You know this person.",
            "But knowing someone",
            "is not the same as choosing them again and again.",
            "__beat__",
            "Some things were saved.",
            "Some passed by unseen.",
            "__beat__",
            "What decided the difference?",
            "__beat_large__",
          ]
        : [
            "あなたは、この人を知っている。",
            "でも、知っていることと、",
            "選び続けることは同じじゃない。",
            "__beat__",
            "救えたものもある。",
            "見えないまま過ぎていったものもある。",
            "__beat__",
            "その違いは、何だったのか。",
            "__beat_large__",
          ],
    };
  }

  if (type === "mixed") {
    return {
      button: t("seePerson"),
      initial: isEnglish
        ? [
            "You saved many lives.",
            "But not all of them.",
            "__beat__",
            "This person was there, again and again.",
            "Quiet, easy to overlook,",
            "not skilled at asking for help.",
            "__beat__",
            "There were times you could have saved them,",
            "and times they passed by unseen.",
            "That, too, was part of your choice.",
          ]
        : [
            "あなたは、多くの命を救った。",
            "でも、すべてではない。",
            "__beat__",
            "この人は、何度もそこにいた。",
            "静かで、目立たなくて、",
            "助けを求めることも、上手くない。",
            "__beat__",
            "救えたことも、",
            "見えないまま過ぎていったものも。",
            "それも、あなたの選択だった。",
          ],
      reveal: isEnglish
        ? [
            "You know this person.",
            "But knowing someone",
            "is not the same as choosing them again and again.",
            "__beat__",
            "Some things were saved.",
            "Some passed by unseen.",
            "__beat__",
            "What decided the difference?",
            "__beat_large__",
          ]
        : [
            "あなたは、この人を知っている。",
            "でも、知っていることと、",
            "選び続けることは同じじゃない。",
            "__beat__",
            "救えたものもある。",
            "見えないまま過ぎていったものもある。",
            "__beat__",
            "その違いは、何だったのか。",
            "__beat_large__",
          ],
    };
  }

  return {
    button: t("seePerson"),
    initial: isEnglish
      ? [
          "You saved many lives.",
          "But not all of them.",
          "__beat__",
          "This person was there, again and again.",
          "Quiet, easy to overlook,",
          "not skilled at asking for help.",
          "__beat__",
          "There were times you could have saved them,",
          "and times they passed by unseen.",
          "That, too, was part of your choice.",
        ]
      : [
          "あなたは、多くの命を救った。",
          "でも、すべてではない。",
          "__beat__",
          "この人は、何度もそこにいた。",
          "静かで、目立たなくて、",
          "助けを求めることも、上手くない。",
          "__beat__",
          "救えたことも、",
          "見えないまま過ぎていったものも。",
          "それも、あなたの選択だった。",
        ],
    reveal: isEnglish
      ? [
          "You know this person.",
          "But knowing someone",
          "is not the same as choosing them again and again.",
          "__beat__",
          "Some things were saved.",
          "Some passed by unseen.",
          "__beat__",
          "What decided the difference?",
          "__beat_large__",
        ]
      : [
          "あなたは、この人を知っている。",
          "でも、知っていることと、",
          "選び続けることは同じじゃない。",
          "__beat__",
          "救えたものもある。",
          "見えないまま過ぎていったものもある。",
          "__beat__",
          "その違いは、何だったのか。",
          "__beat_large__",
        ],
  };
}

function formatPopulation(value) {
  return new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : "ja-JP").format(Math.round(value));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function roundToTenth(value) {
  return Math.round(value * 10) / 10;
}
