const sum=(...argument)=>{
    if(argument.length==0){
        return "sum fun invoked with no argument"
    }
    else if(argument.length==1){
        return "You have taken one argument"
    }
   var val= [argument].reduce((a,b)=>a+Number(b),0)
   return Number(val.toFixed(2))

}
describe("It show sum function ",()=>{
    test('call sum with no argument', () => { 
        expect(sum()).toBe("sum fun invoked with no argument")
     })
     test("call with one argumengt",()=>{
        expect(sum(1)).toBe("You have taken one argument")
     })
     test("argument have string",()=>{
        expect(sum("2","3")).toBe(5)
     })
     test("call with floating value",()=>{
        expect(sum(1.3,2.3)).toBe(3.6)

     })
})
