import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    dark: {
      main: "#000000",
      "01": "#091625",
      "03": "#3A4451",
      "04": "#535C67",
      "05": "#6C7A8C",
      "06": "#848A92",
      "07": "#9CA2A8",
      "09": "#CED0D3",
      "10": "#E6E8E9",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Open Sans",
    },
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    h1: {
      fontWeight: 700,
      fontSize: 24,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: theme.typography.fontWeightBold,
          fontSize: 16,
          padding: "12px 24px",
          width: ["contained", "outlined"].includes(ownerState.variant!)
            ? "100%"
            : "auto",
          height: ["contained", "outlined"].includes(ownerState.variant!)
            ? 48
            : "auto",
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: theme.palette.dark["03"],
              color: theme.palette.white.main,
              "&:hover": {
                backgroundColor: theme.palette.dark["01"],
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
              color: theme.palette.dark["01"],
              borderColor: theme.palette.dark["01"],
              borderWidth: 2,
              "&:hover": {
                backgroundColor: theme.palette.dark["10"],
                borderColor: theme.palette.dark["01"],
                borderWidth: 2,
              },
            }),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          color: theme.palette.dark["01"],
        }),
        subtitle1: {
          lineHeight: 1.3,
        },
      },
    },
  },
});

export default theme;
