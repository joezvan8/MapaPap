import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './SearchBar.module.css';

function SearchBar() {
  return (
    <Box
        className={styles.searchBar}
        component="form"
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="What we feel for today???" variant="outlined" />
      
    </Box>
  )
}

export default SearchBar;