import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
