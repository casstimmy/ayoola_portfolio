import './App.css';
import Header from './sections/header/Header';
import Nav from './sections/nav/nav.jsx'
import About from './sections/about/about.jsx';

function App() {
  return (
    <body className='container'>
      <Header/>
      <Nav/>
      <About/>
    </body>
  );
}

export default App;
