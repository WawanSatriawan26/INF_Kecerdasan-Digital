/* ==========================================================================
   APP.JS — Logika aplikasi MPI Kecerdasan Digital
   Struktur: STATE -> STORAGE -> HELPERS -> RENDER PER HALAMAN -> ROUTER -> INIT
   ========================================================================== */

/* ================= STATE ================= */
const STORAGE_KEY = "mpi_kecerdasan_digital_v1";

let state = {
  nama: "",
  progress: { materiSelesai: [], simulasiSelesai: [], dndSelesai:false },
  skor: { latihan:null, evaluasi:null },
  badge: [],
  poin: 0,
  streak: 0,
  lastVisit: null,
  refleksi: {},
  proyek: {}
};

/* ================= STORAGE ================= */
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const saved = JSON.parse(raw);
      state = Object.assign(state, saved);
    }
  }catch(e){ console.warn("Gagal memuat data tersimpan:", e); }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ console.warn("Gagal menyimpan data:", e); }
}

/* ================= HELPERS ================= */
function $(sel, ctx){ return (ctx||document).querySelector(sel); }
function $all(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }
function el(tag, attrs, html){
  const e = document.createElement(tag);
  if(attrs) for(const k in attrs) e.setAttribute(k, attrs[k]);
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function toast(msg, ic){
  const t = el("div", {class:"toast"}, `<span style="font-size:1.3rem">${ic||"✅"}</span><span>${msg}</span>`);
  document.body.appendChild(t);
  setTimeout(()=>{ t.remove(); }, 3200);
}
function addPoin(n){
  state.poin += n;
  saveState();
  updateTopbarStats();
}
function kategoriNilai(n){
  if(n>=90) return {l:"SANGAT BAIK", c:"sangat-baik"};
  if(n>=80) return {l:"BAIK", c:"baik"};
  if(n>=70) return {l:"CUKUP", c:"cukup"};
  return {l:"PERLU BIMBINGAN", c:"bimbingan"};
}
function pesanMotivasi(n){
  if(n>=90) return "Luar biasa! Pemahamanmu tentang Kecerdasan Digital sudah sangat baik. 🎉";
  if(n>=80) return "Kerja bagus! Kamu sudah memahami sebagian besar materi dengan baik. 👍";
  if(n>=70) return "Cukup baik. Coba pelajari lagi bagian yang masih terasa sulit ya. 💪";
  return "Jangan menyerah! Pelajari kembali materinya lalu coba lagi. Kamu pasti bisa. 🌱";
}

/* ================= GAMIFIKASI ================= */
function cekBadge(){
  const baru = [];
  const punya = id => state.badge.includes(id);
  if(!punya("beginner") && state.progress.materiSelesai.length>=1){ state.badge.push("beginner"); baru.push("beginner"); }
  if(!punya("explorer") && state.progress.materiSelesai.length>=MATERI.length){ state.badge.push("explorer"); baru.push("explorer"); }
  if(!punya("smart") && state.skor.latihan!==null && state.skor.latihan>=80){ state.badge.push("smart"); baru.push("smart"); }
  if(!punya("safety") && state.progress.simulasiSelesai.length>=SIMULASI.length && state.progress.dndSelesai){ state.badge.push("safety"); baru.push("safety"); }
  if(!punya("master") && state.skor.evaluasi!==null && state.skor.evaluasi>=80){ state.badge.push("master"); baru.push("master"); }
  if(baru.length){
    saveState();
    baru.forEach(id=>{
      const b = BADGES.find(x=>x.id===id);
      toast(`Badge baru diraih: ${b.nama}!`, b.ic);
    });
  }
}
function updateTopbarStats(){
  $("#stat-poin").textContent = state.poin;
  $("#stat-badge").textContent = state.badge.length + "/" + BADGES.length;
  const totalUnit = MATERI.length + SIMULASI.length + 1; // +1 untuk dnd
  const selesai = state.progress.materiSelesai.length + state.progress.simulasiSelesai.length + (state.progress.dndSelesai?1:0);
  const pct = Math.round((selesai/totalUnit)*100);
  $("#global-progress-fill").style.width = pct+"%";
  $("#stat-progress").textContent = pct+"%";
}

/* ================= ROUTER ================= */
const ROUTES = {
  beranda: renderBeranda,
  tujuan: renderTujuan,
  materi: renderMateri,
  a1: renderRingkasanBab.bind(null,"a1"),
  a2: renderRingkasanBab.bind(null,"a2"),
  a3: renderRingkasanBab.bind(null,"a3"),
  a4: renderRingkasanBab.bind(null,"a4"),
  b1: renderRingkasanBab.bind(null,"b1"),
  b2: renderRingkasanBab.bind(null,"b2"),

  perangkat: renderPerangkat,
  platform: renderPlatform,
  sumber: renderSumber,
  keamanan: renderKeamananLiterasi.bind(null,"keamanan"),
  etika: renderEtika,
  literasi: renderKeamananLiterasi.bind(null,"literasi"),
  ai: renderAI,
  simulasi: renderSimulasi,
  dragdrop: renderDragDrop,
  latihan: renderLatihan,
  quiz: renderQuiz,
  evaluasi: renderEvaluasi,
  proyek: renderProyek,
  rangkuman: renderRangkuman,
  refleksi: renderRefleksi,
  profil: renderProfil
};

function navigate(route){
  if(!ROUTES[route]) route = "beranda";
  location.hash = route;
  $all(".nav-btn").forEach(b=> b.classList.toggle("active", b.dataset.route===route));
  $("#content").innerHTML = "";
  ROUTES[route]();
  $("#content").scrollTop = 0;
  window.scrollTo({top:0, behavior:"smooth"});
  if(window.innerWidth<=860) $("#sidebar").classList.remove("open");
}

window.addEventListener("hashchange", ()=>{
  const r = location.hash.replace("#","") || "beranda";
  navigate(r);
});

/* ================= RENDER: BERANDA ================= */
function renderBeranda(){
  const c = $("#content");
  const sudahPernah = !!state.lastVisit;
  const namaTampil = state.nama ? state.nama : "";
  c.appendChild(el("div", {class:"hero"}, `
    <div class="hero__eyebrow">MEDIA PEMBELAJARAN INTERAKTIF</div>
    <h1>Kecerdasan Digital</h1>
    <p class="lead">${SEKOLAH.nama} · ${SEKOLAH.mapel} Kelas ${SEKOLAH.kelas} · Fase ${SEKOLAH.fase} · ${SEKOLAH.kurikulum}</p>
    <div class="hero__icons">
      <span title="Komputer">💻</span>
      <span title="Identitas Digital">☁️</span>
      <span title="Literasi Digital">🔤</span>
      <span title="Karya Digital">📄</span>
    </div>
    <div style="display:flex; gap:.7rem; flex-wrap:wrap;">
      <button class="btn" id="btn-mulai">🚀 Mulai Belajar</button>
      <button class="btn secondary" id="btn-lihat-tujuan">🎯 Lihat Tujuan Pembelajaran</button>
    </div>
    ${sudahPernah ? `<div class="hero__welcome-back">
        <span style="font-size:1.5rem;">👋</span>
        <div><strong>Selamat datang kembali${namaTampil? ", "+namaTampil : ""}!</strong><br>
        <span style="color:#C9D2ED; font-size:.85rem;">Lanjutkan pembelajaran Anda dari titik terakhir.</span></div>
      </div>` : ""}
  `));

  if(!state.nama){
    const box = el("div", {class:"card", style:"max-width:420px; margin-bottom:1.4rem;"}, `
      <h3 style="margin-bottom:.5rem;">Siapa nama kamu?</h3>
      <p style="color:var(--ink-soft); font-size:.88rem;">Nama akan digunakan untuk menyimpan progres belajarmu di perangkat ini.</p>
      <div style="display:flex; gap:.5rem;">
        <input id="input-nama" placeholder="Tulis namamu…" style="flex:1; border:1.5px solid var(--line); border-radius:8px; padding:.6rem .8rem; font-family:inherit;">
        <button class="btn small" id="btn-simpan-nama">Simpan</button>
      </div>
    `);
    c.appendChild(box);
    $("#btn-simpan-nama", box).addEventListener("click", ()=>{
      const v = $("#input-nama", box).value.trim();
      if(v){ state.nama = v; saveState(); toast("Nama tersimpan, selamat belajar "+v+"!","👋"); navigate("beranda"); }
    });
  }

  const stat = el("div", {class:"stat-strip"});
  stat.appendChild(statPill("📘", state.progress.materiSelesai.length+"/"+MATERI.length, "Topik materi selesai"));
  stat.appendChild(statPill("🎮", state.progress.simulasiSelesai.length+"/"+SIMULASI.length, "Simulasi selesai"));
  stat.appendChild(statPill("⭐", state.poin, "Poin dikumpulkan"));
  stat.appendChild(statPill("🏆", state.badge.length+"/"+BADGES.length, "Badge diraih"));
  c.appendChild(stat);

  const grid = el("div", {class:"grid cols-4"});
  const menuUtama = [
    ["materi","📖","Materi","2 bagian · 6 topik Kecerdasan Digital"],
  ];
  menuUtama.forEach(([r,ic,t,d])=>{
    const card = el("div", {class:"device-card", style:"cursor:pointer;"}, `
      <div class="ic">${ic}</div><h4>${t}</h4><p>${d}</p>
    `);
    card.addEventListener("click", ()=> navigate(r));
    grid.appendChild(card);
  });
  c.appendChild(el("div",{class:"section-head", style:"margin-top:1.4rem;"},"<h2>Mulai dari sini</h2>"));
  c.appendChild(grid);

  $("#btn-mulai").addEventListener("click", ()=> navigate("tujuan"));
  $("#btn-lihat-tujuan").addEventListener("click", ()=> navigate("tujuan"));

  state.lastVisit = new Date().toISOString();
  saveState();
}
function statPill(ic,n,l){
  return el("div", {class:"stat-pill"}, `<span class="ic">${ic}</span><div><div class="n">${n}</div><div class="l">${l}</div></div>`);
}

/* ================= RENDER: TUJUAN ================= */
function renderTujuan(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>🎯 Tujuan Pembelajaran</h2>
    <p>Klik setiap kartu untuk melihat kompetensi, contoh penerapan, dan aktivitas yang akan kamu lakukan.</p>
  `));
  const grid = el("div", {class:"grid cols-3"});
  TUJUAN.forEach((t,i)=>{
    const card = el("div", {class:"goal-card"}, `
      <div class="goal-card__num">TUJUAN ${i+1}</div>
      <h4>${t.judul}</h4>
    `);
    card.addEventListener("click", ()=> openModal(`Tujuan ${i+1}`, `
      <p><strong>${t.judul}</strong></p>
      <div class="mini-block"><div class="label">Kompetensi</div><p>${t.kompetensi}</p></div>
      <div class="mini-block"><div class="label">Contoh Penerapan</div><p>${t.contoh}</p></div>
      <div class="mini-block"><div class="label">Aktivitas Siswa</div><p>${t.aktivitas}</p></div>
    `));
    grid.appendChild(card);
  });
  c.appendChild(grid);
}

/* ================= RENDER: MATERI ================= */
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function renderSubmateri(bab){
  return (bab.submateri || []).map(s=>`<section class="mini-block"><h3>${escapeHTML(s.judul)}</h3><p>${escapeHTML(s.isi)}</p>${s.contoh ? `<p><strong>Contoh:</strong> ${escapeHTML(s.contoh)}</p>` : ""}${s.aktivitas ? `<p><strong>Latihan:</strong> ${escapeHTML(s.aktivitas)}</p>` : ""}</section>`).join("");
}
function renderRangkuman(){
  const c = $("#content");
  c.appendChild(el("div",{class:"section-head"},"<h2>📋 Rangkuman Kecerdasan Digital</h2><p>Ringkasan bagian A dan B untuk dibaca kembali sebelum mengisi Refleksi.</p>"));
  let bagianRangkuman = "";
  MATERI.forEach(bab=>{
    if(bab.bagian !== bagianRangkuman){
      bagianRangkuman = bab.bagian;
      const bagian = BAGIAN_MATERI.find(g=>g.id === bab.bagian);
      c.appendChild(el("h2",{},escapeHTML(bagian.judul)));
    }
    const card = el("section",{class:"card",style:"margin-bottom:1rem;"},`<h3>${bab.ic} ${bab.judul}</h3><p>${bab.pengertian}</p><ul>${bab.submateri.map(s=>`<li><strong>${escapeHTML(s.judul)}</strong>: ${escapeHTML(s.isi)}</li>`).join("")}</ul>`);
    c.appendChild(card);
  });
  const btn=el("button",{class:"btn"},"💡 Lanjut ke Refleksi");
  btn.addEventListener("click",()=>navigate("refleksi")); c.appendChild(btn);
}

function renderMateri(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>📖 Materi Kecerdasan Digital</h2>
    <p>6 topik dalam 2 bagian disajikan dalam bentuk kartu yang dapat dibuka. Selesaikan pertanyaan di setiap topik untuk menandai progres.</p>
  `));
  let bagianAktif = "";
  MATERI.forEach(bab=>{
    if(bab.bagian !== bagianAktif){
      bagianAktif = bab.bagian;
      const bagian = BAGIAN_MATERI.find(g=>g.id === bab.bagian);
      c.appendChild(el("div",{class:"section-head"},`<h2>${escapeHTML(bagian.judul)}</h2>`));
    }
    const done = state.progress.materiSelesai.includes(bab.id);
    const acc = el("div", {class:"acc", id:"acc-"+bab.id});
    acc.appendChild(el("button", {class:"acc__head"}, `
      <span>${bab.ic} ${bab.judul} ${done? '<span class="badge-tag">✔ Selesai</span>':''}</span>
      <span class="chev">⌄</span>
    `));
    const body = el("div", {class:"acc__body"});
    const inner = el("div", {class:"acc__inner"}, `
      <div class="flow-steps">${bab.flow.map((f,i)=>`<span class="fs">${f}</span>${i<bab.flow.length-1?'<span class="arrow">→</span>':''}`).join("")}</div>
      <div class="mini-block"><div class="label">Pengertian</div><p>${bab.pengertian}</p></div>
      ${renderSubmateri(bab)}
      <div class="mini-block"><div class="label">Manfaat</div><ul>${bab.manfaat.map(x=>`<li>${x}</li>`).join("")}</ul></div>
      <div class="mini-block"><div class="label">Contoh Kehidupan Nyata</div><p>${bab.contohNyata}</p></div>
      <div class="mini-block"><div class="label">Aktivitas Interaktif</div><p>${bab.aktivitas}</p></div>
      <div class="check-question" id="cq-${bab.id}">
        <div class="q">🧩 Pertanyaan Pemahaman: ${bab.pertanyaan.q}</div>
        <div class="options">
          ${bab.pertanyaan.opsi.map((o,i)=>`<button class="pill-choice" data-i="${i}">${o}</button>`).join("")}
        </div>
        <div class="feedback-note" style="display:none;"></div>
      </div>
    `);
    body.appendChild(inner);
    acc.appendChild(body);
    c.appendChild(acc);

    $(".acc__head", acc).addEventListener("click", ()=> acc.classList.toggle("open"));

    $all(".pill-choice", inner).forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const i = parseInt(btn.dataset.i,10);
        const opts = $all(".pill-choice", inner);
        opts.forEach(o=>o.disabled=true);
        if(i===bab.pertanyaan.jawaban){
          btn.classList.add("correct");
          $(".feedback-note", inner).style.display="block";
          $(".feedback-note", inner).textContent = "🎉 Benar! " + bab.pertanyaan.penjelasan;
          if(!state.progress.materiSelesai.includes(bab.id)){
            state.progress.materiSelesai.push(bab.id);
            addPoin(10);
            saveState();
            cekBadge();
            toast("Topik selesai dipelajari! +10 poin", "📘");
            $(".acc__head span:first-child", acc).innerHTML = `${bab.ic} ${bab.judul} <span class="badge-tag">✔ Selesai</span>`;
          }
        }else{
          btn.classList.add("wrong");
          opts[bab.pertanyaan.jawaban].classList.add("correct");
          $(".feedback-note", inner).style.display="block";
          $(".feedback-note", inner).textContent = "Belum tepat. " + bab.pertanyaan.penjelasan;
        }
        updateTopbarStats();
      });
    });
  });
}

