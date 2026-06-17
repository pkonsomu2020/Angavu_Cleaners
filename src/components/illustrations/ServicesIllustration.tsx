// Illustration of a person mopping the floor
export function MoppingIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mopping illustration">
      {/* Blob background */}
      <ellipse cx="110" cy="110" rx="80" ry="70" fill="#DBEAFE" opacity="0.5" />
      {/* Mop handle */}
      <line x1="90" y1="50" x2="130" y2="155" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      {/* Mop head */}
      <ellipse cx="133" cy="162" rx="18" ry="7" fill="#60A5FA" opacity="0.7" />
      <path d="M116 162 Q133 155 150 162" stroke="#1D4ED8" strokeWidth="2" fill="none" />
      {/* Body */}
      <rect x="68" y="95" width="38" height="60" rx="6" fill="#EFF6FF" />
      <rect x="74" y="102" width="26" height="48" rx="4" fill="#1D4ED8" />
      {/* Legs */}
      <rect x="75" y="153" width="12" height="36" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="93" y="153" width="12" height="36" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="81" cy="189" rx="10" ry="5" fill="#1E3A5F" />
      <ellipse cx="99" cy="189" rx="10" ry="5" fill="#1E3A5F" />
      {/* Arms */}
      <path d="M74 108 Q60 118 55 132" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M74 108 Q60 118 55 132" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M100 108 Q110 100 108 88" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M100 108 Q110 100 108 88" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Head */}
      <circle cx="87" cy="78" r="18" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M70 72 Q73 58 87 56 Q101 58 104 72" fill="#1E3A5F" />
      <circle cx="81" cy="78" r="2" fill="#1E3A5F" />
      <circle cx="93" cy="78" r="2" fill="#1E3A5F" />
      <path d="M82 86 Q87 90 92 86" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Floor line */}
      <line x1="30" y1="195" x2="170" y2="195" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  )
}

// Illustration of a person scrubbing / deep cleaning
export function DeepCleanIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Deep cleaning illustration">
      <ellipse cx="105" cy="115" rx="75" ry="65" fill="#DBEAFE" opacity="0.5" />
      {/* Bucket */}
      <path d="M60 160 L65 195 L95 195 L100 160 Z" fill="#60A5FA" stroke="#1E3A5F" strokeWidth="2" />
      <ellipse cx="80" cy="160" rx="20" ry="7" fill="#93C5FD" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Bubbles */}
      <circle cx="72" cy="152" r="4" fill="none" stroke="#1D4ED8" strokeWidth="1.5" />
      <circle cx="84" cy="146" r="3" fill="none" stroke="#1D4ED8" strokeWidth="1.5" />
      <circle cx="78" cy="140" r="2" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      {/* Person kneeling */}
      <rect x="105" y="95" width="40" height="60" rx="6" fill="#EFF6FF" />
      <rect x="111" y="102" width="28" height="48" rx="4" fill="#1D4ED8" />
      {/* Kneeling legs */}
      <path d="M110 153 Q105 170 115 185" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M110 153 Q105 170 115 185" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M130 153 Q135 170 125 185" stroke="#E2E8F0" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M130 153 Q135 170 125 185" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arms – reaching down to scrub */}
      <path d="M111 110 Q95 120 88 138" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M111 110 Q95 120 88 138" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Scrub brush */}
      <rect x="78" y="138" width="20" height="10" rx="3" fill="#F8FAFC" stroke="#1E3A5F" strokeWidth="1.5" />
      <line x1="82" y1="148" x2="82" y2="154" stroke="#94A3B8" strokeWidth="2" />
      <line x1="87" y1="148" x2="87" y2="154" stroke="#94A3B8" strokeWidth="2" />
      <line x1="92" y1="148" x2="92" y2="154" stroke="#94A3B8" strokeWidth="2" />
      {/* Right arm */}
      <path d="M143 110 Q155 115 158 128" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M143 110 Q155 115 158 128" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Head */}
      <circle cx="125" cy="78" r="18" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M108 72 Q112 58 125 56 Q138 58 142 72" fill="#2D1B00" />
      <circle cx="119" cy="78" r="2" fill="#1E3A5F" />
      <circle cx="131" cy="78" r="2" fill="#1E3A5F" />
      <path d="M120 87 Q125 91 130 87" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// Two cleaners standing together with broom & mop
