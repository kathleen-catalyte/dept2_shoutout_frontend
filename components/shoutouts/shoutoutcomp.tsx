import React from "react";
import { Shoutout } from "ts/interfaces";

import styles from "./Shoutouts.module.css";

const ShoutoutComp = (props: { shoutout: Shoutout }, key: number) => {
  const { shoutout } = props;
  return (
    <div className={styles.shoutcontainer}>
      <p className={styles.text}>
        {shoutout.elements?.map(
          (x: { text: any }, idx: React.Key | null | undefined) => {
            return <a key={idx}>{` ${x.text}`}</a>;
          }
        )}
      </p>
      <span className={styles.userName}>{`@${shoutout.author?.name}`}</span>
      <span className={styles.subtext}>{`#${shoutout.channel?.id}`}</span>
    </div>
  );
};

export default ShoutoutComp;
