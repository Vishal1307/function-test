const Tax=(value)=>{
    if(value<=250000){
        return "no tax"
    }
    else if(250000<value>=500000){
        return (value*10)/1000
    }
    else if(500000<value>=1000000){
        return (value*20)/100
    }
    else{
        return (value*30)/100
    }

}
describe("Tax Slab of annual income",()=>{
    test('when annula income <=250000', () => { 
        expect(Tax(250000)).toBe("no tax")
     })
    test('when annula income >250000 and <=500000', () => { 
        expect(Tax(500000)).toBe(50000)
     })
    test('when annula income >500000 and <=1000000', () => { 
        expect(Tax(1000000)).toBe(200000)
     })
    test('when annula income >1000000', () => { 
        expect(Tax(1100000)).toBe(330000)
     })
})