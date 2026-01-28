<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>商務英語會話 (Lesson 1-8 完整版)</title>
<script src="https://cdn.tailwindcss.com"></script>
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
<style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');body{font-family:'Noto Sans TC',sans-serif;-webkit-tap-highlight-color:transparent}.font-serif-en{font-family:'Merriweather',serif}@keyframes pulse-red{0%{box-shadow:0 0 0 0 rgba(239,68,68,0.7)}70%{box-shadow:0 0 0 10px rgba(239,68,68,0)}100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}}.animate-pulse-red{animation:pulse-red 1.5s infinite}@keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin-slow 2s linear infinite}.animate-fade-in{animation:fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) forwards}@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.blind-mode-blur{filter:blur(6px);user-select:none;transition:filter 0.3s ease;cursor:help}.blind-mode-blur:hover{filter:blur(0px)}.chunk-separator{color:#cbd5e1;font-weight:300;margin:0 6px;display:inline-block;transform:translateY(-1px)}.word-correct{color:#16a34a;font-weight:bold}.word-missed{color:#dc2626;text-decoration:line-through;opacity:0.6}.playing-card{background-color:#eff6ff;border-color:#3b82f6;transform:scale(1.01);transition:all 0.3s ease;box-shadow:0 4px 6px -1px rgba(59,130,246,0.2)}.wave-bar{width:4px;height:10px;background-color:#fff;border-radius:2px;animation:wave 1s ease-in-out infinite}.wave-bar:nth-child(2){animation-delay:0.1s}.wave-bar:nth-child(3){animation-delay:0.2s}.wave-bar:nth-child(4){animation-delay:0.3s}@keyframes slide-up-bounce{0%{transform:translateY(100%);opacity:0}70%{transform:translateY(-10px);opacity:1}100%{transform:translateY(0);opacity:1}}.animate-slide-up-bounce{animation:slide-up-bounce 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards}#error-display{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:100000;padding:20px;overflow:auto;color:red;font-family:monospace;font-size:16px;white-space:pre-wrap}</style>
</head>
<body class="bg-gray-50 selection:bg-yellow-100 min-h-screen relative">
<div id="error-display"></div>
<script>window.onerror=function(m,s,l,c,e){const d=document.getElementById('error-display');d.style.display='block';d.innerHTML=`<h1>💥 Error</h1><hr/><strong>Msg:</strong> ${m}<br/><strong>Src:</strong> ${s}<br/><strong>Line:</strong> ${l}`;};</script>
<div id="root"></div><div id="feedback-portal-root"></div>

