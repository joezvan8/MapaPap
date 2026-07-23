/* Imports */
import { Box, TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import urlBuilder from '@utils/builder.ts';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";

/* Constants created to build URL */
const header = import.meta.env.VITE_BASE_URL;
const format = 'jsonv2'
/* Search bar function that implements URL building */
function SearchBar() {
    const { setUrl } = useContext(UrlContext)

    const submit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        /* Takes user input and parses it into query */
        const userInput = new FormData(event.currentTarget);
        const query = (userInput.get('search') as string || '');

        /* Creates new URL using earlier format and new query */
        const newUrl = urlBuilder(header, query, format);
        setUrl(newUrl);
        console.log(newUrl)

    }
    /* Creates a box element that implements search/URL functionality */
    return (
              <Box
                className={styles.searchBar}
                component="form"
                onSubmit={submit}
                noValidate
                autoComplete="off">
                <TextField id={styles.textbox}
                           name="search"
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

/* Export search bar element to App.tsx */
export default SearchBar;
