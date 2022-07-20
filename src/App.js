import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from './State Provider/StateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <>
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <div className='app'>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Routes>
                <Route path='/room/:roomID' element={<Chat />} />
              </Routes>
            </div>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
