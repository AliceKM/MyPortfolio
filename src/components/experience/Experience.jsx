import React from 'react';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNextdotjs, 
  SiRedux, SiReactquery, SiPostgresql, SiGraphql, SiAmazonaws, 
  SiGit, SiJira, SiConfluence, SiBootstrap, SiTailwindcss 
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h5>Technical Skills</h5>
        <h2>My Experience</h2>
        <div className="header-decoration"></div>
      </div>

      <div className="experience-grid">
        {/* Languages & Scripting */}
        <div className="skill-card">
          <div className="card-header">
            <h3>Languages & Scripting</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <SiJavascript className="skill-icon" style={{ color: '#F7DF1E' }} />
              <div className="skill-text">
                <h4>JavaScript</h4>
                <span className="skill-subtext">ES6+</span>
              </div>
            </div>
            <div className="skill-item">
              <SiTypescript className="skill-icon" style={{ color: '#3178C6' }} />
              <div className="skill-text">
                <h4>TypeScript</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiHtml5 className="skill-icon" style={{ color: '#E34F26' }} />
              <div className="skill-text">
                <h4>HTML5</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiCss3 className="skill-icon" style={{ color: '#1572B6' }} />
              <div className="skill-text">
                <h4>CSS3</h4>
                <span className="skill-subtext">SASS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="skill-card">
          <div className="card-header">
            <h3>Frontend Development</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <FaReact className="skill-icon" style={{ color: '#61DAFB' }} />
              <div className="skill-text">
                <h4>React</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiNextdotjs className="skill-icon" />
              <div className="skill-text">
                <h4>Next.js</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiBootstrap className="skill-icon" style={{ color: '#7952B3' }} />
              <div className="skill-text">
                <h4>Bootstrap</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiTailwindcss className="skill-icon" style={{ color: '#06B6D4' }} />
              <div className="skill-text">
                <h4>Tailwind CSS</h4>
              </div>
            </div>
          </div>
        </div>

        {/* State Management */}
        <div className="skill-card">
          <div className="card-header">
            <h3>State Management</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <SiRedux className="skill-icon" style={{ color: '#764ABC' }} />
              <div className="skill-text">
                <h4>Redux</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiReactquery className="skill-icon" style={{ color: '#FF4154' }} />
              <div className="skill-text">
                <h4>React Query</h4>
              </div>
            </div>
            <div className="skill-item">
              <div className="zustand-icon">
                <span>Z</span>
              </div>
              <div className="skill-text">
                <h4>Zustand</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <div className="card-header">
            <h3>Databases</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <SiPostgresql className="skill-icon" style={{ color: '#4169E1' }} />
              <div className="skill-text">
                <h4>PostgreSQL</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiGraphql className="skill-icon" style={{ color: '#E10098' }} />
              <div className="skill-text">
                <h4>GraphQL</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-card">
          <div className="card-header">
            <h3>Tools & Platforms</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <SiAmazonaws className="skill-icon" style={{ color: '#FF9900' }} />
              <div className="skill-text">
                <h4>AWS</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiGit className="skill-icon" style={{ color: '#F05032' }} />
              <div className="skill-text">
                <h4>Git</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Testing & Agile */}
        <div className="skill-card">
          <div className="card-header">
            <h3>Testing & Agile</h3>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <SiJira className="skill-icon" style={{ color: '#0052CC' }} />
              <div className="skill-text">
                <h4>Jira</h4>
              </div>
            </div>
            <div className="skill-item">
              <SiConfluence className="skill-icon" style={{ color: '#172B4D' }} />
              <div className="skill-text">
                <h4>Confluence</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;