const personName: string = '小心者';
console.log(`Hello ${personName}!`);


// 何はともあれconst(変更がある変数はlet)
const dogType = "小動物";


let str: string;
str = 'tennis'
//str = 123


let favoriteFood: "北極" | "冷やし味噌";
favoriteFood = "冷やし味噌"
//favoriteFood = "味噌タンメン"


// 変数に代入。変数の型名はboolean
const flg: boolean = true;
// 他のデータ型への変換
console.log('\n// 他のデータ型への変換')
console.log(flg.toString()); // 'true' / 'false' になる
console.log(String(flg));    // こちらでも変換可能
console.log(Number(flg));    // 1, 0になる


// 変数に代入。型名を付けるときは配列に入れる要素の型名の後ろに[]を付与する
// 後ろの型が明確であれば型名は省略可能
const years: number[] = [2019, 2020, 2021];
const divs = ['tig', 'sig', 'saig', 'scig'];
// 配列に要素を追加。複数個も追加可能
years.push(2022);
years.push(2023, 2024);
// 要素から取り出し
console.log('\n// 要素から取り出し')
console.log(years);
console.log(divs)


const smalls = [
  "小動物",
  "小型車",
  "小論文"
];
// 新: まとめて取り出し
const [smallAnimal, smallCar, essay] = smalls;
console.log('\n// 新: まとめて取り出し')
console.log([smallAnimal, smallCar, essay])
// 新: 2番目以降の要素の取り出し
const [, ...other] = smalls;
console.log('\n// 新: 2番目以降の要素の取り出し')
console.log(other)


var iterable : string[]= ["小金井", "小淵沢", "小矢部"];
console.log('\n// 中: forEach()ループ')
iterable.forEach(value => {
  console.log(value);
});
//console.log('\n// 新: for ofループで配列のインデックスが欲しい')
//for (const [i, value] of iterable.entries()) {
//  console.log(i, value);
//}


// 定義はキー、コロン(:)、値を書く。要素間は改行
const key = 'favorite drink';
const smallAnimal2 = {
  name: "小動物",
  favorite: "小籠包",
  'home town': "神奈川県警のいるところ",
  [key]: "ストロングゼロ"
};
// 参照は `.`+名前、もしくは [名前]
console.log('// 参照は `.`+名前、もしくは [名前]')
console.log(smallAnimal2.name); // 小動物
console.log(smallAnimal2[key]); // ストロングゼロ
console.log(smallAnimal2);


// 新: Mapを利用
// ``<キーの型、 値の型>`` で明示的に型を指定すると
// ``set()`` 時に型違いのデータを入れようとするとチェックできるし、
// ループなどで値を取り出しても型情報が維持されます
const map = new Map<string, string>([
  ["五反田", "約束の地"],
  ["戸越銀座", "TGSGNZ"]
]);
console.log('// 新: Mapを利用')
for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}