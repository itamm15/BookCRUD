import BooksPage from "./components/BooksPage";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/" element={<BooksPage />} />
      </Route>
    </Routes>
  )
}

export default App;
