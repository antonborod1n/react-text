import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import Blog from './components//Blog/Blog';
import List from './components/List/List';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <List />
      <About />
      <Blog />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
