/**
 * Demo18.ts
 * 联合类型与类型保护
 * @date 2021-2-2
 * @author Wibus
 */

interface waiter{
    anjiao: boolean
    say: () => {};
}
interface teacher{
    anjiao: boolean
    skill: () => {}
}
function judgeWho(animal:waiter | teacher) {
    if (animal.anjiao){
        (animal as waiter).say
    }else{
        (animal as teacher).skill
    }
    if ("skill" in animal){
        animal.skill
    }else{
        animal.say
    }
}
function add(first:string|number, second: string|number) {
    if (typeof first == "string" || typeof second == "string") {
        return `${first}${second}`
    }else{
        return first+second
    }
}