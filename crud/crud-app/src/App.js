import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeNew from './pages/HomeNew'
import Noticias from './pages/Noticias'
import Noticia from './pages/Noticia'
import VerNoticia from './pages/VerNoticia';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<HomeNew />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<Noticia />} />
            <Route path="/noticias/:titulo/:id" element={<VerNoticia />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
