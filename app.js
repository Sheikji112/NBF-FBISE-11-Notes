/* 
========================================================================
   NBF GRADE 11 NOTES & STUDY RESOURCES - CORE INTERACTION CONTROLLER
   Clean, semantic, state-driven vanilla ES6 JavaScript
========================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    searchQuery: "",
    selectedToyboxSubject: "all",
    currentFlashcardIndex: 0,
    activeDrawerSubject: null,
    activeDrawerChapterNum: null,
    activeDrawerTab: "overview"
  };

  // Inline SVG Database (Custom Premium Vector Graphic Assets)
  const SVGS = {
    physics: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>`,
    maths: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    chemistry: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12M12 3v12M4 21h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>`,
    biology: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 10.5C4.5 6 9 3 9 3s4.5 3 4.5 7.5c0 3-1.5 5.5-4.5 5.5s-4.5-2.5-4.5-5.5z"></path><path d="M12 13.5c1.5 1.5 3 3.5 3 5.5 0 2-1 3-3 3s-3-1-3-3c0-2 1.5-4 3-5.5z"></path></svg>`,
    computer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    english: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    urdu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5h14"></path><path d="M7 9h10"></path><path d="M9 13h6"></path><path d="M12 17c3.5 0 6-1.6 6-4"></path></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`
  };

  // DOM Cache
  const DOM = {
    subjectGrid: document.getElementById("subject-grid"),
    searchBar: document.getElementById("hero-search-input"),
    toyboxFilters: document.getElementById("toybox-filters"),
    flashcardWrap: document.getElementById("flashcard-wrapper"),
    flashcardInner: document.getElementById("flashcard-inner"),
    flashcardFront: document.getElementById("flashcard-front"),
    flashcardBack: document.getElementById("flashcard-back"),
    flashcardBtnPrev: document.getElementById("flashcard-prev-btn"),
    flashcardBtnNext: document.getElementById("flashcard-next-btn"),
    flashcardCount: document.getElementById("flashcard-count"),
    tactileTrack: document.getElementById("tactile-chapter-track"),
    recentUpdatesList: document.getElementById("recent-updates-list"),
    studyDrawerOverlay: document.getElementById("study-drawer-overlay"),
    studyDrawer: document.getElementById("study-drawer"),
    drawerCloseBtn: document.getElementById("drawer-close-btn"),
    drawerSubjectTitle: document.getElementById("drawer-subject-title"),
    drawerChapterTitle: document.getElementById("drawer-chapter-title"),
    drawerTabs: document.querySelectorAll(".drawer-tab-btn"),
    drawerOverviewSec: document.getElementById("drawer-overview-sec"),
    drawerFormulasSec: document.getElementById("drawer-formulas-sec"),
    drawerDefsSec: document.getElementById("drawer-definitions-sec"),
    drawerQASec: document.getElementById("drawer-qa-sec"),
    drawerQuizSec: document.getElementById("drawer-quiz-sec"),
    toastAlert: document.getElementById("toast-alert")
  };

  /* ==========================================
     CORE RENDERERS
     ========================================== */

  function getSubjectVisualMarkup(subject, variant = "card") {
    const visualCopy = {
      physics: { kicker: "Waves", main: "E = hv", sub: "optics / motion" },
      maths: { kicker: "Geometry", main: "x² + y²", sub: "algebra / graphs" },
      chemistry: { kicker: "Molecules", main: "H₂O", sub: "organic / pH" },
      biology: { kicker: "Life", main: "DNA", sub: "cells / systems" },
      english: { kicker: "Literature", main: "Aa", sub: "prose / syntax" },
      urdu: { kicker: "Adab", main: "Urdu", sub: "nazm / ghazal" },
      computer: { kicker: "Code", main: "{ C }", sub: "logic / flow" }
    };

    const copy = visualCopy[subject.id] || { kicker: "Study", main: subject.name, sub: "notes / revision" };

    return `
      <div class="subject-visual subject-visual-${subject.id} ${variant === "drawer" ? "drawer-visual" : ""}" aria-hidden="true">
        <div class="subject-visual-pattern"></div>
        <div class="subject-visual-content">
          <span class="subject-visual-kicker">${copy.kicker}</span>
          <strong>${copy.main}</strong>
          <span>${copy.sub}</span>
        </div>
        <div class="subject-visual-symbol">
          ${SVGS[subject.id] || SVGS.external}
        </div>
      </div>
    `;
  }

  // 1. Render Subject Navigator (Asymmetric Grid)
  function renderSubjectNavigator(filterText = "") {
    DOM.subjectGrid.innerHTML = "";
    
    Object.values(SUBJECTS_DATA).forEach((subject) => {
      // Check search match
      const query = filterText.toLowerCase().trim();
      const matchesSearch = 
        subject.name.toLowerCase().includes(query) ||
        subject.tagline.toLowerCase().includes(query) ||
        subject.description.toLowerCase().includes(query) ||
        subject.chapters.some(ch => ch.title.toLowerCase().includes(query)) ||
        (subject.chapterNotes || []).some(note => note.title.toLowerCase().includes(query));

      if (query !== "" && !matchesSearch) return;

      const card = document.createElement("article");
      card.className = `subject-card ${subject.isHero ? 'size-large' : 'size-medium'} ${subject.bgClass}`;
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.style.setProperty("--subject-accent", subject.accentColor);
      
      const cardVisual = getSubjectVisualMarkup(subject);

      const pdfAction = subject.pdfUrl
        ? `<a class="subject-pdf-link" href="${subject.pdfUrl}" target="_blank" rel="noopener noreferrer" aria-label="Download ${subject.name} PDF">
            ${SVGS.download} Book
          </a>`
        : `<span class="subject-pdf-link disabled">Notes</span>`;

      const readyCount = subject.chapterNotes?.filter(note => note.pdfUrl).length || subject.nbfChaptersCount;
      const readyLabel = subject.chapterNotes?.length ? "Chapter PDFs Ready" : "Chapters Ready";

      card.innerHTML = `
        <div class="subject-card-header">
          <span class="subject-badge">${subject.difficulty}</span>
          <div class="subject-icon-wrap">
            ${SVGS[subject.id] || ''}
          </div>
        </div>
        ${cardVisual}
        <div class="subject-card-body">
          <h3 class="subject-card-title">${subject.name}</h3>
          <p class="subject-card-tagline">${subject.tagline}</p>
          <p class="subject-card-desc">${subject.description}</p>
        </div>
        <div class="subject-card-footer">
          <div class="subject-meta-item">
            <strong>${readyCount}</strong> ${readyLabel}
          </div>
          ${pdfAction}
          <span class="subject-action-link">
            Explore Study Guide ${SVGS.arrowRight}
          </span>
        </div>
      `;

      // Event: Open Study notes on click
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        e.preventDefault();
        openStudyDrawer(subject.id, subject.chapters[0].num);
      });

      card.addEventListener("keydown", (e) => {
        if (e.target.closest("a")) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openStudyDrawer(subject.id, subject.chapters[0].num);
        }
      });

      DOM.subjectGrid.appendChild(card);
    });

    if (DOM.subjectGrid.innerHTML === "") {
      DOM.subjectGrid.innerHTML = `
        <div style="grid-column: span 12; text-align: center; padding: 4rem 0;">
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 1rem;">No Subject Matches</h3>
          <p style="color: var(--text-light-muted);">Try looking up "physics", "quadratic", "wave" or "C programming".</p>
        </div>
      `;
    }
  }

  // 2. Render Toybox Quick-Test Panel
  function renderToyboxFilters() {
    DOM.toyboxFilters.innerHTML = `
      <button class="toybox-filter-btn active" data-subject="all">
        All Subjects <span class="count">${TOYBOX_FLASHCARDS.length}</span>
      </button>
    `;

    Object.values(SUBJECTS_DATA).forEach(subj => {
      const subjCount = TOYBOX_FLASHCARDS.filter(fc => fc.subject === subj.id).length;
      if (subjCount === 0) return;

      const btn = document.createElement("button");
      btn.className = "toybox-filter-btn";
      btn.dataset.subject = subj.id;
      btn.innerHTML = `${subj.name} <span class="count">${subjCount}</span>`;
      DOM.toyboxFilters.appendChild(btn);
    });

    // Attach Event Listeners to filter buttons
    document.querySelectorAll(".toybox-filter-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".toybox-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.selectedToyboxSubject = btn.dataset.subject;
        state.currentFlashcardIndex = 0;
        DOM.flashcardWrap.classList.remove("flipped");
        loadFlashcard();
        renderTactileChapterScroller();
      });
    });
  }

  // Retrieve current active set of flashcards
  function getFilteredFlashcards() {
    if (state.selectedToyboxSubject === "all") {
      return TOYBOX_FLASHCARDS;
    }
    return TOYBOX_FLASHCARDS.filter(fc => fc.subject === state.selectedToyboxSubject);
  }

  // Load a single flashcard details
  function loadFlashcard() {
    const list = getFilteredFlashcards();
    if (list.length === 0) return;

    const fc = list[state.currentFlashcardIndex];
    const subjData = SUBJECTS_DATA[fc.subject];

    DOM.flashcardWrap.style.setProperty("--subject-accent", subjData.accentColor);
    DOM.flashcardWrap.classList.remove("flipped");

    // Load Front Front Face
    DOM.flashcardFront.innerHTML = `
      <div class="flashcard-tag" style="color: ${subjData.accentColor}">${subjData.name} • Formula Recall</div>
      <div class="flashcard-question-box">
        <div class="flashcard-question">${fc.term}</div>
        <div class="flashcard-tip" style="border-left-color: ${subjData.accentColor}">
          <strong>Study Tip:</strong> ${fc.hint}
        </div>
      </div>
      <div class="flashcard-action-hint">
        Click to flip and check standard answer
      </div>
    `;

    // Load Back Face
    DOM.flashcardBack.innerHTML = `
      <div class="flashcard-answer-box">
        <span class="flashcard-answer-title">Correct NBF Formula</span>
        <h3 class="flashcard-answer-text" style="color: ${subjData.accentColor}">${fc.answer}</h3>
      </div>
      <div class="flashcard-action-hint">
        Click to flip back
      </div>
    `;

    DOM.flashcardCount.innerText = `${state.currentFlashcardIndex + 1} / ${list.length}`;
  }

  // 3. Render tactile chapter preview track
  function renderTactileChapterScroller() {
    DOM.tactileTrack.innerHTML = "";
    const list = getFilteredFlashcards();

    list.forEach((fc, idx) => {
      const subj = SUBJECTS_DATA[fc.subject];
      const thumb = document.createElement("div");
      thumb.className = `tactile-chapter-card ${idx === state.currentFlashcardIndex ? 'active' : ''}`;
      if (idx === state.currentFlashcardIndex) {
        thumb.style.setProperty("--border-dark", subj.accentColor);
      }

      thumb.innerHTML = `
        <span class="thumb-num" style="color: ${subj.accentColor}">FC #${idx + 1}</span>
        <span class="thumb-title">${fc.term}</span>
      `;

      thumb.addEventListener("click", () => {
        state.currentFlashcardIndex = idx;
        loadFlashcard();
        
        // Mark active
        document.querySelectorAll(".tactile-chapter-card").forEach(tc => tc.classList.remove("active"));
        thumb.classList.add("active");
      });

      DOM.tactileTrack.appendChild(thumb);
    });
  }

  // 4. Render Recent Updates stream
  function renderRecentUpdates() {
    DOM.recentUpdatesList.innerHTML = "";

    RECENT_UPDATES.forEach(upd => {
      const subjKey = upd.subject.toLowerCase().replace("matics", "s").replace(" science", "");
      const subjData = SUBJECTS_DATA[subjKey];

      const row = document.createElement("div");
      row.className = "update-row";
      row.style.setProperty("--subject-accent", subjData.accentColor);

      row.innerHTML = `
        <span class="update-date">${upd.date}</span>
        <div class="update-subject-wrap">
          <span class="update-badge" style="background-color: ${subjData.accentColor}">${upd.subject}</span>
        </div>
        <div class="update-text">
          <div class="update-chapter">${upd.chapter}</div>
          <p>${upd.text}</p>
        </div>
        <div class="update-action">
          <a href="#" class="update-link">View Notes</a>
        </div>
      `;

      row.querySelector(".update-link").addEventListener("click", (e) => {
        e.preventDefault();
        // find chapter
        const matchingChapter = subjData.chapters.find(ch => upd.chapter.includes(ch.title.split(":")[0]) || ch.num === 10 || ch.num === 1 || ch.num === 9);
        const chapterNum = matchingChapter ? matchingChapter.num : subjData.chapters[0].num;
        openStudyDrawer(subjKey, chapterNum);
      });

      DOM.recentUpdatesList.appendChild(row);
    });
  }

  /* ==========================================
     STUDY NOTES DRAWER ENGINE (IMMERSIVE MODAL)
     ========================================== */

  function openStudyDrawer(subjectId, chapterNum) {
    state.activeDrawerSubject = subjectId;
    state.activeDrawerChapterNum = chapterNum;
    state.activeDrawerTab = "overview";

    const subject = SUBJECTS_DATA[subjectId];
    const chapter = subject.chapters.find(ch => ch.num === chapterNum) || subject.chapters[0];

    // Set styling property
    DOM.studyDrawer.style.setProperty("--subject-accent", subject.accentColor);

    // Render Titles
    DOM.drawerSubjectTitle.innerText = `${subject.name} • CHAPTER ${chapter.num}`;
    DOM.drawerSubjectTitle.style.color = subject.accentColor;
    DOM.drawerChapterTitle.innerText = chapter.title;

    // Reset Active Tab visually
    DOM.drawerTabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.dataset.tab === "overview") tab.classList.add("active");
    });

    // Populate Tab Content Structures
    populateDrawerContent(subject, chapter);

    // Show Overlay & Panel
    DOM.studyDrawerOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // disable body scrolling
  }

  function closeStudyDrawer() {
    DOM.studyDrawerOverlay.classList.remove("active");
    document.body.style.overflow = ""; // restore body scrolling
  }

  function populateDrawerContent(subject, chapter) {
    const chapterNotes = subject.chapterNotes || [];
    const availableChapterNotes = chapterNotes.filter(note => note.pdfUrl);
    const resourcePanel = subject.pdfUrl ? `
      <div class="drawer-resource-panel">
        <div class="drawer-resource-cover">${getSubjectVisualMarkup(subject, "drawer")}</div>
        <div class="drawer-resource-info">
          <span class="drawer-resource-eyebrow">Fetched from Study++</span>
          <h4>Class 11 ${subject.name} PDF</h4>
          <p>Open the full FBISE book PDF beside these notes for quick chapter matching and revision.</p>
          <div class="drawer-resource-actions">
            <a href="${subject.pdfUrl}" target="_blank" rel="noopener noreferrer" class="drawer-resource-btn primary">${SVGS.download} Download PDF</a>
            <a href="${subject.sourceUrl}" target="_blank" rel="noopener noreferrer" class="drawer-resource-btn">${SVGS.external} Notes Page</a>
          </div>
        </div>
      </div>
    ` : "";

    const chapterNotesPanel = chapterNotes.length ? `
      <div class="chapter-notes-panel">
        <div class="chapter-notes-head">
          <div>
            <span class="drawer-resource-eyebrow">Chapter-wise Notes</span>
            <h4>${availableChapterNotes.length} ${subject.name} PDFs</h4>
          </div>
          <span class="chapter-notes-pill">Separate from book PDF</span>
        </div>
        <p class="chapter-notes-intro">${subject.notesIntro || "Chapter-wise notes and solved resources for quick revision."}</p>
        <div class="chapter-notes-list">
          ${chapterNotes.map(note => {
            const noteLabel = note.label || `Ch ${note.num}`;
            if (!note.pdfUrl) {
              return `
                <div class="chapter-note-row unavailable">
                  <span class="chapter-note-num">${escapeHtml(noteLabel)}</span>
                  <span class="chapter-note-title">${escapeHtml(note.title)}</span>
                  <span class="chapter-note-action">${note.status || "Pending"}</span>
                </div>
              `;
            }
            return `
              <a class="chapter-note-row" href="${note.pdfUrl}" target="_blank" rel="noopener noreferrer">
                <span class="chapter-note-num">${escapeHtml(noteLabel)}</span>
                <span class="chapter-note-title">${escapeHtml(note.title)}</span>
                <span class="chapter-note-action">${SVGS.external} Open</span>
              </a>
            `;
          }).join("")}
        </div>
      </div>
    ` : "";

    // A. Populate Overview
    DOM.drawerOverviewSec.innerHTML = `
      ${resourcePanel}
      ${chapterNotesPanel}
      <div class="drawer-overview-card">
        <h4 style="margin-bottom: 0.8rem; font-size: 1.3rem;">Chapter Summary</h4>
        <p class="drawer-overview-text">${chapter.summary}</p>
      </div>
      <div class="overview-stats-grid">
        <div class="stat-tile">
          <div class="stat-tile-num">${chapter.formulas.length}</div>
          <div class="stat-tile-label">Formulas / Expressions</div>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-num">${chapter.definitions.length}</div>
          <div class="stat-tile-label">Key Definitions</div>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-num">${chapter.shortQA.length}</div>
          <div class="stat-tile-label">Solved Short Q&A</div>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-num">${availableChapterNotes.length || "Grade 11"}</div>
          <div class="stat-tile-label">${availableChapterNotes.length ? "Available PDF Notes" : "FBISE / NBF Resource"}</div>
        </div>
      </div>
    `;

    // B. Populate Formulas
    if (subject.formulaSheet?.length) {
      DOM.drawerFormulasSec.innerHTML = `
        <div class="formula-sheet">
          <div class="formula-sheet-header">
            <span class="drawer-resource-eyebrow">Grade 11 Formula Sheet</span>
            <h4>${subject.name} — Complete Formula Reference</h4>
            <p>All key equations grouped by chapter for fast revision and numerical practice.</p>
          </div>
          ${subject.formulaSheet.map(unit => `
            <section class="formula-unit">
              <h5>${escapeHtml(unit.unit)}</h5>
              <div class="formula-table">
                ${unit.formulas.map(f => `
                  <div class="formula-row">
                    <div class="formula-concept">${escapeHtml(f.concept)}</div>
                    <div class="formula-expression">${escapeHtml(f.equation)}</div>
                    ${f.notes ? `<div class="formula-notes">${escapeHtml(f.notes)}</div>` : ""}
                  </div>
                `).join("")}
              </div>
            </section>
          `).join("")}
        </div>
      `;
    } else if (chapter.formulas.length === 0) {
      DOM.drawerFormulasSec.innerHTML = `
        <div style="text-align: center; padding: 3rem 0;">
          <p style="color: var(--text-dark-muted);">No chemical reactions or algebraic equations in this literature block.</p>
        </div>
      `;
    } else {
      DOM.drawerFormulasSec.innerHTML = `
        <div class="formula-grid">
          ${chapter.formulas.map(f => `
            <div class="formula-card">
              <div class="formula-card-equation-box">
                <div class="formula-card-equation">${escapeHtml(f.equation)}</div>
              </div>
              <div class="formula-card-info">
                <div class="formula-card-name">${f.name}</div>
                <p class="formula-card-desc">${f.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // C. Populate Definitions & Add Micro-delight Click-to-copy
    if (chapter.definitions.length === 0) {
      DOM.drawerDefsSec.innerHTML = `<p>No separate glossary loaded for this chapter.</p>`;
    } else {
      DOM.drawerDefsSec.innerHTML = `
        <div>
          <p style="color: var(--text-dark-muted); margin-bottom: 1.5rem; font-style: italic;">
            Click the 'Copy text' label to instantly copy the definition for your study assignments.
          </p>
          ${chapter.definitions.map((def, idx) => `
            <div class="term-card">
              <button class="term-copy-btn" data-text="${escapeHtml(def.term)}: ${escapeHtml(def.text)}">Copy text</button>
              <h4 class="term-title">${def.term}</h4>
              <p class="term-text">${def.text}</p>
            </div>
          `).join("")}
        </div>
      `;

      // Copy to clipboard actions
      DOM.drawerDefsSec.querySelectorAll(".term-copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(btn.dataset.text).then(() => {
            showToast("Copied to study clipboard!");
            btn.innerText = "Copied!";
            setTimeout(() => {
              btn.innerText = "Copy text";
            }, 2000);
          });
        });
      });
    }

    // D. Populate Solved Q&A
    if (chapter.shortQA.length === 0) {
      DOM.drawerQASec.innerHTML = `<p>Exercise short questions coming soon for this unit.</p>`;
    } else {
      DOM.drawerQASec.innerHTML = `
        <div>
          ${chapter.shortQA.map(qa => `
            <div class="qa-card">
              <div class="qa-question">Q: ${qa.q}</div>
              <div class="qa-answer">
                <button class="term-copy-btn" style="top: 1rem; right: 1rem;" data-text="${escapeHtml(qa.a)}">Copy Answer</button>
                <strong>Answer:</strong> ${qa.a}
              </div>
            </div>
          `).join("")}
        </div>
      `;

      DOM.drawerQASec.querySelectorAll(".term-copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(btn.dataset.text).then(() => {
            showToast("Short Answer Copied!");
            btn.innerText = "Copied!";
            setTimeout(() => {
              btn.innerText = "Copy Answer";
            }, 2000);
          });
        });
      });
    }

    // E. Populate Quick Interactive Quiz tab (Self Evaluation Widget)
    renderQuizTab(subject, chapter);

    // Switch display tab
    switchDrawerTab("overview");
  }

  function renderQuizTab(subject, chapter) {
    let questionText = "";
    let options = [];
    let correctIdx = 0;
    let explanation = "";

    // Dynamic quiz generation based on subject data
    if (subject.id === "physics") {
      questionText = "In the Class 11 Physics formula sheet, which equation represents percentage uncertainty?";
      options = ["Δx / x", "(Δx / x) × 100%", "Δz = Δx + Δy", "η = Output/Input × 100%"];
      correctIdx = 1;
      explanation = "Percentage uncertainty is fractional uncertainty multiplied by 100 percent: (Δx / x) × 100%.";
    } else if (subject.id === "maths") {
      questionText = "What is the standard discriminant of a quadratic equation ax² + bx + c = 0?";
      options = ["b - 4ac", "b² - 4ac", "√b² - 4ac", "b² + 4ac"];
      correctIdx = 1;
      explanation = "The discriminant is D = b² - 4ac, which decides whether roots are real, equal or imaginary.";
    } else if (subject.id === "chemistry") {
      questionText = "If a liquid solution has a pH value of 3, how is it classified?";
      options = ["Highly Alkaline", "Strongly Acidic", "Neutral", "Mild Basic"];
      correctIdx = 1;
      explanation = "pH scale values below 7 are acidic. Value of 3 represents a strongly acidic solution.";
    } else {
      questionText = "What is the primary role of a 'Restoring Force' in oscillating bodies?";
      options = ["To damp the amplitude over time", "To push the bob into infinity", "To always pull the body back toward the equilibrium/mean position", "To increase frequency"];
      correctIdx = 2;
      explanation = "Restoring forces act opposite to displacement to pull the system back to center.";
    }

    DOM.drawerQuizSec.innerHTML = `
      <div class="quiz-widget">
        <div class="drawer-subject-title" style="color: ${subject.accentColor}">Tactile Study Challenge</div>
        <div class="quiz-question">${questionText}</div>
        <div class="quiz-options">
          ${options.map((opt, i) => `
            <button class="quiz-option" data-idx="${i}">${opt}</button>
          `).join("")}
        </div>
        <div class="quiz-feedback" style="display: none; border-left-color: ${subject.accentColor}"></div>
      </div>
    `;

    const btns = DOM.drawerQuizSec.querySelectorAll(".quiz-option");
    const feedbackBox = DOM.drawerQuizSec.querySelector(".quiz-feedback");

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.dataset.idx);

        // Remove states
        btns.forEach(b => {
          b.disabled = true;
          b.classList.remove("correct", "incorrect");
        });

        if (selectedIdx === correctIdx) {
          btn.classList.add("correct");
          feedbackBox.innerHTML = `<strong>Correct!</strong> ${explanation}`;
          feedbackBox.style.backgroundColor = "#EEF5EE";
          feedbackBox.style.color = "#2F532B";
        } else {
          btn.classList.add("incorrect");
          btns[correctIdx].classList.add("correct");
          feedbackBox.innerHTML = `<strong>Incorrect.</strong> ${explanation}`;
          feedbackBox.style.backgroundColor = "#FDF2EF";
          feedbackBox.style.color = "#793A27";
        }
        feedbackBox.style.display = "block";
      });
    });
  }

  function switchDrawerTab(tabName) {
    state.activeDrawerTab = tabName;

    // Remove active display on sections
    DOM.drawerOverviewSec.classList.remove("active");
    DOM.drawerFormulasSec.classList.remove("active");
    DOM.drawerDefsSec.classList.remove("active");
    DOM.drawerQASec.classList.remove("active");
    DOM.drawerQuizSec.classList.remove("active");

    // Add active
    if (tabName === "overview") DOM.drawerOverviewSec.classList.add("active");
    if (tabName === "formulas") DOM.drawerFormulasSec.classList.add("active");
    if (tabName === "definitions") DOM.drawerDefsSec.classList.add("active");
    if (tabName === "qa") DOM.drawerQASec.classList.add("active");
    if (tabName === "quiz") DOM.drawerQuizSec.classList.add("active");
  }

  /* ==========================================
     EVENT LISTENERS & GLUE ACTIONS
     ========================================== */

  // Search input typing handler
  DOM.searchBar.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderSubjectNavigator(state.searchQuery);
  });

  // Flashcard flip action click
  DOM.flashcardWrap.addEventListener("click", () => {
    DOM.flashcardWrap.classList.toggle("flipped");
  });

  // Prev/Next Flashcard button events
  DOM.flashcardBtnPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    const list = getFilteredFlashcards();
    if (list.length === 0) return;

    state.currentFlashcardIndex = (state.currentFlashcardIndex - 1 + list.length) % list.length;
    loadFlashcard();
    updateActiveTactileCard();
  });

  DOM.flashcardBtnNext.addEventListener("click", (e) => {
    e.stopPropagation();
    const list = getFilteredFlashcards();
    if (list.length === 0) return;

    state.currentFlashcardIndex = (state.currentFlashcardIndex + 1) % list.length;
    loadFlashcard();
    updateActiveTactileCard();
  });

  function updateActiveTactileCard() {
    const thumbs = DOM.tactileTrack.querySelectorAll(".tactile-chapter-card");
    thumbs.forEach((t, idx) => {
      t.classList.remove("active");
      t.style.removeProperty("--border-dark");
      if (idx === state.currentFlashcardIndex) {
        const fc = getFilteredFlashcards()[idx];
        const subj = SUBJECTS_DATA[fc.subject];
        t.classList.add("active");
        t.style.setProperty("--border-dark", subj.accentColor);
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // Drawer tab button click actions
  DOM.drawerTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.drawerTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      switchDrawerTab(btn.dataset.tab);
    });
  });

  DOM.drawerCloseBtn.addEventListener("click", closeStudyDrawer);
  DOM.studyDrawerOverlay.addEventListener("click", (e) => {
    if (e.target === DOM.studyDrawerOverlay) closeStudyDrawer();
  });

  /* ==========================================
     UTILITIES & TOASTS
     ========================================== */

  function showToast(message) {
    DOM.toastAlert.innerText = message;
    DOM.toastAlert.classList.add("show");
    setTimeout(() => {
      DOM.toastAlert.classList.remove("show");
    }, 2800);
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ==========================================
     APP INITIALIZER
     ========================================== */

  function init() {
    renderSubjectNavigator();
    renderToyboxFilters();
    loadFlashcard();
    renderTactileChapterScroller();
    renderRecentUpdates();
  }

  init();
});
