import React, { useState, useEffect } from 'react';
import { 
  Terminal, Cpu, Globe, Rocket, Activity, Database, Users, 
  ChevronRight, Microscope, Zap, BookOpen, Wrench, FlaskConical,
  ArrowUpRight, Radio, Code2, Leaf, Truck, Atom, Brain, X
} from 'lucide-react';

/* ─────────────────────────────────────────────
   TYPOGRAPHY  — IBM Plex Mono + Syne
───────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Syne', sans-serif; }

    .font-mono { font-family: 'IBM Plex Mono', monospace; }

    @keyframes fade-up {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes reactor-spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes pulse-ring {
      0%   { transform: scale(0.8); opacity: 0.8; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    @keyframes blink {
      0%,100% { opacity: 1; }
      50%      { opacity: 0; }
    }

    .anim-fade-up  { animation: fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both; }
    .anim-fade-up-d1 { animation: fade-up 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
    .anim-fade-up-d2 { animation: fade-up 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
    .anim-fade-up-d3 { animation: fade-up 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both; }
    .anim-fade-up-d4 { animation: fade-up 0.7s 0.4s cubic-bezier(0.22,1,0.36,1) both; }
    .anim-fade-in  { animation: fade-in 0.5s ease both; }

    .ticker-track { animation: ticker 30s linear infinite; }
    .ticker-track:hover { animation-play-state: paused; }

    .reactor-spin { animation: reactor-spin 60s linear infinite; }
    .pulse-ring   { animation: pulse-ring 2.5s ease-out infinite; }
    .blink        { animation: blink 1s step-end infinite; }

    .card-hover {
      transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                  border-color 0.35s ease,
                  box-shadow 0.35s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      border-color: rgba(255,255,255,0.18);
      box-shadow: 0 0 40px -8px rgba(56,189,248,0.18);
    }

    .nav-link {
      position: relative;
      padding-bottom: 2px;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 1px;
      background: #22d3ee;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }

    .gradient-text {
      background: linear-gradient(135deg, #22d3ee 0%, #a78bfa 60%, #f472b6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 2px; }
  `}</style>
);

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const divisions = [
  {
    id: 'playground',
    label: 'DIV-01',
    title: 'Playground',
    tagline: 'Campus-native tools & social infrastructure',
    icon: Globe,
    color: '#22d3ee',
    colorClass: 'text-cyan-400',
    bgClass: 'bg-cyan-500',
    borderClass: 'border-cyan-500/30',
    glowClass: 'rgba(34,211,238,0.12)',
    desc: 'A student-centred ecosystem — social threads, web utilities, and shared dev tooling — built for and by campus communities across East Africa.',
    projects: [
      {
        name: 'Student Center',
        icon: Users,
        status: 'ACTIVE',
        desc: 'Campus app where students share stories, find utility tools, and access entertainment. The social hub connecting campus life digitally.'
      },
      {
        name: 'Locus',
        icon: Radio,
        status: 'ACTIVE',
        desc: 'Real-time threads app with live group chat. Unique isolation mode lets you focus on a single conversation thread without losing context of the whole.'
      },
      {
        name: 'Ciansites',
        icon: Code2,
        status: 'ACTIVE',
        desc: 'A web-dev showcase demonstrating neumorphic UI design. Proof-of-concept for tactile, soft-shadow interfaces built for modern browsers.'
      },
      {
        name: 'Gear',
        icon: Wrench,
        status: 'ACTIVE',
        desc: 'Free online tools that bridge the phone-vs-computer gap. Programmers can publish their own utilities — making professional-grade tooling accessible to anyone.'
      }
    ]
  },
  {
    id: 'shipper',
    label: 'DIV-02',
    title: 'Shipper',
    tagline: "East Africa's problem-solving engine",
    icon: Truck,
    color: '#34d399',
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500',
    borderClass: 'border-emerald-500/30',
    glowClass: 'rgba(52,211,153,0.12)',
    desc: "Hunting and solving East Africa's biggest consumer-facing problems. From dryland restoration to state-of-the-art services that remain affordable.",
    projects: [
      {
        name: 'Consumer Problem Engine',
        icon: Zap,
        status: 'ACTIVE',
        desc: 'Systematic identification and resolution of East Africa\'s most pressing consumer pain points — starting from the ground up, from the user\'s perspective.'
      },
      {
        name: 'Dryland Restoration',
        icon: Leaf,
        status: 'RESEARCH',
        desc: 'Permaculture-driven restoration of degraded drylands. Building resilient agroecological systems that regenerate soil, water cycles, and local livelihoods.'
      },
      {
        name: 'Supply Chain Reform',
        icon: Activity,
        status: 'ACTIVE',
        desc: 'Redesigning supply and value chains for efficiency and equity — cutting waste, reducing costs, and pushing service quality to world-class standards without pricing out communities.'
      }
    ]
  },
  {
    id: 'opendocs',
    label: 'DIV-03',
    title: 'Open Docs',
    tagline: 'Published research & internal writings',
    icon: BookOpen,
    color: '#a78bfa',
    colorClass: 'text-violet-400',
    bgClass: 'bg-violet-500',
    borderClass: 'border-violet-500/30',
    glowClass: 'rgba(167,139,250,0.12)',
    desc: 'The public knowledge layer of Tech C Ventures. Research papers, technical analyses, and long-form writing on the problems and systems we engage with.',
    projects: [
      {
        name: 'Research Archive',
        icon: Microscope,
        status: 'ONGOING',
        desc: 'Peer-quality research on electrochemistry, permaculture, supply chains, and frontier technology — published openly for the East African builder community.'
      },
      {
        name: 'Technical Writings',
        icon: Terminal,
        status: 'ONGOING',
        desc: 'Internal thinking made public. Analyses of decisions, systems designs, and philosophical frameworks that guide how we build.'
      }
    ]
  },
  {
    id: 'frontier',
    label: 'DIV-04',
    title: 'Frontier',
    tagline: 'Deep-tech R&D for civilisational leverage',
    icon: Atom,
    color: '#f472b6',
    colorClass: 'text-pink-400',
    bgClass: 'bg-pink-500',
    borderClass: 'border-pink-500/30',
    glowClass: 'rgba(244,114,182,0.12)',
    desc: 'The furthest edge of what we pursue. Abiotic food synthesis, novel AI algorithms, and the long-horizon infrastructure required for human expansion beyond Earth.',
    projects: [
      {
        name: 'Abiotic Food Synthesis',
        icon: FlaskConical,
        status: 'RESEARCH',
        desc: 'Electrochemical production of nutritional compounds from first principles — no agriculture, no soil. Mapping electrochemical pathways using RL agents and physics-informed models.'
      },
      {
        name: 'Novel AI Algorithms',
        icon: Brain,
        status: 'RESEARCH',
        desc: 'Development of new learning architectures and training paradigms beyond current paradigms. Focused on efficiency, interpretability, and real-world deployment in low-resource environments.'
      },
      {
        name: 'Space Infrastructure',
        icon: Rocket,
        status: 'CONCEPT',
        desc: 'Foundational mechatronics and materials research toward drastically lowering the cost of orbital hardware. Leveraging local East African materials and extreme automation.'
      }
    ]
  }
];

const statusColors = {
  ACTIVE: { dot: '#22d3ee', text: '#22d3ee', bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.25)' },
  RESEARCH: { dot: '#f472b6', text: '#f472b6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
  CONCEPT: { dot: '#a78bfa', text: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
  ONGOING: { dot: '#34d399', text: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
};

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */
const Chip = ({ children, color = '#22d3ee' }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '3px 10px', borderRadius: 99,
    fontSize: 10, fontFamily: 'IBM Plex Mono', fontWeight: 500,
    letterSpacing: '0.08em',
    color, background: `${color}14`,
    border: `1px solid ${color}33`
  }}>{children}</span>
);

