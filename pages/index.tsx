import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import ShoutoutsTemp from '../components/shoutouts-temp'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()
  {isLoading && <p>Loading login info...</p>}
  {error && <div>{error.toString()}</div>}

  return (
    <div className={styles.container}>
      <h1>Shoutout!</h1>

      {user ? (
        <>
          <p>{user.email}</p>

          <ShoutoutsTemp />

          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/logout">Logout</a>
        </> ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/api/auth/login">Login</a>
        </>
      )}
    </div>
  )
}

export default Home