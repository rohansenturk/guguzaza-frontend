import './page.css';

export default function AppleUsers() {
    return (
        <div 
            style={{ 
                height: '100vh',
                maxWidth: '768px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img src="/apple-users.jpg" style={{ maxWidth: '90%', marginBottom: 10 }}/>
            <p style={{ textAlign: 'center' }}>
                Есть ощущение, что кто-то использует устройства от Apple... <br />
                Ладно, <a href='/'>попробуй ещё раз</a>
            </p>
        </div>
    )
}