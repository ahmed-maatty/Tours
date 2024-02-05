import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import galleryImagesArr from "./galleryimgs" ;

const GalleryImagesMasnory = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350 : 1 , 768 :3 , 992 : 4} }>
            <Masonry gutter='1rem'>
                {
                    galleryImagesArr.map((item , index)=>(
                        <img 
                            src= {item}
                            key={index}
                            className='masnory-imgs'
                            alt="gallery-img"
                            style={{'width':'100%' , 'display' : 'block' , 'borderRadius' : '10px'}}
                        />
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default GalleryImagesMasnory ;