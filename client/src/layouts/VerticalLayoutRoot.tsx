// ** React Imports
import { useEffect } from 'react';
import { Outlet, useFetchers, useNavigation } from 'react-router-dom';
import Spinner from 'src/@core/components/spinner';

// ** Components
import VerticalLayout from 'src/@core/layouts/VerticalLayout';

// ** MUI Imports
import { initialSettings } from 'src/configs/initialSettings';

import NProgress from 'nprogress';
import { AuthProvider } from 'src/context/AuthContext';

const VerticalLayoutRoot = () => {
  // ** Hooks
  const navigation = useNavigation();

  const fetchers = useFetchers();
  useEffect(() => {
    const fetchersIdle = fetchers.every(f => f.state === 'idle');
    if (navigation.state === 'idle' && fetchersIdle) {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [navigation.state, fetchers]);
  const renderChildren = () => (navigation.state === 'loading' ? <Spinner /> : <Outlet />);

  return (
    <AuthProvider>
      <VerticalLayout settings={initialSettings}>{renderChildren()}</VerticalLayout>
    </AuthProvider>
  );
};

export default VerticalLayoutRoot;
