# Unittests in JavaScript

This directory contains projects and exercises related to writing and running unit tests in JavaScript. Unit testing is a crucial part of software development that helps ensure code correctness, reliability, and maintainability.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Testing Frameworks](#testing-frameworks)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Best Practices](#best-practices)
- [Resources](#resources)

## Introduction

Unit tests are automated tests written and run by developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. This directory focuses on unit testing in JavaScript using popular testing frameworks.

## Getting Started

To get started with unit testing in JavaScript, you need to have Node.js and npm (Node Package Manager) installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/).

## Project Structure

The typical structure of a project with unit tests might look like this:

```
/project-root
    /src
        - main.js
    /test
        - main.test.js
    package.json
```

- `src/`: Contains the source code of the application.
- `test/`: Contains the test files.
- `package.json`: Contains the project metadata and dependencies.

## Testing Frameworks

Several testing frameworks are available for JavaScript. Some of the most popular ones include:

- **Jest**: A comprehensive testing framework with a focus on simplicity.
- **Mocha**: A flexible testing framework often used with assertion libraries like Chai.
- **Jasmine**: A behavior-driven development framework for testing JavaScript code.

## Writing Tests

Tests are typically written in separate files within the `test` directory. Here is an example of a simple test using Jest:

```javascript
// main.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// main.test.js
const add = require("../src/main");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
```

## Running Tests

To run your tests, you can use the following command (assuming you are using Jest):

```bash
npx jest
```

Or, if you have Jest installed globally:

```bash
jest
```

## Best Practices

- Write tests for all critical code paths.
- Keep tests small and focused.
- Use descriptive test names.
- Mock external dependencies to isolate the unit being tested.
- Run tests frequently during development.

## Resources

- [Jest Documentation](https://jestjs.io/docs/en/getting-started)
- [Mocha Documentation](https://mochajs.org/)
- [Jasmine Documentation](https://jasmine.github.io/)

Happy testing!
