/* Projects archive – renders the lists (/projects/, /research/) and the detail pages from data.js.
   A detail page lives at /projects/<slug>/, or at /research/<slug>/ when the entry has path: "research".
   Theme and language use the same localStorage keys as /cv/, so the choice carries over between pages. */
(function () {
  "use strict";

  // hidden: not published at all; draft: has a page but is not listed in the archive yet
  var ALL = (window.PROJECTS || []).filter(function (p) { return !p.hidden; });
  var PROJECTS = ALL.filter(function (p) { return !p.draft; });
  // BASE points at /projects/ (assets and images live there); ROOT is the site root
  var BASE = document.body.getAttribute("data-base") || "";
  var ROOT = /projects\/$/.test(BASE) ? BASE.replace(/projects\/$/, "") : BASE + "../";
  // /research/ reuses this archive: same data, filtered to entries marked research: true
  var SECTION = document.body.getAttribute("data-section") || "projects";
  var RESEARCH = PROJECTS.filter(function (p) { return p.research; });

  var CATEGORIES = [
    { id: "ai", label: { en: "AI / ML", ko: "AI / ML" } },
    { id: "robotics", label: { en: "Robotics & Perception", ko: "로보틱스 · 인지" } },
    { id: "embedded", label: { en: "Embedded & Hardware", ko: "임베디드 · 하드웨어" } }
  ];

  var ICONS = {
    github: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg", mono: true },
    youtube: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg", style: "filter: invert(13%) sepia(98%) saturate(7150%) hue-rotate(358deg) brightness(89%) contrast(95%);" },
    notion: { src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    kaggle: { src: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/brands/kaggle.svg", style: "filter: invert(52%) sepia(90%) saturate(1500%) hue-rotate(160deg) brightness(95%);" },
    drive: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googledrive.svg", mono: true },
    docker: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg", style: "filter: invert(45%) sepia(90%) saturate(2000%) hue-rotate(190deg) brightness(95%);" }
  };
  // inline icons for generic link types (stroke follows the text color)
  var SVG = {
    doc: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    slides: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/></svg>',
    demo: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    other: '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };

  var LINK_LABEL = {
    github: { en: "GitHub", ko: "GitHub" },
    youtube: { en: "YouTube", ko: "YouTube" },
    notion: { en: "Notion", ko: "Notion" },
    demo: { en: "Live Demo", ko: "데모" },
    paper: { en: "Paper", ko: "논문" },
    doc: { en: "Document", ko: "문서" },
    slides: { en: "Slides", ko: "발표 자료" },
    docker: { en: "Docker Hub", ko: "Docker Hub" },
    drive: { en: "Project file", ko: "프로젝트 자료" },
    kaggle: { en: "Kaggle", ko: "Kaggle" },
    other: { en: "Link", ko: "링크" }
  };

  var UI = {
    details: { en: "Details", ko: "자세히" },
    all: { en: "All", ko: "전체" },
    allProjects: { en: "All projects", ko: "전체 프로젝트" },
    allResearch: { en: "All research", ko: "전체 연구" },
    projects: { en: "Projects", ko: "프로젝트" },
    research: { en: "Research", ko: "연구" },
    year: { en: "Year", ko: "연도" },
    period: { en: "Period", ko: "기간" },
    team: { en: "Team", ko: "팀" },
    role: { en: "Role", ko: "역할" },
    type: { en: "Project type", ko: "분야" },
    stack: { en: "Tech stack", ko: "기술 스택" },
    topics: { en: "Topics", ko: "주제" },
    links: { en: "Links", ko: "링크" },
    refs: { en: "References", ko: "참고 자료" },
    info: { en: "Technical information", ko: "프로젝트 정보" },
    summary: { en: "Summary", ko: "요약" },
    problem: { en: "Problem", ko: "문제 정의" },
    solution: { en: "Solution", ko: "해결 방법" },
    approach: { en: "Approach", ko: "진행 과정" },
    results: { en: "Results", ko: "결과" },
    contrib: { en: "My contributions", ko: "담당 업무" },
    videos: { en: "Videos", ko: "영상" },
    prev: { en: "Previous", ko: "이전" },
    next: { en: "Next", ko: "다음" },
    notFound: { en: "This project could not be found.", ko: "프로젝트를 찾을 수 없습니다." },
    showAll: { en: "Show all tags", ko: "모든 태그 보기" },
    empty: { en: "No projects in this category yet.", ko: "이 분야의 프로젝트가 아직 없습니다." },
    draft: { en: "Preview – this page is not listed in the archive yet.", ko: "미리보기 – 아직 아카이브 목록에는 표시되지 않는 페이지입니다." },
    roadmap: { en: "Research roadmap", ko: "연구 로드맵" },
    tracks: { en: "Research tracks", ko: "연구 주제" },
    pipeline: { en: "Pipeline", ko: "파이프라인" },
    equations: { en: "Loss functions", ko: "손실 함수" },
    pubs: { en: "Publications & presentations", ko: "논문 · 발표" },
    hypothesis: { en: "Hypothesis", ko: "가설" },
    design: { en: "Experiment design", ko: "실험 설계" },
    planned: { en: "Planned", ko: "계획" },
    scrollHint: { en: "Swipe sideways to see the whole timeline →", ko: "좌우로 밀어 전체 일정을 볼 수 있습니다 →" },
    planNote: { en: "Hatched: planned after 2024", ko: "빗금: 2025년 이후 계획" }
  };

  // Korean labels for topic pills (anything missing stays as written)
  var TOPIC_KO = {
    "LLM": "LLM", "Document AI": "문서 AI", "Document Parsing": "문서 파싱", "Summarization": "요약", "Q&A": "질의응답",
    "Machine Translation": "기계 번역", "Semantic Highlighting": "시맨틱 하이라이트", "Full-stack": "풀스택",
    "Sensor Fusion": "센서 퓨전", "Camera–LiDAR Calibration": "카메라–LiDAR 캘리브레이션", "Object Detection": "객체 탐지",
    "Object Tracking": "객체 추적", "Mobile Robot": "모바일 로봇", "Anomaly Detection": "이상 탐지",
    "Industrial Inspection": "산업 검사", "Model Serving": "모델 서빙", "Experiment Tracking": "실험 관리",
    "Model Registry": "모델 레지스트리", "ONNX Export": "ONNX 변환", "Image Classification": "이미지 분류",
    "Accessibility": "접근성", "Mobile App": "모바일 앱", "Underwater Imagery": "수중 영상", "Cross-validation": "교차 검증",
    "Data Split": "데이터 분할", "Dataset Bias": "데이터셋 편향", "Robustness": "강건성", "Background Dependence": "배경 의존도",
    "Kalman Filter": "칼만 필터", "Camera Calibration": "카메라 캘리브레이션", "Depth Estimation": "깊이 추정",
    "Gesture Recognition": "제스처 인식", "Computer Vision": "컴퓨터 비전", "PID control": "PID 제어",
    "Master–slave teleoperation": "마스터–슬레이브 원격 조작", "Motion record & playback": "동작 녹화·재생",
    "Servo PWM": "서보 PWM", "3D printing": "3D 프린팅", "Embedded firmware": "임베디드 펌웨어",
    "Groundwater monitoring": "지하수 모니터링", "Current-loop sensing": "전류 루프 센싱", "Data logging": "데이터 로깅",
    "Instrumentation": "계측", "PWM control": "PWM 제어", "Stepper motor control": "스테핑 모터 제어",
    "Digital system design": "디지털 시스템 설계", "CanSat": "캔위성", "Atmospheric stability": "대기 안정도",
    "Fine dust": "미세먼지", "Attitude correction": "자세 보정", "Wireless telemetry": "무선 텔레메트리",
    "Parachute design": "낙하산 설계", "Image Matching": "이미지 매칭", "Structure-from-Motion": "SfM",
    "Epipolar Geometry": "에피폴라 기하", "Fundamental Matrix": "기본 행렬", "Relative Pose Estimation": "상대 자세 추정",
    "Exploratory Data Analysis": "탐색적 데이터 분석", "Data Visualization": "데이터 시각화",
    "Correlation Analysis": "상관 분석", "Hypothesis Testing": "가설 검정",
    "Adversarial Robustness": "적대적 강건성", "Representation Learning": "표현 학습", "Synthetic Data": "합성 데이터", "Auto Annotation": "자동 라벨링", "Instance Segmentation": "인스턴스 분할", "Pose Estimation": "자세 추정"
  };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function bi(v) {
    if (v == null) return "";
    if (typeof v === "string") return esc(v);
    var en = v.en || v.ko || "", ko = v.ko || v.en || "";
    if (en === ko) return esc(en);
    return '<span data-lang="en">' + esc(en) + '</span><span data-lang="ko">' + esc(ko) + "</span>";
  }
  function has(v) {
    if (!v) return false;
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === "string") return v.trim() !== "";
    return !!((v.en && v.en.trim()) || (v.ko && v.ko.trim()));
  }
  function plain(v, lang) { return typeof v === "string" ? v : (v && (v[lang] || v.en || v.ko)) || ""; }
  function src(p) { return /^(https?:)?\/\//.test(p) ? p : BASE + p; }
  function pageHref(p) { return ROOT + (p.path || "projects") + "/" + p.slug + "/"; }
  function cat(id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i]; return null; }
  function catLabel(p) { return p.categoryLabel || (cat(p.category) || { label: { en: p.category, ko: p.category } }).label; }
  function cover(p) {
    if (p.cover) return p.cover;
    if (p.images && p.images.length) return p.images[0].src;
    if (p.youtube && p.youtube.length) return "https://i.ytimg.com/vi/" + (typeof p.youtube[0] === "string" ? p.youtube[0] : p.youtube[0].id) + "/hqdefault.jpg";
    return null;
  }
  function icon(type) {
    var i = ICONS[type];
    if (!i) return SVG[type === "paper" ? "doc" : type] || SVG.other;
    return '<img class="ico' + (i.mono ? " mono" : "") + '" src="' + i.src + '" alt="" width="15" height="15"' + (i.style ? ' style="' + i.style + '"' : "") + ">";
  }
  function linkLabel(l) {
    if (!l.label) return LINK_LABEL[l.type] || LINK_LABEL.other;
    return typeof l.label === "string" ? { en: l.label, ko: l.label } : l.label;
  }
  function extAttrs() { return ' target="_blank" rel="noopener"'; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- theme & language (same keys as /cv/) ---------- */
  function setTheme(mode) {
    document.body.classList.toggle("dark-mode", mode === "dark");
    var b = document.getElementById("themeButton");
    if (b) b.innerText = mode === "dark" ? "🌙 Dark" : "🌞 Light";
    store("theme", mode);
  }
  function setLanguage(lang) {
    document.body.classList.remove("lang-en", "lang-ko");
    document.body.classList.add("lang-" + lang);
    document.documentElement.lang = lang;
    var b = document.getElementById("langButton");
    if (b) b.innerText = lang === "en" ? "🇰🇷 KO" : "🇺🇸 EN";
    store("language", lang);
    if (window.__titleFor) document.title = window.__titleFor(lang);
  }
  window.toggleTheme = function () { setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark"); };
  window.toggleLanguage = function () { setLanguage(document.body.classList.contains("lang-en") ? "ko" : "en"); };

  /* ---------- shared chrome ---------- */
  function tagsHtml(list, visible) {
    if (!list || !list.length) return "";
    var out = list.map(function (t, i) {
      return '<span class="tag' + (i >= visible ? " hidden-tag" : "") + '">' + esc(t) + "</span>";
    }).join("");
    if (list.length > visible) {
      out += '<button type="button" class="more" aria-label="' + esc(UI.showAll.en) + '">+' + (list.length - visible) + "</button>";
    }
    return '<div class="tags">' + out + "</div>";
  }
  function bindTagToggles(root) {
    root.addEventListener("click", function (e) {
      var m = e.target.closest && e.target.closest(".tags .more");
      if (m) { e.preventDefault(); m.parentNode.classList.add("expanded"); }
    });
  }
  function placeholder(p) {
    var mono = p.monogram || plain(p.title, "en").split(/[\s–-]+/).filter(Boolean).slice(0, 3).map(function (w) { return w.charAt(0); }).join("").toUpperCase();
    return '<div class="ph" aria-hidden="true"><span class="ph-mono">' + esc(mono) + "</span></div>";
  }

  /* ---------- archive (list) ---------- */
  function renderArchive() {
    var grid = document.getElementById("projectsGrid");
    var tabs = document.getElementById("filterTabs");
    if (!grid || !tabs) return;
    var research = SECTION === "research";
    var list = research ? RESEARCH : PROJECTS;
    window.__titleFor = function (lang) {
      if (research) return lang === "ko" ? "연구 – 김채윤" : "Research – Chaeyoon Kim";
      return lang === "ko" ? "프로젝트 – 김채윤" : "Projects – Chaeyoon Kim";
    };
    document.title = window.__titleFor(document.body.classList.contains("lang-ko") ? "ko" : "en");

    var counts = { all: list.length };
    list.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });
    // a single category needs no filter row
    tabs.hidden = CATEGORIES.filter(function (c) { return counts[c.id]; }).length < 2;

    tabs.innerHTML = [{ id: "all", label: UI.all }].concat(CATEGORIES).filter(function (c) { return counts[c.id]; }).map(function (c) {
      return '<button type="button" class="filter-tab" role="tab" data-filter="' + c.id + '">' + bi(c.label) +
        ' <span class="count">' + counts[c.id] + "</span></button>";
    }).join("");

    grid.innerHTML = list.map(function (p) {
      var href = pageHref(p);
      var c = cover(p);
      var media = c
        ? '<img src="' + src(c) + '" alt="" loading="lazy" decoding="async">'
        : placeholder(p);
      var seen = {};
      var links = (p.links || []).filter(function (l) { var k = l.type; if (l.ref || seen[k]) return false; seen[k] = 1; return true; }).slice(0, 3).map(function (l) {
        return '<a class="icon-link" href="' + esc(l.url) + '"' + extAttrs() + ' title="' + esc(plain(linkLabel(l), "en")) + '" aria-label="' + esc(plain(linkLabel(l), "en")) + '">' + icon(l.type) + "</a>";
      }).join("");
      return '<article class="card" data-cat="' + esc(p.category) + '">' +
        '<a class="media" href="' + href + '" tabindex="-1" aria-hidden="true">' + media +
        (p.year ? '<span class="year-badge">' + esc(p.year) + "</span>" : "") +
        (p.youtube && p.youtube.length ? '<span class="play"></span>' : "") + "</a>" +
        '<div class="card-body">' +
        '<div class="card-cat">' + bi(catLabel(p)) + "</div>" +
        '<h3 class="card-title"><a href="' + href + '">' + bi(p.title) + "</a></h3>" +
        (has(p.cardTagline || p.tagline) ? '<p class="card-tagline">' + bi(p.cardTagline || p.tagline) + "</p>" : "") +
        tagsHtml((p.tech || []).map(function (t) { return t.replace(/\s*\(.*?\)/g, ""); }), 2) +
        '<div class="card-actions"><a class="btn xs primary" href="' + href + '">' + bi(UI.details) + " →</a>" + links + "</div>" +
        "</div></article>";
    }).join("");

    function apply(filter) {
      if (!counts[filter]) filter = "all";
      var shown = 0;
      [].forEach.call(tabs.children, function (b) {
        var on = b.getAttribute("data-filter") === filter;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      [].forEach.call(grid.children, function (card) {
        var on = filter === "all" || card.getAttribute("data-cat") === filter;
        card.hidden = !on;
        if (on) shown++;
      });
      document.getElementById("emptyState").hidden = shown > 0;
    }
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest("[data-filter]");
      if (!b) return;
      var f = b.getAttribute("data-filter");
      try { history.replaceState(null, "", f === "all" ? location.pathname : "#" + f); } catch (err) { /* file:// */ }
      apply(f);
    });
    bindTagToggles(grid);
    apply((location.hash || "").replace("#", "") || "all");
    window.addEventListener("hashchange", function () { apply(location.hash.slice(1) || "all"); });
  }

  /* ---------- detail ---------- */
  function renderDetail(slug) {
    var root = document.getElementById("detail");
    if (!root) return;
    // pages under /research/ point back to the research list; their prev/next stay within research
    var inResearch = SECTION === "research";
    var home = ROOT + (inResearch ? "research/" : "projects/");
    var homeLabel = inResearch ? UI.research : UI.projects, allLabel = inResearch ? UI.allResearch : UI.allProjects;
    var idx = -1;
    for (var i = 0; i < ALL.length; i++) if (ALL[i].slug === slug) idx = i;
    if (idx < 0) {
      root.innerHTML = '<p class="empty">' + bi(UI.notFound) + ' <a href="' + home + '">' + bi(allLabel) + "</a></p>";
      return;
    }
    var p = ALL[idx];
    window.__titleFor = function (lang) { return plain(p.title, lang) + (lang === "ko" ? " – 김채윤" : " – Chaeyoon Kim"); };
    document.title = window.__titleFor(document.body.classList.contains("lang-ko") ? "ko" : "en");

    var images = (p.images || []).slice();
    var links = p.links || [];

    // reference links (ref: true) only appear in the info card, not as hero buttons
    var linkBtns = links.filter(function (l) { return !l.ref; }).slice(0, 2).map(function (l, n) {
      return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join("");

    var html = "";
    if (p.draft) html += '<p class="draft-note">' + bi(UI.draft) + "</p>";
    html += '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="' + home + '">' + bi(homeLabel) +
      '</a><span class="current-sep">/</span><span class="current">' + bi(p.title) + "</span></nav>";
    html += '<header class="hero"><span class="eyebrow">' + bi(catLabel(p)) + (p.year ? " · " + esc(p.year) : "") + "</span>" +
      '<h1 class="hero-title">' + bi(p.title) + "</h1>" +
      (has(p.tagline) ? '<p class="hero-tagline">' + bi(p.tagline) + "</p>" : "") +
      '<div class="cta-row">' + linkBtns + '<a class="btn" href="' + home + '">← ' + bi(allLabel) + "</a></div></header>";

    // gallery + info card
    var info = '<aside class="info-card"><h3>' + bi(UI.info) + "</h3>";
    info += row(p.period ? UI.period : UI.year, "<span>" + bi(p.period || p.year) + "</span>");
    if (has(p.team)) info += row(UI.team, "<span>" + bi(p.team) + "</span>");
    if (has(p.role)) info += row(UI.role, "<span>" + bi(p.role) + "</span>");
    if (has(p.tech)) info += row(UI.stack, p.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join(""));
    if (has(p.topics)) info += row(UI.topics, p.topics.map(function (t) { return '<span class="pill">' + bi({ en: t, ko: TOPIC_KO[t] || t }) + "</span>"; }).join(""));
    var own = links.filter(function (l) { return !l.ref; }), refs = links.filter(function (l) { return l.ref; });
    if (own.length) info += row(UI.links, own.map(function (l) {
      return '<a class="btn xs" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join(""), "links");
    if (refs.length) info += row(UI.refs, '<ul class="ref-list">' + refs.map(function (l) {
      var lab = linkLabel(l), strip = function (t) { return String(t || "").replace(/^(Reference|참고 논문|참고 자료|참고)\s*:\s*/i, ""); };
      return '<li><a href="' + esc(l.url) + '"' + extAttrs() + ">" + bi({ en: strip(lab.en), ko: strip(lab.ko) }) + "</a></li>";
    }).join("") + "</ul>");
    info += "</aside>";

    var gallery = "";
    if (images.length) {
      // arrows and counter sit under the image so they never cover figure labels
      gallery = '<div class="gallery"><div class="gallery-stage" id="galStage"><img id="galImg" alt=""></div>' +
        '<div class="gallery-bar"><div class="gallery-caption" id="galCaption"></div><div class="gallery-ctrl">' +
        (images.length > 1 ? '<button type="button" class="gallery-nav prev" id="galPrev" aria-label="Previous image">&#8249;</button>' : "") +
        '<span class="gallery-counter" id="galCounter"></span>' +
        (images.length > 1 ? '<button type="button" class="gallery-nav next" id="galNext" aria-label="Next image">&#8250;</button>' : "") +
        "</div></div>" +
        (images.length > 1 ? '<div class="gallery-thumbs" id="galThumbs">' + images.map(function (im, n) {
          return '<button type="button" data-i="' + n + '" aria-label="Image ' + (n + 1) + '"><img src="' + src(im.thumb || im.src) + '" alt="" loading="lazy"></button>';
        }).join("") + "</div>" : "") + "</div>";
    }
    var summary = has(p.summary) ? block(UI.summary, "<p>" + bi(p.summary) + "</p>") : "";
    var problem = has(p.problem) ? block(UI.problem, "<p>" + bi(p.problem) + "</p>") : "";
    var solution = has(p.solution) ? block(UI.solution, "<p>" + bi(p.solution) + "</p>") : "";
    if (gallery) {
      html += '<div class="detail-top"><div class="detail-left">' + gallery + summary + "</div>" + info + "</div>" + pair(problem, solution);
    } else {
      html += '<div class="detail-top no-gallery">' + info + "</div>" + pair(summary, problem) + solution;
    }

    // remaining blocks in reading order: Solution, Approach, [Results | My contributions]
    function list(items) { return "<ul>" + items.map(function (x) { return "<li>" + bi(x) + "</li>"; }).join("") + "</ul>"; }
    if (p.roadmap) html += block(UI.roadmap, roadmap(p.roadmap));
    if (has(p.tracks)) html += '<section class="tracks"><h3 class="tracks-title">' + bi(UI.tracks) + "</h3>" + p.tracks.map(track).join("") + "</section>";
    if (has(p.pipeline)) html += block(UI.pipeline, '<figure class="dg dg-flow pipeline">' + p.pipeline.map(function (st, i) {
      return '<div class="dg-node"><span class="rm-id">' + (i + 1) + "</span> " + bi(st) + "</div>" + (i < p.pipeline.length - 1 ? '<span class="dg-arrow" aria-hidden="true">→</span>' : "");
    }).join("") + "</figure>");
    if (has(p.equations)) html += block(UI.equations, p.equations.map(function (q) {
      return '<div class="eq-row">' + (has(q.label) ? '<div class="eq-label">' + bi(q.label) + "</div>" : "") +
        '<div class="eq" data-tex="' + esc(q.tex) + '">' + esc(q.tex) + "</div></div>";
    }).join(""));
    if (has(p.approach)) html += block(UI.approach, '<ol class="steps">' + p.approach.map(function (s) {
      return "<li>" + (has(s.title) ? "<strong>" + bi(s.title) + ":</strong> " : "") + bi(s.body) + "</li>";
    }).join("") + "</ol>");
    html += pair(has(p.results) && block(UI.results, list(p.results)), has(p.contributions) && block(UI.contrib, list(p.contributions)));
    if (has(p.tables)) p.tables.forEach(function (t) { html += block(t.title, table(t)); });
    if (has(p.publications)) html += block(UI.pubs, list(p.publications));

    if (has(p.youtube)) {
      var vids = p.youtube.map(function (v) { return typeof v === "string" ? { id: v } : v; });
      var allVertical = vids.every(function (v) { return v.vertical; });
      html += block(UI.videos, '<div class="videos' + (allVertical ? " vertical" : "") + '">' + vids.map(function (v) {
        return '<figure class="video-item"><div class="video' + (v.vertical ? " vertical" : "") + '"><button type="button" class="video-poster" data-yt="' + esc(v.id) + '" data-vertical="' + (v.vertical ? 1 : 0) + '" aria-label="Play video">' +
          '<img src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" alt="" loading="lazy"><span class="play"></span></button></div>' +
          (has(v.caption) ? "<figcaption>" + bi(v.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</div>");
    }

    // prev / next
    var seq = inResearch ? RESEARCH : PROJECTS;
    var li = seq.indexOf(p);
    var prev = li > 0 ? seq[li - 1] : null, next = li >= 0 ? seq[li + 1] : null;
    html += '<nav class="pager" aria-label="More projects">' +
      (prev ? '<a class="prev" href="' + pageHref(prev) + '"><span class="dir">← ' + bi(UI.prev) + "</span>" + bi(prev.title) + "</a>" : "") +
      (next ? '<a class="next" href="' + pageHref(next) + '"><span class="dir">' + bi(UI.next) + " →</span>" + bi(next.title) + "</a>" : "") +
      "</nav>";

    root.innerHTML = html;
    bindTagToggles(root);

    root.addEventListener("click", function (e) {
      var v = e.target.closest && e.target.closest(".video-poster");
      if (!v) return;
      var id = v.getAttribute("data-yt");
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
      f.title = "YouTube video";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      f.allowFullscreen = true;
      v.parentNode.replaceChild(f, v);
    });

    if (images.length) initGallery(images);
    if (has(p.equations)) renderMath(root);

    function row(label, value, cls) {
      return '<div class="info-row"><div class="info-label">' + bi(label) + '</div><div class="info-value' + (cls ? " " + cls : "") + '">' + value + "</div></div>";
    }
    function block(title, body) { return '<section class="block"><h3>' + bi(title) + "</h3>" + body + "</section>"; }
    function roadmap(r) {
      var ym = function (s) { var a = s.split("-"); return (+a[0]) * 12 + (+a[1] - 1); };
      var s0 = ym(r.start), n = ym(r.end) - s0 + 1, split = r.split ? ym(r.split) - s0 : n;
      var years = [], months = "";
      for (var m = 0; m < n; m++) {
        var y = Math.floor((s0 + m) / 12), mo = (s0 + m) % 12 + 1;
        if (!years.length || years[years.length - 1].y !== y) years.push({ y: y, from: m, len: 0 });
        years[years.length - 1].len++;
        months += '<span class="rm-m" style="grid-column:' + (m + 2) + '">' + mo + "</span>";
      }
      var head = '<div class="rm-head">' + years.map(function (yr) {
        return '<span class="rm-y" style="grid-column:' + (yr.from + 2) + " / span " + yr.len + '">' + yr.y + "</span>";
      }).join("") + months + "</div>";
      var order = ["design", "exp", "write"];
      var rows = r.rows.map(function (row) {
        var bars = row.bars.map(function (b) {
          var a = ym(b.from) - s0, z = ym(b.to) - s0, line = order.indexOf(b.phase) + 1, out = "";
          var seg = function (x0, x1, planned) {
            return '<span class="rm-bar ' + b.phase + (planned ? " planned" : "") + '" style="grid-column:' + (x0 + 2) + " / " + (x1 + 3) + ";grid-row:" + line + '"></span>';
          };
          if (z < split) out = seg(a, z, false);
          else if (a >= split) out = seg(a, z, true);
          else out = seg(a, split - 1, false) + seg(split, z, true);
          return out;
        }).join("");
        return '<div class="rm-row"><div class="rm-label"><span class="rm-id">' + esc(row.id) + "</span>" + bi(row.title) + "</div>" + bars + "</div>";
      }).join("");
      var marker = split < n ? '<div class="rm-split" style="--at:' + split + '"><span>' + bi(r.splitLabel || UI.planned) + "</span></div>" : "";
      var legend = '<div class="rm-legend">' + order.map(function (k) {
        return '<span><i class="rm-sw ' + k + '"></i>' + bi(r.phases[k]) + "</span>";
      }).join("") + '<span><i class="rm-sw exp planned"></i>' + bi(UI.planNote) + "</span></div>";
      return '<p class="rm-hint">' + bi(UI.scrollHint) + '</p><div class="rm-scroll"><div class="rm" style="--n:' + n + '">' + head + rows + marker + "</div></div>" + legend;
    }
    function track(t) {
      var lists = (has(t.hypothesis) ? '<div class="tr-col"><h4>' + bi(UI.hypothesis) + "</h4>" + list(t.hypothesis) + "</div>" : "") +
        (has(t.design) ? '<div class="tr-col"><h4>' + bi(UI.design) + "</h4>" + list(t.design) + "</div>" : "");
      var dg = t.diagram && window.DIAGRAMS && window.DIAGRAMS[t.diagram] ? window.DIAGRAMS[t.diagram](bi) : "";
      var fig = t.figure ? '<figure class="tr-fig"><a href="' + src(t.figure.src) + '" target="_blank" rel="noopener"><img src="' + src(t.figure.src) + '" alt="" loading="lazy"></a>' +
        (has(t.figure.caption) ? "<figcaption>" + bi(t.figure.caption) + "</figcaption>" : "") + "</figure>" : "";
      return '<article class="block track"><div class="tr-head"><span class="rm-id">' + esc(t.id) + '</span><span class="eyebrow">' + bi(t.group) + "</span>" +
        (t.planned ? '<span class="pill">' + bi(UI.planned) + "</span>" : "") + "</div>" +
        '<h4 class="tr-title">' + bi(t.title) + "</h4>" + (lists ? '<div class="tr-cols">' + lists + "</div>" : "") + dg + fig + "</article>";
    }
    function table(t) {
      var best = t.best || {};
      return (has(t.note) ? '<p class="tbl-note">' + bi(t.note) + "</p>" : "") + '<div class="tbl-scroll"><table class="tbl"><thead><tr>' +
        t.columns.map(function (c) { return "<th>" + bi(c) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        t.rows.map(function (r, ri) {
          return '<tr' + (r.highlight ? ' class="hl"' : "") + ">" + r.cells.map(function (c, ci) {
            return "<td" + (best[ci] === ri ? ' class="best"' : "") + ">" + bi(c) + "</td>";
          }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    function pair(a, b) {
      if (a && b) return '<div class="blocks">' + a + b + "</div>";
      return a || b || "";
    }
  }

  // KaTeX is loaded only on pages that have equations; the raw TeX stays visible if it fails to load
  function renderMath(root) {
    var V = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/";
    var css = document.createElement("link");
    css.rel = "stylesheet"; css.href = V + "katex.min.css";
    document.head.appendChild(css);
    var js = document.createElement("script");
    js.src = V + "katex.min.js";
    js.onload = function () {
      [].forEach.call(root.querySelectorAll(".eq[data-tex]"), function (el) {
        try { window.katex.render(el.getAttribute("data-tex"), el, { displayMode: true, throwOnError: false }); } catch (e) { /* keep raw TeX */ }
      });
    };
    document.head.appendChild(js);
  }

  function initGallery(images) {
    var cur = 0;
    var img = document.getElementById("galImg");
    var counter = document.getElementById("galCounter");
    var caption = document.getElementById("galCaption");
    var thumbs = document.getElementById("galThumbs");
    var lb = document.getElementById("lightbox");
    var lbImg = lb && lb.querySelector("img");

    function show(n) {
      cur = (n + images.length) % images.length;
      var im = images[cur];
      img.src = src(im.src);
      img.alt = plain(im.caption, "en");
      counter.textContent = (cur + 1) + " / " + images.length;
      caption.innerHTML = bi(im.caption);
      if (thumbs) [].forEach.call(thumbs.children, function (b, i) { b.classList.toggle("active", i === cur); });
      if (lb && lb.classList.contains("open")) { lbImg.src = img.src; lbImg.alt = img.alt; }
      if (lbCap) lbCap.innerHTML = bi(im.caption);
    }
    var opener = null;
    var lbCap = null;
    if (lb) {
      lbCap = document.createElement("p");
      lbCap.className = "lb-caption";
      lb.appendChild(lbCap);
      if (images.length > 1) {
        ["prev", "next"].forEach(function (dir) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "lb-nav " + dir;
          b.setAttribute("aria-label", dir === "prev" ? "Previous image" : "Next image");
          b.innerHTML = dir === "prev" ? "&#8249;" : "&#8250;";
          b.addEventListener("click", function (e) { e.stopPropagation(); show(cur + (dir === "prev" ? -1 : 1)); });
          lb.appendChild(b);
        });
      }
    }
    function closeLb() {
      if (!lb || !lb.classList.contains("open")) return;
      lb.classList.remove("open");
      document.body.classList.remove("lb-open");
      if (opener) opener.focus();
    }
    var prev = document.getElementById("galPrev"), next = document.getElementById("galNext");
    if (prev) prev.addEventListener("click", function () { show(cur - 1); });
    if (next) next.addEventListener("click", function () { show(cur + 1); });
    if (thumbs) thumbs.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-i]");
      if (b) show(+b.getAttribute("data-i"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.altKey || e.metaKey || e.ctrlKey) return;
      if (e.key === "Escape") closeLb();
      if (images.length < 2) return;
      var t = e.target && e.target.tagName;
      if (t === "INPUT" || t === "TEXTAREA") return;
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    if (lb) {
      img.addEventListener("click", function () {
        opener = document.activeElement;
        lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("open");
        document.body.classList.add("lb-open");
        var c = lb.querySelector(".lightbox-close"); if (c) c.focus();
      });
      lb.addEventListener("click", function (e) { if (e.target === lbImg) return; closeLb(); });
    }
    // very wide or tall images (figures, plots, side-by-side comparisons): fit the stage to them instead of letterboxing
    var stage = document.getElementById("galStage");
    img.addEventListener("load", function () {
      var r = img.naturalWidth / img.naturalHeight;
      stage.style.aspectRatio = r > 1.7 ? String(Math.min(r, 4)) : r < 1.45 ? String(Math.max(r, 1)) : "";
    });
    show(0);
    if (thumbs) {
      var fit = function () { thumbs.classList.toggle("overflowing", thumbs.scrollWidth > thumbs.clientWidth + 1); };
      fit();
      window.addEventListener("resize", fit);
    }
  }

  /* ---------- boot ---------- */
  setTheme(store("theme") || "light");
  setLanguage(store("language") || "en");
  var slug = document.body.getAttribute("data-slug");
  if (slug) renderDetail(slug); else renderArchive();
})();
