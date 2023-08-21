import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddIcon from '@mui/icons-material/Add';


export const  Inputmes=()=> {
  return (
    
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <InsertEmoticonIcon/>
      <AddIcon/>
      <TextField
        id="outlined-basic"
        label="type message"
        sx={{width: 1000,}}
       
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <MicIcon/>
    </Box>
  );
}
