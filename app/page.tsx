const PROJECTS = [
  {
    title: "KigonZile Dispensary",
    description:
      "Mfumo wa usimamizi wa hospitali / dispensa — kuingia, kurekodi huduma, na kuendesha shughuli za kliniki kupitia wavuti.",
    url: "https://kigonzile-dispensary.vercel.app/",
    tag: "Healthcare",
  },
  {
    title: "Ngorongoro TZ",
    description:
      "Tovuti ya Next.js inayohusiana na eneo la Ngorongoro — mradi wa wavuti wa kisasa uliotengenezwa na kupelekwa Vercel.",
    url: "https://ngorongorotz.vercel.app/",
    tag: "Next.js",
  },
] as const;

const SKILLS = [
  "AI engineering",
  "Uhandisi wa programu",
  "Mifumo ya taarifa",
  "Miradi ya wavuti",
] as const;

const CONTACT = {
  phones: [
    { display: "0652 137 485", href: "tel:+255652137485" },
    { display: "0766 017 470", href: "tel:+255766017470" },
  ],
  email: "jamesvaileth79@gmail.com",
  location: "Iringa",
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[var(--accent-bright)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-32 h-72 w-72 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />

      <main className="relative mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <nav className="mb-16 flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight text-[var(--accent)]">
            VJ
          </span>
          <div className="flex gap-2">
            <a
              href="#mawasiliano"
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--muted)] shadow-sm transition hover:border-[var(--accent-bright)] hover:text-[var(--accent)]"
            >
              Mawasiliano
            </a>
            <a
              href="#miradi"
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-[var(--muted)] shadow-sm transition hover:border-[var(--accent-bright)] hover:text-[var(--accent)]"
            >
              Miradi
            </a>
          </div>
        </nav>

        <header className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)]" />
            Wasifu wa kitaalamu
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text)] sm:text-6xl">
            Vaileth{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)] bg-clip-text text-transparent">
              James
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Mhandisi wa kompyuta na ujuzi wa{" "}
            <strong className="font-semibold text-[var(--text)]">
              AI engineering
            </strong>
            . Nina shahada ya{" "}
            <strong className="font-semibold text-[var(--text)]">
              Computer Science Engineering
            </strong>{" "}
            kutoka{" "}
            <strong className="font-semibold text-[var(--text)]">
              Chuo Kikuu cha Mtakatifu Joseph, Dar es Salaam
            </strong>
            .
          </p>
        </header>

        <section
          className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-blue-100/60 sm:p-8"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]"
          >
            Ujuzi
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {SKILLS.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-3 text-sm font-medium text-[var(--accent)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="mawasiliano"
          className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-blue-100/60 sm:p-8"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]"
          >
            Mawasiliano
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Simu
              </p>
              <ul className="mt-1 flex flex-col gap-1">
                {CONTACT.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Barua pepe
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-1 block text-sm font-medium text-[var(--accent)] hover:underline"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                Mahali
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">
                {CONTACT.location}
              </p>
            </li>
          </ul>
        </section>

        <section id="miradi" className="mt-16" aria-labelledby="project-heading">
          <div className="mb-8">
            <h2
              id="project-heading"
              className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]"
            >
              Miradi yangu
            </h2>
            <p className="mt-1 text-2xl font-bold text-[var(--text)]">
              Tovuti zilizotengenezwa
            </p>
            <p className="mt-1 hidden text-sm text-[var(--muted)] sm:block">
              Zote zimepelekwa kwenye Vercel
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <li key={project.url}>
                <article className="group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-md shadow-blue-100/50 transition hover:-translate-y-1 hover:border-[var(--accent-bright)] hover:shadow-lg hover:shadow-blue-200/60">
                  <span className="w-fit rounded-full bg-[var(--accent-soft)] px-3 py-0.5 text-xs font-semibold text-[var(--accent)]">
                    {project.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-300/40 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)] focus-visible:ring-offset-2"
                  >
                    Fungua tovuti
                    <span
                      aria-hidden
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                  <p className="mt-2 truncate text-xs text-[var(--muted)]">
                    {project.url.replace(/^https:\/\//, "")}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-20 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} Vaileth James ·{" "}
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
