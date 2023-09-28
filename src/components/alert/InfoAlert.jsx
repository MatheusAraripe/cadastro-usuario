// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";

function InfoAlert({ mesage, type }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div data-testid="infoAlertTest">
            {isVisible && (
                <Alert
                    severity={type}
                    sx={{
                        width: { xs: "250px", sm: "300px", md: "500px" },
                        position: "absolute",
                        zIndex: "99",
                        right: "10px",
                        top: "20px",
                        border: "1px solid black",
                    }}
                >
                    {mesage}
                </Alert>
            )}
        </div>
    );
}

export default InfoAlert;
