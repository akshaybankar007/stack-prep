export const sqlContent = {
  1: {
    title: "What is DBMS vs RDBMS?",
    sections: [
      { heading: "Relational Structure", text: "An RDBMS (Relational Database Management System) organizes data into structured tables (Rows and Columns) linked via relationships. Examples: MySQL, PostgreSQL. They strictly enforce data integrity and schemas." }
    ]
  },
  2: {
    title: "DDL vs DML vs DCL vs TCL",
    sections: [
      { heading: "SQL Command Categories", text: "- DDL: Defines schema structure (CREATE, ALTER, DROP, TRUNCATE).\n- DML: Modifies data (SELECT, INSERT, UPDATE, DELETE).\n- DCL: Manages permissions (GRANT, REVOKE).\n- TCL: Manages transactions (COMMIT, ROLLBACK)." }
    ]
  },
  3: {
    title: "DDL Commands",
    sections: [
      { heading: "Modifying Architecture", text: "`CREATE TABLE` builds a new table. `ALTER TABLE` changes existing structure. `DROP TABLE` destroys the table entirely. `TRUNCATE TABLE` deletes all rows rapidly but keeps the empty table structure intact." }
    ]
  },
  4: {
    title: "DML Commands",
    sections: [
      { heading: "Modifying Data", text: "`INSERT INTO` adds new rows. `UPDATE` modifies existing records (always use WHERE). `DELETE FROM` removes rows.", code: `INSERT INTO Employees (name, salary) VALUES ('Akshay', 85000);\nUPDATE Employees SET salary = 90000 WHERE name = 'Akshay';` }
    ]
  },
  5: {
    title: "DELETE vs TRUNCATE vs DROP",
    sections: [
      { heading: "Key Differences", text: "- DELETE: Removes rows one-by-one. Logs each deletion (slower). Can use WHERE. Can be rolled back.\n- TRUNCATE: Deallocates data pages entirely (extremely fast). Cannot use WHERE. Hard to roll back.\n- DROP: Destroys both data and table structure." }
    ]
  },
  6: {
    title: "SELECT Statement with WHERE, AND, OR, NOT",
    sections: [
      { heading: "Querying Data", text: "The `SELECT` statement retrieves data. The `WHERE` clause filters it based on conditions.", code: `SELECT name FROM Employees WHERE department = 'IT' AND NOT status = 'Inactive';` }
    ]
  },
  7: {
    title: "ORDER BY and LIMIT/OFFSET",
    sections: [
      { heading: "Sorting and Pagination", text: "`ORDER BY` sorts the result set (ASC/DESC). `LIMIT` restricts the number of rows returned. `OFFSET` skips a specific number of rows, crucial for API pagination.", code: `SELECT * FROM Products ORDER BY price DESC LIMIT 10 OFFSET 20;` }
    ]
  },
  8: {
    title: "DISTINCT",
    sections: [
      { heading: "Removing Duplicates", text: "The `DISTINCT` keyword ensures that only unique values are returned for the specified columns.", code: `SELECT DISTINCT department FROM Employees;` }
    ]
  },
  9: {
    title: "Aggregate Functions",
    sections: [
      { heading: "Mathematical Operations", text: "Functions that perform calculations on a set of values: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()`. Null values are generally ignored." }
    ]
  },
  10: {
    title: "GROUP BY and HAVING",
    sections: [
      { heading: "Categorizing Data", text: "`GROUP BY` groups rows with the same values into summary rows. `HAVING` filters data AFTER it has been grouped (since WHERE cannot be used with aggregate functions).", code: `SELECT department, AVG(salary) FROM Employees GROUP BY department HAVING COUNT(id) > 5;` }
    ]
  },
  11: {
    title: "SQL Constraints",
    sections: [
      { heading: "Enforcing Integrity", text: "- UNIQUE: Values must be different.\n- NOT NULL: Cannot be empty.\n- CHECK: Values must satisfy a condition.\n- DEFAULT: Sets a default value if none provided." }
    ]
  },
  12: {
    title: "PRIMARY KEY vs FOREIGN KEY",
    sections: [
      { heading: "Relational Bindings", text: "PRIMARY KEY uniquely identifies a record (UNIQUE + NOT NULL). FOREIGN KEY is a column in one table that refers to the PRIMARY KEY in another table, enforcing referential integrity." }
    ]
  },
  13: {
    title: "INNER JOIN",
    sections: [
      { heading: "Intersection of Tables", text: "Returns only the rows where there is a match in BOTH tables based on the join condition.", code: `SELECT Orders.id, Customers.name FROM Orders INNER JOIN Customers ON Orders.customer_id = Customers.id;` }
    ]
  },
  14: {
    title: "LEFT, RIGHT, and FULL JOIN",
    sections: [
      { heading: "Handling Unmatched Data", text: "- LEFT JOIN: Returns ALL left table rows, and matching right rows (null if no match).\n- RIGHT JOIN: Returns ALL right table rows, and matching left rows.\n- FULL JOIN: Returns ALL rows when there is a match in EITHER table." }
    ]
  },
  15: {
    title: "SELF JOIN",
    sections: [
      { heading: "Table Joining Itself", text: "Useful for hierarchical data in a single table, like an Employee table where `manager_id` references another employee. Requires table aliases.", code: `SELECT E1.name as Employee, E2.name as Manager FROM Employees E1 LEFT JOIN Employees E2 ON E1.manager_id = E2.id;` }
    ]
  },
  16: {
    title: "Subqueries",
    sections: [
      { heading: "Nested Queries", text: "A query nested inside another query (SELECT, FROM, or WHERE). Used to calculate a value on the fly for filtering.", code: `SELECT name FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);` }
    ]
  },
  17: {
    title: "EXISTS vs IN",
    sections: [
      { heading: "Performance Differences", text: "`IN` evaluates the subquery, returns a list, and compares against it. `EXISTS` evaluates true/false as soon as it finds a single match. `EXISTS` is faster for large datasets." }
    ]
  },
  18: {
    title: "UNION vs UNION ALL",
    sections: [
      { heading: "Combining Result Sets", text: "Combines the result sets of two SELECT statements. `UNION` removes duplicates. `UNION ALL` keeps duplicates and is significantly faster." }
    ]
  },
  19: {
    title: "LIKE, IN, BETWEEN Operators",
    sections: [
      { heading: "Advanced Filtering", text: "- LIKE: Pattern matching (`%` for any chars, `_` for one char).\n- IN: Shorthand for multiple OR conditions.\n- BETWEEN: Selects values within a range." }
    ]
  },
  20: {
    title: "Indexing and Transactions",
    sections: [
      { heading: "ACID Properties", text: "Transactions guarantee Atomicity, Consistency, Isolation, and Durability. Use `BEGIN`, `COMMIT`, and `ROLLBACK` to manage them manually." }
    ]
  },
  21: {
    title: "CASE WHEN",
    sections: [
      { heading: "Inline Conditional Logic", text: "The SQL equivalent of an if/else statement.", code: `SELECT name, CASE WHEN salary > 100000 THEN 'High' ELSE 'Low' END as Bracket FROM Employees;` }
    ]
  },
  22: {
    title: "Finding Nth Highest Salary",
    sections: [
      { heading: "The Interview Question", text: "Using `DENSE_RANK()` handles duplicates perfectly.", code: `WITH Ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank FROM Employees) SELECT DISTINCT salary FROM Ranked WHERE rank = 2;` }
    ]
  }
};