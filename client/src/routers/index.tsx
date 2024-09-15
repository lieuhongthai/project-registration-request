import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import VerticalLayoutRoot from 'src/layouts/VerticalLayoutRoot';
import LoginPage from 'src/pages/login';

import Accordion from 'src/pages/components/accordion';
import Alerts from 'src/pages/components/alerts';
import Avatars from 'src/pages/components/avatars';
import Badges from 'src/pages/components/badges';
import Buttons from 'src/pages/components/buttons';
import ButtonGroup from 'src/pages/components/button-group';
import Chips from 'src/pages/components/chips';
import Dialogs from 'src/pages/components/dialogs';
import Lists from 'src/pages/components/list';
import Menus from 'src/pages/components/menu';
import Pagination from 'src/pages/components/pagination';
import Ratings from 'src/pages/components/ratings';
import Snackbar from 'src/pages/components/snackbar';
import Swiper from 'src/pages/components/swiper';
import Tabs from 'src/pages/components/tabs';
import Timelines from 'src/pages/components/timeline';
import ReactHotToasts from 'src/pages/components/toast';
import Misc from 'src/pages/components/more';
import Error404 from 'src/pages/404';
import TextFields from 'src/pages/forms/form-elements/text-field';
import Selects from 'src/pages/forms/form-elements/select';
import Checkboxes from 'src/pages/forms/form-elements/checkbox';
import Radios from 'src/pages/forms/form-elements/radio';
import CustomInputs from 'src/pages/forms/form-elements/custom-inputs';
import Textareas from 'src/pages/forms/form-elements/textarea';
import Autocompletes from 'src/pages/forms/form-elements/autocomplete';
import ReactDatePickers from 'src/pages/forms/form-elements/pickers';
import Switches from 'src/pages/forms/form-elements/switch';
import FileUploaders from 'src/pages/forms/form-elements/file-uploader';
import Sliders from 'src/pages/forms/form-elements/slider';
import InputMasks from 'src/pages/forms/form-elements/input-mask';
import FormLayouts from 'src/pages/forms/form-layouts';
import FormValidations from 'src/pages/forms/form-validation';
import FormWizards from 'src/pages/forms/form-wizard';
import Editors from 'src/pages/forms/form-elements/editor';

// ** Tables
import MaterialReactTables from 'src/pages/tables/material-react-table';
import ProjectRegistrationList from 'src/pages/project-registration/list';
import ProjectRegistrationCreate from 'src/pages/project-registration/create';
import ApproveProjectList from 'src/pages/approve-project/list';
import ApproveProjectUpdate from 'src/pages/approve-project/update';
import UserList from 'src/pages/user-management/list';
import UserCreate from 'src/pages/user-management/create';
import UserEdit from 'src/pages/user-management/edit';
import Icons from 'src/pages/ui/icons';
import TypographyPage from 'src/pages/ui/typography';

export function Component() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export const routers = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      return { userD: 1 };
    },

    element: <VerticalLayoutRoot />,
    children: [
      {
        index: true,
        element: <>aaaaaaaaaaaaaaaaaaaaaaaaaaa</>,
      },
      {
        path: 'project-registration/',
        id: 'userGuard',
        loader() {
          return true;
        },
        children: [
          { index: true, element: <ProjectRegistrationList /> },
          {
            path: 'create',
            element: <ProjectRegistrationCreate />,
          },
        ],
      },
      {
        path: 'approve-project/',
        id: 'approverGuard',
        children: [
          { index: true, element: <ApproveProjectList /> },
          {
            path: 'status-update/:id',
            element: <ApproveProjectUpdate />,
          },
        ],
      },

      {
        path: 'user-management/',
        id: 'adminGuard',
        children: [
          { index: true, element: <UserList /> },
          {
            path: 'create',
            element: <UserCreate />,
          },
          {
            path: 'edit/:id',
            element: <UserEdit />,
          },
        ],
      },

      {
        path: 'components/',
        children: [
          {
            path: 'accordion',
            element: <Accordion />,
          },
          {
            path: 'alerts',
            element: <Alerts />,
          },
          {
            path: 'avatars',
            element: <Avatars />,
          },

          {
            path: 'badges',
            element: <Badges />,
          },
          {
            path: 'buttons',
            element: <Buttons />,
          },
          {
            path: 'button-group',
            element: <ButtonGroup />,
          },

          {
            path: 'chips',
            element: <Chips />,
          },
          {
            path: 'dialogs',
            element: <Dialogs />,
          },
          {
            path: 'lists',
            element: <Lists />,
          },

          {
            path: 'menu',
            element: <Menus />,
          },
          {
            path: 'pagination',
            element: <Pagination />,
          },
          {
            path: 'ratings',
            element: <Ratings />,
          },

          {
            path: 'snackbar',
            element: <Snackbar />,
          },
          {
            path: 'swiper',
            element: <Swiper />,
          },
          {
            path: 'tabs',
            element: <Tabs />,
          },

          {
            path: 'timeline',
            element: <Timelines />,
          },
          {
            path: 'toast',
            element: <ReactHotToasts />,
          },
          {
            path: 'more',
            element: <Misc />,
          },
        ],
      },

      {
        path: 'forms/',
        children: [
          {
            path: 'form-elements/text-field',
            element: <TextFields />,
          },
          {
            path: 'form-elements/select',
            element: <Selects />,
          },
          {
            path: 'form-elements/checkbox',
            element: <Checkboxes />,
          },
          {
            path: 'form-elements/radio',
            element: <Radios />,
          },
          {
            path: 'form-elements/custom-inputs',
            element: <CustomInputs />,
          },
          {
            path: 'form-elements/textarea',
            element: <Textareas />,
          },
          {
            path: 'form-elements/autocomplete',
            element: <Autocompletes />,
          },
          {
            path: 'form-elements/pickers',
            element: <ReactDatePickers />,
          },
          {
            path: 'form-elements/switch',
            element: <Switches />,
          },
          {
            path: 'form-elements/file-uploader',
            element: <FileUploaders />,
          },
          {
            path: 'form-elements/slider',
            element: <Sliders />,
          },
          {
            path: 'form-elements/input-mask',
            element: <InputMasks />,
          },
          {
            path: 'form-layouts',
            element: <FormLayouts />,
          },
          {
            path: 'form-validation',
            element: <FormValidations />,
          },
          {
            path: 'form-wizard',
            element: <FormWizards />,
          },
          {
            path: 'form-elements/editor',
            element: <Editors />,
          },
        ],
      },

      {
        path: 'tables/',
        children: [
          {
            path: 'material-react-table',
            element: <MaterialReactTables />,
          },
        ],
      },

      {
        path: 'ui/',
        children: [
          {
            path: 'icons',
            element: <Icons />,
          },
          {
            path: 'typography',
            element: <TypographyPage />,
          },
        ],
      },
    ],

    errorElement: (
      <BlankLayout>
        <>aaaaaa</>
      </BlankLayout>
    ),
  },
  {
    id: 'guestGuard',
    loader() {
      return { guestGuard: true };
    },
    path: '/login',
    element: (
      <BlankLayout>
        <LoginPage />
      </BlankLayout>
    ),
  },
  {
    path: '*',
    element: (
      <BlankLayout>
        <Error404 />
      </BlankLayout>
    ),
  },
]);

// {
// async lazy() {
//   await new Promise(r => setTimeout(r, 500));
//   const { default: AppCalendar } = await import('../pages/apps/calendar');
//   return {
//     Component: AppCalendar,
//   };
// },
// },
