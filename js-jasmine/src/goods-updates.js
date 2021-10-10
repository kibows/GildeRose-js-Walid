const ClassicGood = (sellIn, quality) => {
  if (quality > 0) {
    return sellIn >= 0
      ? [sellIn - 1, quality - 1]
      : quality - 2 < 0
      ? [sellIn - 1, quality - 1]
      : [sellIn - 1, quality - 2];
  } else return [sellIn - 1, quality];
};
const Sulfuras = (sellIn, quality) => {
  return [sellIn, quality];
};
const AgedBrie = (sellIn, quality) => {
  if (quality < 50) {
    return sellIn >= 0
      ? [sellIn - 1, quality + 1]
      : quality + 2 <= 50
      ? [sellIn - 1, quality + 2]
      : [sellIn - 1, quality + 1];
  } else return [sellIn - 1, quality];
};
const Backstage = (sellIn, quality) => {
  if (sellIn > 10) {
    return quality + 1 <= 50
      ? [sellIn - 1, quality + 1]
      : [sellIn - 1, quality];
  }
  if (5 < sellIn && sellIn <= 10) {
    return quality + 2 <= 50
      ? [sellIn - 1, quality + 2]
      : [sellIn - 1, quality + (50 - quality)];
  }
  if (0 < sellIn && sellIn <= 5) {
    return quality + 3 <= 50
      ? [sellIn - 1, quality + 3]
      : [sellIn - 1, quality + (50 - quality)];
  }
  if (sellIn <= 0) return [sellIn - 1, quality - quality];
};
const Conjured = (sellIn, quality) => {
  if (quality > 0) {
    return sellIn >= 0
      ? [sellIn - 1, quality - 2]
      : quality - 4 < 0
      ? [sellIn - 1, quality - 2]
      : [sellIn - 1, quality - 4];
  } else return [sellIn - 1, quality];
};
const goods = [
  { good: 'sulfuras', callback: Sulfuras },
  { good: 'aged brie', callback: AgedBrie },
  { good: 'backstage passes', callback: Backstage },
  { good: 'conjured', callback: Conjured },
];
module.exports = {
  goods,
  ClassicGood,
};
