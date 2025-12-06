import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'education', 'skills', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" onClick={() => scrollToSection('home')} className="nav-logo">Rinkal Dhankariya</a>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#achievements" onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-name">Rinkal Dhankariya</h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-description">
              Dedicated, Hardworking and always eager to learn and apply new technology.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get In Touch</a>
              <a href="#projects" className="btn btn-secondary" onClick={() => scrollToSection('projects')}>View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="job-title">Software Developer</h3>
                <h4 className="company-name">iFlair Web Technologies Pvt. Ltd</h4>
                <p className="job-period">02/2024 - Present, Ahmedabad</p>
                <ul className="job-description">
                  <li>Developed and maintained dynamic web applications using React and Angular ensuring seamless user experiences across multiple platforms and devices.</li>
                  <li>Collaborated with cross-functional teams to analyze project requirements, design scalable software architectures, and write clean, efficient code following industry best practices and coding standards.</li>
                  <li>Utilized frontend libraries and frameworks like Angular, Bootstrap, and Tailwind CSS to create responsive and engaging user interfaces.</li>
                  <li>Implemented Angular features such as components, directives, services, and pipes to build scalable, maintainable, and reusable web applications.</li>
                  <li>Contributed to the optimization and maintenance of existing web applications, conducting thorough testing and debugging to enhance functionality and improve overall performance, while adhering to Agile methodologies and project timelines.</li>
                  <li>Implemented backend solutions using Node.js integrating databases such as MySQL.</li>
                  <li>Leveraged SQL for database queries and management and employed REST API for efficient data communication between the frontend and backend.</li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3 className="degree">B.Tech - Computer Engineering</h3>
              <h4 className="institution">Government Engineering College Modasa</h4>
              <p className="education-period">10/2020 - 05/2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Angular</span>
                  <span className="skill-tag">KendoUI</span>
                  <span className="skill-tag">DaisyUI</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Bootstrap</span>
                  <span className="skill-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">NestJS</span>
                <span className="skill-tag">REST API</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Database</h3>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">typeORM</span>
                <span className="skill-tag">Prisma</span>
                <span className="skill-tag">Sequelize</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Google Cloud</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">GitLab</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
          <div className="project-card">
              <div className="project-icon">🔒</div>
              <h3 className="project-title">Fraud Detection System</h3>
              <p className="project-description">
                Developed a fraud detection system for document verification using NestJS with OCR technology and React as frontend. The system detects fraudulent documents like passports by analyzing and validating document authenticity through advanced OCR processing.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">📊</div>
              <h3 className="project-title">Data Logger</h3>
              <p className="project-description">
                Developed a React-based web dashboard application for remote mobile device data logging management. The system allows users to log in through the web application and remotely control IoT-connected mobile devices located elsewhere. Users can perform actions from the web dashboard to start or stop data logging on the connected mobile devices, enabling centralized control and monitoring of distributed IoT devices.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">🌐</div>
              <h3 className="project-title">Web-Based Agent Support System</h3>
              <p className="project-description">
                Developed an AI-powered website builder that enables users to create and manage websites with minimal coding knowledge, leveraging OpenAI's GPT API and pass prompt for content generation and customization.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">✈️</div>
              <h3 className="project-title">Cosma Aircraft</h3>
              <p className="project-description">
                Developed and maintained COSMA, a multiplatform aviation application (web & mobile) as part of a broader aviation software suite. Implemented features for aircraft data management, ensuring robust data validation and user-friendly interfaces.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">💼</div>
              <h3 className="project-title">Job-Portal</h3>
              <p className="project-description">
                Live project which uses React Sagas for providing a rich set of handle side effects and perform Internationalization in this project.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">📚</div>
              <h3 className="project-title">Book-Store</h3>
              <p className="project-description">
                Created web application using React, Node, Express, MongoDB and deployed on Firebase using Firebase hosting.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">📱</div>
              <h3 className="project-title">Primo</h3>
              <p className="project-description">
                Created a WebApp using React and load external script to handle data and based on different dimensions show Ads.
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">💬</div>
              <h3 className="project-title">iplus chatapp</h3>
              <p className="project-description">
                It is a Realtime Chat Application which uses SocketIO for two way communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-content">
              <h3 className="achievement-title">ServiceNow Women Code Hackathon</h3>
              <p className="achievement-date">02/2023</p>
              <p className="achievement-description">
                Participated in ServiceNow Women Code Hackathon which invites female engineering students pursuing a career in technology to create impact and help solve some of the most challenging problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section id="languages" className="section section-alt">
        <div className="container">
          <div className="languages-interests-grid">
            <div className="languages-section">
              <h2 className="section-title">Languages</h2>
              <div className="language-list">
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Native or Bilingual Proficiency</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Hindi</span>
                  <span className="language-level">Native or Bilingual Proficiency</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Gujarati</span>
                  <span className="language-level">Professional Working Proficiency</span>
                </div>
              </div>
            </div>
            <div className="interests-section">
              <h2 className="section-title">Interests</h2>
              <div className="interests-tags">
                <span className="interest-tag">Design</span>
                <span className="interest-tag">Web Development</span>
                <span className="interest-tag">Reading</span>
                <span className="interest-tag">Problem Solving</span>
                <span className="interest-tag">Coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-description">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:rinkalteli@gmail.com" className="contact-link">rinkalteli@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">Ahmedabad, India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://linkedin.com/in/rinkal-dhankariya" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <a href="https://github.com/Rinkal-2024" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
        </div>
      </footer>
    </div>
  )
}

export default App
