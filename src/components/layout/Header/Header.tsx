import { FC } from "react";

import styles from "./Header.module.scss"

import IHeader from "@/shared/interfaces/header/IHeader";
import IButton from "@/shared/interfaces/IButton";
import data from '@/data/header.json'
import Button from "@/components/ui/Button/Button";

const Header: FC = () => {
    const linksData: IHeader[] = data.links;
    const { text, anchor }:IButton = data.button

    return(
        <header>
            <div className='container' id={data.sectionId}>
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
                    <Button type='anchor' href={anchor} text={text} className='darkBtn'/>
                    {/* <a href={anchor} className={styles.button}> {text} </a> */}
                    </div>
                </div>

                
            
        </header>
    )
}

export default Header