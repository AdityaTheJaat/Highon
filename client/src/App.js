import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<Posts />} />
    </Routes>
  );
}
export default App;
