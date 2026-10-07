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
    github: { src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", mono: true },
    youtube: { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg", style: "filter: invert(13%) sepia(98%) saturate(7150%) hue-rotate(358deg) brightness(89%) contrast(95%);" },
    notion: { src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    kaggle: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/kaggle.svg", style: "filter: invert(52%) sepia(90%) saturate(1500%) hue-rotate(160deg) brightness(95%);" },
    drive: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googledrive.svg", mono: true },
    paper: { src: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlescholar.svg", mono: true }
  };

  var LINK_LABEL = {
    github: { en: "GitHub", ko: "GitHub" },
    youtube: { en: "YouTube", ko: "YouTube" },
    notion: { en: "Notion", ko: "Notion" },
    demo: { en: "Live Demo", ko: "데모" },
    paper: { en: "Paper", ko: "논문" },
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
    if (!i) return '<span aria-hidden="true">🔗</span>';
    return '<img class="ico' + (i.mono ? " mono" : "") + '" src="' + i.src + '" alt="" width="15" height="15"' + (i.style ? ' style="' + i.style + '"' : "") + ">";
  }
  function linkLabel(l) { return l.label ? { en: l.label, ko: l.label } : (LINK_LABEL[l.type] || LINK_LABEL.other); }
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
      var links = (p.links || []).map(function (l) {
        return '<a class="icon-link" href="' + esc(l.url) + '"' + extAttrs() + ' title="' + esc(plain(linkLabel(l), "en")) + '" aria-label="' + esc(plain(linkLabel(l), "en")) + '">' + icon(l.type) + "</a>";
      }).join("");
      var meta = [p.year ? esc(p.year) : "", has(p.team) ? bi(p.team) : "", has(p.role) ? bi(p.role) : ""].filter(Boolean).join(" · ");
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
    window.__titleFor = function (lang) { return plain(p.title, lang) + " – Chaeyoon Kim"; };
    document.title = window.__titleFor(document.body.classList.contains("lang-ko") ? "ko" : "en");

    var images = (p.images || []).slice();
    var links = p.links || [];

    var linkBtns = links.map(function (l, n) {
      return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join("");

    var meta = [];
    if (p.period || p.year) meta.push("<span><strong>" + esc(p.period || p.year) + "</strong></span>");
    if (has(p.team)) meta.push("<span>" + bi(p.team) + "</span>");
    if (has(p.role)) meta.push("<span>" + bi(p.role) + "</span>");

    var html = "";
    html += '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="' + BASE + '../cv/">' + bi(UI.cv) + '</a><span>/</span><a href="' + BASE + '">' + bi(UI.projects) +
      '</a><span>/</span><span class="current">' + bi(p.title) + "</span></nav>";
    html += '<header class="hero"><span class="eyebrow">' + bi(catLabel(p)) + (p.year ? " · " + esc(p.year) : "") + "</span>" +
      '<h1 class="hero-title">' + bi(p.title) + "</h1>" +
      (has(p.tagline) ? '<p class="hero-tagline">' + bi(p.tagline) + "</p>" : "") +
      (meta.length ? '<div class="hero-meta">' + meta.join("") + "</div>" : "") +
      '<div class="cta-row">' + linkBtns + '<a class="btn" href="' + BASE + '">← ' + bi(UI.allProjects) + "</a></div></header>";

    // gallery + info card
    var info = '<aside class="info-card"><h3>' + bi(UI.info) + "</h3>";
    info += row(p.period ? UI.period : UI.year, "<span>" + esc(p.period || p.year) + "</span>");
    if (has(p.team) || has(p.role)) info += row(UI.team, "<span>" + [has(p.team) ? bi(p.team) : "", has(p.role) ? bi(p.role) : ""].filter(Boolean).join(" · ") + "</span>");
    info += row(UI.type, '<span class="pill">' + bi(catLabel(p)) + "</span>");
    if (has(p.tech)) info += row(UI.stack, p.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join(""));
    if (has(p.topics)) info += row(UI.topics, p.topics.map(function (t) { return '<span class="pill">' + esc(t) + "</span>"; }).join(""));
    if (links.length) info += row(UI.links, links.map(function (l) {
      return '<a class="btn xs" href="' + esc(l.url) + '"' + extAttrs() + ">" + icon(l.type) + " " + bi(linkLabel(l)) + "</a>";
    }).join(""), "links");
    info += "</aside>";

    var gallery = "";
    if (images.length) {
      gallery = '<div class="gallery"><div class="gallery-stage" id="galStage"><img id="galImg" src="" alt="">' +
        (images.length > 1 ? '<button type="button" class="gallery-nav prev" id="galPrev" aria-label="Previous image">&#8249;</button><button type="button" class="gallery-nav next" id="galNext" aria-label="Next image">&#8250;</button>' : "") +
        '<span class="gallery-counter" id="galCounter"></span></div><div class="gallery-caption" id="galCaption"></div>' +
        (images.length > 1 ? '<div class="gallery-thumbs" id="galThumbs">' + images.map(function (im, n) {
          return '<button type="button" data-i="' + n + '" aria-label="Image ' + (n + 1) + '"><img src="' + src(im.src) + '" alt="" loading="lazy"></button>';
        }).join("") + "</div>" : "") + "</div>";
    }
    html += '<div class="detail-top' + (gallery ? "" : " no-gallery") + '">' + gallery + info + "</div>";

    // text blocks in two columns
    var left = [], right = [];
    if (has(p.summary)) left.push(block(UI.summary, "<p>" + bi(p.summary) + "</p>"));
    if (has(p.problem)) left.push(block(UI.problem, "<p>" + bi(p.problem) + "</p>"));
    if (has(p.contributions)) left.push(block(UI.contrib, "<ul>" + p.contributions.map(function (c) { return "<li>" + bi(c) + "</li>"; }).join("") + "</ul>"));
    if (has(p.solution)) right.push(block(UI.solution, "<p>" + bi(p.solution) + "</p>"));
    if (has(p.approach)) right.push(block(UI.approach, '<ol class="steps">' + p.approach.map(function (s) {
      return "<li>" + (has(s.title) ? "<strong>" + bi(s.title) + ":</strong> " : "") + bi(s.body) + "</li>";
    }).join("") + "</ol>"));
    if (has(p.results)) right.push(block(UI.results, "<ul>" + p.results.map(function (r) { return "<li>" + bi(r) + "</li>"; }).join("") + "</ul>"));
    // balance: if one side is empty, move half over
    if (!left.length && right.length > 1) left = right.splice(0, Math.ceil(right.length / 2));
    if (!right.length && left.length > 1) right = left.splice(Math.ceil(left.length / 2));
    if (left.length + right.length === 1) html += left.concat(right)[0];
    else if (left.length || right.length) html += '<div class="blocks"><div class="col">' + left.join("") + '</div><div class="col">' + right.join("") + "</div></div>";

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
    }
    var prev = document.getElementById("galPrev"), next = document.getElementById("galNext");
    if (prev) prev.addEventListener("click", function () { show(cur - 1); });
    if (next) next.addEventListener("click", function () { show(cur + 1); });
    if (thumbs) thumbs.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-i]");
      if (b) show(+b.getAttribute("data-i"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb) lb.classList.remove("open");
      if (images.length < 2) return;
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    if (lb) {
      img.addEventListener("click", function () { lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("open"); });
      lb.addEventListener("click", function () { lb.classList.remove("open"); });
    }
    show(0);
  }

  /* ---------- boot ---------- */
  setTheme(store("theme") || "light");
  setLanguage(store("language") || "en");
  var slug = document.body.getAttribute("data-slug");
  if (slug) renderDetail(slug); else renderArchive();
})();
