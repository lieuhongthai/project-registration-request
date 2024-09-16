// ** MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteFreeSolo = () => {
  const top100Films: any[] = [];

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 250 }}
      id='autocomplete-free-solo'
      options={top100Films.map(option => option.title)}
      renderInput={(params: any) => <TextField {...params} label='Free Solo' />}
    />
  );
};

export default AutocompleteFreeSolo;
