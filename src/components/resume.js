import React from 'react'
import {Link} from 'react-router-dom'
const Resume = () => {
  return (
    <div>
         <div className="resume" id="resume">
        <div className="resume-contents">
            <div className="resume-header">
                <h1>Mohd Rizwan</h1>
                <span>Fullstack Developer</span>
            </div>
            <div className="resume-body">
                <div className="side-left">
                    <div className="contact">
                        <ul>
                            <li>
                                <img src="images/phone.svg" alt="Phone" />
                                <span>+918979074004</span>
                            </li>
                            <li>
                                <Link to="mailto:iam@morizwan.in">
                                    <img src="/images/mail.svg" alt="Email" />
                                    <span>iam@morizwan</span>
                                </Link>
                            </li>
                            <li id="address">
                                <img src="images/location.svg" alt="Address" />
                                <div className="address">
                                    <span>244601 Faridngar Thakurdwara</span>
                                    <span>Moradabad Uttar Pradesh</span>
                                    <span>India</span>
                                </div>
                            </li>
                            <li>
                                <img src="/images/linkedin-resume.svg" alt="Linkedin" />
                                <Link to="#">Linkedin</Link>
                            </li>
                            <li>
                                <img src="/images/github-resume.svg" alt="Github" />
                                <Link to="#">Github</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <div className="frontend">
                            <h4>Frontend</h4>
                            <ul>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="html skill">
                                        <span className="text">HTML</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="css skill">
                                        <span className="text">CSS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="javascript skill">
                                        <span className="text">JavaScript</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">80%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="reactjs skill">
                                        <span className="text">RaactJS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="tootstrap skill">
                                        <span className="text">Bootstrap</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">85%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="materializecss skill">
                                        <span className="text">Materialize-CSS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="sass skill">
                                        <span className="text">SASS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="backend">
                            <h4>Backend</h4>
                            <ul>
                                <li>
                                    <img src="images/done.svg" alt="Done" />
                                    <div className="nodejs skill">
                                        <span className="text">NodeJS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="expressjs skill">
                                        <span className="text">ExpressJS</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">75%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="mongodb skill">
                                        <span className="text">MongoDB</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="mongoose skill">
                                        <span className="text">Mongoose</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">65%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="ssr skill">
                                        <span className="text">SSR</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">80%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="other">
                            <h4>Other</h4>
                            <ul>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="git skill">
                                        <span className="text">Git</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="github skill">
                                        <span className="text">Github</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">80%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="webpack skill">
                                        <span className="text">Webpack</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">50%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="images/done.svg" alt="Done"/>
                                    <div className="testing skill">
                                        <span className="text">Testing</span>
                                        <div>
                                            <span className="bar">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="side-right">
                  <div className="summary">
                      <div className="header">
                          <img src="images/summary.svg" alt="Professional Summary"/>
                          <h1>Professional Summary</h1>
                      </div>
                      <div className="body">
                            <p>
                                Motivated designer and developer adept at contrubuting to highly collavorative work environment and fnding solutions. Proven experience creating customer focused websites using HTML, CSS NodeJS and ReactJS. Strong collaboration skills and proven history of application development.  Good knowledge of the best practice of web design, user experience, and speed.
                            </p>
                      </div>
                  </div>
                  <div className="projects">
                    <div className="header">
                        <img src="images/projects.svg" alt="Projects"/>
                        <h1>Projects</h1>
                    </div>
                    <div className="body">
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span className="built-with">
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <img src="images/verified.svg" alt="verified"/>
                            <div className="project-name">
                                <Link to="#"><h3>Project One</h3></Link>
                                <div className="details">
                                    <div className="used-technologies">
                                        <strong>Built with: </strong>
                                        <span>
                                            <span>#HTML, #CSS, #JavaScript, #ReactJS, #NodeJS, #MonogDB, and etc.</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Resume