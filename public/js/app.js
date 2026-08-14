/* ============================= AUTOFLOW PLATFORM (frontend) ============================= */

const LOGO_SRC = '/assets/logo.jpg';
const API = '/api';

/* ---------- i18n ---------- */
const I18N = {
  en: {
    "footer.text":"Dev by AUTOFLOW",
    "boot.text":"Connecting to AUTOFLOW…",
    "login.title":"Serial Access",
    "login.sub":"Enter your 4-digit AUTOFLOW serial to continue",
    "login.button":"Log In",
    "login.err.invalid":"Invalid serial number. Try again.",
    "login.err.incomplete":"Enter all 4 digits.",
    "login.err.locked":"Too many attempts. Locked for {s}s.",
    "login.err.network":"Couldn't reach the server. Check your connection.",
    "nav.overview":"Overview",
    "nav.team":"Team",
    "nav.logout":"Log out",
    "role.admin":"Administrator",
    "role.marketing":"Marketing",
    "admin.overview.title":"Command Overview",
    "admin.overview.sub":"Real-time snapshot of AUTOFLOW's revenue engine.",
    "stat.revenue":"Total Revenue",
    "stat.commissions":"Commissions Paid",
    "stat.members":"Active Team Members",
    "stat.top":"Top Performer",
    "stat.top.sub":"Highest commissions this period",
    "stat.noDeals":"No deals yet",
    "team.title":"Team Management",
    "team.sub":"Search, review, and add marketing team members.",
    "team.search":"Search by name…",
    "team.add":"Add Member",
    "team.empty.title":"No members found",
    "team.empty.sub":"Try a different search or add a new member.",
    "team.deals":"deals",
    "team.earned":"earned",
    "member.joined":"Joined",
    "member.serial":"Serial",
    "member.back":"Back to Team",
    "member.deals.title":"Deals & Projects",
    "member.deals.add":"Add Deal",
    "member.deals.empty":"No deals recorded yet for this member.",
    "member.totalEarnings":"Total Earnings",
    "member.commissionRate":"Commission Rate",
    "member.dealCount":"Total Deals",
    "deal.project":"Project",
    "deal.amount":"Amount",
    "deal.commission":"Commission",
    "modal.addMember.title":"Add Team Member",
    "modal.addMember.sub":"Create a new marketing profile with serial access.",
    "modal.editDeal.title":"Edit Deal",
    "modal.addDeal.title":"Add Deal",
    "modal.addDeal.sub":"Record a new project and auto-calculate commission.",
    "form.name":"Full Name",
    "form.name.ph":"e.g. Sara Youssef",
    "form.contact":"Contact (optional)",
    "form.contact.ph":"Phone or email",
    "form.commission":"Commission %",
    "form.serial":"Serial Number",
    "form.serial.manual":"Type manually",
    "form.serial.auto":"Auto-generate",
    "form.generate":"Generate",
    "form.project":"Project Name",
    "form.project.ph":"e.g. Falcon Ops Automation",
    "form.amountClient":"Amount from Client",
    "form.date":"Date",
    "form.commissionPreview":"Commission Amount",
    "btn.save":"Save",
    "btn.cancel":"Cancel",
    "btn.delete":"Delete",
    "err.required":"This field is required.",
    "err.serial4":"Serial must be exactly 4 digits.",
    "err.serialDup":"This serial is already in use.",
    "err.amount":"Enter a valid amount.",
    "err.generic":"Something went wrong. Please try again.",
    "mkt.overview.title":"My Performance",
    "mkt.overview.sub":"Your deals, commissions, and earnings — always up to date.",
    "mkt.chart.title":"Performance Over Time",
    "mkt.deals.title":"My Deals",
    "mkt.soon":"More tools coming soon 🚀",
    "confirm.deleteDeal":"Delete this deal? This cannot be undone.",
    "loading.app":"Booting AUTOFLOW systems…",
  },
  ar: {
    "footer.text":"تطوير AUTOFLOW",
    "boot.text":"جارٍ الاتصال بـ AUTOFLOW…",
    "login.title":"دخول بالرقم التسلسلي",
    "login.sub":"أدخل الرقم التسلسلي المكوّن من 4 أرقام للمتابعة",
    "login.button":"تسجيل الدخول",
    "login.err.invalid":"رقم تسلسلي غير صحيح. حاول مرة أخرى.",
    "login.err.incomplete":"أدخل الأرقام الأربعة كاملة.",
    "login.err.locked":"محاولات كثيرة جدًا. مقفل لمدة {s} ثانية.",
    "login.err.network":"تعذر الوصول للسيرفر. تأكد من الاتصال.",
    "nav.overview":"نظرة عامة",
    "nav.team":"الفريق",
    "nav.logout":"تسجيل الخروج",
    "role.admin":"مدير النظام",
    "role.marketing":"تسويق",
    "admin.overview.title":"لوحة القيادة",
    "admin.overview.sub":"نظرة لحظية على محرك إيرادات AUTOFLOW.",
    "stat.revenue":"إجمالي الإيرادات",
    "stat.commissions":"العمولات المدفوعة",
    "stat.members":"أعضاء الفريق النشطين",
    "stat.top":"الأفضل أداءً",
    "stat.top.sub":"أعلى عمولات في هذه الفترة",
    "stat.noDeals":"لا توجد صفقات بعد",
    "team.title":"إدارة الفريق",
    "team.sub":"ابحث، راجع، وأضف أعضاء فريق التسويق.",
    "team.search":"البحث بالاسم…",
    "team.add":"إضافة عضو",
    "team.empty.title":"لا يوجد أعضاء",
    "team.empty.sub":"جرّب بحثًا مختلفًا أو أضف عضوًا جديدًا.",
    "team.deals":"صفقة",
    "team.earned":"مكتسب",
    "member.joined":"تاريخ الانضمام",
    "member.serial":"الرقم التسلسلي",
    "member.back":"الرجوع للفريق",
    "member.deals.title":"الصفقات والمشاريع",
    "member.deals.add":"إضافة صفقة",
    "member.deals.empty":"لا توجد صفقات مسجلة لهذا العضو بعد.",
    "member.totalEarnings":"إجمالي الأرباح",
    "member.commissionRate":"نسبة العمولة",
    "member.dealCount":"عدد الصفقات",
    "deal.project":"المشروع",
    "deal.amount":"المبلغ",
    "deal.commission":"العمولة",
    "modal.addMember.title":"إضافة عضو فريق",
    "modal.addMember.sub":"إنشاء ملف تسويقي جديد مع رقم دخول تسلسلي.",
    "modal.editDeal.title":"تعديل الصفقة",
    "modal.addDeal.title":"إضافة صفقة",
    "modal.addDeal.sub":"سجّل مشروعًا جديدًا واحسب العمولة تلقائيًا.",
    "form.name":"الاسم الكامل",
    "form.name.ph":"مثال: سارة يوسف",
    "form.contact":"معلومات التواصل (اختياري)",
    "form.contact.ph":"رقم الهاتف أو البريد الإلكتروني",
    "form.commission":"نسبة العمولة %",
    "form.serial":"الرقم التسلسلي",
    "form.serial.manual":"إدخال يدوي",
    "form.serial.auto":"توليد تلقائي",
    "form.generate":"توليد",
    "form.project":"اسم المشروع",
    "form.project.ph":"مثال: أتمتة عمليات فالكون",
    "form.amountClient":"المبلغ المستلم من العميل",
    "form.date":"التاريخ",
    "form.commissionPreview":"قيمة العمولة",
    "btn.save":"حفظ",
    "btn.cancel":"إلغاء",
    "btn.delete":"حذف",
    "err.required":"هذا الحقل مطلوب.",
    "err.serial4":"يجب أن يتكون الرقم التسلسلي من 4 أرقام بالضبط.",
    "err.serialDup":"هذا الرقم التسلسلي مستخدم بالفعل.",
    "err.amount":"أدخل مبلغًا صحيحًا.",
    "err.generic":"حدث خطأ ما. حاول مرة أخرى.",
    "mkt.overview.title":"أدائي",
    "mkt.overview.sub":"صفقاتك وعمولاتك وأرباحك — محدّثة دائمًا.",
    "mkt.chart.title":"الأداء عبر الوقت",
    "mkt.deals.title":"صفقاتي",
    "mkt.soon":"أدوات جديدة قريبًا 🚀",
    "confirm.deleteDeal":"حذف هذه الصفقة؟ لا يمكن التراجع عن هذا الإجراء.",
    "loading.app":"جارٍ تشغيل أنظمة AUTOFLOW…",
  }
};
function t(key, vars){
  let s = (I18N[state.lang] && I18N[state.lang][key]) || key;
  if(vars){ for(const k in vars){ s = s.replace('{'+k+'}', vars[k]); } }
  return s;
}