<script>
// --- 1. 單字資料庫 (Vocab) ---
window.vocabData = [
  // --- Unit 1 ---
  {
    title: "Unit 1: 求職面試 (1-12)", unitId: "Unit 1", desc: "基礎單字 Part A", color: "blue", icon: "Briefcase",
    words: [
      { word: "Interview", kk: "[ˈɪntɚˌvju]", mean: "面試", tip: "重音在最前。中間 t 常被吞掉，唸 Inner-view。" },
      { word: "Employer", kk: "[ɪmˈplɔɪɚ]", mean: "雇主", tip: "重音在第二音節 ploy。" },
      { word: "Pleasure", kk: "[ˈplɛʒɚ]", mean: "榮幸", tip: "s 發 [ʒ] (類似「熱」的捲舌音)，勿唸 sure。" },
      { word: "Hire", kk: "[haɪr]", mean: "雇用", tip: "完整發出字尾 r 的捲舌音。" },
      { word: "Role-playing", kk: "[rol ˈpleɪɪŋ]", mean: "角色扮演", tip: "Role 嘴型要圓，唸起來像 Row (划船)。" },
      { word: "Aligned", kk: "[əˈlaɪnd]", mean: "一致/符合", tip: "gn 不發音，只發 line，字尾 d 輕點。" },
      { word: "Progressive", kk: "[prəˈgrɛsɪv]", mean: "連續/累積的", tip: "重音在中間 gre，嘴巴張大。" },
      { word: "Hospitality", kk: "[ˌhɑspɪˈtæləti]", mean: "觀光/好客", tip: "重音在 ta。唸 Hos-pi-TA-li-ty。" },
      { word: "Initial", kk: "[ɪˈnɪʃəl]", mean: "最初的", tip: "ti 發 [ʃ] (許) 的音。" },
      { word: "Associate", kk: "[əˈsoʃɪɪt]", mean: "助理/夥伴", tip: "ci 發 [ʃ] (許)。字尾 ate 唸短音 [ɪt]。" },
      { word: "Concierge", kk: "[ˌkɑnsɪˈɛrʒ]", mean: "禮賓接待員", tip: "法文外來語，重音在後。ge 發 [ʒ]。" },
      { word: "Concise", kk: "[kənˈsaɪs]", mean: "簡潔的", tip: "cise 唸起來像 size，重音在後。" }
    ]
  },
  {
    title: "Unit 1: 求職面試 (13-24)", unitId: "Unit 1", desc: "基礎單字 Part B", color: "green", icon: "Feather",
    words: [
      { word: "Thoroughly", kk: "[ˈθɝroli]", mean: "徹底地", tip: "th 輕咬舌尖吐氣，馬上接 r 捲舌。" },
      { word: "The Lalu", kk: "[ðə ˈlalu]", mean: "涵碧樓", tip: "專有名詞，發音輕鬆清楚即可。" },
      { word: "Demanding", kk: "[dɪˈmændɪŋ]", mean: "要求高的", tip: "重音在 man，發蝴蝶音 [æ]。" },
      { word: "Stressful", kk: "[ˈstrɛsfəl]", mean: "有壓力的", tip: "兩個 s 都要清楚，中間 t 別漏。" },
      { word: "Meditation", kk: "[ˌmɛdəˈteʃən]", mean: "冥想", tip: "重音在 ta。前面是 Medi (麥迪)。" },
      { word: "Specific", kk: "[spɪˈsɪfɪk]", mean: "具體的", tip: "重音在中間 ci。" },
      { word: "Focus", kk: "[ˈfokəs]", mean: "專注", tip: "o 發雙母音 [oʊ]，嘴形要有「歐-烏」的滑動。" },
      { word: "Appeal", kk: "[əˈpil]", mean: "吸引/訴求", tip: "ea 發長音 [i]，尾音 l 舌尖頂上顎。" },
      { word: "Apply", kk: "[əˈplaɪ]", mean: "申請", tip: "重音在後面 ply。" },
      { word: "Mind", kk: "[maɪnd]", mean: "心智/介意", tip: "字尾 nd 的鼻音要發出來。" },
      { word: "Industry", kk: "[ˈɪndəstri]", mean: "產業", tip: "注意！重音在第一音節 In。" },
      { word: "Contraction", kk: "[kənˈtrækʃən]", mean: "縮讀/縮寫", tip: "重音在 trac，發蝴蝶音 [æ]。" }
    ]
  },
  // --- Unit 2 ---
  {
    title: "Unit 2: 商務參展 (1-12)", unitId: "Unit 2", desc: "基礎單字 Part A", color: "amber", icon: "Layout",
    words: [
      { word: "Exhibition", kk: "[ˌɛksəˈbɪʃən]", mean: "展覽", tip: "ex 唸 [ɛks]；h 不發音；重音在 bi。" },
      { word: "Booth", kk: "[buθ]", mean: "展位/攤位", tip: "字尾 th 舌頭伸出輕咬吐氣，別唸成 s。" },
      { word: "Address", kk: "[əˈdrɛs]", mean: "稱呼/演說", tip: "動詞時重音在第二音節 dress。" },
      { word: "Brief", kk: "[brif]", mean: "簡介", tip: "長音 [i]；字尾 f 咬下唇吐氣。" },
      { word: "Linear", kk: "[ˈlɪnɪɚ]", mean: "線型的", tip: "重音在最前 Li；唸 Li-nee-er。" },
      { word: "Corner", kk: "[ˈkɔrnɚ]", mean: "角落/轉角", tip: "or 捲舌音要出來；不要唸 Cona。" },
      { word: "Peninsula", kk: "[pəˈnɪnsələ]", mean: "半島型展位", tip: "重音在 nin。唸 Puh-NIN-suh-la。" },
      { word: "Island", kk: "[ˈaɪlənd]", mean: "中島型展位", tip: "注意 s 不發音！唸 Eye-land。" },
      { word: "Option", kk: "[ˈɑpʃən]", mean: "選項", tip: "Op 發 [ɑ] (張大嘴)；tion 發 [ʃən]。" },
      { word: "Budget", kk: "[ˈbʌdʒɪt]", mean: "預算", tip: "u 發短音 [ʌ]；dg 發 [dʒ]，別唸 Ba-get。" },
      { word: "Terms", kk: "[tɝmz]", mean: "條款/方面", tip: "er 捲舌長一點；字尾 ms 有鼻音震動。" },
      { word: "Dimension", kk: "[dɪˈmɛnʃən]", mean: "尺寸/面積", tip: "重音在 men；sion 發 [ʃən]。" }
    ]
  },
  {
    title: "Unit 2: 商務參展 (13-25)", unitId: "Unit 2", desc: "基礎單字 Part B", color: "purple", icon: "MapPin",
    words: [
      { word: "Package", kk: "[ˈpækɪdʒ]", mean: "套裝方案", tip: "重音 Pac 发 [æ]；age 唸 [ɪdʒ]。" },
      { word: "Comprise", kk: "[kəmˈpraɪz]", mean: "包含", tip: "重音在後 prise；pri 發 [praɪ]。" },
      { word: "Signboard", kk: "[ˈsaɪnˌbɔrd]", mean: "看板", tip: "複合字重音在前。g 不發音。" },
      { word: "Partition", kk: "[pɑrˈtɪʃən]", mean: "隔板", tip: "重音在 ti；par 的 ar 要捲舌。" },
      { word: "Straight", kk: "[stret]", mean: "直的", tip: "gh 不發音。唸起來像 A 的長音。" },
      { word: "Surrounded", kk: "[səˈraʊndɪd]", mean: "被環繞的", tip: "重音在 roun，發 [aʊ] 音。" },
      { word: "Proceed", kk: "[prəˈsid]", mean: "繼續進行", tip: "重音在後 ceed，長音 [i]。" },
      { word: "VAT", kk: "[vi e ti]", mean: "加值稅", tip: "直接唸字母 V-A-T。" },
      { word: "Exhibitor", kk: "[ɪgˈzɪbɪtɚ]", mean: "參展商", tip: "重音轉移到第二音節 zi；h 不發音。" },
      { word: "Application", kk: "[ˌæpləˈkeʃən]", mean: "申請", tip: "重音在 ca；前 app 發蝴蝶音 [æ]。" },
      { word: "Available", kk: "[əˈveləb!]", mean: "可用的", tip: "重音在 vai (欸)；ble 輕唸。" },
      { word: "Offer", kk: "[ˈɔfɚ]", mean: "提供", tip: "開頭 o 發 [ɔ] (嘴呈 O 型)。" },
      { word: "Arrange", kk: "[əˈrendʒ]", mean: "安排", tip: "重音在後 range；字尾 ge 發 [dʒ]。" }
    ]
  },
  // --- Unit 3 ---
  {
    title: "Unit 3: 參展會議 (1-12)", unitId: "Unit 3", desc: "基礎單字 Part A", color: "teal", icon: "MessageCircle",
    words: [
      { word: "Discuss", kk: "[dɪˈskʌs]", mean: "討論", tip: "重音在後 scuss。字尾 ss 的氣音要長一點。" },
      { word: "Suggestion", kk: "[səˈdʒɛstʃən]", mean: "建議", tip: "重音在 ges。ges 發 [dʒɛs] (傑)。" },
      { word: "Peninsula", kk: "[pəˈnɪnsələ]", mean: "半島", tip: "重音在 nin。唸 Puh-NIN-suh-la。" },
      { word: "Keen", kk: "[kin]", mean: "熱衷於", tip: "長音 [i]，嘴角要往兩邊拉開微笑。" },
      { word: "Bulky", kk: "[ˈbʌlkɪ]", mean: "笨重的", tip: "[ʌ] 短音。l 的音要含在喉嚨裡。" },
      { word: "Potential", kk: "[pəˈtɛnʃəl]", mean: "潛在的", tip: "重音在 ten。ti 發 [ʃ] (許) 的音。" },
      { word: "Linger", kk: "[ˈlɪŋgɚ]", mean: "逗留", tip: "ng 發 [ŋg] (嗯-葛)，後面有 g 的聲音。" },
      { word: "Inviting", kk: "[ɪnˈvaɪtɪŋ]", mean: "誘人的", tip: "重音在 vi。注意 v 要咬下唇震動。" },
      { word: "Invaluable", kk: "[ɪnˈvæljʊəb!]", mean: "無價的", tip: "重音在 va。注意 l 接 u 的滑音。" },
      { word: "Sufficient", kk: "[səˈfɪʃənt]", mean: "足夠的", tip: "重音在 fi。ci 發 [ʃ] (許)。" },
      { word: "Cramped", kk: "[kræmpt]", mean: "擁擠的", tip: "蝴蝶音 [æ]。字尾 mp 嘴巴閉緊再吐氣接 t。" },
      { word: "Spacious", kk: "[ˈspeʃəs]", mean: "寬敞的", tip: "ci 發 [ʃ] (許)。唸 Spei-shus。" }
    ]
  },
  {
    title: "Unit 3: 參展會議 (13-25)", unitId: "Unit 3", desc: "基礎單字 Part B", color: "orange", icon: "Lightbulb",
    words: [
      { word: "Comfortable", kk: "[ˈkʌmfɚtəb!]", mean: "舒適的", tip: "重音在第一音節！口語常唸 Comf-ta-ble。" },
      { word: "Launch", kk: "[lɔntʃ]", mean: "發布/推出", tip: "[ɔ] 嘴巴成 O 型。字尾 ch 要短促有力。" },
      { word: "Display", kk: "[dɪˈsple]", mean: "展示", tip: "重音在後 play。" },
      { word: "Feature", kk: "[ˈfitʃɚ]", mean: "特色", tip: "fea 發長音 [i]；ture 發 [tʃɚ] (徹)。" },
      { word: "Station", kk: "[ˈsteʃən]", mean: "安置/駐紮", tip: "tion 發 [ʃən]。" },
      { word: "Occupy", kk: "[ˈɑkjəˌpaɪ]", mean: "佔據", tip: "重音在前 O。cu 發 [kjə]。" },
      { word: "Second", kk: "[ˈsɛkənd]", mean: "附議", tip: "會議用語。重音在 se。" },
      { word: "Winner", kk: "[ˈwɪnɚ]", mean: "贏家/首選", tip: "短音 [ɪ]，嘴形放鬆。" },
      { word: "Input", kk: "[ˈɪnˌpʊt]", mean: "意見/投入", tip: "重音在 In。put 發短音 [ʊ]。" },
      { word: "Decision", kk: "[dɪˈsɪʒən]", mean: "決定", tip: "si 發 [ʒ] (日) 的震動音，非 [ʃ]。" },
      { word: "Catch", kk: "[kætʃ]", mean: "聽清楚", tip: "蝴蝶音 [æ]。字尾 ch 清楚。" },
      { word: "Comfy", kk: "[ˈkʌmfɪ]", mean: "舒適的(口語)", tip: "Comfortable 的簡稱。mf 連唸。" },
      { word: "Trade show", kk: "[tred ʃo]", mean: "貿易展", tip: "tr 要唸得像 ㄔㄨ (chu) 的氣音。" }
    ]
  },
  // --- Unit 4 ---
  {
    title: "Unit 4: 設備檢查 (1-11)", unitId: "Unit 4", desc: "基礎單字 Part A", color: "indigo", icon: "Wifi",
    words: [
      { word: "Held", kk: "[hɛld]", mean: "舉行", tip: "尾音 ld 要輕，舌尖頂住上顎，勿唸 hel-do。" },
      { word: "Ma'am", kk: "[mæm]", mean: "女士", tip: "扁平母音 [æ]。madam 的縮讀。" },
      { word: "Venue", kk: "[ˈvɛnju]", mean: "場地", tip: "字尾 [u] 要噘嘴，發音像 V-N-U。" },
      { word: "U-shaped", kk: "[ˈjuˌʃept]", mean: "馬蹄形的", tip: "尾音 t 要輕促。連字號要連讀。" },
      { word: "Laptop", kk: "[ˈlæpˌtɑp]", mean: "筆電", tip: "中間 p 不用噴氣(閉氣)，直接接 top。" },
      { word: "Access", kk: "[ˈæksɛs]", mean: "存取/連接", tip: "重音在第一音節。兩個 s 都要清晰。" },
      { word: "Wireless", kk: "[ˈwaɪrlɪs]", mean: "無線的", tip: "less 發音短促，不要念成 lace。" },
      { word: "Password", kk: "[ˈpæsˌwɝd]", mean: "密碼", tip: "pass 扁嘴。word 捲舌像 were。" },
      { word: "Built-in", kk: "[ˈbɪltˌɪn]", mean: "內建的", tip: "連讀時聽起來像 bil-tin。" },
      { word: "Scan", kk: "[skæn]", mean: "掃描", tip: "sk 的 k 不送氣，發成類似「ㄍ」。" },
      { word: "Eco-friendly", kk: "[ˌikoˈfrɛndlɪ]", mean: "環保的", tip: "friendly 的 d 不發音，唸 fren-li。" }
    ]
  },
  {
    title: "Unit 4: 設備檢查 (12-21)", unitId: "Unit 4", desc: "基礎單字 Part B", color: "blue", icon: "Settings",
    words: [
      { word: "Wiring", kk: "[ˈwaɪrɪŋ]", mean: "線路", tip: "wire + ing。中間 [r] 要滑順。" },
      { word: "Port", kk: "[pɔrt]", mean: "連接埠", tip: "母音 [ɔ] 嘴巴圓，最後加上捲舌 rt。" },
      { word: "Rehearsed", kk: "[rɪˈhɝst]", mean: "排練", tip: "hear 發 [hɝ] 捲舌。字尾 ed 發 [t]。" },
      { word: "Pinpoint", kk: "[ˈpɪnˌpɔɪnt]", mean: "精確指出", tip: "兩個 p 都要噴氣。oi 滑動明顯。" },
      { word: "Audio", kk: "[ˈɔdɪˌo]", mean: "音訊", tip: "開頭 [ɔ] 圓嘴。結尾 [o] 也要圓嘴。" },
      { word: "Stitch", kk: "[stɪtʃ]", mean: "一針", tip: "[ɪ] 短音。tch 發 [tʃ]。" },
      { word: "Facilities", kk: "[fəˈsɪlətɪz]", mean: "設施", tip: "重音在 ci [sɪ]。" },
      { word: "Laser pointer", kk: "[ˈlezɚ ˌpɔɪntɚ]", mean: "雷射筆", tip: "laser 的 s 發 [z]。er 都要捲舌。" },
      { word: "Flattered", kk: "[ˈflætɚd]", mean: "受寵若驚", tip: "中間 tt 發輕快彈舌音 [d]。" },
      { word: "Superb", kk: "[sʊˈpɝb]", mean: "極好的", tip: "重音在後。su 發 [sʊ] (書)。" }
    ]
  },
  // --- Unit 5 ---
  {
    title: "Unit 5: 差旅核銷 (1-10)", unitId: "Unit 5", desc: "Reimbursement Policy Part A", color: "red", icon: "CreditCard",
    words: [
      { word: "Reimbursement", kk: "[͵riɪmˋbɝsmənt]", mean: "核銷；報帳", tip: "★難字挑戰。重音在 bur。注意 re-im-burse-ment 四個音節清楚。中間的 [m] 和 [b] 嘴巴都要確實閉起來。" },
      { word: "Keynote speaker", kk: "[ˋki͵not ˋspikɚ]", mean: "主講人", tip: "Keynote 的 [o] 是長母音，嘴型要圓且凸。Speaker 的 [sp] 不送氣，聽起來像「ㄅ」。" },
      { word: "Policy", kk: "[ˋpɑləsɪ]", mean: "政策", tip: "注意重音在第一音節。[l] 舌尖要頂住上排牙齒後方。" },
      { word: "Subsistence", kk: "[səbˋsɪstəns]", mean: "生存；生活", tip: "[b] 緊接 [s]，嘴唇閉一下立刻接絲絲聲。唸起來像 sub-sis-tence。" },
      { word: "Expenditure", kk: "[ɪkˋspɛndɪtʃɚ]", mean: "支出；花費", tip: "重音在 pen。[tʃɚ] 嘴巴要嘟起來，發出類似「去ㄦ」的捲舌音。" },
      { word: "Accommodation", kk: "[ə͵kɑməˋdeʃən]", mean: "住宿", tip: "雙母音 [m] 出現兩次，嘴唇要閉緊。重音在 de。" },
      { word: "Allowance", kk: "[əˋlaʊəns]", mean: "津貼；零用錢", tip: "[aʊ] 是大口音（如 ouch），嘴巴要張大再縮圓。" },
      { word: "Receipt", kk: "[rɪˋsit]", mean: "收據", tip: "超級易錯！中間的 p 是不發音的。唸起來像 re-seat。" },
      { word: "Incur", kk: "[ɪnˋkɝ]", mean: "招致；產生(費用)", tip: "[kɝ] 是捲舌長音，像 bird 的音。" },
      { word: "Spouse", kk: "[spaʊs]", mean: "配偶", tip: "[sp] 唸「ㄅ」的音。[aʊ] 嘴巴張大。尾音 [s] 氣音要輕。" }
    ]
  },
  {
    title: "Unit 5: 差旅核銷 (11-20)", unitId: "Unit 5", desc: "Reimbursement Policy Part B", color: "amber", icon: "Briefcase",
    words: [
      { word: "Accompany", kk: "[əˋkʌmpənɪ]", mean: "陪同；伴隨", tip: "重音在 cum。[m] 接 [p] 是標準雙唇音練習，嘴唇閉緊再爆開。" },
      { word: "Itinerary", kk: "[aɪˋtɪnə͵rɛrɪ]", mean: "行程表", tip: "[aɪ] 發音飽滿。注意音節多，慢慢唸 i-tin-e-rar-y。" },
      { word: "Submit", kk: "[səbˋmɪt]", mean: "呈交；提交", tip: "[b] 接 [m]，這是講義重點！嘴唇閉一次即可，不用分開唸 sub-mit，而是順著氣流帶過。" },
      { word: "Regulation", kk: "[͵rɛgjəˋleʃən]", mean: "規定", tip: "[g] 接 [j] 要滑順。重音在 la。" },
      { word: "Sufficient", kk: "[səˋfɪʃənt]", mean: "充足的", tip: "[ʃ] 是噓聲，嘴巴嘟圓。" },
      { word: "Economy class", kk: "[ɪˋkɑnəmɪ klæs]", mean: "經濟艙", tip: "Economy 重音在 co。Class 的 [æ] 是蝴蝶音，嘴巴要向兩側咧開。" },
      { word: "Business class", kk: "[ˋbɪznɪs klæs]", mean: "商務艙", tip: "Business 只有兩個音節 [ˋbɪz-nɪs]，不要唸成 busy-ness。" },
      { word: "Original", kk: "[əˋrɪdʒən!]", mean: "正本的；原始的", tip: "[dʒ] 嘴巴嘟起震動。結尾 [l] 舌尖頂上顎，喉嚨發出模糊音。" },
      { word: "High-speed rail", kk: "[haɪ spid rel]", mean: "高鐵", tip: "Rail 的 [r] 嘴型圓，結尾 [l] 舌尖上頂。" },
      { word: "Invitation", kk: "[͵ɪnvəˋteʃən]", mean: "邀請(函)", tip: "[v] 上排牙齒咬下唇震動。重音在 ta。" }
    ]
  },
  // --- Unit 6 ---
  {
    title: "Unit 6: 緊急變更 (1-10)", unitId: "Unit 6", desc: "Emergency Change Part A", color: "red", icon: "AlertTriangle",
    words: [
      { word: "Urgent", kk: "[ˋɝdʒənt]", mean: "緊急的", tip: "重音在首。Ur- 要捲舌發 [ɝ]，gent 的 [dʒ] 嘴巴要嘟起來震動。" },
      { word: "Terrorist", kk: "[ˋtɛrərɪst]", mean: "恐怖份子", tip: "重音在第一音節。注意中間的 ro 是弱音，rist 結尾的 [st] 輕輕收尾。" },
      { word: "Stockholm", kk: "[ˋstɑk͵hom]", mean: "斯德哥爾摩", tip: "[st] 不送氣重點！唸成 Stock-home。 [l] 幾乎不發音或很輕。" },
      { word: "Hijacked", kk: "[ˋhaɪdʒækt]", mean: "被劫持的", tip: "複合字 High-jacked。注意字尾 [k] 是無聲，所以 -ed 會發成 [t] 的音。" },
      { word: "British", kk: "[ˋbrɪtɪʃ]", mean: "英國的", tip: "[br] 雙唇震動快。結尾 [ʃ] 是「噓」的聲音，嘴巴要圓。" },
      { word: "Belgian", kk: "[ˋbɛldʒən]", mean: "比利時的", tip: "重音在 Bel。注意 [dʒ] 的音，不要唸成 [g]。" },
      { word: "Terrified", kk: "[ˋtɛrə͵faɪd]", mean: "嚇壞了", tip: "第一音節重音。fied 包含雙母音 [aɪ]，嘴巴要張開。" },
      { word: "Traumatic", kk: "[traʊˋmætɪk]", mean: "創傷的", tip: "[aʊ] 是大口音（像 ouch）。重音在 ma，嘴巴向兩側咧開 (蝴蝶音 [æ])。" },
      { word: "Frustration", kk: "[frʌˋstreʃən]", mean: "挫折；沮喪", tip: "[str] 不送氣重點！[t] 轉音似「ㄉ」。唸起來像 frus-dray-shun。" },
      { word: "Struggle", kk: "[ˋstrʌg!]", mean: "掙扎；努力", tip: "[str] 不送氣重點。結尾 [g!] 是喉嚨發出的模糊音，舌尖頂上顎。" }
    ]
  },
  {
    title: "Unit 6: 緊急變更 (11-20)", unitId: "Unit 6", desc: "Emergency Change Part B", color: "orange", icon: "AlertTriangle",
    words: [
      { word: "Student", kk: "[ˋstjudnt]", mean: "學生", tip: "[st] 不送氣重點。不要噴氣，唸起來像「斯丟等」。" },
      { word: "Start", kk: "[stɑrt]", mean: "開始", tip: "[st] 不送氣重點。[ar] 要發飽滿的捲舌長音。" },
      { word: "Stable", kk: "[ˋsteb!]", mean: "穩定的", tip: "[st] 不送氣重點。唸起來像「stay-ball」。" },
      { word: "Replace", kk: "[rɪˋples]", mean: "取代；接替", tip: "Re 輕讀。Place 的 [p] 要送氣（噴氣），尾音 [s] 氣長。" },
      { word: "Notice", kk: "[ˋnotɪs]", mean: "通知；注意", tip: "重音在 No。[o] 嘴型要圓。tice 的 [s] 輕聲。" },
      { word: "Paris", kk: "[ˋpærɪs]", mean: "巴黎", tip: "重音在 Pa。注意 [æ] 是蝴蝶音。字尾 [s] 要發出來（不像法文）。" },
      { word: "Barcelona", kk: "[͵bɑrsəˋlonə]", mean: "巴塞隆納", tip: "音節多，慢慢唸 Bar-ce-lo-na。Lo 是重音，嘴巴要圓。" },
      { word: "Local", kk: "[ˋlok!]", mean: "當地的", tip: "[o] 發音要足。cal 發 [k!]，舌尖頂住上排牙齒後方發聲。" },
      { word: "Owe", kk: "[o]", mean: "虧欠", tip: "只有一個母音 [o]。嘴巴嘟圓，像唸英文字母 O。" },
      { word: "Minute", kk: "[ˋmɪnɪt]", mean: "分鐘", tip: "注意發音是 [ˋmɪnɪt]，不是 my-nute。i 發短母音 [ɪ]。" }
    ]
  },
  // --- Unit 7 Vocab ---
  {
    title: "Unit 7: 特殊需求 (1-23)", unitId: "Unit 7", desc: "Special Requests", color: "teal", icon: "Check",
    words: [
      { word: "Confirm", kk: "[kənˋfɝm]", mean: "確認", tip: "[m] 閉嘴練習。字尾的 irm 要把嘴巴閉緊。" },
      { word: "Arrangement", kk: "[əˋrendʒmənt]", mean: "安排", tip: "重音在 range。ment 的 m 也要確實閉嘴。" },
      { word: "Accommodation", kk: "[ə͵kɑməˋdeʃən]", mean: "住宿", tip: "雙 m 出現！中間的 -mm- 要唸得飽滿。" },
      { word: "Connecting room", kk: "[kəˋnɛktɪŋ rum]", mean: "連通房", tip: "Connecting 重音在 nec。Room 結尾 [m] 閉嘴。" },
      { word: "Request", kk: "[rɪˋkwɛst]", mean: "要求", tip: "[kw] 嘴型像吹氣球一樣圓。結尾 [st] 氣音要輕。" },
      { word: "Chef", kk: "[ʃɛf]", mean: "廚師", tip: "注意 ch 這裡發 [ʃ] (噓聲)，不要唸成 chief。" },
      { word: "Variety", kk: "[vəˋraɪətɪ]", mean: "各式各樣", tip: "重音在 ri。ri [raɪ] 發雙母音。" },
      { word: "Religious", kk: "[rɪˋlɪdʒəs]", mean: "宗教的", tip: "重音在 li。gious 的 [dʒ] 嘴巴嘟起來震動。" },
      { word: "Vegetarian", kk: "[͵vɛdʒəˋtɛrɪən]", mean: "素食者", tip: "字很長，重音在 ta。Ve-ge 唸快一點。" },
      { word: "Strict", kk: "[strɪkt]", mean: "嚴格的", tip: "[str] 不送氣！唸起來像「死追-kt」。" },
      { word: "Buddhist", kk: "[ˋbudɪst]", mean: "佛教徒", tip: "注意 [u] 是長音，嘴巴嘟圓。" },
      { word: "Garlic", kk: "[ˋgɑrlɪk]", mean: "大蒜", tip: "[ar] 嘴巴張大發捲舌音。" },
      { word: "Leeks", kk: "[liks]", mean: "韭菜", tip: "[i] 是長母音，嘴角向兩側咧開微笑。" },
      { word: "Attend to", kk: "[əˋtɛnd tu]", mean: "注意；照料", tip: "前面的 d 可以省略不發，直接唸 atten-to。" },
      { word: "Malay", kk: "[məˋle]", mean: "馬來人", tip: "重音在後 lay。Ma 發輕音 [ə]。" },
      { word: "Islamic", kk: "[ɪsˋlɑmɪk]", mean: "伊斯蘭的", tip: "重音在 la。[m] 閉嘴音出現在中間。" },
      { word: "Pork", kk: "[pɔrk]", mean: "豬肉", tip: "[ɔr] 嘴巴要圓，像唸 O。" },
      { word: "Blood", kk: "[blʌd]", mean: "血", tip: "注意母音是 [ʌ] (短音阿)，唸起來像 blad。" },
      { word: "Wine", kk: "[waɪn]", mean: "酒", tip: "[w] 嘴型圓。結尾 [n] 不要閉嘴。" },
      { word: "Laksa", kk: "[ˋlɑksɑ]", mean: "叻沙", tip: "兩個 a 都是張大口的 [ɑ]。" },
      { word: "Conform", kk: "[kənˋfɔrm]", mean: "符合；一致", tip: "Con-form 嘴型是圓的 O，不同於 Confirm。" },
      { word: "Problem", kk: "[ˋprɑbləm]", mean: "問題", tip: "[m] 閉嘴練習。請務必在結尾閉上嘴巴。" },
      { word: "See to it", kk: "[si tu ɪt]", mean: "確實執行", tip: "三個字連成一氣。it 的 [t] 可以輕輕停頓。" }
    ]
  },
  // --- Unit 8 (New) ---
  {
    title: "Lesson 8: Dress Code (服裝儀容)", unitId: "Lesson 8", desc: "發音與會話特訓", color: "purple", icon: "Settings",
    words: [
      { word: "Reception", kk: "[rɪˋsɛpʃən]", mean: "歡迎會", tip: "[p] 閉唇練習。重音在 sep，唸到 p 時雙唇輕閉再發 shun。" },
      { word: "Cocktail", kk: "[ˋkɑk͵tel]", mean: "雞尾酒", tip: "重音第一音節。tail 是長母音 [e]，嘴角拉開。" },
      { word: "Dress code", kk: "[drɛs kod]", mean: "著裝標準", tip: "Code 母音 [o] 飽滿，結尾 [d] 輕帶過，勿發成 code-uh。" },
      { word: "Formal", kk: "[ˋfɔrməl]", mean: "正式", tip: "[ɔr] 嘴圓捲舌。結尾 [l] 舌尖頂上齒齦。" },
      { word: "Registered", kk: "[ˋrɛdʒɪstɚd]", mean: "報名的", tip: "g 發 [dʒ] 嘟嘴。字尾 [d] 輕聲唸出。" },
      { word: "Potential", kk: "[pəˋtɛnʃəl]", mean: "潛在的", tip: "重音 ten。注意 [t] 送氣與結尾鼻音 [n]。" },
      { word: "Exhibitor", kk: "[ɪgˋzɪbɪtɚ]", mean: "參展商", tip: "重音在 zi。x 發 [gz] 濁音。" },
      { word: "Attire", kk: "[əˋtaɪr]", mean: "服裝", tip: "重音在後。ire 是捲舌雙母音，尾音拉長回捲。" },
      { word: "Engage", kk: "[ɪnˋgedʒ]", mean: "接待/互動", tip: "重音 gage。結尾 [dʒ] 厚實有震動感。" },
      { word: "Professional", kk: "[prəˋfɛʃənəl]", mean: "專業的", tip: "[p] 爆破。重音 fesh。結尾 nal 舌尖頂上。" },
      { word: "Opportunity", kk: "[͵ɑpɚˋtjunətɪ]", mean: "機會", tip: "[p] 在母音間。重音 tu。分段練：op-per-tu-ni-ty。" },
      { word: "Expand", kk: "[ɪkˋspænd]", mean: "擴展", tip: "[p] 不送氣。s 後面的 p 唸像「ㄅ」。" },
      { word: "Tuxedo", kk: "[tʌkˋsido]", mean: "(美)晚禮服", tip: "重音 xi。x 發 [ks]，[k] 輕音接 [s]。" },
      { word: "Lounge suit", kk: "[laʊndʒ sut]", mean: "(英)西裝", tip: "Lounge [dʒ] 嘟嘴。suit [u] 長音嘴圓。" },
      { word: "Casual", kk: "[ˋkæʒʊəl]", mean: "休閒的", tip: "重音第一。中間 [ʒ] 像「日」但有氣流摩擦。" },
      { word: "Comfortable", kk: "[ˋkʌmfɚtəbl]", mean: "舒適的", tip: "易錯！重音 com，中間 for 輕讀縮短。" },
      { word: "Exhibition", kk: "[͵ɛksəˋbɪʃən]", mean: "展覽", tip: "重音在 bi，x 發 [ks]。" },
      { word: "Sparkling", kk: "[ˋspɑrklɪŋ]", mean: "氣泡的", tip: "[p] 不送氣。像「死八-kling」，勿噴氣。" },
      { word: "Attendee", kk: "[ə͵tɛnˋdi]", mean: "參加者", tip: "重音字尾 dee。雙 e 發長音 [i]。" },
      { word: "Suggestion", kk: "[səˋdʒɛstʃən]", mean: "建議", tip: "g 發 [dʒ]。結尾 stion 唸 [stʃən]。" }
    ]
  }
];

