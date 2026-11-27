// サイトに表示するテキストはすべてここで管理しています。

// 文中の「\n」はPCで改行する位置です（スマホでは自動で折り返します）。

export const site = {
  name: "Aplicalm",
  tagline: "技術で、心地よい平穏を届ける。",
  // トップの見出しの行の分け方（1行ずつ下から現れるアニメーション）
  taglineLines: ["技術で、心地よい平穏を", "届ける。"],
  description:
    "Aplicalmは「技術で心地よい平穏（Calm）を届ける」をモットーに、\n日常にそっと寄り添うアプリケーションをつくるチームです。",
  email: "aplicalm12@gmail.com",
  url: "https://example.com", // TODO: 公開するドメイン
  social: [
    { label: "X", href: "https://x.com/Aplicalm_12" },
    { label: "YouTube", href: "https://www.youtube.com/@Aplicalm" },
  ],
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#works" },
  { label: "Members", href: "/#members" },
  { label: "Contact", href: "/#contact" },
];

export const about = {
  heading: "技術で心地よい平穏（Calm）を届ける。",
  body: [
    "これが、Aplicalmがものづくりで大切にしているモットーです。\nテクノロジーは本来、人の暮らしを豊かにし、\n心にゆとりをもたらすためのもの。\n私たちは、日々の暮らしの中でふと心地よさを感じられる、\nそんな体験をつくりたいと考えています。",
    "現在は自分たちのプロダクト開発に取り組みながら、\n今後は企業・個人の方からのご依頼にも応えられるチームを目指しています。\n将来的な法人化を見据え、一つひとつのものづくりに誠実に向き合っています。",
  ],
  values: [
    { title: "Simple", text: "本当に必要なものだけを、\nわかりやすく。" },
    { title: "Craft", text: "細部まで手を抜かず、\n品質にこだわる。" },
    { title: "Together", text: "使う人と同じ目線で、\n一緒につくる。" },
  ],
};

export const services = [
  {
    title: "プロダクト開発",
    en: "Product",
    text: "日常の小さな課題から着想し、\n自分たちのアプリやWebサービスを企画・開発・運営しています。",
  },
  {
    title: "UI / UXデザイン",
    en: "Design",
    text: "使う人の視点に立ち、\n迷わず使える画面設計とビジュアルデザインを大切にしています。",
  },
  {
    title: "受託開発",
    en: "Development",
    status: "準備中",
    text: "現在、受託開発の受付に向けて準備を進めています。\n今後、Webサイトやアプリの設計から実装、公開後の運用まで\nお手伝いできるようにしていく予定です。",
  },
];

export const works = [
  // プロダクトが増えたらここに追加してください（image は public/ 以下のパス）
  {
    title: "Loca",
    category: "オリジナルプロダクト",
    lead: "現実空間に言葉を残す、空間メディア。",
    tags: ["ARアプリ", "新感覚メディア", "世界を広げよう"],
    image: "/images/loca-cover.jpg",
    detail: "/works/loca",
    // 紹介ページ（/works/loca）を公開したら true に。false の間はリンクを隠し、本番ではページも404になります
    detailPublished: false,
    // TestFlight（ベータ版）の招待ページ。App Store公開後はストアURLに差し替え
    trial: {
      label: "TestFlightでベータ版を試す",
      href: "https://testflight.apple.com/join/P1YGx4jt",
      qr: "/images/loca-qr.jpg",
    },
  },
];

export const members = [
  {
    name: "しゃちょー",
    role: "代表 / Co-founder",
    image: "/images/members/shacho.jpg",
    areas: ["アイデア", "バックエンド", "UI/UXデザイン"],
    interests: "XR（仮想現実）や近未来的な技術",
    belief: "自分がどれだけそのプロダクトに熱くなれるか",
    link: { label: "X", href: "https://x.com/nasubi_1230" },
  },
  {
    name: "anji",
    role: "Co-founder",
    image: "/images/members/anji.jpg",
    areas: ["体験設計", "フロントエンド", "システム設計"],
    interests: "山登り、ジグソーパズル、猫",
    belief: "作るものが誰にどんな影響を与えるのか熟慮する",
    link: { label: "YouTube", href: "https://www.youtube.com/@haveananjitime2002" },
  },
];
