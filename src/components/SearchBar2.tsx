import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar2() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
        <TextField id="outlined-basic" label="Search what you feel for here..." variant="outlined" />
      
    </Box>
  )
}

export default SearchBar2