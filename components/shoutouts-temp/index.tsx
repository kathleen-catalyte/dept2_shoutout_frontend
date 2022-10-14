import { Shoutout } from "src/ts/interfaces/shoutout";
import useSWR from "swr";

import fetch from "@/lib/fetch";

const ShoutoutsTemp = () => {
  const { data, error } = useSWR("/api/shoutouts/latest", fetch);
  const shoutOutData = data as unknown as Shoutout[];

  if (error) return <p>Something went wrong.</p>;
  if (!data) return <p>Hang tight...</p>;
  console.log(shoutOutData);
  return <div>Check your console for recent shoutouts</div>;
};

export default ShoutoutsTemp;
