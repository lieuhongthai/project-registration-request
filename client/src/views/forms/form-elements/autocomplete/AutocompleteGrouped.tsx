// ** MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteGrouped = () => {
  const top100Films: any[] = [];

  const options = top100Films.map(option => {
    const firstLetter = option.title[0].toUpperCase();

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      sx={{ width: 250 }}
      id='autocomplete-grouped'
      groupBy={option => option.firstLetter}
      getOptionLabel={option => option.title}
      renderInput={(params: any) => <TextField {...params} label='With categories' />}
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
    />
  );
};

export default AutocompleteGrouped;
