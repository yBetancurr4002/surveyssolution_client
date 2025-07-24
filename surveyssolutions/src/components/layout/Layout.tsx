import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{ marginLeft: '220px', minHeight: '100vh' }}
      >
        <Header />
        <main className="flex-grow-1 p-3">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
