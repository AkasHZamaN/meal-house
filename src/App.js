import './App.css';
import Meals from './Pages/Meals';
import Navbar from './Pages/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Footer from './Pages/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/mealhouse' element={<RequireAuth>
          <Meals></Meals>
        </RequireAuth>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


// step1: install packages
// step2: cosntants define
// step3: async action creator
// step4: reducer
// step5: create store
// step6: provide store
// step7: use store
// step8: use style