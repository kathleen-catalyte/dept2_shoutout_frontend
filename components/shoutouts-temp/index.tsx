import useSWR from 'swr'

const fetcher = (...args: any) => fetch(...args).then((res) => res.json())

const ShoutoutsTemp = () => {
  const { data, error } = useSWR('/api/shoutouts/latest', fetcher)

  if (error) return <p>Something went wrong.</p>
  if (!data) return <p>Hang tight...</p>
  console.log(data);
  return <div>Check your console for latest shoutouts</div>
}

export default ShoutoutsTemp