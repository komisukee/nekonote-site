import commonStyles from '../styles/Home.module.css'
import styles from '../styles/Header.module.css'

import RaisedButton from '../components/RaisedButton'

const Header: React.FC = () => (
    <header>
        <div className="container">
            <div className={`${styles.header} ${commonStyles.grid}`}>
                <div className={styles.headerLogo}>
                    <a href="/">
                        <img src="/logo.svg" alt="ネコノテ合同会社" />
                    </a>
                </div>

                <div className={styles.headerNav}>
                    <RaisedButton
                        label="お問い合わせ"
                        width={220}
                        height={48}
                        isDark={false}
                    />
                </div>
            </div>
        </div>
    </header>
)

export default Header
