import { Shoutout } from "src/ts/interfaces/Shoutout";
import useSWR from "swr";

import fetch from "@/lib/fetch";

const Shoutouts = () => {
  const { data, error } = useSWR("/api/shoutouts/latest", fetch);
  const shoutOutData = data as unknown as Shoutout[];

  if (error) return <p>Something went wrong.</p>;
  if (!data) return <p>Hang tight...</p>;
  console.log(shoutOutData);
  return (
    <div className="">
      {shoutOutData.map(function (d, idx) {
        return (
          <div key={idx}>
            <p>{d.text}</p>
            <p>{d.author.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Shoutouts;
