import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ContactsContext = createContext();

export const ContactsProvider = ({children}) => {

    
    
    return <ContactsContext.Provider>
        {children}
    </ContactsContext.Provider>
};