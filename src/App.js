import './App.css';
import Header from './sections/header/Header';
import Nav from './sections/nav/nav.jsx'
import About from './sections/about/about.jsx';
import Contact from './sections/contact/contact.jsx';
import Skills from './sections/skills/Skills.jsx';
import Services from './sections/services/Services.jsx';

function App() {
  return (
    <body>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Contact />
    </body>
  );
}

export default App;
