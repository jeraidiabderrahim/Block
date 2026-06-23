import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Logout from "./Pages/logout";
import Accuel from "./Pages/accuel";
import CreatePost from "./Pages/post/create";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/accuel" element={<Accuel />} />
      <Route path="/createpost" element={<CreatePost/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
