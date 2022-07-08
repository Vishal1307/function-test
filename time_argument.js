const Time=(value)=>{
    if(value<60000){
        return Math.floor(value/1000)+"seconds"
    }
    else if(value==60000){
        return 1+"minute"
    }
    else if(value>60000){
        if(value%60000==0){
            return value/60000+minutes
        }
        else{
            var min=value/60000
            var sec=value%60000
            return (min+"minutes"+sec.toFixed(1)+"seconds")
        }
    }

}
describe("Time function in minute second",()=>{
    test('when value is <60000', () => { 
        expect(Time(5000)).toBe(5+"seconds")
     })
     test("when value ==60000",()=>{
        expect(Time(60000)).toBe(1+"minute")
     })
     test("when value is >60000 and it is full divsible",()=>{
        expect(Time(180000)).toBe(3+"minutes")
     })
     test("when value is >60000 and it is not full divsible",()=>{
        expect(Time(200000)).toBe(3+"minutes"+20+"seconds")

     })
    
})