const StatusBadge = ({ status }) => {
  const s = statusColors[status] || statusColors.ACTIVE;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '2px 8px', borderRadius: 99,
      fontSize: 9, fontFamily: 'IBM Plex Mono', fontWeight: 600,
      letterSpacing: '0.1em',
      color: s.text, background: s.bg, border: `1px solid ${s.border}`
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
      {status}
    </span>
  );
};

const GlassCard = ({ children, style = {}, className = '', onClick }) => (
  <div
    onClick={onClick}
    className={`card-hover ${className}`}
    style={{
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20,
      padding: 28,
      backdropFilter: 'blur(20px)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }}
  >
    <div style={{
      position: 'absolute', top: 0, left: '10%', right: '10%',
      height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)'
    }} />
    {children}
  </div>
);

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */
const Ticker = () => {
  const items = [
    'DIV-01 · PLAYGROUND', 'DIV-02 · SHIPPER', 'DIV-03 · OPEN DOCS',
    'DIV-04 · FRONTIER', 'LOC: NBO.KE', 'BUILDING FOR HUMAN EXPANSION',
    'EST. EAST AFRICA', 'RESEARCH + VENTURE STUDIO',
  ];
  const all = [...items, ...items];
  return (
    <div style={{
      overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0,0,0,0.4)', padding: '10px 0'
    }}>
      <div className="ticker-track" style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}>
        {all.map((t, i) => (
          <span key={i} style={{
            fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.3)', padding: '0 40px',
            display: 'inline-flex', alignItems: 'center', gap: 12
          }}>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#22d3ee', display: 'inline-block' }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
const Nav = ({ view, setView }) => (
  <nav style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(24px)',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    height: 56, display: 'flex', alignItems: 'center',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button onClick={() => setView('home')} style={{
        display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none',
        color: 'white', fontFamily: 'IBM Plex Mono', fontSize: 12, letterSpacing: '0.15em',
        cursor: 'pointer', fontWeight: 600
      }}>
        <Terminal size={14} color="#22d3ee" />
        BLD.CO.KE
      </button>
      <div style={{ display: 'flex', gap: 28 }}>
        {[['ventures', 'VENTURES'], ['manifesto', 'MANIFESTO']].map(([v, label]) => (
          <button key={v} onClick={() => setView(v)} className="nav-link" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.15em',
            color: view === v ? '#22d3ee' : 'rgba(255,255,255,0.45)',
            fontWeight: 500, transition: 'color 0.2s'
          }}>{label}</button>
        ))}
      </div>
    </div>
  </nav>
);