/* ================= RENDER: PERANGKAT / PLATFORM / SUMBER ================= */
function renderKartuSederhana(judul, deskripsi, data){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `<h2>${judul}</h2><p>${deskripsi}</p>`));
  const grid = el("div", {class:"grid cols-4"});
  data.forEach(d=>{
    grid.appendChild(el("div", {class:"device-card"}, `<div class="ic">${d.ic}</div><h4>${d.n}</h4><p>${d.d}</p>`));
  });
  c.appendChild(grid);
}
function renderPerangkat(){ renderKartuSederhana("💻 Perangkat Digital","Kenali perangkat dan gunakan sesuai kebutuhan belajar.", PERANGKAT); }
function renderPlatform(){ renderKartuSederhana("🧰 Platform Digital","Kenali alat belajar, berkarya, dan kolaborasi yang bertanggung jawab.", PLATFORM); }
function renderSumber(){ renderKartuSederhana("📚 Sumber Belajar Kecerdasan Digital","Panduan dan sumber untuk mempelajari kecerdasan digital.", SUMBER); }

/* ================= RENDER: ETIKA / KEAMANAN / LITERASI / AI (ringkasan dari MATERI) ================= */
function renderRingkasanBab(idBab){
  const c = $("#content");
  const bab = MATERI.find(b=>b.id===idBab);
  c.appendChild(el("div", {class:"section-head"}, `<h2>${bab.ic} ${bab.judul}</h2>`));
  const card = el("div", {class:"card"}, `
    <div class="mini-block"><div class="label">Pengertian</div><p>${bab.pengertian}</p></div>
    ${renderSubmateri(bab)}
    <div class="mini-block"><div class="label">Manfaat</div><ul>${bab.manfaat.map(x=>`<li>${x}</li>`).join("")}</ul></div>
    <div class="mini-block"><div class="label">Contoh Kehidupan Nyata</div><p>${bab.contohNyata}</p></div>
  `);
  c.appendChild(card);
  const cta = el("div", {style:"margin-top:1rem;"});
  cta.appendChild(el("button", {class:"btn"}, "📖 Buka di Halaman Materi Lengkap"));
  cta.querySelector("button").addEventListener("click", ()=> navigate("materi"));
  c.appendChild(cta);
}
function renderEtika(){ renderRingkasanBab("a3"); }
function renderAI(){ renderRingkasanBab("b2"); }
function renderKeamananLiterasi(which){ renderRingkasanBab(which==="keamanan" ? "a2" : "a4"); }

