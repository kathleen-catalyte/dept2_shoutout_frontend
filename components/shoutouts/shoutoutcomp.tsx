import Link from "next/link";
import React from "react";
<<<<<<< HEAD
import { Element, Shoutout } from "src/ts/interfaces/shoutout";
=======
import { Shoutout } from "ts/interfaces";
>>>>>>> ca2d3e76551b2bd8ab6213fcdda476535210bf09

import styles from "./Shoutouts.module.css";

const ShoutoutComp = (props: { shoutout: Shoutout }, key: number) => {
  const { shoutout } = props;
  return (
    <div className={styles.shoutcontainer}>
      <p className={styles.text}>
        {shoutout.elements?.map(
          (x: Element, idx: React.Key | null | undefined) => {
            return (
              x.employeeId ? (<Link key={idx} href={`/user/${(x.employeeId)}`}><a className={styles.linkToProfile}>{` @${x.text} `}</a></Link>) : (<a key={idx}>{` ${x.text}`}</a>)
            );
          }
        )}
      </p>
      <Link href={`/user/${(shoutout.author.employeeId)}`}>
        <a className={styles.userName}>{`@${shoutout.author?.name}`}</a></Link>
      <span className={styles.subtext}>{`#${shoutout.channel?.id}`}</span>
    </div>
  );
};

export default ShoutoutComp;
