import React from 'react';
import Header from './header/header2.js'

export default function Layout2({children}) {
  return (
    <React.Fragment>
      <Header /> 
        <main
          sx={{
            variant: 'layout.main',
          }}
        >
          {children}
        </main>
      </React.Fragment>
      
  );
}
