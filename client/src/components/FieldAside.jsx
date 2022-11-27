import style from '../styles/FieldAside.css'

const FieldAside = ({ id, text, children }) => {
    return (
        <div className={style.filterContainer}>
            <label htmlFor={id}>{text}</label>
            {children}
        </div>
    )
}

export default FieldAside