// Interactive additions for the portfolio.
projects.push({
  label:'06 / K12 EDUCATION · PERFORMANCE REVIEW',
  title:'K12 教育客户 3 个月投放增长复盘',
  meta:'案例复盘 · 2025.10 — 2025.12 · 冷启动 / 稳定优化 / 规模扩量',
  context:'我以小学数学思维课程为推广对象，从账户冷启动开始，围绕家长人群的获客需求建立测试框架。前期重点验证素材、定向和表单链路；中期补充搜索广告与再营销；后期逐步扩展人群、关键词与预算。',
  actions:[
    '我先建立图文创意测试，比较痛点型、结果展示型与干货清单型素材，根据 CTR 与 CPL 暂停低效方向。',
    '我把表单字段从 6 项精简为 3 项，并扩大年龄测试范围，观察填写率、消耗和线索成本的变化。',
    '我在信息流趋稳后补充搜索广告与再营销，拓展关键词并承接已访问或点击但尚未留资的人群。',
    '我按周观察成本与线索质量，再逐步提高预算，避免在冷启动阶段过早放量。'
  ],
  results:'2025 年 10—12 月材料汇总：总消耗约 16.45 万元、总留资 899 条、综合 CPL 约 184 元；11 月记录 22 个有效签单，12 月记录 44 个，有效签单合计约 66 个。材料中的整体 ROI 估算约为 3.9。'
});
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>Array.from(root.querySelectorAll(s));
function numberValue(id){const el=$('#'+id);const n=Number(el?.value);return Number.isFinite(n)&&n>0?n:0}
function money(n){return Number.isFinite(n)?'¥'+n.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2}):'—'}
function percent(n){return Number.isFinite(n)?n.toFixed(2)+'%':'—'}
function updateCalculator(){
 const spend=numberValue('calcSpend'), impressions=numberValue('calcImpressions'), clicks=numberValue('calcClicks'), leads=numberValue('calcLeads'), qualified=numberValue('calcQualified'), deals=numberValue('calcDeals'), revenue=numberValue('calcRevenue');
 const values={
  calcCtr:percent(impressions?clicks/impressions*100:0),
  calcCpc:money(clicks?spend/clicks:0),
  calcCpl:money(leads?spend/leads:0),
  calcQuality:percent(leads?qualified/leads*100:0),
  calcDealRate:percent(leads?deals/leads*100:0),
  calcRoi:spend?(revenue/spend).toFixed(2):'—'
 };
 Object.entries(values).forEach(([id,value])=>{const el=$('#'+id);if(el)el.textContent=value});
}
$$('.calc-fields input').forEach(el=>el.addEventListener('input',updateCalculator));
const scriptSamples=[
 {category:'education',tag:'K12 教育',title:'痛点切入｜数学思维课',text:'孩子做题总是会算却不会想？\n很多时候，问题不在于练习量，而在于有没有建立解题思路。\n用一道典型题看看孩子卡在哪一步，再决定接下来该补什么。\n行动引导：领取课程介绍 / 预约体验（按实际产品权益替换）。'},
 {category:'education',tag:'K12 教育',title:'过程展示｜让家长看见变化',text:'同一道题，为什么有的孩子只能记步骤，有的孩子能说清思路？\n把思考过程拆成几个小步骤，帮助孩子理解题目、表达方法、检查结果。\n行动引导：查看课程大纲，了解适合的学习阶段。'},
 {category:'education',tag:'K12 教育',title:'家长清单｜选课前先看三点',text:'给孩子选数学思维课，不妨先看三件事：\n01 是否有清晰的学习目标；\n02 是否能看到老师如何引导思考；\n03 是否有课后反馈与练习建议。\n先了解课程内容，再判断是否适合孩子。'},
 {category:'home',tag:'家装家居',title:'需求切入｜装修预算怎么做',text:'准备装修，预算总是越算越多？\n先把户型、居住人数、收纳需求和预算范围列清楚，再做方案比较。\n我们可以根据实际户型梳理空间需求，具体报价以现场沟通与方案为准。\n行动引导：预约量房 / 获取方案沟通。'},
 {category:'home',tag:'家装家居',title:'场景展示｜小空间收纳',text:'小户型不一定要牺牲收纳。\n先看动线，再看柜体深度、常用物品和空间留白，避免只增加柜子却不好用。\n用真实案例展示改造前后的空间变化，帮助用户判断方案是否适合自己。'},
 {category:'ai',tag:'AI 工具',title:'效果对比｜一张照片的多种表达',text:'同一张照片，换一种色调就像换了一个故事。\n尝试不同光线、氛围和风格预设，再挑选最适合场景的一版。\n行动引导：展示实际功能入口与操作过程，邀请用户体验。'},
 {category:'ai',tag:'AI 工具',title:'操作演示｜三步完成修图',text:'不想花很多时间调参数？\n第一步导入照片，第二步选择合适的风格或功能，第三步预览并保存。\n视频中展示真实操作路径和处理前后效果，避免夸大功能表现。'}
];
let activeScriptFilter='all';
function renderScripts(){
 const list=$('#scriptList');if(!list)return;list.replaceChildren();
 const query=($('#scriptSearch')?.value||'').trim().toLowerCase();
 const found=scriptSamples.filter(s=>(activeScriptFilter==='all'||s.category===activeScriptFilter)&&[s.tag,s.title,s.text].join(' ').toLowerCase().includes(query));
 if(!found.length){const empty=document.createElement('p');empty.className='script-empty';empty.textContent='没有找到匹配的脚本，试试其他关键词。';list.append(empty);return}
 found.forEach((s)=>{
  const card=document.createElement('article');card.className='script-item';
  const head=document.createElement('div');head.className='script-item-head';
  const tag=document.createElement('span');tag.textContent=s.tag;
  const copy=document.createElement('button');copy.type='button';copy.textContent='复制脚本';
  copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(s.text);showToast('脚本已复制，可以继续编辑。')}catch{const area=document.createElement('textarea');area.value=s.text;area.style.position='fixed';area.style.opacity='0';document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();showToast(ok?'脚本已复制，可以继续编辑。':'复制失败，请手动选择文案。')}});
  head.append(tag,copy);card.append(head);
  const title=document.createElement('h4');title.textContent=s.title;card.append(title);
  const text=document.createElement('p');text.textContent=s.text;card.append(text);list.append(card);
 });
}
function showToast(message){const toast=$('#toast');if(!toast)return;toast.textContent=message;toast.classList.add('visible');window.setTimeout(()=>toast.classList.remove('visible'),3000)}
$$('[data-script-filter]').forEach(btn=>btn.addEventListener('click',()=>{activeScriptFilter=btn.dataset.scriptFilter;$$('[data-script-filter]').forEach(b=>b.classList.toggle('active',b===btn));renderScripts()}));
$('#scriptSearch')?.addEventListener('input',renderScripts);
renderScripts();updateCalculator();
const galleryContent={
 artwork:{kicker:'01 / GRADUATION PROJECT',title:'毕业设计《重奏》',description:'我以吉他、键盘、架子鼓、麦克风等现代电声乐器为灵感，将乐器结构提炼、解构与重组，并结合天然大漆等工艺，探索传统漆艺与现代音乐文化的融合。'},
 photography:{kicker:'02 / PHOTOGRAPHY',title:'城市与旅行摄影',description:'我记录城市建筑、街景、夜色与旅行中的日常瞬间，关注画面构图、光线层次和色彩氛围，将观察积累转化为视觉创作灵感。'},
 stage:{kicker:'03 / STAGE VISUALS',title:'乐队舞台视觉设计',description:'我整理校园乐队演出背景与舞台实拍素材，展示不同歌曲和演出活动中的 LED 背景画面、色彩字体选择与现场呈现。'}
};
const galleryDialog=$('#galleryDialog');
$$('[data-gallery]').forEach(btn=>btn.addEventListener('click',()=>{
 const key=btn.dataset.gallery,info=galleryContent[key];if(!info||!galleryDialog)return;
 const image=$('#galleryDialogImage');image.src=btn.querySelector('img').src;image.alt=btn.querySelector('img').alt;
 $('#galleryDialogKicker').textContent=info.kicker;$('#galleryDialogTitle').textContent=info.title;$('#galleryDialogDescription').textContent=info.description;
 image.style.objectPosition=key==='artwork'?'top center':key==='photography'?'center center':'bottom center';
 galleryDialog.showModal();document.body.style.overflow='hidden';
}));
$('.gallery-dialog-close')?.addEventListener('click',()=>galleryDialog.close());
galleryDialog?.addEventListener('click',e=>{if(e.target===galleryDialog){const r=galleryDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)galleryDialog.close()}});
galleryDialog?.addEventListener('close',()=>{document.body.style.overflow=''});