// --- 2. 句型資料庫 (Sentences) ---
window.sentenceData = [
  // --- Unit 1 ---
  {
    id: 1, category: "Unit 1: 開場與請求協助", unitId: "Unit 1", desc: "A. Opening & Request", colorTheme: "blue", icon: "MessageCircle",
    sentences: [
      { id: "u1-1", type: "Intro", text: "Hi, can you <span class='highlight-kw'>help me with</span> my job interview?", plain: "Hi, can you help me with my job interview?", mean: "嗨，你能幫幫我練習求職面試嗎？", tip: "help me 中間 p 很輕；interview 重音在最前。", traps: { "job": "Job 的母音 [ɑ] 嘴巴要張大，唸成 jab (猛刺) 是錯誤的。" } },
      { id: "u1-2", type: "Reply", text: "My pleasure. How do you <span class='highlight-kw'>want me to</span> help?", plain: "My pleasure. How do you want me to help?", mean: "我的榮幸。你要我怎麼幫呢？", tip: "want me to 口語常弱化唸成 wanna。", traps: { "pleasure": "Pleasure 的 s 要發 [ʒ]，不要唸成 please。" } },
      { id: "u1-3", type: "Request", text: "How about asking me some questions <span class='highlight-kw'>like an</span> employer?", plain: "How about asking me some questions like an employer?", mean: "模擬一些雇主可能會問的問題，好嗎？", tip: "like_an 建議連音，唸成 lai-kan。", traps: { "employer": "Employer 重音在 ploy，不要唸成 Employee。" } },
      { id: "u1-4", type: "Idiom", text: "Role-playing is <span class='highlight-kw'>my cup of tea</span>.", plain: "Role-playing is my cup of tea.", mean: "角色扮演是我拿手的。", tip: "cup of tea 為慣用語，請連貫唸成 cu-puv-tea。", traps: { "role": "Role 嘴型要圓，不要唸成 Row。" } }
    ]
  },
  { id: 2, category: "Unit 1: 工作經驗", unitId: "Unit 1", desc: "B. Experience", colorTheme: "green", icon: "Briefcase",
    sentences: [
      { id: "u1-5", type: "Exp", text: "I have three years' <span class='highlight-kw'>progressive experience</span> in the hospitality industry.", plain: "I have three years' progressive experience in the hospitality industry.", mean: "我在觀光產業已累積了三年的經驗。", tip: "progressive experience 後稍微停頓。", traps: { "hospitality": "是 Hospitality 不是 Hospital！" } },
      { id: "u1-6", type: "Detail", text: "Advancing from my initial <span class='highlight-kw'>role as a</span> front desk associate with The Lalu to my current position there <span class='highlight-kw'>as a</span> concierge.", plain: "Advancing from my initial role as a front desk associate with The Lalu to my current position there as a concierge.", mean: "從涵碧樓的櫃檯助理，到現在擔任禮賓接待。", tip: "role_as_a 連音唸成 ro-la-za。", traps: { "concierge": "Concierge 是法文借字，字尾 ge 發 [ʒ]。" } },
      { id: "u1-7", type: "Pref", text: "I like to <span class='highlight-kw'>work in</span> the city center.", plain: "I like to work in the city center.", mean: "我喜歡在市中心工作。", tip: "work_in 連音唸成 wer-kin。", traps: { "work": "Work 是 [ɝ] 捲舌音，不要唸成 Walk。" } }
    ]
  },
  { id: 3, category: "Unit 1: 動機與壓力", unitId: "Unit 1", desc: "C. Motivation & Stress", colorTheme: "amber", icon: "Lightbulb",
    sentences: [
      { id: "u1-8", type: "Q", text: "Why should we <span class='highlight-kw'>hire</span> you?", plain: "Why should we hire you?", mean: "我們為什麼要雇用你？", tip: "Why 是疑問詞，句尾語調下降。", traps: { "hire": "Hire 只有一個音節，字尾 r 要捲舌。" } },
      { id: "u1-9", type: "A", text: "You should hire me because my experience is <span class='highlight-kw'>aligned with</span> the requirements in your job listing.", plain: "You should hire me because my experience is aligned with the requirements in your job listing.", mean: "因為我符合您的求才條件。", tip: "aligned_with 的 d 聲音很輕，直接滑向 with。", traps: { "aligned": "gn 不發音，只發 line。" } },
      { id: "u1-10", type: "Fit", text: "Then be <span class='highlight-kw'>specific</span> about what makes you a good <span class='highlight-kw'>fit for</span> this role.", plain: "Then be specific about what makes you a good fit for this role.", mean: "那你就要具體說明你符合這個職務的條件。", tip: "fit_for 的 t 可稍微停住。", traps: { "specific": "Specific 重音在 ci。" } },
      { id: "u1-11", type: "Apply", text: "That's why I want to <span class='highlight-kw'>apply for</span> this position in their company.", plain: "That's why I want to apply for this position in their company.", mean: "這就是為什麼我想申請這家公司的這個職位。", tip: "apply_for 請做連音練習。", traps: { "apply": "Apply 重音在 ply。" } },
      { id: "u1-12", type: "Stress", text: "This position can be <span class='highlight-kw'>demanding</span> and <span class='highlight-kw'>stressful</span>.", plain: "This position can be demanding and stressful.", mean: "這個職位要求高，壓力大。", tip: "加強 demanding 和 stressful 的語氣。", traps: { "stressful": "兩個 s 都要清楚，中間 t 別漏。" } },
      { id: "u1-13", type: "Coping", text: "When I feel stressed, I <span class='highlight-kw'>focus on</span> my breathing.", plain: "When I feel stressed, I focus on my breathing.", mean: "當我感到壓力時，我會專注於呼吸。", tip: "focus_on 連音唸成 fo-kə-san。", traps: { "focus": "o 發雙母音 [oʊ]。" } },
      { id: "u1-14", type: "Habit", text: "I practice guided <span class='highlight-kw'>meditation</span> in the morning before work.", plain: "I practice guided meditation in the morning before work.", mean: "早上上班之前我會做冥想練習。", tip: "meditation 字較長，請放慢速度。", traps: { "meditation": "前段是 Medi (麥迪)，不是 Mei-di。" } },
      { id: "u1-15", type: "Tips", text: "That's too <span class='highlight-kw'>concise</span>. You need to tell them more details.", plain: "That's too concise. You need to tell them more details.", mean: "這太簡潔了。你需要告訴他們更多的細節。", tip: "對比 concise 與 details。", traps: { "concise": "cise 唸起來像 size。" } },
      { id: "u1-16", type: "Research", text: "Did you <span class='highlight-kw'>thoroughly</span> research the company?", plain: "Did you thoroughly research the company?", mean: "你有徹底研究這家公司嗎？", tip: "thoroughly 是魔王字，th 咬舌接 r。", traps: { "thoroughly": "th 咬舌音要出來，不要唸成 s 或 f。" } },
      { id: "u1-17", type: "Mind", text: "I'll <span class='highlight-kw'>keep that in mind</span>.", plain: "I'll keep that in mind.", mean: "我會記住的。", tip: "整句連讀，節奏輕快。", traps: { "mind": "字尾 nd 鼻音要出來。" } }
    ]
  },
  // --- Unit 2 ---
  { id: 4, category: "Unit 2: 開場與介紹", unitId: "Unit 2", desc: "A. Opening & Intro", colorTheme: "blue", icon: "Layout",
    sentences: [
      { id: "u2-1", type: "Intro", text: "International Trade Show <span class='highlight-kw'>Exhibition</span> Center. This is Linda. How may I <span class='highlight-kw'>help</span> you?", plain: "International Trade Show Exhibition Center. This is Linda. How may I help you?", mean: "國際貿易展覽中心，我是 Linda。請問有什麼需要服務？", tip: "Center 後停頓；may I 連音。", traps: { "exhibition": "h 不發音，唸 ex-i-bition。" } },
      { id: "u2-2", type: "Booking", text: "I am calling to <span class='highlight-kw'>book a</span> booth for the Body, Mind & Soul Exhibition.", plain: "I am calling to book a booth for the Body, Mind & Soul Exhibition.", mean: "我打來是要預定「身心靈展」的攤位。", tip: "book a 連音 (boo-ka)。", traps: { "booth": "th 舌頭要伸出來，不要唸成 s。" } },
      { id: "u2-3", type: "Address", text: "May I ask how I should <span class='highlight-kw'>address</span> you?", plain: "May I ask how I should address you?", mean: "請問我應該如何稱呼您呢？", tip: "address 重音在第二音節 dress。", traps: { "address": "重音不要放在第一音節。" } },
      { id: "u2-5", type: "Offer", text: "Shall I <span class='highlight-kw'>brief you on</span> the kinds of booths we are offering?", plain: "Shall I brief you on the kinds of booths we are offering?", mean: "需要我介紹展位類型嗎？", tip: "brief you on 三字連讀。", traps: { "brief": "字尾 f 咬下唇吐氣。" } },
      { id: "u2-6", type: "Types", text: "We have linear booths, <span class='highlight-kw'>corner</span> booths, <span class='highlight-kw'>peninsula</span> booths, and <span class='highlight-kw'>island</span> booths.", plain: "We have linear booths, corner booths, peninsula booths, and island booths.", mean: "我們有線型、角落、半島型和中島式展位。", tip: "列舉時前三個語調上揚，最後 island booths 下降。", traps: { "island": "s 不發音，唸 Eye-land。" } },
      { id: "u2-8", type: "Diff", text: "They are totally different <span class='highlight-kw'>in terms of</span> size, dimensions, and price.", plain: "They are totally different in terms of size, dimensions, and price.", mean: "它們在尺寸、面積和價格上完全不同。", tip: "in terms of (就...而言) 連讀 (term-zof)。", traps: { "terms": "terms 的 s 接 of 變成 zof。" } }
    ]
  },
  { id: 5, category: "Unit 2: 詢價與規格", unitId: "Unit 2", desc: "C. Cost & Specs", colorTheme: "purple", icon: "MapPin",
    sentences: [
      { id: "u2-10", type: "Suggest", text: "Then <span class='highlight-kw'>linear</span> booths may be a good <span class='highlight-kw'>option</span> for you.", plain: "Then linear booths may be a good option for you.", mean: "那您可以考慮線型展位。", tip: "option 的 p 氣音要輕。", traps: { "linear": "重音在 Li，唸 Li-nee-er。" } },
      { id: "u2-12", type: "Price", text: "It will be NT$ 95,000 with a <span class='highlight-kw'>package</span>. This price includes <span class='highlight-kw'>VAT</span>.", plain: "It will be ninety-five thousand NT dollars with a package. This price includes VAT.", mean: "套裝方案是九萬五千元(含稅)。", tip: "95,000 唸 ninety-five thousand；VAT 唸 V-A-T。", traps: { "package": "字尾 age 唸 [ɪdʒ]。" } },
      { id: "u2-13", type: "Include", text: "What does the package <span class='highlight-kw'>include</span>?", plain: "What does the package include?", mean: "套裝方案包含什麼？", tip: "What_does_the 常快速連讀。", traps: { "include": "cl 結合緊密。" } },
      { id: "u2-14", type: "Detail", text: "The package <span class='highlight-kw'>comprises</span> lighting, a signboard, carpet, partition walls, five chairs, and one round table.", plain: "The package comprises lighting, a signboard, carpet, partition walls, five chairs, and one round table.", mean: "包含照明、招牌、地毯、隔牆、五椅一桌。", tip: "長句請分段。comprises 重音在後。", traps: { "comprises": "prise 發 [praɪz]。" } },
      { id: "u2-16", type: "Arrange", text: "We'll arrange <span class='highlight-kw'>linear</span> booths in a <span class='highlight-kw'>straight</span> line.", plain: "We'll arrange linear booths in a straight line.", mean: "我們會將線型展位排成一條直線。", tip: "straight line 中間的 t 和 l 會黏在一起。", traps: { "straight": "gh 不發音。" } },
      { id: "u2-17", type: "Surround", text: "Does that mean they will be <span class='highlight-kw'>surrounded by</span> other exhibitors' booths?", plain: "Does that mean they will be surrounded by other exhibitors' booths?", mean: "這意味著它們將被其他參展商包圍嗎？", tip: "surrounded by (被包圍)；exhibitors 重音在第二音節。", traps: { "surrounded": "重音在 roun。" } }
    ]
  },
  { id: 6, category: "Unit 2: 完成預定", unitId: "Unit 2", desc: "E. Booking", colorTheme: "teal", icon: "Zap",
    sentences: [
      { id: "u2-19", type: "Next", text: "How do I <span class='highlight-kw'>proceed</span> with the booking?", plain: "How do I proceed with the booking?", mean: "我該如何繼續預定的手續呢？", tip: "do I 連音 (du-wai)；proceed 注意長音 [i]。", traps: { "proceed": "重音在後 ceed。" } },
      { id: "u2-20", type: "Email", text: "Would you like me to <span class='highlight-kw'>e-mail</span> the online <span class='highlight-kw'>application</span> link to you?", plain: "Would you like me to e-mail the online application link to you?", mean: "需要我把線上申請連結寄給您嗎？", tip: "Would you 連音；application 重音在 ca。", traps: { "application": "app 發蝴蝶音 [æ]。" } },
      { id: "u2-22", type: "Closing", text: "Thank you for <span class='highlight-kw'>calling</span>. Hope to <span class='highlight-kw'>hear</span> from you soon.", plain: "Thank you for calling. Hope to hear from you soon.", mean: "謝謝來電，希望能很快收到您的回覆。", tip: "hear from you 語氣要親切上揚。", traps: { "hear": "不要唸成 here 的短音，要飽滿。" } }
    ]
  },
  // --- Unit 3 ---
  { id: 7, category: "Unit 3: 會議開場", unitId: "Unit 3", desc: "A. Opening", colorTheme: "indigo", icon: "MessageCircle",
    sentences: [
      { id: "u3-1", type: "Opening", text: "We are here to <span class='highlight-kw'>discuss</span> our exhibition booth for the <span class='highlight-kw'>trade show</span>.", plain: "We are here to discuss our exhibition booth for the trade show.", mean: "我們今天是來討論商展的展位事宜。", tip: "discuss 接 our 連讀。", traps: { "discuss": "重音在 scuss。" } },
      { id: "u3-2", type: "Phrase", text: "Now let's <span class='highlight-kw'>get the ball rolling</span>.", plain: "Now let's get the ball rolling.", mean: "現在讓我們開始討論吧！", tip: "慣用語：開始進行。", traps: { "rolling": "roll 舌頭要捲。" } },
      { id: "u3-3", type: "Ask", text: "Sally, what do you <span class='highlight-kw'>have in mind</span>?", plain: "Sally, what do you have in mind?", mean: "Sally，你有什麼想法嗎？", tip: "have in 連音 (ha-vin)。", traps: { "mind": "nd 鼻音結尾。" } }
    ]
  },
  { id: 8, category: "Unit 3: 提出與討論", unitId: "Unit 3", desc: "B. Discussion", colorTheme: "orange", icon: "Lightbulb",
    sentences: [
      { id: "u3-4", type: "Idea", text: "I think we would <span class='highlight-kw'>go for</span> the <span class='highlight-kw'>peninsula</span> booth.", plain: "I think we would go for the peninsula booth.", mean: "我想我們會選擇半島式展位。", tip: "go for (選擇)；peninsula 音節多請放慢。", traps: { "peninsula": "重音在 nin。" } },
      { id: "u3-5", type: "Clarify", text: "Sorry, I didn't <span class='highlight-kw'>catch</span> the last few words of what you just <span class='highlight-kw'>said</span>.", plain: "Sorry, I didn't catch the last few words of what you just said.", mean: "抱歉，我沒聽清楚你剛才說的最後幾個字。", tip: "catch 的 t 不發音。", traps: { "catch": "蝴蝶音 [æ]。" } },
      { id: "u3-6", type: "Repeat", text: "Could you please <span class='highlight-kw'>run that by me</span> again?", plain: "Could you please run that by me again?", mean: "可以請你再說一遍嗎？", tip: "me again 連音。", traps: { "run": "r 要圓唇。" } },
      { id: "u3-8", type: "Q", text: "Do we need to <span class='highlight-kw'>make a decision</span> today?", plain: "Do we need to make a decision today?", mean: "我們今天需要做決定嗎？", tip: "make a 連音。", traps: { "decision": "si 發 [ʒ] (日) 的音。" } }
    ]
  },
  { id: 9, category: "Unit 3: 反對與支持", unitId: "Unit 3", desc: "C. Pros & Cons", colorTheme: "teal", icon: "Check",
    sentences: [
      { id: "u3-9", type: "Q", text: "Why are you all so <span class='highlight-kw'>keen on</span> a peninsula booth?", plain: "Why are you all so keen on a peninsula booth?", mean: "為什麼你們都對半島展位情有獨鍾？", tip: "keen on 連音 (kee-non)。", traps: { "keen": "長音 [i] 要微笑。" } },
      { id: "u3-10", type: "Reason", text: "Because all of our products are very <span class='highlight-kw'>bulky</span> and they will <span class='highlight-kw'>take up</span> a lot of space.", plain: "Because all of our products are very bulky and they will take up a lot of space.", mean: "因為我們所有產品都很笨重，且很佔空間。", tip: "take up (佔據) 連音。", traps: { "bulky": "l 要含在喉嚨。" } },
      { id: "u3-11", type: "Contrast", text: "The linear booth is too <span class='highlight-kw'>cramped</span> to display all of our featured products.", plain: "The linear booth is too cramped to display all of our featured products.", mean: "線型展位太擠，無法展示我們所有的特色產品。", tip: "cramped (擠) 與 spacious (寬) 相反。", traps: { "cramped": "mp 閉嘴後接 t。" } },
      { id: "u3-12", type: "Second", text: "I agree with Sally. I <span class='highlight-kw'>second</span> that.", plain: "I agree with Sally. I second that.", mean: "我同意 Sally，我附議。", tip: "second 當動詞是附議。", traps: { "second": "重音在 se。" } }
    ]
  },
  { id: 10, category: "Unit 3: 優勢與結論", unitId: "Unit 3", desc: "D. Benefits & End", colorTheme: "amber", icon: "Save",
    sentences: [
      { id: "u3-14", type: "Benefit", text: "A peninsula booth can allow our <span class='highlight-kw'>potential</span> buyers to move around <span class='highlight-kw'>comfortably</span>.", plain: "A peninsula booth can allow our potential buyers to move around comfortably.", mean: "半島式展位讓潛在買家能舒適地四處走動。", tip: "comfortably 唸快 (comf-ta-bly)。", traps: { "comfortably": "重音在第一音節 Com。" } },
      { id: "u3-15", type: "Benefit", text: "A <span class='highlight-kw'>spacious</span> booth will encourage the potential buyers to <span class='highlight-kw'>linger</span> inside longer.", plain: "A spacious booth will encourage the potential buyers to linger inside longer.", mean: "寬敞的展位有助於潛在買家逗留久一點。", tip: "linger (逗留) 是好字。", traps: { "spacious": "ci 發 [ʃ] (許)。" } },
      { id: "u3-17", type: "Winner", text: "The peninsula booth <span class='highlight-kw'>sounds like a winner</span> to me.", plain: "The peninsula booth sounds like a winner to me.", mean: "半島式展位聽起來很棒 (是首選)。", tip: "sounds like a winner 是慣用語。", traps: { "winner": "短音 [ɪ]，嘴放鬆。" } },
      { id: "u3-20", type: "End", text: "If nobody has anything else to add, then let's <span class='highlight-kw'>call it a day</span>.", plain: "If nobody has anything else to add, then let's call it a day.", mean: "如果沒有其它動議，那就散會吧！", tip: "call it a day (散會) 連讀。", traps: { "call": "all 音要圓。" } }
    ]
  },
  // --- Unit 4 ---
  { id: 11, category: "Unit 4: 報到確認", unitId: "Unit 4", desc: "A. Checking In", colorTheme: "blue", icon: "MapPin",
    sentences: [
      { id: "u4-1", type: "Ask", text: "So, is this the room where the meeting will be <span class='highlight-kw'>held</span>?", plain: "So, is this the room where the meeting will be held?", mean: "這就是待會要舉行會議的房間嗎？", tip: "will be held 中間 h 氣音很弱。", traps: { "held": "尾音 ld 要輕。" } },
      { id: "u4-2", type: "Intro", text: "Yes, <span class='highlight-kw'>ma'am</span>. I am the floor manager.", plain: "Yes, ma'am. I am the floor manager.", mean: "是的，女士。我是現場經理。", tip: "ma'am 語調微微上揚。", traps: { "ma'am": "母音 [æ] 要扁平。" } },
      { id: "u4-3", type: "Sure", text: "I am here to <span class='highlight-kw'>make sure</span> that you have everything you need.", plain: "I am here to make sure that you have everything you need.", mean: "我在這裡是為了確保您擁有會議所需的一切。", tip: "make sure 的 k 和 s 連接。", traps: { "everything": "重音在第一音節。" } }
    ]
  },
  { id: 12, category: "Unit 4: 設備與場地", unitId: "Unit 4", desc: "B. Equipment", colorTheme: "purple", icon: "Layout",
    sentences: [
      { id: "u4-4", type: "Setup", text: "I like the <span class='highlight-kw'>U-shaped</span> table arrangement.", plain: "I like the U-shaped table arrangement.", mean: "我喜歡這個馬蹄型會議桌的安排。", tip: "arrangement 重音在 range。", traps: { "U-shaped": "ed 發 [t] 音。" } },
      { id: "u4-6", type: "Equip", text: "Our <span class='highlight-kw'>venue</span> provides all of the latest <span class='highlight-kw'>AV</span> technology.", plain: "Our venue provides all of the latest AV technology.", mean: "我們的場地提供所有最新的影音科技設備。", tip: "AV 兩個字母分開重讀。", traps: { "venue": "字尾 [u] 要噘嘴。" } },
      { id: "u4-8", type: "Kind", text: "That's very <span class='highlight-kw'>kind of</span> you.", plain: "That's very kind of you.", mean: "你人真好。", tip: "kind of 唸 kin-dov。", traps: { "kind": "d 接 of 變成連音。" } }
    ]
  },
  { id: 13, category: "Unit 4: 網路連線", unitId: "Unit 4", desc: "C. Internet", colorTheme: "green", icon: "Wifi",
    sentences: [
      { id: "u4-9", type: "Wifi", text: "How can I <span class='highlight-kw'>access</span> the Internet here?", plain: "How can I access the Internet here?", mean: "這裡要如何上網呢？", tip: "access 的 cc 要清晰。", traps: { "access": "兩個 s 都要發音清晰。" } },
      { id: "u4-10", type: "Wireless", text: "Once you <span class='highlight-kw'>turn on</span> your laptop, a wireless Internet connection is available.", plain: "Once you turn on your laptop, a wireless Internet connection is available.", mean: "一旦您開啟筆電，就可以使用無線網路。", tip: "turn on 連音。", traps: { "available": "重音在 vai。" } },
      { id: "u4-11", type: "Pass", text: "What is the <span class='highlight-kw'>password</span> for the WiFi?", plain: "What is the password for the WiFi?", mean: "WiFi 的密碼是什麼？", tip: "WiFi 唸 [waɪ-faɪ]。", traps: { "password": "pass 扁嘴，word 捲舌。" } },
      { id: "u4-13", type: "Scan", text: "You can use the <span class='highlight-kw'>built-in</span> camera to <span class='highlight-kw'>scan</span> the QR Code.", plain: "You can use the built-in camera to scan the QR Code.", mean: "您可以使用內建相機掃描 QR Code。", tip: "built-in 的 t 連到 in。", traps: { "scan": "sk 的 k 不送氣。" } },
      { id: "u4-14", type: "Eco", text: "That's handy and <span class='highlight-kw'>eco-friendly</span>.", plain: "That's handy and eco-friendly.", mean: "那真的很方便又環保。", tip: "eco 發 E-co。", traps: { "eco-friendly": "friendly 的 d 不發音。" } }
    ]
  },
  { id: 14, category: "Unit 4: 故障排除", unitId: "Unit 4", desc: "D. Troubleshooting", colorTheme: "amber", icon: "Settings",
    sentences: [
      { id: "u4-15", type: "Error", text: "Wait. <span class='highlight-kw'>How come</span> there's no sound coming out?", plain: "Wait. How come there's no sound coming out?", mean: "等等。怎麼會沒有聲音出來呢？", tip: "How come (怎麼會) 常見口語。", traps: { "sound": "d 在 coming 前不明顯。" } },
      { id: "u4-19", type: "Connect", text: "This wire here should be <span class='highlight-kw'>connected to</span> this port.", plain: "This wire here should be connected to this port.", mean: "這條線應該要接到這個插孔。", tip: "connected to 兩個 t 合併。", traps: { "port": "嘴型要圓。" } },
      { id: "u4-20", type: "Solve", text: "Good thing that I <span class='highlight-kw'>rehearsed</span> to <span class='highlight-kw'>pinpoint</span> the audio problem.", plain: "Good thing that I rehearsed to pinpoint the audio problem.", mean: "還好我有排練，才能精確查出聲音問題。", tip: "rehearsed 的 ed 發 [t]。", traps: { "pinpoint": "兩個 p 都要噴氣。" } },
      { id: "u4-21", type: "Idiom", text: "A <span class='highlight-kw'>stitch</span> in time saves nine.", plain: "A stitch in time saves nine.", mean: "及時補救，事半功倍。", tip: "Stitch 的 ch 和 in 連音。", traps: { "saves": "s 發 [z] 音。" } }
    ]
  },
  { id: 15, category: "Unit 4: 最後確認", unitId: "Unit 4", desc: "E. Final Check", colorTheme: "teal", icon: "Check",
    sentences: [
      { id: "u4-22", type: "Check", text: "Could you <span class='highlight-kw'>go over</span> all the <span class='highlight-kw'>facilities</span> to ensure that everything works?", plain: "Could you go over all the facilities to ensure that everything works?", mean: "能否再檢查一次所有設施，確保運作正常？", tip: "go over (檢查) 中間 w 滑音。", traps: { "facilities": "重音在 ci [sɪ]。" } },
      { id: "u4-24", type: "Detail", text: "You do have an <span class='highlight-kw'>eye for detail</span>.", plain: "You do have an eye for detail.", mean: "您真的很注重細節。", tip: "have an eye 連成一氣。", traps: { "eye": "eye 和 for 連音。" } },
      { id: "u4-25", type: "Flatter", text: "Thank you for the compliment. I am <span class='highlight-kw'>flattered</span>.", plain: "Thank you for the compliment. I am flattered.", mean: "謝謝您的讚美。我受寵若驚。", tip: "flattered 的 tt 輕快帶過。", traps: { "flattered": "ed 發 [d]。" } },
      { id: "u4-26", type: "Superb", text: "<span class='highlight-kw'>Superb</span>! I am now <span class='highlight-kw'>looking forward to</span> the meeting.", plain: "Superb! I am now looking forward to the meeting.", mean: "太棒了！我很期待接下來的會議。", tip: "looking forward to 是必背片語。", traps: { "superb": "重音在後 [pɝb]。" } }
    ]
  },
  // --- Unit 5 ---
  { id: 16, category: "Unit 5: 差旅政策確認", unitId: "Unit 5", desc: "A. Policy Check", colorTheme: "red", icon: "CreditCard",
    sentences: [
      { id: "u5-1", type: "Check", text: "Hi, Janet, are you <span class='highlight-kw'>done with</span> the invitation letters to the keynote speakers?", plain: "Hi, Janet, are you done with the invitation letters to the keynote speakers?", mean: "嗨 Janet，給主講人的邀請函妳完成了嗎？", tip: "Done with 的 n 和 w 可以連得快一點。", traps: { "done": "n 的鼻音要確實。" } },
      { id: "u5-2", type: "Reply", text: "Yes, almost. I'm not sure whether I've included sufficient information about our <span class='highlight-kw'>reimbursement policy</span>.", plain: "Yes, almost. I'm not sure whether I've included sufficient information about our reimbursement policy.", mean: "是的，快好了。我不確定我是否提供了關於我們核銷政策的充足資訊。", tip: "whether I've 可以連音唸成 [wɛðɚ-raɪv]。", traps: { "sufficient": "ci 發 [ʃ] 的音。" } }
    ]
  },
  { id: 17, category: "Unit 5: 費用說明", unitId: "Unit 5", desc: "B. Explaining Rules", colorTheme: "amber", icon: "Briefcase",
    sentences: [
      { id: "u5-3", type: "Rule", text: "It's very important to inform our keynote speakers that they will be <span class='highlight-kw'>reimbursed for</span> the <span class='highlight-kw'>actual costs</span> of travel and <span class='highlight-kw'>subsistence expenditures</span>.", plain: "It's very important to inform our keynote speakers that they will be reimbursed for the actual costs of travel and subsistence expenditures.", mean: "告知我們的主講人他們將獲得差旅費和日常開支的實報實銷，這非常重要。", tip: "Reimbursed for 的 [d] 和 [f] 不好接，[d] 可以輕輕帶過。", traps: { "actual": "tu 發 [tʃ] (去) 的音。" } },
      { id: "u5-4", type: "Shock", text: "Actual costs of travel? Seriously? You mean they can fly <span class='highlight-kw'>business class</span>?", plain: "Actual costs of travel? Seriously? You mean they can fly business class?", mean: "差旅費實報實銷？真的嗎？妳是說他們可以搭商務艙？", tip: "Seriously 語調上揚表示驚訝。", traps: { "seriously": "ri 發音要捲舌。" } },
      { id: "u5-5", type: "Correct", text: "Oops. Nice one. We only <span class='highlight-kw'>pay for</span> the <span class='highlight-kw'>economy class</span>.", plain: "Oops. Nice one. We only pay for the economy class.", mean: "噢，想得美。我們只支付經濟艙的費用。", tip: "Nice one 是諷刺語氣，要唸得俏皮一點。", traps: { "economy": "重音在 co。" } },
      { id: "u5-6", type: "Remind", text: "Please <span class='highlight-kw'>make sure</span> that our keynote speakers are <span class='highlight-kw'>aware of</span> this before they book their flight.", plain: "Please make sure that our keynote speakers are aware of this before they book their flight.", mean: "請確保我們的主講人在訂機票前知道這一點。", tip: "Aware of 必連音 [əˋwɛr-əv]。", traps: { "aware": "r 接 of 連音。" } }
    ]
  },
  { id: 18, category: "Unit 5: 配偶與住宿", unitId: "Unit 5", desc: "C. Spouse & Stay", colorTheme: "green", icon: "MapPin",
    sentences: [
      { id: "u5-7", type: "News", text: "I see. Oh, <span class='highlight-kw'>by the way</span>, Dr. Lin, one of the keynote speakers from Sweden mentioned that his wife will travel with him.", plain: "I see. Oh, by the way, Dr. Lin, one of the keynote speakers from Sweden mentioned that his wife will travel with him.", mean: "我明白了。噢對了，來自瑞典的主講人之一林博士提到他太太會隨行。", tip: "One of 連音 [wʌn-əv]。", traps: { "sweden": "[sw] 的嘴型變化要注意。" } },
      { id: "u5-8", type: "Q", text: "She's <span class='highlight-kw'>never been to</span> Asia before. <span class='highlight-kw'>What about</span> her flight ticket cost?", plain: "She's never been to Asia before. What about her flight ticket cost?", mean: "她以前從沒去過亞洲。那她的機票費用呢？", tip: "What about 是超級常用的連音 [hwɑ-tə-baʊt]。", traps: { "asia": "s 發 [ʒ] 或 [ʃ] 皆可，重音在 A。" } },
      { id: "u5-9", type: "Policy", text: "We won't be able to reimburse any expenses <span class='highlight-kw'>incurred by</span> spouses or other family members who <span class='highlight-kw'>accompany</span> our keynote speakers <span class='highlight-kw'>on their travels</span>.", plain: "We won't be able to reimburse any expenses incurred by spouses or other family members who accompany our keynote speakers on their travels.", mean: "我們無法核銷任何由配偶或其他隨行家人產生的費用。", tip: "建議斷句：expenses | incurred by spouses | or other family members。", traps: { "incurred": "cur 捲舌音。" } },
      { id: "u5-10", type: "Sol", text: "All right. I will tell Dr. Lin that he needs to <span class='highlight-kw'>take care of</span> his wife's travel expenses <span class='highlight-kw'>on his own</span>.", plain: "All right. I will tell Dr. Lin that he needs to take care of his wife's travel expenses on his own.", mean: "好的。我會告訴林博士他需要自行負擔他太太的旅費。", tip: "Take care of 連音 [tek-kɛr-əv]。", traps: { "own": "on his own 連音。" } },
      { id: "u5-11", type: "Hotel", text: "However, Dr. Lin doesn't need to pay any <span class='highlight-kw'>extra cost</span> for the <span class='highlight-kw'>accommodation</span>.", plain: "However, Dr. Lin doesn't need to pay any extra cost for the accommodation.", mean: "不過，林博士不需要為住宿支付任何額外費用。", tip: "Accommodation 慢慢唸準確。", traps: { "extra": "x 發 [ks]。" } }
    ]
  },
  { id: 19, category: "Unit 5: 高鐵與津貼", unitId: "Unit 5", desc: "D. HSR & Allowances", colorTheme: "teal", icon: "CreditCard",
    sentences: [
      { id: "u5-13", type: "Ask", text: "<span class='highlight-kw'>What about</span> the <span class='highlight-kw'>high-speed rail</span> ticket cost? Also the economy class?", plain: "What about the high-speed rail ticket cost? Also the economy class?", mean: "那高鐵車票的費用呢？也是經濟艙嗎？", tip: "Rail 結尾的 [l] 聲音要拉長一點點。", traps: { "rail": "不要唸成 ray-o。" } },
      { id: "u5-14", type: "Reply", text: "Oh, <span class='highlight-kw'>when it comes to</span> HSR, it's a <span class='highlight-kw'>different story</span>.", plain: "Oh, when it comes to HSR, it's a different story.", mean: "噢，說到高鐵，那又是另一回事了。", tip: "When it comes to 連音唸 [wɛn-ɪt-kʌmz-tu]。", traps: { "hsr": "字母分開唸清楚。" } },
      { id: "u5-15", type: "Info", text: "Please <span class='highlight-kw'>inform them</span> that the <span class='highlight-kw'>daily allowance</span> is <span class='highlight-kw'>no more than</span> NT$ 1500.", plain: "Please inform them that the daily allowance is no more than fifteen hundred NT dollars.", mean: "請告知他們每日生活津貼不超過台幣 1500 元。", tip: "1500 唸 fifteen hundred 比較順口。", traps: { "allowance": "low 發 [laʊ] (老) 的音。" } },
      { id: "u5-16", type: "Receipt", text: "O.K. <span class='highlight-kw'>Last but not least</span>. Do they need to <span class='highlight-kw'>submit</span> the <span class='highlight-kw'>original receipts</span> for reimbursement?", plain: "O.K. Last but not least. Do they need to submit the original receipts for reimbursement?", mean: "好的。最後一點。他們需要繳交原始收據來核銷嗎？", tip: "Last but not least (最後但同樣重要)。", traps: { "receipts": "p 不發音！" } }
    ]
  },
  // --- Unit 6 ---
  { id: 20, category: "Unit 6: 緊急打擾", unitId: "Unit 6", desc: "A. Interruption", colorTheme: "red", icon: "AlertTriangle",
    sentences: [
      { id: "u6-1", type: "Ask", text: "Hi, John, <span class='highlight-kw'>do you have a minute</span>?", plain: "Hi, John, do you have a minute?", mean: "嗨 John，你有空嗎？", tip: "Have a 必連音 [hæ-və]。", traps: { "minute": "t 可以稍微閉氣不爆破。" } },
      { id: "u6-2", type: "Busy", text: "Well, actually, I am <span class='highlight-kw'>in the middle of something</span> now. Can I <span class='highlight-kw'>get back to</span> you later?", plain: "Well, actually, I am in the middle of something now. Can I get back to you later?", mean: "這個嘛，事實上我現在正忙著。我可以稍後再回覆你嗎？", tip: "Get back to 的 [k] 接 [t]，[k] 會變成無聲停頓。", traps: { "middle": "ddle 發 [d!]。" } },
      { id: "u6-3", type: "Urgent", text: "But it's <span class='highlight-kw'>urgent</span>. I need to <span class='highlight-kw'>talk to</span> you right now.", plain: "But it's urgent. I need to talk to you right now.", mean: "但這很緊急。我現在就需要和你談談。", tip: "Urgent 的 [t] 結尾要輕脆。", traps: { "urgent": "Ur 要捲舌。" } }
    ]
  },
  { id: 21, category: "Unit 6: 壞消息", unitId: "Unit 6", desc: "B. Breaking News", colorTheme: "orange", icon: "AlertTriangle",
    sentences: [
      { id: "u6-4", type: "Direct", text: "Come on, Janet! You know how busy I am. Could we <span class='highlight-kw'>get down to business</span>?", plain: "Come on, Janet! You know how busy I am. Could we get down to business?", mean: "拜託，Janet！妳知道我有多忙。我們可以直接說重點嗎？", tip: "Business 只有兩個音節 [bɪz-nɪs]。", traps: { "business": "不要唸成 busy-ness。" } },
      { id: "u6-5", type: "News", text: "There was a <span class='highlight-kw'>terrorist</span> attack on <span class='highlight-kw'>Stockholm</span> yesterday.", plain: "There was a terrorist attack on Stockholm yesterday.", mean: "昨天斯德哥爾摩發生了恐怖攻擊。", tip: "Stockholm 注意 [st] 不送氣。", traps: { "terrorist": "重音在第一音節。" } },
      { id: "u6-6", type: "Shock", text: "<span class='highlight-kw'>Stockholm</span>? Isn't it in Northern Europe? What does it have to do with us?", plain: "Stockholm? Isn't it in Northern Europe? What does it have to do with us?", mean: "斯德哥爾摩？那不是在北歐嗎？這跟我們有什麼關係？", tip: "What does it 唸快時，t 會變成輕彈音。", traps: { "stockholm": "lm 的 l 很輕。" } }
    ]
  },
  { id: 22, category: "Unit 6: 關聯與傷亡", unitId: "Unit 6", desc: "C. Casualty", colorTheme: "purple", icon: "MapPin",
    sentences: [
      { id: "u6-7", type: "Link", text: "Remember one of our keynote speakers, Dr. Lin, is flying to Taiwan from Sweden?", plain: "Remember one of our keynote speakers, Dr. Lin, is flying to Taiwan from Sweden?", mean: "記得我們的主講人之一林博士，正要從瑞典飛來台灣嗎？", tip: "One of 連音 [wʌn-əv]。", traps: { "sweden": "Swe 發 [swi]。" } },
      { id: "u6-8", type: "Sad", text: "I am afraid not. He and his wife were doing some shopping for this business trip to Asia when the <span class='highlight-kw'>hijacked</span> truck drove into the department store.", plain: "I am afraid not. He and his wife were doing some shopping for this business trip to Asia when the hijacked truck drove into the department store.", mean: "恐怕不太好。當那輛被劫持的卡車衝進百貨公司時，他和太太正為了這趟亞洲出差在購物。", tip: "Hijacked truck 的 [t] (ed結尾) 接 [t] (truck)，只發一次強音 [t]。", traps: { "hijacked": "ed 發 [t]。" } },
      { id: "u6-9", type: "Dead", text: "Five people were killed including one <span class='highlight-kw'>British</span> man and a <span class='highlight-kw'>Belgian</span> woman.", plain: "Five people were killed including one British man and a Belgian woman.", mean: "五人遇害，其中包括一名英國男子和一名比利時婦女。", tip: "British man 注意 [ʃ] 接 [m] 的嘴型轉換。", traps: { "belgian": "g 發 [dʒ]。" } }
    ]
  },
  { id: 23, category: "Unit 6: 危機處理", unitId: "Unit 6", desc: "D. Crisis Mgmt", colorTheme: "teal", icon: "Settings",
    sentences: [
      { id: "u6-10", type: "React", text: "Oh, my goodness. They must have been <span class='highlight-kw'>terrified</span>. How are they now?", plain: "Oh, my goodness. They must have been terrified. How are they now?", mean: "噢，我的天啊。他們一定嚇壞了。他們現在還好嗎？", tip: "Must have 口語常縮讀為 [mʌst-əv]。", traps: { "terrified": "重音在 Ter。" } },
      { id: "u6-11", type: "Status", text: "I guess they are still <span class='highlight-kw'>struggling</span> to <span class='highlight-kw'>cope with</span> this <span class='highlight-kw'>traumatic</span> event.", plain: "I guess they are still struggling to cope with this traumatic event.", mean: "我想他們仍在努力平復這一創傷事件。", tip: "Struggling 的 [str] 不送氣。", traps: { "traumatic": "trau 發 [traʊ]。" } },
      { id: "u6-12", type: "Action", text: "Can you find someone to <span class='highlight-kw'>replace</span> him at such <span class='highlight-kw'>short notice</span>?", plain: "Can you find someone to replace him at such short notice?", mean: "妳能在這麼短的時間內找人接替他嗎？", tip: "Short notice 的 [t] 接 [n] 變成鼻腔爆破。", traps: { "replace": "p 要噴氣。" } },
      { id: "u6-13", type: "Idea", text: "Well...let me see. A couple of names have just <span class='highlight-kw'>crossed my mind</span>.", plain: "Well...let me see. A couple of names have just crossed my mind.", mean: "嗯...讓我想想。我剛想到幾個人名。", tip: "Crossed my 的 ed [t] 接 [m] 變得很輕。", traps: { "mind": "nd 鼻音。" } },
      { id: "u6-14", type: "Thanks", text: "I totally understand your <span class='highlight-kw'>frustration</span> and concern. Thank you so much. I <span class='highlight-kw'>owe</span> you one.", plain: "I totally understand your frustration and concern. Thank you so much. I owe you one.", mean: "我完全理解妳的挫折與擔憂。非常感謝，我欠你一個人情。", tip: "Owe you 連音 [o-ju]。", traps: { "frustration": "[str] 不送氣。" } }
    ]
  },
  // --- Unit 7 Sentences ---
  {
    id: 7, category: "Unit 7: 特殊需求", unitId: "Unit 7", desc: "Special Requests", colorTheme: "teal", icon: "Check",
    sentences: [
      { id: "u7-1", type: "Intro", text: "I'm calling to <span class='highlight-kw'>confirm</span> the <span class='highlight-kw'>arrangements</span> for the <span class='highlight-kw'>accommodations</span>.", plain: "I'm calling to confirm the arrangements for the accommodations.", mean: "我打來確認住宿的安排。", tip: "Calling to 的 g 省略。Confirm 的 m 閉嘴。", traps: { "confirm": "m 閉嘴練習。" } },
      { id: "u7-2", type: "Confirm", text: "You booked five double rooms and one <span class='highlight-kw'>connecting room</span>, right?", plain: "You booked five double rooms and one connecting room, right?", mean: "您預訂了五間雙人房和一間連通房，對嗎？", tip: "Connecting room 的 g 不發音。", traps: { "connecting": "g 不發音。" } },
      { id: "u7-3", type: "Req", text: "Do you have any <span class='highlight-kw'>special requests</span> for the dinner party?", plain: "Do you have any special requests for the dinner party?", mean: "晚餐派對有什麼特別的要求嗎？", tip: "Requests 結尾 sts 氣音要輕。", traps: { "request": "kw 嘴圓。" } },
      { id: "u7-4", type: "Detail", text: "Make sure that your <span class='highlight-kw'>chef</span> can prepare a <span class='highlight-kw'>variety of</span> dishes for different <span class='highlight-kw'>religious needs</span>.", plain: "Make sure that your chef can prepare a variety of dishes for different religious needs.", mean: "請確保您的廚師可以因應不同宗教需求來烹調各種料理。", tip: "Variety of 連音 [vəˋraɪətɪ-jəv]。", traps: { "chef": "發 [ʃ] 噓聲。" } },
      { id: "u7-5", type: "List", text: "Some clients are <span class='highlight-kw'>strict</span> Buddhist <span class='highlight-kw'>vegetarians</span> who can't have eggs, <span class='highlight-kw'>garlic</span>, or <span class='highlight-kw'>leeks</span>.", plain: "Some clients are strict Buddhist vegetarians who can't have eggs, garlic, or leeks.", mean: "有些客戶是嚴謹的佛教徒，不吃蛋、蒜或韭菜。", tip: "Garlic, leeks 注意標點停頓。", traps: { "strict": "str 不送氣。" } },
      { id: "u7-6", type: "Attend", text: "Any other religious needs that we have to <span class='highlight-kw'>attend to</span>?", plain: "Any other religious needs that we have to attend to?", mean: "還有其他我們需要注意的宗教需求嗎？", tip: "Attend to 的 d 省略。", traps: { "attend": "d 省略。" } },
      { id: "u7-7", type: "Islamic", text: "Five of our guests are <span class='highlight-kw'>Malays</span> who keep <span class='highlight-kw'>strict</span> <span class='highlight-kw'>Islamic</span> dietary laws.", plain: "Five of our guests are Malays who keep strict Islamic dietary laws.", mean: "有五位客人是馬來人，遵守嚴格的伊斯蘭飲食律法。", tip: "Islamic 注意 [m] 的閉嘴。", traps: { "islamic": "m 閉嘴。" } },
      { id: "u7-8", type: "Ban", text: "Do not serve anything containing <span class='highlight-kw'>pork</span>, <span class='highlight-kw'>blood</span>, or <span class='highlight-kw'>wine</span>.", plain: "Do not serve anything containing pork, blood, or wine.", mean: "不要提供任何含有豬肉、血或酒的餐點。", tip: "Blood 母音是 [ʌ]。Wine 結尾 n 不要閉嘴。", traps: { "blood": "唸 blad。" } },
      { id: "u7-9", type: "Suggest", text: "<span class='highlight-kw'>How about</span> some curry <span class='highlight-kw'>Laksa</span>? You <span class='highlight-kw'>can't go wrong with</span> it.", plain: "How about some curry Laksa? You can't go wrong with it.", mean: "來點咖哩叻沙如何？選它絕對不會錯。", tip: "How about 連音。Laksa 兩個 a 都要張大口。", traps: { "laksa": "a 張大口。" } },
      { id: "u7-10", type: "Promise", text: "I'll <span class='highlight-kw'>try my best</span> to <span class='highlight-kw'>see to it</span> that all your needs are satisfied.", plain: "I'll try my best to see to it that all your needs are satisfied.", mean: "我會盡力確認您的所有需求都得到滿足。", tip: "See to it 連讀 [si-tu-wɪt]。", traps: { "satisfied": "d 輕音。" } }
    ]
  },
  // --- Lesson 8 (New) ---
  { id: "L8-part1", unitId: "Lesson 8", category: "1. Discussing the Evening Plan", desc: "討論晚間行程", colorTheme: "purple", icon: "MessageCircle", sentences: [
    { id: "s8-1", plain: "Hi, Ken. What's up?", text: "Hi, Ken. <u>What's up</u>?", mean: "嗨，Ken。怎麼了？", tip: "What's up 必連音 [hwɑ-tsʌp]。", type: "Greeting" },
    { id: "s8-2", plain: "Are you going to the dinner reception this evening?", text: "Are you <u>going to</u> the <u>dinner reception</u> this evening?", mean: "你今晚會去參加歡迎晚宴嗎？", tip: "Going to 常縮讀為 gonna。Reception 重音第二音節。", type: "Question" },
    { id: "s8-3", plain: "Of course! That's the best part of a trade show.", text: "Of course! That's the best part of a <u>trade show</u>.", mean: "當然！那是貿易展最棒的部分。", tip: "Trade show 複合名詞重音在前。", type: "Statement" },
    { id: "s8-4", plain: "I'm looking forward to it.", text: "I'm <u>looking forward to</u> it.", mean: "我很期待呢。", tip: "forward 與 to 連讀，it 的 [t] 輕停。", type: "Statement" },
    { id: "s8-5", plain: "I can't wait to put on my cocktail dress.", text: "I <u>can't wait to</u> put on my <u>cocktail dress</u>.", mean: "我等不及要穿上我的雞尾酒禮服。", tip: "Can't wait to 的 t 省略。Cocktail 重音 cock。", type: "Statement" }
  ]},
  { id: "L8-part2", unitId: "Lesson 8", category: "2. Clarifying the Dress Code", desc: "確認著裝標準", colorTheme: "indigo", icon: "Filter", sentences: [
    { id: "s8-6", plain: "Cocktail dress? Is there a dress code?", text: "Cocktail dress? Is there a <u>dress code</u>?", mean: "雞尾酒禮服？有規定著裝標準嗎？", tip: "Dress code 結尾 s 接 k，舌頭快移。問句上揚。", type: "Question" },
    { id: "s8-7", plain: "It's not a black tie event, but it's definitely formal, though.", text: "It's not a <u>black tie event</u>, but it's <u>definitely formal</u>, though.", mean: "不至於要打黑領結，但也算是正式場合。", tip: "Black tie 連讀。Formal 的 [l] 頂上齒齦。", type: "Statement" },
    { id: "s8-8", plain: "Most registered exhibitors and potential buyers are going to be there.", text: "Most <u>registered exhibitors</u> and <u>potential buyers</u> are going to be there.", mean: "大多數參展商和潛在客戶都會出席。", tip: "Registered [d] 輕唸。Buyers 的 s 發 [z]。", type: "Statement" },
    { id: "s8-9", plain: "So, no jeans or T-shirts are allowed.", text: "So, no <u>jeans</u> or <u>T-shirts</u> are allowed.", mean: "因此，牛仔褲或 T-shirt 都不行。", tip: "Are allowed 連音 [ar-ə-laʊd]。", type: "Rule" }
  ]},
  { id: "L8-part3", unitId: "Lesson 8", category: "3. Expressing Personal Feelings", desc: "表達個人感受", colorTheme: "blue", icon: "User", sentences: [
    { id: "s8-10", plain: "I thought it's business casual.", text: "I <u>thought it's</u> <u>business casual</u>.", mean: "我以為是商務休閒場合。", tip: "Thought it's 連音 [θɔ-tɪts]。Casual 嘟嘴摩擦。", type: "Statement" },
    { id: "s8-11", plain: "I was planning to get there in this attire after the closing of the trade show.", text: "I was planning to get there in this <u>attire</u> after the <u>closing</u> of the trade show.", mean: "我本來打算展覽結束後直接穿這套去。", tip: "Attire 重音在後。Closing 的 s 發 [z]。", type: "Statement" },
    { id: "s8-12", plain: "I have been standing and engaging attendees for long hours.", text: "I have been <u>standing and engaging</u> <u>attendees</u> for long hours.", mean: "我已長時間站著接待來賓。", tip: "Standing and 的 d 可省。Attendees 重音字尾。", type: "Statement" },
    { id: "s8-13", plain: "I know it's hard to be comfortable and professional at the same time.", text: "I know it's hard to be <u>comfortable</u> and <u>professional</u> at the <u>same time</u>.", mean: "我知道要兼顧舒適與專業很難。", tip: "Same time 的 m 閉嘴後直發 t。Professional 重音 fesh。", type: "Statement" }
  ]},
  { id: "L8-part4", unitId: "Lesson 8", category: "4. Final Advice and Conclusion", desc: "最終建議與結論", colorTheme: "teal", icon: "Check", sentences: [
    { id: "s8-14", plain: "I can cover your shift if you need to go back to the hotel to dress up.", text: "I can <u>cover your shift</u> if you need to <u>go back</u> to the hotel to <u>dress up</u>.", mean: "若你需要回飯店打扮，我可以代班。", tip: "Dress up 連音 [drɛ-sʌp]。", type: "Offer" },
    { id: "s8-15", plain: "The reception begins at 7:00 p.m., right?", text: "The <u>reception</u> begins at 7:00 p.m., right?", mean: "晚宴七點開始對嗎？", tip: "Begins 的 s 發 [z]。Right 語氣上揚。", type: "Question" },
    { id: "s8-16", plain: "You still have two hours to freshen yourself up.", text: "You still have two hours to <u>freshen yourself up</u>.", mean: "你還有兩小時可以梳洗打扮。", tip: "Freshen yourself up 三字連讀，up 的 p 輕爆。", type: "Advice" },
    { id: "s8-17", plain: "If you hurry, you might be able to get a glass of sparkling wine before dinner.", text: "If you <u>hurry</u>, you might be able to get a glass of <u>sparkling wine</u> before dinner.", mean: "動作快點也許能趕上喝杯氣泡酒。", tip: "Sparkling 的 p 不送氣。Wine 結尾 [n] 頂上顎。", type: "Suggestion" },
    { id: "s8-18", plain: "Do I really have to go? John asked me to attend the dinner reception, but I'm really not into it.", text: "Do I really have to go? John asked me to <u>attend the dinner reception</u>, but I'm really <u>not into it</u>.", mean: "我真的得去嗎？John 叫我去，但我真的沒興趣。", tip: "Not into it 連讀 [nɑ-tɪn-tu-wɪt]。", type: "Complaint" },
    { id: "s8-19", plain: "Actually, I am not a people-person.", text: "Actually, I am not a <u>people-person</u>.", mean: "老實說，我不擅長交際。", tip: "People-person 重音都在第一音節。", type: "Statement" },
    { id: "s8-20", plain: "It's an order, not a suggestion. Remember, he's the boss.", text: "It's an <u>order</u>, not a <u>suggestion</u>. Remember, he's the boss.", mean: "這是命令不是建議。記住他是老闆。", tip: "Order 重音在前。Remember 嘴圓。", type: "Warning" },
    { id: "s8-21", plain: "You can say that again. Maybe it's a good opportunity to expand social networking for our business.", text: "<u>You can say that again</u>. Maybe it's a good <u>opportunity</u> to <u>expand</u> social networking for our business.", mean: "說得也是。也許這是擴展業務人脈的好機會。", tip: "You can say that again 表示強烈同意。", type: "Conclusion" }
  ]}
];

