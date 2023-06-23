import './App.css';
import AppRoutes from './AppRoutes';
import useAuth from './components/hooks/useAuth';

// const USER_TYPE = {
//   PUBLIC: 'Public User',
//   NORMAL_USER: 'Normal User',
//   ADMIN_USER: 'Admin User'
// }

// const CURRENT_USER_TYPE = USER_TYPE.ADMIN_USER
function App () {



  return (
    <>
   <AppRoutes/>

    </>
  );
}




function PublicElement1({ children }) {
  return <>
    {children}
  </>
}


function  UserElement1 ({ children }) {
  const {auth,setAuth}= useAuth("");
  const {admin,setAdmin}= useAuth("");
  const {user,setUser}= useAuth("");
  const CURRENT_USER_TYPE = auth
  if (CURRENT_USER_TYPE == user || CURRENT_USER_TYPE == admin) {
    return <>
      {children}
    </>
  } else {
    // return <Navigate to='/PageNotFound'/>
    return <div> You Don't Access to this Page !</div>
  }
}
function  AdminElement1 ({ children }) {
  const {auth,setAuth}= useAuth("");
  const {admin,setAdmin}= useAuth("");
  setAuth("ali")
setAuth('ali')
  const CURRENT_USER_TYPE = auth
  if (CURRENT_USER_TYPE === admin) {
    return <>
      {children}
    </>
  } else {
    // return <Navigate to='/PageNotFound'/>
    return <div> You Don't Access to this Page !</div>
  }
}
    export { App, UserElement1,AdminElement1,PublicElement1};
