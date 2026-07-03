export const authSyllabus = [
  { id: 1, topic: "Authentication vs Authorization", mustKnow: "Identity verification vs Permission evaluation" },
  { id: 2, topic: "JSON Web Tokens (JWT)", mustKnow: "Header, Payload, Signature, stateless nature" },
  { id: 3, topic: "Sessions vs JWT", mustKnow: "Server-side state vs Client-side state" },
  { id: 4, topic: "Cookies and Flags", mustKnow: "HttpOnly, Secure, SameSite attributes" },
  { id: 5, topic: "Password Hashing (Bcrypt)", mustKnow: "One-way hashes, salts, preventing rainbow table attacks" },
  { id: 6, topic: "Cross-Site Scripting (XSS)", mustKnow: "Injecting malicious scripts, prevention via sanitization" },
  { id: 7, topic: "Cross-Site Request Forgery (CSRF)", mustKnow: "Exploiting saved cookies, anti-CSRF tokens, SameSite policy" },
  { id: 8, topic: "SQL Injection", mustKnow: "Malicious DB queries, prevention via parameterized queries" }
];