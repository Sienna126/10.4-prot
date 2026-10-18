const book=document.querySelector('#notebook'),about=document.querySelector('#about'),cover=document.querySelector('#cover'),openButton=document.querySelector('#openBook');
function openBook(){book.classList.add('opened');about.inert=false;cover.inert=true;openButton.setAttribute('aria-expanded','true');setTimeout(()=>document.querySelector('#closeBook').focus({preventScroll:true}),850)}
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',openBook));openButton.addEventListener('click',openBook);
document.querySelector('#closeBook').addEventListener('click',()=>{book.classList.remove('opened');about.inert=true;cover.inert=false;openButton.setAttribute('aria-expanded','false');openButton.focus({preventScroll:true})});
const projects=[
{label:'01 / EDUCATION & PERFORMANCE',title:'把每一条线索，变成更好的机会。',meta:'陕西领头羊教育科技有限公司 · 信息流优化师\n2025.04 — 2026.06',context:'负责职教、技能培训客户在巨量引擎、腾讯广告等平台的获客投放，日常管理预算 1万—2万元。目标是在控制表单成本的同时，提高线索质量。',actions:['重新梳理账户定向，测试新素材，并根据跑量节奏调整出价、定向和投放时段。','每日与销售团队核对线索有效率，定位素材、定向和落地页的问题，形成周度复盘。','独立撰写投放脚本，联动设计制作图文与视频，优化落地页表单并增加智能验证。'],results:'单条线索成本：约 95 元降至约 70 元。\n线索有效率：40% 提升至约 55%。\n“技能补贴申领”系列单条素材最高消耗 1.5万元+；两次获评团队月度优秀优化师。'},
{label:'02 / AI & CONTENT GROWTH',title:'让一个 AI 工具，走进更多人的日常。',meta:'炫图 AI app 推广项目 · 内容运营 & 商务 BD\n2026.05 — 2026.07',context:'参与 AI 修图工具的海内外社媒推广，通过短视频内容和博主合作，为产品冷启动引流。',actions:['拆解小红书、抖音等平台的爆款视频逻辑，制作产品宣传短视频并多平台分发。','监测播放与互动数据，输出每周复盘，持续迭代内容创作方向。','开展达人及素人 BD 建联，搭建按点赞量结算的激励合作模式，并将国内策略复用于海外社媒内容与博主拓展。'],results:'累计产出短视频 120条+。\n合作博主 38位。\n海内外总曝光 80万+。'},
{label:'03 / HOME & LIVING',title:'从看到广告，到想要一个新家。',meta:'肖邦家居（西安）有限公司 · 信息流优化师\n2024.07 — 2025.03',context:'负责家装、家居建材类客户的信息流获客投放，日常管理预算 5000—10000 元。',actions:['完成账户搭建、计划创建与素材上线，根据跑量节奏调整出价、定向和投放时段。','与后端客服每日核对线索有效率，定位无效线索来源，迭代素材与落地页。','围绕“免费量房报价”策划素材，优化表单字段并增加智能验证。'],results:'单条线索成本：约 110 元降至约 85 元。\n线索有效率：42% 提升至约 58%。\n单条素材最高消耗 1万元+，获公司月度通报表扬。'},
{label:'04 / CAMPUS MEDIA',title:'校园里的声音，值得被更多人听见。',meta:'校园融媒体中心 · 内容运营专员 & 活动策划\n2023.09 — 2023.12',context:'围绕校园热点策划内容选题，输出公众号、抖音和小红书内容，并协同团队开展线上线下活动。',actions:['结合校园热点完成选题策划与多平台内容输出。','策划并执行线上线下活动，协同团队完成直播落地。'],results:'单条阅读量突破 10万+。\n账号粉丝增长 50%，平均阅读量提升 80%。\n策划活动 5场，累计参与超 2000人次；协同落地直播 5场。'},
{label:'05 / COMMUNITY & EVENTS',title:'把兴趣聚在一起，让热爱发生连接。',meta:'西安赛福滑板校园推广项目 · 社群运营 & 活动执行\n2024.09 — 2024.11',context:'针对新生群体进行校园推广，从主题活动、兴趣社群到私域转化，连接校园里的滑板爱好者。',actions:['策划面向新生的主题活动，建立兴趣社群，承接私域转化。','统筹 200多人线下活动的现场执行，独立设计活动宣传物料。'],results:'开学月内实现 15笔以上滑板成交。\n内容曝光量提升 20%。\n200多人线下活动零失误落地。'},
{label:'CASE STUDY / K12 EDUCATION',title:'从冷启动，到月耗 10 万。',meta:'K12 小学数学思维课程 · 三个月投放案例研究（数据脱敏）',context:'依据提供的案例材料整理：账户从零经验冷启动，目标是在三个月内把月消耗提升至约 10 万元，并将综合线索成本控制在 200 元以内。重点展示冷启动、链路优化与扩量复盘；具体执行分工与个人贡献请以实际情况为准。',actions:['冷启动期（10月1—15日）：以表单留资为目标，从低成本图文素材开始测试，围绕痛点、结果展示与干货清单制作三种方向；初始日预算约 900 元。','稳定优化期（10月16日—11月30日）：根据 CTR、表单填写率和 CPL 诊断素材与落地页问题；把表单字段从 6 项精简到 3 项，CTR 从 2.1% 提升至 3.4%，表单填写率从 8.3% 提升至 13.2%。','拓展转化渠道：搜索广告平均 CPL 约 158 元，低于信息流约 195 元；测试再营销人群，首周 CPL 约 92 元；图文素材 CPL 约 188 元，优于视频素材约 228 元。','规模扩张期（12月）：增加计划、拓展定向与搜索词，扩大地域覆盖，并将预算按周逐步提升，给系统留出学习时间。'],results:'10月：消耗约 0.55 万元，26 条留资，CPL 约 210 元。\n11月：消耗约 5.6 万元，308 条留资，CPL 约 182 元。\n12月：消耗约 10.3 万元，565 条留资，CPL 约 182 元。\n三个月合计：消耗约 16.5 万元，899 条留资，综合 CPL 约 184 元；材料记录有效签单约 66 人，估算 ROI 约 3.9。\n复盘重点：冷启动先验证方向、搜索广告补充高意向流量、简化表单、持续核验销售跟进与线索质量。'}
];
projects.push({label:'FEATURED / PERSONAL TOOL',title:'投放手账｜信息流投放辅助工具',meta:'个人工具项目 · 需求定义、功能策划与 AI 辅助开发',context:'将信息流投放中反复用到的指标计算、素材灵感整理和复盘需求，整合到一个可以在线使用的网页工具里。',actions:['需求定义：围绕信息流投放的日常工作，明确计算、收藏与复盘三个核心场景。','功能策划：组织指标计算、素材灵感收藏和投放复盘功能，形成一个集中的使用入口。','AI 辅助开发：使用 AI 协作制作工具，并通过实际体验反馈调整功能与界面。'],results:'已制作在线版本，支持打开体验。\n访客收藏分别保存。',url:'./flowdesk/'});
const dialog=document.querySelector('#projectDialog'),content=document.querySelector('#dialogContent');content.className='dialog-content';let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const p=projects[Number(button.dataset.project)];lastTrigger=button;content.replaceChildren();const add=(tag,text,className)=>{const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;content.append(el);return el};add('span',p.label,'dialog-kicker');const title=add('h2',p.title);title.id='dialogTitle';const meta=add('p',p.meta,'dialog-meta');meta.style.whiteSpace='pre-line';add('h3','项目背景');add('p',p.context);add('h3','我做了什么');const list=add('ul','');p.actions.forEach(t=>{const li=document.createElement('li');li.textContent=t;list.append(li)});add('h3','项目成果');add('div',p.results,'dialog-results').style.whiteSpace='pre-line';if(p.url){const link=add('a','打开投放手账','tool-live-link');link.href=p.url;link.target='_blank';link.rel='noopener';add('p','体验链接的中国大陆网络可达性尚未验证。','source-note')}else{add('p','数据与经历来源：个人简历。','source-note');}dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus({preventScroll:true})});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b===button;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter});document.querySelector('.small-projects').hidden=['ads','tools'].includes(button.dataset.filter)}));
document.querySelector('#copyEmail').addEventListener('click',async()=>{const toast=document.querySelector('#toast');try{await navigator.clipboard.writeText('1637883387@qq.com');toast.textContent='邮箱已复制，期待你的来信。'}catch{toast.textContent='邮箱：1637883387@qq.com，可长按或选中复制。'}toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),3500)});


