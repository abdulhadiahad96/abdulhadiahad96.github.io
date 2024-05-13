import MainMenu from "../shared/MainMenu"
import PersonalInfoArea from "../shared/PersonalInfoArea"

function AppLayout ({ children }) {
  return (
    <div className="page-wrapper home-3">
      <div className="container z-index-3 pt-30">
        <div className="row">

          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <PersonalInfoArea />
          </div>

          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <MainMenu />
            { children }
          </div>

        </div>
      </div>
    </div>
  )
}

export default AppLayout