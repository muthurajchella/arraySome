let numbers =[1,2,2,3,4,5,6,7,7,0];

numbers.some((value) => {
    return value % 2 === 0;
});

console.log("This is  a Number", numbers);