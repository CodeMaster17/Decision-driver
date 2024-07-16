import React, { createContext, useContext, useState, useEffect } from 'react'

// context for authentication
const AuthContext = createContext()

// custom hook to use  the auth context
export const useAuth = () => {
    return useContext(AuthContext)
}

// auth provider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            setIsAuthenticated(true)
        }

    }, [])

    const login = (email) => {
        setIsAuthenticated(true);
        localStorage.setItem('user', email);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

}
