function PersonalInfoArea () {
  return (
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
            <a target="_blank" href="https://linkedin.com/in/abdulhadiahad96" className="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/abdulhadiahad96" className="github">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/abdulhadiahad96" className="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://facebook.com/abdulhadiahad96" className="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </ul>

        <div className="bostami-parsonal-info-contact mb-20">
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

      </div>
    </div>
  )
}

export default PersonalInfoArea