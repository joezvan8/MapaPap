import { Box, TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import urlBuilder from '@utils/builder.ts';
import {useContext} from "react";
import {UrlContext} from "@utils/builder.ts";

const header = import.meta.env.VITE_BASE_URL;
const format = 'jsonv2'

function SearchBar() {
    const { setUrl } = useContext(UrlContext)

    const submit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();


        const userInput = new FormData(event.currentTarget);
        const query = (userInput.get('search') as string || '');

        const newUrl = urlBuilder(header, query, format);
        setUrl(newUrl);
        console.log(newUrl)

    }

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

export default SearchBar;
