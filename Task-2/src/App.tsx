import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const eventDate = new Date('2026-09-20T09:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          DSC<span>Hackathon</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#schedule">Schedule</a>
          <a href="#prizes">Prizes</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-actions">
          <button
            className={darkMode ? 'theme-switch active' : 'theme-switch'}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <span className="sun">☀</span>
            <span className="moon">☾</span>
            <span className="switch-circle"></span>
          </button>

          <a href="#register" className="nav-register">
            Register
          </a>
        </div>
      </nav>

      {/* HERO */}
      <main id="home" className="hero-section">
        <div className="hero-content">
          <p className="tag">DSC PRESENTS</p>

          <h1>
            Build ideas that
            <span> make an impact.</span>
          </h1>

          <p className="hero-description">
            A 24-hour hackathon bringing students together to build,
            collaborate and turn ideas into real solutions.
          </p>

          <div className="event-details">
            <span>20–21 September 2026</span>
            <span>VIT Bhopal University</span>
            <span>24 Hours</span>
          </div>

          <div className="hero-buttons">
            <a href="#register" className="primary-button">
              Register Now
            </a>

            <a href="#about" className="secondary-button">
              Explore Event
            </a>
          </div>
        </div>

        {/* COUNTDOWN */}
        <div className="countdown-card">
          <p>HACKING BEGINS IN</p>

          <div className="countdown">
            <div>
              <strong>{timeLeft.days}</strong>
              <span>Days</span>
            </div>

            <div>
              <strong>{timeLeft.hours}</strong>
              <span>Hours</span>
            </div>

            <div>
              <strong>{timeLeft.minutes}</strong>
              <span>Minutes</span>
            </div>

            <div>
              <strong>{timeLeft.seconds}</strong>
              <span>Seconds</span>
            </div>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            Registrations are open
          </div>
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section">
        <p className="section-label">ABOUT THE EVENT</p>
        <h2>One day. Endless possibilities.</h2>

        <p className="section-description">
          DSC Hackathon is a student-focused innovation event where
          developers, designers and problem solvers work together to create
          meaningful technology.
        </p>

        <div className="stats">
          <div>
            <strong>24</strong>
            <span>Hours</span>
          </div>

          <div>
            <strong>300+</strong>
            <span>Participants</span>
          </div>

          <div>
            <strong>₹50K+</strong>
            <span>Prize Pool</span>
          </div>

          <div>
            <strong>4</strong>
            <span>Tracks</span>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="section alternate">
        <p className="section-label">TRACKS</p>
        <h2>Choose what you want to build.</h2>

        <div className="card-grid">
          <div className="info-card">
            <span>01</span>
            <h3>AI & Machine Learning</h3>
            <p>
              Build intelligent tools using data, automation and machine
              learning.
            </p>
          </div>

          <div className="info-card">
            <span>02</span>
            <h3>Healthcare</h3>
            <p>
              Create technology that improves healthcare access, delivery
              and outcomes.
            </p>
          </div>

          <div className="info-card">
            <span>03</span>
            <h3>Sustainability</h3>
            <p>
              Develop solutions for climate, energy and sustainable
              communities.
            </p>
          </div>

          <div className="info-card">
            <span>04</span>
            <h3>Open Innovation</h3>
            <p>
              Have another idea? Build something creative that solves a
              real problem.
            </p>
          </div>
        </div>
      </section>

 {/* SCHEDULE */}
<section id="schedule" className="section schedule-section">
  <p className="section-label">SCHEDULE</p>
  <h2>24 hours of building.</h2>

  <div className="roadmap">

    <div className="roadmap-item left">
      <div className="roadmap-content">
        <span className="roadmap-time">09:00 AM</span>
        <h3>Registration & Check-in</h3>
        <p>Arrive, check in and get ready.</p>
      </div>
      <div className="roadmap-node">01</div>
    </div>

    <div className="roadmap-item right">
      <div className="roadmap-node">02</div>
      <div className="roadmap-content">
        <span className="roadmap-time">10:00 AM</span>
        <h3>Opening Ceremony</h3>
        <p>Kickoff, introductions and event briefing.</p>
      </div>
    </div>

    <div className="roadmap-item left">
      <div className="roadmap-content">
        <span className="roadmap-time">11:00 AM</span>
        <h3>Hacking Begins</h3>
        <p>Start building your solution.</p>
      </div>
      <div className="roadmap-node">03</div>
    </div>

    <div className="roadmap-item right">
      <div className="roadmap-node">04</div>
      <div className="roadmap-content">
        <span className="roadmap-time">08:00 PM</span>
        <h3>Mentor Sessions</h3>
        <p>Get feedback and guidance from mentors.</p>
      </div>
    </div>

    <div className="roadmap-item left">
      <div className="roadmap-content">
        <span className="roadmap-time">09:00 AM</span>
        <h3>Final Submission</h3>
        <p>Submit your finished project for judging.</p>
      </div>
      <div className="roadmap-node">05</div>
    </div>

    <div className="roadmap-item right final">
      <div className="roadmap-node">06</div>
      <div className="roadmap-content">
        <span className="roadmap-time">11:00 AM</span>
        <h3>Results & Closing</h3>
        <p>Winners announced and hackathon concludes.</p>
      </div>
    </div>

  </div>
</section>

      {/* PRIZES */}
      <section id="prizes" className="section alternate">
        <p className="section-label">PRIZES</p>
        <h2>Build. Compete. Win.</h2>

        <div className="prize-grid">
          <div className="prize-card">
            <p>FIRST PLACE</p>
            <h3>₹25,000</h3>
          </div>

          <div className="prize-card">
            <p>SECOND PLACE</p>
            <h3>₹15,000</h3>
          </div>

          <div className="prize-card">
            <p>THIRD PLACE</p>
            <h3>₹10,000</h3>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="section">
        <p className="section-label">SPONSORS</p>
        <h2>Supported by our partners.</h2>

        <p className="section-description">
          Meet the partners supporting innovation and student builders at
          DSC Hackathon.
        </p>

        <div className="sponsor-grid">
          <div className="sponsor-card">TechNova</div>
          <div className="sponsor-card">DevSpace</div>
          <div className="sponsor-card">CloudBase</div>
          <div className="sponsor-card">CodeLabs</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section alternate">
        <p className="section-label">FAQ</p>
        <h2>Questions? We got you.</h2>

        <div className="faq">
          <details>
            <summary>Who can participate?</summary>
            <p>Any currently enrolled university student can participate.</p>
          </details>

          <details>
            <summary>Do I need a team?</summary>
            <p>
              Teams are recommended, but individual participants can also
              register.
            </p>
          </details>

          <details>
            <summary>Is there a registration fee?</summary>
            <p>No. Participation is completely free.</p>
          </details>

          <details>
            <summary>Do I need prior hackathon experience?</summary>
            <p>
              Not at all. Beginners are welcome and mentors will be available.
            </p>
          </details>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="register-section">
        <p className="section-label">REGISTRATION</p>
        <h2>Ready to build?</h2>

        <p className="register-text">
          Join students, developers and creators for 24 hours of building,
          learning and collaboration.
        </p>

        <form
          className="registration-form"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="College / University"
              required
            />
            <input type="text" placeholder="Team Name" />
          </div>

          <div className="form-row">
            <select required defaultValue="">
              <option value="" disabled>
                Year of Study
              </option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            <select required defaultValue="">
              <option value="" disabled>
                Team Size
              </option>
              <option value="1">1 Member</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
            </select>
          </div>

          <input
            type="url"
            placeholder="GitHub Profile (optional)"
          />

          <button type="submit" className="form-button">
            Submit Registration
          </button>

          {submitted && (
            <p className="success-message">
              Registration submitted successfully!
            </p>
          )}
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <strong>DSC Hackathon</strong>
        <p>Build. Learn. Collaborate.</p>
        <p>© 2026 DSC Hackathon</p>
      </footer>

    </div>
  )
}

export default App