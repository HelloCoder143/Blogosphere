import {createContext, useState} from "react";

export const UserContext = createContext({
    userInfo: null, // Start with null to indicate no user is logged in
    setUserInfo: () => {}, // Provide a no-op default function
});

export function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({});
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    );
}