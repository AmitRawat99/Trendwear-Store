import React from 'react'
import { useEffect , useState } from 'react'
import { useContext, createContext, useReducer } from 'react'


export const UserContext = createContext()

function UserProvider({ children }) {
    const [user, setuser] = useState(null)

    useEffect(() => {
        const userData = localStorage.getItem("profile")
        if (userData) {
            setuser(JSON.parse(userData))
        }
    }, [])


    const logOutUser = () => {
        localStorage.removeItem("profile")
        setuser(null)
    }


    return (
        <>
            <UserContext.Provider value={{ user, setuser, logOutUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserProvider