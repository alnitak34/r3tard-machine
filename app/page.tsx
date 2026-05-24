"use client";
import { useState, useEffect } from "react";

const IMAGES = [
  "/assets/r3tards/00dfabc238179967b252f10f3591c936.avif",
  "/assets/r3tards/11138a51b8fcacfd0b9c180a7a059040.avif",
  "/assets/r3tards/157d76b1c35d30e936544a4518c4b2b3.avif",
  "/assets/r3tards/1c843adffd3b1c3e07f872d9b47009a2.avif",
  "/assets/r3tards/1d4be2f1bc66675a452e8d940cf8ebc6.avif",
  "/assets/r3tards/229d2948a9a01c239a65ff5c7349d130.avif",
  "/assets/r3tards/2dc8d46d2f98322b176ddc91db3937f6.avif",
  "/assets/r3tards/3ead866e3bdb024e24a28ab1c684c3dd.avif",
  "/assets/r3tards/3f022950fcb3a78c80b86fc8b236e4a2.avif",
  "/assets/r3tards/46b444097d60af82c416860612597775.avif",
  "/assets/r3tards/47f250ca9718eecef4c73726804a447f.avif",
  "/assets/r3tards/5467a321d84468973caaa78ca09769d5.avif",
  "/assets/r3tards/5b95faa5a01b1bc3c2471cff94e2e757.avif",
  "/assets/r3tards/5f5fa9e8986213035b9fe4cda45d27c1.avif",
  "/assets/r3tards/75652042f86de632a1033e79a0edeaf8.avif",
  "/assets/r3tards/75e1821c4a9adc20790b5ad2da4e8395.avif",
  "/assets/r3tards/784ca276231c80396ce84e02242ed223.avif",
  "/assets/r3tards/78ed32f5877068abf5fe608843270578.avif",
  "/assets/r3tards/8097e74914de52701a76cd40dbb48cb8.avif",
  "/assets/r3tards/8803b52502d55122f29411299f7f1953.avif",
  "/assets/r3tards/8cd91ea2ea057e9cb1bec13396268135.avif",
  "/assets/r3tards/a0bae1d85b57f71f0e49d690309bf1c3.avif",
  "/assets/r3tards/af3f7212232e7da6f85df08d5d0d11c1.avif",
  "/assets/r3tards/b6a1585b0863588c35c8cc7a1cd72ddd.avif",
  "/assets/r3tards/c2ebe8fa272a5eb9d55925e70163817a.avif",
  "/assets/r3tards/c4c674125b67ab1554b7b2b9f199d906.avif",
  "/assets/r3tards/d4f82d0bc44ca8fad80d77784ed4473d.avif",
  "/assets/r3tards/d511f40af60a80f5cdf2b53370d41c51.avif",
  "/assets/r3tards/ee60b00ddcd31796709333b662a62f30.avif",
  "/assets/r3tards/f49093a916c1bb5a28972daaa113c9ae.avif",
  "/assets/r3tards/fb812a06d8da1ba2b11c631b7dc9f51b.avif",
  "/assets/r3tards/fe29dbf0d966d7696fa2089e402e71ab.avif",
  "/assets/r3tards/HG7KkLnbUAARG-t.jpeg",
  "/assets/r3tards/HGzHTiEbsAALQlz.jpeg",
  "/assets/r3tards/HHUgfruWcAAFJPh.jpeg",
  "/assets/r3tards/photo_5810002162422058690_y.jpg",
  "/assets/r3tards/photo_5810002162422058691_y.jpg",
  "/assets/r3tards/photo_5810002162422058695_x.jpg",
  "/assets/r3tards/photo_5810002162422058696_y.jpg",
  "/assets/r3tards/photo_5810002162422058697_y.jpg",
  "/assets/r3tards/photo_5810002162422058698_y.jpg",
  "/assets/r3tards/photo_5810002162422058699_y.jpg",
  "/assets/r3tards/photo_5810002162422058700_y.jpg",
  "/assets/r3tards/photo_5810002162422058701_y.jpg",
  "/assets/r3tards/photo_5810002162422058702_y.jpg",
  "/assets/r3tards/photo_5810002162422058703_y.jpg",
  "/assets/r3tards/r3tards-meme-1779641438892.png",
];

