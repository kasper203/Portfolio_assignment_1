import "./styles.css";

const app = document.querySelector<HTMLElement>("#app")!;

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="/">Your Name</a>
    <nav aria-label="Main navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <section class="intro" aria-labelledby="intro-title">
      <p class="eyebrow">Portfolio</p>
      <h1 id="intro-title">A short introduction goes here.</h1>
      <p class="intro-copy">Use this space to describe who you are, what you make, and what you care about.</p>
    </section>
    <section id="work" aria-labelledby="work-title">
      <h2 id="work-title">Selected work</h2>
      <div class="project-grid">
        <article class="project"><h3>Project one</h3><p>Add a short description of your work.</p></article>
        <article class="project"><h3>Project two</h3><p>Add a short description of your work.</p></article>
      </div>
    </section>
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <p>Add your background, skills, and interests here.</p>
    </section>
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p><a href="mailto:hello@example.com">hello@example.com</a></p>
    </section>
  </main>
`;
