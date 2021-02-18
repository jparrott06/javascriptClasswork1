//Javascript functions

//1)Build Function called factorize to compute the factors of a positive integer

function factorize(num) {

    factor_list = [];

    for (let i = 1; i < Math.ceil(Math.sqrt(num)); i++) {

        if (num % i === 0 && factor_list.indexOf(i) == -1) { //if num % i = 0, then we know i is a factor of num

            factor_list.push(i);

            if (num / i !== i) { //now check if num/i is not i => this means that num/i is also a factor of num e.g. 30 / 2 = 15 -> we know 15 is also a factor of 30
                factor_list.push(num/i);
            }

        }

    }

    return factor_list.sort((a,b) => a-b); //sort in ascending order

}

console.log(factorize(2));
console.log(factorize(4));
console.log(factorize(6));
console.log(factorize(10));
console.log(factorize(15));
console.log(factorize(20));

//END factorize function

//2) Wrtie JS function called findUnique to extract unique characters from a string

function findUnique(s) {

    unique_s = "";

    for (let i = 0; i < s.length; i++) {

        if(unique_s.indexOf(s.charAt(i)) == -1) {
            unique_s += s[i];
        }

    }

    return unique_s
}

//console.log(findUnique("Hello World!"));

//END findUnique function

//3) Write Javascript function called doOperation which receives 2 numbers and a function as input, 
//calls the received (input) function with the two numbers and returns the result.
//Write two different operator functions (multiply, power) and make sure it works correctly w/ both operators

function doOperation(x, y, operator) {
    return operator(x,y);
}

function multiply(x,y) {
    return x*y;
}

function power(x,y) {
    return Math.pow(x,y);
}

//console.log(doOperation(5,10,multiply));
//console.log(doOperation(5,10,power));

//END doOperation function