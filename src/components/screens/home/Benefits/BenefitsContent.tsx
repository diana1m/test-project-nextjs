import { FC } from "react";

import benefitsData from '@/data/benefits.json'
import IBenefitsContent from "@/shared/interfaces/benefits/IBenefitsContent";
import Image from "next/image";
import styles from './Benefits.module.scss'

 const BenefitsContent: FC = () => {
    const content: IBenefitsContent[] = benefitsData.content
    
    return(
        <div className={styles.list}>
            {content.map((item, key) => (
                <div className={styles.item} key={key}>
                    <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height}/>
                    <p className={styles.itemText}>
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
 }

export default BenefitsContent;