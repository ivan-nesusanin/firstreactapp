import './styles/App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Users from './pages/Users';
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
          <Route path="*" element={<Navigate to="/error" replace/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
