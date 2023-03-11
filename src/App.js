import './App.css';
import { Routes, Route } from 'react-router-dom';
import ExtraHome from './components/ExtraHome';
import Sign_Form from './components/Sign_Form';
import Login_Form from './components/Login_Form';
import AfterApp from './AfterApp';
import ShowApp from './ShowApp';
import Delete from './components/Delete';
import Update from './components/Update';
import User_data from './components/User_data';
import User_data2 from './components/User_data2';
import Products from "./components/Products"
import Shopping_Cart from './components/Shopping_Cart';
import Todo_Practice from './components/Todo_componenst/Todo_Practice'
import Contact from './components/Contact';
// import Home from './components/Home';
// import Home2 from './components/Home2';
function App () {
  return (
<>   
      <Routes>
 
        
        <Route path='/'  element={<ExtraHome/>} />
        <Route path='/signUp'  element={<Sign_Form/>} />
        <Route path='/signIn'  element={<Login_Form/>} />\

        <Route path='/after'  element={<AfterApp/>} >
        <Route path='user_data2'  element={<User_data2/>} />
          </Route>
        
        <Route path='/showapp'  element={<ShowApp/>} />
        <Route path='/delete'  element={<Delete/>} />
        <Route path='/Update'  element={<Update/>} />
        {/* <Route path='/user_data2'  element={<User_data2/>} /> */}
        <Route path='/user_data'  element={<User_data/>} />
        <Route path='/products'  element={<Products/>} />
        <Route path='/shopping_cart'  element={<Shopping_Cart/>} />
        <Route path='/todo'  element={<Todo_Practice/>} />
        <Route path='/contact'  element={<Contact/>} />


        {/* <Route path='/home'  element={<Home/>} >

        <Route path='home2'  element={<Home2/>} ></Route>

        </Route> */}


        </Routes>
    
    {/* <AfterApp></AfterApp> */}
    

</>
  );
}

export default App;
