import './App.css';
import Header from './sections/header/Header';
import Nav from './sections/nav/nav.jsx'
import About from './sections/about/about.jsx';
import Contact from './sections/contact/contact.jsx';

function App() {
  return (
    <body className='container'>
      <Header/>
      <Nav/>
      <About/>
      <Contact/>
    </body>
  );
}

export default App;
