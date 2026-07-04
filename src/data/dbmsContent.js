// dbmsContent.js
export const dbmsContent = {
  "1": {
    title: "Database Architecture",
    sections: [
      {
        heading: "Overview",
        text: "Database architecture describes the structure of the DBMS. The three-tier architecture is common: presentation, application, and database layers."
      },
      {
        heading: "Three-Tier Architecture",
        text: "Presentation tier (user interface), application tier (business logic), and database tier (data storage). Separates concerns and improves scalability."
      },
      {
        heading: "Schema and Instance",
        text: "Schema: the logical structure of the database (tables, constraints). Instance: the actual data at a given time."
      },
      {
        heading: "Data Independence",
        text: "Logical data independence: changes to schema without affecting applications. Physical data independence: changes to storage without affecting schema."
      },
      {
        heading: "Key Points",
        bullets: [
          "DBMS provides abstraction over physical storage.",
          "ANSI-SPARC architecture: external, conceptual, internal levels.",
          "Database languages: DDL (schema definition), DML (data manipulation).",
          "Popular DBMS: MySQL, PostgreSQL, Oracle, SQL Server."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between a schema and an instance?",
          "Explain the three-tier architecture.",
          "What is data independence?",
          "What are DDL and DML?"
        ]
      }
    ]
  },
  "2": {
    title: "Entity-Relationship Model",
    sections: [
      {
        heading: "Overview",
        text: "The ER model is a high-level conceptual model for database design. It uses entities, attributes, and relationships to describe data."
      },
      {
        heading: "Entities and Attributes",
        text: "Entity: a real-world object (e.g., Student). Attributes: properties (e.g., name, age). Types: simple, composite, multi-valued, derived."
      },
      {
        heading: "Relationships",
        text: "Association between entities (e.g., Enrolls in). Cardinalities: one-to-one, one-to-many, many-to-many. Participation: total or partial."
      },
      {
        heading: "ER Diagrams",
        text: "Rectangles for entities, diamonds for relationships, ovals for attributes. Keys are underlined. Symbols for cardinalities."
      },
      {
        heading: "Key Points",
        bullets: [
          "Weak entity: depends on another entity (has partial key).",
          "ISA hierarchy: superclass/subclass (e.g., Student is a Person).",
          "ER design can be converted to relational tables.",
          "Aggregation treats relationship as an entity."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are entities and attributes?",
          "Explain the types of relationships with examples.",
          "What is a weak entity?",
          "Draw an ER diagram for a university database."
        ]
      }
    ]
  },
  "3": {
    title: "Relational Model",
    sections: [
      {
        heading: "Overview",
        text: "The relational model represents data as tables (relations). Each table has rows (tuples) and columns (attributes). It is the foundation of SQL databases."
      },
      {
        heading: "Keys",
        text: "Super key: any set of attributes that uniquely identifies a tuple. Candidate key: minimal super key. Primary key: chosen candidate key. Foreign key: references another table's primary key."
      },
      {
        heading: "Integrity Constraints",
        text: "Domain constraints (data types), entity integrity (primary key not null), referential integrity (foreign key values valid)."
      },
      {
        heading: "Relational Algebra",
        text: "Operations: select, project, join, union, intersection, difference, cartesian product, rename. These are the theoretical basis for SQL."
      },
      {
        heading: "Key Points",
        bullets: [
          "Tables are sets (no duplicate rows by default).",
          "Null values represent missing or unknown data.",
          "Relations are first-order logic predicates.",
          "Codd's rules define relational database requirements."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Define primary key, foreign key, and candidate key.",
          "What is referential integrity?",
          "Explain relational algebra operations.",
          "What are the differences between super key and candidate key?"
        ]
      }
    ]
  },
  "4": {
    title: "SQL Basics",
    sections: [
      {
        heading: "Overview",
        text: "SQL (Structured Query Language) is the standard language for relational databases. It includes DDL, DML, DCL, and TCL."
      },
      {
        heading: "DDL (Data Definition Language)",
        text: "Commands: CREATE, ALTER, DROP. Define and modify schema objects (tables, indexes, constraints)."
      },
      {
        heading: "DML (Data Manipulation Language)",
        text: "Commands: SELECT, INSERT, UPDATE, DELETE. Query and modify data."
      },
      {
        heading: "DCL (Data Control Language)",
        text: "Commands: GRANT, REVOKE. Manage permissions."
      },
      {
        heading: "TCL (Transaction Control Language)",
        text: "Commands: COMMIT, ROLLBACK, SAVEPOINT. Manage transactions."
      },
      {
        heading: "Basic Queries",
        text: "SELECT column1, column2 FROM table WHERE condition ORDER BY column. Use aggregate functions (COUNT, SUM, AVG, MAX, MIN)."
      },
      {
        heading: "Key Points",
        bullets: [
          "SQL is declarative (specify what, not how).",
          "Use DISTINCT to eliminate duplicates.",
          "LIKE for pattern matching (% and _ wildcards).",
          "CASE for conditional logic."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What are the different types of SQL commands?",
          "Write a query to select top 5 records from a table.",
          "Explain the difference between DELETE and TRUNCATE.",
          "What is the use of the WHERE clause?"
        ]
      }
    ]
  },
  "5": {
    title: "Normalization",
    sections: [
      {
        heading: "Overview",
        text: "Normalization reduces data redundancy and avoids anomalies. It decomposes tables into smaller, well-structured relations."
      },
      {
        heading: "1NF (First Normal Form)",
        text: "Each column contains atomic (indivisible) values. No repeating groups."
      },
      {
        heading: "2NF",
        text: "In 1NF and every non-key attribute is fully functionally dependent on the entire primary key (no partial dependency)."
      },
      {
        heading: "3NF",
        text: "In 2NF and no transitive dependency (non-key attribute depends on another non-key attribute)."
      },
      {
        heading: "BCNF (Boyce-Codd Normal Form)",
        text: "In 3NF and every determinant is a candidate key. Stronger than 3NF."
      },
      {
        heading: "Higher Normal Forms",
        text: "4NF (multi-valued dependencies), 5NF (join dependencies). Rarely used in practice."
      },
      {
        heading: "Key Points",
        bullets: [
          "Normalization reduces redundancy but may increase joins.",
          "Denormalization can be used for performance.",
          "Functional dependency: X→Y if Y is determined by X.",
          "Lossless-join decomposition is required."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is normalization and why is it done?",
          "Explain 1NF, 2NF, 3NF, and BCNF with examples.",
          "What is a functional dependency?",
          "What is the difference between 3NF and BCNF?"
        ]
      }
    ]
  },
  "6": {
    title: "Indexing and Hashing",
    sections: [
      {
        heading: "Overview",
        text: "Indexes speed up data retrieval at the cost of storage and update overhead. Common index types are B-trees and hash tables."
      },
      {
        heading: "B-Tree and B+Tree",
        text: "B+Tree is the most common index structure in DBMS. It maintains sorted data and supports range queries. Nodes contain keys and pointers."
      },
      {
        heading: "Hash Indexing",
        text: "Uses a hash function to map keys to buckets. Best for equality searches. Static and dynamic hashing (extendable, linear)."
      },
      {
        heading: "Clustered vs. Non-clustered",
        text: "Clustered index determines the physical order of rows (only one per table). Non-clustered is a separate structure pointing to rows."
      },
      {
        heading: "Index Selection",
        text: "Choose indexes based on query patterns. Over-indexing hurts updates. Use EXPLAIN to check query execution plans."
      },
      {
        heading: "Key Points",
        bullets: [
          "B+Tree offers efficient range and equality queries.",
          "Hash index is optimal for equality but not range.",
          "Bitmap indexes for low-cardinality columns.",
          "Partial indexes (WHERE clause) reduce size."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is an index and how does it improve performance?",
          "Explain the difference between B-tree and hash index.",
          "What is a clustered index?",
          "What are the trade-offs of using indexes?"
        ]
      }
    ]
  },
  "7": {
    title: "Transactions and ACID",
    sections: [
      {
        heading: "Overview",
        text: "A transaction is a logical unit of work that must be atomic, consistent, isolated, and durable (ACID properties)."
      },
      {
        heading: "Atomicity",
        text: "All operations in a transaction succeed or all fail. Implemented via logging and recovery (undo/redo)."
      },
      {
        heading: "Consistency",
        text: "The database remains in a consistent state before and after transaction. Constraints and rules are enforced."
      },
      {
        heading: "Isolation",
        text: "Transactions execute as if they are the only ones. Isolation levels (read uncommitted, read committed, repeatable read, serializable) provide trade-offs."
      },
      {
        heading: "Durability",
        text: "Once committed, changes persist despite crashes. Achieved by logging (write-ahead logging) and stable storage."
      },
      {
        heading: "Key Points",
        bullets: [
          "Transaction states: active, partially committed, committed, failed, aborted.",
          "Concurrency control ensures isolation.",
          "Logging: undo/redo logs are used for recovery.",
          "Checkpoints reduce recovery time."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the ACID properties.",
          "What are the different isolation levels?",
          "How does a DBMS ensure durability?",
          "What is the difference between commit and rollback?"
        ]
      }
    ]
  },
  "8": {
    title: "Concurrency Control",
    sections: [
      {
        heading: "Overview",
        text: "Concurrency control manages simultaneous access to data to ensure isolation and consistency. Techniques include locking, timestamp ordering, and MVCC."
      },
      {
        heading: "Locking",
        text: "Exclusive and shared locks. Two-phase locking (2PL) ensures serializability. Strict 2PL releases locks only at commit. Deadlocks can occur."
      },
      {
        heading: "Timestamp Ordering",
        text: "Each transaction gets a timestamp. Conflicts are resolved by comparing timestamps (wound-wait, wait-die). Ensures serializability without locks."
      },
      {
        heading: "MVCC (Multi-Version Concurrency Control)",
        text: "Maintains multiple versions of a row. Reads see a consistent snapshot, writes create new versions. Reduces contention, used in PostgreSQL, Oracle."
      },
      {
        heading: "Deadlock Handling",
        text: "Detection (wait-for graph) and resolution (kill one transaction). Prevention: resource ordering, timeout-based."
      },
      {
        heading: "Key Points",
        bullets: [
          "Granularity: row, page, table, database locks.",
          "Isolation levels affect locking behavior.",
          "Optimistic concurrency control assumes no conflicts, validates at commit.",
          "Serializability is the highest isolation."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain two-phase locking.",
          "What is MVCC and how does it work?",
          "How are deadlocks detected and resolved?",
          "What is the difference between optimistic and pessimistic locking?"
        ]
      }
    ]
  },
  "9": {
    title: "Recovery and Backup",
    sections: [
      {
        heading: "Overview",
        text: "Recovery techniques restore the database to a consistent state after failures. Backup strategies (full, incremental) are also essential."
      },
      {
        heading: "Write-Ahead Logging (WAL)",
        text: "Before applying changes to disk, log records are written. This allows undo (to reverse changes) and redo (to reapply committed changes)."
      },
      {
        heading: "Checkpoints",
        text: "A checkpoint synchronizes the database with the log, reducing recovery time by allowing recovery to start from the checkpoint."
      },
      {
        heading: "Recovery Algorithms",
        text: "Analysis, redo, undo phases. The ARIES algorithm is widely used (recovery from crashes with page-level logging)."
      },
      {
        heading: "Backup Types",
        text: "Full backup (entire database), incremental (changes since last backup), differential (changes since last full backup)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Log contains before/after images (undo/redo).",
          "Recovery manager handles transactions.",
          "Backups can be online or offline.",
          "Point-in-time recovery possible with archived logs."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain WAL and its importance.",
          "What is a checkpoint and why is it used?",
          "Describe the ARIES recovery algorithm.",
          "What is the difference between incremental and differential backup?"
        ]
      }
    ]
  },
  "10": {
    title: "Query Optimization",
    sections: [
      {
        heading: "Overview",
        text: "Query optimization aims to find the most efficient execution plan for a given SQL query. It considers indexes, join order, and statistics."
      },
      {
        heading: "Query Processing Steps",
        text: "Parsing (syntax), semantic analysis, rewriting, planning (generates possible plans), and execution (chooses best plan)."
      },
      {
        heading: "Query Trees and Heuristics",
        text: "Represent queries as trees. Heuristic rules: push selections down, combine projections, reorder joins. Often used for simple queries."
      },
      {
        heading: "Cost-Based Optimization",
        text: "Estimates cost (CPU, I/O) for each plan using statistics (table size, column distribution). The optimizer picks the plan with lowest cost."
      },
      {
        heading: "Join Optimization",
        text: "Join methods: nested loop, hash join, merge join. The optimizer chooses based on data size and indexes."
      },
      {
        heading: "Key Points",
        bullets: [
          "EXPLAIN (or EXPLAIN ANALYZE) shows execution plan.",
          "Statistics must be up to date (ANALYZE command).",
          "Cost models are database-specific.",
          "Materialized views can pre-join data."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How does query optimization work?",
          "Explain cost-based vs heuristic optimization.",
          "What are common join algorithms and when are they used?",
          "How do statistics affect query performance?"
        ]
      }
    ]
  },
  "11": {
    title: "Joins and Set Operations",
    sections: [
      {
        heading: "Overview",
        text: "Joins combine rows from two or more tables based on a related column. Set operations combine results of multiple queries."
      },
      {
        heading: "INNER JOIN",
        text: "Returns rows with matching values in both tables. Syntax: SELECT * FROM A INNER JOIN B ON A.key = B.key."
      },
      {
        heading: "OUTER JOIN",
        text: "Left, Right, Full outer joins return all rows from one side (or both) and NULL for missing matches."
      },
      {
        heading: "Self Join",
        text: "Joining a table with itself, often using aliases. Useful for hierarchical data (e.g., employees with managers)."
      },
      {
        heading: "Set Operations",
        text: "UNION (combines results, distinct), UNION ALL (includes duplicates), INTERSECT (common rows), EXCEPT (rows in first not second)."
      },
      {
        heading: "Key Points",
        bullets: [
          "Cartesian product (cross join) combines all rows; rarely used.",
          "Natural join automatically joins on same-named columns.",
          "Join conditions can be non-equi (e.g., <, >).",
          "Set operations require same number of columns and compatible types."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "Explain the difference between INNER and OUTER join.",
          "What is a self join?",
          "What is the difference between UNION and UNION ALL?",
          "Write a query to find employees who are also managers."
        ]
      }
    ]
  },
  "12": {
    title: "Subqueries and Views",
    sections: [
      {
        heading: "Overview",
        text: "Subqueries are queries nested inside another query. Views are virtual tables defined by a query, providing abstraction and security."
      },
      {
        heading: "Subquery Types",
        text: "Scalar (returns one value), row (one row), table (multiple rows). Can be in SELECT, FROM, WHERE, HAVING."
      },
      {
        heading: "Correlated Subqueries",
        text: "Subqueries that reference outer query columns. Executed once per outer row. Example: SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id)."
      },
      {
        heading: "Views",
        text: "CREATE VIEW view_name AS query. Views can be updatable (with restrictions). They simplify complex queries and restrict access."
      },
      {
        heading: "Materialized Views",
        text: "Stores the view result physically. Refreshed periodically or on commit. Improves performance but increases storage."
      },
      {
        heading: "Key Points",
        bullets: [
          "Subqueries can be used with IN, EXISTS, ANY, ALL.",
          "Views are schema objects; they don't store data unless materialized.",
          "Updatable views require certain conditions (no aggregations, etc.).",
          "WITH clause (CTE) for common table expressions."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is the difference between a subquery and a join?",
          "Explain correlated subqueries with an example.",
          "What is a view and why use it?",
          "When would you use a materialized view?"
        ]
      }
    ]
  },
  "13": {
    title: "Database Security",
    sections: [
      {
        heading: "Overview",
        text: "Database security involves protecting data from unauthorized access, ensuring privacy, and maintaining integrity. It includes authentication, authorization, and encryption."
      },
      {
        heading: "Privileges and Roles",
        text: "GRANT/REVOKE control permissions (SELECT, INSERT, UPDATE, DELETE). Roles group privileges for easier management."
      },
      {
        heading: "Authentication",
        text: "Users authenticate via passwords, certificates, or external services (LDAP, Kerberos)."
      },
      {
        heading: "Encryption",
        text: "Data-at-rest encryption (Transparent Data Encryption) and data-in-transit (TLS/SSL). Column-level encryption for sensitive fields."
      },
      {
        heading: "Auditing",
        text: "Audit logs track who did what, when. Useful for compliance and intrusion detection."
      },
      {
        heading: "Key Points",
        bullets: [
          "Principle of least privilege.",
          "Use parameterized queries to prevent SQL injection.",
          "Database firewalls and activity monitoring.",
          "Regular security assessments."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you grant and revoke privileges?",
          "What is the difference between authentication and authorization?",
          "How can you prevent SQL injection?",
          "Explain data encryption at rest and in transit."
        ]
      }
    ]
  },
  "14": {
    title: "NoSQL Databases",
    sections: [
      {
        heading: "Overview",
        text: "NoSQL databases are non-relational, designed for scalability, flexibility, and handling large volumes of data. They are categorized by data model."
      },
      {
        heading: "Document Stores",
        text: "Store data in documents (JSON, BSON). Example: MongoDB. Queries are based on document structure. Supports nested data."
      },
      {
        heading: "Key-Value Stores",
        text: "Simple hash tables. Example: Redis, DynamoDB. Fast for point lookups; often used for caching."
      },
      {
        heading: "Column-Family Stores",
        text: "Store data in columns rather than rows. Example: Cassandra, HBase. Good for write-heavy workloads and time-series data."
      },
      {
        heading: "Graph Databases",
        text: "Store entities and relationships as nodes and edges. Example: Neo4j. Efficient for connected data (social networks, recommendations)."
      },
      {
        heading: "Key Points",
        bullets: [
          "NoSQL often sacrifices ACID for availability and performance (CAP theorem).",
          "BASE (Basically Available, Soft state, Eventually consistent) vs ACID.",
          "Use cases: big data, real-time analytics, IoT.",
          "Polyglot persistence uses multiple DB types."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is NoSQL and why is it used?",
          "Compare document, key-value, column, and graph databases.",
          "Explain the CAP theorem.",
          "When would you choose NoSQL over a relational database?"
        ]
      }
    ]
  },
  "15": {
    title: "Distributed Databases",
    sections: [
      {
        heading: "Overview",
        text: "Distributed databases spread data across multiple sites. They provide transparency, scalability, and fault tolerance."
      },
      {
        heading: "Data Fragmentation",
        text: "Horizontal (rows) and vertical (columns) fragmentation. Fragments can be allocated to different sites."
      },
      {
        heading: "Replication",
        text: "Copies of data stored at multiple sites. Improves availability and read performance but complicates consistency."
      },
      {
        heading: "CAP Theorem",
        text: "In a distributed system, you can have at most two of: Consistency, Availability, and Partition tolerance. Trade-offs are made."
      },
      {
        heading: "Distributed Transactions",
        text: "Two-phase commit (2PC) ensures atomicity. Three-phase commit (3PC) improves on 2PC. Paxos/Raft for consensus."
      },
      {
        heading: "Key Points",
        bullets: [
          "Distributed database design: fragmentation, allocation, replication.",
          "Transparency: location, replication, fragmentation.",
          "Consistency models: strong, eventual, causal.",
          "Sharding is common in NoSQL systems."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is a distributed database?",
          "Explain fragmentation and replication.",
          "What is the CAP theorem?",
          "How does two-phase commit work?"
        ]
      }
    ]
  },
  "16": {
    title: "Object-Relational Mapping (ORM)",
    sections: [
      {
        heading: "Overview",
        text: "ORM is a technique to map object-oriented programming objects to relational database tables. It reduces boilerplate code and simplifies data access."
      },
      {
        heading: "ORM Frameworks",
        text: "Popular ORMs: Hibernate (Java), Entity Framework (.NET), Django ORM (Python), SQLAlchemy (Python), Sequelize (Node.js)."
      },
      {
        heading: "Mapping",
        text: "Classes map to tables, properties to columns. Relationships: one-to-many, many-to-many are managed via annotations or configuration."
      },
      {
        heading: "Lazy vs. Eager Loading",
        text: "Lazy loading defers loading of associated data until accessed. Eager loads all in one query. Trade-offs: performance vs. network overhead."
      },
      {
        heading: "Benefits and Drawbacks",
        text: "Benefits: productivity, portability. Drawbacks: performance overhead, complex queries may require raw SQL, object-relational impedance mismatch."
      },
      {
        heading: "Key Points",
        bullets: [
          "ORM abstracts database differences.",
          "N+1 query problem: solving with eager loading or batching.",
          "Use caching and connection pooling with ORM.",
          "Many ORMs support migrations (schema changes)."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "What is ORM and why is it used?",
          "What are the pros and cons of ORM?",
          "Explain lazy loading and eager loading.",
          "How do you handle the N+1 problem in ORM?"
        ]
      }
    ]
  },
  "17": {
    title: "Database Testing and Performance",
    sections: [
      {
        heading: "Overview",
        text: "Database testing ensures correctness and performance. It includes unit tests, integration tests, and performance tuning."
      },
      {
        heading: "Explain Plans",
        text: "Use EXPLAIN to see the execution plan of a query. Analyze cost, table scans, index usage, and join methods."
      },
      {
        heading: "Query Profiling",
        text: "Tools like MySQL's SHOW PROFILE, PostgreSQL's auto_explain, or slow query logs identify problematic queries."
      },
      {
        heading: "Performance Tuning",
        text: "Index optimization, query rewriting, denormalization, partitioning, and hardware upgrades. Monitor metrics (CPU, I/O, memory)."
      },
      {
        heading: "Benchmarking",
        text: "Tools like sysbench, pgbench, or JMeter simulate load. Use to find bottlenecks and test scalability."
      },
      {
        heading: "Key Points",
        bullets: [
          "Test with realistic data volumes.",
          "Use database-specific performance views (e.g., Oracle AWR).",
          "Regularly update statistics.",
          "Consider connection pooling and caching layers."
        ]
      },
      {
        heading: "Common Interview Questions",
        bullets: [
          "How do you identify a slow query?",
          "What is an execution plan and how do you read it?",
          "What are some common performance tuning strategies?",
          "How would you benchmark a database?"
        ]
      }
    ]
  }
};