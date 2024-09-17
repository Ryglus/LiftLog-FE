import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

const AccountContext = createContext();
export const useAccount = () => useContext(AccountContext);

export const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState({
        isLoggedIn: AuthService.isLoggedIn(),
        user: null,
    });

    // Auto-login if tokens are valid on app load
    useEffect(() => {
        const initializeAccount = async () => {
            if (AuthService.isLoggedIn()) {
                try {
                    AuthService.attachTokenToRequest();
                    const userInfo = await UserService.getCurrentUser();
                    setAccount({
                        isLoggedIn: true,
                        user: userInfo,
                    });
                } catch (error) {
                    console.error('Error auto-fetching user:', error);
                    AuthService.logout();
                }
            }
        };
        initializeAccount();
    }, []);

    const login = async (email, password) => {
        const result = await AuthService.login(email, password);
        if (result.success) {
            try {
                AuthService.attachTokenToRequest();
                const userInfo = await UserService.getCurrentUser(); // Fetch user info
                setAccount({
                    isLoggedIn: true,
                    user: userInfo,
                });
            } catch (error) {
                console.error('Error fetching user info after login:', error);
            }
        }
        return result;
    };

    const logout = () => {
        AuthService.logout();
        setAccount({ isLoggedIn: false, user: null });
    };

    return (
        <AccountContext.Provider value={{ account, login, logout }}>
            {children}
        </AccountContext.Provider>
    );
};
