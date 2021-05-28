import styles from '../styles/RaisedButton.module.css'

interface IProps {
    label: String,
    width: Number,
    height: Number,
    isDark: Boolean,
}

const RaisedButton: React.FC<IProps> = (props: IProps) => {
    return (
        <a 
            href="#"
            className={styles.raisedButton}
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                backgroundColor: "#FFEE6C",
                color: props.isDark ? "#fff" : "#707070",
            }}
        >
            { props.label }
        </a>
    )
}

export default RaisedButton
