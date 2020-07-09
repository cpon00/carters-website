import React from "react";
import "./App.css";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import TopPanel from "./panels/TopPanel";
import Resume from "./pages/Resume";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "black",
      contrastText: "#fff",
    },
    secondary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgrey",
    height: "100vh",
  },

  bottomPanel: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#27292B",
    width: "100%",
  },

  textSection: {
    display: "flex",
    minHeight: theme.spacing(100),
    minWidth: theme.spacing(1200 / 8),
    maxWidth: theme.spacing(1600 / 8),
    justifyContent: "center",
    backgroundColor: "#ECF1ED",
  },
}));

const App = (props) => {
  const classes = useStyles(props);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopPanel />
        <div className={classes.bottomPanel}>
          <div className={classes.textSection}>
            <Resume />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
