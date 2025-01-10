'use client';

import { useRouter } from 'next/navigation'
import './homenav.css'

export default function HomeNav() {
    const router = useRouter();

    const goToHome = () => router.push('/');
    const goToShop = () => router.push('/shop');
    const goToAboutUs = () => router.push('/about-us');

    return (
        <nav className="homenav">
            <ul className='homenav__items'>
                <li onClick={goToHome}>Главная</li>
                <li onClick={goToShop}>Магазин</li>
                <li onClick={goToAboutUs}>О нас</li>
            </ul>
        </nav>
    )
}
