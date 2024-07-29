import { useState, useCallback } from 'react';
import { AuthContext } from '.';

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({ isAuthorized: false });

    const login = useCallback(() => {
        setAuth(() => ({ isAuthorized: true, userName: 'UserName' }));
    }, []);

    const logout = useCallback(() => {
        setAuth(() => ({ isAuthorized: false }));
    }, []);

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};