import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar />
            <Routes>
              <Route path='/room/:roomID' element={<Chat />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
