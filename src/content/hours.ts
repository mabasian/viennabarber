export type DayHours = {
  weekday: number // 0 = Sonntag … 6 = Samstag (Date.getDay())
  label: string
  open: string
  close: string
  closed?: boolean
}

export const openingHours: DayHours[] = [
  { weekday: 1, label: 'Montag', open: '09:00', close: '19:00' },
  { weekday: 2, label: 'Dienstag', open: '09:00', close: '19:00' },
  { weekday: 3, label: 'Mittwoch', open: '09:00', close: '19:00' },
  { weekday: 4, label: 'Donnerstag', open: '09:00', close: '20:00' },
  { weekday: 5, label: 'Freitag', open: '09:00', close: '20:00' },
  { weekday: 6, label: 'Samstag', open: '09:00', close: '17:00' },
  { weekday: 0, label: 'Sonntag', open: '', close: '', closed: true },
]
