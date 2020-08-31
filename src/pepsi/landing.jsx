import React, { Component } from "react";
import "./landing.css";
import {
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  Grid,
  Button,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MenuIcon from "@material-ui/icons/Menu";

class Landing extends Component {
  state = {
    bgcolors: ["#0062be", "#e60c2c", "#1e1e1e"],
    activeindex: null,
    header: ["Home", "Products", "What's New", " Newsletter", "Contact"],
    menuOpen: false,
  };

  //set the background color as loaded
  componentDidMount = () => {
    var activeindex = localStorage.getItem("index");
    if (activeindex !== null) {
      this.setState({ activeindex });
    }
  };
  changeBg = (e) => {
    localStorage.setItem("index", e);
    this.setState({ activeindex: e });
  };
  handleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    return (
      <>
        <Paper
          className="full-wrapper"
          style={{
            backgroundColor: this.state.bgcolors[this.state.activeindex],
            transition: "all 0.4s ease-in-out ",
          }}
        >
          <AppBar
            position="relative"
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <Grid container justify="space-between">
                <Grid item>
                  <img src={require("./logo.png")} class="logo" />
                </Grid>
                <Hidden smUp>
                  <Grid item>
                    <MenuIcon
                      className="hamburger"
                      size="small"
                      onClick={this.handleMenu}
                    />
                  </Grid>
                </Hidden>

                <Hidden xsDown>
                  <Grid
                    item
                    container
                    justify="space-evenly"
                    md={5}
                    sm
                    alignItems="center"
                    spacing={1}
                  >
                    {this.state.header.map((e) => (
                      <Grid item>
                        <Typography
                          variant="body1"
                          style={{
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          {e}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Hidden>
              </Grid>
            </Toolbar>
          </AppBar>
          <div className={this.state.menuOpen ? "menu open" : "menu"}>
            {this.state.header.map((e) => (
              <Typography align="left">{e}</Typography>
            ))}{" "}
          </div>
          <div className="main-grid">
            <Grid container justify="space-between" alignItems="center">
              <Hidden smUp>
                <Grid item xs={12}>
                  <Grid item>
                    <Grid item container direction="column" xs={12}>
                      <Grid item xs={12} style={{ margin: "0px auto" }}>
                        <img
                          src={require(`./pepsi00${
                            Number(this.state.activeindex) + 1
                          }.png`)}
                          style={{
                            margin: "0px auto",
                            transition: "all 0.4s ease-in-out",
                          }}
                        />
                      </Grid>
                      <Grid item xs>
                        <div className="other">
                          {this.state.bgcolors.map((index, e) => (
                            <div
                              style={
                                e == this.state.activeindex
                                  ? {
                                      transform: "scale(1.3)",
                                      transition: "all 0.4s ease-in-out",
                                    }
                                  : null
                              }
                              onClick={() => {
                                this.changeBg(e);
                              }}
                            ></div>
                          ))}
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={6}>
                <Typography variant="h2">
                  <span> THAT'S WHAT</span>
                </Typography>
                <Hidden xsDown>
                  <Typography variant="h1">
                    <span>I LIKE</span>
                  </Typography>
                </Hidden>
                <Hidden smUp>
                  <Typography variant="h6">
                    {" "}
                    <span> I LIKE</span>
                  </Typography>
                </Hidden>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tellus ligula, dapibus eget mattis in, vehicula a ante. Fusce
                  in justo at nibh semper rhoncus ut quis velit.Proin efficitur
                  lacus leo, non faucibus nunc laoreet at. Nulla facilisi.
                </Typography>
                <Typography>
                  <button>view all products</button>
                </Typography>
              </Grid>
              <Hidden xsDown>
                <Grid item>
                  <Grid item container direction="column" xs={12}>
                    <Grid item xs>
                      <img
                        src={require(`./pepsi00${
                          Number(this.state.activeindex) + 1
                        }.png`)}
                      />
                    </Grid>
                    <Grid item xs>
                      <div className="other">
                        {this.state.bgcolors.map((index, e) => (
                          <div
                            style={
                              e == this.state.activeindex
                                ? {
                                    transform: "scale(1.5)",
                                    transition: "all 0.4s ease-in-out",
                                  }
                                : null
                            }
                            onClick={() => {
                              this.changeBg(e);
                            }}
                          ></div>
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Grid>
          </div>
          <Hidden xsDown>
            <Grid
              container
              direction="column"
              spacing={2}
              className="social-media"
            >
              <Grid item>
                <FacebookIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
              <Grid item>
                <TwitterIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
              <Grid item>
                <InstagramIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid container spacing={2} justify="center">
              <Grid item xs={2}>
                <FacebookIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={2}>
                <TwitterIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
              <Grid item xs={2}>
                <InstagramIcon
                  size="small"
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Grid>
            </Grid>
          </Hidden>
        </Paper>
      </>
    );
  }
}

export default Landing;
