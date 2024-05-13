function ContentWrapper () {
  return (
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
  )
}

export default ContentWrapper