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
        except(sum(2)).toBe("sum fun invoked with no argument")
     })
})
