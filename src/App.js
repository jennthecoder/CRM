import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Nav from './components/Nav';
import { useState} from 'react';
import CategoriesContext from './categoryContext';
import OwnerContext from './ownerContext';

const App = () => {
  const [categories, setCategories] = useState(null);
  const [owners, setOwners] = useState(null);
  const value = {categories, setCategories}
  const choices = {owners, setOwners}
  return (
    <div className='app'>
      <CategoriesContext.Provider value={value}>
      <OwnerContext.Provider value={choices}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={< Dashboard/>} />
          <Route path="ticket" element={<Tickets />} />
          <Route path="ticket/:id" element={<Tickets editMode={true}/>} />
        </Routes>
      </BrowserRouter>
      </OwnerContext.Provider>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
