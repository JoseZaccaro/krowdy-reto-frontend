import './index.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Home from './views/Home'
import Details from './components/Details'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:identificador" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
