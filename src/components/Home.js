import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="homepage-wrapper">
    <div className="main-section" id="main-section">
        <div className="main-section-contents">
            <h1><span className="hello">Hello</span>, greetings from <span className="rizwan">Mohd Rizwan</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam mollitia laudantium enim quos harum, numquam veniam assumenda, vel distinctio odit natus ad ex debitis repellat sapiente. Nobis, hic! Voluptatibus consectetur beatae et optio nemo laudantium cupiditate eligendi blanditiis dolores consequatur! Sapiente reprehenderit ad, fuga rerum voluptates ipsam sequi totam?</p>
           <ul className='hireme'>
             <li>
                <Link to="#" className="button">Hire Me</Link>
                <ul className='popup'>
                <li>
                  <Link to="#"><img src="./images/phone.svg" alt="" /><span>+918979074004</span></Link>
                </li>
                <li>
                  <Link to="#"><img src="./images/mail.svg" alt="Email" /><span>iam@morizwan.in</span></Link>
                </li>
              </ul>
             </li>
           </ul>
            <div className="links">
                <h3>Follow Me</h3>
                <ul>
                    <li><Link to="#"><img src="/images/social_icons/github.svg" alt="Facebook" /></Link></li>
                    <li><Link to="#"><img src="/images/social_icons/linkedin.svg" alt="Facebook" /></Link></li>
                    <li><Link to="#"><img src="/images/social_icons/instagram.svg" alt="Facebook" /></Link></li>
                    <li><Link to="#"><img src="/images/social_icons/facebook.svg" alt="Facebook" /></Link></li>
                    <li><Link to="#"><img src="/images/social_icons/twitter.svg" alt="Facebook" /></Link></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="about-section">
        <div className="about-me">
          <h1>My journey of becoming a self taught Fullstack Developer</h1>
          <div className="body">
              <h3>Hi, I am Mohd Rizwan and I am going to tell you about my journey of becoming a self taught Fullstack Developer.</h3>
              <p>
                  I used to live in a village, and for me, moving to a city was so tough and hesitated. Aftar completing my intermediate education, I joined the university (Teerthankar Mahaveer University) to study computer scince. I started my course in 2012. I started taking classNamees. The days continued passing, I could not manage myself to live in the atmosphare of the University and I started missing the classNamees. I also was hesited to sit on the front benches. I alwasy used to sit on the last benches.
              </p>
              <br/>
              <p>
                  I hardly completed the first and second year of the university but in the last year (2015) I could not take the sufficient classNamees, got detained from the exams and could not complete BCA. I never went back to the university in order to complete the course. <br/><br/>

                  After two years in 2017, I fortunately got interested in study, found a HTML course on Youtube and started studying. I studied more than 10 hours a day. This was the course I started with <strong><Link to="https://www.youtube.com/playlist?list=PL081AC329706B2953" target="_blank">HTML - thenewboston YouTube Channel.</Link></strong> After learing HTML, I headed to learn <strong><Link to="https://www.w3schools.com/css/" target="_blank">CSS</Link></strong> and <strong><Link to="https://www.w3schools.com/js/" target="_blank">JavaScript</Link></strong>, then I learned <strong><Link to="https://getbootstrap.com/">Bootstrap</Link></strong>, <strong><Link to="https://sass-lang.com/" target="_blank">SASS</Link></strong>, <strong><Link to="https://nodejs.org/en/" target="_blank">NodeJS</Link></strong>, <strong><Link to="https://expressjs.com/" target="_blank">ExpressJS</Link></strong>, <strong><Link to="https://www.mongodb.com/cloud/atlas/lp/try2-hterms?utm_content=rlsapostreg&utm_source=google&utm_campaign=gs_apac_rlsamulti_search_brand_dsa_atlas_desktop_rlsa_postreg&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646494&adgroup=131761134852&gclid=Cj0KCQjwg_iTBhDrARIsAD3Ib5j69Tb6mstN3WOo5peuPIeoo1S2y63mHs1l87aTLyt5Rr1kuOpp_nsaAgeIEALw_wcB" target="_blank">MongoDB</Link></strong>, <strong><Link to="https://git-scm.com/" target="_blank">Git</Link> & <Link to="https://github.com/" target="_blank">Github</Link></strong>, and etc.
                  <br/><br/>
              </p>
                <blockquote>
                    <cite> This is how I became a self tought Fullstack Developer. This is my personal Portfolio and I will showcase my work here. Please take a look and give me an opportunity to work with your team.</cite>
                </blockquote>
              <Link to="#" className="jump-to-my-work">
                  <span>Take a look at my work</span>
                  <img src="/images/chevron_right.svg" alt="" />
              </Link>
          </div>
    </div>
    </div>
    {/* <!-- Message --> */}
    <div className="send-message-section">
      <div className="message-contents">
          <div className="chat-skeleton">
              <div className="skeleton-1 skeleton">
                  <div className="profile-picture"></div>
                  <div className="profile-name">
                      <span className="one"></span>
                      <span className="two"></span>
                  </div>
              </div>
              <div className="skeleton-2 skeleton">
                  <div className="profile-picture"></div>
                  <div className="profile-name">
                      <span className="one"></span>
                      <span className="two"></span>
                  </div>
              </div>
              <div className="skeleton-3 skeleton">
                  <div className="profile-picture"></div>
                  <div className="profile-name">
                      <span className="one"></span>
                      <span className="two"></span>
                  </div>
              </div>
              <div className="skeleton-4 skeleton">
                  <div className="profile-picture"></div>
                  <div className="profile-name">
                      <span className="one"></span>
                      <span className="two"></span>
                  </div>
              </div>
              <div className="skeleton-5 skeleton">
                  <div className="profile-picture"></div>
                  <div className="profile-name">
                      <span className="one"></span>
                      <span className="two"></span>
                  </div>
              </div>
              
          </div>
          <div className="message-form">
              <form action="/" method="POST">
                  <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" required name="name" id="name" className="name"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" required name="email" id="email" className="email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" cols="30" rows="10" className="message" required></textarea>
                  </div>
                  <button type="submit" className="send">Send</button>
              </form>
          </div>
      </div>
  </div>
  </div>
  )
}

export default Home
    