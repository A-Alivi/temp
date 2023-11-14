import Contact from './Assets/components/Contact';
import Footer from './Assets/components/Footer';
import Header from './Assets/components/Header';
import Home from './Assets/components/Home';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </div>
    </Router>

    <div>
      <Header/>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
