// ===================== 1. 高分句型库（扩充版） =====================
const sentenceList = [
    "1. 主语从句：What matters most in daily life is to keep a positive attitude.",
    "2. 定语从句：People who stick to their dreams are more likely to achieve success.",
    "3. 倒装句：Only in this way can we solve the problem effectively.",
    "4. 强调句：It is teamwork that helps us overcome various difficulties.",
    "5. 非谓语结构：Having realized the importance of reading, more students form reading habits.",
    "6. 让步状语从句：Although online learning is convenient, it cannot replace classroom teaching.",
    "7. 对比句型：Some people prefer outdoor activities, while others enjoy staying indoors.",
    "8. 原因句型：The reason why many students take part-time jobs is to gain social experience.",
    "9. 结果句型：More and more people use mobile phones, which leads to less face-to-face communication.",
    "10. 建议句型：It is high time that we paid attention to environmental protection.",
    "11. 引用句型：As an old saying goes, practice makes perfect.",
    "12. 递进句型：Furthermore, we should learn to arrange our time reasonably."
];

// ===================== 2. 段落逻辑模板（扩充版） =====================
const paraList = [
    "【开头段1-现象引入】Nowadays, ... has become a common phenomenon in our society. People hold different views towards it.",
    "【开头段2-图画引入】As is vividly shown in the picture, ... The picture reflects a social problem worth discussing.",
    "【开头段3-观点引入】When it comes to ..., different people have different opinions.",
    "【过渡衔接1】There are many reasons accounting for this situation. First of all,...",
    "【过渡衔接2】From my perspective, the advantages outweigh its disadvantages.",
    "【主体段-论点1】To begin with, ... plays an important role in our study and life. It can help us ...",
    "【主体段-论点2】In addition, we can benefit a lot from ... For example, many students ...",
    "【主体段-反面论证】However, every coin has two sides. If we rely on it too much, we may face some troubles.",
    "【结尾段-总结建议】In conclusion, we should treat ... correctly. It is suggested that we ...",
    "【结尾段-展望未来】Only when we do well in this aspect can we embrace a better future."
];

// ===================== 3. 篇章模板库 =====================
const tempList = [
    "【模板1：图画作文（四级高频）\\nNowadays, the above picture has aroused wide concern. As we can see in the picture, ... \\nThere are several reasons for this phenomenon. Firstly, ... Secondly, ... \\nIn my opinion, we should ... Only in this way can we live a better life.】",
    "【模板2：观点对立作文（六级高频）\\nNowadays, people have different ideas about ... Some people think that ... However, others hold the view that ...\\nAs far as I am concerned, I agree with the latter. On one hand, ... On the other hand, ...\\nTo sum up, we should keep a rational attitude towards this issue.】",
    "【模板3：社会现象作文\\nWith the rapid development of society, ... has become increasingly popular. \\nMany factors contribute to this trend. For one thing, ... For another thing, ...\\nFrom my point of view, it is a good trend and we should encourage it.】",
    "【模板4：建议类作文\\nNowadays, many people are faced with the problem of ... It is necessary for us to take measures to change it.\\nHere are some useful suggestions. First, we should ... Second, it is important to ...\\nI believe that as long as we work together, the situation will become better.】",
    "【模板5：应用文-倡议书\\nDear friends,\\nI am writing to call on everyone to ... This activity is very meaningful for us.\\nWe can do something as follows. Firstly, ... Secondly, ...\\nLet us take action right now! \\nYours sincerely,\\nXXX】"
];

// ===================== 4. 范文库（一键生成用） =====================
const essayPool = [
    `# Part-time Jobs for College Students
Nowadays, taking part-time jobs has become a common choice for college students. Different people have different attitudes towards this behavior.

There are many advantages of part-time jobs. To begin with, students can earn some pocket money to reduce the burden of their families. In addition, working part-time helps students gain valuable social experience, which cannot be learned in classrooms. What’s more, it can improve students’ communication skills and teamwork ability.

From my perspective, college students can take proper part-time jobs. However, we must remember that study is our main task. We should arrange time reasonably and never let part-time work affect our study. Only in this way can we make progress in both study and practice.`,

    `# Online Learning
With the development of Internet technology, online learning has become more and more popular among students. It has greatly changed our traditional learning ways.

Online learning has many obvious advantages. First of all, it is very convenient. Students can study at home at any time without going to school. Secondly, there are rich learning resources online, which can meet different learning needs. However, every coin has two sides. Some students may lack self-control and waste time when studying online.

In my opinion, we should make good use of online learning. We need to form good learning habits and focus on study. If we use it properly, online learning will become a powerful helper for our study.`,

    `# Environmental Protection
Nowadays, environmental pollution has become a serious problem around the world. Air pollution, water pollution and white pollution have affected people’s normal life.

It is urgent for us to take action to protect the environment. For ordinary people, we can start from small things in daily life. We can choose to walk or ride bikes instead of driving cars. We should also save water and electricity and refuse to use disposable plastic products. For the government, more strict laws should be made to punish polluting behaviors.

As an old saying goes, "Protecting the environment is protecting ourselves". Everyone should realize the importance of environmental protection. Joint efforts will definitely create a clean and beautiful living environment for us all.`,

    `# The Importance of Reading
Reading is one of the most valuable habits in our life. However, many people spend too much time on mobile phones and gradually lose the interest in reading.

Reading brings us countless benefits. Firstly, reading can enrich our knowledge and broaden our horizons. Secondly, good books can shape our personality and teach us how to behave. Besides, reading can help us relax our mind when we feel stressed.

It is high time that we formed a good reading habit. We can set aside 30 minutes every day to read books. No matter how busy we are, we should never give up reading. A life without reading is like a house without lights.`
];

