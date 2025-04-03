import { createContext, useState, useContext } from "react";

// a global data store that holds user-related information that other components will be able to subscribe to  and access its values.
const UserContext = createContext();


// Sent to tree top: main.jsx
// UserContextProvider is a wrapper component that provides the user data to any child component.
export const UserContextProvider = ({ children }) => {
    // The children prop allows any component wrapped inside UserContextProvider to receive the provided data.


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


// Custom components sent to components
export const useUserContext = () => {
    // useContext: Allows consuming components to access the context.
    return useContext(UserContext);
}


