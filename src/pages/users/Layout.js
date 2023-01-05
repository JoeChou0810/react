import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <h1>會員專區</h1>
      <Link to="register">註冊</Link> <Link to="login">登入</Link>
      <hr />
      <div className="bg-success h-300">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