export function TeamIllustration() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Cleaning team illustration">
      {/* Orange blob background */}
      <ellipse cx="160" cy="160" rx="105" ry="120" fill="#DBEAFE" opacity="0.5" />
      <ellipse cx="185" cy="230" rx="70" ry="50" fill="#BFDBFE" opacity="0.4" />

      {/* ── Person 1 (left) with broom ── */}
      {/* Broom handle */}
      <line x1="68" y1="68" x2="85" y2="230" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      {/* Broom head */}
      <path d="M70 230 Q85 222 100 230 Q85 238 70 230 Z" fill="#60A5FA" />
      <line x1="72" y1="230" x2="68" y2="245" stroke="#60A5FA" strokeWidth="3" />
      <line x1="79" y1="233" x2="76" y2="248" stroke="#60A5FA" strokeWidth="3" />
      <line x1="86" y1="234" x2="84" y2="249" stroke="#60A5FA" strokeWidth="3" />
      <line x1="93" y1="233" x2="92" y2="248" stroke="#60A5FA" strokeWidth="3" />
      <line x1="100" y1="230" x2="100" y2="245" stroke="#60A5FA" strokeWidth="3" />

      {/* Body */}
      <rect x="74" y="138" width="42" height="70" rx="6" fill="#EFF6FF" />
      <rect x="80" y="145" width="30" height="58" rx="5" fill="#1D4ED8" />
      {/* Legs */}
      <rect x="82" y="206" width="13" height="55" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="100" y="206" width="13" height="55" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="88" cy="262" rx="12" ry="6" fill="#1E3A5F" />
      <ellipse cx="106" cy="262" rx="12" ry="6" fill="#1E3A5F" />
      {/* Left arm on broom */}
      <path d="M80 152 Q70 160 68 175" stroke="#E2E8F0" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M80 152 Q70 160 68 175" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right arm */}
      <path d="M110 152 Q122 158 125 170" stroke="#E2E8F0" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M110 152 Q122 158 125 170" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Head */}
      <circle cx="95" cy="118" r="21" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M76 110 Q80 94 95 92 Q110 94 114 110" fill="#1E3A5F" />
      <circle cx="88" cy="118" r="2.5" fill="#1E3A5F" />
      <circle cx="102" cy="118" r="2.5" fill="#1E3A5F" />
      <path d="M89 128 Q95 133 101 128" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Person 2 (right) with mop ── */}
      {/* Mop handle */}
      <line x1="198" y1="65" x2="185" y2="228" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      {/* Mop head */}
      <ellipse cx="183" cy="234" rx="18" ry="8" fill="#93C5FD" />
      <line x1="168" y1="234" x2="165" y2="248" stroke="#93C5FD" strokeWidth="3" />
      <line x1="175" y1="238" x2="173" y2="252" stroke="#93C5FD" strokeWidth="3" />
      <line x1="183" y1="240" x2="182" y2="254" stroke="#93C5FD" strokeWidth="3" />
      <line x1="191" y1="238" x2="191" y2="252" stroke="#93C5FD" strokeWidth="3" />
      <line x1="198" y1="234" x2="200" y2="248" stroke="#93C5FD" strokeWidth="3" />

      {/* Body */}
      <rect x="152" y="138" width="44" height="70" rx="6" fill="#EFF6FF" />
      <rect x="158" y="145" width="32" height="58" rx="5" fill="#1D4ED8" />
      {/* Legs */}
      <rect x="160" y="206" width="13" height="55" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="180" y="206" width="13" height="55" rx="5" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="166" cy="262" rx="12" ry="6" fill="#1E3A5F" />
      <ellipse cx="186" cy="262" rx="12" ry="6" fill="#1E3A5F" />
      {/* Left arm */}
      <path d="M158 152 Q146 158 143 170" stroke="#E2E8F0" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M158 152 Q146 158 143 170" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right arm on mop handle */}
      <path d="M188 152 Q198 160 200 172" stroke="#E2E8F0" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M188 152 Q198 160 200 172" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Head – female, ponytail */}
      <circle cx="174" cy="118" r="21" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M155 110 Q158 94 174 92 Q190 94 193 110" fill="#2D1B00" />
      <path d="M192 106 Q200 110 196 122" stroke="#2D1B00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="167" cy="118" r="2.5" fill="#1E3A5F" />
      <circle cx="181" cy="118" r="2.5" fill="#1E3A5F" />
      <path d="M168 128 Q174 133 180 128" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Floor line */}
      <line x1="30" y1="270" x2="250" y2="270" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="5 4" />
      {/* Sparkles */}
      <text x="42" y="100" fontSize="16" fill="#60A5FA" opacity="0.8">✦</text>
      <text x="220" y="95" fontSize="12" fill="#93C5FD" opacity="0.7">✦</text>
      <text x="135" y="72" fontSize="10" fill="#BFDBFE">✦</text>
    </svg>
  )
}

