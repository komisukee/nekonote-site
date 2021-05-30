import styles from '../styles/BusinessCard.module.css'

interface IProps {
    title: String,
    content: String,
}

const BusinessCard: React.FC<IProps> = (props: IProps) => (
    <div className={styles.businessCard}>
        <h3>{ props.title }</h3>
        <p>{ props.content }</p>
    </div>
)

export default BusinessCard
