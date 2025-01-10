import './homecard.css'

export default function HomeCard({ image, caption, top, bottom, left, right, onClickCallback }) {
    return (
        <div 
            className="homecard" 
            style={{
                /*backgroundColor: 'rgb(182, 187, 182)', 
                border: '4px ridge white',*/
                padding: '10px 5px',
                position: 'fixed', 
                top: top, 
                bottom: 
                bottom, 
                left: left, 
                right, right
            }}
            onClick={onClickCallback}
        >
            <img 
                className="homecard__img"
                src={image} 
                alt={caption} 
                height={150} 
                style={{ marginBottom: 5 }}
            />
            <p
                className="homecard__caption"
                style={{ 
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                {caption}
            </p>
        </div>
    )
}
