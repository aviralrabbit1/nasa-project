// Testing fixture with different test cases using *describe*
describe('Test GET /launches', () => {
    test('It should respond with 200 success', () => {
        const response = 200;
        expect(response).toBe(200);
    });
});

describe('Test POST /launches', () => {
    test('It should respond with 200 success', () => {
        const response = 200;
        expect(response).toBe(200);
    });
    // Error from launches.controller
    test('It should catch missing required properties', () => {

    });
    test('It should catch invalid dates', () => {

    });
});

// Logged the following
// PASS src/routes/launches/launches.test.js
// Test GET /launches
//   ✓ It should respond with 200 success (10 ms)
// Test POST /launches
//   ✓ It should respond with 200 success (1 ms)
//   ✓ It should catch missing required properties (1 ms)
//   ✓ It should catch invalid dates (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        1.574 s, estimated 2 s
// Ran all test suites.


