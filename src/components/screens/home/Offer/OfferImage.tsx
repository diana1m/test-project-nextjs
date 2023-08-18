import { FC } from "react";
import Image from "next/image";

import data from '@/data/offer.json'
import IImage from "@/shared/interfaces/IImage";

const OfferImage: FC = () => {
    const {src, alt, height, width}: IImage= data.image;

    return(
        // <Image />
        <img src={src} alt={alt} width={width} height={height}/> 
    )
}

export default OfferImage;