/* ─────────────────────────────────────────────
   AMBIENT BACKGROUND
───────────────────────────────────────────── */
const Background = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    {/* Reactor */}
    <div className="reactor-spin" style={{
      position: 'absolute', top: '50%', left: '50%',
      width: '140vw', height: '140vw',
      transform: 'translate(-50%,-50%)',
      background: 'conic-gradient(from 90deg, #000 0%, #0ea5e9 20%, #000 40%, #8b5cf6 65%, #000 85%, #ec4899 95%, #000 100%)',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.18
    }} />
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      width: '50vw', height: '50vw',
      transform: 'translate(-50%,-50%)',
      background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)',
      borderRadius: '50%'
    }} />
    {/* Grid */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
      backgroundSize: '72px 72px',
      WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)'
    }} />
  </div>
);

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
const Home = ({ setView, setActiveDivision }) => (
  <div>
    {/* Hero */}
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px' }}>
      <div className="anim-fade-up" style={{ marginBottom: 20 }}>
        <Chip>Initialization Complete</Chip>
      </div>
      <h1 className="anim-fade-up-d1" style={{
        fontSize: 'clamp(42px, 7vw, 88px)', fontWeight: 800,
        color: 'white', lineHeight: 1.05, marginBottom: 24,
        letterSpacing: '-0.03em'
      }}>
        Building the architecture<br />
        for{' '}
        <span className="gradient-text">human expansion.</span>
      </h1>
      <p className="anim-fade-up-d2" style={{
        fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 560,
        lineHeight: 1.7, marginBottom: 40, fontWeight: 400
      }}>
        Advanced research lab and venture studio based in Nairobi. Automating localized digital economies, designing deep-tech for space infrastructure, accelerating East African development.
      </p>
      <div className="anim-fade-up-d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <button onClick={() => setView('ventures')} style={{
          padding: '13px 28px', background: 'rgba(34,211,238,0.12)',
          border: '1px solid rgba(34,211,238,0.3)', borderRadius: 10,
          color: '#22d3ee', fontFamily: 'IBM Plex Mono', fontSize: 11,
          letterSpacing: '0.12em', cursor: 'pointer', fontWeight: 500,
          transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: 8
        }}>
          EXPLORE VENTURES <ChevronRight size={14} />
        </button>
        <button onClick={() => setView('manifesto')} style={{
          padding: '13px 28px', background: 'transparent',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
          color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Mono', fontSize: 11,
          letterSpacing: '0.12em', cursor: 'pointer', fontWeight: 500, transition: 'all 0.2s'
        }}>
          READ MANIFESTO
        </button>
      </div>
    </div>

    <Ticker />

    {/* Divisions Grid */}
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
        <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)' }}>
          OPERATIONAL DIVISIONS
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {divisions.map((div, i) => {
          const Icon = div.icon;
          return (
            <div
              key={div.id}
              className={`card-hover anim-fade-up-d${Math.min(i + 1, 4)}`}
              onClick={() => { setActiveDivision(div); setView('divisionDetail'); }}
              style={{
                position: 'relative', overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: 20, padding: 28, cursor: 'pointer',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2, background: `linear-gradient(90deg, transparent, ${div.color}, transparent)`
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${div.color}14`, border: `1px solid ${div.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon size={20} color={div.color} strokeWidth={1.5} />
                </div>
                <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
                  {div.label}
                </span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 6 }}>{div.title}</h3>
              <p style={{ fontSize: 12, color: div.color, fontFamily: 'IBM Plex Mono', marginBottom: 12, letterSpacing: '0.05em' }}>
                {div.tagline}
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: 20 }}>
                {div.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                {div.projects.map(p => (
                  <span key={p.name} style={{
                    fontFamily: 'IBM Plex Mono', fontSize: 9, letterSpacing: '0.08em',
                    padding: '3px 8px', borderRadius: 4,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)'
                  }}>{p.name}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: 'IBM Plex Mono' }}>
                VIEW DIVISION <ChevronRight size={12} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   VENTURES LIST
───────────────────────────────────────────── */
const VenturesList = ({ setView, setActiveDivision }) => (
  <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px 80px' }} className="anim-fade-in">
    <div style={{ marginBottom: 8 }}><Chip>Venture Studio</Chip></div>
    <h1 style={{ fontSize: 48, fontWeight: 800, color: 'white', marginBottom: 12, marginTop: 20, letterSpacing: '-0.03em' }}>
      Operational Divisions
    </h1>
    <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 56, fontSize: 15, lineHeight: 1.7, maxWidth: 520 }}>
      Four distinct divisions. Each with its own mandate, operating across different time horizons — from campus tools today to orbital infrastructure tomorrow.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
      {divisions.map(div => {
        const Icon = div.icon;
        return (
          <div
            key={div.id}
            className="card-hover"
            onClick={() => { setActiveDivision(div); setView('divisionDetail'); }}
            style={{
              position: 'relative', overflow: 'hidden',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: 32, cursor: 'pointer'
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: 2, background: `linear-gradient(90deg, transparent, ${div.color}, transparent)`
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${div.color}14`, border: `1px solid ${div.color}28`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <Icon size={22} color={div.color} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', marginBottom: 4 }}>{div.label}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white' }}>{div.title}</h3>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: 24 }}>{div.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {div.projects.map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>
                    → {p.name}
                  </span>
                  <StatusBadge status={p.status} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   DIVISION DETAIL
───────────────────────────────────────────── */
const DivisionDetail = ({ division, setView }) => {
  const Icon = division.icon;
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '100px 24px 80px' }} className="anim-fade-in">
      <button onClick={() => setView('ventures')} style={{
        display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none',
        color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontFamily: 'IBM Plex Mono',
        fontSize: 10, letterSpacing: '0.12em', marginBottom: 48, transition: 'color 0.2s'
      }}>
        <ChevronRight size={12} style={{ transform: 'rotate(180deg)' }} /> BACK TO VENTURES
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 48 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20, flexShrink: 0,
          background: `${division.color}14`, border: `1px solid ${division.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Icon size={32} color={division.color} strokeWidth={1.5} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <Chip color={division.color}>{division.label}</Chip>
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: 8 }}>
            {division.title}
          </h1>
          <p style={{ fontSize: 16, color: division.color, fontFamily: 'IBM Plex Mono', letterSpacing: '0.05em' }}>
            {division.tagline}
          </p>
        </div>
      </div>

      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 56, maxWidth: 680 }}>
        {division.desc}
      </p>

      {/* Projects */}
      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>
          ACTIVE PROJECTS
        </span>
        <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {division.projects.map(p => {
          const PIcon = p.icon;
          return (
            <div key={p.name} style={{
              position: 'relative', overflow: 'hidden',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16, padding: 24,
              transition: 'border-color 0.3s, background 0.3s'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: `${division.color}0e`, border: `1px solid ${division.color}20`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <PIcon size={17} color={division.color} strokeWidth={1.5} />
                </div>
                <StatusBadge status={p.status} />
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 10 }}>{p.name}</h4>
              <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MANIFESTO
───────────────────────────────────────────── */
const Manifesto = () => (
  <div style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 80px' }} className="anim-fade-in">
    <div style={{ marginBottom: 20 }}><Chip>The Manifesto</Chip></div>
    <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 60, marginTop: 24 }}>
      Building the Architecture<br />
      for <span className="gradient-text">Human Expansion.</span>
    </h1>

    {[
      {
        marker: '01',
        heading: 'We Start Here.',
        body: `The most ambitious journeys begin with the most immediate problems. We are in Nairobi. We see what is broken — fragmented digital tools, inaccessible technology, degraded land, inefficient value chains. We do not wait for someone else to fix these. We build the fix. Every local problem solved is a proof of concept for something larger.`
      },
      {
        marker: '02',
        heading: 'Infrastructure as Leverage.',
        body: `We are not just building software. We are laying the digital and physical infrastructure through which a generation will operate. A student platform becomes the nervous system of a campus economy. A supply chain reform becomes the template for an entire region. We think in systems, not features.`
      },
      {
        marker: '03',
        heading: 'The Frontier is Necessary.',
        body: `Abiotic food synthesis. Novel AI architectures. Orbital hardware at a fraction of the current cost. These are not vanity projects — they are the logical conclusion of taking human flourishing seriously. A civilisation that cannot feed itself without soil, or that cannot leave its planet, is a fragile civilisation. We build the bridge.`
      },
      {
        marker: '04',
        heading: 'Open by Default.',
        body: `We publish our research, our failures, and our thinking. The East African builder community deserves access to the same quality of intellectual infrastructure as any other. Open Docs is not a blog — it is our commitment to shared progress. Knowledge that stays internal is leverage wasted.`
      },
      {
        marker: '05',
        heading: 'Affordable, Not Compromised.',
        body: `World-class quality does not require world-class prices. Every product and service we build aims to deliver state-of-the-art capability at a price point that does not exclude the communities we serve. Cost reduction through intelligence, automation, and design — never through cutting corners.`
      }
    ].map(({ marker, heading, body }) => (
      <div key={marker} style={{ display: 'flex', gap: 28, marginBottom: 52 }}>
        <div style={{
          fontFamily: 'IBM Plex Mono', fontSize: 11, color: 'rgba(34,211,238,0.4)',
          letterSpacing: '0.1em', paddingTop: 4, flexShrink: 0, width: 28
        }}>{marker}</div>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 12 }}>{heading}</h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85 }}>{body}</p>
        </div>
      </div>
    ))}

    <div style={{
      marginTop: 64, padding: '24px 28px',
      background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.15)',
      borderRadius: 16
    }}>
      <p style={{
        fontFamily: 'IBM Plex Mono', fontSize: 12, letterSpacing: '0.08em',
        color: 'rgba(34,211,238,0.6)', lineHeight: 1.7
      }}>
        "From the most pressing consumer problem to the design of orbital hardware — Tech C Ventures is one continuous commitment to building the things that matter, at every scale."
      </p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
const Footer = ({ uptime }) => {
  const fmt = (s) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  };
  return (
    <footer style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(24px)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      height: 44, display: 'flex', alignItems: 'center'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'IBM Plex Mono', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }} className="pulse-ring-wrap">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', display: 'block' }} />
            </span>
            SYS.STATUS: ONLINE
          </span>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
            LOC: NBO.KE · 1.2921° S, 36.8219° E
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
            SESSION_T: {fmt(uptime)}
          </span>
          <span style={{ fontFamily: 'IBM Plex Mono', fontSize: 10, color: 'rgba(34,211,238,0.4)', letterSpacing: '0.08em' }}>
            ACCESS_TERMINAL<span className="blink">_</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState('home');
  const [activeDivision, setActiveDivision] = useState(null);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setUptime(p => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: 'rgba(255,255,255,0.8)', overflowX: 'hidden', paddingBottom: 64 }}>
      <FontLoader />
      <Background />
      <Nav view={view} setView={setView} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        {view === 'home' && <Home setView={setView} setActiveDivision={setActiveDivision} />}
        {view === 'manifesto' && <Manifesto />}
        {view === 'ventures' && <VenturesList setView={setView} setActiveDivision={setActiveDivision} />}
        {view === 'divisionDetail' && activeDivision && <DivisionDetail division={activeDivision} setView={setView} />}
      </div>

      <Footer uptime={uptime} />
    </div>
  );
}
