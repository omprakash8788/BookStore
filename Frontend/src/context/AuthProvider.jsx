import { createContext, useContext, useState } from "react"

// first we create context
export const AuthContext = createContext()

export default function AuthProvider ({children}){
    // children me all component aa gayenge like App.jsx, Navbar wala component , banner wala , woh sabhi children hai.

    // So our first task is get data from local storage 
    const initialAuthUser=localStorage.getItem("Users")
    // now we are going to manage state
    const [authUser, setAuthUser]=useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined
    )
    // you can see inside useState , if we have initialAuthUser then parse it and if not then undeined.
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
          {children}
        </AuthContext.Provider>
    )

}
export const useAuth=()=>useContext(AuthContext)

// useAuth is a hook, issi useAuth ka istamal karke hamlog , authUser, setAuthUser ka use karenge

// Note - we are create this context because we can use it golbally.
