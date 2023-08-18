import { FC } from "react";

import IBenefitsHead from "@/shared/interfaces/benefits/IBenefitsHead";
import benefitsData from '@/data/benefits.json'
import styles from './Benefits.module.scss'


const BenefitsHead: FC = () => {
    const {title, description}: IBenefitsHead = benefitsData.head;
    return(
        <>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
        </>
        
    )
}

export default BenefitsHead