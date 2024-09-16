// import ThemeComponent from 'src/@core/theme/ThemeComponent';

import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import Spinner from 'src/@core/components/spinner';
import ThemeComponent from 'src/@core/theme/ThemeComponent';

// ** Prismjs Styles
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

// ** Config Imports
import 'src/configs/i18n';

// ** Spinner Import
import 'src/iconify-bundle/icons-bundle-react';

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast';

// ** Third Party Import
import { Toaster } from 'react-hot-toast';

// ** Helmet Imports
import { Helmet } from 'react-helmet-async';

// ** Settings
import themeConfig from './configs/themeConfig';
import { initialSettings } from './configs/initialSettings';

// ** Import axios config
import './configs/axiosConfig';

function App() {
  return (
    <div className='App'>
      <Helmet>
        <title>{`${themeConfig.templateName} - GEO System solution Vietnam`}</title>
        <meta name='description' content={`${themeConfig.templateName} – “Change as Chance” has been our corporate motto since GEO's inception`} />
        <meta name='keywords' content='GEO System solution Vietnam' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <ThemeComponent>
        <RouterProvider router={routers} fallbackElement={<Spinner />} />

        <ReactHotToast>
          <Toaster position={initialSettings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
        </ReactHotToast>
      </ThemeComponent>
    </div>
  );
}

export default App;
