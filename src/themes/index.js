import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        blue:{
            main: "#E5F9FF",
            dark: "#2669A1",
            text: "#7DB8E8",
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
        }
    },

    // breakpoints: {
    //     values: {
    //       mobile: 0,
    //       tablet: 640,
    //       laptop: 1024,
    //       desktop: 1200,
    //     },
    // },
});