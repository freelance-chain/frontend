// src/components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer'

interface Props {
    children?: ReactNode

}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <main className='lg:mt-24 mt-32'>{children}</main>
            <hr />
            <Footer />
        </div>
    );
};

export default Layout;
