import { useContext } from "react";
import { ContactsContext } from "./ContactsContext";

export const useContactContext = () => {
    const context = useContext(ContactsContext);
    if (!context) throw new Error("Contacts context não foi inicializado");
    return context;
};
