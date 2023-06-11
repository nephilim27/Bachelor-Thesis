import {useState, createContext, useContext, useEffect} from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const AuthContext = createContext({
    authenticated: false,
    user: undefined,
    profile: undefined,
    onboardingCompleted: false,
    setAuthenticated: () => console.log,
    deleteToken: () => console.log,
    logout: () => console.log,
})
export const AuthProvider = ({
    children,
}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [onboardingCompleted, setOnboardingCompleted] = useState(false);
    const [profile, setProfile] = useState({});
    const [user, setUser] = useState({});
    const setAuthStates = (user) => {
        setUser(user)
        setAuthenticated(true)
        localStorage.setItem('user', JSON.stringify(user));
        axios.defaults.headers.common = {
            'Authorization': `Bearer ${user.access_token}`,
            'Accept': 'application/json',
        }
    }

    const login = useGoogleLogin({
        onSuccess: user => {
            setAuthStates(user);
        },
    });

    const logout = () => {
        googleLogout();
        setAuthenticated(false)
        localStorage.removeItem('user');
    };

    const getRefreshUser = () => {
        const userFromStorage= JSON.parse(localStorage.getItem('user'));
        return userFromStorage ?? undefined
    };

    useEffect(() => {
        if (!authenticated) {
            const refreshUser = getRefreshUser();
            if(refreshUser){
                setAuthStates(refreshUser);
            }
            return
        }
        axios
            .get('https://www.googleapis.com/oauth2/v1/userinfo')
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => console.log(err));
    }, [authenticated]);

    return (
        <AuthContext.Provider value={{
            authenticated: authenticated,
            setAuthenticated: setAuthenticated,
            logout:logout,
            login:login,
            user: user,
            profile: profile,
            onboardingCompleted: onboardingCompleted
        }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuthentication = () => useContext(AuthContext);
