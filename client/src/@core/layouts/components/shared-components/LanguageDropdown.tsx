// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Third Party Import
import { useTranslation } from 'react-i18next';

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu';
import { Settings } from 'src/@core/types/mui/type';

const LanguageDropdown = (props: { settings: Settings }) => {
  // ** Props
  const { settings } = props;

  // ** Hook
  const { i18n } = useTranslation();

  // ** Vars
  const { layout } = settings;

  const handleLangItemClick = (lang: 'en' | 'ja' | 'ar') => {
    i18n.changeLanguage(lang);
  };

  return (
    <OptionsMenu
      icon={<Icon icon='mdi:translate' />}
      menuProps={{ sx: { '& .MuiMenu-paper': { mt: 4, minWidth: 130 } } }}
      iconButtonProps={{ color: 'inherit', sx: { ...(layout === 'vertical' ? { mr: 0.75 } : { mx: 0.75 }) } }}
      options={[
        {
          text: 'English',
          menuItemProps: {
            sx: { py: 2 },
            selected: true, // i18n.language === 'en'
            onClick: () => {
              handleLangItemClick('en');
            },
          },
        },
        {
          text: 'Japanese',
          menuItemProps: {
            sx: { py: 2 },
            selected: false,
            onClick: () => {
              handleLangItemClick('ja');
            },
          },
        },
        {
          text: 'Arabic',
          menuItemProps: {
            sx: { py: 2 },
            selected: false,
            onClick: () => {
              handleLangItemClick('ar');
            },
          },
        },
      ]}
    />
  );
};

export default LanguageDropdown;
