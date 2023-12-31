import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        blue:{
            main: "#E5F9FF",
            dark: "#2669A1",
            text: "#7DB8E8",
        },
        primary:{
            light: "#E5F9FF",
            main: "#2669A1",
            contrastText: "#7DB8E8",
        },
        secondary:{
            main: "#484D98",
            light: "#F0F3FF",
            contrastText: "#9C9FD5",
        },
        green:{
            main: "#4DD47E",
            ligth: "#E2FAF3",
            text: "#67C7A9",
        },
        orange:{
            main: "#FFF5EE",
            dark: "#DE9247",
            text: "#F3B374",
        },
        purple:{
            main: "#F0F3FF",
            dark: "#484D98",
            text: "#9C9FD5",
        },
        background:{
            modal: 'rgba(200, 200, 200, 0.904)'
        }
    },

});