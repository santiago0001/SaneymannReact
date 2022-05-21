import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import companyLogo from "./logosaneymann.png";

const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    divNavBar: { backgroundColor: "#AED6F1" },
    gridLogo: {
      width: "50%",
      alignItems: "center",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        display: "flow-root",
      },
    },
    containterNavBar: {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    logo: {
      width: "100%",
    },
    titleNav: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#1B4F72",
      textAlignLast: "justify",
    },
    subTitleNav: {
      fontSize: "1.4rem",
      fontWeight: "700",
      color: "#1B4F72",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2rem",
      },
    },
    link: { textDecoration: "none", color: "#1B4F72" },
    gridItem: {
      [theme.breakpoints.down("xs")]: {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.divNavBar}>
      <Container className={classes.containterNavBar}>
        <Grid container className={classes.gridLogo} spacing={2}>
          <Grid className={classes.gridItem} item xs={3}>
            <Box>
              <img className={classes.logo} src={companyLogo}></img>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={6}>
            <Box className={classes.titleNav}>SANEYMANN</Box>
          </Grid>
        </Grid>

        <Grid container className={classes.gridLogo}>
          <Grid className={classes.gridItem} item xs={3}>
            <Box className={classes.subTitleNav}>
              <a className={classes.link} href="/">
                Inicio
              </a>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box className={classes.subTitleNav}>
              <a className={classes.link} href="/">
                Portfolio
              </a>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box className={classes.subTitleNav}>
              <a className={classes.link} href="/">
                Galeria
              </a>
            </Box>
          </Grid>
          <Grid className={classes.gridItem} item xs={3}>
            <Box className={classes.subTitleNav}>
              <a className={classes.link} href="/">
                Contacto
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NavBar;
