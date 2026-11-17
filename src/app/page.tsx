const projects = [
  {
    number: "01",
    name: "Mamori",
    category: "Personal memory studio",
    description: "A quieter place to collect thoughts, notes, images and audio — designed around the things worth keeping.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    status: "Live",
    statusType: "live",
    url: "https://mamori-black.vercel.app",
    image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://mamori-black.vercel.app/",
    featured: true,
    visual: "mamori",
  },
  {
    number: "02",
    name: "Strata",
    category: "Library management",
    description: "A library platform that brings catalogue discovery, circulation and administration into one considered workspace.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL"],
    status: "Public demo",
    statusType: "live",
    url: "https://folio-library-manager.vercel.app",
    image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://folio-library-manager.vercel.app/",
    featured: true,
    visual: "strata",
  },
  {
    number: "03",
    name: "Reclaim",
    category: "Wellbeing · Recovery platform",
    description: "A recovery companion built around small steps, personal progress and a community that makes the journey feel less lonely.",
    stack: ["React", "Vite", "Firebase", "Express"],
    status: "Live demo",
    statusType: "live",
    url: "https://reclaim-manny-s-projects1.vercel.app",
    image: "https://image.thum.io/get/width/1400/crop/900/noanimate/https://reclaim-manny-s-projects1.vercel.app/",
    featured: true,
    visual: "reclaim",
  },
  {
    number: "04",
    name: "Foodle",
    category: "AI · Food & lifestyle",
    description: "An idea for a more personal food platform — from ingredient discovery and meal planning to smarter everyday choices.",
    stack: ["AI", "Product design", "Personalisation"],
    status: "Concept",
    statusType: "concept",
    visual: "foodle",
  },
  {
    number: "05",
    name: "Septa Software",
    category: "Digital experience",
    description: "A visual exploration of a technology brand's digital presence, with a focus on clarity, motion and a distinctive identity.",
    stack: ["React", "Vite", "CSS"],
    status: "Experiment",
    statusType: "building",
    visual: "septa",
  },
  {
    number: "06",
    name: "Driftmark",
    category: "Weather · Web experiment",
    description: "A weather interface experiment exploring how useful forecast information can feel calm, immediate and easy to read.",
    stack: ["React", "Vite", "Weather API"],
    status: "Private preview",
    statusType: "private",
    url: "https://manny-s-driftmark-weather-app.vercel.app",
    visual: "driftmark",
  },
];

const screenshotNote = "Screenshots are captured from the live product pages. Some projects are still private or in development.";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <a className={`project-visual visual-${project.visual}`} href={project.url || "#contact"} target={project.url ? "_blank" : undefined} rel={project.url ? "noreferrer" : undefined} aria-label={project.url ? `Open ${project.name}` : `Explore ${project.name} project details`}>
        {project.image ? (
          <img src={project.image} alt={`Live screenshot of ${project.name}`} loading="lazy" />
        ) : (
          <div className="visual-art" aria-hidden="true">
            <span className="art-orbit orbit-one" />
            <span className="art-orbit orbit-two" />
            <span className="art-word">{project.name}</span>
            <span className="art-caption">{project.category}</span>
          </div>
        )}
        <span className={`status status-${project.statusType}`}><i />{project.status}</span>
        <span className="visual-open"><Arrow diagonal /></span>
      </a>
      <div className="project-copy">
        <div className="project-heading">
          <span className="project-number">{project.number} / 06</span>
          <span className="project-category">{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-bottom">
          <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.url ? <a className="project-link" href={project.url} target="_blank" rel="noreferrer">{project.statusType === "private" ? "Preview" : "Visit"} <Arrow diagonal /></a> : <span className="project-link muted">In progress</span>}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Emmanuel Falusi home">EMMANUEL FALUSI</a>
        <nav aria-label="Main navigation">
          <a href="#work">Work <span>06</span></a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><i /> Open to opportunities</a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-kicker"><span className="kicker-line" /> INDEPENDENT DIGITAL STUDIO <span className="hero-location">LAGOS, NG · 2026</span></div>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="eyebrow">THOUGHTFUL IDEAS. USEFUL TECHNOLOGY.</p>
            <h1>Making digital<br /><em>things</em> matter<span className="period">.</span></h1>
            <div className="hero-foot">
              <p>I’m Emmanuel Falusi — a student developer building digital products, exploring ideas and learning by making things real.</p>
              <a className="circle-link" href="#work" aria-label="Explore selected work"><span>↓</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbital" aria-hidden="true">
              <div className="orbital-core">EF</div>
              <div className="orbital-ring ring-a" />
              <div className="orbital-ring ring-b" />
              <div className="orbital-dot dot-a" />
              <div className="orbital-dot dot-b" />
            </div>
            <div className="aside-note"><span>01 — 06</span><span>SELECTED WORK<br />& SIDE QUESTS</span></div>
          </div>
        </div>
        <div className="hero-marquee" aria-label="Design, development, experimentation">
          <div className="marquee-track"><span>DESIGN WITH INTENT</span><b>✳</b><span>BUILD WITH CURIOSITY</span><b>✳</b><span>LEARN BY SHIPPING</span><b>✳</b><span>DESIGN WITH INTENT</span><b>✳</b><span>BUILD WITH CURIOSITY</span><b>✳</b></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">THE WORK SO FAR</p><h2>Selected <em>projects.</em></h2></div>
          <p className="section-intro">A growing collection of products, experiments and ideas. Some are live, some are still taking shape — all are part of the process.</p>
        </div>
        <div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        <p className="screenshot-note"><span>↳</span> {screenshotNote}</p>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-heading">
          <div><p className="eyebrow">A LITTLE CONTEXT</p><h2>Curious by<br /><em>default.</em></h2></div>
          <div className="about-copy">
            <p className="about-lead">I like the space between a good idea and a product someone can actually use.</p>
            <p>I’m an independent developer interested in product thinking, thoughtful interfaces and the technology that makes useful experiences possible. I’m still learning, still experimenting, and very much enjoying the process.</p>
            <a className="underlined-link" href="https://github.com/pro-Mxnny" target="_blank" rel="noreferrer">Find me on GitHub <Arrow diagonal /></a>
          </div>
        </div>
        <div className="capabilities">
          <div><span>01</span><strong>Product thinking</strong><p>Turning loose ideas into clear, usable experiences.</p></div>
          <div><span>02</span><strong>Interface & interaction</strong><p>Building interfaces with personality and purpose.</p></div>
          <div><span>03</span><strong>Full-stack exploration</strong><p>Connecting frontend experiences to real data and systems.</p></div>
        </div>
        <div className="stack-strip"><span className="stack-label">CURRENT TOOLKIT</span><div>Next.js <i>·</i> React <i>·</i> TypeScript <i>·</i> Supabase <i>·</i> PostgreSQL <i>·</i> Firebase <i>·</i> Vite</div></div>
      </section>

      <section className="contact section-wrap" id="contact">
        <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
        <h2>Let’s make<br /><em>something</em><br />matter<span className="period">.</span></h2>
        <div className="contact-bottom">
          <p>Open to collaborations, interesting projects and conversations with people who like making things.</p>
          <a className="contact-button" href="https://github.com/pro-Mxnny" target="_blank" rel="noreferrer">Say hello on GitHub <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">EMMANUEL FALUSI</a>
        <span>INDEPENDENTLY MADE · LAGOS, NIGERIA</span>
        <div><a href="https://github.com/pro-Mxnny" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a><a href="https://instagram.com/its.just.mxnny" target="_blank" rel="noreferrer">INSTAGRAM <Arrow diagonal /></a></div>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
