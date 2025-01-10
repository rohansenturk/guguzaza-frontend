'use client';

import HomeCard from './_components/cards/HomeCard';
import './page.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <HomeCard 
        image={'/cart.png'} 
        caption={'Магазин'} 
        top={50} 
        left={'8%'} 
        onClickCallback={() => {
          router.push('/shop');
        }} 
      />
      <HomeCard
        image={'/dbr.jpg'} 
        caption={'Щитпост'} 
        top={180}
        right={'10%'} 
      />
      <HomeCard 
        image={'/easter-egg.jpg'} 
        caption={'О нас'} 
        bottom={180} 
        left={'10.5%'}
        onClickCallback={() => {
          router.push('/about-us');
        }} 
      />
      <HomeCard 
        image={'/twerk.gif'} 
        caption={'GuguCamz'} 
        bottom={210} 
        right={'10.5%'} 
        onClickCallback={() => {
          router.push('/gugucamz');
        }} 
      />
      <HomeCard 
        image={'/enter.png'}
        caption={'Войти'}
        bottom={100}
        left={'45%'}
        onClickCallback={() => {
          router.push('/login');
        }}
      />
      <div className="guguzaza">
        <h2 className='guguzaza__text'>Guguzaza Incorporated&#8482;</h2>
        <p style={{ marginBottom: 50 }}>Брейнрот №1</p>
      </div>
    </>
  );
}
