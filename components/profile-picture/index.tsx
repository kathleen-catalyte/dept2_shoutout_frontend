import Image from 'next/image';
import React from 'react';

const ProfilePicture = ({ picture }: { picture: string }) => {
  return (
    <Image
      src={picture}
      layout='fill'
      style={{ borderRadius: '50%' }}
      alt='IMG2'
      quality={100}
    />
  );
};

export default ProfilePicture;
