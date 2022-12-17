import React,{useState} from 'react';
import Navbar from './components/Navbar';
import { Route , Routes } from 'react-router-dom';
import LandPage from './components/LandPage';
const App = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className={`${theme || `dark w-full mx-auto h-screen`}`}>
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<LandPage />}/>
      </Routes>
    </div>
  );
};

export default App;