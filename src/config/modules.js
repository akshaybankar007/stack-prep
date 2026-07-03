import { javaSyllabus } from '../data/javaSyllabus';
import { javaContent } from '../data/javaContent';
import { htmlSyllabus } from '../data/htmlSyllabus';
import { htmlContent } from '../data/htmlContent';
import { cssSyllabus } from '../data/cssSyllabus';
import { cssContent } from '../data/cssContent';
import { jsSyllabus } from '../data/jsSyllabus';
import { jsContent } from '../data/jsContent';
import { reactSyllabus } from '../data/reactSyllabus';
import { reactContent } from '../data/reactContent';
import { nodeSyllabus } from '../data/nodeSyllabus';
import { nodeContent } from '../data/nodeContent';
import { expressSyllabus } from '../data/expressSyllabus';
import { expressContent } from '../data/expressContent';
import { mongoSyllabus } from '../data/mongoSyllabus';
import { mongoContent } from '../data/mongoContent';
import { sqlSyllabus } from '../data/sqlSyllabus';
import { sqlContent } from '../data/sqlContent';
// Add these imports:
import { authSyllabus } from '../data/authSyllabus';
import { authContent } from '../data/authContent';
import { systemSyllabus } from '../data/systemSyllabus';
import { systemContent } from '../data/systemContent';

export const modules = [
  { slug: 'java', label: 'Java', title: 'Java Preparation', description: 'Complete syllabus for Java.', syllabus: javaSyllabus, content: javaContent },
  { slug: 'html', label: 'HTML', title: 'HTML Preparation', description: 'Master semantic HTML and APIs.', syllabus: htmlSyllabus, content: htmlContent },
  { slug: 'css', label: 'CSS', title: 'CSS Preparation', description: 'Layout, responsive design, animations.', syllabus: cssSyllabus, content: cssContent },
  { slug: 'javascript', label: 'JavaScript', title: 'JavaScript Preparation', description: 'Core JS, ES6+, async programming.', syllabus: jsSyllabus, content: jsContent },
  { slug: 'react', label: 'React', title: 'React Preparation', description: 'Hooks, state management, optimization.', syllabus: reactSyllabus, content: reactContent },
  { slug: 'node', label: 'Node.js', title: 'Node.js Preparation', description: 'Server-side JS, event loop, streams.', syllabus: nodeSyllabus, content: nodeContent },
  { slug: 'express', label: 'Express.js', title: 'Express Preparation', description: 'REST APIs, middleware, routing.', syllabus: expressSyllabus, content: expressContent },
  { slug: 'mongodb', label: 'MongoDB', title: 'MongoDB Preparation', description: 'NoSQL, aggregation, Mongoose.', syllabus: mongoSyllabus, content: mongoContent },
  { slug: 'sql', label: 'SQL', title: 'SQL Preparation', description: 'Relational databases, queries, joins.', syllabus: sqlSyllabus, content: sqlContent },
  // Add these new objects:
  {
    slug: 'auth',
    label: 'Auth & Security',
    title: 'Authentication & Security',
    description: 'Master JWT, Cookies, XSS, CSRF, and secure backend architectures.',
    syllabus: authSyllabus,
    content: authContent,
  },
  {
    slug: 'system-design',
    label: 'System Design',
    title: 'System Design Basics',
    description: 'Scaling, Load Balancers, Caching, CAP Theorem, and Microservices.',
    syllabus: systemSyllabus,
    content: systemContent,
  }
];

export function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}