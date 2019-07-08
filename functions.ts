// 基本形
// (arg1, arg2) => { /* 式 */ };

// 引数が1つの場合は引数のカッコを省略できる
// ただし型を書くとエラーになる
// arg1 => { /* 式 */ };

// 引数が0の場合はカッコが必要
// () => { /* 式 */ };

// 式の { } を省略すると、式の結果が return される
// arg => arg * 2;

// { } をつける場合は、値を返すときは return を書かなければならない
// arg => {
//   return arg * 2;
// };



// 昔からあるfunctionの引数に型付け。書く引数の後ろに型を書く。
// 返り値は引数リストの () の後に書く。
function checkFlag(flag: boolean): string {
  console.log(flag);
  return "check done";
}
// アロー関数も同様
const normalizeStr = (input: string): string => {
  return input.toLowerCase();
}
console.log("\n// 基本的な関数")
console.log(checkFlag(true));
console.log(normalizeStr("STRING"))



function hello(): void {
  console.log("ごきげんよう");
}
interface Greeter {
  // noImplicitAny: trueだとエラー
  // error TS7010: 'hello', which lacks return-type annotation,
  //    implicitly has an 'any' return type.
  hello();
}



function sort(a: string[], conv: (value: string) => string) {
  const entries = a.map((value) => [value, conv(value)])
  entries.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  return entries.map(entry => entry[0]);
}
const a: string[] = ["a", "B", "D", "c"];
console.log("\n// 関数を扱う変数の型定義")
console.log(sort(a, s => s.toLowerCase()))
// ["a", "B", "c", "D"]



// 新しいデフォルト引数
const f = (name="小動物", favorite="小豆餅") => {
  console.log("\n // デフォルト引数")
  console.log(`${name}は${favorite}が好きです`);
}
f(); // 省略して呼べる



// 新: オブジェクトの関数
//     functionを省略
//     setter/getterも簡単に
const miniAnimal = {
  getName() {
    return "小動物"
  },
  _favorite: "小笠原",
  get favorite() {
    return this._favorite;
  },
  set favorite(favorite) {
    this._favorite = favorite;
  }
};
console.log("\n// 新オブジェクト定義")
console.log(miniAnimal.getName())