import React from "react";
import "./V2Portfolio.css";
import portfolioData from "./portfolioData";

const externalLinkProps = (url) =>
  url?.startsWith("http") ? { rel: "noreferrer", target: "_blank" } : {};

function TagList({ items }) {
  return (
    <div className="v2-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProofLinks({ links, status, label = "Project proof" }) {
  if (!status && !links?.length) {
    return null;
  }

  return (
    <div className="v2-proof-links" aria-label={label}>
      {status ? <span>{status}</span> : null}
      {links?.map((link) => (
        <a href={link.url} key={link.url} {...externalLinkProps(link.url)}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function CertificationList({ certifications, compact = false }) {
  return (
    <ul className={`v2-cert-list${compact ? " v2-cert-list-compact" : ""}`}>
      {certifications.map((certification) => (
        <li key={certification.title}>
          <a
            href={certification.url}
            {...externalLinkProps(certification.url)}
          >
            <span>{certification.title}</span>
            <small>
              {certification.issuer} | {certification.date}
            </small>
          </a>
        </li>
      ))}
    </ul>
  );
}

function TopNav({ profile }) {
  return (
    <header className="v2-topbar">
      <a href="#top" className="v2-brand" aria-label="Tarun Reddy Nerella home">
        <span className="v2-brand-mark">TR</span>
        <span className="v2-brand-copy">
          <span>{profile.name}</span>
          <small>{profile.role}</small>
        </span>
      </a>
      <nav className="v2-nav" aria-label="V2 portfolio sections">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero({ profile }) {
  return (
    <section className="v2-hero" id="top">
      <div className="v2-hero-copy">
        <p className="v2-eyebrow">
          {profile.role} | Data Platforms | Applied ML | Agents
        </p>
        <h1>{profile.headline}</h1>
        <p className="v2-intro">{profile.summary}</p>
        <div className="v2-actions" aria-label="Primary portfolio actions">
          <a className="v2-button v2-button-primary" href={profile.resumePdf}>
            Download Resume
          </a>
          <a
            className="v2-button"
            href={profile.links.linkedin}
            {...externalLinkProps(profile.links.linkedin)}
          >
            LinkedIn
          </a>
          <a
            className="v2-button"
            href={profile.links.github}
            {...externalLinkProps(profile.links.github)}
          >
            GitHub
          </a>
          <a className="v2-button" href={profile.links.email}>
            Email
          </a>
        </div>
      </div>

      <aside className="v2-console" aria-label="Portfolio proof summary">
        <div className="v2-console-top">
          <span className="v2-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>portfolio/proof.json</span>
        </div>
        <div className="v2-console-body">
          <p>
            <span>focus</span>: <strong>reliable systems</strong>
          </p>
          <p>
            <span>range</span>: data platforms + AI products
          </p>
          <p>
            <span>proof</span>: 2B+ rows, 4 certifications
          </p>
          <p>
            <span>style</span>: observable, practical, human-reviewable
          </p>
        </div>
      </aside>
    </section>
  );
}

function ProofStrip({ proof }) {
  return (
    <section className="v2-proof-grid" aria-label="Proof metrics">
      {proof.map((item) => (
        <article className="v2-proof-card" key={item.value}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

function BuildAreas({ areas }) {
  return (
    <section className="v2-section" aria-labelledby="build-heading">
      <div className="v2-section-head">
        <p className="v2-eyebrow">What I Build</p>
        <h2 id="build-heading">
          Data foundations with enough AI context to be useful in production.
        </h2>
      </div>
      <div className="v2-build-grid">
        {areas.map((area) => (
          <article className="v2-panel" key={area.title}>
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
    <section className="v2-section" id="work" aria-labelledby="work-heading">
      <div className="v2-section-head">
        <p className="v2-eyebrow">Selected Work</p>
        <h2 id="work-heading">
          Proof-led case studies for AI data engineering roles.
        </h2>
      </div>
      <div className="v2-case-grid">
        {studies.map((study) => (
          <article className="v2-case-card" key={study.title}>
            <div>
              <span className="v2-case-id">{study.id}</span>
              <h3>{study.title}</h3>
              <p className="v2-meta">{study.meta}</p>
              <p>{study.problem}</p>
              <p>{study.outcome}</p>
              <ProofLinks
                label={`${study.title} proof links`}
                links={study.links}
                status={study.status}
              />
            </div>
            <TagList items={study.stack} />
          </article>
        ))}
      </div>
    </section>
  );
}

function AiLab({ lab }) {
  return (
    <section className="v2-section" aria-labelledby="lab-heading">
      <div className="v2-section-head">
        <p className="v2-eyebrow">Agent Lab</p>
        <h2 id="lab-heading">
          Smaller AI workflows that show operating taste and automation range.
        </h2>
      </div>
      <div className="v2-build-grid">
        {lab.map((item) => (
          <article className="v2-panel" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <ProofLinks
              label={`${item.title} proof links`}
              links={item.links}
              status={item.status}
            />
            <TagList items={item.stack} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience({ experience }) {
  return (
    <section
      className="v2-section v2-split"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div>
        <p className="v2-eyebrow">Experience</p>
        <h2 id="experience-heading">
          Production data work, then research and full-stack foundations.
        </h2>
      </div>
      <div className="v2-timeline">
        {experience.map((item) => (
          <article className="v2-timeline-item" key={`${item.title}-${item.org}`}>
            <span>{item.date}</span>
            <h3>
              {item.title} | {item.org}
            </h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ skills, certifications }) {
  return (
    <section className="v2-section" id="skills" aria-labelledby="skills-heading">
      <div className="v2-section-head">
        <p className="v2-eyebrow">Skills</p>
        <h2 id="skills-heading">
          Grouped for scan speed, not alphabet soup.
        </h2>
      </div>
      <div className="v2-skills-grid">
        {skills.map((group) => (
          <article className="v2-skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <TagList items={group.items} />
          </article>
        ))}
      </div>
      <div className="v2-cert-panel">
        <h3>Certifications</h3>
        <CertificationList certifications={certifications} />
      </div>
    </section>
  );
}

function EducationAndEarlierWork({ education, earlierWork, research }) {
  return (
    <section className="v2-section v2-split" aria-labelledby="education-heading">
      <div className="v2-panel">
        <p className="v2-eyebrow">Education</p>
        <h2 id="education-heading">Computer science foundation.</h2>
        {education.map((item) => (
          <article className="v2-mini-item" key={item.title}>
            <h3>{item.title}</h3>
            <p className="v2-meta">
              {item.org} | {item.date}
            </p>
            <p>{item.body}</p>
          </article>
        ))}
        <ul className="v2-research-list">
          {research.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="v2-panel">
        <p className="v2-eyebrow">Earlier Work</p>
        {earlierWork.map((item) => (
          <article key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <div className="v2-link-grid">
              {item.links.map((link) => (
                <a
                  href={link.url}
                  key={link.label}
                  {...externalLinkProps(link.url)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ profile }) {
  return (
    <section className="v2-contact" id="contact" aria-labelledby="contact-heading">
      <p className="v2-eyebrow">Contact</p>
      <h2 id="contact-heading">Want the fast version?</h2>
      <p>
        I am based in {profile.location}. The PDF has the full resume, and the
        portfolio view gives the project context behind it.
      </p>
      <div className="v2-actions">
        <a className="v2-button v2-button-primary" href={profile.resumePdf}>
          Open Resume
        </a>
        <a className="v2-button" href={profile.links.email}>
          {profile.email}
        </a>
        <a
          className="v2-button"
          href={profile.links.linkedin}
          {...externalLinkProps(profile.links.linkedin)}
        >
          LinkedIn
        </a>
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
      <Skills skills={data.skills} certifications={data.certifications} />
      <EducationAndEarlierWork
        education={data.education}
        earlierWork={data.earlierWork}
        research={data.research}
      />
      <Contact profile={data.profile} />
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
    <section className="v2-resume-shell" aria-labelledby="resume-heading">
      <div className="v2-resume-frame">
        <object
          aria-label="Tarun Reddy Nerella resume PDF"
          className="v2-resume-pdf"
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
      <aside className="v2-resume-side">
        <p className="v2-eyebrow">Resume Mode</p>
        <h1 id="resume-heading">Tarun Reddy Nerella</h1>
        <p>
          A direct PDF-first view for recruiters who want the artifact before
          the story.
        </p>
        <div className="v2-resume-actions">
          <a className="v2-button v2-button-primary" href={profile.resumePdf}>
            Download PDF
          </a>
          <button
            className="v2-button"
            onClick={() => setMode("portfolio")}
            type="button"
          >
            Portfolio Mode
          </button>
          <a
            className="v2-button"
            href={profile.links.linkedin}
            {...externalLinkProps(profile.links.linkedin)}
          >
            LinkedIn
          </a>
          <a
            className="v2-button"
            href={profile.links.github}
            {...externalLinkProps(profile.links.github)}
          >
            GitHub
          </a>
        </div>
        <div className="v2-resume-cert-links">
          <h2>Certification Proof</h2>
          <CertificationList certifications={certifications} compact />
        </div>
        <div className="v2-question-list" aria-label="Quick recruiter prompts">
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

function V2Portfolio({ theme, mode, setMode }) {
  const data = portfolioData;

  return (
    <div className={`v2-page v2-${theme}`}>
      <div className="v2-background" aria-hidden="true" />
      <div className="v2-container">
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
    </div>
  );
}

export default V2Portfolio;
