/**
 * Demo6.ts
 * TypeScript 中数组类型的定义
 * @date 2021-1-2
 * @author wibus
 */

// 1 一般数组类型的定义
const numberArr = [1,2,3];
// 这是最简单的数组类型（number) 当你鼠标放上变量名时，就可以看得出来是number类型（类型推断）
const numberArr2: number[] = [1,2,3];
// 类型注解
const stringArr: string[] = ["a","b","c"];
// 所以说你可以定义任何类型的数组
const undefinedArr: undefined[] = [undefined, undefined];
// 1.1 多种数据类型
const arr: (number|string)[] = [1,2,"abc"];
// 数组简单类型定义就这样了，其实不难

// 2 数组中对象类型的定义
// 在实际项目当中肯定会有对象出现，那这个时候定义的话就麻烦一点点了

const xiaoJieJiesDemo6: {name: string, age: number}[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
//这样子的形式看起来比较复杂，当然这段程序是可以的，但是不好读嘛

// 2.1 Type Alias 类型别名

type lady = {name: string, age: number};
const GoodxiaoJieJiesDemo6: lady[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},
];
//这样子就好读多了

// 2.2 使用class
// 当然，使用class来定义也是可以的，例如这样子
class ladys{
    name: string;
    age: number;
};
const GoodxiaoJieJiesDemo6_2: ladys[] = [
    {name: "Ming", age: 15},
    {name: "Wibus", age: 14},   
]
// 我们可以看到，是可以的~