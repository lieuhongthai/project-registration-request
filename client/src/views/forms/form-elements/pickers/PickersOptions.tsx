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

const PickersOptions = ({ popperPlacement }: { popperPlacement: DatePickerProps['popperPlacement'] }) => {
  // ** States
  const [dateOpen, setDateOpen] = useState<DateType>(null);
  const [dateClear, setDateClear] = useState<DateType>(new Date());
  const [dateFilter, setDateFilter] = useState<DateType>(new Date());
  const [dateWeekNum, setDateWeekNum] = useState<DateType>(new Date());
  const [dateTodayBtn, setDateTodayBtn] = useState<DateType>(new Date());

  const isWeekday = (date: Date) => {
    const day = new Date(date).getDay();

    return day !== 0 && day !== 6;
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          isClearable
          id='picker-clear'
          selected={dateClear}
          popperPlacement={popperPlacement}
          customInput={<CustomInput label='Clear' />}
          onChange={(date: Date | null) => setDateClear(date as Date)}
        />
      </div>
      <div>
        <DatePicker
          showWeekNumbers
          id='picker-week-num'
          selected={dateWeekNum}
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => setDateWeekNum(date as Date)}
          customInput={<CustomInput label='Week Numbers' />}
        />
      </div>
      <div>
        <DatePicker
          id='picker-filter'
          selected={dateFilter}
          filterDate={isWeekday}
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date) {
              setDateFilter(date);
            }
          }}
          customInput={<CustomInput label='Filter Dates' />}
        />
      </div>
      <div>
        <DatePicker
          selected={dateOpen}
          id='picker-open-date'
          popperPlacement={popperPlacement}
          openToDate={new Date('1993/09/28')}
          onChange={(date: Date | null) => setDateOpen(date as Date)}
          customInput={<CustomInput label='Open To Date' />}
        />
      </div>
      <div>
        <DatePicker
          todayButton='Today'
          selected={dateTodayBtn}
          id='picker-date-today-btn'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date) {
              setDateTodayBtn(date);
            }
          }}
          customInput={<CustomInput label='Date Today Button' />}
        />
      </div>
    </Box>
  );
};

export default PickersOptions;
