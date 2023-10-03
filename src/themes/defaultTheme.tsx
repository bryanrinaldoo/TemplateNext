// import inter from next/font
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({ subsets: ['latin'], weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

// Create a theme instance.
const defaultTheme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default defaultTheme;
