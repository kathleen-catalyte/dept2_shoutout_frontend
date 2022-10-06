import { Element, Shoutout } from "src/ts/interfaces/shoutout";
import useSWR from "swr";

import fetch from "@/lib/fetch";
import styles from "@/styles/Shoutouts.module.css";

const Shoutouts = () => {
  const { data, error } = useSWR("/api/shoutouts/latest", fetch);
  const shoutOutData = data as unknown as Shoutout[];

  if (error) return <p>Something went wrong.</p>;
  if (!data) return <p>Hang tight...</p>;
  console.log(shoutOutData);
  return (
    <div>
      {shoutOutData.map(function (d, idx) {
        return (
          <div className={styles.shoutcontainer} key={idx}>
            <p className={styles.text}>
              {d.elements.map((x, idx) => {
                return <a key={idx}>{` ${ x.text }`}</a>;
              })}
            </p>
            <p className={styles.userName}>{`@${d.author.name}`}</p>
            <p className={styles.subtext}>{`#${d.channel.id}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shoutouts;