/* ================= RENDER: SIMULASI ================= */
function renderSimulasi(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>🎮 Simulasi Kecerdasan Digital</h2>
    <p>Selesaikan lima simulasi berikut untuk melatih pengambilan keputusan dalam situasi nyata.</p>
  `));
  SIMULASI.forEach(sim=>{
    const done = state.progress.simulasiSelesai.includes(sim.id);
    const box = el("div", {class:"card", style:"margin-bottom:1rem;"});
    box.appendChild(el("h3", {}, `${sim.judul} ${done?'<span class="badge-tag">✔ Selesai</span>':''}`));
    const scenario = el("div", {class:"sim-scenario"}, `<div class="tag">Skenario</div><p style="margin:.3rem 0 0;">${sim.skenario}</p>`);
    box.appendChild(scenario);
    const grid = el("div", {class:"choice-grid"});
    const selected = new Set();
    sim.pilihan.forEach(p=>{
      const b = el("button", {class:"choice-btn", type:"button"}, p);
      b.addEventListener("click", ()=>{
        if(sim.tipe==="multi"){
          if(selected.has(p)){ selected.delete(p); b.classList.remove("selected"); }
          else{ selected.add(p); b.classList.add("selected"); }
        }else{
          $all(".choice-btn", grid).forEach(x=>x.classList.remove("selected"));
          selected.clear(); selected.add(p); b.classList.add("selected");
          cekJawabanSimulasi();
        }
      });
      grid.appendChild(b);
    });
    box.appendChild(grid);
    if(sim.tipe==="multi"){
      const submitBtn = el("button", {class:"btn small", style:"margin-top:.8rem;"}, "Periksa Jawaban");
      submitBtn.addEventListener("click", cekJawabanSimulasi);
      box.appendChild(submitBtn);
    }
    const resultBox = el("div", {style:"display:none;"});
    box.appendChild(resultBox);

    function cekJawabanSimulasi(){
      const chosen = Array.from(selected);
      const benarSet = new Set(sim.benar);
      let cocok;
      if(sim.tipe==="multi"){
        cocok = chosen.length===sim.benar.length && chosen.every(x=>benarSet.has(x));
      }else{
        cocok = chosen.length && benarSet.has(chosen[0]);
      }
      $all(".choice-btn", grid).forEach(b=>{
        b.disabled = true;
        if(benarSet.has(b.textContent)) b.classList.add("correct-answer");
        else if(selected.has(b.textContent)) b.classList.add("wrong-answer");
      });
      resultBox.style.display="block";
      resultBox.innerHTML = `<div class="sim-result ${cocok?'ok':'bad'}">${cocok? '🎉 Tepat! ' : '💡 Belum tepat. '}${sim.penjelasanBenar}</div>`;
      if(!state.progress.simulasiSelesai.includes(sim.id)){
        state.progress.simulasiSelesai.push(sim.id);
        addPoin(15);
        saveState();
        cekBadge();
        toast("Simulasi selesai! +15 poin","🎮");
        box.querySelector("h3").innerHTML = `${sim.judul} <span class="badge-tag">✔ Selesai</span>`;
      }
      updateTopbarStats();
    }
    c.appendChild(box);
  });
}

/* ================= RENDER: DRAG & DROP ================= */
function renderDragDrop(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>🧩 Aktivitas Drag and Drop</h2>
    <p>Seret setiap item ke kategori Kecerdasan Digital yang benar: Kewarganegaraan Digital, Kreativitas Digital, atau Daya Saing Digital. Kamu juga bisa mengetuk item lalu mengetuk kategori tujuan (untuk perangkat sentuh).</p>
  `));
  const wrap = el("div", {class:"dnd-wrap"});
  const pool = el("div", {class:"dnd-pool"}, `<h4>Item (seret ke kategori)</h4>`);
  const items = shuffle(DND.item);
  let activeDrag = null;
  let selectedForTap = null;

  items.forEach(it=>{
    const chip = el("span", {class:"dnd-item", draggable:"true", "data-name":it.n, "data-kat":it.kat}, it.n);
    chip.addEventListener("dragstart", e=>{ activeDrag = it; e.dataTransfer.setData("text/plain", it.n); });
    chip.addEventListener("click", ()=>{
      if(chip.classList.contains("placed")) return;
      $all(".dnd-item", pool).forEach(x=>x.style.outline="none");
      selectedForTap = it;
      chip.style.outline = "2px solid var(--teal)";
    });
    pool.appendChild(chip);
  });
  wrap.appendChild(pool);

  const targets = el("div", {class:"dnd-targets"});
  DND.kategori.forEach(kat=>{
    const t = el("div", {class:"dnd-target", "data-kat":kat.id}, `<h5>${kat.nama}</h5>`);
    t.addEventListener("dragover", e=>{ e.preventDefault(); t.classList.add("drag-over"); });
    t.addEventListener("dragleave", ()=> t.classList.remove("drag-over"));
    t.addEventListener("drop", e=>{
      e.preventDefault(); t.classList.remove("drag-over");
      if(activeDrag) taruh(activeDrag, kat.id, t);
      activeDrag = null;
    });
    t.addEventListener("click", ()=>{
      if(selectedForTap){ taruh(selectedForTap, kat.id, t); selectedForTap = null; }
    });
    targets.appendChild(t);
  });
  wrap.appendChild(targets);
  c.appendChild(wrap);

  const checkBtn = el("button", {class:"btn", style:"margin-top:1.1rem;"}, "✅ Periksa Semua Jawaban");
  const summary = el("div", {style:"margin-top:.8rem;"});
  c.appendChild(checkBtn);
  c.appendChild(summary);

  let placedCount = 0;
  function taruh(item, targetKat, targetEl){
    const chip = $(`.dnd-item[data-name="${CSS.escape(item.n)}"]`, pool);
    if(chip && !chip.classList.contains("placed")){
      chip.classList.add("placed");
      const clone = el("span", {class:"dnd-item", "data-name":item.n, "data-kat":item.kat, "data-target":targetKat}, item.n);
      targetEl.appendChild(clone);
      placedCount++;
    }
  }

  checkBtn.addEventListener("click", ()=>{
    let benar=0, total=0;
    $all(".dnd-target", targets).forEach(t=>{
      $all(".dnd-item", t).forEach(chip=>{
        total++;
        if(chip.dataset.kat === chip.dataset.target){ chip.classList.add("right"); benar++; }
        else{ chip.classList.add("wrong"); }
      });
    });
    if(total < DND.item.length){
      summary.innerHTML = `<div class="sim-result bad">Masih ada ${DND.item.length-total} item yang belum diletakkan ke kategori. Lengkapi dahulu sebelum diperiksa.</div>`;
      return;
    }
    const pct = Math.round((benar/total)*100);
    summary.innerHTML = `<div class="sim-result ${pct>=70?'ok':'bad'}">Hasil: ${benar} dari ${total} item benar (${pct}%). ${pct>=70? "Kerja bagus, pengelompokanmu sudah tepat!":"Coba periksa kembali item yang berwarna merah."}</div>`;
    if(pct>=70 && !state.progress.dndSelesai){
      state.progress.dndSelesai = true;
      addPoin(15);
      saveState();
      cekBadge();
      toast("Aktivitas Drag and Drop selesai! +15 poin","🧩");
      updateTopbarStats();
    }
  });
}

