import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Layout from './components/Layout'
import Profile from './pages/Profile'
function App() {
  return (
    
<Routes>
<Route path="/" element={<Layout title={"Authentication"} />}>
<Route index element={<Home />}  /> 
    <Route path="profile" element={<Profile/>} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
 
   
</Route>
</Routes>
  )
}

export default App
