import RaisedButton from "../components/RaisedButton";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header: React.FC = () => (
  <header>
    <div className="container">
      <div className="flex items-center py-4">
        <div className={styles.headerLogo}>
          <Link href="/">
            <img src="/logo.svg" alt="ネコノテ合同会社" />
          </Link>
        </div>

        <div className={`${styles.headerNav}`}>
          <RaisedButton
            label="お問い合わせ"
            width={160}
            height={40}
            isDark={false}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
