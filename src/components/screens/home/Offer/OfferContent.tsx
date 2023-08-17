import { FC } from "react";

import data from '@/data/offer.json'
import IOffer from "@/shared/interfaces/offer/IOffer";
import styles from './Offer.module.scss'
import Button from "@/components/ui/Button/Button";

const OfferContent: FC = () => {
    const {title, description, dark_button, light_button}: IOffer = data.content;

    return(
        <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.btnWrap}>
                <Button type='anchor' className='darkBtn' text={dark_button.text} href={dark_button.anchor}/>
                <Button type='anchor' className='lightBtn' text={light_button.text} href={light_button.anchor}/>
            </div>
        </div>
        
    )
}

export default OfferContent;