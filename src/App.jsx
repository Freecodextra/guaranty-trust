import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import About from "./components/about-us/About"
import Dashboard from "./components/admin/dashboard/Dashboard"
import Login from "./components/admin/login/Login"
import { FirebaseAuthProvider, FirebaseStoreProvider } from "./firebase/firebase"
import  PrivateRoute  from "./components/priavte-route/PrivateRoute";
import Posts from "./components/posts/Post"
import EachPost from "./components/posts/EachPost"
import NotFound from "./components/not-found/NotFound"

function App() {

  return (
    <FirebaseAuthProvider>
      <FirebaseStoreProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Posts />} />
        <Route path="/blog/:postId" element={<EachPost />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
      </FirebaseStoreProvider>
    </FirebaseAuthProvider>
  )
}

export default App
 