import Head from 'next/head';
import * as SC from './Layout.styles';
import ArrowIcon from '../icons/ArrowIcon';
import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

type Props = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ title, children }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => setIsSidebarOpen(prev => !prev);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SC.Wrapper>
        <SC.SidebarWrapper $isOpen={isSidebarOpen}>
          <SC.MobileSidebarToggler onClick={handleToggleSidebar}>
            <CloseIcon />
          </SC.MobileSidebarToggler>
          <SC.SidebarTogglerWrapper onClick={handleToggleSidebar}>
            <ArrowIcon id='toggle-sidebar-icon' />
          </SC.SidebarTogglerWrapper>
        </SC.SidebarWrapper>

        <SC.ContentWrapper>
          <SC.ContentHeader>
            <SC.MobileSidebarToggler onClick={handleToggleSidebar}>
              <MenuIcon />
            </SC.MobileSidebarToggler>
            <SC.HeaderTitle>{title}</SC.HeaderTitle>
          </SC.ContentHeader>

          {children}
        </SC.ContentWrapper>
      </SC.Wrapper>
    </>
  );
};

export default Layout;
