const { goods, ClassicGood } = require('./goods-updates');
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
      const goods_categorie_bool = [];
      goods.some(({ good, callback }) => {
        const regEx = new RegExp(good, 'i');
        const bool = regEx.test(item.name);
        goods_categorie_bool.push(bool);
        if (bool)
          [item.sellIn, item.quality] = callback(item.sellIn, item.quality);
        return bool;
      });
      if (!goods_categorie_bool.includes(true))
        [item.sellIn, item.quality] = ClassicGood(item.sellIn, item.quality);
    });
  }
}
module.exports = {
  Item,
  Shop,
};
