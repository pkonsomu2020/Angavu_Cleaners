export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cleaning team illustration"
      style={{ width: "100%", height: "100%" }}
    >
      {/* ── Background blobs ── */}
      <ellipse cx="370" cy="200" rx="130" ry="150" fill="#DBEAFE" opacity="0.6" />
      <ellipse cx="420" cy="310" rx="80" ry="60" fill="#BFDBFE" opacity="0.5" />

      {/* ══════════════════════════════
          PERSON 1 – Vacuuming (centre)
          ══════════════════════════════ */}
      {/* Vacuum cleaner body */}
      <ellipse cx="185" cy="320" rx="28" ry="20" fill="#94A3B8" stroke="#1E3A5F" strokeWidth="2" />
      <rect x="162" y="308" width="46" height="16" rx="8" fill="#CBD5E1" stroke="#1E3A5F" strokeWidth="2" />
      {/* Vacuum hose */}
      <path d="M208 314 Q240 290 260 260 Q278 235 285 218" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Vacuum wand */}
      <line x1="285" y1="218" x2="300" y2="190" stroke="#1E3A5F" strokeWidth="4" strokeLinecap="round" />
      {/* Vacuum head */}
      <rect x="295" y="186" width="24" height="8" rx="4" fill="#1E3A5F" />

      {/* Body – apron */}
      <rect x="260" y="200" width="50" height="80" rx="6" fill="#1D4ED8" />
      {/* Shirt under apron */}
      <rect x="252" y="195" width="66" height="90" rx="8" fill="#EFF6FF" />
      <rect x="260" y="205" width="50" height="70" rx="5" fill="#1D4ED8" />
      {/* Apron pocket */}
      <rect x="274" y="240" width="22" height="16" rx="3" fill="#2563EB" stroke="#1E3A5F" strokeWidth="1.5" />

      {/* Legs */}
      <rect x="263" y="278" width="18" height="55" rx="6" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="289" y="278" width="18" height="55" rx="6" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Shoes */}
      <ellipse cx="272" cy="334" rx="14" ry="7" fill="#1E3A5F" />
      <ellipse cx="298" cy="334" rx="14" ry="7" fill="#1E3A5F" />

      {/* Right arm holding wand */}
      <path d="M308 215 Q318 210 326 200 Q330 192 325 186" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M308 215 Q318 210 326 200 Q330 192 325 186" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Left arm down */}
      <path d="M262 215 Q248 230 245 248" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M262 215 Q248 230 245 248" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Head */}
      <circle cx="285" cy="180" r="24" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      {/* Hair */}
      <path d="M263 172 Q268 152 285 150 Q302 152 307 172" fill="#1E3A5F" />
      {/* Eyes */}
      <circle cx="277" cy="178" r="3" fill="#1E3A5F" />
      <circle cx="293" cy="178" r="3" fill="#1E3A5F" />
      {/* Smile */}
      <path d="M278 188 Q285 194 292 188" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ══════════════════════════════
          PERSON 2 – Dusting cabinet (left)
          ══════════════════════════════ */}
      {/* Cabinet */}
      <rect x="95" y="190" width="70" height="110" rx="4" fill="#F1F5F9" stroke="#1E3A5F" strokeWidth="2" />
      <line x1="130" y1="190" x2="130" y2="300" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="124" y="238" width="12" height="8" rx="4" fill="#94A3B8" />

      {/* Person body */}
      <rect x="152" y="210" width="44" height="75" rx="6" fill="#EFF6FF" />
      <rect x="158" y="218" width="32" height="62" rx="5" fill="#1D4ED8" />
      {/* Apron pocket */}
      <rect x="166" y="250" width="16" height="12" rx="2" fill="#2563EB" stroke="#1E3A5F" strokeWidth="1.5" />

      {/* Legs */}
      <rect x="160" y="283" width="14" height="50" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="180" y="283" width="14" height="50" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="167" cy="333" rx="11" ry="6" fill="#1E3A5F" />
      <ellipse cx="187" cy="333" rx="11" ry="6" fill="#1E3A5F" />

      {/* Right arm raised – duster */}
      <path d="M190 225 Q205 210 208 195" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M190 225 Q205 210 208 195" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Duster handle */}
      <line x1="208" y1="195" x2="215" y2="175" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      {/* Duster head */}
      <ellipse cx="218" cy="168" rx="14" ry="8" fill="#60A5FA" opacity="0.8" />
      <path d="M206 168 Q218 160 230 168" stroke="#1D4ED8" strokeWidth="2" fill="none" />

      {/* Left arm down */}
      <path d="M158 225 Q148 238 145 255" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M158 225 Q148 238 145 255" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Head */}
      <circle cx="174" cy="196" r="20" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      {/* Hair – ponytail */}
      <path d="M156 190 Q160 174 174 172 Q188 174 192 190" fill="#1E3A5F" />
      <path d="M190 185 Q198 188 194 198" stroke="#1E3A5F" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Eyes */}
      <circle cx="168" cy="195" r="2.5" fill="#1E3A5F" />
      <circle cx="180" cy="195" r="2.5" fill="#1E3A5F" />
      {/* Smile */}
      <path d="M169 204 Q174 208 179 204" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ══════════════════════════════
          PERSON 3 – Wiping table (right)
          ══════════════════════════════ */}
      {/* Table */}
      <rect x="355" y="258" width="100" height="10" rx="3" fill="#CBD5E1" stroke="#1E3A5F" strokeWidth="2" />
      <rect x="368" y="268" width="10" height="50" rx="3" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="430" y="268" width="10" height="50" rx="3" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Spray bottle on table */}
      <rect x="420" y="232" width="14" height="26" rx="3" fill="#60A5FA" stroke="#1E3A5F" strokeWidth="1.5" />
      <path d="M427 232 Q427 224 434 224 L440 224" stroke="#1E3A5F" strokeWidth="1.5" fill="none" />
      <line x1="420" y1="244" x2="434" y2="244" stroke="#1E3A5F" strokeWidth="1.5" />

      {/* Person body – bent forward */}
      <rect x="360" y="215" width="42" height="65" rx="6" fill="#EFF6FF" />
      <rect x="366" y="222" width="30" height="54" rx="5" fill="#1D4ED8" />

      {/* Legs */}
      <rect x="365" y="278" width="13" height="48" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="384" y="278" width="13" height="48" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="371" cy="327" rx="11" ry="6" fill="#1E3A5F" />
      <ellipse cx="390" cy="327" rx="11" ry="6" fill="#1E3A5F" />

      {/* Arms – wiping */}
      <path d="M394 232 Q410 238 420 248" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M394 232 Q410 238 420 248" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M366 232 Q355 240 350 255" stroke="#E2E8F0" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M366 232 Q355 240 350 255" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Head – looking down */}
      <circle cx="381" cy="202" r="20" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      {/* Hair */}
      <path d="M363 196 Q366 180 381 178 Q396 180 399 196" fill="#2D1B00" />
      {/* Eyes */}
      <circle cx="374" cy="202" r="2.5" fill="#1E3A5F" />
      <circle cx="386" cy="202" r="2.5" fill="#1E3A5F" />
      {/* Smile */}
      <path d="M375 210 Q381 215 387 210" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Floor line ── */}
      <line x1="80" y1="340" x2="480" y2="340" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="6 4" />

      {/* ── Sparkles / clean indicators ── */}
      <text x="108" y="160" fontSize="18" fill="#60A5FA" opacity="0.9">✦</text>
      <text x="450" y="170" fontSize="14" fill="#93C5FD" opacity="0.8">✦</text>
      <text x="240" y="145" fontSize="10" fill="#BFDBFE">✦</text>
    </svg>
  )
}
