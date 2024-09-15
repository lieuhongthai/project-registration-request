// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';

// ** Third Party Imports
import { Locale } from 'date-fns';
import { ja, ar, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale, DatePickerProps } from 'react-datepicker';

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes';

// ** Custom Component Imports
import CustomInput from './PickersCustomInput';

const langObj: { [key: string]: Locale } = { ja, ar, en: enUS };

const PickersLocale = ({ popperPlacement }: { popperPlacement: DatePickerProps['popperPlacement'] }) => {
  // ** States
  const [date, setDate] = useState<DateType>(new Date());
  const [time, setTime] = useState<DateType>(new Date());

  // ** Hooks
  const { i18n } = useTranslation();

  registerLocale(i18n.language, langObj[i18n.language]);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          selected={date}
          id='locale-picker'
          locale={i18n.language}
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => setDate(date)}
          customInput={<CustomInput label='Locale Dates' />}
        />
      </div>
      <div>
        <DatePicker
          showTimeSelect
          selected={time}
          id='locale-time'
          locale={i18n.language}
          dateFormat='MM/dd/yyyy h:mm aa'
          popperPlacement={popperPlacement}
          onChange={(date: Date | null) => {
            if (date) setTime(date);
          }}
          customInput={<CustomInput label='Locale Time' />}
        />
      </div>
    </Box>
  );
};

export default PickersLocale;
