const PROJECT_URL = "https://kigonzile-dispensary.vercel.app/";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-12 px-6 py-16 sm:py-24">
      <header className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Wasifu wa kitaalamu
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
          Vaileth James
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
          Mhandisi wa kompyuta na ujuzi wa{" "}
          <span className="text-[var(--text)]">AI engineering</span>. Nina
          shahada ya{" "}
          <span className="text-[var(--text)]">
            Computer Science Engineering
          </span>{" "}
          kutoka{" "}
          <span className="text-[var(--text)]">
            Chuo Kikuu cha Mtakatifu Joseph, Dar es Salaam
          </span>
          .
        </p>
      </header>

      <section
        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-xl backdrop-blur sm:p-8"
        aria-labelledby="skills-heading"
      >
        <h2
          id="skills-heading"
          className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]"
        >
          Ujuzi
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {[
            "AI engineering",
            "Uhandisi wa programu",
            "Mifumo ya taarifa",
            "Miradi ya wavuti",
          ].map((item) => (
            <li
              key={item}
              className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-1.5 text-sm text-[var(--text)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="project-heading">
        <h2
          id="project-heading"
          className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]"
        >
          Mradi uliotengenezwa
        </h2>
        <article className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-6 backdrop-blur sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--text)]">
            KigonZile Dispensary
          </h3>
          <p className="mt-2 text-[var(--muted)]">
            Mfumo wa usimamizi wa hospitali / dispensa — kuingia, kurekodi
            huduma, na kuendesha shughuli za kliniki kupitia wavuti.
          </p>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
          >
            Fungua mradi kwenye Vercel
            <span aria-hidden>↗</span>
          </a>
          <p className="mt-3 break-all text-xs text-[var(--muted)]">
            {PROJECT_URL}
          </p>
        </article>
      </section>

      <footer className="border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} Vaileth James</p>
      </footer>
    </main>
  );
}
