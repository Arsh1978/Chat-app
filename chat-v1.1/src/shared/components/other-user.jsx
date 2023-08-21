import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import {useState} from "react";
import { useEffect } from 'react';

export default function Ouser() {
  const [result, setResult] = useState();
  useEffect(() => {
    async function networkCall() {
      let res = await fetch(
        "https://raw.githubusercontent.com/Hariom051/problems-json/main/problems.json"
      );
      res = await res.json();
      localStorage.setItem("json",JSON.stringify(res.problems));
      setResult(res.problems);
    }
    networkCall();
  }, []);

  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
            <Card sx={{ maxWidth: 445 }}>
            <CardHeader
              title="user name"
              subheader="latest message"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="profile">
            p
          </Avatar>
        }/>
    

    </Card>
    </Box>
  );
}