const MESSAGES = [
  "THE TOKEN IS VIBES. THE VIBES ARE CURRENCY.",
  "YOUR PORTFOLIO IS A FEELING, NOT A NUMBER.",
  "WE'RE NOT EARLY. WE'RE WRONG. SAME THING.",
  "BUY HIGH. SELL LOWER. THIS IS THE WAY.",
  "I CONSULTED MY R3TARD. HE SAID YES.",
  "FLOOR IS A MENTAL CONSTRUCT. SO IS YOUR JOB.",
  "DREIKI KNOWS. DREIKI WON'T TELL.",
  "MONAD IS THE BLOCKCHAIN BTW.",
  "STAY HUMBLE. STACK r3tards. DIE POOR.",
  "GM TO EVERYONE EXCEPT YOU.",
  "WE'RE SO BACK. WE NEVER LEFT. WE WERE NEVER HERE.",
  "TRUST THE PROCESS. THE PROCESS IS BRAIN DAMAGE.",
  "BEEPLE KNEW. NOW YOU KNOW. SOON THEY'LL KNOW.",
  "EVERY DAY UNTIL FLOOR IS 100. EVERY DAY UNTIL FLOOR IS 0.",
  "THE FLOOR CONTINUES TO IGNORE REALITY.",
  "NO FUNDAMENTALS DETECTED.",
  "COMMUNITY SANITY: 2%.",
  "YOU JUST SACRIFICED GENERATIONAL WEALTH.",
  "UTILITY REFUSED TO LOAD.",
  "THE SIGNAL IS STUPID.",
  "UNFORTUNATELY BULLISH.",
  "DREIKI SAID NOTHING. MARKET HEARD EVERYTHING.",
  "THIS COLLECTION CAME FROM NOWHERE AND REFUSES TO LEAVE.",
  "TOTAL BRAIN DAMAGE: UNMEASURABLE.",
  "PLEASE DO NOT THINK.",
  "THE CULTURE HAS ACCEPTED YOUR LOSSES.",
  "ROADMAP DELETED FOR YOUR SAFETY.",
  "MARKET CAP POWERED BY CONFUSION.",
  "YOUR WALLET IS NOT THE PROBLEM. YOUR BRAIN IS.",
  "LIQUIDITY EVAPORATED. VIBES REMAIN.",
  "CONVICTION: DANGEROUSLY HIGH.",
  "YOU CANNOT EXPLAIN THIS TO YOUR PARENTS.",
  "NOBODY ASKED FOR THIS. EVERYONE NEEDS IT.",
  "THE CHART IS WRONG. THE CHART IS ALWAYS WRONG.",
  "MONAD HAS REVIEWED YOUR DECISIONS.",
  "THIS SHOULD NOT BE THIS EXPENSIVE.",
  "THE FLOOR IS A LIE BUT SO IS EVERYTHING ELSE.",
  "NORMIES WILL NOT UNDERSTAND. GOOD.",
  "SAME ENERGY AS 2021. DIFFERENT CHAIN. SAME PAIN.",
  "YOUR LOSS IS THE COMMUNITY'S ENTERTAINMENT.",
  "#shame WATCHES.",
  "#graveyard NEVER FORGETS.",
  "PAPER HANDS GET CAUGHT IN 4K.",
  "BURN IT. JOIN THE GRAVEYARD.",
  "GOODBYE WAVE. SAID THE BOT.",
  "r3tard #296 IS WATCHING FROM HEAVEN.",
  "DON'T END UP IN #shame.",
  "THE GRAVEYARD HAS MORE CULTURE THAN YOU.",
  "BURNERS ARE HEROES. SELLERS ARE GHOSTS.",
  "YOUR WALLET 0x4262 IS NEXT.",
  "PAPER HANDED. GOODBYE.",
  "BURN IT FOREVER. IT'S GONE.",
  "TOTAL BURNED: 2 r3tards. WILL YOU BE 3?",
  "DREIKI SEES THE GRAVEYARD.",
];

