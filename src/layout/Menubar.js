import { Link } from 'react-router-dom'

function Menubar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-primary bg-gradient">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            react路由網站
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  首頁
                </Link>
              </li>
              <li class="nav-item">
                <Link to="product" class="nav-link">
                  產品
                </Link>
              </li>
              <li class="nav-item">
                <Link to="user" class="nav-link">
                  會員
                </Link>
              </li>
              <li class="nav-item">
                <Link to="about" class="nav-link ">
                  關於我們
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Menubar
