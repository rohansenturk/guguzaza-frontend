'use client';

import { useRouter } from 'next/navigation'
import './nav.css'

export default function Nav() {
    const router = useRouter();

    const goToHome = () => router.push('/');
    const goToShop = () => router.push('/shop');
    const goToAboutUs = () => router.push('/about-us');

    return (
        <nav className="nav">
            <ul className='nav__items'>
                <li onClick={goToHome}>Главная</li>
                <li onClick={goToShop}>Магазин</li>
                <li onClick={goToAboutUs}>О нас</li>
            </ul>
        </nav>
    )
}
