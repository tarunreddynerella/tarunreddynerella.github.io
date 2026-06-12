import React from "react";
import "./V3Portfolio.css";
import portfolioData from "../V2Portfolio/portfolioData";

const externalLinkProps = (url) =>
  url?.startsWith("http") ? { rel: "noreferrer", target: "_blank" } : {};

const HEAD_TONES = ["h-blue", "h-orange", "h-ink", "h-orange", "h-blue"];
const KEY_TONES = ["g-blue", "g-orange", "g-ink"];

function Headline({ text, highlight = "reliable" }) {
  const index = text.toLowerCase().indexOf(highlight);
  if (index === -1) {
    return <h1>{text}</h1>;
  }
  return (
    <h1>
      {text.slice(0, index)}
      <span className="v3-blue">{text.slice(index, index + highlight.length)}</span>
      {text.slice(index + highlight.length)}
    </h1>
  );
}

function TagList({ items }) {
  return (
    <div className="v3-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function RepoLinks({ links, status, label = "Project proof" }) {
  if (!status && !links?.length) {
    return null;
  }
  return (
    <div className="v3-proof-links" aria-label={label}>
      {status ? <span className="v3-status-chip">{status}</span> : null}
      {links?.map((link) => (
        <a
          className="v3-repo"
          href={link.url}
          key={link.url}
          {...externalLinkProps(link.url)}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

function CertificationList({ certifications, compact = false }) {
  return (
    <ul className={`v3-cert-list${compact ? " v3-cert-list-compact" : ""}`}>
      {certifications.map((certification, index) => (
        <li key={certification.title}>
          <a href={certification.url} {...externalLinkProps(certification.url)}>
            <span className="v3-cert-left">
              <span
                className={`v3-key ${KEY_TONES[index % 2 === 0 ? 0 : 1]}`}
                aria-hidden="true"
              />
              <span>{certification.title}</span>
            </span>
            <small>
              {certification.issuer} | {certification.date}
            </small>
          </a>
        </li>
      ))}
    </ul>
  );
}

function SectionHead({ num, title, lede, id }) {
  return (
    <div className="v3-sect-head">
      <span className="v3-sect-num" aria-hidden="true">
        {num}
      </span>
      <h2 id={id}>{title}</h2>
      <div className="v3-bar-fill" aria-hidden="true" />
      {lede ? <p className="v3-lede">{lede}</p> : null}
    </div>
  );
}

function TopNav({ profile }) {
  return (
    <header className="v3-topbar">
      <a href="#top" className="v3-brand" aria-label="Tarun Reddy Nerella home">
        <span className="v3-sq" aria-hidden="true" />
        <span>{profile.name}</span>
      </a>
      <nav className="v3-nav" aria-label="V3 portfolio sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function PipelineFigure() {
  return (
    <aside className="v3-dag" aria-label="Data pipeline schematic">
      <span className="v3-dag-tag">PIPELINE.SVG</span>
      <svg width="100%" viewBox="0 0 420 300" fill="none" aria-hidden="true">
        <g className="v3-dag-grid" strokeWidth="1">
          <line x1="0" y1="75" x2="420" y2="75" />
          <line x1="0" y1="150" x2="420" y2="150" />
          <line x1="0" y1="225" x2="420" y2="225" />
          <line x1="105" y1="0" x2="105" y2="300" />
          <line x1="210" y1="0" x2="210" y2="300" />
          <line x1="315" y1="0" x2="315" y2="300" />
        </g>
        <g className="v3-dag-edges" strokeWidth="3">
          <path d="M70 150 L150 75" />
          <path d="M70 150 L150 225" />
          <path d="M150 75 L250 75" />
          <path d="M150 225 L250 225" />
          <path d="M250 75 L340 150" />
          <path d="M250 225 L340 150" />
        </g>
        <circle cx="70" cy="150" r="26" className="v3-fill-blue" />
        <rect x="128" y="53" width="44" height="44" className="v3-fill-orange" />
        <rect x="128" y="203" width="44" height="44" className="v3-fill-orange" />
        <rect x="228" y="53" width="44" height="44" className="v3-fill-ink" />
        <rect x="228" y="203" width="44" height="44" className="v3-fill-ink" />
        <circle cx="340" cy="150" r="30" className="v3-fill-blue" />
        <circle cx="340" cy="150" r="13" className="v3-fill-orange" />
        <g className="v3-dag-labels" fontSize="10" fontWeight="700">
          <text x="54" y="195">SOURCE</text>
          <text x="124" y="44">BRONZE</text>
          <text x="128" y="264">SILVER</text>
          <text x="236" y="44">GOLD</text>
          <text x="240" y="264">EVAL</text>
          <text x="310" y="198">RELIABLE</text>
        </g>
      </svg>
      <p className="v3-dag-cap">FIG. 01 — DATA → AI → PRODUCTION. NO SILENT FAILURES.</p>
    </aside>
  );
}

function Hero({ profile }) {
  return (
    <section className="v3-hero" id="top">
      <div>
        <p className="v3-kicker">
          <span className="v3-sq" aria-hidden="true" />
          {profile.role} / Data Platforms / Applied ML / Agents
        </p>
        <Headline text={profile.headline} />
        <p className="v3-intro">{profile.summary}</p>
        <div className="v3-actions" aria-label="Primary portfolio actions">
          <a className="v3-btn v3-btn-primary" href={profile.resumePdf}>
            Download Resume
          </a>
          <a
            className="v3-btn"
            href={profile.links.linkedin}
            {...externalLinkProps(profile.links.linkedin)}
          >
            LinkedIn
          </a>
          <a
            className="v3-btn"
            href={profile.links.github}
            {...externalLinkProps(profile.links.github)}
          >
            GitHub
          </a>
          <a className="v3-btn" href={profile.links.email}>
            Email
          </a>
        </div>
      </div>
      <PipelineFigure />
    </section>
  );
}

function ProofStrip({ proof }) {
  return (
    <section className="v3-stats" aria-label="Proof metrics">
      {proof.map((item) => (
        <article className="v3-stat" key={item.value}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function BuildGlyph({ index }) {
  const glyphs = [
    <circle cx="17" cy="17" r="15" className="v3-fill-blue" key="c" />,
    <rect x="2" y="2" width="30" height="30" className="v3-fill-orange" key="r" />,
    <path d="M17 2 L32 32 L2 32 Z" className="v3-fill-ink" key="t" />,
    <g key="q">
      <path d="M2 32 A 30 30 0 0 1 32 2 L32 32 Z" className="v3-fill-blue" />
      <circle cx="24" cy="24" r="6" className="v3-fill-orange" />
    </g>,
  ];
  return (
    <svg className="v3-glyph" viewBox="0 0 34 34" aria-hidden="true">
      {glyphs[index % glyphs.length]}
    </svg>
  );
}

function BuildAreas({ areas }) {
  return (
    <section className="v3-sect" aria-labelledby="v3-build-heading">
      <SectionHead
        num="01"
        title="What I Build"
        id="v3-build-heading"
        lede="Data foundations with enough AI context to be useful in production."
      />
      <div className="v3-build">
        {areas.map((area, index) => (
          <article className="v3-cell" key={area.title}>
            <BuildGlyph index={index} />
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudies({ studies }) {
  return (
    <section className="v3-sect" id="work" aria-labelledby="v3-work-heading">
      <SectionHead
        num="02"
        title="Selected Work"
        id="v3-work-heading"
        lede="Proof-led case studies for AI data engineering roles."
      />
      <div className="v3-cards">
        {studies.map((study, index) => (
          <article
            className={`v3-card${index === 0 ? " v3-card-wide" : ""}`}
            key={study.title}
          >
            <div className={`v3-card-head ${HEAD_TONES[index % HEAD_TONES.length]}`}>
              <span className="v3-card-no">{study.id}</span>
              <span className="v3-card-meta-r">{study.meta}</span>
            </div>
            <div className="v3-card-body">
              <h3>{study.title}</h3>
              <div className="v3-po">
                <div>
                  <p className="v3-po-lbl v3-po-problem">PROBLEM →</p>
                  <p>{study.problem}</p>
                </div>
                <div>
                  <p className="v3-po-lbl v3-po-outcome">OUTCOME →</p>
                  <p>{study.outcome}</p>
                </div>
              </div>
              <div className="v3-card-foot">
                <TagList items={study.stack} />
                <RepoLinks
                  label={`${study.title} proof links`}
                  links={study.links}
                  status={study.status}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AiLab({ lab }) {
  return (
    <section className="v3-sect" aria-labelledby="v3-lab-heading">
      <SectionHead
        num="03"
        title="Agent Lab"
        id="v3-lab-heading"
        lede="Smaller AI workflows that show operating taste and automation range."
      />
      <div className="v3-cards v3-lab">
        {lab.map((item, index) => (
          <article className="v3-card" key={item.title}>
            <div className="v3-card-head h-ink">
              <span className="v3-card-no">{`LAB.0${index + 1}`}</span>
              <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
                {index % 2 === 0 ? (
                  <circle cx="9" cy="9" r="8" className="v3-fill-orange" />
                ) : (
                  <rect width="18" height="18" className="v3-fill-blue" />
                )}
              </svg>
            </div>
            <div className="v3-card-body">
              <h3>{item.title}</h3>
              <p className="v3-card-text">{item.body}</p>
              <div className="v3-card-foot">
                <TagList items={item.stack} />
                <RepoLinks
                  label={`${item.title} proof links`}
                  links={item.links}
                  status={item.status}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience({ experience }) {
  return (
    <section className="v3-sect" id="experience" aria-labelledby="v3-xp-heading">
      <SectionHead
        num="04"
        title="Experience"
        id="v3-xp-heading"
        lede="Production data work, then research and full-stack foundations."
      />
      <div className="v3-xp">
        {experience.map((item) => (
          <article className="v3-xp-row" key={`${item.title}-${item.org}`}>
            <div className="v3-xp-when">{item.date.replace(" to ", " — ")}</div>
            <div className="v3-xp-what">
              <h3>{item.title}</h3>
              <p className="v3-xp-org">{item.org}</p>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ skills }) {
  return (
    <section className="v3-sect" id="skills" aria-labelledby="v3-skills-heading">
      <SectionHead
        num="05"
        title="Skills"
        id="v3-skills-heading"
        lede="Grouped for scan speed, not alphabet soup."
      />
      <div className="v3-skills">
        {skills.map((group, index) => (
          <article className="v3-skill-box" key={group.title}>
            <h3>
              <span
                className={`v3-key ${KEY_TONES[index % KEY_TONES.length]}`}
                aria-hidden="true"
              />
              {group.title}
            </h3>
            <TagList items={group.items} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Certifications({ certifications }) {
  return (
    <section className="v3-sect" aria-labelledby="v3-cert-heading">
      <SectionHead num="06" title="Certifications" id="v3-cert-heading" />
      <div className="v3-certs">
        <CertificationList certifications={certifications} />
      </div>
    </section>
  );
}

function EducationAndEarlierWork({ education, earlierWork, research }) {
  return (
    <section className="v3-sect" aria-labelledby="v3-edu-heading">
      <SectionHead num="07" title="Education & Earlier Work" id="v3-edu-heading" />
      <div className="v3-edu">
        {education.map((item) => (
          <article className="v3-cell" key={item.title}>
            <h3>{item.title}</h3>
            <p className="v3-edu-org">{item.org}</p>
            <p className="v3-edu-date">{item.date}</p>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <ul className="v3-research" aria-label="Research and programs">
        {research.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {earlierWork.map((item) => (
        <article className="v3-earlier" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <div className="v3-earlier-links">
            {item.links.map((link) => (
              <a href={link.url} key={link.label} {...externalLinkProps(link.url)}>
                {link.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function Contact({ profile }) {
  return (
    <section className="v3-contact" id="contact" aria-labelledby="v3-contact-heading">
      <div className="v3-contact-inner">
        <div>
          <h2 id="v3-contact-heading">
            Want the <span className="v3-orange">fast</span> version?
          </h2>
          <p>
            I am based in {profile.location}. The PDF has the full resume, and
            the portfolio view gives the project context behind it.
          </p>
        </div>
        <div className="v3-actions">
          <a className="v3-btn v3-btn-contact-primary" href={profile.resumePdf}>
            Open Resume
          </a>
          <a className="v3-btn v3-btn-contact" href={profile.links.email}>
            Email
          </a>
          <a
            className="v3-btn v3-btn-contact"
            href={profile.links.linkedin}
            {...externalLinkProps(profile.links.linkedin)}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="v3-footer">
        <span>
          <span className="v3-sq" aria-hidden="true" />
          {profile.location}
        </span>
        <span>{profile.name} © 2026</span>
      </div>
    </section>
  );
}

function PortfolioMode() {
  const data = portfolioData;
  return (
    <>
      <Hero profile={data.profile} />
      <ProofStrip proof={data.proof} />
      <BuildAreas areas={data.buildAreas} />
      <CaseStudies studies={data.caseStudies} />
      <AiLab lab={data.aiLab} />
      <Experience experience={data.experience} />
      <Skills skills={data.skills} />
      <Certifications certifications={data.certifications} />
      <EducationAndEarlierWork
        education={data.education}
        earlierWork={data.earlierWork}
        research={data.research}
      />
    </>
  );
}

function ResumeMode({ certifications, profile, setMode }) {
  const openPortfolioSection = (sectionId) => {
    setMode("portfolio");
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 40);
  };

  return (
    <section className="v3-resume-shell" aria-labelledby="v3-resume-heading">
      <div className="v3-resume-frame">
        <object
          aria-label="Tarun Reddy Nerella resume PDF"
          className="v3-resume-pdf"
          data={profile.resumePdf}
          title="Tarun Reddy Nerella resume PDF"
          type="application/pdf"
        >
          {profile.resumePages.map((page, index) => (
            <img
              src={page}
              alt={`Tarun Reddy Nerella resume page ${index + 1}`}
              key={page}
            />
          ))}
        </object>
      </div>
      <aside className="v3-resume-side">
        <p className="v3-kicker">
          <span className="v3-sq" aria-hidden="true" />
          Resume Mode
        </p>
        <h1 id="v3-resume-heading">{profile.name}</h1>
        <p className="v3-intro">
          A direct PDF-first view for recruiters who want the artifact before
          the story.
        </p>
        <div className="v3-actions v3-resume-actions">
          <a className="v3-btn v3-btn-primary" href={profile.resumePdf}>
            Download PDF
          </a>
          <button
            className="v3-btn"
            onClick={() => setMode("portfolio")}
            type="button"
          >
            Portfolio Mode
          </button>
          <a
            className="v3-btn"
            href={profile.links.linkedin}
            {...externalLinkProps(profile.links.linkedin)}
          >
            LinkedIn
          </a>
          <a
            className="v3-btn"
            href={profile.links.github}
            {...externalLinkProps(profile.links.github)}
          >
            GitHub
          </a>
        </div>
        <div className="v3-resume-certs">
          <h2>Certification Proof</h2>
          <CertificationList certifications={certifications} compact />
        </div>
        <div className="v3-question-list" aria-label="Quick recruiter prompts">
          <button type="button" onClick={() => openPortfolioSection("work")}>
            Show strongest data engineering proof
          </button>
          <button type="button" onClick={() => openPortfolioSection("work")}>
            Show AI and agent projects
          </button>
          <button type="button" onClick={() => openPortfolioSection("skills")}>
            Show certifications
          </button>
          <button type="button" onClick={() => setMode("portfolio")}>
            Open full portfolio
          </button>
        </div>
      </aside>
    </section>
  );
}

function V3Portfolio({ theme, mode, setMode }) {
  const data = portfolioData;

  return (
    <div className={`v3-page v3-${theme}`}>
      <div className="v3-container">
        <TopNav profile={data.profile} />
        {mode === "resume" ? (
          <ResumeMode
            certifications={data.certifications}
            profile={data.profile}
            setMode={setMode}
          />
        ) : (
          <PortfolioMode />
        )}
      </div>
      {mode === "resume" ? null : <Contact profile={data.profile} />}
    </div>
  );
}

export default V3Portfolio;
