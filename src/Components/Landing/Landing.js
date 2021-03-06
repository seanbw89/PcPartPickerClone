import React from 'react'
import '../../styles/index.css'
import user_1 from '../../Assets/user_build.jpg'
import user_2 from '../../Assets/user_build2.jpg'
import user_3 from '../../Assets/user_build3.jpg'
import user_4 from '../../Assets/user_1.jpg'
import blog   from '../../Assets/blog.jpg'
import blog_2 from '../../Assets/blog_1.jpg'
import blog_3 from '../../Assets/blog_2.jpg'
import blog_4 from '../../Assets/blog_3.jpg'
import User from '../../Assets/user.jpg'


export default function Landing() {
  return (
    <div>
      <div className="main-content">
        <div className="width landing-content">
          <div className="home-build-guides">
            <h1>Build Guides</h1>
            <p>
            Building your own PC and need ideas on where to get started? Explore our build guides, which cover systems for all use-cases and budgets, or create your own and share it with our community.
            </p>
            <button id='build-guide-btn'>View The Build Guides</button>
          </div>
          <div id='featured-build'>
            <div id="feat-build-con">
              <h2>Featured Guide</h2>                 
                  <h3>Modest AMD Gaming Build</h3>
                  <div>
                    <img src={User} alt=""/>
                    <small>by manirelli</small>
                  </div>
                  <p>AMD Ryzen 5 2600</p>
                  <p>Parametric Video Card(Chipset: Radeon RX 580; Video Ram: 8GB; Length:223mm-403mm)</p>
                  <p>Cooler Master MasterBox Q300L MicroATX Mini Tower</p>
                  <h4>Pricing</h4>
                  <div>
                    <i className="fa fa-comment">43</i>
                    <i className="fa fa-arrow-up">26</i>
                  </div>              
            </div>
          </div>
          <div className="sample-build-guides">
          <div id="samp-title-price">
            <h1>Entry Level Intel Gaming Build</h1>
            <h1>$555.27</h1>
          </div>
            <p>
              Intel Core i3-8100
            </p>
            <p>
              Parametric Video Card (Chipset: Radeon RX 570)
            </p>
            <p>
              Cougar MX330-G ATX Mid Tower
            </p>
            <div id="samp-user">
              <p>by ThoughtA</p>  <i className="fa fa-comment">36</i> <i className="fa fa-arrow-up">10</i> 
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-content">
        <div className="completed-build-landing">
          <div className='heading'>
            <h1>Completed Builds</h1>
            <hr/>                
          </div>
          <div id='featured-user-build'>  
            <div className="user-build-heading">
              <h1>Featured Build</h1>
            </div>
            <div className='user-build-img-con'>
              <div>
                <img src={user_1} alt=""/>
              </div>
              <div className='user-build-img-con-two'>
                <img src={user_2} alt=""/>
                <img src={user_3} alt=""/>
              </div>            
            </div>
            <div className="name-user">
              <h2>P90 ThreadRipper</h2>
              <small>By NorthArrow</small>
              <p>AMD ThreadRipper 2950X</p>
              <p>GeForce RTX 2080 Ti (X2)</p>
            </div>
            <div className='user-vote'>
              <i className="fa fa-comment">112</i>
              <p>$1349.23+</p>
              <i className="fa fa-arrow-up">30</i>
            </div>
          </div>
          <div className="user-complete-build-landing">
            <h2>First Born - Fantastic Mid Tier AMD <span>$1420.69+</span> Build (2018)</h2>
            <div className='user-single'>
              <img src={user_4} alt=""/>
                <div className='user-content'>
                  <p>
                    AMD Ryzen 5 2600                  
                  </p>
                  <p>GeForce GTX 1080</p>
                <div id='user-comp-build'>
                  <small>by User</small>
                  <div>
                    <i className="fa fa-comment">0</i><i className="fa fa-arrow-up">0</i>
                  </div>
                </div>
              </div>
            </div>            
            <button>See All Completed Builds</button>
          </div>
        </div>
        
        <div className="landing-blog">
          <div className="landing-blog-con">
          <div className="blog-heading-landing">
            <h1>Blog</h1>
            <hr/>
          </div>
            <div className='blog-row-1'>
              <div className="blog-item">
                <img src={blog_3} alt=""/>
                <div className="blog-text">
                  <h2>charity: water Completion Report #10</h2>
                  <h4>Posted Oct. 23, 2018 by philip</h4>
                  <p>                  
                    Our tenth charity: water completion report arrived! Thanks to your support, we were able to fund water projects serving 887 people in Rwanda. More than half of the population of Rwanda lack access to clean and safe water. ...
                  </p>
                  <i className="fa fa-comment">1</i>
                </div>
              </div>
              <div className="blog-item">
                <img src={blog_2} alt=""/>
                <div className="blog-text">
                  <h2>
                    charity: water Completion Report #9
                  </h2>
                  <h4>
                    Posted Oct. 4, 2018 by philip
                  </h4>
                  <p>
                    Our ninth charity: water completion report arrived! Thanks to your support, we were able to fund water projects serving 2,275 people in Ethiopia. ...
                  </p>
                  <i className="fa fa-comment">1</i>
                </div>
              </div>
            </div>
            <div className='blog-row-2'>
              <div className="blog-item">
                <img src={blog} alt=""/>
                <div className="blog-text">
                <h2>NVIDIA GeForce RTX 2080 Ti Benchmarks</h2>
                <h4>Posted Sept. 19, 2018 by BoyScout</h4>
                  <p>
                    The NVIDIA GeForce RTX 2080 and 2080 Ti are officially available. MSI sent us their new GeForce RTX 2080 Ti DUKE to find out how the new RTX 2080 Ti compares to the previous generation cards.
                  </p>
                  <i className="fa fa-comment">1</i>
                </div>
              </div>
              <div className="blog-item">
                <img src={blog_4} alt=""/>
                <div className="blog-text">
                <h2>  Fractal Design Meshify C Mini / X399 mATX Build</h2>
                <h4>Posted March 30, 2018 by BoyScout</h4>
                  <p>
                  With ASRock's X399M Taichi motherboard ready to take Ryzen Threadripper to smaller spaces, we try to squeeze as much power as we can into an Fractal Design's new micro-ATX Meshify C Mini case. Check out our latest video to see how the build came together.
                  </p>
                  <i className="fa fa-comment">1</i>
                </div>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </div>
  )
}