// Interactive portfolio toolbox: metrics calculator, searchable copy-ready script drafts and gallery previews.
(() => {
  const byId = id => document.getElementById(id);
  const number = id => {
    const value = Number(byId(id)?.value);
    return Number.isFinite(value) && value > 0 ? value : 0;
  };
  const money = value => value > 0 ? '¥' + value.toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2}) : '—';
  const percent = value => value > 0 ? value.toFixed(2) + '%' : '—';
  const calcIds = ['calcSpend','calcImpressions','calcClicks','calcLeads','calcQualified','calcDeals','calcRevenue'];
  function updateCalculator() {
    if (!byId('calcSpend')) return;
    const spend=number('calcSpend'), impressions=number('calcImpressions'), clicks=number('calcClicks');
    const leads=number('calcLeads'), qualified=number('calcQualified'), deals=number('calcDeals'), revenue=number('calcRevenue');
    byId('calcCtr').textContent=percent(impressions ? clicks/impressions*100 : 0);
    byId('calcCpc').textContent=money(clicks ? spend/clicks : 0);
    byId('calcCpl').textContent=money(leads ? spend/leads : 0);
    byId('calcQuality').textContent=percent(leads ? qualified/leads*100 : 0);
    byId('calcDealRate').textContent=percent(leads ? deals/leads*100 : 0);
    byId('calcRoi').textContent=spend ? (revenue/spend).toFixed(2) : '—';
  }
  calcIds.forEach(id => byId(id)?.addEventListener('input',updateCalculator));
  updateCalculator();

  const scriptDrafts = [
    {category:'education',tag:'痛点切入',title:'数学思维｜家长痛点',text:'孩子做题很快，却总是换个问法就不会？\n与其反复刷题，不如先看看孩子有没有理解题目背后的思路。\n用一道生活化小题，带孩子体验“观察—推理—验证”的过程。'},
    {category:'education',tag:'过程展示',title:'数学思维｜过程演示',text:'同一道题，为什么有的孩子只能记住答案，有的孩子能说出理由？\n用可视化步骤拆开思考过程，让孩子看见每一步是怎么推出来的。\n具体效果以课程内容与孩子实际学习情况为准。'},
    {category:'education',tag:'家长决策',title:'数学思维｜课程选择',text:'给孩子选思维课，别只看题目难不难。\n可以重点看三个方面：是否讲清思路、是否有循序渐进的练习、是否能及时反馈。\n先了解课程安排，再判断是否适合孩子。'},
    {category:'home',tag:'需求场景',title:'家装｜免费量房',text:'装修准备开始了，户型怎么规划更顺手？\n先把家庭成员、收纳需求和常用动线列出来，再结合实际尺寸做方案。\n可预约量房与方案沟通，具体服务范围以门店说明为准。'},
    {category:'home',tag:'决策顾虑',title:'家装｜报价拆解',text:'看装修报价，不要只盯着总价。\n把材料、施工、增项和售后逐项问清楚，比较同一口径下的方案，才更容易判断预算是否合理。'},
    {category:'ai',tag:'功能演示',title:'AI 修图｜前后对比',text:'一张照片想换种氛围，不一定要从头拍。\n演示同一张图在不同风格与参数下的变化，让用户直观看到工具能做什么。\n画面效果以实际产品能力为准。'},
    {category:'ai',tag:'场景切入',title:'AI 修图｜创作灵感',text:'想发照片却不知道怎么调色？\n先确定你想要的情绪：清透、复古、电影感，还是更明亮的日常风格。\n用 AI 辅助探索方向，再按自己的审美做最后调整。'}
  ];
  const list=byId('scriptList'), search=byId('scriptSearch');
  let activeScriptFilter='all';
  function renderScripts() {
    if (!list) return;
    const q=(search?.value||'').trim().toLowerCase();
    list.replaceChildren();
    const matched=scriptDrafts.filter(item=>(activeScriptFilter==='all'||item.category===activeScriptFilter) && (!q || (item.title+item.tag+item.text).toLowerCase().includes(q)));
    if (!matched.length) {
      const empty=document.createElement('p'); empty.className='calc-note'; empty.textContent='没有找到匹配的脚本，试试其他关键词。'; list.append(empty); return;
    }
    matched.forEach(item=>{
      const card=document.createElement('article');card.className='script-item';
      const head=document.createElement('div');head.className='script-item-head';
      const title=document.createElement('b');title.textContent=item.title;
      const tag=document.createElement('small');tag.textContent=item.tag;
      head.append(title,tag);
      const body=document.createElement('p');body.textContent=item.text;
      const button=document.createElement('button');button.type='button';button.textContent='复制文案';
      button.addEventListener('click',async()=>{
        const toast=byId('toast');
        try { await navigator.clipboard.writeText(item.text); if(toast){toast.textContent='文案已复制，可继续编辑后使用。';toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),2600);} }
        catch { if(toast){toast.textContent='当前浏览器暂不支持自动复制，请手动选择文案。';toast.classList.add('visible');setTimeout(()=>toast.classList.remove('visible'),3000);} }
      });
      card.append(head,body,button);list.append(card);
    });
  }
  document.querySelectorAll('[data-script-filter]').forEach(button=>button.addEventListener('click',()=>{
    activeScriptFilter=button.dataset.scriptFilter;
    document.querySelectorAll('[data-script-filter]').forEach(b=>b.classList.toggle('active',b===button));
    renderScripts();
  }));
  search?.addEventListener('input',renderScripts);
  renderScripts();

  const galleryInfo = {
    artwork:{title:'毕业设计《重奏》',label:'GRADUATION PROJECT / LACQUER ART',text:'以现代电声乐器造型为灵感，将吉他、键盘、架子鼓、麦克风等元素提炼、解构与重组；结合天然大漆、镶嵌、变涂、罩漆与磨显等工艺，让传统漆艺与当代音乐文化形成对话。',src:'assets/artwork-thumb.jpg',alt:'毕业设计《重奏》漆艺作品拼图'},
    photography:{title:'城市与旅行摄影',label:'PHOTOGRAPHY / VISUAL NOTES',text:'记录城市建筑、街道、夜景与旅行场景，练习构图、光线观察和色彩表达，也将这些观察作为视觉设计与内容创作的灵感来源。',src:'assets/photography-thumb.jpg',alt:'城市建筑、街景与旅行摄影作品拼图'},
    stage:{title:'乐队舞台视觉设计',label:'STAGE VISUALS / LIVE MUSIC',text:'围绕歌曲气质、演出主题与现场观看距离组织画面，尝试用色彩、字体和图形建立舞台视觉氛围，并结合现场照片观察大屏呈现效果。',src:'assets/stage-thumb.jpg',alt:'校园乐队演出现场与舞台视觉拼图'}
  };
  document.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{
    const item=galleryInfo[button.dataset.gallery]; if(!item) return;
    lastTrigger=button;
    content.replaceChildren();
    const label=document.createElement('span');label.className='dialog-kicker';label.textContent=item.label;content.append(label);
    const title=document.createElement('h2');title.id='dialogTitle';title.textContent=item.title;content.append(title);
    const img=document.createElement('img');img.src=item.src;img.alt=item.alt;img.style.width='100%';img.style.maxHeight='380px';img.style.objectFit='contain';img.style.background='#e8e0d5';img.style.margin='12px 0 18px';content.append(img);
    const p=document.createElement('p');p.textContent=item.text;content.append(p);
    dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0;
  }));
})();
