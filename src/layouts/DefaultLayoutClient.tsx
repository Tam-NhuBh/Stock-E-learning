import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ChatWidget from '../component/WhatsAppWeget';

export default function DefaultLayoutClient({ children }: any) {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]);

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/about':
        return 'About Us - Stock E-learning';
      case '/contact':
        return 'Contact Us - Stock E-learning';
      default:
        return ' Stock E-learning';
    }
  };
  return (
    <div className='bg-slate-100'>
      <div>
        <Header />
      </div>
      <div className='mx-auto my-0 max-w-7xl'>{children}</div>
      <div>
        <Footer />
      </div>
      <div>
        <ChatWidget/>
      </div>
    </div>
  )
}
