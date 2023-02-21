import { googleLogout, OverridableTokenClientConfig, TokenResponse, useGoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import axios from "axios";
import { useToast } from "dga-ui";
import { Children, createContext, useContext, useEffect, useState } from "react";
import { User } from "../../shared/types/User";



interface AuthContextData {
    logIn: (overrideConfig?: OverridableTokenClientConfig | undefined) => void
    logOut: () => void;
    profile: User | null;
    accessToken: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<Omit<TokenResponse, "error" | "error_description" | "error_uri">>();
    const [profile, setProfile] = useState<User | null>(null);
    const { addToast } = useToast()
    const logIn = useGoogleLogin({
        onSuccess: tokenResponse => {
            setUser(tokenResponse)
        },
        scope: "https://www.googleapis.com/auth/youtube.readonly"
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    useEffect(() => {
        if (user) {
            axios
                .get<User>(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => addToast({
                    message: err,
                    type: 'error'
                }));
        }
    },
        [user]
    );


    return <AuthContext.Provider value={{ logIn, logOut, profile, accessToken: user?.access_token }} >{children}</AuthContext.Provider>
}



function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthContext");
    }

    return context;
}

export { AuthContextProvider, useAuth };