// ** MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

interface FilmOptionType {
  year: number;
  title: string;
}

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilmOptionType) => option.title,
});

const AutocompleteCustomFilter = () => {
  const top100Films: any[] = [];

  return (
    <Autocomplete
      options={top100Films}
      filterOptions={filterOptions}
      id='autocomplete-custom-filter'
      getOptionLabel={option => option.title}
      renderInput={(params: any) => <TextField {...params} label='Custom filter' />}
    />
  );
};

export default AutocompleteCustomFilter;
