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
import { addDays, setHours, setMinutes, subDays } from 'date-fns';

const PickersIncludeExclude = ({ popperPlacement }: { popperPlacement: DatePickerProps['popperPlacement'] }) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date());
  const [dateExclude, setDateExclude] = useState<DateType>(new Date());
  const [time, setTime] = useState<DateType>(setHours(setMinutes(new Date(), 0), 18));
  const [timeExclude, setTimeExclude] = useState<DateType>(setHours(setMinutes(new Date(), 0), 18));

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          selected={date}
          id='include-dates'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput label='Include Dates' />}
          includeDates={[new Date(), addDays(new Date(), 1)]}
        />
      </div>
      <div>
        <DatePicker
          id='exclude-dates'
          selected={dateExclude}
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date !== null) {
              setDateExclude(date);
            }
          }}
          customInput={<CustomInput label='Exclude Dates' />}
          excludeDates={[subDays(new Date(), 1), subDays(new Date(), 2)]}
        />
      </div>
      <div>
        <DatePicker
          showTimeSelect
          selected={time}
          id='include-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date !== null) {
              setTime(date);
            }
          }}
          customInput={<CustomInput label='Include Time' />}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17),
          ]}
        />
      </div>
      <div>
        <DatePicker
          showTimeSelect
          id='exclude-time'
          selected={timeExclude}
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date !== null) {
              setTimeExclude(date);
            }
          }}
          customInput={<CustomInput label='Exclude Time' />}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17),
          ]}
        />
      </div>
    </Box>
  );
};

export default PickersIncludeExclude;
