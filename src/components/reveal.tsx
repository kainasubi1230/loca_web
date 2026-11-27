"use client";

import { useEffect, useRef, useState } from "react";

type State = "idle" | "hidden" | "shown";

type Props = {
  children: React.ReactNode;
  as?: "div" | "li" | "h2";
  className?: string;
  /** ぼかし＋拡大しながら現れる（画像向け） */
  zoom?: boolean;
  /** 横並びの要素を少しずつずらす（0, 1, 2...） */
  delay?: number;
};

// 画面に入ったタイミングでふわっと表示する。
// サーバーで描画した時点では普通に表示（idle）され、JSが動いてから
// 画面外のものだけ一度隠して、スクロールで入ってきたら表示する。
export function Reveal({ children, as: Tag = "div", className = "", zoom, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // 最初から画面内にあるものは隠さない（チラつき防止）
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("shown");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal={state}
      className={`reveal ${zoom ? "reveal-zoom" : ""} ${className}`}
      style={{ "--reveal-delay": delay } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
