// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

interface FilmOptionType {
  year?: number;
  title: string;
  inputValue?: string;
}

const filter = createFilterOptions<FilmOptionType>();

const AutocompleteCreatable = () => {
  // ** State
  const [value, setValue] = useState<FilmOptionType | null>(null);
  const top100Films: any[] = [];

  return (
    <Autocomplete
      freeSolo
      clearOnBlur
      value={value}
      selectOnFocus
      handleHomeEndKeys
      sx={{ width: 250 }}
      options={top100Films}
      id='autocomplete-free-solo-with-text'
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderInput={(params: any) => <TextField {...params} label='Free solo with text demo' />}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option;
        }
        if ((option as FilmOptionType).inputValue as string) {
          return (option as FilmOptionType).inputValue as string;
        }

        return option.title as string;
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && (newValue as any).inputValue) {
          setValue({
            title: (newValue as any).inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options: FilmOptionType[], params: any) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        const isExisting = options.some((option: FilmOptionType) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
    />
  );
};

export default AutocompleteCreatable;
