import { routeNames } from '@/shared/router';
import { ComponentType } from 'react';
import { RootPage } from './root';

interface IRoute {
  path: string;
  Component: ComponentType;
}

export const publicRoutes: IRoute[] = [
  {
    path: routeNames.ROOT,
    Component: RootPage,
  },
];
