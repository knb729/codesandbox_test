// /**
//  * const,letなどの変数宣言
//  */

// var val1 = "var変数";
// console.log(val1);

// val1 = "変数を上書き";
// console.log(val1);

// var val1 = "変数を最宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "変数を書き換える";
// console.log(val2);

// let val2 = "let変数を最宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3="const変数を書き換え"

// const val4 = {
//   name: "名前",
//   age: "４１"
// };

// console.log(val4);

// val4.name = "名前書き換え";
// val4.address="kanagawa";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("add");
// console.log(val5);

// //デフォルト値
// const sayHello = (name = "GUEST") => console.log(`こんにちは！${name}さん`);

// sayHello("knb");

// //配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1,num2) => console.log(num1+num2);

// //sumfunc(arr1[0],arr1[1]);

// sumfunc(...arr1);

//まとめる

// const arr2 = [1,2,3,4,5];

// const [num1,num2,...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4,...arr5];

// console.log(arr6);
