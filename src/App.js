import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AddResource from './components/AddResource';
import UpdateResource from './components/UpdateResource';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/addResource' element={<AddResource/>}></Route>
        <Route  path='/updateResource' element={<UpdateResource/>}></Route>
        


      </Routes>
    
    </div>
  );
}

export default App;
