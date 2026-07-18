import { Box, TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import urlBuilder from '@utils/builder.ts';
import {useContext} from "react";
import {InputContext} from "@utils/InputContext.ts";

const header = 'https://nominatim.openstreetmap.org/search';
const format = 'jsonv2'
const query = prompt('Enter location here...')!;
export const newUrl = urlBuilder(header, query, format);

function SearchBar() {
    const { setInput } = useContext(InputContext)

    const submit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userInput = new FormData(event.currentTarget);
        setInput(userInput.get('search') as string || '');

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
