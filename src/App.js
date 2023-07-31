import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/login/login';
import Chat from './pages/chat/chat';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/chat" element={<Chat/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;