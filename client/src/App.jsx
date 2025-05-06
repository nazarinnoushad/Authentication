
import About from './pages/About'
import Collection from './pages/Collection'
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'
import Cart from './pages/Cart'

function App() {
  return (
    
<Routes>
<Route path="/" element={<Layout title={"Authentication"} />}>
<Route index element={<Home />}  /> 
    <Route path="about" element={<About/>} />
    <Route path="collection" element={<Collection />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route path="cart" element={<Cart />} />
</Route>
</Routes>
  )
}

export default App
