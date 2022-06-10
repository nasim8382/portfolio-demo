import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Blogs></Blogs>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
