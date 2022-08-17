import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';


function App() {
  return (
    <div className="App">
      <Header title="My Todos List" search={true}/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
