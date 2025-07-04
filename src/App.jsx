import { useState, useEffect } from "react";
import "./App.css";
import Image from "./assets/img/myimage.png"; // Placeholder for hero image

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 3000);
    }, 1000);
  };

  const skills = [
    { name: "JavaScript", level: 70 },
    { name: "React", level: 50 },
    { name: "Node.js", level: 25 },
    { name: "Python", level: 20 },
    { name: "MongoDB", level: 25 },
    { name: "TypeScript", level: 40 },
    { name: "Next.js", level: 20 },
    { name: "Tailwind CSS", level: 30 },
    { name: "Express.js", level: 20 },
    { name: "HTML/CSS", level: 60 },
    { name: "Git", level: 30 },
    { name: "Firebase", level: 15 },
    { name: "UI/UX Design", level: 20 },
    { name: "Performance Optimization", level: 20 },
    { name: "Collaboration", level: 50 },
    { name: "Project Management", level: 20 },
    { name: "Software Architecture", level: 15 },
    { name: "Version Control", level: 30 },
  ];

  const projects = [
    {
      id: 1,
      title: "Smart Farm Market System",
      description:
        "A comprehensive smart farming marketplace platform connecting farmers with buyers, featuring real-time market data, inventory management, and automated trading systems.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "firebase",
      ],
      image: "../src/assets/img/fwan.png",
      liveUrl: "https://fwan.vercel.app",
      codeUrl: "https://github.com/justiceadam673/FWAN",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Full-stack weather application providing real-time weather updates, forecasts, and alerts with a user-friendly interface .",
      tech: ["React", "Node.js", "Express"],
      image: "../src/assets/img/weatherapp.png",
      liveUrl: "https://weather-project-2whn.onrender.com/",
      codeUrl: "https://github.com/justiceadam673/WEATHER-PROJECT",
    },
    {
      id: 3,
      title: "AI StoryCheve",
      description:
        "An AI-powered storytelling platform that generates unique stories based on user inputs, featuring real-time collaboration and sharing capabilities.",
      tech: ["React", "Hugging Face API"],
      image: "../src/assets/img/storychef.png",
      liveUrl: "https://storycheve.vercel.app",
      codeUrl: "https://github.com/justiceadam673/storycheve",
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Nhub Foundation Plateau.",
      period: "2025 - Present",
      description:
        "Work together with team members to build real world applictions that are scalable and user friendly, also work on personal projects to aid in my learning.",
    },
    {
      title: "Frontend Developer",
      company: "Online Learning Platform using Udemy",
      period: "2024 - 2024",
      description:
        "Learning javasript and how to build web apps using javascript and gaining ground html and css and integrating with javascript functionalities.",
    },
    {
      title: "Junior Developer",
      company: "Online Learning Platform using Udemy",
      period: "2022 - 2023",
      description:
        "Learning how to code basic html and css and creating simple web pages, while also learning how to use git and github.",
    },
  ];

  if (isLoading) {
    return (
      <div className='loading-screen'>
        <div className='loading-content'>
          <div className='loading-spinner'></div>
          <h2 className='loading-text'>Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='App'>
      {/* Navigation */}
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <span className='logo-text'>Codex-x25 </span>
          </div>
          <ul className='nav-menu'>
            <li>
              <a
                href='#hero'
                className={activeSection === "hero" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className={activeSection === "skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className={activeSection === "experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='hero' className='hero-section'>
        <div className='hero-bg'></div>
        <div className='hero-content'>
          <h1 className='hero-title'>
            <span className='hero-greeting'>Hello, I'm</span>
            <span className='hero-name'>Adam Justice</span>
            <span className='hero-role'>Full Stack Developer</span>
          </h1>
          <p className='hero-description'>
            Passionate about creating innovative web solutions that bridge
            technology and user experience. Specializing in modern JavaScript
            frameworks and scalable backend systems.
          </p>
          <div className='hero-buttons'>
            <a href='#projects' className='btn btn-primary'>
              View My Work
            </a>
            <a href='#contact' className='btn btn-secondary'>
              Get In Touch
            </a>
          </div>
        </div>
        <div className='hero-scroll'>
          <span>Scroll Down</span>
          <div className='scroll-arrow'></div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='about-section'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='about-content'>
            <div className='about-text'>
              <p>
                I'm a passionate full-stack developer with 3 years of experience
                creating digital solutions that make a difference. My journey in
                software development started with a curiosity about how things
                work, which evolved into a love for building applications that
                solve real-world problems.
              </p>
              <p>
                I specialize in modern web technologies including React,
                Node.js, Next.js, Express.js and Typescript with a strong focus
                on creating scalable, maintainable, and user-friendly
                applications. My recent project, the Smart Farm Market System,
                demonstrates my ability to tackle complex problems in emerging
                technology sectors.
              </p>
              <div className='about-highlights'>
                <div className='highlight'>
                  <h3>3+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className='highlight'>
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                {/* <div className='highlight'>
                  <h3></h3>
                  <p>Happy Clients</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='skills-section'>
        <div className='container'>
          <h2 className='section-title'>Technical Skills</h2>
          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='skill-card'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='skill-info'>
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-percentage'>{skill.level}%</span>
                </div>
                <div className='skill-bar'>
                  <div
                    className='skill-fill'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects-section'>
        <div className='container'>
          <h2 className='section-title'>Featured Projects</h2>
          <div className='projects-grid'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className='project-card'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className='project-image'>
                  <img src={project.image} alt={project.title} />
                  <div className='project-overlay'>
                    <div className='project-links'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-link'
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='project-link'
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className='project-content'>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-description'>{project.description}</p>
                  <div className='project-tech'>
                    {project.tech.map((tech, i) => (
                      <span key={i} className='tech-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id='experience' className='experience-section'>
        <div className='container'>
          <h2 className='section-title'>Work Experience</h2>
          <div className='timeline'>
            {experience.map((exp, index) => (
              <div
                key={index}
                className='timeline-item'
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className='timeline-dot'></div>
                <div className='timeline-content'>
                  <h3 className='exp-title'>{exp.title}</h3>
                  <h4 className='exp-company'>{exp.company}</h4>
                  <span className='exp-period'>{exp.period}</span>
                  <p className='exp-description'>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <div className='container'>
          <h2 className='section-title'>Let's Work Together</h2>
          <div className='contact-content'>
            <div className='contact-info'>
              <img
                src={Image}
                alt=''
                className='border-3 w-50 place-self-center  border-white shadow-2xl rounded-[50%]'
              />
              <h3 className='place-self-center '>Get In Touch</h3>
              <p>
                I'm always open to discussing new opportunities, interesting
                projects, or potential collaborations. Let's create something
                amazing together!
              </p>
              <div className='contact-methods'>
                <div className='contact-method'>
                  <strong>Email:</strong> justiceadam673@email.com
                </div>
                <div className='contact-method'>
                  <strong>Phone:</strong> +234 901 828 1266
                </div>
                <div className='contact-method'>
                  <strong>Location:</strong> Plateau State, Nigeria
                </div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className='contact-form'>
              <div className='form-group text-black '>
                <input
                  type='text'
                  placeholder='Your Name'
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className='form-group text-black '>
                <input
                  type='email'
                  placeholder='Your Email'
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className='form-group text-black '>
                <textarea
                  placeholder='Your Message'
                  rows='5'
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={submitStatus === "sending"}
              >
                {submitStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className='success-message'>Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className='error-message'>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='footer'>
        <div className='container'>
          <p>&copy; 2025 Adam Justice. All rights reserved.</p>
          <div className='social-links'>
            <a
              href='https://linkedin.com/in/justice-ojonache-adam-102136364'
              target='_blank'
              // rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/justiceadam673'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://x.com/JusticeAdam8'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
