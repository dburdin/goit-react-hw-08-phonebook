import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';

export const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </div>
  );
};
