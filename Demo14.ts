/**
 * Demo14.ts
 * 类的只读属性和抽象类
 * @date 2021-2-2
 * @author Wibus
 * 
 */

class person {
     public readonly name: string;
     constructor (name: string){
         this.name = name;
     }
}
const Jss = new  person('js_john');
// Js.name = 'Js_shi_shou'; //hhhhhc
console.log(Jss.name);

abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
    constructor (public say: string, public name: string){
        this.say = say;
        this.name = name;
    }
}
class waiter extends Girl {
    thing = this.say
    name = this.name
    skill(){
        console.log('您好，请问有位了吗？我叫'+ this.name +','+this.thing)
    }
}
const Js  = new waiter('我是受', 'Js');
console.log(Js.skill())