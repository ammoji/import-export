/**
 * Placeholder photography (Pexels CDN).
 *
 * These are free stock photos used until the business supplies owned imagery.
 * To swap in real photos, drop files in /public and replace these URLs (or the
 * `heroImage`/gallery `src` values that reference them).
 *
 * `px(id)` builds a Pexels CDN URL at a sensible size/quality for the web.
 */
export function px(id: number, width = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${Math.round(
    (width * 3) / 4
  )}&fit=crop`;
}

/** Named photos used across the site (Pexels photo IDs). */
export const photos = {
  spices: 5336701,
  fruitsVegetables: 37838871,
  grainsPulses: 32506154,
  dryFruitsNuts: 5202093,
  textiles: 18359539,
  handicrafts: 31203865,
  port: 30115463,
  cranes: 36694994,
  warehouse: 36398150,
} as const;
