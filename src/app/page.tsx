import Image from "next/image";
import Link from "next/link";
import { BetaCard } from "@/components/beta-card";
import { SectionLabel, Text } from "@/components/text";
import { about, members, services, site, works } from "@/content/site";

function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-[3fr_2fr] md:pt-20 md:pb-24"
    >
      <div>
        <p className="hero-fade text-base font-medium tracking-[0.2em] text-accent uppercase [--delay:0ms]">
          Calm Technology
        </p>
        <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl md:leading-[1.15]">
          {site.taglineLines.map((line, i) => (
            <span key={line} className="hero-line">
              <span style={{ "--delay": `${200 + i * 140}ms` } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-8 max-w-2xl leading-8 text-muted [--delay:700ms]">
          <Text value={site.description} />
        </p>
      </div>
      <div className="relative mx-auto hidden aspect-square w-full max-w-xs md:block">
        {/* ロゴの背後でゆっくり回る光 */}
        <div aria-hidden className="hero-orbit absolute -inset-10">
          <span className="absolute top-2 left-4 size-40 rounded-full bg-[#f7931e]/30 blur-3xl" />
          <span className="absolute right-2 bottom-4 size-44 rounded-full bg-[#1f6fd1]/30 blur-3xl" />
        </div>
        <div className="hero-logo relative flex h-full items-center">
          <Image
            src="/images/logo.png"
            alt={`${site.name} ロゴ`}
            width={368}
            height={343}
            priority
            className="hero-float w-full"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
        <div className="flex flex-col gap-10">
          <SectionLabel index="01">About</SectionLabel>
          <Image
            src="/images/about.png"
            alt="宇宙をただよう、穏やかな表情の人物のイラスト"
            width={631}
            height={1061}
            className="mx-auto w-2/3 max-w-56 md:mx-0 md:mt-12 md:w-full md:max-w-64"
          />
        </div>
        <div className="md:pt-14">
          <h2 className="text-2xl leading-snug font-bold tracking-tight md:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-8 space-y-5 leading-8 text-muted">
            {about.body.map((p, i) => (
              <p key={i}>
                <Text value={p} />
              </p>
            ))}
          </div>
          <dl className="mt-14 grid gap-8 sm:grid-cols-3">
            {about.values.map((v) => (
              <div key={v.title} className="border-t border-foreground pt-4">
                <dt className="text-lg font-semibold">{v.title}</dt>
                <dd className="mt-2 leading-7 text-muted">
                  <Text value={v.text} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:py-32">
        <div className="flex flex-col gap-10">
          <SectionLabel index="02">Services</SectionLabel>
          <Image
            src="/images/services.png"
            alt="ノートパソコンを手に、宇宙で向かい合って話す二人のイラスト"
            width={730}
            height={1064}
            className="mx-auto w-2/3 max-w-56 md:mx-0 md:mt-12 md:w-full md:max-w-64"
          />
        </div>
        <ul className="h-fit divide-y divide-line self-center border-y border-line">
          {services.map((s) => (
            <li
              key={s.title}
              className={`grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-8 ${"status" in s ? "opacity-60" : ""}`}
            >
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">{s.en}</p>
                <h3 className="mt-1 flex flex-wrap items-center gap-2 text-xl font-semibold">
                  {s.title}
                  {"status" in s && (
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-white">
                      {s.status}
                    </span>
                  )}
                </h3>
              </div>
              <p className="leading-8 text-muted">
                <Text value={s.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="03">Works</SectionLabel>
        <ul className="mt-12 space-y-28 md:space-y-40">
          {works.map((w) => (
            <li key={w.title} className="grid items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
              {(() => {
                const image = (
                  <Image
                    src={w.image}
                    alt={`${w.title} の紹介画像`}
                    width={1600}
                    height={900}
                    className="w-full rounded-2xl border border-line"
                  />
                );
                return w.detailPublished ? (
                  <Link href={w.detail} className="block transition-opacity hover:opacity-85">
                    {image}
                  </Link>
                ) : (
                  image
                );
              })()}
              <div>
                <p className="text-sm font-medium text-accent">{w.category}</p>
                <h3 className="mt-2 text-4xl font-bold tracking-tight">{w.title}</h3>
                <p className="mt-4 text-lg font-medium">{w.lead}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                {w.detailPublished && (
                  <Link
                    href={w.detail}
                    className="mt-6 inline-block border-b border-foreground pb-0.5 font-medium transition-opacity hover:opacity-60"
                  >
                    {w.title}について詳しく見る →
                  </Link>
                )}
                {w.trial && (
                  <div className="mt-8">
                    <BetaCard product={w.title} trial={w.trial} />
                  </div>
                )}
              </div>
            </li>
          ))}

          {/* 次のプロダクト用の枠 */}
          <li className="grid items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
            <div className="flex aspect-video w-full items-center justify-center rounded-2xl border-2 border-dashed border-line bg-[#f9fafb]">
              <p className="text-2xl font-semibold tracking-[0.3em] text-muted/60 uppercase md:text-3xl">
                Coming soon
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-accent">Next Product</p>
              <h3 className="mt-2 text-4xl font-bold tracking-tight text-muted/70">開発中・・・</h3>
              <p className="mt-4 leading-8 text-muted">
                次のプロダクトを準備しています。
                <br />
                公開まで、もう少しお待ちください。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionLabel index="04">Members</SectionLabel>
        <ul className="mt-12 grid grid-cols-2 gap-6 md:gap-12">
          {members.map((m) => (
            <li key={m.name} className="flex flex-col items-center text-center">
              <Image
                src={m.image}
                alt={`${m.name} のプロフィール写真`}
                width={720}
                height={720}
                className="size-28 rounded-2xl border border-line object-cover sm:size-40 md:size-48"
              />
              <p className="mt-6 text-sm font-medium text-accent md:text-base">{m.role}</p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">{m.name}</h3>
              <a
                href={m.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:border-foreground"
              >
                {m.link.label} ↗
              </a>
              <dl className="mt-8 w-full space-y-6 border-t border-line pt-6">
                <div>
                  <dt className="text-sm text-muted">チームでの担当</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-wrap justify-center gap-2">
                      {m.areas.map((a) => (
                        <li key={a} className="rounded-full bg-[#f1f4f9] px-3 py-1 text-sm">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">ものづくりで大事にしていること</dt>
                  <dd className="mt-1 leading-8 font-semibold md:text-lg">「{m.belief}」</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">好きなこと・興味</dt>
                  <dd className="mt-1 leading-8 md:text-lg">{m.interests}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="text-sm font-medium tracking-[0.2em] uppercase opacity-60 md:text-base">
          05 — Contact
        </p>
        <h2 className="mt-6 text-3xl leading-snug font-bold tracking-tight md:text-5xl">
          お気軽にお問い合わせください。
        </h2>
        <p className="mt-6 max-w-2xl leading-8 opacity-70">
          プロダクトへのご感想、協業のご提案、取材のご依頼などがございましたら、
          <br className="hidden md:inline" />
          下記のメールアドレス、またはSNSよりご連絡ください。
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block border-b border-background/40 pb-1 text-xl transition-colors hover:border-background md:text-2xl"
        >
          {site.email}
        </a>
        <ul className="mt-8 flex gap-3">
          {site.social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-background/30 px-4 py-1.5 text-sm transition-colors hover:border-background"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Members />
      <Contact />
    </>
  );
}
