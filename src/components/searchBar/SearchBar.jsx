import { Grid, TextField } from "@mui/material";
import { ContactsContext } from "../../context/ContactsContext";
import React, { useContext, useState } from "react";

function SearchBar({ setMyContacts, setSearchValue }) {
    const { searchContact } = useContext(ContactsContext);

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
        setSearchValue(e.target.value);
        setMyContacts(searchContact(e.target.value));
    };

    return (
        <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid item xs={12} marginBottom={2} padding={1}>
                <TextField
                    label="Nome do contato"
                    variant="standard"
                    fullWidth
                    value={name}
                    onChange={handleNameChange}
                />
            </Grid>
        </Grid>
    );
}

export default SearchBar;
