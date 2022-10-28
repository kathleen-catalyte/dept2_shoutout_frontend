import Link from 'next/link';
import React from 'react';
import { Element, Shoutout } from 'ts/interfaces';

import ProfilePicture from '../profile-picture';
import styles from './Shoutouts.module.css';

const ShoutoutComp = (props: { shoutout: Shoutout }, key: number) => {
  const { shoutout } = props;
  return (
    <div>
      {' '}
      <div data-testid='custom-element' className={styles.shoutcontainer}>
        <div className={styles.avatars}>
          {shoutout.recipients?.map((recipient) => (
            <span key={recipient.employeeId} className={styles.avatar}>
              <ProfilePicture
                picture={recipient.image72 ? recipient.image72 : ''}
              />
            </span>
          ))}
        </div>
        <p className={styles.text}>
          {shoutout.elements?.map(
            (x: Element, idx: React.Key | null | undefined) => {
              return x.employeeId ? (
                <Link key={idx} href={`/user/${x.employeeId}`}>
                  <a className={styles.linkToProfile}>{` @${x.text} `}</a>
                </Link>
              ) : (
                <a key={idx}>{` ${x.text}`}</a>
              );
            }
          )}
        </p>
        <Link href={`/user/${shoutout.author.employeeId}`}>
          <a className={styles.userName}>{`@${shoutout.author?.name}`}</a>
        </Link>
        <span className={styles.subtext}>{`#${shoutout.channel?.id}`}</span>
      </div>
    </div>
  );
};

export default ShoutoutComp;
