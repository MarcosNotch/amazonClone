'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative">
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel autoPlay infiniteLoop showIndicators={false} showStatus={false} showThumbs={false} interval={5000}>
                <div>
                    <img src="https://links.papareact.com/gi1" alt='nombre' loading='lazy' />
                </div>
                <div>
                    <img src="https://links.papareact.com/6ff" alt='nombre' loading='lazy' />
                </div>
                <div>
                    <img src="https://links.papareact.com/7ma" alt='nombre' loading='lazy' />
                </div>
            </Carousel>
          
        </div>
    )
}