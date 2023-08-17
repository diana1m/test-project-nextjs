import { FC } from "react";

import OfferImage from "./OfferImage";
import OfferContent from "./OfferContent";

import data from '@/data/offer.json'
import styles from './Offer.module.scss'

const Offer: FC = () => {

    return(
        <section id={data.sectionId}>
            <div className="container">
                <div className={styles.wrap}>
                    <OfferContent/>
                    <OfferImage/>
                </div>
                
            </div>
        </section>
    )
}

export default Offer;