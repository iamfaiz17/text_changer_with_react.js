import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title="TextChangerApp" About= "About us"/>
     <div className="container my-3">
     <TextForm heading="Enter Your Text Analyze Below"/>
     </div>
     </>
  );
}


export default App;
