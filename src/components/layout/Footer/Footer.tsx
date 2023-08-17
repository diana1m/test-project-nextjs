import { FC } from "react";

import footerData from "@/data/footer.json";
import IFooter from "@/shared/interfaces/footer/IFooter";
import styles from "./Footer.module.scss"

const Footer: FC = () => {
    const {sectionId, text1, text2}: IFooter = footerData;
    return(
        <footer id={sectionId} >
            <div className='container'>
                <div className={styles.wrapper}>
                    <a href='#'>{text1}</a>
                    <a href='#'>{text2}</a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;