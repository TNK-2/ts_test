// 新しいクラス表現
class SmallAnimal {
  // プロパティは名前: 型
  animaltype: string;
  // コストラクタ（省略可能）
  constructor() {
    this.animaltype = "ポメラニアン";
  }
  say() {
    console.log("\n// 最初のクラス定義")
    console.log(`${this.animaltype}だけどMSの中に永らく居たBOM信者の全身の毛をむしりたい`);
  }
}
const smallAnimal3 = new SmallAnimal();
smallAnimal3.say();



// 小型犬
class SmallDog {
  // プライベートプロパティ
  private secretPlace: string;
  dig(): string {
    return this.secretPlace;
  }
  // 埋める
  bury(treasure: string) {
    this.secretPlace = treasure;
  }
}
const miniatureDachshund = new SmallDog();
// 埋めた
miniatureDachshund.bury("骨");
// アクセスするとエラー
// miniatureDachshund.secretPlace;
// 掘り出した
console.log("\n// private定義")
console.log(miniatureDachshund.dig()); // 骨



// 小型犬
class SmallDog2 {
  // 静的なプロパティ
  static staticVariable: number;
  // 読み込み専用プロパティ
  readonly carrier: string;
  constructor(private secretPlace: string) {
  }
  dig(): string {
    return this.secretPlace;
  }
  // 埋める
  bury(treasure: string) {
    this.secretPlace = treasure;
  }
}
const miniatureDachshund2 = new SmallDog2("フリスビー");
// 掘り出した
console.log("\n// コンストラクタ定義")
console.log(miniatureDachshund2.dig()); // フリスビー



class SmallAnimal3 {
  eat() {
    console.log("中本を食べに行きました");
  }
}
class Pomeranian extends SmallAnimal3 {
  eat() {
    console.log("シュークリームを食べに行きました");
  }
}



interface Animal {
  eat();
}
class SmallAnimal4 implements Animal {
  eat() {
    console.log("中本を食べに行きました");
  }
}