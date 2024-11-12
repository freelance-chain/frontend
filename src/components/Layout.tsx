// src/components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './navbar/Navbar';

interface Props {
    children?: ReactNode

}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <main className='lg:mt-20'>{children}</main>
        </div>
    );
};

export default Layout;
