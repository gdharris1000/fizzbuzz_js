function number(number){
    if (number % 3 == 0 && number % 5 == 0){
        return "FizzBuzz";
    }
    else if (number % 3 == 0){
        return "Fizz";
    }
    else if (number % 5 == 0){
        return "Buzz";
    }
};



// Print the numbers from 1 to 100
// If a number is divisible by 3 print "Fizz" instead
// If a number is divisible by 5 print "Buzz" instead
// If a number is divisible by 3 and 5 print "FizzBuzz" instead瀀