/* ================= QUIZ ENGINE (dipakai untuk Latihan & Evaluasi) ================= */
function buatQuizEngine(container, bank, opsi){
  // opsi: {judul, subjudul, jumlahSoal, skorKey, poinPerSoal, badgeCek}
  const soal = shuffle(bank).slice(0, opsi.jumlahSoal).map(s=>{
    const idxAsli = s.opsi.map((_,i)=>i);
    const idxAcak = shuffle(idxAsli);
    return {
      q: s.q,
      tipe: s.tipe || s.tag || "pg",
      pembahasan: s.pembahasan,
      opsi: idxAcak.map(i=>s.opsi[i]),
      jawaban: idxAcak.indexOf(s.jawaban)
    };
  });
  let idx = 0, benar = 0;
  const jawabanUser = new Array(soal.length).fill(null);

  render();

  function render(){
    container.innerHTML = "";
    const shell = el("div", {class:"quiz-shell"});
    shell.appendChild(el("div", {class:"section-head"}, `<h2>${opsi.judul}</h2><p>${opsi.subjudul}</p>`));
    const prog = el("div", {class:"quiz-progress"}, `
      <span>Soal ${idx+1} / ${soal.length}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.round(((idx)/soal.length)*100)}%"></div></div>
    `);
    shell.appendChild(prog);

    const s = soal[idx];
    const card = el("div", {class:"quiz-card"});
    card.appendChild(el("div", {class:"qtype"}, labelTipe(s.tipe)));
    card.appendChild(el("div", {class:"qtext"}, s.q));
    const optWrap = el("div", {class:"quiz-options"});
    s.opsi.forEach((o,i)=>{
      const b = el("button", {class:"quiz-option", type:"button"}, `<span class="bullet">${String.fromCharCode(65+i)}</span><span>${o}</span>`);
      b.addEventListener("click", ()=> jawab(i));
      optWrap.appendChild(b);
    });
    card.appendChild(optWrap);
    card.appendChild(el("div", {class:"quiz-feedback", style:"display:none;"}));
    shell.appendChild(card);

    const nav = el("div", {class:"quiz-nav"});
    const prevBtn = el("button", {class:"btn ghost small"}, "← Sebelumnya");
    prevBtn.disabled = idx===0;
    prevBtn.addEventListener("click", ()=>{ idx--; render(); });
    const nextBtn = el("button", {class:"btn small", id:"quiz-next"}, idx===soal.length-1 ? "Selesai →" : "Selanjutnya →");
    nextBtn.disabled = jawabanUser[idx]===null;
    nextBtn.addEventListener("click", ()=>{
      if(idx===soal.length-1) selesai();
      else{ idx++; render(); }
    });
    nav.appendChild(prevBtn); nav.appendChild(nextBtn);
    shell.appendChild(nav);
    container.appendChild(shell);

    if(jawabanUser[idx]!==null){ tampilkanJawaban(jawabanUser[idx], false); }

    function jawab(i){
      if(jawabanUser[idx]!==null) return;
      jawabanUser[idx] = i;
      if(i===s.jawaban) benar++;
      tampilkanJawaban(i, true);
      nextBtn.disabled = false;
    }
    function tampilkanJawaban(i, animasi){
      $all(".quiz-option", optWrap).forEach((b,bi)=>{
        b.disabled = true;
        if(bi===s.jawaban) b.classList.add("correct");
        else if(bi===i) b.classList.add("incorrect");
      });
      const fb = $(".quiz-feedback", card);
      fb.style.display = "block";
      const isCorrect = i===s.jawaban;
      fb.className = "quiz-feedback " + (isCorrect ? "ok":"bad");
      fb.innerHTML = (isCorrect ? "🎉 <strong>Jawaban benar!</strong> " : "❌ <strong>Jawaban belum tepat.</strong> ") + s.pembahasan;
    }
  }

  function labelTipe(t){
    const map = {pg:"Pilihan Ganda", bs:"Benar / Salah", cocok:"Mencocokkan", studi:"Studi Kasus", hots:"HOTS",
      konsep:"Pemahaman Konsep", penerapan:"Penerapan", analisis:"Analisis"};
    return map[t] || "Pilihan Ganda";
  }

  function selesai(){
    const nilai = Math.round((benar/soal.length)*100);
    state.skor[opsi.skorKey] = nilai;
    addPoin(opsi.poinPerSoal * benar);
    saveState();
    cekBadge();
    tampilkanHasil(nilai);
  }

  function tampilkanHasil(nilai){
    container.innerHTML = "";
    const kat = kategoriNilai(nilai);
    const box = el("div", {class:"quiz-shell"});
    box.appendChild(el("div", {class:"card result-summary"}, `
      <div style="font-size:2rem;">${nilai>=80?'🎉':nilai>=70?'🙂':'💡'}</div>
      <div class="score-big">${nilai}</div>
      <span class="kategori ${kat.c}">${kat.l}</span>
      <p style="margin-top:1rem; color:var(--ink-soft);">${pesanMotivasi(nilai)}</p>
      <div class="result-stats">
        <div><div class="n">${soal.length}</div><div class="l">Jumlah Soal</div></div>
        <div><div class="n">${benar}</div><div class="l">Jawaban Benar</div></div>
        <div><div class="n">${soal.length-benar}</div><div class="l">Jawaban Salah</div></div>
      </div>
      <div style="margin-top:1.4rem; display:flex; gap:.6rem; justify-content:center; flex-wrap:wrap;">
        <button class="btn small" id="quiz-ulang">🔁 Coba Lagi</button>
        <button class="btn ghost small" id="quiz-beranda">🏠 Kembali ke Beranda</button>
      </div>
    `));
    container.appendChild(box);
    $("#quiz-ulang").addEventListener("click", ()=> navigate(opsi.route));
    $("#quiz-beranda").addEventListener("click", ()=> navigate("beranda"));
    updateTopbarStats();
  }
}

