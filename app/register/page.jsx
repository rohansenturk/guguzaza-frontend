'use client';

import styles from './page.module.css';
import globals from '../globals.module.css';
import { useState } from 'react';

export default function Register() {
    const defaultTextAreaValue = 'Я охуенен и пиздат';
    const textAreaMaxLength = 100;

    const Legend = ({ caption }) => <span>{caption}</span>;

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const FormBase = () => (
        <>
            <div className={styles.field}>
                <label>Логин:</label>
                <input 
                    className={globals.input} 
                    placeholder='Например: *******' 
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className={styles.field}>
                <label>Парольчик:</label>
                <input 
                    className={globals.input} 
                    placeholder='Например: фимоз_1487' 
                    type='text' 
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                />
            </div>
            <div className={styles.field}>
                <label>Аватар:</label>
                <input
                    type='file'
                    accept='.docx,.xlsx,.pptx,.svg,.ico,.pdf,.mp3'
                />
            </div>
        </>
    );

    const UserForm = () => {
        const [textAreaValue, setTextAreaValue] = useState(defaultTextAreaValue);

        return (
            <>
                <FormBase />
                <div className={styles.field}>
                    <label>Ваш пол (sexненький):</label>
                    <select>
                        <option value=''>Не указан</option>
                        <option value='m'>Мужчинский</option>
                        <option value='f'>Женщинский</option>
                    </select>
                </div>
                <div className={`${styles.field} ${styles.positioned}`}>
                    <label>Обо мне:</label>
                    <textarea
                        value={textAreaValue}
                        onChange={(event) => setTextAreaValue(event.target.value)}
                        style={{
                            resize: 'vertical',
                        }}
                        maxLength={textAreaMaxLength}
                    />
                    <span
                        style={{
                            fontSize: 12,
                            position: 'absolute',
                            top: 1,
                            right: 1,
                        }}
                    >
                        {textAreaMaxLength - textAreaValue.length}
                    </span>
                </div>
            </>
        );
    };

    const AdminForm = () => (
        <>
            <FormBase />
            <div className={styles.field}>
                <label>Guguzaza-токен:</label>
                <input className={globals.input} placeholder='Например: eyJ.ya.pidr' />
            </div>
        </>
    );

    const resetForm = () => {
        setLogin('');
        setPassword('');
    }

    const [compName, setCompName] = useState('user');

    return (
        <div className={globals.wrapper} style={{ backgroundImage: `url('/denis.jpg')` }}>
            <div className={styles.container}>
                <span>Кого регаем?</span>
                <div style={{ display: 'flex' }}>
                    <div
                        className={`${styles.selected}`}
                        style={{
                            borderRadius: 5,
                            padding: '10px 10px',
                            width: '50%',
                            textAlign: 'center',
                        }}
                        onClick={() => setCompName('user')}
                    >
                        Юзер
                    </div>
                    <div
                        style={{
                            borderRadius: 5,
                            padding: '10px 10px',
                            width: '50%',
                            textAlign: 'center',
                        }}
                        onClick={() => setCompName('admin')}
                    >
                        Админ
                    </div>
                </div>
                <hr />
                {compName === 'user' ? (
                    <>
                        <UserForm />
                    </>
                ) : (
                    <>
                        <AdminForm />
                    </>
                )}
                <button className={styles.button}>Регистрационненький ({compName === 'user' ? 'юзер' : 'админчик'})</button>
                <span
                    style={{
                        color: 'white',
                        position: 'fixed',
                        bottom: 20, 
                        left: 100 
                    }}
                >
                    Хули палишь хуесосище ебаное
                </span>
            </div>
        </div>
    );
}
