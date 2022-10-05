import { Shoutout } from "src/ts/interfaces/Shoutout";
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
            <p className={styles.text}>{d.text}</p>
            <p className={styles.userName}>{d.author.name}</p>
                <p className={styles.subtext}>{`#${d.channel.id}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shoutouts;
