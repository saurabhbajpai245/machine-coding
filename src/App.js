import './App.css';
import Countdown from './components/Countdown';
import Home from './components/Home';
import InfiniteScroll from './components/InfiniteScroll';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination/Pagination';
import Timer from './components/Timer';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './utils/theme-context';
import Tabform from './components/tabs/Tabform';
import Otp from './components/Otp';

function App() {


  return (
    <ThemeProvider>
    <div className="App">
      <BrowserRouter> 
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/timer' element={<Timer />}></Route>
          <Route path='/counter' element={<Countdown />}></Route>
          <Route path='/infiniteScroll' element={<InfiniteScroll />}></Route>
          <Route path='/pagination' element={<Pagination />}></Route>
          <Route path='/tabform' element={<Tabform />}></Route>
          <Route path='/otp' element={<Otp />}></Route>
        </Routes>
      </BrowserRouter>
     {/* <Timer /> */}
    {/* <Countdown /> */}
    {/* <InfiniteScroll /> */}
    {/* <Pagination /> */} 
    </div>
    </ThemeProvider>
  );
}

export default App;
