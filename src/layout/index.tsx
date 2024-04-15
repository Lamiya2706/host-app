import { Grid } from '@chakra-ui/react';
import React from 'react';

import { Header } from './Header';
import { Main } from './Main';
import Sidebar from './Sidebar';

interface IProps { 
  children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {

  const renderContent = () => {
    return (
      <>
        <Sidebar />
        <Header />

        <Main>{children}</Main>
      </>
    );
  };

  return (
    <Grid gridTemplateColumns='280px 1fr' gridTemplateRows="64px 1fr" minH="100vh" bg="defaultBg">
      {renderContent()}
    </Grid>
  );
};
