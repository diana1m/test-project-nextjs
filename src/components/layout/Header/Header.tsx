import { FC } from "react";

import styles from "./Header.module.scss"

import IHeader from "@/shared/interfaces/header/IHeader";
import IButton from "@/shared/interfaces/IButton";
import data from '@/data/header.json'

const Header: FC = () => {
    const linksData: IHeader[] = data.links;
    const { text, anchor }:IButton = data.button

    return(
        <header>
            <div className='container' id='header'>
                <div className={styles.wrapper}>
                    <a href="#" className={styles.logo}> {data.logo} </a>
                    <nav >
                        <ul className={styles.linksWrap}>
                            {linksData.map((link, key) => (
                                <li key={key}>
                                    <a href={link.href} className={styles.link}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a href={anchor} className={styles.button}> {text} </a>
                    </div>
                </div>

                
            
        </header>
    )
}

export default Header