(function () {
  "use strict";
  const d = portfolioData;
  const base = document.body.dataset.base || "";
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const li = a => a.map(x => "<li>" + esc(x) + "</li>").join("");
  const chips = (a, cls) => a.map(x => '<span class="chip ' + (cls || "") + '">' + esc(x) + "</span>").join("");
  document.documentElement.classList.add("js");

  /* Theme (saved in localStorage) */
  const root = document.documentElement;
  const themeBtn = $("#themeBtn");
  function setTheme(t) {
    root.dataset.theme = t;
    if (themeBtn) { themeBtn.textContent = t === "dark" ? "☀" : "☾"; themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode"); }
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
  setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  if (themeBtn) themeBtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  /* Mobile menu */
  const menuBtn = $("#menuBtn"), menu = $("#menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => { const o = menu.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); });
    menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
    document.addEventListener("keydown", e => { if (e.key === "Escape") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
  }

  /* Shared data bindings: <a data-bind="linkedin|github|resume"> and <span data-bind="name|title|location|..."> */
  document.querySelectorAll("[data-bind]").forEach(el => {
    const k = el.dataset.bind, v = d[k];
    if (el.tagName === "A" && (k === "linkedin" || k === "github")) el.href = v;
    else if (el.tagName === "A" && k === "resume") el.href = base + v;
    else if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-resume-text]").forEach(el => el.textContent = d.resumeText);

  /* Home page */
  if ($("#about-text")) {
    $("#about-text").innerHTML = d.about.map(p => "<p>" + esc(p) + "</p>").join("");
    $("#stats").innerHTML = d.highlights.map(h => '<div class="card stat"><b>' + esc(h.value) + "</b><span>" + esc(h.label) + "</span></div>").join("");
    $("#timeline").innerHTML = d.experience.map(j => `
      <article class="job card reveal">
        <div class="job-head"><div><h3>${esc(j.role)}</h3><div class="muted">${esc(j.company)} · ${esc(j.location)}</div></div><div class="period">${esc(j.period)}</div></div>
        <p>${esc(j.description)}</p>
        <h4>Key achievements</h4><ul>${li(j.achievements)}</ul>
        <h4>Responsibilities</h4><ul>${li(j.responsibilities)}</ul>
        <div class="impact"><strong>Business impact:</strong> ${esc(j.impact)}</div>
        <div style="margin-top:1rem">${chips(j.tools)}</div>
      </article>`).join("");
    $("#skill-groups").innerHTML = Object.keys(d.skills).map(g => '<div class="card reveal"><h3>' + esc(g) + "</h3>" + chips(d.skills[g]) + "</div>").join("");
    $("#project-grid").innerHTML = d.projects.map(p => `
      <article class="card proj reveal">
        <img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy" width="1200" height="750">
        <div class="proj-body">
          <div>${chips(p.tags, "accent")}</div>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.short)}</p>
          <div class="meta"><strong>Tools:</strong> ${esc(p.tools.join(", "))}</div>
          <a class="btn" href="projects/case-study.html?id=${esc(p.id)}" aria-label="View case study: ${esc(p.name)}">View Case Study</a>
        </div>
      </article>`).join("");
    const img = $("#profile-img"); if (img) img.src = d.profileImage;
    const em = $("#email-line");
    em.innerHTML = d.email ? '<a href="mailto:' + esc(d.email) + '">' + esc(d.email) + "</a>" : '<span class="placeholder">[ADD PROFESSIONAL EMAIL]</span>';
    if (d.phone) $("#phone-line").innerHTML = '<a href="tel:' + esc(d.phone.replace(/\s/g, "")) + '">' + esc(d.phone) + "</a>"; else $("#phone-item").remove();
  }

  /* Case study page */
  const csRoot = $("#case-study");
  if (csRoot) {
    const idx = d.projects.findIndex(p => p.id === new URLSearchParams(location.search).get("id"));
    if (idx < 0) { csRoot.innerHTML = '<p>Case study not found. <a href="../index.html#projects">Back to projects</a></p>'; }
    else {
      const p = d.projects[idx];
      document.title = p.name + " | " + d.name;
      const steps = [
        ["problem", "Business problem", "<p>" + esc(p.problem) + "</p>"],
        ["objective", "Objective", "<p>" + esc(p.objective) + "</p>"],
        ["approach", "Approach", '<div class="facts"><div><b>My role</b>' + esc(p.role) + "</div><div><b>Methodology</b>" + esc(p.methodology) + "</div><div><b>Data sources</b>" + esc(p.dataSource) + "</div></div><p style='margin-top:1rem'>" + chips(p.tools) + "</p>"],
        ["analysis", "Analysis", "<ul>" + li(p.analysis) + "</ul>"],
        ["findings", "Findings", '<ul class="cards3">' + li(p.findings) + "</ul>"],
        ["recommendations", "Recommendations", '<ul class="cards3">' + li(p.recommendations) + "</ul>"],
        ["outcome", "Outcome", "<p>" + esc(p.outcome) + "</p>"],
        ["impact", "Business impact", "<p>" + esc(p.impact) + "</p>"]
      ];
      const prev = d.projects[idx - 1], next = d.projects[idx + 1];
      csRoot.innerHTML = `
        <div class="cs-hero"><a href="../index.html#projects">← All projects</a>
          <h1>${esc(p.name)}</h1><div>${chips(p.tags, "accent")}</div></div>
        <img class="cs-img" src="../${esc(p.image)}" alt="${esc(p.imageAlt)}" width="1200" height="600">
        <ol class="flow" aria-label="Case study sections">${steps.map((s, i) => '<li><a href="#' + s[0] + '">' + (i + 1) + ". " + s[1] + "</a></li>").join("")}</ol>
        ${steps.map(s => '<section class="step" id="' + s[0] + '" style="padding-block:1.5rem"><h2>' + s[1] + "</h2><div>" + s[2] + "</div></section>").join("")}
        <div class="cs-nav">${prev ? '<a class="btn" href="?id=' + prev.id + '">← Previous</a>' : "<span></span>"}${next ? '<a class="btn" href="?id=' + next.id + '">Next project →</a>' : "<span></span>"}</div>`;
    }
  }

  /* Contact form (Formspree) */
  const form = $("#contact-form");
  if (form) {
    form.action = d.formspreeEndpoint;
    const status = $("#form-status"), btn = $("#send-btn");
    const msgs = { name: "Enter your name.", email: "Enter a valid email address.", subject: "Enter a subject.", message: "Enter a message." };
    function check(el) {
      const bad = !el.checkValidity();
      el.setAttribute("aria-invalid", bad);
      $("#err-" + el.name).textContent = bad ? msgs[el.name] : "";
      return !bad;
    }
    form.querySelectorAll("input,textarea").forEach(el => el.addEventListener("blur", () => { if (el.name !== "_gotcha") check(el); }));
    form.addEventListener("submit", async e => {
      e.preventDefault();
      status.className = "status";
      const fields = ["name", "email", "subject", "message"].map(n => form.elements[n]);
      const results = fields.map(check);
      if (results.includes(false)) { fields[results.indexOf(false)].focus(); return; }
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        const r = await fetch(d.formspreeEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (r.ok) { form.reset(); status.textContent = "Message sent. Thank you, I will reply soon."; status.className = "status ok"; }
        else throw new Error("fail");
      } catch (err) {
        status.textContent = "The message was not sent. Check your connection and try again" + (d.email ? ", or email " + d.email + "." : ".");
        status.className = "status bad";
      }
      btn.disabled = false; btn.textContent = "Send message";
    });
  }

  /* Scroll reveal + active nav link */
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 }) : null;
  document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  const links = [...document.querySelectorAll("a.link[href^='#']")];
  if (links.length && "IntersectionObserver" in window) {
    const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(a => { const s = $(a.getAttribute("href")); if (s) so.observe(s); });
  }
  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
