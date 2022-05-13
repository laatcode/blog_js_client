import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="content">
          <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
