export const systemContent = {
  1: {
    title: "Stateful vs Stateless Systems",
    sections: [
      { heading: "Stateful Architecture", text: "A stateful server remembers client data (state) from one request to the next. For example, storing a user's session in the server's RAM. If the user's next request hits a different server instance, they will be unauthenticated. Hard to scale." },
      { heading: "Stateless Architecture", text: "A stateless server keeps no memory of previous requests. Every request contains all the information needed to process it (e.g., a JWT in the header). Any server instance can handle any request. Extremely easy to scale horizontally." }
    ]
  },
  2: {
    title: "Horizontal vs Vertical Scaling",
    sections: [
      { heading: "Vertical Scaling (Scaling Up)", text: "Increasing the power of a single machine by adding more CPU, RAM, or storage. Pros: Easy to implement, no code changes. Cons: Has a hard hardware limit, creates a single point of failure." },
      { heading: "Horizontal Scaling (Scaling Out)", text: "Adding more machines (nodes) to the resource pool and distributing the traffic among them. Pros: Infinite scalability, high fault tolerance. Cons: Complex architecture, requires load balancers and stateless services." }
    ]
  },
  3: {
    title: "Load Balancers",
    sections: [
      { heading: "Traffic Distribution", text: "A Load Balancer sits in front of your servers and routes client requests across all servers capable of fulfilling them, maximizing speed and preventing any one server from overloading." },
      { heading: "Algorithms", text: "- Round Robin: Distributes requests sequentially across the server group.\n- Least Connections: Sends requests to the server with the fewest active connections.\n- IP Hash: Routes requests from the same IP to the same server consistently." }
    ]
  },
  4: {
    title: "Caching Strategies",
    sections: [
      { heading: "Why Cache?", text: "Database queries and API calls are slow. Caching stores the results of expensive operations in high-speed RAM (using tools like Redis or Memcached) so subsequent requests are served in milliseconds." },
      { heading: "Cache-Aside Pattern", text: "The application first checks the cache. If data is found (Cache Hit), return it. If not found (Cache Miss), query the database, store the result in the cache, and then return it." },
      { heading: "Eviction Policies", text: "Since RAM is limited, old data must be cleared. LRU (Least Recently Used) evicts data that hasn't been requested in a long time. TTL (Time To Live) automatically deletes data after a set time frame (e.g., 5 minutes)." }
    ]
  },
  5: {
    title: "Content Delivery Networks (CDN)",
    sections: [
      { heading: "Reducing Physical Latency", text: "The speed of light is a physical limit. If a user in India requests an image from a server in New York, it takes time. A CDN (like Cloudflare or AWS CloudFront) copies static assets (HTML, CSS, JS, Images) to edge servers placed all around the globe. Users pull data from the node physically closest to them." }
    ]
  },
  6: {
    title: "CAP Theorem",
    sections: [
      { heading: "The Impossible Triangle", text: "In any distributed data store, you can only guarantee TWO of the following three properties simultaneously:\n1. Consistency: Every read receives the most recent write.\n2. Availability: Every request receives a non-error response, without guarantee it contains the most recent write.\n3. Partition Tolerance: The system continues to operate despite network failures dropping messages between nodes." },
      { heading: "Real-World Application", text: "Network partitions (P) are unavoidable. Therefore, databases must choose between CP (e.g., MongoDB, Redis) where the system stops responding if it can't ensure consistency, or AP (e.g., Cassandra) where the system keeps responding but might return stale data." }
    ]
  },
  7: {
    title: "Monolithic vs Microservices",
    sections: [
      { heading: "Monolith", text: "An architecture where all application logic (Auth, Payments, Inventory) is bundled into a single codebase and deployed as a single unit. Easy to develop and deploy initially, but becomes a bottleneck as the team grows, as a bug in Payments can crash the entire system." },
      { heading: "Microservices", text: "Splitting the application into small, independent services that communicate via APIs or message queues. Pros: Teams can work independently, services can be scaled individually, and a crash in one service doesn't crash the whole app. Cons: Massively increased operational complexity and network latency." }
    ]
  },
  8: {
    title: "Message Queues",
    sections: [
      { heading: "Decoupling Services", text: "When a user uploads a video, processing it might take 10 minutes. If the API waits for completion, the connection will time out. Message Queues (RabbitMQ, Kafka, AWS SQS) solve this through asynchronous processing." },
      { heading: "Pub/Sub Architecture", text: "The API immediately returns 'Upload Successful' to the user and pushes an 'Event Message' into the Queue. A separate, background Worker Server reads the message from the queue and processes the video at its own pace. If the worker crashes, the message remains in the queue to be tried again." }
    ]
  }
};