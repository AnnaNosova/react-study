import { useState, useCallback, useContext, createContext } from "react";

const AuthContext = createContext();

export const useAuthorization = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState("loggedOut");

    const toggleAuth = useCallback(() => {
        setAuth((current) => (current === "loggedOut" ? "loggedIn" : "loggedOut"));
    }, []);

    return (
        <AuthContext.Provider value={{ value: auth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    );
};