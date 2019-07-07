// 型はUnion Typeで複数列挙できる
let birthYear: number | string;
birthYear = "1月"
birthYear = 1
//birthYear = false
// 型には値も設定できる
let food: "北極" | "冷やし味噌";



// 型はUnion Typeで複数列挙できる
type BirthYear = number | string;
// 型には値も設定できる
type FoodMenu = "北極" | "冷やし味噌";
// 変数や関数の引数で使える
const birthday: BirthYear = "平成";
food = "北極";
function orderFood(food: "北極" | "冷やし味噌") {
  console.log("\n// 型はUnion Typeで複数列挙できる");
  console.log(food);
}
orderFood(food);

//const food2 = "test"
//orderFood(food2);



type Person = {
  name: string;
  favoriteBank: string;
  favoriteGyudon?: string;
}
// 変数定義時にインタフェースを指定
const person: Person = {
  name: "Yoichi",
  favoriteBank: "Mizuho",
  favoriteGyudon: "Matsuya"
};



const postalCodes: { [key: string]: string } = {
  "602-0000": "京都市上京区",
  "602-0827": "京都市上京区相生町",
  "602-0828": "京都市上京区愛染寺町",
  "602-0054": "京都市上京区飛鳥井町",
};
console.log("\n//  { [key: キーの型]: 値の型} 、辞書。");
console.log(postalCodes["602-0054"]);



type Twitter = {
  twitterId: string;
}
type Instagram = {
  instagramId: string;
}
type SocialNetworkService = Twitter & Instagram;
const shibukawa: Twitter & Instagram = {
  twitterId: "@shibu_jp",
  instagramId: "shibukawa"
}
const tsukamoto: SocialNetworkService = {
  twitterId: "@tsuka_jp",
  instagramId: "tsukamoto"
}
console.log("\n// 型の合成");
console.log(shibukawa);
console.log(tsukamoto);



type Style = {
  color?: string;
  uncheckBgColor?: string;
  checkBgColor?: string;
}
type Column = {
  columnType: 'number' | 'check';
  caption: string;
  field: string;
  style: Style;
}



// userNameOrIdは文字列か数値
console.log("\n// userNameOrIdは文字列か数値");
let userNameOrId: string|number // = getUser();
if (typeof userNameOrId === "string") {
  // このif文の中では、userNameOrIdは文字列型として扱われる
  const user = userNameOrId.toUpperCase()
  console.log(user);
} else {
  // このif文の中では、userNameOrIdは数値型として扱われる
  const user = 123; //= userNameOrId.toPrecision();
  console.log(user);
}



// interface での型定義
interface Person2 {
  name: string;
  favoriteBank: string;
  favoriteGyudon?: string;
}
// 二つのインタフェースの継承でも表現できますが、あまり見かけたことはありません。
interface PartyPeople extends Twitter, Instagram {
}
const takayama: PartyPeople = {
  twitterId: "@shibu_jp",
  instagramId: "shibukawa"
}
console.log("\n //interface")
console.log(takayama);