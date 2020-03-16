describe ("FizzBuzz", function(){
    it("should display 'Fizz' if the number is divisible by three", function(){
        expect(number(9)).toEqual("Fizz");
    });

    it("should display 'Buzz' if the number is divisible by five", function(){
        expect(number(10)).toEqual("Buzz");
    });

    it("should display 'FizzBuzz' if the number is divisble by three and five", function(){
        expect(number(15)).toEqual("FizzBuzz");
    });
});