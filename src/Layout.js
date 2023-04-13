import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
