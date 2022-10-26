import { Shoutout } from 'src/interfaces/shoutout';
import useSWR from 'swr';

import fetch from '@/lib/fetch';

import ShoutoutComp from './shoutout-comp';

const Shoutouts = () => {
  const { data, error } = useSWR('/api/shoutouts/latest', fetch);
  const shoutOutData = data as unknown as Shoutout[];

  if (error) return <p>Something went wrong.</p>;
  if (!data) return <p>Hang tight...</p>;

  return (
    <div>
      {shoutOutData.map(function (d, idx) {
        return <ShoutoutComp shoutout={d} key={idx} />;
      })}
    </div>
  );
};

export default Shoutouts;
