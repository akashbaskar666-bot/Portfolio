import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLaptopCode,
  FaNetworkWired,
  FaBullhorn,
  FaTools,
} from "react-icons/fa";
import "./App.css";

function App() {
  const skills = [
    "IT Support",
    "Windows Troubleshooting",
    "Networking Basics",
    "Hardware Support",
    "Digital Marketing",
    "Canva",
    "SEO Basics",
    "WordPress",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
  ];

  const projects = [
    {
      title: "School Management System",
      desc: "A web app for managing students, attendance, notices, and dashboard features.",
      tech: "React, FastAPI, MySQL",
    },
    {
      title: "Gym Management System",
      desc: "A CRUD-based system to manage members, plans, payments, and gym records.",
      tech: "PHP, MySQL, HTML, CSS",
    },
    {
      title: "Digital Brand Campaign",
      desc: "A sample digital marketing campaign with poster design, SEO keywords, and content plan.",
      tech: "Canva, SEO, Social Media",
    },
  ];

  return (
    <div className="app">
      <div className="gold-light one"></div>
      <div className="gold-light two"></div>

      <nav className="navbar">
        <h2>AKASH</h2>
        <div>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="tagline">Royal Black & Gold Portfolio</p>
          <h1>
            Hi, I'm <span>Akash Baskaran</span>
          </h1>
          <h3>IT Support Executive | Digital Marketing Learner</h3>
          <p className="hero-text">
            I am an IT graduate focused on technical support, troubleshooting,
            digital tools, and creating clean digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Work</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          className="royal-card"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="crown">♛</div>
          <h2>IT Support</h2>
          <p>Technical Support • Digital Skills • Problem Solving</p>
        </motion.div>
      </section>

      <section id="about" className="section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <p className="about-text">
          I am Akash Baskaran, a B.Voc Information Technology graduate. I am
          interested in IT Support, Technical Support, Digital Marketing, and
          Web Support roles. I enjoy solving practical computer problems,
          supporting users, and working with modern digital tools.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <FaTools />
            <h3>IT Support</h3>
            <p>Windows issues, software setup, basic troubleshooting.</p>
          </div>

          <div className="service-card">
            <FaNetworkWired />
            <h3>Networking</h3>
            <p>Basic LAN, Wi-Fi, IP, router, and connectivity support.</p>
          </div>

          <div className="service-card">
            <FaBullhorn />
            <h3>Digital Marketing</h3>
            <p>SEO basics, content ideas, social media and Canva design.</p>
          </div>

          <div className="service-card">
            <FaLaptopCode />
            <h3>Web Support</h3>
            <p>HTML, CSS, WordPress, website updates and maintenance.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <div className="project-icon">✦</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <small>{project.tech}</small>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <h2>Experience</h2>

        <div className="timeline">
          <div>
            <h3>Cybersecurity Internship</h3>
            <p>Learned basics of cyber safety, threats, and security awareness.</p>
          </div>

          <div>
            <h3>Android Development Internship</h3>
            <p>Worked with mobile application concepts and UI development.</p>
          </div>

          <div>
            <h3>Hardware & Networking Internship</h3>
            <p>Gained knowledge in computer hardware and network support.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Open to IT Support, Technical Support, Web Support and Digital Marketing roles.</p>

        <div className="contact-icons">
          <a href="mailto:akashbaskar666@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/akashbaskar666-bot" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/akash-b-a600243a2/" target="_blank"><FaLinkedin /></a>
        </div>
      </section>

      <footer>
        <p>© 2026 Akash Baskaran | Royal Portfolio</p>
      </footer>
    </div>
  );
}

export default App;