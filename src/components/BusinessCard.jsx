import React from 'react'
// Import our CSS file
import '../styles/BusinessCard.css'

function BusinessCard() {
  // This is where our component's logic would go
  // For now, we're just returning some JSX

  return (
    <div className="business-card">
      {/* Header section with name and title */}
      <div className="card-header">
        <h2 className="name">Jason Doty</h2>
        <p className="title">React Developer</p>
      </div>

      {/* Contact information section */}
      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <span className="value">your.email@example.com</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">(555) 123-4567</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Location:</span>
          <span className="value">Your City, State</span>
        </div>
      </div>

      {/* Skills section */}
      <div className="skills-section">
        <h3 className="section-title">Skills</h3>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
        </div>
      </div>

      {/* Social links section */}
      <div className="social-section">
        <h3 className="section-title">Connect</h3>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>
      </div>
    </div>
  )
}

// Always export your component so other files can use it
export default BusinessCard