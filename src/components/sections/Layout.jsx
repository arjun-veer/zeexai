import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Hero from './Hero';
import { ModalContextProvider } from '../../contexts/ModalContext';
import { MobileMenuContextProvider } from '../../contexts/MobileMenuContext';
import Page from './Page';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ModalContextProvider>
      <MobileMenuContextProvider>
        <Page>
            <Header>
                  
                  <Navigation/>
                 
            </Header>

        </Page>
        </MobileMenuContextProvider>
    </ModalContextProvider>
      

      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}