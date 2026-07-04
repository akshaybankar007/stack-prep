import { Link } from 'react-router-dom';
import { modules } from '../config/modules';
import { getAllProgress } from '../hooks/useProgress';

export default function Dashboard() {
  const progress = getAllProgress();


  const priorityOrder = {
    'javascript': 1,
    'java': 2,
    'react': 3,
    'node': 4,
    'sql': 5,
    'mongodb': 6,
    'express': 7,

    'html': 98,
    'css': 99
  };

  const stats = modules.map((mod) => {
    const total = mod.syllabus.length;
    const completed = progress[mod.slug]?.length ?? 0;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { ...mod, total, completed, percent };
  }).sort((a, b) => (priorityOrder[a.slug] || 50) - (priorityOrder[b.slug] || 50));

  return (
    <div className="module-container">
      <h2> .. </h2>
      
      <div className="insight-message">
        <p>"Mastery is not measured by completion bars, but by comprehension. Focus on architectural understanding, build ruthlessly, and grasp the core mechanics."</p>
      </div>

      <h3 className="dashboard-section-title">           Module</h3>
      <div className="dashboard-grid">
        {stats.map((mod) => (
          <Link key={mod.slug} to={`/${mod.slug}`} className="dashboard-card">
            <div className="dashboard-card-header">
              <h4>{mod.label}</h4>
              <span className="dashboard-percent">{mod.percent}%</span>
            </div>
            <p className="dashboard-card-desc">{mod.description}</p>
            <div className="dashboard-card-progress">
              <div className="progress-bar-container small">
                <div className="progress-bar" style={{ width: `${mod.percent}%` }} />
              </div>
              <span className="dashboard-count">{mod.completed}/{mod.total} topics</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}