// ===================== 5. 功能函数 =====================
function showSentence(){
    let html = "";
    sentenceList.forEach(item=>{
        html += `<div class="item">${item}</div>`;
    });
    document.getElementById("sentenceBox").innerHTML = html;
}

function showParagraph(){
    let html = "";
    paraList.forEach(item=>{
        html += `<div class="item">${item}</div>`;
    });
    document.getElementById("paraBox").innerHTML = html;
}

function showTemplate(){
    let html = "";
    tempList.forEach(item=>{
        html += `<div class="item">${item.replace(/\\n/g,"<br>")}</div>`;
    });
    document.getElementById("tempBox").innerHTML = html;
}

let lastIndex = -1;
function generateEssay(){
    let randomIndex;
    do{
        randomIndex = Math.floor(Math.random() * essayPool.length);
    }while(randomIndex === lastIndex);
    lastIndex = randomIndex;
    let currentEssay = essayPool[randomIndex];
    document.getElementById("essayBox").innerHTML = `<div class="item">${currentEssay.replace(/\\n/g,"<br>")}</div>`;
}

function checkEssay(){
    let content = document.getElementById("userEssay").value.trim();
    if(content === ""){
        document.getElementById("checkBox").innerHTML = `<div class="item red">请先输入你的作文内容！</div>`;
        return;
    }
    let wordCount = content.split(/\\s+/).length;
    let html = `
        <div class="item green">? 基础统计</div>
        <div class="tips">作文总词数：${wordCount} 词 | 四级建议：120-180词 | 六级建议：150-200词</div>
        <br>
        <div class="item green">? 一、语法错误排查建议</div>
        <div class="tips">1. 检查时态统一：四六级作文建议统一使用一般现在时，描述过去事件使用一般过去时，不要混用时态。<br>
        2. 检查主谓一致：单数主语搭配单数谓语，复数主语搭配复数谓语。<br>
        3. 检查冠词(a/an/the)、介词使用：介词搭配是四六级高频扣分点，如 pay attention to, take part in。<br>
        4. 检查单复数：可数名词单数必须搭配冠词，不要出现名词裸用情况。</div>
        <br>
        <div class="item green">? 二、词汇优化建议（提分重点）</div>
        <div class="tips">1. 避免重复使用 simple words（good/bad/important），可替换高分词：<br>
        important → vital / significant / essential；good → beneficial / excellent<br>
        2. 多用固定搭配和短语，替代简单动词，提升词汇档次。<br>
        3. 适当使用四六级高频同义替换词，拉开分数差距。</div>
        <br>
        <div class="item green">? 三、句式升级建议（核心得分点）</div>
        <div class="tips">1. 减少简单句堆砌，尝试使用：定语从句、状语从句、非谓语结构。<br>
        2. 每段加入1-2个倒装句/强调句，属于四六级加分句型。<br>
        3. 长短句结合：不要全是长难句，也不要全是短句，句式错落更流畅。</div>
        <br>
        <div class="item green">? 四、段落逻辑优化</div>
        <div class="tips">1. 每段第一句建议写中心句，让结构更清晰，阅卷老师一眼看懂主旨。<br>
        2. 段落之间必须使用过渡词：Firstly/In addition/However/In conclusion 等。<br>
        3. 观点类作文保证：开头引入 + 主体2-3个论点 + 结尾总结，三段式结构最稳妥。</div>
        <br>
        <div class="item green">? 五、四六级考场终极得分技巧</div>
        <div class="tips">1. 书写工整：卷面整洁直接影响印象分，不要随意涂改。<br>
        2. 控制字数：严重少于/超出规定词数会直接扣分。<br>
        3. 优先保证正确率：不确定的长难句宁愿改写为简单正确句子，不要硬造错误句子。<br>
        4. 背诵范文中的万能句型，灵活套用，提升写作效率。</div>
    `;
    document.getElementById("checkBox").innerHTML = html;
}