const METRICS_POOL = [
  {
    label: "FLOOR PRICE",
    getValue: () => {
      const floors = [
        { v: "999,999", c: "COPE" }, { v: "0.00069", c: "MON" },
        { v: "∞",       c: "VIBES"}, { v: "-420",    c: "HOPIUM"},
        { v: "NaN",     c: "$EGG" }, { v: "ERROR",   c: ""      },
        { v: "ask dreiki", c: ""  }, { v: "404",     c: "NOT FOUND"},
      ];
      const f = floors[Math.floor(Math.random() * floors.length)];
      return f.c ? `${f.v} ${f.c}` : f.v;
    },
    color: "#a855f7",
  },
  { label: "COMMUNITY IQ",      getValue: () => (Math.floor(Math.random() * 56) - 50).toString(),      color: "#ec4899" },
  { label: "BRAIN DAMAGE",      getValue: () => Math.floor(Math.random() * 20 + 80) + "%",             color: "#000000" },
  { label: "HOLDERS",           getValue: () => Math.floor(Math.random() * 200 + 400).toString(),      color: "#a855f7" },
  { label: "VIBES",             getValue: () => Math.floor(Math.random() * 9800 + 200) + "%",          color: "#ec4899" },
  { label: "PAPER HANDS TODAY", getValue: () => Math.floor(Math.random() * 13).toString(),             color: "#ef4444" },
  { label: "BURNED FOREVER",    getValue: () => Math.floor(Math.random() * 50 + 1).toString(),         color: "#000000" },
  {
    label: "WALLET SHAMED",
    getValue: () => {
      const h = () => Math.floor(Math.random() * 16777215).toString(16).padStart(4, "0");
      return `0x${h()}...${h()}`;
    },
    color: "#ef4444",
  },
  { label: "DAYS SINCE RUG",    getValue: () => Math.floor(Math.random() * 999).toString(),            color: "#a855f7" },
  { label: "GRAVEYARD COUNT",   getValue: () => Math.floor(Math.random() * 45 + 2).toString(),         color: "#000000" },
];

const CAPTION_PREFIXES = ["UNIT", "SPECIMEN", "ARTIFACT", "EVIDENCE"];
const CAPTION_SUFFIXES = ["[CURSED]", "[CLASSIFIED]", "[LEAKED]", "[REDACTED]"];

const BUTTON_TEXTS = [
  "PRESS BUTTON",
  "DO IT R3TARD",
  "CLICK TO COPE",
  "RECEIVE NONSENSE",
  "FEED THE MACHINE",
  "PRESS R3TARD",
  "ANOTHER ONE",
  "MORE BRAIN DAMAGE",
  "GIB SIGNAL",
  "TAP R3TARD",
  "PRESS TO REGRET",
  "ONE MORE TIME",
];

const BG = "var(--font-bagel), cursive";
const BW = "var(--font-bowlby), cursive";
const SM = "var(--font-space-mono), monospace";
const CN = "var(--font-comic), cursive";

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickDiff<T>(arr: T[], prev: T): T {
  if (arr.length <= 1) return arr[0];
  let next: T;
  do { next = arr[randInt(0, arr.length - 1)]; } while (next === prev);
  return next;
}

type Metric = { label: string; value: string; color: string };

function pickFiveMetrics(): Metric[] {
  return [...METRICS_POOL]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map(m => ({ label: m.label, value: String(m.getValue()), color: m.color }));
}

const NEUTRAL_ROTS = {
  title: "rotate(0deg)",
  img:   "rotate(0deg)",
  msg:   "rotate(0deg)",
  btn:   "rotate(0deg)",
  cards: ["rotate(0deg)", "rotate(0deg)", "rotate(0deg)", "rotate(0deg)", "rotate(0deg)"],
};

function freshRots() {
  return {
    title: `rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`,
    img:   `rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`,
    msg:   `rotate(${(Math.random() * 3 - 1.5).toFixed(1)}deg)`,
    btn:   `rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`,
    cards: Array.from({ length: 5 }, () => `rotate(${(Math.random() * 6 - 3).toFixed(1)}deg)`),
  };
}

