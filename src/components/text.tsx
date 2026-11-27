import { Fragment } from "react";

// 「\n」の位置でPCのみ改行する（スマホでは自然に折り返す）
export function Text({ value }: { value: string }) {
  const lines = value.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br className="hidden md:inline" />}
    </Fragment>
  ));
}

export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex h-fit items-center gap-3 text-sm font-medium tracking-[0.2em] text-muted uppercase md:text-base">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      {children}
    </p>
  );
}
