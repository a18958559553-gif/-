(() => {
  'use strict';

  const MATERIALS = [
    { id:'rose', category:'crystal', name:'粉晶', subtitle:'温柔 · 连接', price:12, size:10, bg:'radial-gradient(circle at 32% 28%, #fff9fc 0 10%, #eebdc8 34%, #c98299 100%)', img:'./assets/beads/rose-quartz.png' },
    { id:'amethyst', category:'crystal', name:'紫水晶', subtitle:'直觉 · 安定', price:18, size:10, bg:'radial-gradient(circle at 30% 25%, #f4eaff 0 10%, #a586ca 38%, #604174 100%)', img:'./assets/beads/amethyst.png' },
    { id:'moonstone', category:'crystal', name:'月光石', subtitle:'柔光 · 守护', price:22, size:10, bg:'radial-gradient(circle at 30% 25%, #ffffff 0 13%, #dbe7ee 40%, #aeb8c7 100%)', img:'./assets/beads/moonstone.png' },
    { id:'aquamarine', category:'crystal', name:'海蓝宝', subtitle:'清澈 · 表达', price:20, size:10, bg:'radial-gradient(circle at 30% 25%, #f4ffff 0 11%, #8bcad1 42%, #4d8997 100%)', img:'./assets/beads/aquamarine.png' },
    { id:'citrine', category:'crystal', name:'黄水晶', subtitle:'明亮 · 行动力', price:16, size:10, bg:'radial-gradient(circle at 30% 25%, #fffde6 0 11%, #efcf67 40%, #c0832d 100%)', img:'./assets/beads/citrine.png' },
    { id:'tiger', category:'crystal', name:'虎眼石', subtitle:'自信 · 边界', price:15, size:10, bg:'linear-gradient(145deg, #31251d 0 22%, #bd8640 32% 55%, #4a3423 65% 77%, #d1a354 85%)', img:'./assets/beads/tigers-eye.png' },
    { id:'obsidian', category:'crystal', name:'黑曜石', subtitle:'沉静 · 防护', price:10, size:10, bg:'radial-gradient(circle at 30% 25%, #6a676b 0 7%, #28262b 42%, #080809 100%)', img:'./assets/beads/obsidian.png' },
    { id:'moss', category:'crystal', name:'苔藓玛瑙', subtitle:'森林 · 生长', price:19, size:10, bg:'radial-gradient(circle at 34% 26%, #eef5e8 0 12%, #93a884 32%, #4b6650 64%, #d9d4ba 100%)' },

    { id:'aries', category:'zodiac', name:'白羊符号珠', subtitle:'♈ 火元素', price:24, size:11, type:'charm', bg:'linear-gradient(145deg, #e7b087, #9c4c37)' },
    { id:'cancer', category:'zodiac', name:'巨蟹月壳珠', subtitle:'♋ 水元素', price:26, size:11, type:'charm', bg:'radial-gradient(circle at 32% 28%, #fff 0 12%, #b8b9c9 42%, #7e7890 100%)' },
    { id:'leo', category:'zodiac', name:'狮子太阳珠', subtitle:'♌ 火元素', price:25, size:11, type:'charm', bg:'radial-gradient(circle at 35% 30%, #fff8d8 0 9%, #d9a64d 42%, #8e5c27 100%)' },
    { id:'virgo', category:'zodiac', name:'处女麦穗珠', subtitle:'♍ 土元素', price:24, size:11, type:'charm', bg:'linear-gradient(145deg, #ded3b6, #92856b)' },
    { id:'scorpio', category:'zodiac', name:'天蝎暗星珠', subtitle:'♏ 水元素', price:27, size:11, type:'charm', bg:'radial-gradient(circle at 30% 25%, #ad829a 0 9%, #4d2d42 45%, #1c1722 100%)' },
    { id:'pisces', category:'zodiac', name:'双鱼水纹珠', subtitle:'♓ 水元素', price:25, size:11, type:'charm', bg:'linear-gradient(145deg, #b6d7d7, #8a8fb6 48%, #e4d3ef)' },

    { id:'sun', category:'tarot', name:'太阳牌珠', subtitle:'快乐 · 显化', price:29, size:12, type:'charm', bg:'radial-gradient(circle, #fff2ad 0 14%, #e0a53f 15% 55%, #795129 57% 100%)' },
    { id:'star', category:'tarot', name:'星星牌珠', subtitle:'希望 · 灵感', price:29, size:12, type:'charm', bg:'radial-gradient(circle at 35% 30%, #f6edff 0 9%, #8e86c5 42%, #3d416f 100%)' },
    { id:'moon', category:'tarot', name:'月亮牌珠', subtitle:'梦境 · 潜意识', price:29, size:12, type:'charm', bg:'radial-gradient(circle at 35% 30%, #eceaf8 0 9%, #777a9d 42%, #25283d 100%)' },
    { id:'lovers', category:'tarot', name:'恋人牌珠', subtitle:'选择 · 联结', price:32, size:12, type:'charm', bg:'linear-gradient(145deg, #e9b1b7, #be737f 50%, #7b4d62)' },
    { id:'strength', category:'tarot', name:'力量牌珠', subtitle:'勇气 · 温柔', price:31, size:12, type:'charm', bg:'linear-gradient(145deg, #c38f5f, #795033 55%, #cba86e)' },
    { id:'hermit', category:'tarot', name:'隐者牌珠', subtitle:'独处 · 洞察', price:28, size:12, type:'charm', bg:'linear-gradient(145deg, #9d9991, #464441)' },

    { id:'porous-white', category:'aroma', name:'白瓷扩香珠', subtitle:'适合清新香调', price:18, size:12, type:'aroma', bg:'radial-gradient(circle at 30% 25%, #ffffff 0 10%, #e7e2dc 45%, #c8beb5 100%)', img:'./assets/beads/porous-white.png' },
    { id:'lava-black', category:'aroma', name:'黑色火山石', subtitle:'适合木质香调', price:12, size:11, type:'aroma', bg:'radial-gradient(circle at 35% 30%, #5d5a57 0 4%, #242321 20% 27%, #4b4845 29% 34%, #161514 55%)' },
    { id:'lavender-ceramic', category:'aroma', name:'薰衣草陶瓷珠', subtitle:'适合花香调', price:22, size:12, type:'aroma', bg:'radial-gradient(circle at 30% 25%, #f5eff9 0 9%, #c8b4d2 42%, #9482a4 100%)' },
    { id:'tea-ceramic', category:'aroma', name:'白茶云纹珠', subtitle:'适合茶香调', price:22, size:12, type:'aroma', bg:'linear-gradient(145deg, #f3efe4, #c8c5ad 50%, #e6dfcc)' },
    { id:'rose-ceramic', category:'aroma', name:'玫瑰浮雕珠', subtitle:'适合花果香调', price:24, size:12, type:'aroma', bg:'radial-gradient(circle at 30% 25%, #fff4f1 0 11%, #dba59f 42%, #a66f70 100%)' },
    { id:'forest-ceramic', category:'aroma', name:'森林苔纹珠', subtitle:'适合草木香调', price:23, size:12, type:'aroma', bg:'linear-gradient(145deg, #d7dac7, #94a083 52%, #64715d)' },

    { id:'gold-spacer', category:'accessory', name:'香槟金隔片', subtitle:'精致提亮', price:6, size:6, type:'spacer', bg:'linear-gradient(145deg, #fff0af, #b88c3d 55%, #7c5521)' },
    { id:'silver-spacer', category:'accessory', name:'冷银隔片', subtitle:'清冷质感', price:5, size:6, type:'spacer', bg:'linear-gradient(145deg, #ffffff, #aeb1b5 50%, #6f7478)' },
    { id:'pearl', category:'accessory', name:'淡水珍珠', subtitle:'柔和光泽', price:13, size:9, bg:'radial-gradient(circle at 30% 25%, #fff 0 14%, #e8e5df 45%, #bcb7b0 100%)' },
    { id:'gold-star', category:'accessory', name:'星芒吊坠', subtitle:'可拆卸挂件', price:18, size:11, type:'charm', bg:'radial-gradient(circle, #fff2ba, #bd8e3d 58%, #765224)' },
    { id:'moon-charm', category:'accessory', name:'新月吊坠', subtitle:'可拆卸挂件', price:18, size:11, type:'charm', bg:'linear-gradient(145deg, #f4e7bd, #b58a49)' },
    { id:'letter', category:'accessory', name:'字母定制珠', subtitle:'A–Z 可选择', price:16, size:10, type:'charm', bg:'linear-gradient(145deg, #f4f0eb, #b8aca4)' },
  ];

  const CATEGORIES = [
    { id:'crystal', label:'天然水晶' },
    { id:'zodiac', label:'十二星座' },
    { id:'tarot', label:'塔罗主珠' },
    { id:'aroma', label:'扩香珠' },
    { id:'accessory', label:'金属配件' },
  ];

  const THEMES = [
    { id:'healing', name:'柔雾治愈', icon:'☾', note:'放慢一点，重新听见自己', scent:'白茶 · 鸢尾', colors:['#c9b7d2','#e8cbd0','#dbe5e7'], background:'linear-gradient(145deg,#eee5f1,#f5e8e7)', beadIds:['moonstone','amethyst','rose','pearl','porous-white','silver-spacer'], preset:['moonstone','amethyst','rose','moonstone','silver-spacer','porous-white','rose','amethyst','moonstone','pearl','rose','silver-spacer','amethyst','moonstone','rose','pearl','moon'] },
    { id:'energy', name:'太阳能量', icon:'☀', note:'把行动力和明亮感戴在手上', scent:'佛手柑 · 橙花', colors:['#e6b15c','#d98d68','#f2d995'], background:'linear-gradient(145deg,#f5dfc1,#f1c9b5)', beadIds:['citrine','tiger','sun','gold-spacer','porous-white','leo'], preset:['citrine','gold-spacer','tiger','citrine','sun','citrine','gold-spacer','porous-white','tiger','citrine','gold-spacer','leo','citrine','tiger','gold-spacer','citrine','pearl'] },
    { id:'focus', name:'清醒专注', icon:'◇', note:'整理思绪，把注意力带回当下', scent:'迷迭香 · 雪松', colors:['#85aeb3','#8fa28f','#cbd3c5'], background:'linear-gradient(145deg,#dce8e6,#e8ebdf)', beadIds:['aquamarine','moss','forest-ceramic','silver-spacer','hermit','moonstone'], preset:['aquamarine','moss','silver-spacer','moonstone','aquamarine','forest-ceramic','moss','silver-spacer','aquamarine','moonstone','moss','hermit','aquamarine','silver-spacer','moss','moonstone','aquamarine'] },
    { id:'guard', name:'夜色守护', icon:'✦', note:'建立边界，也保留柔软', scent:'黑胡椒 · 琥珀', colors:['#393a4a','#6e5263','#a3929d'], background:'linear-gradient(145deg,#d8d2dc,#c8c0c5)', beadIds:['obsidian','scorpio','moon','lava-black','silver-spacer','amethyst'], preset:['obsidian','silver-spacer','amethyst','obsidian','moon','obsidian','silver-spacer','lava-black','amethyst','obsidian','silver-spacer','scorpio','obsidian','amethyst','silver-spacer','obsidian','moonstone'] },
  ];

  const PRESETS = [
    { id:'lunar', filter:'塔罗', name:'月亮守护', code:'XVIII · THE MOON', description:'月光石、紫水晶与白瓷扩香珠，适合安静而敏锐的夜晚。', background:'linear-gradient(145deg,#d9d1e1,#eee9ee)', theme:'healing', beads:THEMES[0].preset },
    { id:'solar', filter:'能量', name:'太阳显化', code:'XIX · THE SUN', description:'黄水晶、虎眼石与太阳主珠，让明亮感成为行动的起点。', background:'linear-gradient(145deg,#f2d6ad,#f4e5cf)', theme:'energy', beads:THEMES[1].preset },
    { id:'forest', filter:'香氛', name:'雨后森林', code:'AROMA · FOREST', description:'苔藓玛瑙与森林陶瓷扩香珠，搭配雪松或草木香气。', background:'linear-gradient(145deg,#d7dfd3,#eef0e8)', theme:'focus', beads:THEMES[2].preset },
    { id:'midnight', filter:'星座', name:'天蝎夜航', code:'SCORPIO · WATER', description:'黑曜石、暗星符号珠和月亮主珠，克制、深邃、有边界。', background:'linear-gradient(145deg,#cec6d0,#ded9dc)', theme:'guard', beads:THEMES[3].preset },
    { id:'lover', filter:'塔罗', name:'恋人粉雾', code:'VI · THE LOVERS', description:'粉晶、珍珠与恋人牌珠，记录关于关系与选择的温柔答案。', background:'linear-gradient(145deg,#f2d9dc,#efe6e2)', theme:'healing', beads:['rose','pearl','gold-spacer','rose','lovers','rose','pearl','porous-white','rose','gold-spacer','pearl','rose','lovers','rose','gold-spacer','pearl','rose'] },
  ];

  const INITIAL = ['moonstone','amethyst','silver-spacer','rose','moonstone','porous-white','rose','amethyst','moonstone','silver-spacer','pearl','rose','amethyst','moonstone','star','pearl','rose'];

  const state = {
    view: 'home',
    category: 'crystal',
    beads: INITIAL.map(id => ({ id, uid: cryptoRandom() })),
    wrist: 16,
    history: [],
    undo: [],
    selectedUid: null,
    sound: true,
    currentTheme: '自定义能量',
    filter: '全部',
    dragging: null,
    deferredInstall: null,
    lastTap: { uid: null, time: 0 },
  };

  const els = {};
  const q = sel => document.querySelector(sel);
  const qa = sel => [...document.querySelectorAll(sel)];

  function cryptoRandom() {
    try { return crypto.getRandomValues(new Uint32Array(1))[0].toString(36); }
    catch { return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`; }
  }

  function material(id) { return MATERIALS.find(m => m.id === id) || MATERIALS[0]; }
  function money(n) { return `¥${n}`; }
  function totalPrice() { return state.beads.reduce((sum, b) => sum + material(b.id).price, 38); }
  function recommendedCount() { return Math.round((state.wrist * 10) / 9.2); }


  function applyBeadAppearance(node, m) {
    if (!node || !m) return;
    if (m.img) {
      node.style.background = `center / cover no-repeat url("${m.img}")`;
      node.dataset.photo = 'true';
    } else {
      node.style.background = m.bg;
      node.dataset.photo = 'false';
    }
  }

  function init() {
    cacheEls();
    loadStorage();
    bindEvents();
    renderHeroBracelet();
    renderMoodGrid();
    renderCategories();
    renderMaterials();
    renderBracelet();
    renderThemeOptions();
    renderFilters();
    renderPresets();
    renderProfile();
    updateSizeUI();
    navigate('home', false);
    registerPWA();
  }

  function cacheEls() {
    Object.assign(els, {
      backBtn:q('#backBtn'), soundBtn:q('#soundBtn'), brandBtn:q('#brandBtn'), bottomNav:q('#bottomNav'),
      braceletRing:q('#braceletRing'), braceletStage:q('#braceletStage'), beadCount:q('#beadCount'), wristDisplay:q('#wristDisplay'), priceDisplay:q('#priceDisplay'),
      categoryTabs:q('#categoryTabs'), materialList:q('#materialList'), wristRange:q('#wristRange'), recommendedText:q('#recommendedText'),
      undoBtn:q('#undoBtn'), clearBtn:q('#clearBtn'), shuffleBtn:q('#shuffleBtn'), aiBtn:q('#aiBtn'), previewBtn:q('#previewBtn'), centerInfo:q('#centerInfo'),
      themeModal:q('#themeModal'), themeOptions:q('#themeOptions'), previewModal:q('#previewModal'), previewOrbit:q('#previewOrbit'),
      previewTheme:q('#previewTheme'), previewCode:q('#previewCode'), summaryCount:q('#summaryCount'), summaryWrist:q('#summaryWrist'), summaryPrice:q('#summaryPrice'),
      addOrderBtn:q('#addOrderBtn'), saveImageBtn:q('#saveImageBtn'), toast:q('#toast'), homeMoodGrid:q('#homeMoodGrid'),
      filterChips:q('#filterChips'), presetList:q('#presetList'), historyList:q('#historyList'), savedCount:q('#savedCount'), totalBeads:q('#totalBeads'), favoriteMood:q('#favoriteMood'),
      installBtn:q('#installBtn'), resetStorageBtn:q('#resetStorageBtn'),
    });
  }

  function bindEvents() {
    document.addEventListener('click', e => {
      const start = e.target.closest('[data-action="start-design"]');
      const random = e.target.closest('[data-action="random-theme"]');
      const nav = e.target.closest('[data-nav]');
      const close = e.target.closest('[data-close]');
      if (start) navigate('designer');
      if (random) openModal('themeModal');
      if (nav) navigate(nav.dataset.nav);
      if (close) closeModal(close.dataset.close);
    });

    els.brandBtn.addEventListener('click', () => navigate('home'));
    els.backBtn.addEventListener('click', () => navigate('home'));
    els.soundBtn.addEventListener('click', toggleSound);
    els.undoBtn.addEventListener('click', undo);
    els.clearBtn.addEventListener('click', clearBracelet);
    els.shuffleBtn.addEventListener('click', shuffleBracelet);
    els.aiBtn.addEventListener('click', () => openModal('themeModal'));
    els.previewBtn.addEventListener('click', openPreview);
    els.centerInfo.addEventListener('click', () => els.wristRange.focus());
    els.wristRange.addEventListener('input', e => { state.wrist = Number(e.target.value); updateSizeUI(); renderBracelet(); });
    els.addOrderBtn.addEventListener('click', saveDesign);
    els.saveImageBtn.addEventListener('click', downloadDesignCard);
    els.installBtn.addEventListener('click', installApp);
    els.resetStorageBtn.addEventListener('click', resetStorage);

    qa('.modal-backdrop').forEach(modal => modal.addEventListener('click', e => {
      if (e.target === modal) closeModal(modal.id);
    }));

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      state.deferredInstall = e;
    });
  }

  function navigate(view, animate = true) {
    state.view = view;
    qa('.view').forEach(v => v.classList.toggle('is-active', v.dataset.view === view));
    qa('[data-nav]').forEach(b => b.classList.toggle('is-active', b.dataset.nav === view));
    els.backBtn.classList.toggle('is-hidden', view === 'home');
    if (view === 'designer') renderBracelet();
    if (view === 'profile') renderProfile();
    if (animate) haptic(8);
  }

  function renderHeroBracelet() {
    const root = q('#heroBracelet');
    root.innerHTML = '';
    const ids = THEMES[0].preset.slice(0,16);
    ids.forEach((id, i) => {
      const bead = document.createElement('i');
      bead.className = 'mini-bead';
      applyBeadAppearance(bead, material(id));
      const a = (Math.PI * 2 * i / ids.length) - Math.PI/2;
      const r = 82;
      bead.style.left = `${97.5 + Math.cos(a)*r}px`;
      bead.style.top = `${97.5 + Math.sin(a)*r}px`;
      root.append(bead);
    });
  }

  function renderMoodGrid() {
    els.homeMoodGrid.innerHTML = THEMES.map(t => `
      <button class="mood-card" data-theme="${t.id}" style="--mood-bg:${t.background};--mood-color:${t.colors[0]}">
        <span>${t.icon}</span><b>${t.name}</b><small>${t.scent}</small>
      </button>`).join('');
    els.homeMoodGrid.querySelectorAll('[data-theme]').forEach(btn => btn.addEventListener('click', () => applyTheme(btn.dataset.theme)));
  }

  function renderCategories() {
    els.categoryTabs.innerHTML = CATEGORIES.map(c => `<button role="tab" aria-selected="${c.id === state.category}" class="${c.id===state.category?'is-active':''}" data-category="${c.id}">${c.label}</button>`).join('');
    els.categoryTabs.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', () => {
      state.category = btn.dataset.category;
      renderCategories();
      renderMaterials();
    }));
  }

  function renderMaterials() {
    els.materialList.innerHTML = '';
    MATERIALS.filter(m => m.category === state.category).forEach(m => {
      const card = document.createElement('button');
      card.className = 'material-card';
      card.dataset.type = m.type || 'bead';
      card.innerHTML = `<span class="material-swatch"><i></i></span><span class="material-copy"><b>${m.name}</b><small>${m.subtitle}</small></span><span class="material-price">${money(m.price)}</span><span class="add-mark">＋</span>`;
      applyBeadAppearance(card.querySelector('.material-swatch i'), m);
      card.addEventListener('click', () => addBead(m.id));
      els.materialList.append(card);
    });
  }

  function pushUndo() {
    state.undo.push({ beads: state.beads.map(b=>({...b})), theme: state.currentTheme });
    if (state.undo.length > 30) state.undo.shift();
    els.undoBtn.disabled = false;
  }

  function addBead(id) {
    if (state.beads.length >= 24) return toast('最多支持 24 颗珠子');
    pushUndo();
    const item = { id, uid: cryptoRandom() };
    if (state.selectedUid) {
      const index = state.beads.findIndex(b => b.uid === state.selectedUid);
      state.beads.splice(index + 1, 0, item);
    } else state.beads.push(item);
    state.selectedUid = item.uid;
    state.currentTheme = '自由设计';
    renderBracelet();
    ping('已加入手串');
  }

  function removeBead(uid) {
    if (state.beads.length <= 1) return toast('至少保留 1 颗珠子');
    pushUndo();
    const idx = state.beads.findIndex(b => b.uid === uid);
    if (idx >= 0) state.beads.splice(idx, 1);
    state.selectedUid = null;
    renderBracelet();
    ping('已移除珠子');
  }

  function renderBracelet() {
    els.braceletRing.innerHTML = '';
    const n = state.beads.length;
    const stageSize = els.braceletStage.clientWidth || 288;
    const radius = stageSize * (state.wrist - 14) * .012 + stageSize * .365;
    const center = stageSize / 2;
    state.beads.forEach((bead, i) => {
      const m = material(bead.id);
      const angle = (Math.PI * 2 * i / n) - Math.PI/2;
      const btn = document.createElement('button');
      btn.className = `bracelet-bead${bead.uid === state.selectedUid ? ' is-selected':''}`;
      btn.dataset.uid = bead.uid;
      btn.dataset.type = m.type || 'bead';
      btn.setAttribute('aria-label', `${m.name}，点击选中，再次点击移除`);
      const scale = Math.max(.79, Math.min(1.12, 19 / Math.max(n, 16)));
      applyBeadAppearance(btn, m);
      btn.style.setProperty('--bead-size', `${Math.max(22, (m.size / 10) * 33 * scale)}px`);
      btn.style.left = `${center + Math.cos(angle)*radius}px`;
      btn.style.top = `${center + Math.sin(angle)*radius}px`;
      bindBeadPointer(btn, i);
      els.braceletRing.append(btn);
    });
    updateSummary();
  }

  function bindBeadPointer(btn, index) {
    let moved = false;
    const start = e => {
      e.preventDefault();
      moved = false;
      state.dragging = { uid: btn.dataset.uid, startIndex:index, pointerId:e.pointerId };
      btn.setPointerCapture?.(e.pointerId);
      btn.classList.add('is-dragging');
      state.selectedUid = btn.dataset.uid;
      els.braceletRing.querySelectorAll('.bracelet-bead').forEach(b => b.classList.toggle('is-selected', b.dataset.uid === state.selectedUid));
    };
    const move = e => {
      if (!state.dragging || state.dragging.pointerId !== e.pointerId) return;
      const rect = els.braceletStage.getBoundingClientRect();
      const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
      let angle = Math.atan2(e.clientY - cy, e.clientX - cx) + Math.PI/2;
      if (angle < 0) angle += Math.PI*2;
      const target = Math.round(angle / (Math.PI*2) * state.beads.length) % state.beads.length;
      const current = state.beads.findIndex(b => b.uid === state.dragging.uid);
      if (target !== current) {
        if (!moved) pushUndo();
        moved = true;
        const [item] = state.beads.splice(current,1);
        state.beads.splice(target,0,item);
        renderBracelet();
        const active = els.braceletRing.querySelector(`[data-uid="${item.uid}"]`);
        active?.classList.add('is-dragging');
      }
    };
    const end = e => {
      const uid = state.dragging?.uid;
      state.dragging = null;
      els.braceletRing.querySelectorAll('.bracelet-bead').forEach(b => b.classList.remove('is-dragging'));
      if (!moved && uid) {
        const now = Date.now();
        if (state.lastTap.uid === uid && now - state.lastTap.time < 440) {
          state.lastTap = { uid: null, time: 0 };
          removeBead(uid);
        } else {
          state.lastTap = { uid, time: now };
          renderBracelet();
          const current = state.beads.find(b => b.uid === uid);
          if (current) ping(`${material(current.id).name} · 双击移除`);
        }
      } else if (moved) ping('顺序已调整');
      try { btn.releasePointerCapture?.(e.pointerId); } catch {}
    };
    btn.addEventListener('pointerdown', start);
    btn.addEventListener('pointermove', move);
    btn.addEventListener('pointerup', end);
    btn.addEventListener('pointercancel', end);
  }

  function updateSummary() {
    els.beadCount.textContent = `${state.beads.length}颗`;
    els.wristDisplay.textContent = `适用 ${state.wrist.toFixed(1)}cm`;
    els.priceDisplay.textContent = money(totalPrice());
    els.undoBtn.disabled = state.undo.length === 0;
  }

  function updateSizeUI() {
    els.wristRange.value = state.wrist;
    const c = recommendedCount();
    els.recommendedText.textContent = `建议 ${Math.max(14,c-1)}–${c+1} 颗`;
    els.wristDisplay.textContent = `适用 ${state.wrist.toFixed(1)}cm`;
  }

  function undo() {
    const prev = state.undo.pop();
    if (!prev) return;
    state.beads = prev.beads;
    state.currentTheme = prev.theme;
    state.selectedUid = null;
    renderBracelet();
    ping('已撤销');
  }

  function clearBracelet() {
    if (!state.beads.length) return;
    pushUndo();
    state.beads = [];
    state.selectedUid = null;
    state.currentTheme = '自由设计';
    renderBracelet();
    ping('手串已清空');
  }

  function shuffleBracelet() {
    if (state.beads.length < 2) return;
    pushUndo();
    for (let i=state.beads.length-1;i>0;i--) {
      const j = Math.floor(Math.random()*(i+1));
      [state.beads[i],state.beads[j]]=[state.beads[j],state.beads[i]];
    }
    state.selectedUid = null;
    renderBracelet();
    ping('已重新排列');
  }

  function renderThemeOptions() {
    els.themeOptions.innerHTML = THEMES.map(t => `
      <button class="theme-option" data-theme="${t.id}" style="--theme-bg:${t.background}">
        <span><b>${t.icon} ${t.name}</b><small>${t.note}<br />推荐香气：${t.scent}</small></span>
        <span class="theme-preview">${t.colors.map((c,i)=>`<i style="--bead-bg:${c}"></i>`).join('')}<i style="--bead-bg:${t.colors[0]}"></i></span>
      </button>`).join('');
    els.themeOptions.querySelectorAll('[data-theme]').forEach(btn => btn.addEventListener('click', () => applyTheme(btn.dataset.theme)));
  }

  function applyTheme(id) {
    const theme = THEMES.find(t => t.id === id);
    if (!theme) return;
    if (state.view === 'designer') pushUndo();
    state.beads = theme.preset.map(beadId => ({ id:beadId, uid:cryptoRandom() }));
    state.currentTheme = theme.name;
    state.selectedUid = null;
    closeModal('themeModal');
    navigate('designer');
    renderBracelet();
    ping(`已生成「${theme.name}」`);
  }

  function renderFilters() {
    const filters = ['全部','塔罗','星座','香氛','能量'];
    els.filterChips.innerHTML = filters.map(f => `<button class="${state.filter===f?'is-active':''}" data-filter="${f}">${f}</button>`).join('');
    els.filterChips.querySelectorAll('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
      state.filter = btn.dataset.filter;
      renderFilters(); renderPresets();
    }));
  }

  function renderPresets() {
    const rows = PRESETS.filter(p => state.filter === '全部' || p.filter === state.filter);
    els.presetList.innerHTML = rows.map(p => `
      <article class="preset-card" style="--preset-bg:${p.background}">
        <div class="preset-copy"><span class="eyebrow">${p.code}</span><h3>${p.name}</h3><p>${p.description}</p><button data-preset="${p.id}">使用此配方 →</button></div>
        <div class="preset-orbit" data-orbit="${p.id}"></div>
      </article>`).join('');
    rows.forEach(p => drawMiniOrbit(els.presetList.querySelector(`[data-orbit="${p.id}"]`), p.beads));
    els.presetList.querySelectorAll('[data-preset]').forEach(btn => btn.addEventListener('click', () => applyPreset(btn.dataset.preset)));
  }

  function drawMiniOrbit(root, ids, smallClass='preset-mini-bead') {
    if (!root) return;
    root.innerHTML = '';
    ids.slice(0,17).forEach((id,i,arr) => {
      const bead = document.createElement('i');
      bead.className = smallClass;
      applyBeadAppearance(bead, material(id));
      const a = Math.PI*2*i/arr.length - Math.PI/2;
      bead.style.left = `${50 + Math.cos(a)*39}%`;
      bead.style.top = `${50 + Math.sin(a)*39}%`;
      root.append(bead);
    });
  }

  function applyPreset(id) {
    const p = PRESETS.find(x=>x.id===id);
    if (!p) return;
    state.beads = p.beads.map(beadId => ({id:beadId,uid:cryptoRandom()}));
    state.currentTheme = p.name;
    state.selectedUid = null;
    state.undo = [];
    navigate('designer');
    renderBracelet();
    ping(`已载入「${p.name}」`);
  }

  function openPreview() {
    if (!state.beads.length) return toast('请先添加珠子');
    const code = `ASTRA-${Date.now().toString(36).slice(-5).toUpperCase()}`;
    els.previewTheme.textContent = state.currentTheme;
    els.previewCode.textContent = code;
    els.previewCode.dataset.code = code;
    els.summaryCount.textContent = `${state.beads.length}颗`;
    els.summaryWrist.textContent = `${state.wrist.toFixed(1)}cm`;
    els.summaryPrice.textContent = money(totalPrice());
    drawPreviewOrbit();
    openModal('previewModal');
  }

  function drawPreviewOrbit() {
    els.previewOrbit.innerHTML = '';
    const n=state.beads.length;
    state.beads.forEach((b,i)=>{
      const m=material(b.id), bead=document.createElement('i');
      bead.className='mini-bead';
      applyBeadAppearance(bead, m);
      const a=Math.PI*2*i/n-Math.PI/2, r=90;
      const s=Math.max(22,Math.min(32,m.size*2.7));
      bead.style.width=bead.style.height=`${s}px`;
      bead.style.left=`${110+Math.cos(a)*r}px`; bead.style.top=`${110+Math.sin(a)*r}px`;
      els.previewOrbit.append(bead);
    });
  }

  function saveDesign() {
    const record = {
      id: cryptoRandom(),
      code: els.previewCode.dataset.code || `ASTRA-${Date.now().toString(36).slice(-5).toUpperCase()}`,
      name: state.currentTheme,
      wrist: state.wrist,
      price: totalPrice(),
      beads: state.beads.map(b=>b.id),
      createdAt: new Date().toISOString(),
    };
    state.history.unshift(record);
    state.history = state.history.slice(0,20);
    saveStorage();
    closeModal('previewModal');
    navigate('profile');
    renderProfile();
    ping('设计已保存到「我的」');
  }

  function renderProfile() {
    const history=state.history;
    els.savedCount.textContent=history.length;
    els.totalBeads.textContent=history.reduce((s,h)=>s+h.beads.length,0);
    const counts={}; history.forEach(h=>counts[h.name]=(counts[h.name]||0)+1);
    els.favoriteMood.textContent=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]?.[0]?.slice(0,4)||'—';
    if (!history.length) {
      els.historyList.innerHTML='<div class="empty-state"><div><span>◌</span><b>还没有保存的设计</b><p>去 DIY 页面完成第一条专属手串吧</p></div></div>';
      return;
    }
    els.historyList.innerHTML=history.map(h=>`<article class="history-card"><div class="history-orbit" data-history="${h.id}"></div><div><b>${h.name}</b><span>${new Date(h.createdAt).toLocaleDateString('zh-CN')} · ${h.beads.length}颗 · ${h.wrist.toFixed(1)}cm</span><em>${money(h.price)}</em></div><button data-reload="${h.id}" aria-label="重新编辑">›</button></article>`).join('');
    history.forEach(h=>drawHistoryOrbit(els.historyList.querySelector(`[data-history="${h.id}"]`),h.beads));
    els.historyList.querySelectorAll('[data-reload]').forEach(btn=>btn.addEventListener('click',()=>reloadHistory(btn.dataset.reload)));
  }

  function drawHistoryOrbit(root, ids) {
    if (!root) return;
    root.innerHTML='';
    ids.slice(0,16).forEach((id,i,arr)=>{
      const bead=document.createElement('i'); applyBeadAppearance(bead, material(id));
      const a=Math.PI*2*i/arr.length-Math.PI/2;
      bead.style.left=`${50+Math.cos(a)*34}%`; bead.style.top=`${50+Math.sin(a)*34}%`;
      root.append(bead);
    });
  }

  function reloadHistory(id) {
    const h=state.history.find(x=>x.id===id); if(!h)return;
    state.beads=h.beads.map(beadId=>({id:beadId,uid:cryptoRandom()}));
    state.wrist=h.wrist; state.currentTheme=h.name; state.undo=[]; state.selectedUid=null;
    updateSizeUI(); navigate('designer'); renderBracelet(); ping('已恢复该设计');
  }

  function downloadDesignCard() {
    const canvas=document.createElement('canvas'); canvas.width=1080; canvas.height=1440;
    const ctx=canvas.getContext('2d');
    const grad=ctx.createLinearGradient(0,0,1080,1440); grad.addColorStop(0,'#eadfd8'); grad.addColorStop(1,'#d9d1e1');
    ctx.fillStyle=grad; ctx.fillRect(0,0,1080,1440);
    ctx.fillStyle='#24211f'; ctx.textAlign='center';
    ctx.font='36px serif'; ctx.fillText('✦  星 石 手 作  ✦',540,100);
    ctx.font='72px serif'; ctx.fillText(state.currentTheme,540,205);
    ctx.font='24px sans-serif'; ctx.fillStyle='rgba(36,33,31,.58)'; ctx.fillText(els.previewCode.textContent,540,252);
    const cx=540, cy=685, r=330, n=state.beads.length;
    state.beads.forEach((b,i)=>{
      const m=material(b.id); const a=Math.PI*2*i/n-Math.PI/2; const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
      const rg=ctx.createRadialGradient(x-18,y-20,5,x,y,55); const colors=extractColors(m.bg);
      rg.addColorStop(0,'#ffffff'); rg.addColorStop(.32,colors[0]); rg.addColorStop(1,colors[1]);
      ctx.beginPath(); ctx.arc(x,y,m.size*5.2,0,Math.PI*2); ctx.fillStyle=rg; ctx.fill();
      ctx.beginPath(); ctx.arc(x-16,y-18,10,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,.55)'; ctx.fill();
    });
    ctx.beginPath(); ctx.arc(cx,cy,185,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,.45)'; ctx.fill();
    ctx.fillStyle='#24211f'; ctx.font='52px serif'; ctx.fillText(`${state.beads.length} 颗`,cx,cy-14);
    ctx.font='28px sans-serif'; ctx.fillStyle='rgba(36,33,31,.6)'; ctx.fillText(`${state.wrist.toFixed(1)}cm · ${money(totalPrice())}`,cx,cy+42);
    ctx.fillStyle='#24211f'; ctx.font='36px serif'; ctx.fillText('把当下的状态，戴在手上',540,1260);
    ctx.font='22px sans-serif'; ctx.fillStyle='rgba(36,33,31,.52)'; ctx.fillText('ASTRA STUDIO · MADE WITH INTENTION',540,1320);
    const link=document.createElement('a'); link.download=`${state.currentTheme}-设计卡.png`; link.href=canvas.toDataURL('image/png'); link.click();
    ping('设计卡已生成');
  }

  function extractColors(bg) {
    const hex=bg.match(/#[0-9a-fA-F]{6}/g)||['#c8b7ba','#74636c'];
    return [hex[Math.min(1,hex.length-1)],hex[hex.length-1]];
  }

  function openModal(id) { const el=q(`#${id}`); if(!el)return; el.classList.add('is-open'); el.setAttribute('aria-hidden','false'); haptic(8); }
  function closeModal(id) { const el=q(`#${id}`); if(!el)return; el.classList.remove('is-open'); el.setAttribute('aria-hidden','true'); }

  function toggleSound() {
    state.sound=!state.sound; els.soundBtn.classList.toggle('is-muted',!state.sound); ping(state.sound?'提示音已开启':'提示音已关闭',false);
  }

  function ping(message, withSound=true) { toast(message); haptic(8); if(withSound && state.sound) beep(); }
  function toast(message) { els.toast.textContent=message; els.toast.classList.add('is-visible'); clearTimeout(toast.t); toast.t=setTimeout(()=>els.toast.classList.remove('is-visible'),1500); }
  function haptic(ms=8) { try { navigator.vibrate?.(ms); } catch {} }
  function beep() {
    try {
      const AudioCtx=window.AudioContext||window.webkitAudioContext; if(!AudioCtx)return;
      const ctx=new AudioCtx(), osc=ctx.createOscillator(), gain=ctx.createGain();
      osc.type='sine'; osc.frequency.value=540; gain.gain.setValueAtTime(.035,ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.08);
      osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime+.08);
    } catch {}
  }

  function saveStorage() { localStorage.setItem('astra-history',JSON.stringify(state.history)); }
  function loadStorage() { try { state.history=JSON.parse(localStorage.getItem('astra-history')||'[]'); } catch { state.history=[]; } }
  function resetStorage() {
    if (!confirm('确定清除本机保存的全部设计吗？')) return;
    state.history=[]; saveStorage(); renderProfile(); ping('本地数据已清除');
  }

  async function installApp() {
    if (state.deferredInstall) {
      state.deferredInstall.prompt(); await state.deferredInstall.userChoice; state.deferredInstall=null; return;
    }
    toast(/iphone|ipad|ipod/i.test(navigator.userAgent) ? 'iPhone：点分享按钮，再选“添加到主屏幕”' : '浏览器菜单中选择“安装应用”或“添加到主屏幕”');
  }

  function registerPWA() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
  }

  window.addEventListener('resize',()=>{ if(state.view==='designer')renderBracelet(); });
  document.addEventListener('DOMContentLoaded',init);
})();