const NEUTRAL_METRICS: Metric[] = METRICS_POOL.slice(0, 5).map(m => ({
  label: m.label,
  value: "—",
  color: m.color,
}));

type Sticker = {
  text: string; bg: string; color: string; rot: string;
  top: string; left?: string; right?: string; fontSize: string;
  strike?: boolean; mono?: boolean; opacity?: number;
};

const STICKERS: Sticker[] = [
  { text: "GM",           bg: "#fef3c7", color: "#000",    rot: "-12deg", top: "14%", left: "1.5%",  fontSize: "18px" },
  { text: "NGMI",         bg: "#000",    color: "#fafafa", rot:  "-5deg", top: "52%", left: "0.5%",  fontSize: "14px" },
  { text: "***",          bg: "none",    color: "#a855f7", rot:   "5deg", top: "72%", left: "1%",    fontSize: "56px" },
  { text: "WAGMI",        bg: "#fee2e2", color: "#dc2626", rot:   "8deg", top: "25%", right: "1%",   fontSize: "16px", strike: true },
  { text: "COPE",         bg: "#fbcfe8", color: "#000",    rot:  "15deg", top: "60%", right: "0.5%", fontSize: "14px" },
  { text: "SEETHE",       bg: "#22d3ee", color: "#000",    rot:  "-8deg", top: "16%", right: "2%",   fontSize: "12px" },
  { text: "???",          bg: "none",    color: "#000",    rot:  "-3deg", top: "40%", right: "1%",   fontSize: "44px" },
  { text: "!!!",          bg: "none",    color: "#ec4899", rot:   "7deg", top: "78%", right: "1%",   fontSize: "52px" },
  { text: "PAPER HAND",   bg: "#fee2e2", color: "#dc2626", rot:  "10deg", top: "35%", left: "0.5%",  fontSize: "13px", strike: true },
  { text: "CAUGHT IN 4K", bg: "#fef08a", color: "#dc2626", rot: "-14deg", top: "63%", left: "0.8%",  fontSize: "11px" },
  { text: "0x4262...ea82",bg: "none",    color: "#000",    rot:   "3deg", top: "43%", left: "0.3%",  fontSize: "11px", mono: true },
  { text: "RIP r3tard",   bg: "#d1d5db", color: "#000",    rot:  "-9deg", top: "33%", right: "2%",   fontSize: "14px" },
  { text: "BURN IT",      bg: "none",    color: "#ef4444", rot:  "12deg", top: "52%", right: "1%",   fontSize: "32px" },
  { text: "GRAVEYARD",    bg: "#d1d5db", color: "#000",    rot:  "-6deg", top: "70%", right: "2%",   fontSize: "13px" },
  { text: "✝",            bg: "none",    color: "#000",    rot:   "0deg", top: "85%", left: "1.5%",  fontSize: "60px", opacity: 0.6 },
  { text: "GOODBYE",      bg: "none",    color: "#dc2626", rot: "-11deg", top: "88%", right: "1.5%", fontSize: "24px" },
];

