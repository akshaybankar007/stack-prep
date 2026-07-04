// testingContent.js
export const testingContent = {
  "1": {
    title: "What is Testing? (Why do we need it?)",
    sections: [
      {
        heading: "Overview",
        text: "Testing verifies that software behaves as expected, catches bugs, and improves quality."
      },
      {
        heading: "Benefits",
        text: "Reduces costs, increases confidence in refactoring, documents expected behavior, and catches regression."
      },
      {
        heading: "Types",
        text: "Manual vs automated testing. Automated tests run repeatedly and are reliable."
      }
    ]
  },
  "2": {
    title: "Unit Testing vs Integration Testing vs End-to-End Testing",
    sections: [
      {
        heading: "Overview",
        text: "These tests differ in scope and granularity."
      },
      {
        heading: "Unit Testing",
        text: "Tests individual components (functions, classes) in isolation. Fast, easy to write."
      },
      {
        heading: "Integration Testing",
        text: "Tests interactions between modules, databases, or APIs. Verifies that units work together."
      },
      {
        heading: "End-to-End Testing",
        text: "Tests the entire application flow from user perspective (e.g., with Cypress). Slowest but ensures system works."
      }
    ]
  },
  "3": {
    title: "Jest Basics (Installation, Matchers, Assertions)",
    sections: [
      {
        heading: "Overview",
        text: "Jest is a popular JavaScript testing framework, often used with React."
      },
      {
        heading: "Installation",
        text: "`npm install --save-dev jest` and configure scripts in package.json."
      },
      {
        heading: "Matchers",
        text: "`expect(value).toBe(expected)`, `toEqual` (deep equality), `toBeTruthy()`, `toThrow()`, and more."
      },
      {
        heading: "Assertions",
        text: "Jest uses `expect` for assertions. Tests fail if expectations are not met."
      }
    ]
  },
  "4": {
    title: "Test Suites and Test Cases",
    sections: [
      {
        heading: "Overview",
        text: "Test suites group related test cases using `describe` blocks."
      },
      {
        heading: "describe",
        text: "Creates a block for a set of tests. Useful for organization."
      },
      {
        heading: "test / it",
        text: "Individual test case. `test('should...', () => { ... })` or `it('...')`."
      }
    ]
  },
  "5": {
    title: "Mock Functions and Mocking",
    sections: [
      {
        heading: "Overview",
        text: "Mocks replace dependencies to isolate the unit being tested."
      },
      {
        heading: "jest.fn()",
        text: "Creates a mock function. Can track calls and return values."
      },
      {
        heading: "mockImplementation",
        text: "Overrides the mock's behavior: `mockImplementation(() => 'mocked')`."
      },
      {
        heading: "spyOn",
        text: "Wraps an existing method to track calls."
      }
    ]
  },
  "6": {
    title: "Asynchronous Testing",
    sections: [
      {
        heading: "Overview",
        text: "Testing async code requires handling Promises and callbacks."
      },
      {
        heading: "Promises",
        text: "Return a promise from the test. Jest waits for it to resolve or reject."
      },
      {
        heading: "Async/Await",
        text: "Use `async` in the test function and `await` on promises. Jest handles it."
      },
      {
        heading: "done() callback",
        text: "Alternative for older callback-style async, but less common."
      }
    ]
  },
  "7": {
    title: "React Testing Library (RTL) Basics",
    sections: [
      {
        heading: "Overview",
        text: "RTL encourages testing user interactions by querying the DOM as a user would."
      },
      {
        heading: "Setup",
        text: "Install `@testing-library/react` and `@testing-library/jest-dom` for custom matchers."
      },
      {
        heading: "Queries",
        text: "`screen.getByText()`, `getByRole()`, `getByLabelText()` etc. Prefer queries that reflect accessibility."
      },
      {
        heading: "render",
        text: "`render(<Component />)` to render the component for testing."
      }
    ]
  },
  "8": {
    title: "Testing User Interactions",
    sections: [
      {
        heading: "Overview",
        text: "Simulate user events to test component behavior."
      },
      {
        heading: "fireEvent",
        text: "Synchronous events: `fireEvent.click(button)`, `fireEvent.change(input, {target: {value: 'text'}})`."
      },
      {
        heading: "userEvent",
        text: "More realistic, async events (from `@testing-library/user-event`). Prefer over fireEvent for interactions."
      }
    ]
  },
  "9": {
    title: "Mocking API Calls and Components",
    sections: [
      {
        heading: "Overview",
        text: "Mock external dependencies to avoid hitting real APIs or to isolate component tests."
      },
      {
        heading: "Mocking API calls",
        text: "Use `jest.spyOn` on fetch/axios, or mock the module with `jest.mock('axios')`."
      },
      {
        heading: "Mocking Components",
        text: "Use `jest.mock('path/to/Component')` to replace with a simple stub."
      }
    ]
  },
  "10": {
    title: "Best Practices",
    sections: [
      {
        heading: "AAA Pattern",
        text: "Arrange (setup), Act (perform action), Assert (verify outcome). Keeps tests structured."
      },
      {
        heading: "Test Coverage",
        text: "Aim for high coverage, but prioritize critical paths. Use `--coverage` flag."
      },
      {
        heading: "Avoid Testing Implementation Details",
        text: "Test behavior, not private methods. RTL encourages this by focusing on rendered output."
      }
    ]
  }
};