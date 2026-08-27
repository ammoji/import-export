import type { Market } from "./types";
import { px, photos } from "./images";

/**
 * Export markets. Sri Lanka is the current focus market.
 * Copy is PLACEHOLDER and to be replaced before launch.
 */
export const markets: Market[] = [
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    flag: "🇱🇰",
    focus: true,
    image: px(photos.colombo, 1000),
    // [Placeholder]
    blurb: "Our current focus market, with regular supply and dedicated rates.",
    points: [
      "Regular supply capability",
      "Competitive pricing",
      "Consistent quality",
      "Custom packaging options",
      "Full documentation support",
    ],
  },
  {
    slug: "myanmar",
    name: "Myanmar",
    flag: "🇲🇲",
    image: px(photos.myanmar, 800),
    // [Placeholder]
    blurb: "Steady demand across wholesale and processing buyers.",
  },
  {
    slug: "uae",
    name: "UAE",
    flag: "🇦🇪",
    image: px(photos.dubai, 800),
    // [Placeholder]
    blurb: "A key re-export and distribution hub for the wider Gulf region.",
  },
  {
    slug: "bangladesh",
    name: "Bangladesh",
    flag: "🇧🇩",
    image: px(photos.dhaka, 800),
    // [Placeholder]
    blurb: "High-volume market for everyday staples and commodities.",
  },
  {
    slug: "africa",
    name: "Africa",
    flag: "🌍",
    image: px(photos.africa, 800),
    // [Placeholder]
    blurb: "Growing demand across East and West African markets.",
  },
  {
    slug: "others",
    name: "Others",
    flag: "🌐",
    image: px(photos.portContainers, 800),
    // [Placeholder]
    blurb: "Shipping elsewhere? Tell us your destination and we'll quote.",
  },
];

export function getMarket(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}
