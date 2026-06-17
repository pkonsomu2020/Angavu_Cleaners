// Angavu Cleaners – Blue version (for light/white backgrounds)
export default function LogoBlue({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angavu Cleaners logo"
    >
      {/* ── Outer circle border ── */}
      <circle cx="100" cy="100" r="96" fill="white" stroke="#1E3A8A" strokeWidth="3.5" />

      {/* ── Blue swoosh / crescent arc ── */}
      <path
        d="M28 115 Q42 52 100 38 Q60 50 55 105 Q50 135 72 158 Q42 148 28 115Z"
        fill="url(#swooshBlue)"
        opacity="0.9"
      />

      {/* ── House roofline ── */}
      <path
        d="M58 88 L100 52 L142 88"
        stroke="#1E3A8A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* House window */}
      <rect x="89" y="64" width="22" height="20" rx="2" fill="none" stroke="#1E3A8A" strokeWidth="3.5" />
      <line x1="100" y1="64" x2="100" y2="84" stroke="#1E3A8A" strokeWidth="2" />
      <line x1="89" y1="74" x2="111" y2="74" stroke="#1E3A8A" strokeWidth="2" />

      {/* ── Broom (right side, angled) ── */}
      {/* Handle */}
      <line x1="130" y1="56" x2="108" y2="96" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
      {/* Broom head */}
      <path
        d="M100 94 Q108 88 116 94 Q112 106 104 106 Q96 106 100 94Z"
        fill="#1E3A8A"
      />
      <line x1="101" y1="98" x2="98" y2="108" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="99" x2="103" y2="109" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
      <line x1="109" y1="99" x2="108" y2="109" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
      <line x1="113" y1="97" x2="113" y2="107" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />

      {/* ── Bucket (left of centre) ── */}
      <path
        d="M72 90 L68 108 Q68 112 73 112 L86 112 Q91 112 90 108 L87 90 Z"
        fill="#3B82F6"
        stroke="#1E3A8A"
        strokeWidth="2"
      />
      {/* Bucket handle */}
      <path d="M73 90 Q79 84 87 90" stroke="#1E3A8A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx="74" cy="86" r="3" fill="#60A5FA" opacity="0.9" />
      <circle cx="82" cy="82" r="4" fill="#93C5FD" opacity="0.8" />
      <circle cx="89" cy="85" r="2.5" fill="#BFDBFE" opacity="0.9" />

      {/* ── Green leaf ── */}
      <path
        d="M92 108 Q98 94 108 98 Q104 112 92 108Z"
        fill="#16A34A"
        stroke="#15803D"
        strokeWidth="1"
      />
      <line x1="92" y1="108" x2="107" y2="99" stroke="#15803D" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Sparkles ── */}
      {/* Top centre */}
      <path d="M100 30 L101.5 34 L106 35.5 L101.5 37 L100 41 L98.5 37 L94 35.5 L98.5 34 Z"
        fill="#3B82F6" />
      {/* Top right */}
      <path d="M138 42 L139 45 L142 46 L139 47 L138 50 L137 47 L134 46 L137 45 Z"
        fill="#60A5FA" />
      {/* Right */}
      <path d="M152 68 L153 71 L156 72 L153 73 L152 76 L151 73 L148 72 L151 71 Z"
        fill="#93C5FD" />
      {/* Small dot sparkles */}
      <circle cx="144" cy="56" r="2.5" fill="#3B82F6" />
      <circle cx="128" cy="38" r="2" fill="#60A5FA" />

      {/* ── ANGAVU text ── */}
      <text
        x="100"
        y="138"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="#1E3A8A"
        letterSpacing="1"
      >
        ANGAVU
      </text>

      {/* ── Decorative lines flanking CLEANERS ── */}
      <line x1="28" y1="146" x2="58" y2="146" stroke="#1E3A8A" strokeWidth="1.5" />
      <line x1="142" y1="146" x2="172" y2="146" stroke="#1E3A8A" strokeWidth="1.5" />

      {/* ── CLEANERS text ── */}
      <text
        x="100"
        y="155"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="17"
        fill="#3B82F6"
        letterSpacing="3"
      >
        CLEANERS
      </text>

      {/* ── Tagline ── */}
      <text
        x="100"
        y="170"
        textAnchor="middle"
        fontFamily="'Arial', sans-serif"
        fontWeight="400"
        fontSize="7.5"
        fill="#475569"
        letterSpacing="1.5"
      >
        CLEAN SPACES, BETTER LIVING
      </text>

      {/* ── Gradient defs ── */}
      <defs>
        <linearGradient id="swooshBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  )
}
