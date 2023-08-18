import { FC } from 'react'

import benefitsData from '@/data/benefits.json'
import BenefitsHead from './BenefitsHead'
import BenefitsContent from './BenefitsContent'
import styles from './Benefits.module.scss'

const Benefits: FC = () => {
    return(
        <section id={benefitsData.sectionId} className={styles.wrapper}>
            <div className='container'>
                    <BenefitsHead/>
                    <BenefitsContent/>
            </div>
        </section>
    )
}

export default Benefits