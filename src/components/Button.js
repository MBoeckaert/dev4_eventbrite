import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      backgroundColor: "#FFA500",
    },
  },
});

const ButtonTickets = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f05537", width: "100%" }}
        >
          Tickets
        </Button>
      </ThemeProvider>
    </>
  );
};

export default ButtonTickets;
