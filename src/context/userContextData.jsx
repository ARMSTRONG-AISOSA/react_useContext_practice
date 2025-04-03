import { Children } from "react";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();


export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserContextProvider = ({children}) => {
    const [userData, setUserData] = useState([
        {
            name: "Ben Grim",
            gender: "male",
            isMarried: false,
            age: 40,
            profession: "Astronaut"
        }
    ]);

    const contextValue = {
        userData,
        setUserData,
    }

    return (
        <UserContext.Provider
            value={contextValue}
        >{children}</UserContext.Provider>
    );
}


// Notes
// createContext: Creates a new context object, allowing data to be shared across multiple components.
// useState: Manages the userData state inside the provider.
// useContext: Allows consuming components to access the context.