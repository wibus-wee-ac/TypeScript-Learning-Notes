/**
 * Demo13.ts
 * TypeScript 类的 Getter、Setter 和 static 使用
 * @date 2021-1-3
 * @author Wibus
 * 学了类的访问类型private，那这个东西如何使用？其实他的最大用处是封装一个属性，然后通过 Getter 和 Setter 的形式来访问和修改这个属性
 */

// 1 类的 Getter 和 Setter

class Xiaojiejie {
    constructor(private _age:number){} //private 私有属性
    get age(){
        return this._age-10
    }
    set age(age:number){
        this._age=age+3
    }
  }
  
  const dajiao = new Xiaojiejie(28) //get
  dajiao.age = 25 //set
  console.log(dajiao.age)

// 2 类中的 static
// 最常规的写法
class Girl {
  sayLove() {
    return "I Love you";
  }
}

const girl = new Girl();
console.log(girl.sayLove());

// 但是现在你不想new出对象，而直接使用这个方法

class Girl2 {
    static sayLove() {
      return "I Love you";
    }
  }
  console.log(Girl2.sayLove());