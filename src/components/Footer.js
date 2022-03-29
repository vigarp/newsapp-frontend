import styles from '../styles/components/Footer.module.css'

const Footer = () => {
    return (
        <div className={`d-none d-lg-flex p-5 justify-content-between ${styles.bgFooter}`}>
                <div className={`ms-5`}>
                    <div className={`text-white mb-5`}>Why News Today</div>
                    <div className={`text-white mb-5`}>Be an author</div>
                    <div className={`text-white mb-5`}>Community</div>
                    <div className={`text-white`}>FAQ</div>
                </div>
                <div className={`me-5 text-end`}>
                    <div className={`text-white fw-bold mb-3`}>News Today</div>
                    <div className={`text-white mb-3`}>Jendral Sudirman Street No. 23<br /> Jakarta, Indonesia</div>
                    <div className={`text-white mb-3`}>(621)989898934</div>
                    <div className={`text-white`}>newstoday@mail.com</div>
                </div>
            </div>
    );
}

export default Footer;