// Kitchen cleaning illustration
export function KitchenCleanIllustration() {
  return (
    <svg viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kitchen cleaning illustration">
      {/* Orange-ish blob (adapted to blue for brand) */}
      <ellipse cx="175" cy="100" rx="80" ry="90" fill="#DBEAFE" opacity="0.6" />
      {/* Counter / cabinet */}
      <rect x="90" y="130" width="140" height="15" rx="3" fill="#CBD5E1" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="90" y="145" width="140" height="55" rx="3" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <line x1="162" y1="145" x2="162" y2="200" stroke="#CBD5E1" strokeWidth="2" />
      <rect x="118" y="166" width="16" height="10" rx="5" fill="#94A3B8" />
      <rect x="178" y="166" width="16" height="10" rx="5" fill="#94A3B8" />

      {/* Person 1 – leaning on counter scrubbing */}
      <rect x="96" y="75" width="38" height="60" rx="5" fill="#EFF6FF" />
      <rect x="102" y="82" width="26" height="48" rx="4" fill="#1D4ED8" />
      {/* Arms on counter */}
      <path d="M102 90 Q88 105 86 122" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M102 90 Q88 105 86 122" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M126 90 Q140 100 142 118" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M126 90 Q140 100 142 118" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <rect x="104" y="133" width="11" height="42" rx="4" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <rect x="120" y="133" width="11" height="42" rx="4" fill="#E2E8F0" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="109" cy="176" rx="9" ry="5" fill="#1E3A5F" />
      <ellipse cx="125" cy="176" rx="9" ry="5" fill="#1E3A5F" />
      {/* Head */}
      <circle cx="115" cy="58" r="18" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M99 52 Q102 38 115 36 Q128 38 131 52" fill="#1E3A5F" />
      <circle cx="109" cy="58" r="2" fill="#1E3A5F" />
      <circle cx="121" cy="58" r="2" fill="#1E3A5F" />
      <path d="M110 67 Q115 71 120 67" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Person 2 – kneeling, cleaning lower cabinet */}
      <rect x="170" y="90" width="36" height="50" rx="5" fill="#EFF6FF" />
      <rect x="176" y="97" width="24" height="40" rx="4" fill="#1D4ED8" />
      {/* Kneeling */}
      <path d="M175 138 Q168 155 175 168" stroke="#E2E8F0" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M175 138 Q168 155 175 168" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M193 138 Q200 155 193 168" stroke="#E2E8F0" strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M193 138 Q200 155 193 168" stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Arm with cloth */}
      <path d="M176 105 Q162 115 158 130" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M176 105 Q162 115 158 130" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <rect x="148" y="128" width="16" height="8" rx="2" fill="#60A5FA" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Right arm */}
      <path d="M204 105 Q215 110 218 122" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M204 105 Q215 110 218 122" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Bucket */}
      <path d="M212 148 L216 178 L234 178 L238 148 Z" fill="#60A5FA" stroke="#1E3A5F" strokeWidth="1.5" />
      <ellipse cx="225" cy="148" rx="13" ry="5" fill="#93C5FD" stroke="#1E3A5F" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="188" cy="74" r="17" fill="#FDDCB5" stroke="#1E3A5F" strokeWidth="2" />
      <path d="M172 68 Q176 54 188 53 Q200 54 204 68" fill="#2D1B00" />
      <path d="M203 64 Q210 68 207 78" stroke="#2D1B00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="182" cy="74" r="2" fill="#1E3A5F" />
      <circle cx="194" cy="74" r="2" fill="#1E3A5F" />
      <path d="M183 82 Q188 86 193 82" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
