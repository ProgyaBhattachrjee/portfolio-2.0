import React from 'react'

const Hello = () => {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="hello">Hello!</h1>
       <p className="description">
        It’s <span className="name">Progya!</span> A final-year student majoring in 
        <strong> Computer Science and Engineering </strong> at KIIT University.  
        I’m deeply passionate about <strong>web development</strong> and love bringing ideas to life through clean, interactive, and user-centered designs.  
        I take pride in being <strong>hard-working</strong> and <strong>driven</strong>, with strong <strong>people skills</strong> and a natural sense of <strong>empathy</strong> that helps me collaborate effectively in teams.  
        I believe in <strong>integrity</strong> and never giving up — no matter how challenging the task.  
        Every project I take on is an opportunity to grow, learn, and make a positive impact.
        </p>
       

        <a
          href="https://www.linkedin.com/in/progya-bhattacharjee-427149298/"
          className="linkedin-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 linkedin.com/in/progya-bhattacharjee
        </a>
                <a
          href="https://github.com/ProgyaBhattachrjee"
          className="linkedin-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐱 github.com/in/progya-bhattacharjee
        </a>
      </div>

      <div className="profile-card">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="profile-img"
        />
        <h3>Progya Bhattacharjee</h3>
        <p className="pronouns">She/her</p>
         <div class="profile-info">
          <div><i class="fa-solid fa-flag"></i><span>Indian</span></div>
          <div><i class="fa-solid fa-envelope"></i><span>progy1112@gmail.com</span></div>
          <div><i class="fa-solid fa-phone"></i><span>7602067515</span></div>
        </div>
      </div>
    </div>
  )
}

export default Hello
