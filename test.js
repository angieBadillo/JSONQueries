const assert = require('assert');
let solution1 = require("./solution.js");

let testInput = [{
    column1: 'value1',
    column2: 'value',
    column3: null,
    column4: 123
},
    {
        column1: 'value2',
        column2: 'value',
        column3: '',
        column4: 345
    },
    {
        column1: '',
        column2: null,
        column3: 'NA',
        column4: null
    }
];

//Test equals
assert.equal(solution1.find(testInput, solution1.equalsFilter, 'column1', "value1").length, 1);
assert.equal(solution1.find(testInput, solution1.equalsFilter, 'column2', "value").length, 2);


// test less than equal
assert.equal(solution1.find(testInput, solution1.lessThanFilter, 'column4', 122).length, 0);
assert.equal(solution1.find(testInput, solution1.lessThanFilter, 'column4', 123).length, 1);
assert.equal(solution1.find(testInput, solution1.lessThanFilter, 'column4', 124).length, 1);

// test greater than equal
assert.equal(solution1.find(testInput, solution1.greaterThanFilter, 'column4', 344).length, 1);
assert.equal(solution1.find(testInput, solution1.greaterThanFilter, 'column4', 345).length, 1);
assert.equal(solution1.find(testInput, solution1.greaterThanFilter, 'column4', 346).length, 0);

//Test for null or invalid input
assert.equal(solution1.find(testInput, solution1.equalsFilter, 'column3', "NA").length, 0);
assert.equal(solution1.find(testInput, solution1.equalsFilter, 'column3', null).length, 0);
assert.equal(solution1.find(testInput, solution1.lessThanFilter, 'column3', "NA").length, 0);
assert.equal(solution1.find(testInput, solution1.lessThanFilter, 'column3', null).length, 0);
assert.equal(solution1.find(testInput, solution1.greaterThanFilter, 'column3', "NA").length, 0);
assert.equal(solution1.find(testInput, solution1.greaterThanFilter, 'column3', null).length, 0);

console.log("All Test cases passed");