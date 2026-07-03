export const mongoContent = {
  1: {
    title: "MongoDB vs SQL Databases",
    sections: [
      { heading: "NoSQL Flexibility", text: "SQL databases (MySQL, PostgreSQL) use fixed schemas, tables, and rows, requiring complex joins. MongoDB is a NoSQL, Document-oriented database. It stores data in flexible, JSON-like documents (BSON). It scales horizontally effectively and allows fields to vary from document to document." }
    ]
  },
  2: {
    title: "Documents and Collections",
    sections: [
      { heading: "Terminology Mapping", text: "In SQL: Database -> Tables -> Rows -> Columns. In MongoDB: Database -> Collections -> Documents -> Fields. BSON (Binary JSON) allows MongoDB to store advanced data types that pure JSON cannot, such as Dates, ObjectIds, and raw binary data." }
    ]
  },
  3: {
    title: "CRUD Operations",
    sections: [
      { heading: "Core Methods", text: "- Create: `insertOne({})`, `insertMany([{}, {}])`\n- Read: `find({})` (returns cursor), `findOne({})`\n- Update: `updateOne({ filter }, { $set: { fields } })`, `updateMany()`\n- Delete: `deleteOne({ filter })`, `deleteMany()`" }
    ]
  },
  4: {
    title: "Query Operators",
    sections: [
      { heading: "Advanced Filtering", text: "MongoDB uses prefix operators to filter data.\n- `$eq` / `$ne`: Equals / Not Equals.\n- `$gt` / `$gte` / `$lt` / `$lte`: Greater/Less Than.\n- `$in` / `$nin`: Value exists within an array.\n- `$or` / `$and`: Logical operators.", code: `db.users.find({\n  $or: [\n    { age: { $gt: 25 } },\n    { location: { $eq: "Nagpur" } }\n  ]\n});` }
    ]
  },
  5: {
    title: "Projection",
    sections: [
      { heading: "Optimizing Payloads", text: "Projection dictates which fields are returned in a query, reducing network load. Use `1` to include a field, and `0` to exclude. The `_id` field is always returned by default unless explicitly excluded with `_id: 0`.", code: `db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 });` }
    ]
  },
  6: {
    title: "ObjectId",
    sections: [
      { heading: "The Primary Key", text: "Every document requires an `_id` field. MongoDB generates a 12-byte ObjectId: a 4-byte timestamp, a 5-byte random value, and a 3-byte incrementing counter. You can extract the creation date directly from the ID without a separate `createdAt` field." }
    ]
  },
  7: {
    title: "Indexing",
    sections: [
      { heading: "Performance Tuning", text: "Indexes speed up queries by preventing Collection Scans (scanning every document). \n- Single Field: `db.users.createIndex({ email: 1 })`\n- Compound: `db.users.createIndex({ age: 1, username: -1 })`\n- Unique: Enforces uniqueness (prevents duplicate emails)." }
    ]
  },
  8: {
    title: "Aggregation Pipeline",
    sections: [
      { heading: "Data Processing Framework", text: "Aggregation processes data records through a multi-stage pipeline.\n- `$match`: Filters documents.\n- `$group`: Groups by a key and applies accumulators (SUM/COUNT).\n- `$project`: Reshapes the document.\n- `$sort`: Orders results.\n- `$lookup`: Performs a left outer join with another collection.", code: `db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },\n  { $sort: { totalSpent: -1 } }\n]);` }
    ]
  },
  9: {
    title: "Schema Design",
    sections: [
      { heading: "Embedding vs Referencing", text: "- Embedding (Denormalization): Storing related data in the same document. Fast reads, bad for massive arrays.\n- Referencing (Normalization): Storing ObjectIds pointing to documents in other collections. Slower reads (requires `$lookup`), but better for large, independent datasets." }
    ]
  },
  10: {
    title: "Mongoose ODM",
    sections: [
      { heading: "Schema Validation in Node", text: "Enterprise applications require structure. Mongoose enforces strict schemas, default values, and data type validation before saving to the database.", code: `const userSchema = new mongoose.Schema({\n  email: { type: String, required: true, unique: true },\n  age: { type: Number, min: 18 }\n}, { timestamps: true });` }
    ]
  },
  11: {
    title: "Mongoose Population",
    sections: [
      { heading: "Resolving References", text: "If you used Referencing in your schema, `.populate()` tells Mongoose to automatically replace the stored ObjectIds with the actual data from the referenced collection during a query.", code: `Post.find().populate('author', 'name email').then(posts => console.log(posts));` }
    ]
  },
  12: {
    title: "Data Consistency",
    sections: [
      { heading: "Write and Read Concerns", text: "Write Concern (`w`) determines how many replica set members must acknowledge a write. `w: 1` means just the primary. `w: majority` means a majority of nodes, guaranteeing data won't be lost in a failover." }
    ]
  },
  13: {
    title: "Transactions",
    sections: [
      { heading: "ACID Compliance", text: "Transactions execute multiple operations across multiple documents in an all-or-nothing manner. If one operation fails, the entire transaction is rolled back, preventing partial data updates." }
    ]
  },
  14: {
    title: "Replication",
    sections: [
      { heading: "High Availability", text: "A Replica Set consists of one Primary node (receives writes) and multiple Secondary nodes (replicate data). If the Primary goes down, an election promotes a Secondary to Primary, ensuring zero downtime." }
    ]
  },
  15: {
    title: "Sharding",
    sections: [
      { heading: "Horizontal Scaling", text: "Sharding distributes data across multiple machines. A Shard Key dictates which chunk of data lives on which server, providing massive scalability." }
    ]
  }
};