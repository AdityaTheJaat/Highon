import { Routes , Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <Routes>
      <Route path="/post" element={<Posts />} />
    </Routes>
  );
}

export default App;
