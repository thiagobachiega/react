import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contract from './components/pages/Contract'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Projects from './components/pages/projects'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/contract" element={<Contract/>}/>
            <Route exact path="/newproject" element={<NewProject/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
          </Routes>
        </Container>  
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
