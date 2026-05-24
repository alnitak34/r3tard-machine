"use client";
import { useState } from "react";

const IMAGES = [
  "/assets/r3tards/photo_5807750362608373538_y.jpg",
  "/assets/r3tards/photo_5810002162422058688_y.jpg",
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

const MARQUEE_TEXT =
  "R3TARD 🧠 · MACHINE · ON MONAD 💀 · CLICK MORE · LOSE BRAIN 🎰 · PRESS BUTTON · RECEIVE NONSENSE 🤡 · NOT FINANCIAL ADVICE · COPE · SEETHE · WAGMI · NGMI · ";

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

function freshRots() {
  return {
    title: `rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`,
    img:   `rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`,
    msg:   `rotate(${(Math.random() * 3 - 1.5).toFixed(1)}deg)`,
    btn:   `rotate(${(Math.random() * 4 - 2).toFixed(1)}deg)`,
    cards: Array.from({ length: 5 }, () => `rotate(${(Math.random() * 6 - 3).toFixed(1)}deg)`),
  };
}

type Sticker = {
  text: string; bg: string; color: string; rot: string;
  top: string; left?: string; right?: string; fontSize: string;
  strike?: boolean; mono?: boolean; opacity?: number;
};

const STICKERS: Sticker[] = [
  // original 8
  { text: "GM",           bg: "#fef3c7", color: "#000",    rot: "-12deg", top: "14%", left: "1.5%",  fontSize: "18px" },
  { text: "NGMI",         bg: "#000",    color: "#fafafa", rot:  "-5deg", top: "52%", left: "0.5%",  fontSize: "14px" },
  { text: "***",          bg: "none",    color: "#a855f7", rot:   "5deg", top: "72%", left: "1%",    fontSize: "56px" },
  { text: "WAGMI",        bg: "#fee2e2", color: "#dc2626", rot:   "8deg", top: "25%", right: "1%",   fontSize: "16px", strike: true },
  { text: "COPE",         bg: "#fbcfe8", color: "#000",    rot:  "15deg", top: "60%", right: "0.5%", fontSize: "14px" },
  { text: "SEETHE",       bg: "#22d3ee", color: "#000",    rot:  "-8deg", top: "16%", right: "2%",   fontSize: "12px" },
  { text: "???",          bg: "none",    color: "#000",    rot:  "-3deg", top: "40%", right: "1%",   fontSize: "44px" },
  { text: "!!!",          bg: "none",    color: "#ec4899", rot:   "7deg", top: "78%", right: "1%",   fontSize: "52px" },
  // new 8 — #shame / #graveyard culture
  { text: "PAPER HAND",   bg: "#fee2e2", color: "#dc2626", rot:  "10deg", top: "35%", left: "0.5%",  fontSize: "13px", strike: true },
  { text: "CAUGHT IN 4K", bg: "#fef08a", color: "#dc2626", rot: "-14deg", top: "63%", left: "0.8%",  fontSize: "11px" },
  { text: "0x4262...ea82",bg: "none",    color: "#000",    rot:   "3deg", top: "43%", left: "0.3%",  fontSize: "11px", mono: true },
  { text: "RIP r3tard",   bg: "#d1d5db", color: "#000",    rot:  "-9deg", top: "33%", right: "2%",   fontSize: "14px" },
  { text: "BURN IT",      bg: "none",    color: "#ef4444", rot:  "12deg", top: "52%", right: "1%",   fontSize: "32px" },
  { text: "GRAVEYARD",    bg: "#d1d5db", color: "#000",    rot:  "-6deg", top: "70%", right: "2%",   fontSize: "13px" },
  { text: "✝",            bg: "none",    color: "#000",    rot:   "0deg", top: "85%", left: "1.5%",  fontSize: "60px", opacity: 0.6 },
  { text: "GOODBYE 👋",   bg: "none",    color: "#dc2626", rot: "-11deg", top: "88%", right: "1.5%", fontSize: "24px" },
];

export default function Home() {
  const [imgIdx, setImgIdx] = useState(() => randInt(0, IMAGES.length - 1));
  const [message, setMessage] = useState(() => MESSAGES[randInt(0, MESSAGES.length - 1)]);
  const [visibleMetrics, setVisibleMetrics] = useState<Metric[]>(pickFiveMetrics);
  const [rots, setRots] = useState(freshRots);
  const [clicks, setClicks] = useState(0);
  const [capPrefix, setCapPrefix] = useState(() => CAPTION_PREFIXES[randInt(0, 3)]);
  const [capSuffix, setCapSuffix] = useState(() => CAPTION_SUFFIXES[randInt(0, 3)]);
  const [unitNum, setUnitNum] = useState(() => randInt(1, 9999));
  const [buttonText, setButtonText] = useState(BUTTON_TEXTS[0]);

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

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #c084fc 0%, #f0abfc 50%, #d8b4fe 100%)",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── MARQUEE ─────────────────────────────────────── */}
      <div style={{
        background: "#22d3ee",
        borderTop: "3px solid #000",
        borderBottom: "3px solid #000",
        padding: "14px 0",
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 30s linear infinite",
          fontFamily: BW,
          fontSize: "24px",
          color: "#000",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}>
          <span>{MARQUEE_TEXT}</span>
          <span>{MARQUEE_TEXT}</span>
        </div>
      </div>

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
          {["👻 0xa291...4f0c paper handed · 👻 0xbf83...e102 paper handed · 👻 0x4262...ea82 paper handed · 👻 0x7d91...3a45 paper handed · 👻 0x1e54...c987 paper handed · 👻 0x8b22...d011 paper handed · 👻 0xff00...beef paper handed · 👻 0xc4a3...9e72 paper handed · ", "👻 0xa291...4f0c paper handed · 👻 0xbf83...e102 paper handed · 👻 0x4262...ea82 paper handed · 👻 0x7d91...3a45 paper handed · 👻 0x1e54...c987 paper handed · 👻 0x8b22...d011 paper handed · 👻 0xff00...beef paper handed · 👻 0xc4a3...9e72 paper handed · "].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── FIXED CIRCLE LEFT ───────────────────────────── */}
      <div className="hidden xl:flex" style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "#22d3ee",
        border: "3px solid #000",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
        fontFamily: BW,
        fontSize: "11px",
        color: "#000",
        zIndex: 10,
        pointerEvents: "none",
      }}>
        NOT FINANCIAL ADVICE
      </div>

      {/* ── FIXED CIRCLE RIGHT ──────────────────────────── */}
      <div className="hidden xl:flex" style={{
        position: "fixed",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "#ec4899",
        border: "3px solid #000",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "10px",
        fontFamily: BW,
        fontSize: "16px",
        color: "#fafafa",
        WebkitTextStroke: "1px #000",
        zIndex: 10,
        pointerEvents: "none",
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
        position: "fixed",
        bottom: "20px",
        left: "20px",
        background: "#000",
        color: "#00ff00",
        fontFamily: SM,
        fontSize: "12px",
        padding: "6px 10px",
        boxShadow: "inset 2px 2px 0 #fff, inset -2px -2px 0 #808080",
        zIndex: 20,
        pointerEvents: "none",
        lineHeight: 1.4,
      }}>
        VISITORS: 00069420<br />since 2003
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <main style={{ position: "relative", zIndex: 1, padding: "40px 16px 0", flex: 1 }}>

        {/* TITLE */}
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
          transform: rots.title,
          transition: "transform 0.15s",
        }}>
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
          <p style={{
            fontFamily: CN,
            fontWeight: 700,
            fontSize: "clamp(14px, 2.5vw, 22px)",
            color: "#000",
            margin: "10px 0 0",
          }}>
            press button receive nonsense
          </p>
        </div>

        {/* IMAGE + MESSAGE */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "28px",
          maxWidth: "1024px",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>

          {/* IMAGE CARD */}
          <div style={{
            transform: rots.img,
            transition: "transform 0.15s",
            flexShrink: 0,
          }}>
            <div style={{
              border: "4px solid #000",
              borderRadius: "4px",
              boxShadow: "6px 6px 0px #000",
              overflow: "hidden",
              background: "#000",
            }}>
              <img
                src={IMAGES[imgIdx]}
                alt="r3tard transmission"
                width={320}
                height={320}
                style={{
                  width: "clamp(240px, 30vw, 320px)",
                  height: "clamp(240px, 30vw, 320px)",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{
                background: "#000",
                color: "#fafafa",
                fontFamily: SM,
                fontSize: "12px",
                padding: "8px 12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}>
                {capPrefix} #{unitNum.toString().padStart(4, "0")} {capSuffix}
              </div>
            </div>
          </div>

          {/* TRANSMISSION CARD */}
          <div style={{
            flex: "1 1 300px",
            transform: rots.msg,
            transition: "transform 0.15s",
          }}>
            <div style={{
              background: "#fef3c7",
              border: "3px solid #000",
              borderRadius: "8px",
              boxShadow: "5px 5px 0px #000",
              padding: "24px",
            }}>
              <div style={{
                display: "inline-block",
                fontFamily: SM,
                fontSize: "13px",
                color: "#000",
                background: "#fef3c7",
                border: "3px solid #000",
                padding: "12px 20px",
                marginBottom: "18px",
              }}>
                // TRANSMISSION RECEIVED //
              </div>

              <p style={{
                fontFamily: BW,
                fontSize: "clamp(18px, 3vw, 38px)",
                color: "#a855f7",
                textTransform: "uppercase",
                lineHeight: 1.2,
                margin: "0 0 18px",
              }}>
                {message}
              </p>

              <div style={{
                borderTop: "2px solid #000",
                paddingTop: "12px",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#000" }}>CLICK COUNT: {clicks}</span>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#ec4899" }}>STATUS: ONGOING</span>
                <span style={{ fontFamily: SM, fontSize: "11px", color: "#a855f7" }}>SIGNAL: DUMB</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px",
          maxWidth: "1024px",
          margin: "40px auto 0",
        }}>
          {visibleMetrics.map((m, i) => (
            <div key={m.label} style={{ transform: rots.cards[i], transition: "transform 0.15s" }}>
              <div className="card-hard" style={{
                background: "#fef3c7",
                border: "3px solid #000",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
              }}>
                <p style={{
                  fontFamily: SM,
                  fontSize: "11px",
                  color: "#000",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}>
                  {m.label}
                </p>
                <p style={{
                  fontFamily: BG,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  color: m.color,
                  margin: 0,
                  lineHeight: 1,
                }}>
                  {m.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON + NEW!!! */}
        <div style={{ textAlign: "center", marginTop: "56px", position: "relative" }}>
          <span style={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(60%) rotate(-10deg)",
            fontFamily: BW,
            fontSize: "22px",
            color: "#ec4899",
            animation: "blink 1s infinite alternate",
            pointerEvents: "none",
            zIndex: 2,
          }}>
            NEW!!!
          </span>

          <div style={{ transform: rots.btn, transition: "transform 0.12s", display: "inline-block" }}>
            <button
              onClick={handleClick}
              className="btn-press"
              style={{
                background: "#ec4899",
                border: "5px solid #000",
                borderRadius: "12px",
                padding: "24px 48px",
                fontFamily: BW,
                fontSize: "clamp(24px, 4vw, 48px)",
                color: "#fafafa",
                WebkitTextStroke: "3px #000",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: 1,
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div style={{
          textAlign: "center",
          margin: "28px 0 0",
          fontFamily: SM,
          fontSize: "12px",
          color: "#00000066",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}>
          no wallet · no mint · no token · no utility · no reason
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{
        background: "#000",
        color: "#fafafa",
        fontFamily: SM,
        fontSize: "11px",
        textAlign: "center",
        padding: "20px 16px",
        borderTop: "4px solid #ec4899",
        marginTop: "40px",
        lineHeight: 2,
      }}>
        made by a r3tard for r3tards · this is not a project · cope ·
        not affiliated with @Dreiki10 · monad is the blockchain btw ·
        best viewed in netscape navigator
      </footer>
    </div>
  );
}
