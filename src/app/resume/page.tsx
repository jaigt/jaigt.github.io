import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { portfolio } from "@/data/portfolio";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: `Resume — ${portfolio.name}`,
  description: resume.summary,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-32 md:pt-36">
        <div className="mb-12 border-b border-line pb-10">
          <h1 className="text-3xl font-medium tracking-tight text-text md:text-4xl">
            {portfolio.name}
          </h1>
          <p className="mt-2 text-muted">
            {portfolio.location} ·{" "}
            <a
              href={`mailto:${portfolio.email}`}
              className="underline-offset-4 transition hover:text-text hover:underline"
            >
              {portfolio.email}
            </a>
            {portfolio.socials.map((s) => (
              <span key={s.label}>
                {" · "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition hover:text-text hover:underline"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </p>
          <p className="mt-6 leading-relaxed text-text/85">{resume.summary}</p>
        </div>

        <section className="mb-12">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-10">
            {resume.experience.map((entry) => (
              <div key={entry.org}>
                <h3 className="text-lg font-medium text-text">{entry.org}</h3>
                <div className="mt-3 space-y-6 border-l border-line pl-5">
                  {entry.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-medium text-text/90">{role.title}</p>
                        <p className="font-mono text-xs text-muted">
                          {role.period}
                        </p>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-sm leading-relaxed text-muted"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-6">
            {resume.education.map((edu) => (
              <div key={edu.school}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium text-text">{edu.school}</h3>
                  <p className="font-mono text-xs text-muted">{edu.period}</p>
                </div>
                <p className="text-sm text-text/80">{edu.degree}</p>
                {edu.details.length > 0 && (
                  <ul className="mt-1.5 space-y-1">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-sm leading-relaxed text-muted">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle>Certificates</SectionTitle>
          <ul className="space-y-1">
            {resume.certificates.map((cert) => (
              <li key={cert} className="text-sm text-muted">
                {cert}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-4">
            {resume.skills.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-xs uppercase tracking-wider text-muted">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-2.5 py-0.5 text-xs text-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
