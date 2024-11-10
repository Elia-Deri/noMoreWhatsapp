import { createTheme } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
