import React, { createContext, useState, useContext, useEffect } from 'react';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService'; // Import UserService for fetching user info

// Create the context
const AccountContext = createContext();

// Custom hook to use AccountContext
export const useAccount = () => useContext(AccountContext);

// Provider component to wrap around components that need account state
export const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState({
        isLoggedIn: AuthService.isLoggedIn(),
        user: null,
        token: null,
    });

    const login = async (username, password) => {
        const result = await AuthService.login(username, password);
        if (result.success) {
            try {
                AuthService.attachTokenToRequest();
                const userInfo = await UserService.getCurrentUser(); // Fetch user info
                setAccount({
                    isLoggedIn: true,
                    user: userInfo,
                    token: result.access_token,
                });
            } catch (error) {
                console.error('Error fetching user info after login:', error);
            }
        }
        return result;
    };

    const logout = () => {
        AuthService.logout();
        setAccount({ isLoggedIn: false, user: null, token: null });
    };

    return (
        <AccountContext.Provider value={{ account, login, logout }}>
            {children}
        </AccountContext.Provider>
    );
};
