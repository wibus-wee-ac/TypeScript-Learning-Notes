/**
 * Demo3.ts
 * 基础静态类型和对象类型
 * @Date 2021-1-1
 * @author Wibus
 */


// 基础静态类型
const counter : number = 918;
const myName : string = "Wibus";
// null,undefinde,symbol,boolean，void这些都是最常用的基础数据类型

// 对象类型
// 1 🌰
const xiaoGeGe: {
    name: string, //字符串类型
    age: number, //常数类型
  } = {
    name: "Wibus", //对应的数据
    age: 14,
  };
  console.log(xiaoGeGe.name);
// ts-node Demo3.ts Result: Wibus
// 这就是一个经典的对象类型，也是最简单的对象类型。

// 2 🌰 对象类型也可以是数组
const xiaoJieJies : string[] = ["Awa", "Qwq", "老婆"]; 
// 这时候的意思是，变量xiaoJieJies必须是一个数组，数组里的内容必须是字符串。你可以试着把字符串改为数字，VSCode会直接给我们报错。
// ⚠️错误示范
const ErrorxiaoJieJies : string[] = [123, "Qwq", "老婆"]; //VSC将会直接报错
// const BetterxiaoJieJies: (string|number)[] = [123, "Qwq", "老婆"]; 这个在后面的文件中有提到

// 3 类

class Person {} //定义一个Person类
const Js: Person = new Person(); // 这个意思就是Js必须是一个Person类对应的对象才可以
// 我们还可以定义一个函数类型，并确定返回值
const Wibus : () => string = () => {
    return "I'm Wibus";
};
/**
 * 对象类型可以有几种形式：
 * 对象类型
 * 数组类型
 * 类类型
 * 函数类型
 * 这几种形式在TypeScript里叫做对象类型。
 */