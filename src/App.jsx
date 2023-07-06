import { Route, Routes } from "react-router-dom";
import Main from "./Components/main/Main";
import Register from "./Components/forms/Register";
import Login from "./Components/forms/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
