/**
 * Placeholder photography (Pexels CDN).
 *
 * Free stock photos used until Farms2World supplies owned imagery. To swap in
 * real photos, drop files in /public and replace these URLs (or the `image`
 * values in content/products.ts & content/categories.ts).
 *
 * `px(id)` builds a Pexels CDN URL at a sensible size/quality for the web.
 */
export function px(id: number, width = 900): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Named photos used across the site (Pexels photo IDs). */
export const photos = {
  // Grains & Pulses
  toorDal: 34940646,
  chanaDal: 10111952,
  masoorDal: 34693984,
  greenMoong: 7420816,
  uradDal: 35553040,
  kabuliChana: 7382975,
  blackEyePea: 3671651,
  variety: 34854617,
  // Spices
  turmeric: 4198933,
  cumin: 6310161,
  coriander: 5502773,
  redChilli: 30688211,
  blackPepper: 5988689,
  nutmeg: 35339664,
  // "Other …" assortment shots
  assortedSpices: 5740453,
  assortedVeg: 12974968,
  assortedTextile: 36501061,
  assortedHandicraft: 37076597,
  // Fruits & Vegetables
  onions: 28910277,
  potatoes: 13274212,
  mangoes: 7543212,
  bananas: 18312159,
  // Dry Fruits & Nuts
  cashews: 32559145,
  almonds: 4033323,
  raisins: 6086004,
  pistachios: 8524110,
  dates: 36710306,
  nutsMix: 5202093,
  // Textiles
  cottonFabric: 36226281,
  garments: 17293347,
  homeTextiles: 32795059,
  cottonYarn: 6634699,
  scarves: 30447648,
  // Handicrafts
  pottery: 31203865,
  brass: 33030620,
  woodcraft: 37870822,
  jute: 21958121,
  rug: 33653807,
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
