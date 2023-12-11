import React from 'react';
import Image from 'next/image';

type Photo = {
  src: string;
  desc: string;
  alt: string;
};

const photos: Photo[] = [
  { src: '/photos/wabdoteth.jpg', desc: 'wabdoteth', alt: 'wabdoteth'},
  { src: '/photos/notthreadguy.jpg', desc: 'notthreadguy', alt: 'notthreadguy'},
  { src: '/photos/wabdoteth.jpg', desc: 'wabdoteth', alt: 'wabdoteth'},
  { src: '/photos/wabdoteth.jpg', desc: 'wabdoteth', alt: 'wabdoteth'},
  { src: '/photos/notthreadguy.jpg', desc: 'notthreadguy', alt: 'notthreadguy'},
  { src: '/photos/wabdoteth.jpg', desc: 'wabdoteth', alt: 'wabdoteth'},
  { src: '/photos/notthreadguy.jpg', desc: 'notthreadguy', alt: 'notthreadguy'},  
  { src: '/photos/wabdoteth.jpg', desc: 'wabdoteth', alt: 'wabdoteth'},
  { src: '/photos/notthreadguy.jpg', desc: 'notthreadguy', alt: 'notthreadguy'},
];

const shuffleArray = (array: Photo[]): Photo[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const PhotoGallery: React.FC = () => {
  const shuffledImages = shuffleArray(photos);

  return (
    <div className="container mx-auto p-4">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {shuffledImages.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <Image
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
