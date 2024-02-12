import AuthorsPage from "./components/AuthorsPage";
import BooksPage from "./components/BooksPage";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route index element={<BooksPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
      </Route>
    </Routes>
  )
}

export default App;
