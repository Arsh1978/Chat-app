import React from "react";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../../shared/components/head";
import Heade from "../../../shared/components/heade";
import SimplePaper from "../../../shared/components/message";
import { Inputmes } from "../../../shared/components/input";
import Ouser from "../../../shared/components/other-user";



export const ChatPage = () => {
  
  return (
    <>
          <Grid container spacing={0}>
            <Grid item xs={3}>
             <MenuAppBar/>
              <Ouser/>
            </Grid>
            <Grid item xs={9}>
            <Heade/>
            <SimplePaper/>
            <Inputmes/>
            </Grid>
          </Grid>
    </>
  );
};
