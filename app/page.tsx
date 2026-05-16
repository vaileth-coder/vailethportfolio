import Image from "next/image";

const NAME = "Sr. Vaileth James, OSB";

const EDUCATION = [
  {
    level: "Diploma",
    levelEn: "Diploma Level",
    title: "Diploma in Computer Science",
    institution: "Ruaha Catholic University, Tanzania",
    focus:
      "Diploma-level computing and IT foundations, covering core principles of information technology and computer systems.",
  },
  {
    level: "Bachelor's Degree",
    levelEn: "Undergraduate",
    title: "Bachelor of Engineering in Computer Science Engineering",
    institution: "St. Joseph University in Tanzania",
    focus:
      "Undergraduate engineering programme focused on computer science, software systems, and engineering practice.",
  },
] as const;

const COMPETENCIES = [
  {
    title: "ICT & Computing",
    description:
      "Foundational and applied knowledge in information and communication technologies.",
  },
  {
    title: "Hardware & Software Support",
    description:
      "Installation, configuration, troubleshooting, and user support across hardware and software environments.",
  },
  {
    title: "Computer Service & Maintenance",
    description:
      "Preventive and corrective maintenance of computer systems and peripheral equipment.",
  },
  {
    title: "Full Stack AI Engineering",
    description:
      "End-to-end development integrating artificial intelligence, web platforms, and production-ready systems.",
  },
  {
    title: "Computer Applications in Finance",
    description:
      "Use of computing tools and systems for financial data processing, reporting, and business operations.",
  },
] as const;

const PROJECTS = [
  {
    title: "KigonZile Dispensary",
    description:
      "Hospital and dispensary management system — authentication, service records, and clinic operations delivered through the web.",
    url: "https://kigonzile-dispensary.vercel.app/",
    tag: "Healthcare",
  },
  {
    title: "Ngorongoro TZ",
    description:
      "A modern Next.js website focused on the Ngorongoro region — built and deployed on Vercel.",
    url: "https://ngorongorotz.vercel.app/",
    tag: "Next.js",
  },
] as const;

const CONTACT = {
  phones: [
    { display: "0652 137 485", href: "tel:+255652137485" },
    { display: "0766 017 470", href: "tel:+255766017470" },
  ],
  email: "jamesvaileth79@gmail.com",
  location: "Iringa",
} as const;

function SectionCard({
  id,
  headingId,
  label,
  title,
  children,
}: {
  id?: string;
  headingId: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-blue-100/60 sm:p-8"
      aria-labelledby={headingId}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
        {label}
      </p>
      <h2
        id={headingId}
        className="mt-1 font-serif text-xl font-semibold text-[var(--text)] sm:text-2xl"
      >
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[var(--accent-bright)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-32 h-72 w-72 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />

      <main className="relative mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <nav className="mb-16 flex flex-wrap items-center justify-between gap-3">
          <span className="font-serif text-sm font-bold tracking-tight text-[var(--accent)]">
            VJ
          </span>
          <div className="flex flex-wrap justify-end gap-2">
            {[
              { href: "#education", label: "Education" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
              { href: "#projects", label: "Projects" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] shadow-sm transition hover:border-[var(--accent-bright)] hover:text-[var(--accent)] sm:px-4 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <header className="grid gap-8 border-b border-[var(--border)] pb-10 sm:grid-cols-[13rem_1fr] sm:items-start sm:gap-10">
          <div className="relative mx-auto aspect-[3/4] w-44 shrink-0 overflow-hidden rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-blue-200/50 sm:mx-0 sm:w-52">
            <Image
              src="/myimage.jpeg"
              alt={NAME}
              fill
              priority
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              Professional · Academic Portfolio
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--text)] sm:text-5xl">
              {NAME}
            </h1>
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
              Computer Science Engineer · Full Stack AI Engineering
            </p>
            <p className="max-w-2xl text-base leading-[1.8] text-[var(--muted)] sm:text-lg">
              A computer engineer with formal training in{" "}
              <em className="font-medium not-italic text-[var(--text)]">
                Computer Science Engineering
              </em>{" "}
              and a strong foundation in{" "}
              <em className="font-medium not-italic text-[var(--text)]">
                computing &amp; IT foundations
              </em>
              . Experienced in ICT systems, software engineering, and applying
              technology in healthcare and finance.
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-8">
          <SectionCard
            id="education"
            headingId="education-heading"
            label="Academic Qualifications"
            title="Education"
          >
            <ol className="relative space-y-0 border-l-2 border-[var(--border)] pl-6">
              {EDUCATION.map((item, index) => (
                <li
                  key={item.title}
                  className={`relative ${index < EDUCATION.length - 1 ? "pb-8" : ""}`}
                >
                  <span
                    className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--surface)] bg-[var(--accent-bright)]"
                    aria-hidden
                  />
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--accent-soft)]/40 p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                        {item.level}
                      </span>
                      <span className="text-xs text-[var(--muted)]">
                        {item.levelEn}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[var(--text)]">
                      {item.title}
                    </h3>
                    {item.institution && (
                      <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                        {item.institution}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {item.focus}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard
            id="skills"
            headingId="skills-heading"
            label="Professional Competencies"
            title="Skills & Expertise"
          >
            <ul className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)]">
              {COMPETENCIES.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-4 px-5 py-4 sm:gap-5 sm:px-6 sm:py-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] font-serif text-sm font-bold text-[var(--accent)]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[var(--text)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard
            id="contact"
            headingId="contact-heading"
            label="Contact Information"
            title="Contact"
          >
            <dl className="grid gap-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Phone
                </dt>
                <dd className="mt-2 space-y-1">
                  {CONTACT.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      {phone.display}
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  Location
                </dt>
                <dd className="mt-2 text-sm font-medium text-[var(--text)]">
                  {CONTACT.location}
                </dd>
              </div>
            </dl>
          </SectionCard>

          <section
            id="projects"
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-blue-100/60 sm:p-8"
            aria-labelledby="project-heading"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Research &amp; Practice
            </p>
            <h2
              id="project-heading"
              className="mt-1 font-serif text-xl font-semibold text-[var(--text)] sm:text-2xl"
            >
              Web Projects
            </h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Projects built and deployed on Vercel
            </p>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {PROJECTS.map((project) => (
                <li key={project.url}>
                  <article className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--accent-soft)]/30 p-5 transition hover:border-[var(--accent-bright)] hover:shadow-md">
                    <span className="w-fit rounded-md bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                      {project.tag}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      Visit website ↗
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted)]">
          <p className="font-serif">
            © {new Date().getFullYear()} {NAME}
          </p>
          <p className="mt-1">
            <a
              href="https://vailethcoder.vercel.app"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              vailethcoder.vercel.app
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
