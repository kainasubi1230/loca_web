import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BetaCard } from "@/components/beta-card";
import { SectionLabel, Text } from "@/components/text";
import { loca } from "@/content/loca";
import { works } from "@/content/site";

const work = works.find((w) => w.title === "Loca")!;

export const metadata: Metadata = {
  title: `${loca.name} — ${loca.catch}`,
  description: loca.description.replace("\n", ""),
};

export default function LocaPage() {
  // 準備中：本番では非公開（開発サーバーでは確認用に表示）
  if (!work.detailPublished && process.env.NODE_ENV === "production") notFound();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-24 md:pt-16 md:pb-32">
        <Link href="/#works" className="text-sm text-muted transition-colors hover:text-foreground">
          ← Works に戻る
        </Link>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-[2fr_3fr]">
          <div>
            <p className="text-base font-medium text-accent">{loca.catch}</p>
            <h1 className="mt-3 text-6xl font-bold tracking-tight md:text-7xl">{loca.name}</h1>
            <p className="mt-8 text-2xl leading-snug font-bold tracking-tight md:text-3xl">
              <Text value={loca.lead} />
            </p>
            <p className="mt-6 leading-8 text-muted">
              <Text value={loca.description} />
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/loca-cover.jpg"
            alt="Locaの紹介画像"
            width={1600}
            height={900}
            priority
            className="w-full rounded-2xl border border-line"
          />
        </div>
        {work.trial && (
          <div className="mt-12 md:max-w-xl">
            <BetaCard product={loca.name} trial={work.trial} />
          </div>
        )}
      </section>

      {/* Story */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
          <SectionLabel index="01">Story</SectionLabel>
          <div>
            <h2 className="text-2xl leading-snug font-bold tracking-tight md:text-4xl">
              <Text value={loca.story.heading} />
            </h2>
            <div className="mt-8 space-y-5 leading-8 text-muted">
              {loca.story.body.map((p, i) => (
                <p key={i}>
                  <Text value={p} />
                </p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-accent pl-6 text-lg leading-9 font-semibold md:text-xl">
              <Text value={loca.story.quote} />
            </blockquote>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
          <SectionLabel index="02">How it works</SectionLabel>
          <div>
            <Image
              src="/images/loca-intro.jpg"
              alt="空間に置かれた言葉のカードがスマホの画面に映っている様子"
              width={1600}
              height={900}
              className="w-full rounded-2xl border border-line"
            />
            <ol className="mt-12 space-y-10">
              {loca.steps.map((s, i) => (
                <li key={s.title} className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                  <span className="text-3xl font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 leading-8 text-muted">
                      <Text value={s.text} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <SectionLabel index="03">Features</SectionLabel>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loca.features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-line p-6">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 leading-7 text-muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Points */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
          <SectionLabel index="04">Points</SectionLabel>
          <ul className="space-y-12">
            {loca.points.map((p) => (
              <li key={p.title}>
                <h3 className="text-xl leading-snug font-bold md:text-2xl">{p.title}</h3>
                <p className="mt-3 leading-8 text-muted">
                  <Text value={p.text} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
          <SectionLabel index="05">Tech</SectionLabel>
          <div>
            <ul className="flex flex-wrap gap-2">
              {loca.tech.stack.map((t) => (
                <li key={t} className="rounded-full bg-[#f1f4f9] px-4 py-1.5 font-medium">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-8 text-muted">
              <Text value={loca.tech.text} />
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-line bg-[#f1f4f9]">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="text-2xl leading-snug font-bold tracking-tight md:text-3xl">
            <Text value={loca.closing} />
          </p>
          {work.trial && (
            <a
              href={work.trial.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-opacity hover:opacity-80"
            >
              {work.trial.label} ↗
            </a>
          )}
          <Link href="/#works" className="mt-6 text-sm text-muted transition-colors hover:text-foreground">
            ← Works に戻る
          </Link>
        </div>
      </section>
    </>
  );
}