function renderLatihan(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>📝 Latihan Soal</h2>
    <p>Pilih jenis latihan yang ingin kamu kerjakan.</p>
  `));
  const grid = el("div", {class:"grid cols-2"});
  const a = el("div", {class:"device-card", style:"cursor:pointer; text-align:left;"}, `
    <div class="ic">📝</div><h4>Quiz Latihan (20 soal)</h4><p>Latihan campuran dari seluruh BAB dengan pembahasan langsung.</p>`);
  a.addEventListener("click", ()=> navigate("quiz"));
  const b = el("div", {class:"device-card", style:"cursor:pointer; text-align:left;"}, `
    <div class="ic">🏆</div><h4>Evaluasi Akhir (30 soal)</h4><p>Penilaian akhir dengan komposisi konsep, penerapan, analisis, dan HOTS.</p>`);
  b.addEventListener("click", ()=> navigate("evaluasi"));
  grid.appendChild(a); grid.appendChild(b);
  c.appendChild(grid);
}

function renderQuiz(){
  const c = $("#content");
  buatQuizEngine(c, QUIZ_BANK, {
    judul:"📝 Quiz Latihan", subjudul:"20 soal acak dari seluruh BAB materi. Jawaban langsung diberi pembahasan.",
    jumlahSoal:20, skorKey:"latihan", poinPerSoal:5, route:"quiz"
  });
}
function renderEvaluasi(){
  const c = $("#content");
  buatQuizEngine(c, EVALUASI_BANK, {
    judul:"🏆 Evaluasi Akhir", subjudul:"30 soal (40% konsep, 30% penerapan, 20% analisis, 10% HOTS), urutan dan pilihan diacak.",
    jumlahSoal:30, skorKey:"evaluasi", poinPerSoal:6, route:"evaluasi"
  });
}

/* ================= RENDER: PROYEK ================= */
function renderProyek(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>🗂️ Proyek: Karya dan Solusi Digital</h2>
    <p>Rancang karya atau solusi yang menerapkan kecerdasan digital pada template berikut.</p>
  `));
  const card = el("div", {class:"card", style:"max-width:640px;"});
  PROYEK_FIELDS.forEach(f=>{
    const field = el("div", {class:"proyek-field"});
    field.appendChild(el("label", {}, f.l));
    const value = state.proyek[f.k] || "";
    if(f.type==="input") field.appendChild(el("input", {type:"text", "data-k":f.k, value:value}));
    else field.appendChild(el("textarea", {"data-k":f.k}, value));
    card.appendChild(field);
  });
  const saveBtn = el("button", {class:"btn small"}, "💾 Simpan Rencana");
  card.appendChild(saveBtn);
  c.appendChild(card);
  saveBtn.addEventListener("click", ()=>{
    PROYEK_FIELDS.forEach(f=>{
      const inputEl = card.querySelector(`[data-k="${f.k}"]`);
      state.proyek[f.k] = inputEl.value;
    });
    saveState();
    addPoin(10);
    toast("Rencana proyek tersimpan! +10 poin","🗂️");
    updateTopbarStats();
  });
}

