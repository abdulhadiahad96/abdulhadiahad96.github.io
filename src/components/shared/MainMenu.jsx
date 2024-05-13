import { Link } from "react-router-dom"

function MainMenu () {
  const menus = [
    {
      icon: "fa-light fa-address-card",
      text: "About",
      link: "/"
    },
    {
      icon: "fa-light fa-file-user",
      text: "Resume",
      link: "/resume"
    },
    {
      icon: "fa-light fa-briefcase",
      text: "Portfolio",
      link: "/portfolio"
    }
  ];

  return (
    <div className="text-right">
      <div className="bostami-main-menu-wrap">
        <nav className="bastami-main-menu main_menu_3">
          <ul>
            {
              menus.map((item, i) => {
                return (
                  <li key={i} className={ window.location.pathname == item.link ? 'active' : '' }>
                    <Link to={item.link}>
                      <span>
                        <i className={item.icon}></i>
                      </span>
                      { item.text }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MainMenu