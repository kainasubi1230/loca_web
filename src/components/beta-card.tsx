import Image from "next/image";

type Trial = { label: string; href: string; qr: string };

// TestFlightのQRコード（PC）とボタン（スマホ・PC共通）
export function BetaCard({ product, trial }: { product: string; trial: Trial }) {
  return (
    <div className="flex items-center gap-6 rounded-2xl bg-[#f1f4f9] p-6">
      <Image
        src={trial.qr}
        alt={`${product} のTestFlight招待ページを開くQRコード`}
        width={480}
        height={480}
        className="hidden size-28 shrink-0 rounded-lg bg-white p-1.5 md:block"
      />
      <div>
        <p className="font-semibold">ベータ版を公開中</p>
        <p className="mt-1 text-sm leading-6 text-muted">
          <span className="hidden md:block lg:whitespace-nowrap">
            iPhoneのカメラでQRコードを読み取ると、
          </span>
          <span className="lg:whitespace-nowrap">TestFlightから{product}をインストールして試せます。</span>
        </p>
        <a
          href={trial.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-full bg-foreground px-4 py-2 text-sm text-background transition-opacity hover:opacity-80"
        >
          {trial.label} ↗
        </a>
      </div>
    </div>
  );
}
