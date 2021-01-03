/**
 * Demo11.ts
 * TypeScript 中类的访问类型
 * @date 2021-1-3
 * @author Wibus
 * 上节已经简单学习了TypeScript中类的使用，这节我们继续学习一下类中的访问类型。其实类的访问类型就是基于三个关键词private、protected和public,也是三种访问类型
 */

// 1 简单的类

class Person {
    name: string;
  }
  
const person = new Person();
person.name = "Wibus";
  
console.log(person.name);
// ts-node demo11.ts
// result: Wibus

// 2 public 访问属性
// 这时候可以打出Wibus是因为我们如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。

// 相当于
class Person2 {
    public name: string;
};
// public从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.
class Person3 {
    public name: string;
    public sayhello(){
        console.log(this.name + ' say hello');
    };
};
// ————————下面的是外部调用——————————
const person3 = new Person3;
person3.name = "Wibus";
person3.sayhello();
// ts-node demo11.ts
// result: Wibus say hello

// 3 private 访问属性
// private 访问属性的意思是，只允许在类的内部被调用，外部不允许调用

class Person4 {
    private name: string;
    private sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person4 extends Person4 {
    public saySomeThing() {
        console.log(this.name); 
    }
}
//VSC Error: 属性“name”为私有属性，只能在类“Person4”中访问。
// ————————下面的是外部调用——————————
const person4 = new Person4;
person4.name = "Wibus";
person4.sayhello();
// VSC Error: 属性“sayhello”为私有属性，只能在类“Person4”中访问。


// 4 protected 访问属性
// protected 允许在类内及继承的子类中使用

class Person5 {
    protected name: string;
    protected sayhello(){
        console.log(this.name + ' say hello');
    };
};

class Person_Person5 extends Person5 {
    public sayBye(){
        return "this.name";
    }
}

// ————————外部调用——————————
const person5 = new Person5;
person5.name = "Wibus";
person5.sayhello();
// VSC Error: 属性“sayhello”受保护，只能在类“Person5”及其子类中访问。
// ————————Person_Person5 类 ——————
const person_person5 = new Person_Person5;
person_person5.sayBye(); //VSC 不报错