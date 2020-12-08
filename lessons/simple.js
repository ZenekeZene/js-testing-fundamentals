/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const {sum, subtract} = require('../math')

let result = sum(3, 7)
let expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(10, 7)
expected = 3
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the master branch for the answer.
 */
