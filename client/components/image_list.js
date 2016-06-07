/**
 * Created by Scott on 6/5/2016.
 */
//Image list component
//Import React
import React from 'react';
//Import ImageDetail component
import ImageDetail from './image_detail';

const IMAGES = [
    { title: 'Pen', link: 'http://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
    { title: 'Mug', link: 'http://dummyimage.com/600x400' }
];

//Create the component
const ImageList = () => {
    const RenderedImages = IMAGES.map(function(image) {
        return <ImageDetail image={image} />
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};

//Export the component
export default ImageList;