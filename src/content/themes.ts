// Theme-Metadaten NUR für die Switcher-UI (Demo/Präsentation).
// Die echten Farbwerte liegen als CSS-Variablen in app/globals.css ([data-theme="…"]).
export type ThemeId =
  | 'midnight-gold'
  | 'espresso-steel'
  | 'vienna-bronze'
  | 'graphite-luxe'
  | 'royal-burgundy'

export type ThemeMeta = {
  id: ThemeId
  name: string
  mood: string
  // Vorschau: [Hintergrund, Fläche, Akzent]
  swatches: [string, string, string]
}

export const themes: ThemeMeta[] = [
  { id: 'midnight-gold', name: 'Midnight Gold', mood: 'Nachtblau & warmes Gold', swatches: ['#0B0D12', '#14171F', '#C9A227'] },
  { id: 'espresso-steel', name: 'Espresso Steel', mood: 'Espresso & kühler Stahl', swatches: ['#15110D', '#1F1A15', '#9FB1BC'] },
  { id: 'vienna-bronze', name: 'Vienna Bronze', mood: 'Dunkelbraun & Bronze', swatches: ['#100C0A', '#1B1410', '#C17C3F'] },
  { id: 'graphite-luxe', name: 'Graphite Luxe', mood: 'Graphit & Platin', swatches: ['#121315', '#1C1E22', '#C9CDD3'] },
  { id: 'royal-burgundy', name: 'Royal Burgundy', mood: 'Pflaume & Wein', swatches: ['#120A0C', '#1D1013', '#A83347'] },
]

export const DEFAULT_THEME: ThemeId = 'midnight-gold'
export const THEME_STORAGE_KEY = 'viennabarber-demo-theme'
