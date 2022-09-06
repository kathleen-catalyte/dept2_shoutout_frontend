import useSWR from 'swr'
import fetch from '../../lib/fetch'

const ShoutoutsTemp = () => {
  const { data, error } = useSWR('/api/shoutouts/latest', fetch)

  if (error) return <p>Something went wrong.</p>
  if (!data) return <p>Hang tight...</p>
  console.log(data);
  return <div>Check your console for latest shoutouts</div>
}

export default ShoutoutsTemp
