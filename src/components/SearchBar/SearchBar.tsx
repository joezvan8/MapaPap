import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './SearchBar.module.css';
import urlBuilder from '@utils/builder.ts';

const header = 'https://nominatim.openstreetmap.org/search';
const format = 'jsonv2'
const query = prompt('Enter location here...')!;
export const newUrl = urlBuilder(header, query, format);

function SearchBar() {
  return (
    <Box
        className={styles.searchBar}
        component="form"
        noValidate
        autoComplete="off">
        <TextField id={styles.textbox}
                   label="What we feel for today???"
                   variant="outlined"
                   fullWidth
                   sx={{
                       '& .MuiOutlinedInput-root':{
                           borderRadius:"50px"
                       }
                   }} />
      
    </Box>
  )
}

export default SearchBar;