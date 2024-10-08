// ** MUI Imports
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteLimitTags = () => {
  const top100Films: any[] = [];

  return (
    <Autocomplete
      multiple
      limitTags={2}
      options={top100Films}
      id='autocomplete-limit-tags'
      getOptionLabel={option => option.title}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={(params: any) => <TextField {...params} label='limitTags' placeholder='Favorites' />}
    />
  );
};

export default AutocompleteLimitTags;
