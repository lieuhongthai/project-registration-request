// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';

// ** Third Party Imports
import DatePicker, { DatePickerProps } from 'react-datepicker';

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes';

// ** Custom Component Imports
import CustomInput from './PickersCustomInput';
import { addDays, subDays } from 'date-fns';

const PickersCustomization = ({ popperPlacement }: { popperPlacement: DatePickerProps['popperPlacement'] }) => {
  // ** States
  const [dateFormat, setDateFormat] = useState<DateType>(new Date());
  const [dateHighlight, setDateHighlight] = useState<DateType>(new Date());

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          id='custom-format'
          selected={dateFormat}
          dateFormat='MMMM d, yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date) setDateFormat(date);
          }}
          customInput={<CustomInput label='Custom Date Format' />}
        />
      </div>
      <div>
        <DatePicker
          id='highlight-dates'
          selected={dateHighlight}
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date) setDateHighlight(date);
          }}
          customInput={<CustomInput label='Highlight Dates' />}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
        />
      </div>
    </Box>
  );
};

export default PickersCustomization;
