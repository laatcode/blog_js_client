import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="content">
        Content
      </main>
      <Footer />
    </div>
  );
}

export default App;
