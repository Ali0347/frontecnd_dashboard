import React, { createContext, useState } from 'react'

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {

    // Component did mount
    const [auth, setAuth] = useState({})
    const [outsider, setOutsider] = useState({})
    const [admin, setAdmin] = useState({})
    const [user, setUser] = useState({})

    return (

        <AuthContext.Provider value={
            { auth, setAuth,outsider,setOutsider,user,setUser,admin,setAdmin
            }
        }>
            {children}
        </AuthContext.Provider>

        // <div>AuthContextProvider</div>

    );
}

export default AuthContextProvider