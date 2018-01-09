describe("MathUtils - 0", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Spec for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            expect(calc.sum(3,5)).toEqual(8);
        });
 
        //Spec for multiply operation
        it("should be able to multiply 10 and 40", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
        });
 
        //Spec for factorial operation for positive number
        it("should be able to calculate factorial of 9", function() {
            expect(calc.factorial(9)).toEqual(362880);
        });
         
        //Spec for factorial operation for negative number
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() {
                calc.factorial(-7)
            }).toThrowError(Error);
        });
         
    });
});

describe("MathUtils - 1", function() {
    var calc;
 
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum');
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            calc.sum(3,5);
 
            //verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3,5);
        });
 
    });
});

describe("MathUtils - 2", function() {
    var calc;
 
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum').and.returnValue("spied values");
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            var result = calc.sum(3,5);
            expect(result).toEqual("spied values");
        });
 
    });
});

describe("MathUtils - 2", function() {
    var calc;
 
    beforeEach(function() {
        var fakeSum = function() {
            return "fake sum";
        }
        calc = new MathUtils();
        spyOn(calc, 'sum').and.callFake(fakeSum);
    });
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            var result = calc.sum(3,5);
            expect(result).toEqual("fake sum");
        });
 
    });
});