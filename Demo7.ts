/**
 * Demo7.ts
 * TypeScript 元组的使用和类型约束
 * @date 2021-1-2
 * @author Wibus
 */

//元组是TS特有的一个概念，JavaScript并没有这个概念

// 1 元组的基本使用
const xiaojiejie = ["Qwq", "NoJob", 28];
// 把上面的进行类型注解
const zhujie_xiaojiejie : (number | string)[] = ["Qwq", "NoJob", 28];
// 这个时候你已经添加了类型注解，但是在下面的代码当中会有一个小细节问题
const Badxiaojiejie: (number | string)[] = ["Qwq", 28, "NoJob"];
//我们只是把数组的位置调换了一下，但是TS并不能发现这个问题，所以我们需要一个更强大的类型，来解决，所以，这就是元组
const Shuzu_xiaojiejie: [string, string, number] = ["Qwq", "NoJob", 28];
// 这个时候我们就已经把每一个类型都固定住了

// 2 元组的使用

// 得到的数据源是这样子的：
// "dajiao", "teacher", 28;
// "liuying", "teacher", 18;
// "cuihua", "teacher", 25;

const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];

// 你要搞清楚元组和数组的区别，在理解后能在项目中适当的时候使用不同的类型。