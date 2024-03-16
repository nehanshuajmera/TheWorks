import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./universal/header/header";
import { Footer } from "./universal/footer/Footer";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;