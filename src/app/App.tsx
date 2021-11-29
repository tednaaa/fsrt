import React, { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Loader } from '@/shared/ui';
import { publicRoutes } from '@/pages/router';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {publicRoutes.map(({ Component, path }) => {
            return <Route key={uuidv4()} element={<Component />} path={path} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
