import { createContext } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({children}) => {

    
    
    return <ContactsContext.Provider>
        {children}
    </ContactsContext.Provider>
};