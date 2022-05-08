import styles from "../styles/RaisedButton.module.css";

interface IProps {
  label: String;
  width: Number;
  height: Number;
  isDark: Boolean;
}

const RaisedButton: React.FC<IProps> = (props: IProps) => {
  return (
    <a
      href="https://twitter.com/komisukee"
      className={`${styles.raisedButton} bg-secondary text-primary-dark tracking-wider`}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
      }}
      target="_blank"
    >
      {props.label}
    </a>
  );
};

export default RaisedButton;
