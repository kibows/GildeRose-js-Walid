const { goods, ClassicGoodUpdate } = require('./goods-updates');
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.map((item) => {
      const goods_category_bool = []; // Check if goods belongs to a category.
      goods.some(({ good, callback }) => {
        const regEx = new RegExp(good, 'i');
        const bool = regEx.test(item.name);
        goods_category_bool.push(bool);
        if (bool)
          [item.sellIn, item.quality] = callback(item.sellIn, item.quality);
        return bool;
      });
      if (!goods_category_bool.includes(true))
        [item.sellIn, item.quality] = ClassicGoodUpdate(item.sellIn, item.quality);
    });
  }
}
module.exports = {
  Item,
  Shop,
};
