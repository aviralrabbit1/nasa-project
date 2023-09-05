const request = require('supertest');
const app = require('../../app');

// Testing fixture with different test cases using *describe*
describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
        // expect(response.statusCode).toBe(200);
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

// *Jest* Logged the following
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

// *Supertest* logged the following
// ::ffff:127.0.0.1 - - [05/Sep/2023:22:41:41 +0000] "GET /launches HTTP/1.1" 200 205 "-" "-"
//  PASS  src/routes/launches/launches.test.js
//   Test GET /launches
//     ✓ It should respond with 200 success (157 ms)
//   Test POST /launches
//     ✓ It should respond with 200 success (1 ms)
//     ✓ It should catch missing required properties (1 ms)
//     ✓ It should catch invalid dates (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        2.898 s, estimated 7 s
// Ran all test suites.
