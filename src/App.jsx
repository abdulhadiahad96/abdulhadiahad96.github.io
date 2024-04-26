
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const handleLoad = () => {
      // preloader start
      let preloader = document.querySelector("#preloader");
      preloader.classList.add("preloaded");
      setTimeout(function () {
        preloader.remove();
      }, 1500);
      // preloader end
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className="page-wrapper home-3">

        {/* PRELOADER */}
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
        {/* /PRELOADER */}

        <div className="container z-index-3 pt-30">
          <div className="row">

            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="bostami-parsonal-info-area">
                <div className="bostami-parsonal-info-wrap">

                  <div className="bostami-parsonal-info-img">
                    <img src="/assets/img/parsonal-info/parson-img-3.png" alt="avatar" />
                  </div>

                  <h4 className="bostami-parsonal-info-name">
                    <a href="#">ABDUL HADI</a>
                  </h4>
                  <span className="bostami-parsonal-info-bio mb-15">Senior Fullstack Developer</span>

                  <ul className="bostami-parsonal-info-social-link mb-30">
                    <li>
                      <a href="https://linkedin.com/in/abdulhadiahad96" className="linkedin">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/abdulhadiahad96" className="github">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/abdulhadiahad96" className="instagram">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/abdulhadiahad96" className="facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>

                  <div className="bostami-parsonal-info-contact mb-30">
                    <div className="bostami-parsonal-info-contact-item phone">
                      <div className="icon">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </div>
                      <div className="text">
                        <span>Phone</span>
                        <p>+62895360246692</p>
                      </div>
                    </div>


                    <div className="bostami-parsonal-info-contact-item email">
                      <div className="icon">
                        <i className="fa-regular fa-envelope-open-text"></i>
                      </div>
                      <div className="text">
                        <span>Email</span>
                        <p>abdulhadi.public@gmail.com</p>
                      </div>
                    </div>

                    <div className="bostami-parsonal-info-contact-item location">
                      <div className="icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="text">
                        <span>Location</span>
                        <p>Majalengka, Jawa Barat</p>
                      </div>
                    </div>
                  </div>

                  <div className="bostami-parsonal-info-btn">
                    <a className="btn-2 circle" href="#">
                      <span className="icon">
                        <i className="fa-regular fa-download"></i>
                      </span>
                      download cv
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-8 col-lg-8">


              <div className="text-right">
                <div className="bostami-main-menu-wrap">
                  <nav className="bastami-main-menu main_menu_3">
                    <ul>
                      <li className="active">
                        <a href="/">
                          <span>
                            <i className="fa-light fa-address-card"></i>
                          </span>
                          about
                        </a>
                      </li>
                      <li>
                        <a href="resume.html">
                          <span>
                            <i className="fa-light fa-file-user"></i>
                          </span>
                          Resume
                        </a>
                      </li>
                      <li>
                        <a href="portfolio.html">
                          <span>
                            <i className="fa-light fa-briefcase"></i>
                          </span>
                          Works
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          <span>
                            <i className="fa-light fa-newspaper"></i>
                          </span>
                          Blogs
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="bostami-page-content-wrap">

                <div className="section-wrapper pl-60 pr-60 pt-60">
                  <div className="bostami-page-title-wrap mb-15">
                    <h2 className="page-title">about</h2>
                    <p>I am Creative Director and UI/UX Designer from Sydney, Australia, working in web
                      development and print media. I enjoy turning complex problems into simple, beautiful
                      and intuitive designs.</p>
                    <p>My aim is to bring across your message and identity in the most creative way. I
                      created web design for many famous brand companies.</p>
                  </div>
                </div>

                <div className="section-wrapper pl-60 pr-60">

                  <div className="bostami-section-title-wrap mt-30 mb-20">
                    <h3 className="section-title">What I do!</h3>
                  </div>

                  <div className="bostami-what-do-wrap mb-30">
                    <div className="row">

                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-prink">
                          <div className="icon">
                            <i className="fa-light fa-swatchbook"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">Ui/Ux Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="bostami-what-do-item bg-catkrill">
                          <div className="icon">
                            <i className="fa-regular fa-grid-2"></i>
                          </div>
                          <div className="text">
                            <h4 className="title">App Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              euismod tincidunt volutpat.</p>
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
    </>
  )
}

export default App
