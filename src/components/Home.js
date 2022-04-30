import React from 'react'

const Home = () => {
  return (
    <div id="homepage-wrapper">
        <div className="homepage-contents">        
                <div className="under-development-inform" id="under-development">
                    <div className="label">           
                        <div className="contents">
                            <div>
                                <h1>Under Development</h1>
                                <h3>Welcome to CodAcad</h3>
                                <p>We are very sorry, our site is still not in service. Hope we will bring it in service very soon</p>
                                <p className="thank-you">Thank You</p>
                            </div>
                            <a href="#" className="ok">OK</a>
                        </div>
                    </div>         
                </div>
                <div className="showcase" id="showcase">
                    <div className="contents">
                        <div className="">
                            
                        </div>
                    </div>
                </div>
                <div id="projects">  
                    <div className="project-contents">
                        <div className="project-heading">
                            <h2>Projects</h2>
                        </div>
                        <div className="projects">
                            <div className="project project-covid19">
                                <div className="header">
                                </div>
                                <div className="body">
                                    <div className="title">
                                        <h3>Coronovirus Updates</h3>                    
                                    </div>
                                    <div className="text">
                                        <p>
                                            This is a coronavirus updates application that provides the latest global numbers and numbers by country of COVID-19 cases on a daily basis.
                                        </p>                                          
                                    </div>
                                    <div className="tags">
                                        <span>#NodeJS</span>
                                        <span>#ExpressJS</span>
                                        <span>#MongoDB</span>
                                        <span>#EJS</span>                    
                                    </div> 
                                    <div className="view">
                                        <a href="http://updatescovid19.herokuapp.com" target="_blank">View</a>
                                    </div> 
                                </div>        
                            </div>
                            <div className="project project-movies">
                                <div className="header">
                    
                                </div>
                                <div className="body">
                                    <div className="title">
                                        <h3>Create Movies and Reviews</h3>                    
                                    </div>
                                    <div className="text">
                                        <p>
                                            Here I have implemented a little project that allowns us to create movies and add reviews to it.
                                        </p>                                         
                                    </div>    
                                    <div className="tags">
                                        <span>#NodeJS</span>
                                        <span>#ExpressJS</span>
                                        <span>#MongoDB</span>
                                        <span>#EJS</span>                    
                                    </div>     
                                    <div className="view">
                                        <a href="https://create-movies.herokuapp.com/movies" target="_blank">View</a>
                                    </div>         
                                </div>               
                            </div>
                            <div className="project project-blog">
                                <div className="header">
                                </div>
                                <div className="body">
                                    <div className="title">
                                        <h3>A Blog of Farman Farooqi</h3>                    
                                    </div>
                                    <div className="text">
                                        <p>
                                            I tried to implement the backend programming to interact with database and I created user authectication as well.
                                        </p>                  
                                    </div>
                                    <div className="tags">
                                        <span>#NodeJS</span>
                                        <span>#ExpressJS</span>
                                        <span>#MongoDB</span>
                                        <span>#EJS</span>                    
                                    </div>
                                    <div className="view">
                                        <a href="https://farooqis-world.herokuapp.com/" target="_blank">View</a>
                                    </div>
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about" id="about">
                    <div className="content">
                    <div className="header">
                            <div className="pro-pic">
                            
                            </div>
                            <div className="name-and-designation">
                                <div>
                                    <h3>Mohd Rizwan</h3>
                                    <h5>Web Developer</h5>
                            </div>
                            </div>
                    </div>
                    <div className="body">
                            <div className="bio">
                                <p>Hi, I am Mohd Rizwan, I am a self taught FullStack Web Developer and I have enough strong knowledge of web technologies (Javascript, NodeJS/ExpressJs, MongoDB and .etc) to create fullstack scalable web appliations. I have better understing to implement the responsivenss to the web pages using CSS/SASS.</p>
                                <a href="/resume">See More</a>                                            
                            </div>
                            <div className="tags">
                                <span>#HTML</span> 
                                <span>#CSS</span> 
                                <span>#SASS</span> 
                                <span>#Bootstrap</span> 
                                <span>#JavaScript</span> 
                                <span>#NodeJs/ExpressJS</span> 
                                <span>#React</span>                             
                                <span>#WebPack</span>                             
                                <span>#MongoDB</span> 
                            </div>
                    </div>   
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="content">            
                        <div className="contact-detail">                
                            <div>
                                <h1>Contact Us</h1>
                                <div>
                                    <div className="address">
                                        <strong><span className="icon"><i className="fas fa-map-marker-alt"></i></span> <span>Address: </span> </strong>
                                        <span className="text">Post 244601 Faridnagar, Thakrudwara Moradabad, UP (India)</span>
                                    </div>
                                    <div className="phone">
                                        <strong><span className="icon"><i className="fas fa-phone"></i></span><span>Phone Number: </span></strong>
                                        <span className="text">+91-8979-074-004</span>
                                    </div>
                                    <div className="email">
                                        <strong><span className="icon"><i className="far fa-envelope"></i></span><span>E-Mail: </span></strong>
                                        <a href="mailto:iam@morizwan.in" className="text">iam@morizwan.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message">
                            <div className="heading">
                                <h1>Send Message</h1>
                            </div>
                            <form action="" id="form">
                                <div className="success">
                                    <span>Message sent successfully...</span>
                                </div>                            
                                <div className="form-group">                               
                                    <div><input type="text" name="name" id="name" className="form-control" placeholder="Name"/></div>
                                </div>
                                <div className="form-group">                               
                                    <div><input type="email" name="email" id="email" className="form-control" placeholder="Email"/></div>
                                </div>
                                <div className="form-group">                               
                                    <br />
                                    <textarea name="text" id="text" cols="30" rows="6" placeholder="Write someting here..." className="form-control"></textarea>
                                </div>
                                <button type="submit" className="send-message">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Home
    