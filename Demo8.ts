/**
 * Demo8.ts
 * TypeScript 的 interface 接口
 * @date 2021-1-2
 * @author Wibus
 * interface东西比较多，分两次讲述
 */

// 1 interface 接口初步了解

// 1.1 简历工具
const screenresume = (name: string, age: number, bust: number) => {
    age < 24 && bust >= 90 && console.log(name + "Pass");
    age > 24 || (bust < 90 && console.log(name + "Can't Pass"));
};

screenresume("Wibus", 14, 90);
// ts-node demo8.ts
// 进入面试


const getResume = (name: string, age: number, bust: number) => {
    console.log(name+ "age: " + age);
    console.log(name+ "Bust: " + bust);
}

// 但是似乎name: string, age: number, bust: number一直在出现
// 为了避免啊代码重用，我们可以使用接口

interface Girl {
    name: string;
    age: number;
    bust: number;
}
// 于是我们就需要修改一点程序
const screenresume2 = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "Pass");
    girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "Can't Pass"));
};

const getResume2 = (girl: Girl) => {
    console.log(girl.name+ "age: " + girl.age);
    console.log(girl.name+ "Bust: " + girl.bust);
};

const girl = {
    name: "Wibus",
    age: 14,
    bust: 94,
};

screenresume2(girl);
getResume2(girl);

// 2 接口和类型别名的区别

type Girl1 = string;

const girl1 = {
    name: "Wibus",
    age: 14,
    bust: 94 
};

// 3 接口非必选值定义

interface Girl2 {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 非必选值
}

const getResume3 = (girl: Girl2) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
};

//这时候在定义girl对象的时候，就可以写saistline（腰围），也可以不写了。
