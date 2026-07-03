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
// Add these imports:
import { nodeSyllabus } from '../data/nodeSyllabus';
import { nodeContent } from '../data/nodeContent';
import { expressSyllabus } from '../data/expressSyllabus';
import { expressContent } from '../data/expressContent';
import { mongoSyllabus } from '../data/mongoSyllabus';
import { mongoContent } from '../data/mongoContent';
import { sqlSyllabus } from '../data/sqlSyllabus';
import { sqlContent } from '../data/sqlContent';

export const modules = [
  { slug: 'java', label: 'Java Mastery', title: 'Java Preparation Module', description: 'Complete syllabus for cracking Java-based interviews.', syllabus: javaSyllabus, content: javaContent },
  { slug: 'html', label: 'HTML', title: 'HTML Preparation Module', description: 'Master semantic HTML, forms, accessibility, and modern HTML5 APIs.', syllabus: htmlSyllabus, content: htmlContent },
  { slug: 'css', label: 'CSS', title: 'CSS Preparation Module', description: 'Complete CSS syllabus covering layout, responsive design, and animations.', syllabus: cssSyllabus, content: cssContent },
  { slug: 'javascript', label: 'JavaScript', title: 'JavaScript Preparation Module', description: 'Master core JS, ES6+, async programming, and DOM manipulation.', syllabus: jsSyllabus, content: jsContent },
  { slug: 'react', label: 'React', title: 'React Preparation Module', description: 'Advanced React concepts, hooks, state management, and performance optimization.', syllabus: reactSyllabus, content: reactContent },
  // Add these new objects:
  {
    slug: 'node',
    label: 'Node.js',
    title: 'Node.js Preparation Module',
    description: 'Master server-side JS, the event loop, streams, and async architectures.',
    syllabus: nodeSyllabus,
    content: nodeContent,
  },
  {
    slug: 'express',
    label: 'Express.js',
    title: 'Express Preparation Module',
    description: 'Learn REST APIs, middleware, routing, and backend architecture.',
    syllabus: expressSyllabus,
    content: expressContent,
  },
  {
    slug: 'mongodb',
    label: 'MongoDB',
    title: 'MongoDB Preparation Module',
    description: 'Master NoSQL, schema design, aggregation pipelines, and Mongoose.',
    syllabus: mongoSyllabus,
    content: mongoContent,
  },
  {
    slug: 'sql',
    label: 'SQL / RDBMS',
    title: 'SQL Preparation Module',
    description: 'Master relational databases, complex queries, joins, and database design.',
    syllabus: sqlSyllabus,
    content: sqlContent,
  }
];

export function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}