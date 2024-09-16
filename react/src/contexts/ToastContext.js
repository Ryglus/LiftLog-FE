import React, { createContext, useState, useContext } from 'react';
import ToastNotification from '../components/shared/ToastNotification';

const ToastContext = createContext();

export const useToast = () => {
    return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
    const [toastData, setToastData] = useState({
        message: '',
        show: false,
        variant: 'danger'
    });

    const showToast = (message, variant = 'danger') => {
        setToastData({ message, show: true, variant });
    };

    const hideToast = () => {
        setToastData({ ...toastData, show: false });
    };

    return (
        <ToastContext.Provider value={{ showToast, hideToast }}>
            {children}
            <ToastNotification
                message={toastData.message}
                show={toastData.show}
                onClose={hideToast}
                variant={toastData.variant}
            />
        </ToastContext.Provider>
    );
};
