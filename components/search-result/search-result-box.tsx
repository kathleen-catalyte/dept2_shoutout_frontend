import defaultAvatar from 'images/defaultAvatar.webp';
import React from 'react';
import { BasicProfile } from 'ts/interfaces';

import ProfilePicture from '../profile-picture';
import SeeShoutouts from '../see-shoutouts/see-shoutouts';
import styles from './SearchResultBox.module.css';

const SearchResultBox = (userData: { data: BasicProfile }) => {
  const { data } = userData;

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <ProfilePicture picture={data.image72 ? data.image72 : defaultAvatar} />
      </div>
      <a className={styles.name}>@{data?.name}</a>
      <div className={styles.btn}>
        <SeeShoutouts employeeId={data.employeeId} />
      </div>
    </div>
  );
};

export default SearchResultBox;
