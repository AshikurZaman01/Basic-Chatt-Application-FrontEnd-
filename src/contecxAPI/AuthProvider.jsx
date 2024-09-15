import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {

        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);

            const decode = jwtDecode(storedToken);
            const user = {
                userId: decode.userID,
                userName: decode.name,
                userEmail: decode.email,
            }
            setUser(user);
            setIsOnline(true);
        } else {
            setUser(null);
        }

        window.addEventListener("online", () => setIsOnline(true));
        window.addEventListener("offline", () => setIsOnline(false));

    }, [])



    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, isOnline }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
