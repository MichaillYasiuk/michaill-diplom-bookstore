import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { StyledApp } from './ui/style';

export const App = () => {
  return <RouterProvider router={router} />;
};