function R3tardMarquee() {
  const items = [
    { type: "img", src: "/assets/r3tards/brain.png", alt: "brain" },
    { type: "text", value: "R3TARD MACHINE" },
    { type: "img", src: "/assets/r3tards/skull.png", alt: "skull" },
    { type: "text", value: "ON MONAD" },
    { type: "img", src: "/assets/r3tards/slot.png", alt: "slot" },
    { type: "text", value: "PRESS BUTTON" },
    { type: "img", src: "/assets/r3tards/fire.png", alt: "fire" },
    { type: "text", value: "RECEIVE NONSENSE" },
    { type: "text", value: "NO WALLET" },
    { type: "text", value: "NO MINT" },
    { type: "text", value: "NO UTILITY" },
    { type: "text", value: "COPE" },
    { type: "text", value: "SEETHE" },
  ];

  const renderItems = () =>
    items.map((item, index) =>
      item.type === "img" ? (
        <img
          key={`img-${index}`}
          src={item.src}
          alt={item.alt}
          style={{
            height: "28px",
            width: "auto",
            display: "inline-block",
            flex: "0 0 auto",
            objectFit: "contain",
            verticalAlign: "middle",
          }}
        />
      ) : (
        <span
          key={`text-${index}`}
          style={{ display: "inline-block", flex: "0 0 auto", whiteSpace: "nowrap" }}
        >
          {item.value}
        </span>
      )
    );

  return (
    <>
      <div style={{
        width: "100%",
        overflow: "hidden",
        background: "#22d3ee",
        borderTop: "3px solid #000",
        borderBottom: "3px solid #000",
        padding: "12px 0",
        flexShrink: 0,
      }}>
        <div
          className="r3tard-marquee-track"
          style={{
            display: "flex",
            width: "max-content",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: "22px",
            fontFamily: BW,
            fontSize: "24px",
            lineHeight: "28px",
            color: "#000",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px", flex: "0 0 auto", paddingRight: "22px" }}>
            {renderItems()}
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "22px", flex: "0 0 auto", paddingRight: "22px" }}>
            {renderItems()}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .r3tard-marquee-track {
          animation: r3tard-marquee-scroll 24s linear infinite;
          will-change: transform;
        }
        @keyframes r3tard-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}

export default function Home() {
  const [imgIdx,         setImgIdx]         = useState(0);
  const [message,        setMessage]        = useState(MESSAGES[0]);
  const [visibleMetrics, setVisibleMetrics] = useState<Metric[]>(NEUTRAL_METRICS);
  const [rots,           setRots]           = useState(NEUTRAL_ROTS);
  const [clicks,         setClicks]         = useState(0);
  const [capPrefix,      setCapPrefix]      = useState(CAPTION_PREFIXES[0]);
  const [capSuffix,      setCapSuffix]      = useState(CAPTION_SUFFIXES[0]);
  const [unitNum,        setUnitNum]        = useState(1);
  const [buttonText,     setButtonText]     = useState(BUTTON_TEXTS[0]);

  // Randomize after hydration — server and client both start deterministic
  useEffect(() => {
    setImgIdx(randInt(0, IMAGES.length - 1));
    setMessage(MESSAGES[randInt(0, MESSAGES.length - 1)]);
    setVisibleMetrics(pickFiveMetrics());
    setRots(freshRots());
    setCapPrefix(CAPTION_PREFIXES[randInt(0, 3)]);
    setCapSuffix(CAPTION_SUFFIXES[randInt(0, 3)]);
    setUnitNum(randInt(1, 9999));
  }, []);

  function handleClick() {
    setImgIdx(prev => {
      let next = randInt(0, IMAGES.length - 1);
      if (next === prev && IMAGES.length > 1) next = (next + 1) % IMAGES.length;
      return next;
    });
    setMessage(prev => pickDiff(MESSAGES, prev));
    setVisibleMetrics(pickFiveMetrics());
    setRots(freshRots());
    setClicks(c => c + 1);
    setCapPrefix(CAPTION_PREFIXES[randInt(0, 3)]);
    setCapSuffix(CAPTION_SUFFIXES[randInt(0, 3)]);
    setUnitNum(randInt(1, 9999));
    setButtonText(BUTTON_TEXTS[Math.floor(Math.random() * BUTTON_TEXTS.length)]);
  }

  const shareOnX = () => {
    const text = encodeURIComponent(`${message}\n\nthe r3tard machine spoke to me.\n\n`);
    const url  = encodeURIComponent("https://r3tard-machine.vercel.app");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #c084fc 0%, #f0abfc 50%, #d8b4fe 100%)",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <R3tardMarquee />

      {/* ── WALL OF SHAME TICKER ────────────────────────── */}
      <div style={{
        background: "#000",
        color: "#ef4444",
        borderBottom: "2px solid #ec4899",
        padding: "6px 0",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 45s linear infinite",
          fontFamily: SM,
          fontSize: "12px",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}>
          {[0, 1].map(i => (
            <span key={i}>
              {["0xa291...4f0c","0xbf83...e102","0x4262...ea82","0x7d91...3a45","0x1e54...c987","0x8b22...d011","0xff00...beef","0xc4a3...9e72"].map(w => (
                <span key={w}>{`💀 ${w} paper handed · `}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── FIXED CIRCLE LEFT ───────────────────────────── */}
      <div className="hidden xl:flex" style={{
        position: "fixed", left: "20px", top: "50%", transform: "translateY(-50%)",
        width: "100px", height: "100px", borderRadius: "50%",
        background: "#22d3ee", border: "3px solid #000",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "10px", fontFamily: BW, fontSize: "11px", color: "#000",
        zIndex: 10, pointerEvents: "none",
      }}>
        NOT FINANCIAL ADVICE
      </div>

      {/* ── FIXED CIRCLE RIGHT ──────────────────────────── */}
      <div className="hidden xl:flex" style={{
        position: "fixed", right: "20px", top: "50%", transform: "translateY(-50%)",
        width: "100px", height: "100px", borderRadius: "50%",
        background: "#ec4899", border: "3px solid #000",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "10px", fontFamily: BW, fontSize: "16px", color: "#fafafa",
        WebkitTextStroke: "1px #000", zIndex: 10, pointerEvents: "none",
      }}>
        0X NEVER
      </div>

      {/* ── SCATTERED STICKERS ──────────────────────────── */}
      {STICKERS.map((s, i) => (
        <div
          key={i}
          className="hidden xl:block"
          style={{
            position: "fixed",
            top: s.top,
            ...(s.left  ? { left:  s.left  } : {}),
            ...(s.right ? { right: s.right } : {}),
            transform: `rotate(${s.rot})`,
            background: s.bg === "none" ? "transparent" : s.bg,
            color: s.color,
            fontFamily: s.mono ? SM : (s.bg === "none" ? BW : CN),
            fontSize: s.fontSize,
            fontWeight: "bold",
            padding: s.bg === "none" ? "0" : "6px 10px",
            border: s.bg === "none" ? "none" : "2px solid #000",
            borderRadius: "4px",
            zIndex: 0,
            pointerEvents: "none",
            textDecoration: s.strike ? "line-through" : "none",
            opacity: s.opacity ?? 1,
            lineHeight: 1,
          }}
        >
          {s.text}
        </div>
      ))}

      {/* ── VISITOR COUNTER ─────────────────────────────── */}
      <div style={{
        position: "fixed", bottom: "20px", left: "20px",
        background: "#000", color: "#00ff00", fontFamily: SM, fontSize: "12px",
        padding: "6px 10px", boxShadow: "inset 2px 2px 0 #fff, inset -2px -2px 0 #808080",
        zIndex: 20, pointerEvents: "none", lineHeight: 1.4,
      }}>
        VISITORS: 00069420<br />since 2003
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px 0", flex: 1 }}>

        {/* TITLE */}
        <div style={{ textAlign: "center", marginBottom: "40px", transform: rots.title, transition: "transform 0.15s" }}>
          <h1 style={{
            fontFamily: BG,
            fontSize: "clamp(48px, 8vw, 120px)",
            color: "#fafafa",
            WebkitTextStroke: "4px #000000",
            letterSpacing: "2px",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
          }}>
            R3TARD MACHINE
          </h1>
          <p style={{ fontFamily: CN, fontWeight: 700, fontSize: "clamp(14px, 2.5vw, 22px)", color: "#000", margin: "10px 0 0" }}>
            press button receive nonsense
          </p>
        </div>

        {/* IMAGE + MESSAGE */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "28px",
          maxWidth: "1024px", margin: "0 auto",
          justifyContent: "center", alignItems: "flex-start",
        }}>

          {/* IMAGE CARD */}
          <div style={{ transform: rots.img, transition: "transform 0.15s", flexShrink: 0 }}>
            <div style={{ border: "4px solid #000", borderRadius: "4px", boxShadow: "6px 6px 0px #000", overflow: "hidden", background: "#000" }}>
              <img
                src={IMAGES[imgIdx]}
                alt="r3tard transmission"
                width={320}
                height={320}
                style={{ width: "clamp(240px, 30vw, 320px)", height: "clamp(240px, 30vw, 320px)", objectFit: "cover", display: "block" }}
              />
              <div style={{ background: "#000", color: "#fafafa", fontFamily: SM, fontSize: "12px", padding: "8px 12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {capPrefix} #{unitNum.toString().padStart(4, "0")} {capSuffix}
              </div>
            </div>
          </div>

          {/* TRANSMISSION CARD */}
          <div style={{ flex: "1 1 300px", transform: rots.msg, transition: "transform 0.15s" }}>
            <div style={{ background: "#fef3c7", border: "3px solid #000", borderRadius: "8px", boxShadow: "5px 5px 0px #000", padding: "24px" }}>
              <div style={{ display: "inline-block", fontFamily: SM, fontSize: "13px", color: "#000", background: "#fef3c7", border: "3px solid #000", padding: "12px 20px", marginBottom: "18px" }}>
                // TRANSMISSION RECEIVED //
              </div>

              <p style={{ fontFamily: BW, fontSize: "clamp(18px, 3vw, 38px)", color: "#a855f7", textTransform: "uppercase", lineHeight: 1.2, margin: "0 0 18px" }}>
                {message}
              </p>

              <div style={{ borderTop: "2px solid #000", paddingTop: "12px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#000" }}>CLICK COUNT: {clicks}</span>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#ec4899" }}>STATUS: ONGOING</span>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#a855f7" }}>SIGNAL: DUMB</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "16px", maxWidth: "1024px", margin: "40px auto 0" }}>
          {visibleMetrics.map((m, i) => (
            <div key={m.label} style={{ transform: rots.cards[i], transition: "transform 0.15s" }}>
              <div className="card-hard" style={{ background: "#fef3c7", border: "3px solid #000", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                <p style={{ fontFamily: SM, fontSize: "11px", color: "#000", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  {m.label}
                </p>
                <p style={{ fontFamily: BG, fontSize: "clamp(22px, 3vw, 32px)", color: m.color, margin: 0, lineHeight: 1 }}>
                  {m.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON + NEW!!! */}
        <div style={{ textAlign: "center", marginTop: "56px", position: "relative" }}>
          <span style={{
            position: "absolute", top: "-28px", left: "50%",
            transform: "translateX(60%) rotate(-10deg)",
            fontFamily: BW, fontSize: "22px", color: "#ec4899",
            animation: "blink 1s infinite alternate", pointerEvents: "none", zIndex: 2,
          }}>
            NEW!!!
          </span>

          <div style={{ transform: rots.btn, transition: "transform 0.12s", display: "inline-block" }}>
            <button
              onClick={handleClick}
              className="btn-press"
              style={{
                background: "#ec4899", border: "5px solid #000", borderRadius: "12px",
                padding: "24px 48px", fontFamily: BW, fontSize: "clamp(24px, 4vw, 48px)",
                color: "#fafafa", WebkitTextStroke: "3px #000", cursor: "pointer",
                textTransform: "uppercase", letterSpacing: "1px", lineHeight: 1,
              }}
            >
              {buttonText}
            </button>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button
              onClick={shareOnX}
              style={{
                background: "#000000", color: "#fafafa", border: "4px solid #000000",
                borderRadius: "8px", padding: "12px 24px", fontFamily: BG, fontSize: "20px",
                cursor: "pointer", boxShadow: "4px 4px 0px #ec4899",
              }}
            >
              📸 SHARE THIS R3TARD
            </button>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div style={{ textAlign: "center", margin: "28px 0 0", fontFamily: SM, fontSize: "12px", color: "#00000066", textTransform: "uppercase", letterSpacing: "2px" }}>
          no wallet · no mint · no token · no utility · no reason
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{
        background: "#000", color: "#fafafa", fontFamily: SM, fontSize: "11px",
        textAlign: "center", padding: "20px 16px",
        borderTop: "4px solid #ec4899", marginTop: "40px", lineHeight: 2,
      }}>
        ALL NUMBERS ARE LIES. ALL METRICS ARE FAKE. THIS IS ART.<br /><br />
        made by a r3tard with too much time ·
        all art by @Dreiki10 (the goat) ·
        fan project · no permission asked · no permission given ·
        monad is the blockchain btw ·
        best viewed in netscape navigator ·
        worst viewed everywhere else
      </footer>
    </div>
  );
}
