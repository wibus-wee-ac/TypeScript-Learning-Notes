/**
 * Demo5.ts
 * TypeScript 函数参数和返回类型定义
 * @date 2021-1-1
 * @author Wibus
 */


// 1 复习下demo4的getTotal
function LastgetTotal(one: number, two: number) {
    return one + two;
}
const LastTotal = LastgetTotal(1, 2);
//  代码其实有一个小坑，就是我们并没有定义getTotal的返回值类型，虽然TypeScript可以自己推断出返回值是number类型。 但是如果这时候我们的代码写错了，比如写程了下面这个样子。
function BadgetTotal(one: number, two: number) {
    return one + two + "";
  }
  
const Badtotal = BadgetTotal(1, 2); //这时候total的值就不是number类型了，但是不会报错。
// 1.1 某些人的解决办法
const SomePersontotal: number = BadgetTotal(1, 2); //这样写虽然可以让编辑器报错(不能将类型“string”分配给类型“number”。)，但是这还不是很高明的算法，因为你没有找到错误的根本

// 1.2 合适的做法是给函数的返回值加上类型注解

function BettergetTotal(one: number, two: number): number {
    return one + two;
}
const BetterTotal = BettergetTotal(1, 2);
//这段代码就比较严谨了

// 2 never 返回值类型
// 如果一个函数是永远也执行不完的，就可以定义返回值为never
function errorFuntion(): never {
    throw new Error();
    console.log("Hello World");
}
// 👆执行执行的时候，抛出了异常，这时候就无法执行完了

//void 无返回值类型
function avoid(): void {
    const a = 123
    //这个时候这个函数里面是不允许return一个值的
    return a;
}

function forNever(): never {
  while (true) {}
  console.log("Hello");
}
// ⬆️死循环，这样也运行不完