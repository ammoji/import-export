/**
 * Placeholder photography (Pexels CDN).
 *
 * Free stock photos used until Farm to World supplies owned imagery. To swap in
 * real photos, drop files in /public and replace these URLs (or the
 * `image`/gallery `src` values that reference them).
 *
 * `px(id)` builds a Pexels CDN URL at a sensible size/quality for the web.
 */
export function px(id: number, width = 900): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Named photos used across the site (Pexels photo IDs). */
export const photos = {
  // Products (pulses / dal)
  blackEyePea: 3671651,
  greenMoong: 7420816,
  toorDal: 34940646,
  kabuliChana: 7382975,
  uradDal: 35553040,
  masoorDal: 34693984,
  chanaDal: 10111952,
  variety: 34854617,
  // Markets & logistics
  colombo: 33511844,
  dubai: 36339276,
  myanmar: 5538679,
  dhaka: 35097973,
  africa: 31875549,
  shipSunset: 30261110,
  portContainers: 33586980,
  warehouse: 36398150,
  port: 30115463,
} as const;
