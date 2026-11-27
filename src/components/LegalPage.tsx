import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <article className="space-y-8 text-foreground">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Aura Interior · Información legal</p>
          <h1 className="font-display text-4xl text-foreground md:text-5xl">{title}</h1>
          <p className="text-sm text-muted-foreground">Última actualización: {updated}</p>
        </header>
        <div className="space-y-7 text-sm leading-7 text-muted-foreground [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:mb-1 [&_h3]:font-semibold [&_h3]:text-foreground [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-terracota [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
          {children}
        </div>
      </article>
    </main>
  );
}
