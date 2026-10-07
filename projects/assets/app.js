/* Projects archive – renders the list (/projects/) and detail pages (/projects/<slug>/) from data.js.
   Theme and language use the same localStorage keys as /cv/, so the choice carries over between pages. */
(function () {
  "use strict";

  var PROJECTS = (window.PROJECTS || []).filter(function (p) { return !p.hidden; });
  var BASE = document.body.getAttribute("data-base") || "";

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
    projects: { en: "Projects", ko: "프로젝트" },
    cv: { en: "CV", ko: "CV" },
    year: { en: "Year", ko: "연도" },
    period: { en: "Period", ko: "기간" },
    team: { en: "Team", ko: "팀" },
    role: { en: "Role", ko: "역할" },
    type: { en: "Project type", ko: "분야" },
    stack: { en: "Tech stack", ko: "기술 스택" },
    topics: { en: "Topics", ko: "주제" },
    links: { en: "Links", ko: "링크" },
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
    empty: { en: "No projects in this category yet.", ko: "이 분야의 프로젝트가 아직 없습니다." }
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
    "Data Split": "데이터 분할", "Dataset Bias": "데이터셋 편향", "Robustness": "강건성", "Background Dependence": "배경 의존성",
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
    "Correlation Analysis": "상관 분석", "Hypothesis Testing": "가설 검정"
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
  function cat(id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i]; return null; }
  function catLabel(p) { return p.categoryLabel || (cat(p.category) || { label: { en: p.category, ko: p.category } }).label; }
  function cover(p) {
    if (p.cover) return p.cover;
    if (p.images && p.images.length) return p.images[0].src;
    if (p.youtube && p.youtube.length) return "https://i.ytimg.com/vi/" + p.youtube[0] + "/hqdefault.jpg";
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
    return '<div class="ph"><span class="ph-cat">' + bi(catLabel(p)) + '</span><span class="ph-year">' + esc(p.year) + "</span></div>";
  }

  /* ---------- archive (list) ---------- */
  function renderArchive() {
    var grid = document.getElementById("projectsGrid");
    var tabs = document.getElementById("filterTabs");
    if (!grid || !tabs) return;
    window.__titleFor = function (lang) { return lang === "ko" ? "프로젝트 – 김채윤" : "Projects – Chaeyoon Kim"; };
    document.title = window.__titleFor(document.body.classList.contains("lang-ko") ? "ko" : "en");

    var counts = { all: PROJECTS.length };
    PROJECTS.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });

    tabs.innerHTML = [{ id: "all", label: UI.all }].concat(CATEGORIES).filter(function (c) { return counts[c.id]; }).map(function (c) {
      return '<button type="button" class="filter-tab" role="tab" data-filter="' + c.id + '">' + bi(c.label) +
        ' <span class="count">' + counts[c.id] + "</span></button>";
    }).join("");

    grid.innerHTML = PROJECTS.map(function (p) {
      var href = BASE + p.slug + "/";
      var c = cover(p);
      var media = c
        ? '<img src="' + src(c) + '" alt="" loading="lazy" decoding="async">'
        : placeholder(p);
      var seen = {};
      var links = (p.links || []).filter(function (l) { var k = l.type; if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 3).map(function (l) {
        return '<a class="icon-link" href="' + esc(l.url) + '"' + extAttrs() + ' title="' + esc(plain(linkLabel(l), "en")) + '" aria-label="' + esc(plain(linkLabel(l), "en")) + '">' + icon(l.type) + "</a>";
      }).join("");
      var meta = [p.year ? esc(p.year) : "", has(p.team) ? bi(p.team) : ""].filter(Boolean).join(" · ");
      return '<article class="card" data-cat="' + esc(p.category) + '">' +
        '<a class="media" href="' + href + '" tabindex="-1" aria-hidden="true">' + media +
        (c ? '<span class="year-badge">' + esc(p.year) + "</span>" : "") +
        (p.youtube && p.youtube.length ? '<span class="play"></span>' : "") + "</a>" +
        '<div class="card-body">' +
        '<div class="card-cat">' + bi(catLabel(p)) + "</div>" +
        '<h3 class="card-title"><a href="' + href + '">' + bi(p.title) + "</a></h3>" +
        (meta ? '<p class="card-meta">' + meta + "</p>" : "") +
        (has(p.tagline) ? '<p class="card-tagline">' + bi(p.tagline) + "</p>" : "") +
        tagsHtml(p.tech, 3) +
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
    var idx = -1;
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].slug === slug) idx = i;
    if (idx < 0) {
      root.innerHTML = '<p class="empty">' + bi(UI.notFound) + ' <a href="' + BASE + '">' + bi(UI.allProjects) + "</a></p>";
      return;
    }
    var p = PROJECTS[idx];
    window.__titleFor = function (lang) { return plain(p.title, lang) + (lang === "ko" ? " – 김채윤" : " – Chaeyoon Kim"); };
    document.title = window.__titleFor(document.body.classList.contains("lang-ko") ? "ko" : "en");

    var images = (p.images || []).slice();
    var links = p.links || [];

    var linkBtns = links.slice(0, 3).map(function (l, n) {
      return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join("");

    var meta = [];
    if (p.period || p.year) meta.push("<span><strong>" + bi(p.period || p.year) + "</strong></span>");
    if (has(p.team)) meta.push("<span>" + bi(p.team) + "</span>");
    if (has(p.role)) meta.push("<span>" + bi(p.role) + "</span>");

    var html = "";
    html += '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="' + BASE + '../cv/">' + bi(UI.cv) + '</a><span>/</span><a href="' + BASE + '">' + bi(UI.projects) +
      '</a><span class="current-sep">/</span><span class="current">' + bi(p.title) + "</span></nav>";
    html += '<header class="hero"><span class="eyebrow">' + bi(catLabel(p)) + (p.year ? " · " + esc(p.year) : "") + "</span>" +
      '<h1 class="hero-title">' + bi(p.title) + "</h1>" +
      (has(p.tagline) ? '<p class="hero-tagline">' + bi(p.tagline) + "</p>" : "") +
      (meta.length ? '<div class="hero-meta">' + meta.join("") + "</div>" : "") +
      '<div class="cta-row">' + linkBtns + '<a class="btn" href="' + BASE + '">← ' + bi(UI.allProjects) + "</a></div></header>";

    // gallery + info card
    var info = '<aside class="info-card"><h3>' + bi(UI.info) + "</h3>";
    info += row(p.period ? UI.period : UI.year, "<span>" + bi(p.period || p.year) + "</span>");
    if (has(p.team)) info += row(UI.team, "<span>" + bi(p.team) + "</span>");
    if (has(p.role)) info += row(UI.role, "<span>" + bi(p.role) + "</span>");
    info += row(UI.type, '<span class="pill">' + bi(catLabel(p)) + "</span>");
    if (has(p.tech)) info += row(UI.stack, p.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join(""));
    if (has(p.topics)) info += row(UI.topics, p.topics.map(function (t) { return '<span class="pill">' + bi({ en: t, ko: TOPIC_KO[t] || t }) + "</span>"; }).join(""));
    if (links.length) info += row(UI.links, links.map(function (l) {
      return '<a class="btn xs" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join(""), "links");
    info += "</aside>";

    var gallery = "";
    if (images.length) {
      gallery = '<div class="gallery"><div class="gallery-stage" id="galStage"><img id="galImg" alt="">' +
        (images.length > 1 ? '<button type="button" class="gallery-nav prev" id="galPrev" aria-label="Previous image">&#8249;</button><button type="button" class="gallery-nav next" id="galNext" aria-label="Next image">&#8250;</button>' : "") +
        '<span class="gallery-counter" id="galCounter"></span></div><div class="gallery-caption" id="galCaption"></div>' +
        (images.length > 1 ? '<div class="gallery-thumbs" id="galThumbs">' + images.map(function (im, n) {
          return '<button type="button" data-i="' + n + '" aria-label="Image ' + (n + 1) + '"><img src="' + src(im.thumb || im.src) + '" alt="" loading="lazy"></button>';
        }).join("") + "</div>" : "") + "</div>";
    }
    html += '<div class="detail-top' + (gallery ? "" : " no-gallery") + '">' + gallery + info + "</div>";

    // text blocks, in reading order: [Summary | Problem], Solution, Approach, [Results | My contributions]
    var list = function (items) { return "<ul>" + items.map(function (x) { return "<li>" + bi(x) + "</li>"; }).join("") + "</ul>"; };
    html += pair(has(p.summary) && block(UI.summary, "<p>" + bi(p.summary) + "</p>"), has(p.problem) && block(UI.problem, "<p>" + bi(p.problem) + "</p>"));
    if (has(p.solution)) html += block(UI.solution, "<p>" + bi(p.solution) + "</p>");
    if (has(p.approach)) html += block(UI.approach, '<ol class="steps">' + p.approach.map(function (s) {
      return "<li>" + (has(s.title) ? "<strong>" + bi(s.title) + ":</strong> " : "") + bi(s.body) + "</li>";
    }).join("") + "</ol>");
    html += pair(has(p.results) && block(UI.results, list(p.results)), has(p.contributions) && block(UI.contrib, list(p.contributions)));

    if (has(p.youtube)) {
      html += block(UI.videos, '<div class="videos">' + p.youtube.map(function (id) {
        return '<div class="video"><button type="button" class="video-poster" data-yt="' + esc(id) + '" aria-label="Play video">' +
          '<img src="https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg" alt="" loading="lazy"><span class="play"></span></button></div>';
      }).join("") + "</div>");
    }

    // prev / next
    var prev = PROJECTS[idx - 1], next = PROJECTS[idx + 1];
    html += '<nav class="pager" aria-label="More projects">' +
      (prev ? '<a class="prev" href="' + BASE + prev.slug + '/"><span class="dir">← ' + bi(UI.prev) + "</span>" + bi(prev.title) + "</a>" : "") +
      (next ? '<a class="next" href="' + BASE + next.slug + '/"><span class="dir">' + bi(UI.next) + " →</span>" + bi(next.title) + "</a>" : "") +
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

    function row(label, value, cls) {
      return '<div class="info-row"><div class="info-label">' + bi(label) + '</div><div class="info-value' + (cls ? " " + cls : "") + '">' + value + "</div></div>";
    }
    function block(title, body) { return '<section class="block"><h3>' + bi(title) + "</h3>" + body + "</section>"; }
    function pair(a, b) {
      if (a && b) return '<div class="blocks">' + a + b + "</div>";
      return a || b || "";
    }
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
    }
    var opener = null;
    function closeLb() {
      if (!lb || !lb.classList.contains("open")) return;
      lb.classList.remove("open");
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
        var c = lb.querySelector(".lightbox-close"); if (c) c.focus();
      });
      lb.addEventListener("click", closeLb);
    }
    show(0);
  }

  /* ---------- boot ---------- */
  setTheme(store("theme") || "light");
  setLanguage(store("language") || "en");
  var slug = document.body.getAttribute("data-slug");
  if (slug) renderDetail(slug); else renderArchive();
})();
