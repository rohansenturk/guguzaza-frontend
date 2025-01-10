'use client';

import { useRouter } from 'next/navigation'
import './not-found.css'
import Button from './_components/Button';

export default function NotFound() {
    const router = useRouter();
    return (
        <>
            <div className='not-found'>
                <p style={{ fontSize: 50 }}>404</p>
                <p style={{ fontSize: 45, marginBottom: 3 }}>Тут ничего нет</p>
                <p style={{ fontSize: 40 }}>
                    Правд
                    <a className='not-found__button'>а</a>.
                </p>
            </div>
            <Button 
                title={'Вернуться назад'} 
                onClickCallback={() => router.back()}
                style={{ 
                    position: 'fixed',
                    bottom: 5
                }}
            />
        </>
    )
}
