---
layout: default
title: Jane Doe Portfolio
---

<main class="container">
  <header>
    <div class="brand">
      <div class="logo">JS</div>
      <div>
        <h1>Jane Doe</h1>
        <div class="sub">Frontend developer — building accessible, responsive websites</div>
      </div>
    </div>

    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- content -->
  <section style="padding:0 2.25rem 2.25rem; width:100%">
    <div class="left">
      <article class="card profile about" id="about">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap">
          <div style="display:flex;gap:1rem;align-items:center">
            <div class="avatar">JD</div>
            <div>
              <h2 style="margin:0 0 .25rem 0">Hi — I'm Jane.</h2>
              <div style="color:var(--muted);font-size:.95rem">
                I love turning ideas into clean, accessible interfaces. I specialize in HTML, CSS and creating responsive experiences that work on any device.
              </div>
            </div>
          </div>
          <div style="margin-left:auto;color:var(--muted);font-size:.9rem">
            Based in Anywhere • Open to work
          </div>
        </div>

        <p style="margin-top:1rem">
          A little more about me: I enjoy learning new layout techniques, focusing on accessibility, and simplifying complex interfaces. When I'm not coding I sketch, take long bike rides, and experiment with photography.
        </p>
      </article>

      <article class="card">
        <h3 style="margin-top:0;margin-bottom:.6rem">Skills</h3>
        <div style="display:flex;flex-wrap:wrap;gap:.6rem">
          <span style="background:var(--glass);padding:.45rem .6rem;border-radius:999px;color:var(--muted);font-size:.9rem">HTML5</span>
          <span style="background:var(--glass);padding:.45rem .6rem;border-radius:999px;color:var(--muted);font-size:.9rem">CSS3</span>
          <span style="background:var(--glass);padding:.45rem .6rem;border-radius:999px;color:var(--muted);font-size:.9rem">Responsive Design</span>
          <span style="background:var(--glass);padding:.45rem .6rem;border-radius:999px;color:var(--muted);font-size:.9rem">Accessibility</span>
        </div>
      </article>
    </div>

    <div class="right">
      <section class="card">
        <h3 style="margin-top:0">Featured Projects</h3>
        <div id="projects" class="projects-grid" style="margin-top:12px">
          <div class="project">
            <h4>Portfolio Site</h4>
            <p>A minimal, high-performance portfolio built with semantic HTML and responsive CSS. Focus: accessibility and fast-loading images.</p>
          </div>

          <div class="project">
            <h4>Recipe Finder</h4>
            <p>Searchable recipe UI that emphasizes keyboard navigation and adaptable layout for phones and tablets.</p>
          </div>

          <div class="project">
            <h4>Design System Demo</h4>
            <p>Component library sample demonstrating tokens, responsive patterns and accessible form controls.</p>
          </div>

          <div class="project">
            <h4>Landing Page</h4>
            <p>High-conversion landing page focusing on clarity, responsive hero, and clean call-to-action patterns.</p>
          </div>
        </div>
      </section>

      <section class="card" id="contact">
        <h3 style="margin-top:0">Get in touch</h3>
        <p style="color:var(--muted)">
          Interested in working together? Say hi at <strong style="color:var(--accent)">hello@janedoe.dev</strong> or connect on your preferred platform.
        </p>
      </section>
    </div>
  </section>

  <footer>
    <div>© 2025 Jane Doe — Built with plain HTML & CSS • Small, responsive layout</div>
  </footer>
</main>

<script src="ADA_ProjJS.js"></script>
