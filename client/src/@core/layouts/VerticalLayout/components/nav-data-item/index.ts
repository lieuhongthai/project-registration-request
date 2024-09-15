// ** Type import
import { VerticalNavItemsType } from 'src/@core/types/mui/type';
import { t } from 'i18next';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: t('Project Registration'),
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'List of Requests',
          path: '/project-registration',
        },
        {
          title: 'Create New Request',
          path: '/project-registration/create',
        },
      ],
    },
    {
      sectionTitle: 'Approver interface',
    },
    {
      title: 'Approve Project Request',
      icon: 'mdi:email-outline',
      path: '/approve-project',
    },
    {
      sectionTitle: 'Admin interface',
    },
    {
      title: 'User Management',
      icon: 'mdi:account-outline',
      path: 'user-management',
      children: [
        {
          title: 'List of Users',
          path: '/user-management',
        },
        {
          title: 'Create New User',
          path: '/user-management/create',
        },
      ],
    },
    {
      sectionTitle: 'Components',
    },
    {
      badgeContent: '18',
      title: 'Components',
      icon: 'mdi:archive-outline',
      badgeColor: 'primary',
      children: [
        {
          title: 'Accordion',
          path: '/components/accordion',
        },
        {
          title: 'Alerts',
          path: '/components/alerts',
        },
        {
          title: 'Avatars',
          path: '/components/avatars',
        },
        {
          title: 'Badges',
          path: '/components/badges',
        },
        {
          title: 'Buttons',
          path: '/components/buttons',
        },
        {
          title: 'Button Group',
          path: '/components/button-group',
        },
        {
          title: 'Chips',
          path: '/components/chips',
        },
        {
          title: 'Dialogs',
          path: '/components/dialogs',
        },
        {
          title: 'List',
          path: '/components/lists',
        },
        {
          title: 'Menu',
          path: '/components/menu',
        },
        {
          title: 'Pagination',
          path: '/components/pagination',
        },
        {
          title: 'Ratings',
          path: '/components/ratings',
        },
        {
          title: 'Snackbar',
          path: '/components/snackbar',
        },
        {
          title: 'Swiper',
          path: '/components/swiper',
        },
        {
          title: 'Tabs',
          path: '/components/tabs',
        },
        {
          title: 'Timeline',
          path: '/components/timeline',
        },
        {
          title: 'Toasts',
          path: '/components/toast',
        },
        {
          title: 'Tree View',
          path: '/components/tree-view',
        },
        {
          title: 'More',
          path: '/components/more',
        },
      ],
    },
    {
      sectionTitle: 'Forms & Tables',
    },
    {
      title: 'Form Elements',
      icon: 'mdi:form-select',
      children: [
        {
          title: 'Text Field',
          path: '/forms/form-elements/text-field',
        },
        {
          title: 'Select',
          path: '/forms/form-elements/select',
        },
        {
          title: 'Checkbox',
          path: '/forms/form-elements/checkbox',
        },
        {
          title: 'Radio',
          path: '/forms/form-elements/radio',
        },
        {
          title: 'Custom Inputs',
          path: '/forms/form-elements/custom-inputs',
        },
        {
          title: 'Textarea',
          path: '/forms/form-elements/textarea',
        },
        {
          title: 'Autocomplete',
          path: '/forms/form-elements/autocomplete',
        },
        {
          title: 'Date Pickers',
          path: '/forms/form-elements/pickers',
        },
        {
          title: 'Switch',
          path: '/forms/form-elements/switch',
        },
        {
          title: 'File Uploader',
          path: '/forms/form-elements/file-uploader',
        },

        {
          title: 'Slider',
          path: '/forms/form-elements/slider',
        },
        {
          title: 'Input Mask',
          path: '/forms/form-elements/input-mask',
        },
        {
          title: 'Editor',
          path: '/forms/form-elements/editor',
        },
      ],
    },
    {
      icon: 'mdi:cube-outline',
      title: 'Form Layouts',
      path: '/forms/form-layouts',
    },
    {
      title: 'Form Validation',
      path: '/forms/form-validation',
      icon: 'mdi:checkbox-marked-circle-outline',
    },
    {
      title: 'Form Wizard',
      path: '/forms/form-wizard',
      icon: 'mdi:transit-connection-horizontal',
    },

    {
      title: 'Material React Table',
      icon: 'mdi:grid',
      path: '/tables/material-react-table',
    },
  ];
};

export default navigation;
