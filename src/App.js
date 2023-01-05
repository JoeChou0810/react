import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// 引入頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

// 巢狀使用
import Layout from './pages/users/Layout'
import Register from './pages/users/Register'
import Login from './pages/users/Login'

// 引入排版元件
import Menubar from './layout/Menubar'
import Footer from './layout/Footer'
import MyContent from './layout/MyContent'

function App() {
  return (
    <BrowserRouter>
      {/* 所有頁面統一選單(導覽列) */}
      <Menubar />

      {/* 路由表 */}
      <MyContent>
        {/* start: 只切換中間的頁面元件 */}
        <Routes>
          {/* index 同等於 path='/' */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* 巢狀路由  `/user/xxxx` */}
          <Route path="user" element={<Layout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* end */}
      </MyContent>

      {/* 所有頁面統一頁尾 */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
