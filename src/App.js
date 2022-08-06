import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={< Dashboard/>} />
          <Route path="ticket" element={<Tickets />} />
          <Route path="ticket/:id" element={<Tickets editMode={true}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
