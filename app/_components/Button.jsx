import './button.css'

export default function Button({ title, onClickCallback, style }) {
    return (
        <button 
            className="button"
            onClick={onClickCallback}
            style={style}
        >
            {title}
        </button>
    )
}