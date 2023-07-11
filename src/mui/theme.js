import { createTheme } from "@mui/material";

const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: 'YekanBakh',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900,
    },
    palette: {
        primary: {
            main: "#2065BB"
        }
    }
});

export default theme;