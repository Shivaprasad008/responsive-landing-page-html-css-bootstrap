import { Menu, X, Code, LayoutGrid as Layout, Smartphone, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import '../styles/landing.css';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <Code className="me-2" size={28} />
            <span className="fw-bold">DevStudio</span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection('services')}>Services</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 fw-bold mb-4 animate-fade-in">
                Build Amazing Digital Experiences
              </h1>
              <p className="lead mb-5 text-muted animate-fade-in-delay">
                We create beautiful, responsive websites and applications that help your business grow.
                Transform your ideas into reality with our expert development team.
              </p>
              <div className="d-flex gap-3 justify-content-center animate-fade-in-delay-2">
                <button
                  className="btn btn-primary btn-lg px-5 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg px-5 py-3"
                  onClick={() => scrollToSection('services')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Our Services</h2>
              <p className="lead text-muted">
                We offer comprehensive digital solutions tailored to your needs
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card h-100 p-4">
                <div className="service-icon mb-4">
                  <Layout size={48} />
                </div>
                <h3 className="h4 mb-3">Web Development</h3>
                <p className="text-muted">
                  Custom websites built with modern technologies. Responsive, fast, and optimized
                  for search engines to help your business stand out online.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="service-card h-100 p-4">
                <div className="service-icon mb-4">
                  <Smartphone size={48} />
                </div>
                <h3 className="h4 mb-3">Mobile Apps</h3>
                <p className="text-muted">
                  Native and cross-platform mobile applications that provide seamless user
                  experiences across iOS and Android devices.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="service-card h-100 p-4">
                <div className="service-icon mb-4">
                  <Code size={48} />
                </div>
                <h3 className="h4 mb-3">Custom Solutions</h3>
                <p className="text-muted">
                  Tailored software solutions designed specifically for your business needs.
                  From automation tools to enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="img-fluid rounded shadow-lg"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About DevStudio</h2>
              <p className="lead mb-4">
                We are a team of passionate developers and designers dedicated to creating
                exceptional digital experiences.
              </p>
              <p className="text-muted mb-4">
                With over 10 years of combined experience, we've helped hundreds of businesses
                transform their digital presence. Our approach combines cutting-edge technology
                with user-centered design principles to deliver solutions that not only look
                great but also drive real business results.
              </p>
              <p className="text-muted mb-4">
                We believe in building long-term partnerships with our clients, providing
                ongoing support and continuously improving their digital products to stay
                ahead in an ever-evolving digital landscape.
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection('contact')}
              >
                Work With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
              <p className="lead text-muted">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Send Message
                </button>
              </form>
            </div>

            <div className="col-lg-6">
              <div className="contact-info h-100 d-flex flex-column justify-content-center">
                <div className="mb-4">
                  <h3 className="h4 mb-4">Contact Information</h3>
                  <p className="text-muted">
                    Feel free to reach out to us through any of these channels. We're here to help!
                  </p>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <Mail className="me-3 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Email</h4>
                    <p className="text-muted mb-0">contact@devstudio.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <Phone className="me-3 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Phone</h4>
                    <p className="text-muted mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <MapPin className="me-3 text-primary flex-shrink-0" size={24} />
                  <div>
                    <h4 className="h6 mb-1">Address</h4>
                    <p className="text-muted mb-0">123 Tech Street<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; 2024 DevStudio. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
