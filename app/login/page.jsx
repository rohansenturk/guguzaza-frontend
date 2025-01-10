'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <span>Входненький в аккаунтненький</span>

                <input 
                    className={`${styles.form__login} ${styles.input}`}
                    type='text'
                    value={login}
                    placeholder='Логиненький'
                    onChange={event => setLogin(event.target.value)}
                />

                <input
                    className={`${styles.form__password} ${styles.input}`}
                    type='password'
                    value={password}
                    placeholder='Парольненький'
                    onChange={event => setPassword(event.target.value)}
                />

                <button 
                    className={styles.button}
                    type='submit'
                    onClick={() => {
                        alert(`Login: ${login}, password: ${password}`);
                    }}
                >
                    Войтиненький
                </button>
            
                <hr />
                <div className={styles.btnfield}>
                    <button className={styles.btnfield__button}>Админненький</button>
                    <button className={styles.btnfield__button}>Юзерненький</button>
                </div>
            </div>
            <div
                className={styles.button}
                style={{
                    position: 'fixed',
                    top: 10
                }}
                onClick={() => {
                    router.push('/register');
                }}
            >
                Регистрационненький
            </div>
            <div
                className={styles.tupa_sobaka}
            >
                <img
                    src='/twerk.gif'
                    width={100}
                />
                <span
                    className={styles.tupa_sobaka__caption}
                >
                    What is the next step of the operation?
                </span>
            </div>
        </div>
    );
}