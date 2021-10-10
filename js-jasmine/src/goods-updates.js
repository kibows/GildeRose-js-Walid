// This module permit to maintain goods uptades by dividing each category in a function
const ClassicGoodUpdate = (sellIn, quality) => {
  if (quality > 0) {
    return sellIn >= 0
      ? [sellIn - 1, quality - 1]
      : quality - 2 < 0
      ? [sellIn - 1, quality - 1]
      : [sellIn - 1, quality - 2];
  } else return [sellIn - 1, quality];
};
const SulfurasUpdate = (sellIn, quality) => {
  return [sellIn, quality];
};
const AgedBrieUpdate = (sellIn, quality) => {
  if (quality < 50) {
    return sellIn >= 0
      ? [sellIn - 1, quality + 1]
      : quality + 2 <= 50
      ? [sellIn - 1, quality + 2]
      : [sellIn - 1, quality + 1];
  } else return [sellIn - 1, quality];
};
const BackstageUpdate = (sellIn, quality) => {
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
const ConjuredUpdate = (sellIn, quality) => {
  if (quality > 0) {
    return sellIn >= 0
      ? [sellIn - 1, quality - 2]
      : quality - 4 < 0
      ? [sellIn - 1, quality - 2]
      : [sellIn - 1, quality - 4];
  } else return [sellIn - 1, quality];
};
// goods permit to link a good category to a specific update function
const goods = [
  { good: 'sulfuras', callback: SulfurasUpdate },
  { good: 'aged brie', callback: AgedBrieUpdate },
  { good: 'backstage passes', callback: BackstageUpdate },
  { good: 'conjured', callback: ConjuredUpdate },
];
module.exports = {
  goods,
  ClassicGoodUpdate,
};