/* ---------- icons ---------- */
const ICON = {
  search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  chev:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  chevBack:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  plus:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  edit:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  trash:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  logout:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  users:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  trend:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  coins:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/></svg>',
  crown:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 20 2-10 5 4 3-8 3 8 5-4 2 10Z"/></svg>',
  briefcase:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  empty:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
};

/* ---------- state ---------- */
const state = {
  lang: localStorage.getItem('autoflow:lang') || (navigator.language||'').startsWith('ar') ? 'ar' : 'en',
  booted: false,
  screen: 'login', // login | admin | marketing
  currentUser: null, // { id, name, role, serial, commission, ... }
  lockedUntil: 0,
  lockTimer: null,
  adminView: 'overview', // overview | team | profile
  selectedMemberId: null,
  searchQuery: '',
  cache: { members: [], overview: null, profileMember: null, profileDeals: [], myDeals: [] },
};
// localStorage.getItem can legitimately return 'ar' or null; normalize safely
if (!localStorage.getItem('autoflow:lang')) {
  state.lang = ((navigator.language || '').toLowerCase().startsWith('ar')) ? 'ar' : 'en';
} else {
  state.lang = localStorage.getItem('autoflow:lang');
}

/* ---------- API helper ---------- */
async function api(path, options){
  const opts = Object.assign({ credentials:'include', headers:{} }, options||{});
  if(opts.body && typeof opts.body !== 'string'){
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(opts.body);
  }
  let res;
  try{
    res = await fetch(API + path, opts);
  }catch(networkErr){
    const err = new Error('network');
    err.network = true;
    throw err;
  }
  let data = null;
  try{ data = await res.json(); }catch(e){ /* empty body */ }
  if(!res.ok){
    const err = new Error((data && data.error) || 'request_failed');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

/* ---------- helpers ---------- */
function fmtMoney(n){
  const locale = state.lang==='ar' ? 'ar-EG' : 'en-EG';
  try{
    return new Intl.NumberFormat(locale, { style:'currency', currency:'EGP', maximumFractionDigits:0, numberingSystem:'latn' }).format(n||0);
  }catch(e){ return (n||0).toLocaleString()+' EGP'; }
}
function fmtDate(d){
  if(!d) return '—';
  const locale = state.lang==='ar' ? 'ar-EG' : 'en-GB';
  try{ return new Intl.DateTimeFormat(locale,{year:'numeric',month:'short',day:'numeric', numberingSystem:'latn'}).format(new Date(d)); }
  catch(e){ return d; }
}
function initials(name){
  return (name||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}
function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* ---------- render root ---------- */
const app = document.getElementById('app');

function paintChrome(){
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang==='ar' ? 'rtl' : 'ltr';
  document.documentElement.className = 'lang-' + state.lang;
  document.querySelectorAll('#langToggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===state.lang);
  });
}

function render(){
  paintChrome();
  if(!state.booted){ app.innerHTML = renderBootLoading(); return; }
  if(state.screen==='login'){ app.innerHTML = renderLogin(); setupLoginBoxes(); return; }
  if(state.screen==='admin'){ app.innerHTML = renderAdmin(); loadAdminView(); return; }
  if(state.screen==='marketing'){ app.innerHTML = renderMarketing(); loadMarketingView(); return; }
}

function renderBootLoading(){
  return `<div class="login-wrap"><div style="text-align:center;">
    <div style="width:64px;height:64px;border-radius:16px;margin:0 auto 18px;background:linear-gradient(135deg,var(--blue-1),var(--blue-2));animation:logoFloat 2.2s ease-in-out infinite;box-shadow:0 0 40px rgba(0,150,255,.35);"></div>
    <div style="font-family:var(--mono); font-size:12px; letter-spacing:2px; color:var(--blue-2);">${escapeHtml(t('loading.app'))}</div>
  </div></div>`;
}

/* ---------- LOGIN ---------- */
function renderLogin(){
  return `
  <div class="screen">
    <div class="login-wrap">
      <div class="login-card glass">
        <div class="login-logo"><img src="${LOGO_SRC}" alt="AUTOFLOW"/></div>
        <div class="login-tagline">${state.lang==='ar' ? 'وقت أقل. إنجاز أكتر.' : 'Less Time. More Done.'}</div>
        <div class="login-title">${escapeHtml(t('login.title'))}</div>
        <div class="login-sub">${escapeHtml(t('login.sub'))}</div>
        <div class="serial-boxes" id="serialBoxes">
          <input inputmode="numeric" pattern="[0-9]*" maxlength="1" data-idx="0"/>
          <input inputmode="numeric" pattern="[0-9]*" maxlength="1" data-idx="1"/>
          <input inputmode="numeric" pattern="[0-9]*" maxlength="1" data-idx="2"/>
          <input inputmode="numeric" pattern="[0-9]*" maxlength="1" data-idx="3"/>
        </div>
        <div class="login-msg" id="loginMsg"></div>
        <button class="btn btn-primary login-btn" id="loginBtn" data-action="login">${escapeHtml(t('login.button'))}</button>
      </div>
    </div>
  </div>`;
}

function setupLoginBoxes(){
  const boxes = Array.from(document.querySelectorAll('#serialBoxes input'));
  boxes.forEach((box, i)=>{
    box.addEventListener('input', ()=>{
      box.value = box.value.replace(/[^0-9]/g,'').slice(0,1);
      if(box.value && boxes[i+1]) boxes[i+1].focus();
    });
    box.addEventListener('keydown', (e)=>{
      if(e.key==='Backspace' && !box.value && boxes[i-1]) boxes[i-1].focus();
      if(e.key==='Enter') attemptLogin();
    });
  });
  if(boxes[0]) boxes[0].focus();
  if(state.lockedUntil > Date.now()) startLockCountdown();
}

function startLockCountdown(){
  const btn = document.getElementById('loginBtn');
  const msg = document.getElementById('loginMsg');
  if(btn) btn.disabled = true;
  clearInterval(state.lockTimer);
  const tick = ()=>{
    const secs = Math.ceil((state.lockedUntil - Date.now())/1000);
    if(secs <= 0){
      clearInterval(state.lockTimer); state.lockTimer = null;
      if(btn) btn.disabled = false;
      if(msg) msg.textContent = '';
      return;
    }
    if(msg) msg.textContent = t('login.err.locked', {s:secs});
  };
  tick();
  state.lockTimer = setInterval(tick, 1000);
}

async function attemptLogin(){
  if(Date.now() < state.lockedUntil) return;
  const boxes = Array.from(document.querySelectorAll('#serialBoxes input'));
  const serial = boxes.map(b=>b.value).join('');
  const wrap = document.getElementById('serialBoxes');
  const msg = document.getElementById('loginMsg');
  const btn = document.getElementById('loginBtn');

  if(serial.length < 4){
    msg.textContent = t('login.err.incomplete');
    wrap.classList.add('error','shake');
    setTimeout(()=>wrap.classList.remove('shake'), 500);
    return;
  }

  btn.disabled = true;
  try{
    const member = await api('/auth/login', { method:'POST', body:{ serial } });
    wrap.classList.remove('error');
    msg.textContent = '';
    state.currentUser = member;
    playBootTransition(member.role==='admin' ? 'admin' : 'marketing');
  }catch(err){
    btn.disabled = false;
    if(err.network){
      msg.textContent = t('login.err.network');
    } else if(err.status === 429){
      const lockedUntil = err.data && err.data.lockedUntil ? new Date(err.data.lockedUntil).getTime() : Date.now()+30000;
      state.lockedUntil = lockedUntil;
      startLockCountdown();
    } else {
      msg.textContent = t('login.err.invalid');
    }
    wrap.classList.add('error','shake');
    setTimeout(()=>wrap.classList.remove('shake'), 500);
    boxes.forEach(b=>b.value='');
    if(boxes[0]) boxes[0].focus();
  }
}

/* ---------- boot transition (plays the real AUTOFLOW brand video, once, in full) ---------- */
function playBootTransition(nextScreen){
  const overlay = document.getElementById('bootOverlay');
  const video = document.getElementById('bootVideo');

  const reveal = () => {
    state.screen = nextScreen;
    if(nextScreen==='admin'){ state.adminView='overview'; }
    render();
  };

  let settled = false;
  const finish = () => {
    if(settled) return;
    settled = true;
    clearTimeout(safetyTimer);
    reveal();
    overlay.classList.add('fadeout');
    setTimeout(()=>{ overlay.classList.remove('show','fadeout'); video.pause(); }, 520);
  };

  // Safety net: if the video can't load/play for any reason, don't strand the user on a blank screen.
  const safetyTimer = setTimeout(finish, 4800);

  video.onended = finish;
  video.onerror = finish;

  overlay.classList.remove('fadeout');
  overlay.classList.add('show');
  video.currentTime = 0;
  video.muted = false; // try with sound first — this call is still inside the login click's gesture chain

  const playPromise = video.play();
  if(playPromise && playPromise.catch){
    playPromise.catch(()=>{
      // Some browsers block unmuted autoplay once a network await has broken the
      // "recent user gesture" window (notably Safari). Fall back to a silent play
      // so the visual transition always runs even if the sound gets blocked.
      video.muted = true;
      video.play().catch(()=>{ /* if even muted playback fails, the safety timer covers it */ });
    });
  }
}

async function logout(){
  try{ await api('/auth/logout', { method:'POST' }); }catch(e){ /* ignore */ }
  state.currentUser = null;
  state.screen = 'login';
  state.adminView = 'overview';
  state.selectedMemberId = null;
  state.searchQuery = '';
  render();
}

/* ---------- ADMIN ---------- */
function renderAdmin(){
  const admin = state.currentUser;
  return `
  <div class="screen">
    ${renderTopNav(admin, [
      {key:'overview', label:t('nav.overview')},
      {key:'team', label:t('nav.team')},
    ], state.adminView==='profile' ? 'team' : state.adminView)}
    <div class="content" id="mainContent">
      <div style="text-align:center; padding:60px; color:var(--dim); font-family:var(--mono); font-size:12px;">…</div>
    </div>
  </div>`;
}

async function loadAdminView(){
  const content = document.getElementById('mainContent');
  if(!content) return;
  try{
    if(state.adminView==='overview'){
      const [overview, members] = await Promise.all([
        api('/members/overview'),
        api('/members'),
      ]);
      state.cache.overview = overview;
      state.cache.members = members;
      content.innerHTML = renderAdminOverview(overview, members);
    } else if(state.adminView==='team'){
      const members = await api('/members');
      state.cache.members = members;
      content.innerHTML = renderTeamList(members);
    } else if(state.adminView==='profile'){
      const [member, deals] = await Promise.all([
        api('/members/'+state.selectedMemberId),
        api('/deals/member/'+state.selectedMemberId),
      ]);
      state.cache.profileMember = member;
      state.cache.profileDeals = deals;
      content.innerHTML = renderMemberProfile(member, deals);
    }
  }catch(err){
    if(err.status === 401){ logout(); return; }
    content.innerHTML = `<div class="glass empty-state">${escapeHtml(t('err.generic'))}</div>`;
  }
}

function renderTopNav(currentMember, tabs, activeKey){
  return `
  <div class="topnav">
    <div class="brand">
      <img src="${LOGO_SRC}" alt="AUTOFLOW"/>
      <div>
        <div class="brand-name">AUTOFLOW</div>
        <div class="brand-role">${escapeHtml(t(currentMember.role==='admin' ? 'role.admin' : 'role.marketing'))}</div>
      </div>
    </div>
    ${tabs.length>1 ? `<div class="nav-tabs">
      ${tabs.map(tb=>`<button data-action="setAdminView" data-view="${tb.key}" class="${activeKey===tb.key?'active':''}">${escapeHtml(tb.label)}</button>`).join('')}
    </div>` : ''}
    <div class="nav-right">
      <span class="serial-pill">#${escapeHtml(currentMember.serial)}</span>
      <button class="btn btn-ghost btn-icon" data-action="logout" title="${escapeHtml(t('nav.logout'))}">${ICON.logout}</button>
    </div>
  </div>`;
}

function renderAdminOverview(overview, members){
  const top = overview.topPerformer;
  return `
    <div class="page-title">${escapeHtml(t('admin.overview.title'))}</div>
    <div class="page-sub">${escapeHtml(t('admin.overview.sub'))}</div>
    <div class="stat-grid">
      <div class="glass stat-card">
        <div class="stat-label">${ICON.trend} ${escapeHtml(t('stat.revenue'))}</div>
        <div class="stat-value">${fmtMoney(overview.totalRevenue)}</div>
      </div>
      <div class="glass stat-card">
        <div class="stat-label">${ICON.coins} ${escapeHtml(t('stat.commissions'))}</div>
        <div class="stat-value">${fmtMoney(overview.totalCommissions)}</div>
      </div>
      <div class="glass stat-card">
        <div class="stat-label">${ICON.users} ${escapeHtml(t('stat.members'))}</div>
        <div class="stat-value">${overview.activeMembers}</div>
      </div>
      <div class="glass stat-card top-performer">
        <div class="stat-label">${ICON.crown} ${escapeHtml(t('stat.top'))}</div>
        <div class="stat-value small">${top ? escapeHtml(top.name) : '—'}</div>
        <div class="stat-note">${top ? fmtMoney(top.total)+' · '+escapeHtml(t('stat.top.sub')) : escapeHtml(t('stat.noDeals'))}</div>
      </div>
    </div>
    <div class="section-head"><h3>${escapeHtml(t('team.title'))}</h3>
      <button class="btn btn-ghost btn-sm" data-action="setAdminView" data-view="team">${escapeHtml(t('nav.team'))} ${ICON.chev}</button>
    </div>
    ${renderMemberListBlock(members.slice(0,4))}
  `;
}

function renderTeamList(members){
  const q = state.searchQuery.trim().toLowerCase();
  const filtered = members.filter(m=> !q || m.name.toLowerCase().includes(q));
  return `
    <div class="page-title">${escapeHtml(t('team.title'))}</div>
    <div class="page-sub">${escapeHtml(t('team.sub'))}</div>
    <div class="toolbar">
      <div class="search-box">
        ${ICON.search}
        <input type="text" id="searchInput" placeholder="${escapeHtml(t('team.search'))}" value="${escapeHtml(state.searchQuery)}"/>
      </div>
      <button class="btn btn-primary btn-sm" data-action="openAddMember">${ICON.plus} ${escapeHtml(t('team.add'))}</button>
    </div>
    <div id="memberListContainer">${renderMemberListBlock(filtered)}</div>
  `;
}

function renderMemberListBlock(members){
  if(members.length===0){
    return `<div class="glass empty-state">${ICON.empty}<div>${escapeHtml(t('team.empty.title'))}</div>
      <div style="font-size:12px;margin-top:4px;">${escapeHtml(t('team.empty.sub'))}</div></div>`;
  }
  return `<div class="member-list">${members.map(m=>`
    <div class="glass member-row" data-action="openMember" data-id="${m.id}">
      <div class="member-main">
        <div class="avatar">${escapeHtml(initials(m.name))}</div>
        <div>
          <div class="member-name">${escapeHtml(m.name)}</div>
          <div class="member-meta">#${escapeHtml(m.serial)} · ${escapeHtml(t('member.joined'))} ${fmtDate(m.createdAt)}</div>
        </div>
      </div>
      <div class="member-stats">
        <div class="m-item"><div class="m-label">${escapeHtml(t('team.deals'))}</div><div class="m-val">${m.dealCount||0}</div></div>
        <div class="m-item"><div class="m-label">${escapeHtml(t('team.earned'))}</div><div class="m-val">${fmtMoney(m.totalEarnings||0)}</div></div>
        <div class="chev">${ICON.chev}</div>
      </div>
    </div>`).join('')}</div>`;
}

function renderMemberProfile(m, deals){
  const sorted = deals.slice().sort((a,b)=> new Date(b.date)-new Date(a.date));
  const earnings = m.totalEarnings || 0;
  return `
    <a href="#" class="back-link" data-action="setAdminView" data-view="team">${state.lang==='ar'?ICON.chev:ICON.chevBack} ${escapeHtml(t('member.back'))}</a>
    <div class="profile-head">
      <div class="avatar avatar-lg">${escapeHtml(initials(m.name))}</div>
      <div>
        <div class="profile-name">${escapeHtml(m.name)}</div>
        <div class="profile-meta">#${escapeHtml(m.serial)} · ${escapeHtml(t('member.joined'))} ${fmtDate(m.createdAt)}${m.contact ? ' · '+escapeHtml(m.contact) : ''}</div>
      </div>
    </div>
    <div class="stat-grid">
      <div class="glass stat-card"><div class="stat-label">${ICON.coins} ${escapeHtml(t('member.totalEarnings'))}</div><div class="stat-value">${fmtMoney(earnings)}</div></div>
      <div class="glass stat-card"><div class="stat-label">${ICON.trend} ${escapeHtml(t('member.commissionRate'))}</div><div class="stat-value">${m.commission}%</div></div>
      <div class="glass stat-card"><div class="stat-label">${ICON.briefcase} ${escapeHtml(t('member.dealCount'))}</div><div class="stat-value">${sorted.length}</div></div>
    </div>
    <div class="section-head">
      <h3>${escapeHtml(t('member.deals.title'))}</h3>
      <button class="btn btn-primary btn-sm" data-action="openAddDeal" data-id="${m.id}">${ICON.plus} ${escapeHtml(t('member.deals.add'))}</button>
    </div>
    ${sorted.length===0 ? `<div class="glass empty-state">${ICON.empty}<div>${escapeHtml(t('member.deals.empty'))}</div></div>` :
      sorted.map(d=>`
      <div class="glass deal-row">
        <div>
          <div class="deal-name">${escapeHtml(d.projectName)}</div>
          <div class="deal-date">${fmtDate(d.date)}</div>
        </div>
        <div class="deal-figs">
          <div class="m-item"><div class="m-label">${escapeHtml(t('deal.amount'))}</div><div class="m-val">${fmtMoney(d.amount)}</div></div>
          <div class="m-item"><div class="m-label">${escapeHtml(t('deal.commission'))} (${d.commissionPct}%)</div><div class="m-val" style="color:var(--success)">${fmtMoney(d.commissionAmount)}</div></div>
          <div class="deal-actions">
            <button class="btn btn-ghost btn-icon btn-sm" data-action="openEditDeal" data-id="${d.id}">${ICON.edit}</button>
            <button class="btn btn-danger btn-icon btn-sm" data-action="deleteDeal" data-id="${d.id}">${ICON.trash}</button>
          </div>
        </div>
      </div>`).join('')
    }
  `;
}

/* ---------- MARKETING ---------- */
function renderMarketing(){
  return `
  <div class="screen">
    ${renderTopNav(state.currentUser, [], '')}
    <div class="content" id="mainContent">
      <div style="text-align:center; padding:60px; color:var(--dim); font-family:var(--mono); font-size:12px;">…</div>
    </div>
  </div>`;
}

async function loadMarketingView(){
  const content = document.getElementById('mainContent');
  if(!content) return;
  try{
    const deals = await api('/deals/member/'+state.currentUser.id);
    state.cache.myDeals = deals;
    content.innerHTML = renderMarketingContent(deals);
  }catch(err){
    if(err.status === 401){ logout(); return; }
    content.innerHTML = `<div class="glass empty-state">${escapeHtml(t('err.generic'))}</div>`;
  }
}

function renderMarketingContent(deals){
  const m = state.currentUser;
  const sorted = deals.slice().sort((a,b)=> new Date(b.date)-new Date(a.date));
  const earnings = deals.reduce((s,d)=>s+d.commissionAmount,0);
  const chart = buildMonthlyChart(deals);
  return `
    <div class="page-title">${escapeHtml(t('mkt.overview.title'))}</div>
    <div class="page-sub">${escapeHtml(t('mkt.overview.sub'))}</div>
    <div class="stat-grid">
      <div class="glass stat-card"><div class="stat-label">${ICON.coins} ${escapeHtml(t('member.totalEarnings'))}</div><div class="stat-value">${fmtMoney(earnings)}</div></div>
      <div class="glass stat-card"><div class="stat-label">${ICON.trend} ${escapeHtml(t('member.commissionRate'))}</div><div class="stat-value">${m.commission}%</div></div>
      <div class="glass stat-card"><div class="stat-label">${ICON.briefcase} ${escapeHtml(t('member.dealCount'))}</div><div class="stat-value">${sorted.length}</div></div>
    </div>
    <div class="section-head"><h3>${escapeHtml(t('mkt.chart.title'))}</h3></div>
    <div class="glass chart-wrap">
      <div class="chart-bars">
        ${chart.map(c=>`<div class="chart-col">
          <div class="chart-bar" style="height:${c.pct}%"></div>
          <div class="chart-lbl">${escapeHtml(c.label)}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="section-head"><h3>${escapeHtml(t('mkt.deals.title'))}</h3></div>
    ${sorted.length===0 ? `<div class="glass empty-state">${ICON.empty}<div>${escapeHtml(t('member.deals.empty'))}</div></div>` :
      sorted.map(d=>`
      <div class="glass deal-row">
        <div>
          <div class="deal-name">${escapeHtml(d.projectName)}</div>
          <div class="deal-date">${fmtDate(d.date)}</div>
        </div>
        <div class="deal-figs">
          <div class="m-item"><div class="m-label">${escapeHtml(t('deal.amount'))}</div><div class="m-val">${fmtMoney(d.amount)}</div></div>
          <div class="m-item"><div class="m-label">${escapeHtml(t('deal.commission'))} (${d.commissionPct}%)</div><div class="m-val" style="color:var(--success)">${fmtMoney(d.commissionAmount)}</div></div>
        </div>
      </div>`).join('')
    }
    <div class="soon-note">🚀 ${escapeHtml(t('mkt.soon'))}</div>
  `;
}

function buildMonthlyChart(deals){
  const now = new Date();
  const months = [];
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push({ y:d.getFullYear(), m:d.getMonth(), total:0 });
  }
  deals.forEach(d=>{
    const dd = new Date(d.date);
    months.forEach(mo=>{ if(dd.getFullYear()===mo.y && dd.getMonth()===mo.m) mo.total += d.commissionAmount; });
  });
  const max = Math.max(1, ...months.map(m=>m.total));
  const locale = state.lang==='ar' ? 'ar-EG' : 'en-GB';
  return months.map(mo=>({
    pct: Math.max(4, Math.round((mo.total/max)*100)),
    label: new Intl.DateTimeFormat(locale,{month:'short', numberingSystem:'latn'}).format(new Date(mo.y,mo.m,1))
  }));
}

/* ---------- MODALS ---------- */
let modalRoot = null;
function closeModal(){ if(modalRoot){ modalRoot.remove(); modalRoot=null; } }
function openModal(html){
  closeModal();
  modalRoot = document.createElement('div');
  modalRoot.className = 'modal-backdrop';
  modalRoot.id = 'modalBackdrop';
  modalRoot.innerHTML = `<div class="modal glass">${html}</div>`;
  document.body.appendChild(modalRoot);
  modalRoot.addEventListener('mousedown', (e)=>{ if(e.target===modalRoot) closeModal(); });
}

function openAddMember(){
  openModal(`
    <div class="modal-title">${escapeHtml(t('modal.addMember.title'))}</div>
    <div class="modal-sub">${escapeHtml(t('modal.addMember.sub'))}</div>
    <div class="field">
      <label>${escapeHtml(t('form.name'))}</label>
      <input type="text" id="f_name" placeholder="${escapeHtml(t('form.name.ph'))}"/>
      <div class="err hidden" id="err_name">${escapeHtml(t('err.required'))}</div>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.contact'))}</label>
      <input type="text" id="f_contact" placeholder="${escapeHtml(t('form.contact.ph'))}"/>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.commission'))}</label>
      <input type="number" id="f_commission" min="0" max="100" step="0.5" value="10"/>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.serial'))}</label>
      <div class="radio-row" style="margin-bottom:10px;">
        <div class="radio-chip active" id="chip_manual" data-action="serialMode" data-mode="manual">${escapeHtml(t('form.serial.manual'))}</div>
        <div class="radio-chip" id="chip_auto" data-action="serialMode" data-mode="auto">${escapeHtml(t('form.serial.auto'))}</div>
      </div>
      <div class="flex gap-8">
        <input type="text" id="f_serial" maxlength="4" inputmode="numeric" placeholder="0000" style="flex:1; font-family:var(--mono); letter-spacing:3px;"/>
        <button class="btn btn-ghost btn-sm hidden" id="genBtn" data-action="generateSerial" type="button">${escapeHtml(t('form.generate'))}</button>
      </div>
      <div class="err hidden" id="err_serial"></div>
      <input type="hidden" id="f_serialMode" value="manual"/>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" data-action="closeModal">${escapeHtml(t('btn.cancel'))}</button>
      <button class="btn btn-primary" id="saveMemberBtn" data-action="saveMember">${escapeHtml(t('btn.save'))}</button>
    </div>
  `);
  document.getElementById('f_serial').addEventListener('input', (e)=>{
    e.target.value = e.target.value.replace(/[^0-9]/g,'').slice(0,4);
  });
}

function setSerialMode(mode){
  document.getElementById('f_serialMode').value = mode;
  const manual = document.getElementById('chip_manual');
  const auto = document.getElementById('chip_auto');
  const input = document.getElementById('f_serial');
  const genBtn = document.getElementById('genBtn');
  manual.classList.toggle('active', mode==='manual');
  auto.classList.toggle('active', mode==='auto');
  if(mode==='auto'){
    input.readOnly = true; genBtn.classList.remove('hidden'); input.value = '';
    input.placeholder = '••••';
  } else {
    input.readOnly = false; genBtn.classList.add('hidden'); input.value='';
  }
}

async function saveMember(){
  const name = document.getElementById('f_name').value.trim();
  const contact = document.getElementById('f_contact').value.trim();
  const commission = parseFloat(document.getElementById('f_commission').value) || 0;
  const serialMode = document.getElementById('f_serialMode').value;
  const serial = document.getElementById('f_serial').value.trim();
  const btn = document.getElementById('saveMemberBtn');

  document.getElementById('err_name').classList.add('hidden');
  document.getElementById('err_serial').classList.add('hidden');
  let ok = true;
  if(!name){ document.getElementById('err_name').classList.remove('hidden'); ok=false; }
  if(serialMode==='manual' && serial.length!==4){
    document.getElementById('err_serial').textContent = t('err.serial4');
    document.getElementById('err_serial').classList.remove('hidden'); ok=false;
  }
  if(!ok) return;

  btn.disabled = true;
  try{
    await api('/members', { method:'POST', body:{ name, contact, commission, serialMode, serial } });
    closeModal();
    await loadAdminView();
  }catch(err){
    btn.disabled = false;
    if(err.status === 409){
      document.getElementById('err_serial').textContent = t('err.serialDup');
      document.getElementById('err_serial').classList.remove('hidden');
    } else {
      document.getElementById('err_name').textContent = t('err.generic');
      document.getElementById('err_name').classList.remove('hidden');
    }
  }
}

function openAddDeal(memberId){
  const member = state.cache.profileMember && state.cache.profileMember.id===memberId
    ? state.cache.profileMember
    : (state.cache.members.find(m=>m.id===memberId) || {commission:10});
  openModal(`
    <div class="modal-title">${escapeHtml(t('modal.addDeal.title'))}</div>
    <div class="modal-sub">${escapeHtml(t('modal.addDeal.sub'))}</div>
    <input type="hidden" id="f_member_id" value="${memberId}"/>
    <div class="field">
      <label>${escapeHtml(t('form.project'))}</label>
      <input type="text" id="f_project" placeholder="${escapeHtml(t('form.project.ph'))}"/>
      <div class="err hidden" id="err_project">${escapeHtml(t('err.required'))}</div>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.amountClient'))}</label>
      <input type="number" id="f_amount" min="0" step="1"/>
      <div class="err hidden" id="err_amount">${escapeHtml(t('err.amount'))}</div>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.commission'))}</label>
      <input type="number" id="f_pct" min="0" max="100" step="0.5" value="${member.commission}"/>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.date'))}</label>
      <input type="date" id="f_date" value="${new Date().toISOString().slice(0,10)}"/>
    </div>
    <div class="commission-preview">
      <span class="cp-label">${escapeHtml(t('form.commissionPreview'))}</span>
      <span class="cp-val" id="cp_val">${fmtMoney(0)}</span>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" data-action="closeModal">${escapeHtml(t('btn.cancel'))}</button>
      <button class="btn btn-primary" data-action="saveDeal">${escapeHtml(t('btn.save'))}</button>
    </div>
  `);
  const update = ()=>{
    const amt = parseFloat(document.getElementById('f_amount').value)||0;
    const pct = parseFloat(document.getElementById('f_pct').value)||0;
    document.getElementById('cp_val').textContent = fmtMoney(amt*pct/100);
  };
  document.getElementById('f_amount').addEventListener('input', update);
  document.getElementById('f_pct').addEventListener('input', update);
}

function openEditDeal(dealId){
  const d = state.cache.profileDeals.find(x=>x.id===dealId);
  if(!d) return;
  openModal(`
    <div class="modal-title">${escapeHtml(t('modal.editDeal.title'))}</div>
    <input type="hidden" id="f_deal_id" value="${d.id}"/>
    <div class="field">
      <label>${escapeHtml(t('form.project'))}</label>
      <input type="text" id="f_project" value="${escapeHtml(d.projectName)}"/>
      <div class="err hidden" id="err_project">${escapeHtml(t('err.required'))}</div>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.amountClient'))}</label>
      <input type="number" id="f_amount" min="0" step="1" value="${d.amount}"/>
      <div class="err hidden" id="err_amount">${escapeHtml(t('err.amount'))}</div>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.commission'))}</label>
      <input type="number" id="f_pct" min="0" max="100" step="0.5" value="${d.commissionPct}"/>
    </div>
    <div class="field">
      <label>${escapeHtml(t('form.date'))}</label>
      <input type="date" id="f_date" value="${d.date}"/>
    </div>
    <div class="commission-preview">
      <span class="cp-label">${escapeHtml(t('form.commissionPreview'))}</span>
      <span class="cp-val" id="cp_val">${fmtMoney(d.commissionAmount)}</span>
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" data-action="closeModal">${escapeHtml(t('btn.cancel'))}</button>
      <button class="btn btn-primary" data-action="saveEditDeal">${escapeHtml(t('btn.save'))}</button>
    </div>
  `);
  const update = ()=>{
    const amt = parseFloat(document.getElementById('f_amount').value)||0;
    const pct = parseFloat(document.getElementById('f_pct').value)||0;
    document.getElementById('cp_val').textContent = fmtMoney(amt*pct/100);
  };
  document.getElementById('f_amount').addEventListener('input', update);
  document.getElementById('f_pct').addEventListener('input', update);
}

async function saveDeal(){
  const memberId = document.getElementById('f_member_id').value;
  const projectName = document.getElementById('f_project').value.trim();
  const amount = parseFloat(document.getElementById('f_amount').value);
  const commissionPct = parseFloat(document.getElementById('f_pct').value)||0;
  const date = document.getElementById('f_date').value || new Date().toISOString().slice(0,10);
  let ok = true;
  document.getElementById('err_project').classList.add('hidden');
  document.getElementById('err_amount').classList.add('hidden');
  if(!projectName){ document.getElementById('err_project').classList.remove('hidden'); ok=false; }
  if(!amount || amount<=0){ document.getElementById('err_amount').classList.remove('hidden'); ok=false; }
  if(!ok) return;
  try{
    await api('/deals', { method:'POST', body:{ memberId, projectName, amount, commissionPct, date } });
    closeModal();
    await loadAdminView();
  }catch(err){
    document.getElementById('err_project').textContent = t('err.generic');
    document.getElementById('err_project').classList.remove('hidden');
  }
}

async function saveEditDeal(){
  const dealId = document.getElementById('f_deal_id').value;
  const projectName = document.getElementById('f_project').value.trim();
  const amount = parseFloat(document.getElementById('f_amount').value);
  const commissionPct = parseFloat(document.getElementById('f_pct').value)||0;
  const date = document.getElementById('f_date').value;
  let ok = true;
  document.getElementById('err_project').classList.add('hidden');
  document.getElementById('err_amount').classList.add('hidden');
  if(!projectName){ document.getElementById('err_project').classList.remove('hidden'); ok=false; }
  if(!amount || amount<=0){ document.getElementById('err_amount').classList.remove('hidden'); ok=false; }
  if(!ok) return;
  try{
    await api('/deals/'+dealId, { method:'PUT', body:{ projectName, amount, commissionPct, date } });
    closeModal();
    await loadAdminView();
  }catch(err){
    document.getElementById('err_project').textContent = t('err.generic');
    document.getElementById('err_project').classList.remove('hidden');
  }
}

async function deleteDeal(dealId){
  if(!window.confirm(t('confirm.deleteDeal'))) return;
  try{
    await api('/deals/'+dealId, { method:'DELETE' });
    await loadAdminView();
  }catch(err){ /* silent */ }
}

/* ---------- event delegation ---------- */
document.addEventListener('click', async (e)=>{
  const langBtn = e.target.closest('#langToggle button');
  if(langBtn){
    state.lang = langBtn.dataset.lang;
    localStorage.setItem('autoflow:lang', state.lang);
    render();
    return;
  }
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;
  switch(action){
    case 'login': e.preventDefault(); attemptLogin(); break;
    case 'logout': logout(); break;
    case 'setAdminView':
      e.preventDefault();
      state.adminView = el.dataset.view;
      if(state.adminView!=='profile') state.selectedMemberId = null;
      state.searchQuery = '';
      render();
      break;
    case 'openMember':
      state.selectedMemberId = el.dataset.id;
      state.adminView = 'profile';
      render();
      break;
    case 'openAddMember': openAddMember(); break;
    case 'serialMode': setSerialMode(el.dataset.mode); break;
    case 'generateSerial': {
      const btn = el; btn.disabled = true;
      try{
        const { serial } = await api('/members/generate-serial');
        document.getElementById('f_serial').value = serial;
      }catch(e){ /* saveMember still re-validates uniqueness server-side as a fallback */ }
      btn.disabled = false;
      break;
    }
    case 'saveMember': saveMember(); break;
    case 'openAddDeal': openAddDeal(el.dataset.id); break;
    case 'openEditDeal': openEditDeal(el.dataset.id); break;
    case 'saveDeal': saveDeal(); break;
    case 'saveEditDeal': saveEditDeal(); break;
    case 'deleteDeal': deleteDeal(el.dataset.id); break;
    case 'closeModal': closeModal(); break;
  }
});

document.addEventListener('input', (e)=>{
  if(e.target.id==='searchInput'){
    state.searchQuery = e.target.value;
    const container = document.getElementById('memberListContainer');
    if(container){
      const q = state.searchQuery.trim().toLowerCase();
      const members = state.cache.members.filter(m=> !q || m.name.toLowerCase().includes(q));
      container.innerHTML = renderMemberListBlock(members);
    }
  }
});

document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

/* ---------- boot ---------- */
(async function init(){
  render();
  try{
    const me = await api('/auth/me');
    state.currentUser = me;
    state.screen = me.role==='admin' ? 'admin' : 'marketing';
  }catch(e){
    state.screen = 'login';
  }
  state.booted = true;
  render();
})();
