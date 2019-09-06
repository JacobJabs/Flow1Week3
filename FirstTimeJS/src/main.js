
   // JSArray assignment 

let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", 'hanna', 'Sanne'];

let all = boys.concat(girls);
console.log(all);

let reduce = all.join(',');
console.log(reduce);

let red = all.join(' - ');
console.log(red);

console.log(all.push('Lone', 'Gitte'));
console.log(all.unshift("Hans", 'Kurt'));

console.log(all.shift());
console.log(all.pop());

//console.log(all.splice(0));

console.log(all.reverse());

console.log(all.sort()); 



// JSDay1 Assignment


function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

console.log(add(1, 2))     // What will this print?
console.log(add)          // What will it print and what does add represent?
console.log(add(1, 2, 3)); // What will it print
console.log(add(1));	  // What will it print 	
console.log(cb(3, 3, add)); // What will it print
console.log(cb(4, 3, sub)); // What will it print
console.log(cb(3, 3, add())); // What will it print (and what was the problem)
console.log(cb(3, "hh", add));// What will it print

typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function  



//  OPGAVE MED FILTER, MAP OG FOREACH METHODS.

let hi = ["Lars", 'Peter', 'søren', 'jab', 'bo'];
function checkStrings(name) {
    return name.length <= 3;  //checker string length 
}


let short = hi.filter(checkStrings);
let ubig = hi.map(names => names.toUpperCase());
let sepp = hi.join('<li>' + ' ' + '<li>'); 

console.log(short); 
console.log(ubig); 
console.log(sepp); 

hi.forEach(function(all) {
    console.log(all);
});

short.forEach(function(chosenOnes) {
    console.log(chosenOnes);
});




// opgave 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  function checkModelYear(newerCars) {
      return newerCars.year > 1999; 
  }
  let newCars = cars.filter(checkModelYear); 

  console.log(newCars); 

  function onlyVolvo(volvoOnly) {
      return volvoOnly.make == 'Volvo'; 
  }
  let volvos = cars.filter(onlyVolvo); 

  console.log(volvos); 

  function belowPr(belowOnly) {
      return belowOnly.price < 5000; 
  }

  let cheap = cars.filter(belowPr); 
  console.log(cheap); 