// --- 3. 介係詞資料庫 (Prepositions) ---
window.prepData = [
  // === Unit 1 ~ Unit 4 (保留原本的) ===
  { id: "p1", phrase: "help ... with", sentence: "Can you <span class='highlight-kw'>help</span> me <span class='highlight-kw'>with</span> my job interview?", plain: "Can you help me with my job interview?", mean: "協助某人處理某事", tip: "help 結尾 p 閉唇接 with。" },
  { id: "p2", phrase: "aligned with", sentence: "My experience is <span class='highlight-kw'>aligned with</span> the requirements.", plain: "My experience is aligned with the requirements.", mean: "與...一致", tip: "aligned d 輕讀接 with。" },
  { id: "p3", phrase: "focus on", sentence: "I <span class='highlight-kw'>focus on</span> my breathing.", plain: "I focus on my breathing.", mean: "專注於", tip: "focus on 連音 fo-kə-san。" },
  { id: "p4", phrase: "apply for", sentence: "I want to <span class='highlight-kw'>apply for</span> this position.", plain: "I want to apply for this position.", mean: "申請", tip: "apply y 接 for 連貫。" },
  { id: "p5", phrase: "brief ... on", sentence: "Shall I <span class='highlight-kw'>brief</span> you <span class='highlight-kw'>on</span> the booths?", plain: "Shall I brief you on the booths?", mean: "向...做簡報", tip: "brief f 咬唇接 on。" },
  { id: "p6", phrase: "in terms of", sentence: "Different <span class='highlight-kw'>in terms of</span> size.", plain: "Different in terms of size.", mean: "就...而言", tip: "terms s 接 of 變 zof。" },
  { id: "p7", phrase: "surrounded by", sentence: "<span class='highlight-kw'>Surrounded by</span> other booths.", plain: "Surrounded by other booths.", mean: "被...包圍", tip: "surrounded d 接 by。" },
  { id: "p8", phrase: "keen on", sentence: "Why so <span class='highlight-kw'>keen on</span> a peninsula booth?", plain: "Why so keen on a peninsula booth?", mean: "熱衷於", tip: "keen n 接 on 連音。" },
  { id: "p9", phrase: "go for", sentence: "We would <span class='highlight-kw'>go for</span> the peninsula booth.", plain: "We would go for the peninsula booth.", mean: "選擇", tip: "go 圓唇接 for。" },
  { id: "p10", phrase: "connected to", sentence: "Be <span class='highlight-kw'>connected to</span> this port.", plain: "Be connected to this port.", mean: "連接到", tip: "connected ed 接 to 合併。" },
  { id: "p11", phrase: "looking forward to", sentence: "I am <span class='highlight-kw'>looking forward to</span> the meeting.", plain: "I am looking forward to the meeting.", mean: "期待", tip: "to 弱化成 tə。" },

  // === Unit 5 ===
  { id: "p-u5-1", phrase: "done with", sentence: "Are you <span class='highlight-kw'>done with</span> the letter?", plain: "Are you done with the letter?", mean: "完成...", tip: "done n 接 with。" },
  { id: "p-u5-2", phrase: "reimbursed for", sentence: "Be <span class='highlight-kw'>reimbursed for</span> actual costs.", plain: "Be reimbursed for actual costs.", mean: "核銷...費用", tip: "d 接 f 輕讀。" },
  { id: "p-u5-3", phrase: "pay for", sentence: "We only <span class='highlight-kw'>pay for</span> economy class.", plain: "We only pay for economy class.", mean: "支付...費用", tip: "pay y 接 for。" },
  { id: "p-u5-4", phrase: "aware of", sentence: "Make sure they are <span class='highlight-kw'>aware of</span> this.", plain: "Make sure they are aware of this.", mean: "意識到", tip: "aware r 接 of 連音。" },
  { id: "p-u5-5", phrase: "incurred by", sentence: "Expenses <span class='highlight-kw'>incurred by</span> spouses.", plain: "Expenses incurred by spouses.", mean: "由...產生", tip: "incurred d 接 by。" },
  { id: "p-u5-6", phrase: "take care of", sentence: "<span class='highlight-kw'>Take care of</span> the expenses.", plain: "Take care of the expenses.", mean: "處理/負擔", tip: "care r 接 of。" },
  { id: "p-u5-7", phrase: "on his own", sentence: "Pay expenses <span class='highlight-kw'>on his own</span>.", plain: "Pay expenses on his own.", mean: "自行(負擔)", tip: "on 接 his 連音。" },
  { id: "p-u5-8", phrase: "when it comes to", sentence: "<span class='highlight-kw'>When it comes to</span> HSR...", plain: "When it comes to HSR...", mean: "說到...", tip: "comes z 接 to。" },

  // === Unit 6 ===
  { id: "p-u6-1", phrase: "have a minute", sentence: "Do you <span class='highlight-kw'>have a minute</span>?", plain: "Do you have a minute?", mean: "有空嗎", tip: "have v 接 a。" },
  { id: "p-u6-2", phrase: "middle of", sentence: "I'm in the <span class='highlight-kw'>middle of</span> something.", plain: "I'm in the middle of something.", mean: "正忙於...", tip: "middle l 接 of。" },
  { id: "p-u6-3", phrase: "get back to", sentence: "Can I <span class='highlight-kw'>get back to</span> you later?", plain: "Can I get back to you later?", mean: "稍後回覆", tip: "back k 接 to 停頓。" },
  { id: "p-u6-4", phrase: "talk to", sentence: "I need to <span class='highlight-kw'>talk to</span> you.", plain: "I need to talk to you.", mean: "和...談話", tip: "talk k 接 to。" },
  { id: "p-u6-5", phrase: "cope with", sentence: "Struggling to <span class='highlight-kw'>cope with</span> this.", plain: "Struggling to cope with this.", mean: "處理/應對", tip: "cope p 閉唇接 with。" },
  { id: "p-u6-6", phrase: "crossed my mind", sentence: "Names just <span class='highlight-kw'>crossed my mind</span>.", plain: "Names just crossed my mind.", mean: "掠過腦海(想到)", tip: "crossed d 接 m。" },
  { id: "p-u6-7", phrase: "owe you one", sentence: "I <span class='highlight-kw'>owe you one</span>.", plain: "I owe you one.", mean: "欠你一次人情", tip: "owe 接 you 連音。" },

  // === Unit 7 ===
  { id: "p-u7-1", phrase: "variety of", sentence: "Prepare a <span class='highlight-kw'>variety of</span> dishes.", plain: "Prepare a variety of dishes.", mean: "各式各樣的", tip: "variety 接 of 連音。" },
  { id: "p-u7-2", phrase: "attend to", sentence: "Needs that we have to <span class='highlight-kw'>attend to</span>.", plain: "Needs that we have to attend to.", mean: "照料/處理", tip: "attend d 省略接 to。" },
  { id: "p-u7-3", phrase: "how about", sentence: "<span class='highlight-kw'>How about</span> some Laksa?", plain: "How about some Laksa?", mean: "...如何？", tip: "how 接 about 連音。" },
  { id: "p-u7-4", phrase: "wrong with", sentence: "You can't go <span class='highlight-kw'>wrong with</span> it.", plain: "You can't go wrong with it.", mean: "選...不會錯", tip: "wrong ng 接 with。" },
  { id: "p-u7-5", phrase: "see to it", sentence: "I'll <span class='highlight-kw'>see to it</span> that needs are met.", plain: "I'll see to it that needs are met.", mean: "務必做到/確認", tip: "see 接 to 接 it 連貫。" },

  // === Lesson 8 (New) ===
  { id: "L8-p1", unitId: "Lesson 8", phrase: "look forward to", plain: "I look forward to it.", sentence: "I <b>look forward to</b> it.", mean: "期待 (to 為介係詞，後接名詞/Ving)", tip: "to 弱讀為 [tə]，連音順暢。" },
  { id: "L8-p2", unitId: "Lesson 8", phrase: "put on", plain: "I can't wait to put on my dress.", sentence: "I can't wait to <b>put on</b> my dress.", mean: "穿上 (強調動作)", tip: "Put 的 t 與 on 連音變 [pʊ-tɑn]。" },
  { id: "L8-p3", unitId: "Lesson 8", phrase: "dress up", plain: "You need to dress up for the party.", sentence: "You need to <b>dress up</b> for the party.", mean: "盛裝打扮", tip: "Dress 的 s 與 up 連音 [drɛ-sʌp]。" },
  { id: "L8-p4", unitId: "Lesson 8", phrase: "go back to", plain: "I need to go back to the hotel.", sentence: "I need to <b>go back to</b> the hotel.", mean: "回到...去", tip: "Back 的 k 輕頓，不需強力爆破。" },
  { id: "L8-p5", unitId: "Lesson 8", phrase: "not into it", plain: "I'm really not into it.", sentence: "I'm really <b>not into it</b>.", mean: "對...不感興趣/不熱衷", tip: "連讀技巧：[nɑ-tɪn-tu-wɪt]。" },
  { id: "L8-p6", unitId: "Lesson 8", phrase: "freshen up", plain: "Time to freshen yourself up.", sentence: "Time to <b>freshen yourself up</b>.", mean: "梳洗一番 (讓自己精神煥發)", tip: "Sh 音與 up 連接，流暢帶過。" }
];
</script>

