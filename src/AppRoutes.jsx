import React from 'react'
import { Routes, Route, } from 'react-router-dom';
import { AdminElement1 } from './App';

import SignForm from './components/Sign_Form';
import LoginForm from './components/Login_Form';
import Dashboard from './Dashboard';
import Delete from './components/Delete';
import Update from './components/Update';
// import Userdata from './components/User_data';
// import Userdata2 from './components/User_data2';
import Products from "./components/Products"
import ShoppingCart from './components/Shopping_Cart';
import TodoPractice from './components/Todo_componenst/Todo_Practice'
import Contact from './components/Contact';
import Chart from './components/Chart';
import Main from './components/Main';
import Orders from './components/Orders';
import ProfitAnalysis from './components/Profit_analysis';
import AdminSignUp from './components/Admin_SignUp';
import Admin_SignIn from './components/Admin_SignIn'
import Users from './components/Users';
import LoginButtons from './components/LoginButtons';
import Overall from './components/Overall'
import Hero_Section from './components/Hero_Section';
// import ExtraHomeFile from './ExtraHomeFile';
// import Home from './components/Home';
// import Home2 from './components/Home2';

function AppRoutes () {
  return (
    <>
      <Routes>
        <Route path='*' element={<div>Page Not Found! </div>} />
        <Route path='/' element={<LoginButtons />} />
        <Route path='/adminSignUp' element={<AdminSignUp />} />
        <Route path='/adminSignIn' element={<Admin_SignIn />} />
        <Route path='/signUP' element={<SignForm />} />
        <Route path='/signIn' element={<LoginForm />} />
        <Route path='/dashboard' element={<AdminElement1><Dashboard /> </AdminElement1>} />
        <Route path='/main' element={<Main />} />
        <Route path='/hero_section' element={<Hero_Section />} >
          <Route path='order' element={<Orders />} />
          <Route path='profit_analysis' element={<ProfitAnalysis />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='user_data2' element={<User_data2 />} />
        <Route path='user_data' element={<User_data />} /> */}
          <Route path='todo' element={<TodoPractice />} />
          <Route path='products' element={<Products />} />
          <Route path='shopping_cart' element={<ShoppingCart />} />
          <Route path='users' element={<Users />} />
          <Route path='overall' element={<Overall />} />
        </Route>


        <Route path='/delete' element={<Delete />} />
        <Route path='/Update' element={<Update />} />
        <Route path='/chart' element={<Chart />} />
        {/* <Route path='/user_data2'  element={<User_data2/>} />  */}
        {/* <Route path='/' element={<PublicElement1><Home /></PublicElement1>} />
      <Route path='/user' element={<UserElement1><User /></UserElement1>} />
      <Route path='/admin' element={<AdminElement1><Admin /></AdminElement1>} /> */}


      </Routes>

    </>
  )
}

// function Home () {
//     return (
//       <>
//         Home
//       </>
//     )
//   }
//   function User () {
//     return (
//       <>
//         User
//       </>
//     )
//   }
//   function Admin () {
//     return ( <> Admin</> )
//   }

export default AppRoutes;