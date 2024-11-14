import React from 'react';
import '../../src/styles.css';

const PhotoGallery = () => {
    const photos = [
        // Add your photo URLs here
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Photo Gallery</h2>
            <div className="gallery">
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Gallery item ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
