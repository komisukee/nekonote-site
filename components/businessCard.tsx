import styles from "../styles/BusinessCard.module.css";

interface IProps {
  title: String;
  content: String;
}

const BusinessCard: React.FC<IProps> = (props: IProps) => (
  <div className={`${styles.businessCard} bg-primary-light`}>
    <h3 className="text-xl text-primary-dark font-bold tracking-wider">
      {props.title}
    </h3>
    <p className="text-primary-dark tracking-wider">{props.content}</p>
  </div>
);

export default BusinessCard;
