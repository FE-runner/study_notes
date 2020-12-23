// 创建型
// 工厂模式
// 简单工厂
{
  class Pet {
    constructor(props) {
      this.species = props.species;
      this.sound = this.sound;
    }
  }
  function getProps(pet) {
    switch (pet) {
      case 'dog':
        return new Pet({ species: 'dog', sound: 'woof' });
      case 'cat':
        return new Pet({ species: 'cat', sound: 'meow' });
      case 'bird':
        return new Pet({ species: 'bird', sound: 'chriping' });
    }
  }
}
// 工厂方法
{
  class Pet {
    constructor(props) {
      this.species = this.species;
      this.sound = this.sound;
    }
  }
  class PetShop extends Pet {
    constructor(species, sound) {
      super(species, sound);
    }
    create(pet) {
      switch (pet) {
        case 'dog':
          return new Pet({ species: 'dog', sound: 'woof' });
        case 'cat':
          return new Pet({ species: 'cat', sound: 'meow' });
        case 'bird':
          return new Pet({ species: 'bird', sound: 'chriping' });
      }
    }
  }
  let thePetShop = new PetShop();
  let shopDog = thePetShop.create('dog');
}
// 单例模式
{
  class Single {
    getSingle(fn) {
      let result;
      return () => {
        return result || (result = fn.apply(this, arguments));
      };
    }
  }
  let single = new Single();
  single.getSingle(() => {
    console.log('SSS');
  });
}
// 原型模式
{
  let prototype = {
    name: 'Reaper',
    getName: () => {
      return this.name;
    },
  };
  let obj = Object.create(prototype, {
    skill: {
      value: 'fe',
    },
  });
}
// 结构型
// 适配器模式
{
  class ThinkPad {
    charge() {
      console.log('ThinkPad 开始充电');
    }
  }

  class MacBook {
    type_cCharge() {
      console.log('MacBook 开始充电');
    }
  }

  class classTypeCDp {
    charge() {
      let macbook = new MacBook();
      return macbook.type_cCharge();
    }
  }
  function PowerToCharge(laptop) {
    if (laptop.charge instanceof Function) {
      laptop();
    }
    PowerToCharge(new ThinkPad());
    PowerToCharge(new classTypeCDp());
  }
}
// 代理模式
{
  class Bags {
    constructor(props) {
      this.name = props.name;
    }
    getName() {
      return this.name;
    }
  }
  class Star {
    bugBag(bag) {
      console.log(`买到了一个${bag.getName()}包`);
    }
  }
  class Asssistant {
    constructor(props) {
      this.star = props;
    }
    bugBag(bag) {
      this.star.bugBag(bag);
    }
  }
  let star = new Star();
  star.bugBag(new Bags('Coach'));
  let assistant = new Asssistant(star);
  assistant.bugBag(new Bags('Coach'));
}