/* ================= RENDER: REFLEKSI ================= */
function renderRefleksi(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `
    <h2>💡 Refleksi Pembelajaran</h2>
    <p>Renungkan kembali proses belajarmu hari ini.</p>
  `));
  const card = el("div", {class:"card", style:"max-width:640px; margin-bottom:1rem;"});
  card.appendChild(el("div", {class:"mini-block"}, `<div class="label">Secara umum, seberapa paham kamu terhadap materi Kecerdasan Digital?</div>`));
  const moodRow = el("div", {class:"mood-row"});
  MOOD_OPT.forEach(m=>{
    const btn = el("button", {class:"mood-btn"+(state.refleksi.mood===m.l?" selected":"")}, `<span class="ic">${m.ic}</span>${m.l}`);
    btn.addEventListener("click", ()=>{
      $all(".mood-btn", moodRow).forEach(x=>x.classList.remove("selected"));
      btn.classList.add("selected");
      state.refleksi.mood = m.l; saveState();
    });
    moodRow.appendChild(btn);
  });
  card.appendChild(moodRow);
  c.appendChild(card);

  REFLEKSI_Q.forEach((q,i)=>{
    const box = el("div", {class:"card", style:"max-width:640px; margin-bottom:.8rem;"});
    box.appendChild(el("div", {class:"mini-block"}, `<div class="label">Pertanyaan ${i+1}</div><p>${q}</p>`));
    const ta = el("textarea", {class:"reflect-input", placeholder:"Tulis jawabanmu di sini…"});
    ta.value = state.refleksi["q"+i] || "";
    ta.addEventListener("input", ()=>{ state.refleksi["q"+i] = ta.value; });
    box.appendChild(ta);
    c.appendChild(box);
  });
  const saveBtn = el("button", {class:"btn"}, "💾 Simpan Refleksi");
  saveBtn.addEventListener("click", ()=>{
    saveState(); addPoin(10); toast("Refleksi tersimpan, terima kasih!","💡"); updateTopbarStats();
  });
  c.appendChild(saveBtn);
}

