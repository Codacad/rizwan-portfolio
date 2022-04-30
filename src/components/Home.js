import React from 'react'

const Home = () => {
  return (
    <div>
        <div id="homepage-wrapper">
            <div class="homepage-contents">        
                    <div class="under-development-inform" id="under-development">
                        <div class="label">           
                            <div class="contents">
                                <div>
                                    <h1>Under Development</h1>
                                    <h3>Welcome to CodAcad</h3>
                                    <p>We are very sorry, our site is still not in service. Hope we will bring it in service very soon</p>
                                    <p class="thank-you">Thank You</p>
                                </div>
                                <a href="#" class="ok">OK</a>
                            </div>
                        </div>         
                    </div>
                    <div class="showcase" id="showcase">
                        <div class="contents">
                            <div class="">
                                
                            </div>
                        </div>
                    </div>
                    <div id="projects">  
                        <div class="project-contents">
                            <div class="project-heading">
                                <h2>Projects</h2>
                            </div>
                            <div class="projects">
                                <div class="project project-covid19">
                                    <div class="header">
                                    </div>
                                    <div class="body">
                                        <div class="title">
                                            <h3>Coronovirus Updates</h3>                    
                                        </div>
                                        <div class="text">
                                            <p>
                                                This is a coronavirus updates application that provides the latest global numbers and numbers by country of COVID-19 cases on a daily basis.
                                            </p>                                          
                                        </div>
                                        <div class="tags">
                                            <span>#NodeJS</span>
                                            <span>#ExpressJS</span>
                                            <span>#MongoDB</span>
                                            <span>#EJS</span>                    
                                        </div> 
                                        <div class="view">
                                            <a href="http://updatescovid19.herokuapp.com" target="_blank">View</a>
                                        </div> 
                                    </div>        
                                </div>
                                <div class="project project-movies">
                                    <div class="header">
                        
                                    </div>
                                    <div class="body">
                                        <div class="title">
                                            <h3>Create Movies and Reviews</h3>                    
                                        </div>
                                        <div class="text">
                                            <p>
                                                Here I have implemented a little project that allowns us to create movies and add reviews to it.
                                            </p>                                         
                                        </div>    
                                        <div class="tags">
                                            <span>#NodeJS</span>
                                            <span>#ExpressJS</span>
                                            <span>#MongoDB</span>
                                            <span>#EJS</span>                    
                                        </div>     
                                        <div class="view">
                                            <a href="https://create-movies.herokuapp.com/movies" target="_blank">View</a>
                                        </div>         
                                    </div>               
                                </div>
                                <div class="project project-blog">
                                    <div class="header">
                                    </div>
                                    <div class="body">
                                        <div class="title">
                                            <h3>A Blog of Farman Farooqi</h3>                    
                                        </div>
                                        <div class="text">
                                            <p>
                                                I tried to implement the backend programming to interact with database and I created user authectication as well.
                                            </p>                  
                                        </div>
                                        <div class="tags">
                                            <span>#NodeJS</span>
                                            <span>#ExpressJS</span>
                                            <span>#MongoDB</span>
                                            <span>#EJS</span>                    
                                        </div>
                                        <div class="view">
                                            <a href="https://farooqis-world.herokuapp.com/" target="_blank">View</a>
                                        </div>
                                    </div>              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about" id="about">
                        <div class="content">
                        <div class="header">
                                <div class="pro-pic">
                                
                                </div>
                                <div class="name-and-designation">
                                    <div>
                                        <h3>Mohd Rizwan</h3>
                                        <h5>Web Developer</h5>
                                </div>
                                </div>
                        </div>
                        <div class="body">
                                <div class="bio">
                                    <p>Hi, I am Mohd Rizwan, I am a self taught FullStack Web Developer and I have enough strong knowledge of web technologies (Javascript, NodeJS/ExpressJs, MongoDB and .etc) to create fullstack scalable web appliations. I have better understing to implement the responsivenss to the web pages using CSS/SASS.</p>
                                    <a href="/resume">See More</a>                                            
                                </div>
                                <div class="tags">
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
                    <div class="contact" id="contact">
                        <div class="content">            
                            <div class="contact-detail">                
                                <div>
                                    <h1>Contact Us</h1>
                                    <div>
                                        <div class="address">
                                            <strong><span class="icon"><i class="fas fa-map-marker-alt"></i></span> <span>Address: </span> </strong>
                                            <span class="text">Post 244601 Faridnagar, Thakrudwara Moradabad, UP (India)</span>
                                        </div>
                                        <div class="phone">
                                            <strong><span class="icon"><i class="fas fa-phone"></i></span><span>Phone Number: </span></strong>
                                            <span class="text">+91-8979-074-004</span>
                                        </div>
                                        <div class="email">
                                            <strong><span class="icon"><i class="far fa-envelope"></i></span><span>E-Mail: </span></strong>
                                            <a href="" class="text">rizwan@codacad.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="message">
                                <div class="heading">
                                    <h1>Send Message</h1>
                                </div>
                                <form action="" id="form">
                                    <div class="success">
                                        <span>Message sent successfully...</span>
                                    </div>                            
                                    <div class="form-group">                               
                                        <div><input type="text" name="name" id="name" class="form-control" placeholder="Name"/></div>
                                    </div>
                                    <div class="form-group">                               
                                        <div><input type="email" name="email" id="email" class="form-control" placeholder="Email"/></div>
                                    </div>
                                    <div class="form-group">                               
                                        <br>
                                        <textarea name="text" id="text" cols="30" rows="6" placeholder="Write someting here..." class="form-control"></textarea>
                                    </div>
                                    <button type="submit" class="send-message">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home
    