<script type="text/babel">
const{useState,useEffect,useRef,useMemo,useCallback}=React;const{createPortal}=ReactDOM;
let globalRecognition=null;let globalTimeout=null;let globalUtterance=null;
const getSharedRecognition=()=>{if(!globalRecognition){const S=window.SpeechRecognition||window.webkitSpeechRecognition;if(S){globalRecognition=new S();globalRecognition.lang='en-US';globalRecognition.interimResults=false;globalRecognition.maxAlternatives=1;globalRecognition.continuous=false;}}return globalRecognition;};
const Icon=({children,className,...p})=><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...p}>{children}</svg>;
const Briefcase=(p)=><Icon {...p}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const BookOpen=(p)=><Icon {...p}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>;
const MessageCircle=(p)=><Icon {...p}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></Icon>;
const Link2=(p)=><Icon {...p}><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></Icon>;
const Play=(p)=><Icon {...p}><polygon points="5 3 19 12 5 21 5 3"/></Icon>;
const Turtle=(p)=><Icon {...p}><path d="m19 12-1.5 3"/><path d="M16.5 10.5 19 8"/><path d="m7 16 1.5 3"/><path d="M7.5 10.5 5 8"/><path d="M12 21a6 6 0 0 0 6-6v-2a6 6 0 0 0-6-6 6 6 0 0 0-6 6v2a6 6 0 0 0 6 6Z"/><path d="M12 21V9"/><path d="M12 21a4 4 0 0 1-4-4H6"/><path d="M12 21a4 4 0 0 0 4-4h2"/></Icon>;
const Volume2=(p)=><Icon {...p}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></Icon>;
const Info=(p)=><Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></Icon>;
const Trash2=(p)=><Icon {...p}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></Icon>;
const X=(p)=><Icon {...p}><path d="M18 6 6 18"/><path d="m6 6 18 18"/></Icon>;
const Save=(p)=><Icon {...p}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></Icon>;
const Lightbulb=(p)=><Icon {...p}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5 0-3-2.5-5.5-5.5-5.5S7 5 7 8c0 1.5.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></Icon>;
const Feather=(p)=><Icon {...p}><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" x2="2" y1="8" y2="22"/><line x1="17.5" x2="9" y1="15" y2="15"/></Icon>;
const Layout=(p)=><Icon {...p}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></Icon>;
const MapPin=(p)=><Icon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const Zap=(p)=><Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const Mic=(p)=><Icon {...p}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></Icon>;
const Check=(p)=><Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const AlertCircle=(p)=><Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></Icon>;
const MousePointerClick=(p)=><Icon {...p}><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></Icon>;
const Filter=(p)=><Icon {...p}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></Icon>;
const Settings=(p)=><Icon {...p}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></Icon>;
const Wifi=(p)=><Icon {...p}><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></Icon>;
const Eye=(p)=><Icon {...p}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></Icon>;
const EyeOff=(p)=><Icon {...p}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></Icon>;
const Scissors=(p)=><Icon {...p}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></Icon>;
const Loader2=(p)=><Icon {...p}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></Icon>;
const CreditCard=(p)=><Icon {...p}><rect width="20" height="14" x="2" y="5" rx="2" ry="2"/><line x1="2" x2="22" y1="10" y2="10"/></Icon>;
const AlertTriangle=(p)=><Icon {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></Icon>;
const Repeat=(p)=><Icon {...p}><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></Icon>;
const PauseCircle=(p)=><Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/></Icon>;
const IconMap={Briefcase,BookOpen,MessageCircle,Link2,Play,Turtle,Volume2,Info,Trash2,X,Save,Lightbulb,Feather,Layout,MapPin,Zap,Mic,Check,AlertCircle,MousePointerClick,Filter,Settings,Wifi,Eye,EyeOff,Scissors,Loader2,CreditCard,AlertTriangle,Repeat,PauseCircle};
const speakText=(t,r=0.85,c=null)=>{window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);globalUtterance=u;u.lang='en-US';u.rate=r;if(c){u.onend=(e)=>{c(e);};}u.onerror=(e)=>{console.error("SpeechSynthesis Error:",e);if(c)c(e);};window.speechSynthesis.speak(u);};
const cleanText=(t)=>{if(!t)return"";return t.replace(/<[^>]*>/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~?]/g,"").replace(/\s{2,}/g," ").trim().toLowerCase();};
const renderChunkedText=(h,s)=>{if(!s)return<InteractiveSentence htmlContent={h}/>;const p=h.split(/(<[^>]+>)/g);const c=p.map((x)=>{if(x.startsWith('<'))return x;return x.replace(/([,.;?])/g,"$1<span class='chunk-separator'>|</span>").replace(/\s(and|but|or|because|that|which|where|when)\s/gi," <span class='chunk-separator'>|</span> $1 ");});return<InteractiveSentence htmlContent={c.join('')}/>;};
const InteractiveSentence=({htmlContent,isBlindMode})=>{const regex=/(<span class='[^']+'>.*?<\/span>)|([^<]+)/g;const parts=htmlContent.match(regex)||[];const handleWordClick=(e,w)=>{e.stopPropagation();const cw=w.replace(/[.,?!:;|]/g,'');if(cw.trim())speakText(cw,0.75);};return(<span className={`leading-relaxed transition-all duration-500 ${isBlindMode?'blind-mode-blur':''}`}>{parts.map((p,i)=>{if(p.startsWith('<span')){const cm=p.match(/class='([^']+)'/);const cn=cm?cm[1]:'';const ctm=p.match(/>(.*?)</);const c=ctm?ctm[1]:'';if(cn.includes('chunk-separator'))return<span key={i} className={cn} dangerouslySetInnerHTML={{__html:c}}></span>;const ws=c.split(' ');return(<span key={i} className={cn}>{ws.map((w,wi)=>(<React.Fragment key={wi}><span className="cursor-pointer hover:bg-yellow-200 hover:text-black rounded px-0.5 transition-colors active:scale-95 inline-block" onClick={(e)=>handleWordClick(e,w)}>{w}</span>{wi<ws.length-1&&' '}</React.Fragment>))}</span>);}else{const ws=p.split(' ');return<span key={i}>{ws.map((w,wi)=><React.Fragment key={wi}><span className="cursor-pointer hover:bg-yellow-200 hover:text-black rounded px-0.5 transition-colors active:scale-95 inline-block" onClick={(e)=>handleWordClick(e,w)}>{w}</span>{wi<ws.length-1&&' '}</React.Fragment>)}</span>;}})}</span>);};
const RenderComparison=({feedback})=>{if(!feedback||!feedback.spokenText)return null;const tw=cleanText(feedback.targetText).split(' ');const sw=cleanText(feedback.spokenText).split(' ');return(<div className="mt-2 text-sm bg-white p-3 rounded border border-gray-200 shadow-inner">{feedback.advice&&(<div className="mb-2 pb-2 border-b border-gray-100 bg-yellow-50 p-2 rounded"><div className="text-yellow-700 text-xs font-bold mb-1 flex items-center"><Lightbulb className="w-3 h-3 mr-1"/>教練的發音診斷：</div><div className="text-gray-700 text-sm font-medium">{feedback.advice}</div></div>)}<div className="mb-1 text-gray-500 text-xs">辨識結果比對 (嚴格模式)：</div><div className="mb-2">{tw.map((w,i)=>{const m=sw.some(x=>x===w||(x.length>3&&(x.includes(w)||w.includes(x))));return<span key={i} className={`mr-1 ${m?'word-correct':'word-missed'}`}>{w}</span>;})}</div><div className="mt-1 text-xs text-gray-400">(我聽到: <span className="text-gray-600 italic">{feedback.spokenText}</span>)</div></div>);};
const MobileFeedbackToast=({feedback,showDetails,toggleDetails,onClose})=>{if(!feedback)return null;const pr=document.getElementById('feedback-portal-root');if(!pr)return null;return createPortal(<div className={`md:hidden fixed bottom-0 left-0 right-0 z-[99999] p-4 pb-8 rounded-t-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.3)] border-t transition-transform duration-300 animate-slide-up-bounce bg-white ${feedback.type==='success'?'border-green-400 bg-green-50 ring-4 ring-green-100':feedback.type==='warning'?'border-yellow-300 bg-yellow-50':feedback.type==='error'?'border-red-300 bg-red-50':'border-blue-300 bg-blue-50'}`}><div className="flex items-center justify-between gap-2 mb-2"><div className="flex items-center gap-2 overflow-hidden">{feedback.type==='success'&&<Check className="w-6 h-6 text-green-600 flex-shrink-0 animate-bounce"/>}{feedback.type==='warning'&&<AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0"/>}{feedback.type==='error'&&<X className="w-6 h-6 text-red-600 flex-shrink-0"/>}<span className={`font-bold text-lg truncate ${feedback.type==='success'?'text-green-800':'text-slate-800'}`}>{feedback.text} {feedback.score!==undefined&&`(${feedback.score}%)`}</span></div><div className="flex gap-2 flex-shrink-0">{feedback.spokenText&&<button onClick={toggleDetails} className="px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-gray-100 active:bg-gray-100 transition-all text-slate-700">{showDetails?'隱藏':'詳情'}</button>}<button onClick={onClose} className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 active:bg-gray-100 transition-all"><X className="w-5 h-5"/></button></div></div>{showDetails&&<div className="max-h-[50vh] overflow-y-auto overscroll-contain pb-2 mt-3 bg-white/50 rounded-xl p-2 animate-fade-in"><RenderComparison feedback={feedback}/></div>}</div>,pr);};
const VoiceEvaluatorButton=({id,status,feedback,showDetails,toggleDetails,onRecord})=>{let bc="bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-blue-600";let ic=<Mic className="w-5 h-5"/>;if(status==='init'){bc="bg-yellow-100 text-yellow-600 border-yellow-300";ic=<Loader2 className="w-5 h-5 animate-spin-slow"/>;}else if(status==='listening'){bc="bg-red-500 text-white border-red-500 animate-pulse-red";ic=<div className="text-xs font-bold font-sans">GO!</div>;}return(<div className="relative inline-block ml-2 text-left"><button onClick={(e)=>{e.stopPropagation();onRecord(id);}} className={`flex items-center justify-center w-10 h-10 rounded-full border shadow-sm transition-all ${bc}`} title="點擊開始錄音">{ic}</button>{status==='init'&&<div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] text-yellow-600 font-bold whitespace-nowrap">準備中...</div>}{feedback&&(<div className={`hidden md:block absolute top-full right-0 mt-2 p-3 rounded-lg text-sm font-bold whitespace-normal min-w-[300px] z-30 shadow-xl border animate-fade-in ${feedback.type==='success'?'bg-green-50 text-green-800 border-green-200':feedback.type==='warning'?'bg-yellow-50 text-yellow-800 border-yellow-200':feedback.type==='error'?'bg-red-50 text-red-800 border-red-200':'bg-blue-50 text-blue-800 border-blue-200'}`}><div className="flex items-center justify-between gap-2"><div className="flex items-center gap-2">{feedback.type==='success'&&<Check className="w-4 h-4 text-green-600"/>}{feedback.type==='warning'&&<AlertCircle className="w-4 h-4 text-yellow-600"/>}{feedback.type==='error'&&<X className="w-4 h-4 text-red-600"/>}<span className="font-medium">{feedback.text} {feedback.score!==undefined&&`(${feedback.score}%)`}</span></div>{feedback.spokenText&&<button onClick={(e)=>{e.stopPropagation();toggleDetails();}} className="text-xs underline opacity-70 hover:opacity-100">{showDetails?'隱藏':'詳情'}</button>}</div>{showDetails&&<RenderComparison feedback={feedback}/>}</div>)}</div>);};
const VocabCard=({item,colorTheme})=>{const th={blue:{bg:"bg-blue-50",border:"border-blue-200",text:"text-blue-800",badge:"bg-blue-100 text-blue-700",icon:"text-blue-500",btn:"bg-blue-600 hover:bg-blue-700"},green:{bg:"bg-green-50",border:"border-green-200",text:"text-green-800",badge:"bg-green-100 text-green-700",icon:"text-green-500",btn:"bg-green-600 hover:bg-green-700"},amber:{bg:"bg-amber-50",border:"border-amber-200",text:"text-amber-800",badge:"bg-amber-100 text-amber-700",icon:"text-amber-500",btn:"bg-amber-600 hover:bg-amber-700"},purple:{bg:"bg-purple-50",border:"border-purple-200",text:"text-purple-800",badge:"bg-purple-100 text-purple-700",icon:"text-purple-500",btn:"bg-purple-600 hover:bg-purple-700"},teal:{bg:"bg-teal-50",border:"border-teal-200",text:"text-teal-800",badge:"bg-teal-100 text-teal-700",icon:"text-teal-500",btn:"bg-teal-600 hover:bg-teal-700"},indigo:{bg:"bg-indigo-50",border:"border-indigo-200",text:"text-indigo-800",badge:"bg-indigo-100 text-indigo-700",icon:"text-indigo-500",btn:"bg-indigo-600 hover:bg-indigo-700"},orange:{bg:"bg-orange-50",border:"border-orange-200",text:"text-orange-800",badge:"bg-orange-100 text-orange-700",icon:"text-orange-500",btn:"bg-orange-600 hover:bg-orange-700"},red:{bg:"bg-red-50",border:"border-red-200",text:"text-red-800",badge:"bg-red-100 text-red-700",icon:"text-red-500",btn:"bg-red-600 hover:bg-red-700"}};const t=th[colorTheme]||th.blue;return(<div onClick={()=>speakText(item.word)} className={`relative flex flex-col justify-between p-5 rounded-xl border-2 ${t.bg} ${t.border} shadow-sm hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1 h-full`}><div className="flex justify-between items-start mb-3"><div><h3 className="text-xl font-bold text-gray-800 group-hover:text-black tracking-wide">{item.word}</h3><span className="text-sm font-medium text-gray-600 block mt-1">{item.mean}</span></div><button className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-110 ${t.btn}`}><Volume2 className="w-4 h-4"/></button></div><div className="space-y-3 mt-auto"><div className={`inline-block px-2 py-1 rounded-md text-xs font-bold font-mono ${t.badge} opacity-90`}>{item.kk}</div><div className="text-xs text-gray-600 flex items-start bg-white/60 p-2 rounded-lg backdrop-blur-sm relative"><Info className={`w-3 h-3 mr-1.5 mt-0.5 flex-shrink-0 ${t.icon}`}/><span className="flex-1 leading-snug">{item.tip}</span></div></div></div>);};
const StartScreen=({onStart})=>(<div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col overflow-y-auto"><div className="min-h-full flex flex-col items-center justify-center p-4"><div className="max-w-md w-full bg-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700 text-center relative overflow-hidden my-auto"><div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div><div className="w-16 h-16 md:w-20 md:h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-blue-400 ring-4 ring-slate-600/50"><i className="fas fa-headset text-3xl md:text-4xl"></i></div><h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white">商務英語會話特訓</h1><p className="text-slate-400 mb-6 text-sm leading-relaxed">為了確保最佳的練習體驗，我們需要先取得您的麥克風權限。<br/><br/><span className="text-blue-300 font-medium bg-blue-900/30 px-2 py-1 rounded">點擊一次允許，全程無縫練習</span></p><button onClick={onStart} className="group w-full relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-blue-500/30 active:scale-95"><span>開啟麥克風並開始</span><div className="ml-3 flex items-center gap-1 h-4"><div className="wave-bar"></div><div className="wave-bar"></div><div className="wave-bar"></div></div></button><p className="mt-6 text-xs text-slate-500"><i className="fas fa-shield-alt mr-1"></i> 您的隱私受保護，錄音僅在瀏覽器內處理</p></div></div></div>);
const InterviewPracticeApp=()=>{const[hasStarted,setHasStarted]=useState(false);const[activeTab,setActiveTab]=useState('vocab');const[selectedUnit,setSelectedUnit]=useState('All');const[isBlindMode,setIsBlindMode]=useState(false);const[showChunks,setShowChunks]=useState(false);const[recState,setRecState]=useState({activeId:null,status:'idle',feedbackMap:{}});const[showDetailsMap,setShowDetailsMap]=useState({});const[isLooping,setIsLooping]=useState(false);const[currentPlayingIndex,setCurrentPlayingIndex]=useState(-1);const loopQueueRef=useRef([]);const isLoopingRef=useRef(false);const handleStartApp=async()=>{const r=getSharedRecognition();if(r){try{r.start();setTimeout(()=>{r.stop();setHasStarted(true);},100);}catch(e){console.log("Auto start",e);setHasStarted(true);}}else{alert("瀏覽器不支援語音");setHasStarted(true);}};const stopGlobalRecording=()=>{if(globalRecognition){try{globalRecognition.stop();}catch(e){}}if(globalTimeout){clearTimeout(globalTimeout);globalTimeout=null;}};const handleStartRecording=(id,targetText,diagnosticsConfig={})=>{stopGlobalRecording();if(isLooping){setIsLooping(false);isLoopingRef.current=false;setCurrentPlayingIndex(-1);window.speechSynthesis.cancel();}if(recState.activeId===id&&(recState.status==='listening'||recState.status==='init')){setRecState(p=>({...p,status:'idle',activeId:null}));return;}const r=getSharedRecognition();if(!r){alert("No Rec");return;}setRecState(p=>({...p,activeId:id,status:'init',feedbackMap:{...p.feedbackMap,[id]:null}}));setShowDetailsMap(p=>({...p,[id]:false}));r.onstart=()=>{setRecState(p=>({...p,status:'listening'}));if(globalTimeout)clearTimeout(globalTimeout);globalTimeout=setTimeout(()=>{try{r.stop();}catch(e){}},20000);};r.onresult=(e)=>{if(globalTimeout)clearTimeout(globalTimeout);const sp=e.results[0][0].transcript;processResult(id,targetText,sp,diagnosticsConfig);};r.onerror=(e)=>{if(globalTimeout)clearTimeout(globalTimeout);if(e.error==='aborted')return;let m='無法辨識';if(e.error==='not-allowed')m='請檢查麥克風';setRecState(p=>({...p,status:'idle',feedbackMap:{...p.feedbackMap,[id]:{type:'error',text:m}}}));};r.onend=()=>{setRecState(p=>{if(p.activeId===id)return{...p,status:'idle'};return p;});};try{r.start();}catch(e){try{r.stop();setTimeout(()=>r.start(),100);}catch(er){setRecState(p=>({...p,status:'idle'}));}}};const processResult=(id,tt,sp,dc)=>{const tc=cleanText(tt);const sc=cleanText(sp);const tw=tc.split(' ');const sw=sc.split(' ');const fw=['a','an','the','to','of','in','on','at','is','are','was','were','be','it','that','this','and','but','or','for','with','as'];let mc=0;let missingCW=[];let missingFW=[];tw.forEach(w=>{if(sw.some(x=>x===w||(x.length>3&&(x.includes(w)||w.includes(x))))){mc++;}else{if(fw.includes(w))missingFW.push(w);else missingCW.push(w);}});let acc=0;if(tw.length>0)acc=Math.round((mc/tw.length)*100);if(tw.length<=3){if(sc===tc)acc=100;else acc=(sc===tc)?100:(acc>90?90:acc);}let ft='error';let fm=`請調整發音`;let am="";let tf=false;if(dc&&dc.traps){Object.keys(dc.traps).forEach(tk=>{if(sc.includes(tk.toLowerCase())){am=dc.traps[tk];tf=true;}});}if(!tf&&acc<100){if(missingCW.length>0){am=`關鍵字 "${missingCW[0]}" 不清楚。`;}else if(missingFW.length>0){am=`連音要注意 (如 ${missingFW[0]})。`;}else{am=`語調請再加強。`;}}if(acc===100){ft='success';fm=`完美無瑕！`;if(navigator.vibrate)navigator.vibrate(50);}else if(acc>=90){ft='success';fm=`很好，順暢`;}else if(acc>=80){ft='warning';fm=`不錯，注意細節`;}else if(acc>=60){ft='warning';fm=`語調有誤`;}else{ft='error';fm=`請放慢速度`;}setRecState(p=>({...p,status:'idle',feedbackMap:{...p.feedbackMap,[id]:{type:ft,text:fm,score:acc,spokenText:sp,targetText:tt,advice:am}}}));setShowDetailsMap(p=>({...p,[id]:true}));};const toggleDetails=(id)=>{setShowDetailsMap(p=>({...p,[id]:!p[id]}));};const closeActiveFeedback=()=>{if(recState.activeId){setRecState(p=>({...p,feedbackMap:{...p.feedbackMap,[p.activeId]:null}}));}};const availableUnits=useMemo(()=>{const u=new Set();vocabData.forEach(s=>s.unitId&&u.add(s.unitId));sentenceData.forEach(s=>s.unitId&&u.add(s.unitId));return['All',...Array.from(u).sort()];},[]);const filteredVocabSections=vocabData.filter(s=>selectedUnit==='All'||s.unitId===selectedUnit);const filteredInterviewData=sentenceData.filter(s=>selectedUnit==='All'||s.unitId===selectedUnit);const toggleLoop=()=>{if(isLooping){setIsLooping(false);isLoopingRef.current=false;setCurrentPlayingIndex(-1);window.speechSynthesis.cancel();}else{const q=[];let gic=0;filteredInterviewData.forEach(s=>{s.sentences.forEach(i=>{q.push({id:i.id,text:i.plain,globalIndex:gic});gic++;});});loopQueueRef.current=q;if(q.length>0){setIsLooping(true);isLoopingRef.current=true;playNextInLoop(0);}}};const playNextInLoop=(idx)=>{if(!isLoopingRef.current)return;if(idx>=loopQueueRef.current.length){playNextInLoop(0);return;}const item=loopQueueRef.current[idx];setCurrentPlayingIndex(idx);speakText(item.text,0.85,()=>{if(isLoopingRef.current){playNextInLoop(idx+1);}});};const handleManualPlay=(t,r)=>{if(isLooping){setIsLooping(false);isLoopingRef.current=false;setCurrentPlayingIndex(-1);loopQueueRef.current=[];}speakText(t,r);};useEffect(()=>{if(isLooping){setIsLooping(false);isLoopingRef.current=false;setCurrentPlayingIndex(-1);window.speechSynthesis.cancel();loopQueueRef.current=[];}},[activeTab,selectedUnit]);const themes={blue:{bg:"bg-blue-50",border:"border-blue-200",title:"text-blue-800",typeTag:"bg-blue-600 text-white",btn:"bg-blue-600 hover:bg-blue-700",icon:"text-blue-600"},green:{bg:"bg-green-50",border:"border-green-200",title:"text-green-800",typeTag:"bg-green-600 text-white",btn:"bg-green-600 hover:bg-green-700",icon:"text-green-600"},amber:{bg:"bg-amber-50",border:"border-amber-200",title:"text-amber-800",typeTag:"bg-amber-600 text-white",btn:"bg-amber-600 hover:bg-amber-700",icon:"text-amber-600"},purple:{bg:"bg-purple-50",border:"border-purple-200",title:"text-purple-800",typeTag:"bg-purple-600 text-white",btn:"bg-purple-600 hover:bg-purple-700",icon:"text-purple-600"},teal:{bg:"bg-teal-50",border:"border-teal-200",title:"text-teal-800",typeTag:"bg-teal-600 text-white",btn:"bg-teal-600 hover:bg-teal-700",icon:"text-teal-600"},indigo:{bg:"bg-indigo-50",border:"border-indigo-200",title:"text-indigo-800",typeTag:"bg-indigo-600 text-white",btn:"bg-indigo-600 hover:bg-indigo-700",icon:"text-indigo-600"},orange:{bg:"bg-orange-50",border:"border-orange-200",title:"text-orange-800",typeTag:"bg-orange-600 text-white",btn:"bg-orange-600 hover:bg-orange-700",icon:"text-orange-600"},red:{bg:"bg-red-50",border:"border-red-200",title:"text-red-800",typeTag:"bg-red-600 text-white",btn:"bg-red-600 hover:bg-red-700",icon:"text-red-600"}};if(!hasStarted)return<StartScreen onStart={handleStartApp}/>;const activeFeedback=recState.activeId?recState.feedbackMap[recState.activeId]:null;const isShowDetails=recState.activeId?showDetailsMap[recState.activeId]:false;return(<div id="app-container" className="relative min-h-screen"><div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in pb-24 md:pb-8"><header className="text-center mb-6"><div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4"><Briefcase className="w-8 h-8 text-blue-600 mr-2"/><span className="text-gray-500 font-medium">商務英語口說教練</span></div><h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">商務英語會話 <span className="text-blue-600">實戰特訓班</span></h1></header><div className="flex justify-center mb-6"><div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 flex items-center space-x-2"><Filter className="w-5 h-5 text-gray-500"/><span className="text-sm font-bold text-gray-700">選擇單元：</span><select value={selectedUnit} onChange={(e)=>setSelectedUnit(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none font-medium"><option value="All">顯示全部課程 (Show All)</option>{availableUnits.filter(u=>u!=='All').map(u=><option key={u} value={u}>{u}</option>)}</select></div></div><div className="flex justify-center mb-10"><div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 flex overflow-x-auto"><button onClick={()=>setActiveTab('vocab')} className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center whitespace-nowrap ${activeTab==='vocab'?'bg-blue-600 text-white shadow-md':'text-gray-500 hover:bg-gray-50'}`}><BookOpen className="w-4 h-4 mr-2"/>1. 單字特訓</button><button onClick={()=>setActiveTab('sentences')} className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center whitespace-nowrap ${activeTab==='sentences'?'bg-green-600 text-white shadow-md':'text-gray-500 hover:bg-gray-50'}`}><MessageCircle className="w-4 h-4 mr-2"/>2. 句型跟讀 (V15)</button><button onClick={()=>setActiveTab('prepositions')} className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center whitespace-nowrap ${activeTab==='prepositions'?'bg-orange-600 text-white shadow-md':'text-gray-500 hover:bg-gray-50'}`}><Link2 className="w-4 h-4 mr-2"/>3. 介係詞用法</button></div></div>{activeTab==='sentences'&&(<div className="sticky top-2 z-20 mb-6 flex justify-center gap-2 flex-wrap"><button onClick={()=>setShowChunks(!showChunks)} className={`px-4 py-2 rounded-full shadow-md text-sm font-bold transition-all flex items-center ${showChunks?'bg-indigo-600 text-white':'bg-white text-gray-600 border border-gray-200'}`}><Scissors className="w-4 h-4 mr-1"/>{showChunks?'隱藏斷句':'斷句輔助'}</button><button onClick={()=>setIsBlindMode(!isBlindMode)} className={`px-4 py-2 rounded-full shadow-md text-sm font-bold transition-all flex items-center ${isBlindMode?'bg-black text-white':'bg-white text-gray-600 border border-gray-200'}`}>{isBlindMode?<EyeOff className="w-4 h-4 mr-1"/>:<Eye className="w-4 h-4 mr-1"/>}{isBlindMode?'盲聽模式 ON':'遮蔽文字'}</button><button onClick={toggleLoop} className={`px-4 py-2 rounded-full shadow-md text-sm font-bold transition-all flex items-center ${isLooping?'bg-purple-600 text-white animate-pulse':'bg-white text-gray-600 border border-gray-200'}`}>{isLooping?<PauseCircle className="w-4 h-4 mr-1"/>:<Repeat className="w-4 h-4 mr-1"/>}{isLooping?'循環播放中...':'循環播放整課'}</button></div>)}{activeTab==='vocab'&&(filteredVocabSections.length>0?<div className="space-y-8">{filteredVocabSections.map((s,i)=>{const SI=IconMap[s.icon]||Briefcase;return(<section key={i}><div className="flex items-center mb-4 ml-1"><div className={`p-2 rounded-lg mr-3 bg-${s.color}-100 text-${s.color}-600`}><SI className="w-5 h-5"/></div><div><h2 className="text-xl font-bold text-gray-800">{s.title}</h2><p className="text-sm text-gray-500">{s.desc}</p></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{s.words.map((w,wi)=><VocabCard key={wi} item={w} colorTheme={s.color}/>)}</div></section>);})}</div>:<div className="text-center py-10 text-gray-400 bg-gray-100 rounded-xl">無資料</div>)}{activeTab==='sentences'&&(filteredInterviewData.length>0?<div className="space-y-8"><div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800 flex flex-col md:flex-row items-start md:items-center justify-between"><div className="flex items-start mb-2 md:mb-0"><MousePointerClick className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"/><span><strong>專業語感模式：</strong> 100% 正確才是合格。AI 教練會自動分辨關鍵字與虛字，給出最符合商務溝通的建議！</span></div></div>{filteredInterviewData.map((s,si)=>{const th=themes[s.colorTheme]||themes.blue;const SI=IconMap[s.icon]||MessageCircle;let prevCnt=0;for(let i=0;i<si;i++)prevCnt+=filteredInterviewData[i].sentences.length;return(<section key={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100"><div className={`px-6 py-4 border-b ${th.border} ${th.bg} flex items-center justify-between rounded-t-2xl`}><div><h2 className={`text-xl font-bold ${th.title} flex items-center`}>{s.category}</h2><p className="text-sm text-gray-600 mt-1 opacity-90">{s.desc}</p></div><SI className={`w-6 h-6 ${th.icon} opacity-50`}/></div><div className="divide-y divide-gray-50">{s.sentences.map((it,idx)=>{const gIdx=prevCnt+idx;const isP=isLooping&&currentPlayingIndex===gIdx;return(<div key={it.id} onClick={()=>handleManualPlay(it.plain,0.85)} className={`group p-6 hover:bg-gray-50 transition-colors cursor-pointer relative ${isP?'playing-card':''}`}><div className="flex flex-col md:flex-row md:items-start justify-between gap-4"><div className="flex-1"><span className={`inline-block text-xs font-bold px-2 py-0.5 rounded mb-2 ${th.typeTag} opacity-80`}>{it.type}</span><div className={`text-xl md:text-2xl text-gray-800 font-serif-en mb-3 ${th.title}`}>{renderChunkedText(it.text,showChunks)}</div><p className={`text-gray-600 font-medium text-sm md:text-base mb-3 transition-opacity ${isBlindMode?'opacity-0 group-hover:opacity-100':'opacity-100'}`}>{it.mean}</p><div className={`inline-flex items-start text-xs md:text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg leading-relaxed transition-opacity ${isBlindMode?'opacity-0 group-hover:opacity-100':'opacity-100'}`}><Info className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0"/><span>{it.tip}</span></div></div><div className="flex items-center space-x-2 flex-shrink-0 self-end md:self-center mt-4 md:mt-0 opacity-80 group-hover:opacity-100 transition-opacity"><VoiceEvaluatorButton id={it.id} status={recState.activeId===it.id?recState.status:'idle'} feedback={recState.feedbackMap[it.id]} showDetails={showDetailsMap[it.id]} toggleDetails={()=>toggleDetails(it.id)} onRecord={()=>handleStartRecording(it.id,it.plain,{intonation:it.intonation,traps:it.traps})}/><button onClick={(e)=>{e.stopPropagation();handleManualPlay(it.plain,0.75);}} className="flex items-center justify-center h-10 px-3 rounded-full bg-white border border-gray-200 text-green-600 hover:bg-green-50 hover:border-green-200 hover:scale-105 transition-all shadow-sm text-xs font-bold" title="慢速"><Turtle className="w-4 h-4 mr-1"/> 0.75x</button><button onClick={(e)=>{e.stopPropagation();handleManualPlay(it.plain,1.0);}} className={`flex items-center justify-center h-10 px-3 rounded-full text-white hover:scale-105 transition-all shadow-md text-xs font-bold ${th.btn}`} title="原速"><Play className="w-4 h-4 mr-1"/> 1.0x</button></div></div></div>);})}</div></section>);})}</div>:<div className="text-center py-10 text-gray-400 bg-gray-100 rounded-xl">無資料</div>)}{activeTab==='prepositions'&&(prepData.length>0?<div className="space-y-6"><div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-sm mb-6"><div className="flex items-start gap-4"><div className="bg-orange-100 p-3 rounded-full text-orange-600"><Link2 className="w-8 h-8"/></div><div><h2 className="text-xl font-bold text-orange-900 mb-2">為什麼介係詞很重要？</h2><p className="text-orange-800 text-sm leading-relaxed">介係詞是單字間的「強力膠」。點擊下方卡片，注意粗體字的「連音」！</p></div></div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{prepData.map((it)=>(<div key={it.id} onClick={()=>speakText(it.plain)} className="bg-white rounded-xl shadow-sm border border-orange-100 p-5 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer group flex flex-col"><div className="flex justify-between items-start mb-3"><span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full">{it.phrase}</span><div className="flex items-center gap-2"><VoiceEvaluatorButton id={it.id} status={recState.activeId===it.id?recState.status:'idle'} feedback={recState.feedbackMap[it.id]} showDetails={showDetailsMap[it.id]} toggleDetails={()=>toggleDetails(it.id)} onRecord={()=>handleStartRecording(it.id,it.plain)}/><Volume2 className="w-5 h-5 text-gray-300 group-hover:text-orange-500 transition-colors"/></div></div><div className="mb-4 flex-grow"><h3 className="text-lg md:text-xl text-gray-800 font-serif-en mb-2 leading-relaxed"><InteractiveSentence htmlContent={it.sentence} isBlindMode={false}/></h3><p className="text-gray-500 text-sm font-medium">{it.mean}</p></div><div className="mt-auto pt-3 border-t border-gray-50"><div className="flex items-start text-xs text-orange-600 bg-orange-50 p-2 rounded-lg"><Zap className="w-3 h-3 mr-1.5 mt-0.5 flex-shrink-0"/>{it.tip}</div></div></div>))}</div></div>:<div className="text-center py-10 text-gray-400 bg-gray-100 rounded-xl">無資料</div>)}</div><MobileFeedbackToast feedback={activeFeedback} showDetails={isShowDetails} toggleDetails={()=>toggleDetails(recState.activeId)} onClose={closeActiveFeedback}/></div>);};const root=ReactDOM.createRoot(document.getElementById('root'));root.render(<InterviewPracticeApp/>);
</script>
</body>
</html>
