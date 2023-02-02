import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from '../Loader';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="fade-in">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
