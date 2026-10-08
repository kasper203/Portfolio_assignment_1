import "./styles.css";

const app = document.querySelector<HTMLElement>("#app")!;

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Kasper Wittmaack home">
      <img class="brand-mark" src="/assets/kasper-wittmaack.jpg" alt="" />
      <span>Kasper Wittmaack</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-cta" href="mailto:Kasper@wittmaack.dk">Let's talk <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Cyber- and Computer Technology student</p>
        <h1 id="hero-title">Building a more <em>secure</em> digital world.</h1>
        <p class="hero-description">I'm Kasper, a Cyber- and Computer Technology student at Aalborg University in Copenhagen, working toward a career in cybersecurity.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="#about">More about me <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-art">
        <img src="/assets/kasper-wittmaack.jpg" alt="Professional portrait of Kasper Wittmaack" />
        <span class="art-label">Security through understanding</span>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">01 / Selected work</p>
          <h2 id="work-title">A few things I've made.</h2>
        </div>
        <p class="section-note">University projects exploring cybersecurity, software, and the way people interact with technology.</p>
      </div>
      <div class="project-grid">
        <a class="project project-terracotta" href="https://github.com/kasper203/P4-DigitalHealthcare" target="_blank" rel="noreferrer">
          <div class="project-topline"><span>01</span><span>University / Cybersecurity</span></div>
          <div class="project-visual visual-sunday"><span class="visual-word">P4</span><span class="visual-caption">digital<br>healthcare</span></div>
          <div class="project-info"><h3>Digital Healthcare</h3><span class="project-arrow" aria-hidden="true">↗</span><p>A university project exploring how different cyber attacks can be tested against a digital healthcare application.</p></div>
        </a>
        <a class="project project-blue" href="https://github.com/kasper203/P2-Spilportal" target="_blank" rel="noreferrer">
          <div class="project-topline"><span>02</span><span>University / Web development</span></div>
          <div class="project-visual visual-arc"><span class="arc-mark">P2</span><div class="arc-line"></div><span class="visual-caption">game<br>portal</span></div>
          <div class="project-info"><h3>Game Browsing Website</h3><span class="project-arrow" aria-hidden="true">↗</span><p>A simple game browsing website created as part of a university project.</p></div>
        </a>
        <a class="project project-lime" href="https://github.com/kasper203" target="_blank" rel="noreferrer">
          <div class="project-topline"><span>03</span><span>Profile / Other work</span></div>
          <div class="project-visual visual-field"><span class="field-type">Kasper<br>Wittmaack</span><span class="field-circle"></span><span class="visual-caption">more work<br>on GitHub</span></div>
          <div class="project-info"><h3>More on GitHub</h3><span class="project-arrow" aria-hidden="true">↗</span><p>Explore more of my university work, experiments, and ongoing projects.</p></div>
        </a>
      </div>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <div class="about-intro">
        <p class="eyebrow">02 / A little about me</p>
        <h2 id="about-title">Curious by nature.<br><em>Security-minded</em> by design.</h2>
      </div>
      <div class="about-details">
        <p>I'm studying Cyber- and Computer Technology at Aalborg University in Copenhagen. My interests are cybersecurity, secure systems, and understanding how technology can be tested and improved in the face of real-world threats.</p>
        <div class="skills">
          <span>Cybersecurity</span><span>Cyber attack testing</span><span>24/7 SOC Operations</span><span>Secure systems</span>
        </div>
        <div class="about-links">
          <a class="button button-primary" href="/assets/Kasper-Wittmaack-CV.pdf" target="_blank" rel="noreferrer">View résumé <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="https://github.com/kasper203" target="_blank" rel="noreferrer">View my GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section" aria-labelledby="contact-title">
      <p class="eyebrow">03 / Start a conversation</p>
      <h2 id="contact-title">Interested in cybersecurity?<br><em>Let's connect.</em></h2>
      <a class="contact-email" href="mailto:Kasper@wittmaack.dk">Kasper@wittmaack.dk <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <footer class="site-footer">
    <span>© 2026 Kasper Wittmaack</span>
    <span>Cyber- and Computer Technology · Aalborg University</span>
    <div class="footer-links"><a href="#top">Back to top ↑</a><a href="https://github.com/kasper203" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kasper-wittmaack-997015278/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
  </footer>
`;