/* ================= RENDER: PROFIL ================= */
function renderProfil(){
  const c = $("#content");
  c.appendChild(el("div", {class:"section-head"}, `<h2>👤 Profil & Progres Belajar</h2>`));
  const head = el("div", {class:"profile-head"}, `
    <div class="profile-avatar">${(state.nama||"?").charAt(0).toUpperCase()}</div>
    <div><h3 style="margin-bottom:.15rem;">${state.nama || "Siswa Belum Mengisi Nama"}</h3>
    <p style="margin:0; color:var(--ink-soft); font-size:.85rem;">${SEKOLAH.mapel} · Kelas ${SEKOLAH.kelas} · ${SEKOLAH.nama}</p></div>
  `);
  c.appendChild(head);

  const stat = el("div", {class:"stat-strip"});
  stat.appendChild(statPill("⭐", state.poin, "Total Poin"));
  stat.appendChild(statPill("📝", state.skor.latihan===null?"-":state.skor.latihan, "Nilai Quiz Latihan"));
  stat.appendChild(statPill("🏆", state.skor.evaluasi===null?"-":state.skor.evaluasi, "Nilai Evaluasi Akhir"));
  stat.appendChild(statPill("🥇", state.badge.length+"/"+BADGES.length, "Badge Diraih"));
  c.appendChild(stat);

  c.appendChild(el("h3", {style:"margin-top:1.2rem;"}, "Progres Materi"));
  const progCard = el("div", {class:"card"});
  MATERI.forEach(bab=>{
    const done = state.progress.materiSelesai.includes(bab.id);
    progCard.appendChild(el("div", {class:"materi-progress-row"}, `
      <span class="status-ic">${done?"✅":"⬜"}</span><span class="lbl">${bab.judul}</span>
    `));
  });
  c.appendChild(progCard);

  c.appendChild(el("h3", {style:"margin-top:1.2rem;"}, "Koleksi Badge"));
  const bg = el("div", {class:"badge-grid"});
  BADGES.forEach(b=>{
    const earned = state.badge.includes(b.id);
    bg.appendChild(el("div", {class:"badge"+(earned?" earned":"")}, `
      <div class="ic">${b.ic}</div><h5>${b.nama}</h5><div class="status">${earned? "Diraih":"Syarat: "+b.syarat}</div>
    `));
  });
  c.appendChild(bg);

  const resetBtn = el("button", {class:"btn ghost small", style:"margin-top:1.4rem;"}, "🗑️ Reset Semua Progres");
  resetBtn.addEventListener("click", ()=>{
    if(confirm("Yakin ingin menghapus seluruh progres belajar di perangkat ini?")){
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });
  c.appendChild(resetBtn);
}

/* ================= MODAL ================= */
function openModal(title, html){
  const overlay = $("#modal-overlay");
  $("#modal-title").textContent = title;
  $("#modal-body").innerHTML = html;
  overlay.classList.add("open");
}
function closeModal(){ $("#modal-overlay").classList.remove("open"); }

/* ================= INIT ================= */
function initSidebar(){
  const menu = [
    {group:"Utama", items:[["beranda","🏠","Beranda"],["tujuan","🎯","Tujuan"]]},
    {group:"Belajar", items:[["materi","📖","Semua Materi"],["perangkat","💻","Perangkat Digital"],["platform","🧰","Platform Digital"],["sumber","📚","Sumber Belajar"]]},
    {group:"A. Kecerdasan Digital", items:[["a1","🧠","1. Pengertian"],["a2","🌐","2. Area dan Tingkat"],["a3","🤝","3. Kewarganegaraan"],["a4","💻","4. Keahlian Dasar"]]},
    {group:"B. Mengembangkan Kecerdasan Digital", items:[["b1","🎨","1. Kreativitas Digital"],["b2","🚀","2. Daya Saing Digital"]]},
    {group:"Lainnya", items:[["rangkuman","📋","Rangkuman"],["refleksi","💡","Refleksi"]]}
  ];
  const sb = $("#sidebar");
  menu.forEach(g=>{
    sb.appendChild(el("div", {class:"sidebar__group-title"}, g.group));
    g.items.forEach(([r,ic,label])=>{
      const b = el("button", {class:"nav-btn", "data-route":r}, `<span class="ic">${ic}</span>${label}`);
      b.addEventListener("click", ()=> navigate(r));
      sb.appendChild(b);
    });
  });
}

function initShell(){
  document.title = "MPI " + SEKOLAH.materi + " — " + SEKOLAH.nama;
  const brand = $(".topbar__brand strong");
  if(brand) brand.textContent = "MPI " + SEKOLAH.materi;
  const footer = $(".footer-note");
  if(footer) footer.textContent = "MPI " + SEKOLAH.materi + " · Informatika Kelas " + SEKOLAH.kelas + " · " + SEKOLAH.nama + " · Dapat dipelajari offline.";
  const logo = $(".logo-mark");
  if(logo) logo.textContent = "🧠";
  $("#topbar-menu-btn").addEventListener("click", ()=> $("#sidebar").classList.toggle("open"));
  $("#modal-close").addEventListener("click", closeModal);
  $("#modal-overlay").addEventListener("click", e=>{ if(e.target.id==="modal-overlay") closeModal(); });
}

document.addEventListener("DOMContentLoaded", ()=>{
  loadState();
  initSidebar();
  initShell();
  updateTopbarStats();
  const startRoute = location.hash.replace("#","") || "beranda";
  navigate(startRoute);
});
