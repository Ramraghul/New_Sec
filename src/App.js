import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './Components/Home/Portal';
import Login from './Components/Auth/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/Portal" element={<Portal />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
