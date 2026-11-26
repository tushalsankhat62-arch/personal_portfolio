import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Mail, Code2, Palette, BarChart3, Video, Menu } from 'lucide-react';
import './style.css';

const skills = [
  { icon: Palette, title: 'Creative & Design', items: ['Canva design', 'Social media posts & banners', 'Reel concepts', 'Visual storytelling'] },
  { icon: BarChart3, title: 'Digital Marketing', items: ['Instagram & LinkedIn content', 'Trend research', 'Content planning', 'Engagement metrics'] },
  { icon: Code2, title: 'Technical', items: ['React.js', 'Data Science fundamentals', 'Data analysis', 'Web interface development'] },
  { icon: Video, title: 'Content Production', items: ['Short-video shooting', 'Video editing', 'Creative communication', 'Team collaboration'] },
];

function App() {
  return <div className="site">
    <header className="nav wrap">
      <a className="brand" href="#home">TS<span>.</span></a>
      <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#work">Work</a><a href="#contact" className="nav-cta">Contact <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot"/> OPEN TO DIGITAL MARKETING OPPORTUNITIES</div>
          <h1>Creative ideas.<br/><em>Meaningful</em> impact.</h1>
          <p className="lead">Hi, I'm <strong>Tushal Sankhat</strong> — a BCA graduate blending creativity, technology and data to create engaging digital experiences.</p>
          <div className="actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Let's connect</a></div>
          <div className="hero-meta"><span>BASED IN SURAT, GUJARAT</span><span>CREATIVE · ANALYTICAL · TECHNICAL</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract graphic">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="glass-card"><span className="card-kicker">MY APPROACH</span><div className="big-mark">C<span>×</span>T<span>×</span>D</div><p>Creativity<br/>meets technology<br/>meets data.</p><div className="card-line"/></div>
          <div className="floating-tag tag-top">✳ Creative thinking</div><div className="floating-tag tag-bottom">↗ Always learning</div>
        </div>
      </section>

      <section className="ticker"><div>CONTENT STRATEGY <b>✳</b> CREATIVE DESIGN <b>✳</b> DATA INSIGHTS <b>✳</b> WEB TECHNOLOGY <b>✳</b> CONTENT STRATEGY <b>✳</b></div></section>

      <section className="section wrap" id="about">
        <div className="section-label">01 / ABOUT ME</div>
        <div className="about-grid"><h2>Curious by nature.<br/><em>Creative by choice.</em></h2><div><p className="body-large">I'm a creative and enthusiastic BCA graduate from Veer Narmad South Gujarat University (VNSGU), with a strong interest in digital marketing.</p><p>I enjoy exploring social media trends, planning content, designing visual assets and understanding how data can help improve online engagement. My technical experience with React.js and data science gives me an additional perspective when approaching digital challenges.</p><p>I'm eager to contribute, learn quickly and grow with a collaborative team.</p></div></div>
        <div className="stats"><div><strong>8.0</strong><span>BCA CGPA</span></div><div><strong>2026</strong><span>GRADUATE</span></div><div><strong>3</strong><span>LANGUAGES</span></div><div><strong>∞</strong><span>IDEAS TO EXPLORE</span></div></div>
      </section>

      <section className="section skills-section" id="skills"><div className="wrap">
        <div className="section-label">02 / WHAT I BRING</div><div className="section-heading"><h2>A mix of <em>creative</em><br/>and technical skills.</h2><p>Combining content, design, analysis and technology to support stronger digital experiences.</p></div>
        <div className="skill-grid">{skills.map(({icon: Icon,title,items})=><article className="skill-card" key={title}><div className="skill-icon"><Icon size={22}/></div><h3>{title}</h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div>
      </div></section>

      <section className="section wrap" id="experience">
        <div className="section-label">03 / EXPERIENCE</div><div className="section-heading"><h2>Learning by <em>doing.</em></h2><p>Practical experience that has helped me build a foundation across technology and data.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">INTERNSHIP</div><div><h3>React.js Intern</h3><p>Built web interface components and developed an eye for clean layouts, design and user experience. Worked with a team, met deadlines and learned new tools quickly.</p><div className="chips"><span>React.js</span><span>UI components</span><span>Teamwork</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">INTERNSHIP</div><div><h3>Data Science Engineering Intern</h3><p>Worked with data to identify patterns and insights — a foundation that can support tracking content performance and understanding online engagement.</p><div className="chips"><span>Data analysis</span><span>Patterns & insights</span><span>Metrics</span></div></div></article>
        </div>
      </section>

      <section className="section work-section" id="work"><div className="wrap">
        <div className="section-label">04 / SELECTED WORK</div><div className="section-heading"><h2>Work in progress.<br/><em>Room to create.</em></h2><p>This area is ready for your real projects, campaign designs, reels, dashboards and website work.</p></div>
        <div className="work-grid">
          <article className="work-card work-a"><div className="work-art art-a"><span>01</span><div className="poster-shape">TASK<br/>MANAGER</div></div><div className="work-info"><div><h3>Task Manager App</h3><p>A full-featured task management application built with React — create, track and organize your daily tasks.</p></div><a href="https://task-manger-app-blush.vercel.app/" target="_blank" rel="noopener noreferrer" className="button primary" style={{marginTop: 'auto'}}>Live Project <ArrowUpRight size={15}/></a><span className="work-type">DEVELOPMENT</span></div></article>
          <article className="work-card work-b"><div className="work-art art-b"><span>02</span><div className="dashboard"><div/><div/><div/><b>FITNESS</b></div></div><div className="work-info"><div><h3>Gym React App</h3><p>A fitness and gym management application built with React for tracking workouts and membership plans.</p></div><a href="https://sankhat-gym-react-5gc9.vercel.app/" target="_blank" rel="noopener noreferrer" className="button primary" style={{marginTop: 'auto'}}>Live Project <ArrowUpRight size={15}/></a><span className="work-type">DEVELOPMENT</span></div></article>
          <article className="work-card work-c"><div className="work-art art-c"><span>03</span><div className="browser"><div className="browser-bar">● ● ●</div><div className="browser-content">DIGITAL<br/><i>EXPERIENCES</i><small>DESIGN / BUILD / LEARN</small></div></div></div><div className="work-info"><div><h3>React.js web interface</h3><p>Add screenshots and a link to your React project.</p></div><span className="work-type">DEVELOPMENT</span></div></article>
        </div>
        <p className="note">Note: These are portfolio placeholders, not claims of completed client projects or campaign results. Replace them with your actual work before applying.</p>
      </div></section>

      <section className="section wrap" id="education"><div className="section-label">05 / EDUCATION & MORE</div><div className="education-card"><div><span className="mini-label">EDUCATION</span><h3>Bachelor of Computer Applications</h3><p>Veer Narmad South Gujarat University (VNSGU)</p></div><div className="education-year">2026 <span>CGPA 8.0</span></div></div><div className="languages"><span className="mini-label">LANGUAGES</span><p>Gujarati <b>·</b> Hindi <b>·</b> English</p></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="section-label">06 / LET'S CONNECT</div><h2>Have a project<br/>or opportunity? <em>Let's talk.</em></h2><p>I'm eager to learn, contribute and grow. Get in touch.</p><a className="button primary" href="mailto:tushalsankhat62@gmail.com">Email me <ArrowUpRight size={17}/></a><a className="button secondary" href="/resume.pdf" download>Download Resume <ArrowUpRight size={17}/></a><div className="contact-details"><a href="mailto:tushalsankhat62@gmail.com"><Mail size={16}/> tushalsankhat62@gmail.com</a><span>Surat, Gujarat, India</span></div></div></section>

      <section className="section wrap socials-section" id="socials"><div className="section-label">07 / SOCIALS</div><div className="social-grid"><a href="https://www.linkedin.com/in/tushal-sankhat-ba58763b6" target="_blank" rel="noopener noreferrer" className="social-card linkedin"><span className="social-icon">in</span><div><h3>LinkedIn</h3><p>tushal-sankhat-ba58763b6</p></div><ArrowUpRight size={14}/></a><a href="https://github.com/tushalsankhat62-arch" target="_blank" rel="noopener noreferrer" className="social-card github"><span className="social-icon">github</span><div><h3>GitHub</h3><p>tushalsankhat62-arch</p></div><ArrowUpRight size={14}/></a></div></section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home">TS<span>.</span></a><span>© 2026 Tushal Sankhat. Built with curiosity.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
