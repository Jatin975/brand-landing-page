import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.outerWidth < 768) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }
        addEventListener('resize', handleResize);

        handleResize();
        return () => {
            removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <Navbar isMobileView={isMobileView} />
            <Outlet context={{isMobileView}}/>
        </div>
    )
}
