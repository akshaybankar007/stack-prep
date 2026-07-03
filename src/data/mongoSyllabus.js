export const mongoSyllabus = [
  { id: 1, topic: "MongoDB vs SQL Databases", mustKnow: "NoSQL, flexible schemas, unstructured data use cases" },
  { id: 2, topic: "Documents and Collections", mustKnow: "BSON format, JSON representation, collections vs tables" },
  { id: 3, topic: "CRUD Operations", mustKnow: "insertOne, find, updateOne, deleteOne" },
  { id: 4, topic: "Query Operators", mustKnow: "$eq, $gt, $lt, $in, $or, $and syntax" },
  { id: 5, topic: "Projection", mustKnow: "Including (1) or excluding (0) specific fields in results" },
  { id: 6, topic: "ObjectId", mustKnow: "12-byte hex structure, generation, timestamp extraction" },
  { id: 7, topic: "Indexing", mustKnow: "Improving query speed, single vs compound vs text indexes" },
  { id: 8, topic: "Aggregation Pipeline", mustKnow: "Stages: $match, $group, $project, $sort, $lookup" },
  { id: 9, topic: "Schema Design", mustKnow: "Embedding (denormalization) vs Referencing (normalization)" },
  { id: 10, topic: "Mongoose ODM", mustKnow: "Schemas, Models, Data Types, built-in validation" },
  { id: 11, topic: "Mongoose Population", mustKnow: "Using .populate() to resolve ObjectIds into full documents" },
  { id: 12, topic: "Data Consistency", mustKnow: "Write Concern (w:1, w:majority), Read Concern" },
  { id: 13, topic: "Transactions", mustKnow: "Multi-document ACID transactions, sessions" },
  { id: 14, topic: "Replication", mustKnow: "Replica Sets (Primary, Secondary), high availability" },
  { id: 15, topic: "Sharding", mustKnow: "Horizontal scaling, shard keys, distributing data across servers" }
];