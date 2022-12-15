import './App.css';
import { Routes, Route } from "react-router-dom";
//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//Pages
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Policy } from './pages/Policy';
import { Popap } from './pages/Popap';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/popap' element={<Popap />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
