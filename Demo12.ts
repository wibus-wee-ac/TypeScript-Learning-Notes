/**
 * Demo12.ts
 * TypeScript 类的构造函数
 * @date 2021-1-3
 * @author Wibus
 * 构造函数就是在类被初始化的时候，自动执行的一个方法。我们通过这个构造方法经常作很多需要提前完成的工作，比如显示页面前我们要从后台得到数据
 */

// 1 类的构造函数
//构造函数的关键字是constructor

class Person{
    public name: string;
    constructor(name:string){
        this.name = name;
    };
};

const person = new Person('Wibus');
console.log(person.name);
// ts-node demo12.ts
// result: Wibus
// 这是最常规和好理解的写法

// 1.1 简单的写法

class Person2 {
    constructor(public name:string){} // 这个地方的name需要写上访问属性
};

const person2 = new Person2('Wibus2');
console.log(person2.name);
// 这种写法就相当于你定义了一个name,然后在构造函数里进行了赋值，这是一种简化的语法

// 2 类继承中的构造器写法
// 普通类的构造器我们已经会了，在子类中使用构造函数需要用super()调用父类的构造函数

class Teacher extends Person2 {
    constructor(public age: number){
        super('Wibus');
    };
};

const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);

// 父类没有构造函数，子类也要使用super()进行调用，否则就会报错。

class Person3 {};

class Teacher2 extends Person3 {
    constructor(public age: number){
        super();
    };
};

const teacher2 = new Teacher2(18);
console.log(teacher2.age);

// 主要讲的就是类中的构造函数（也有叫构造器的），构造函数在工作中用的很多，所以你要学会并作充分的练习。