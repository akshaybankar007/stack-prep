import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('studynotes');
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    localStorage.setItem('studynotes', JSON.stringify(notes));
  }, [notes]);

  const handleSave = (e) => {
    e.preventDefault();

    if (title.trim() === '' || content.trim() === ''){
      alert('Cannot save an empty note');
      return;
    }
    const newNote = {
      id: Date.now(),
      title: title,
      tag: tag.trim() === '' ? '#General' : tag,
      content: content
    };
    setNotes([...notes, newNote]);

    setTitle('');
    setTag('');
    setContent('');
  };
  const deleteHandle = (idToRemove) => {
    const filteredNotes = notes.filter(note => note.id !== idToRemove);
    setNotes(filteredNotes);
};
  return (
    <>
    <header className='app-header'>
      <h1>Interview Preparation</h1>
      <p>This is a comprehensive guide for a fresher MERN Stack Developer</p>
    </header>
    <main className="app-container">
        
        {/* LEFT COLUMN: The Input Form */}
        <section className="note-creation">
          <h2>Create New Note</h2>
          <form className="note-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <input 
                type="text" 
                value={tag} 
                onChange={(e) => setTag(e.target.value)} 
              />
            </div>
            
            <div className="form-group">
              <label>Note Details</label>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Save Note</button>
          </form>
        </section>

        {/* RIGHT COLUMN: The Notes Grid */}
        <section className="notes-grid">
          <h2>Saved Knowledge</h2>
          
         {notes.map((note) => (
            <article key={note.id} className="note-card">
              <div className="note-header">
                <h3>{note.title}</h3>
                <span className="note-tag">{note.tag}</span>
              </div>
              <div className="note-body">
                <p>{note.content}</p>
              </div>
              <div className="note-footer">
                <span className="note-date">Added: Just now</span>
                <button 
                  className="delete-btn" 
                  onClick={() => deleteHandle(note.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    <footer className='app-footer'>
      Akshay Bankar @2026
    </footer>
    </>
  );
}
export default App;