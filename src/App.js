import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>} ></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/stats" element={<Stats></Stats>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App