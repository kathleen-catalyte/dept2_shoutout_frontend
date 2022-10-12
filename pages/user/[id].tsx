import { useUser } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import UserProfile from '@/components/user-profile'
import styles from '@/styles/Home.module.css'


const Home: NextPage = () => {
    const { user, error, isLoading } = useUser()
    { isLoading && <p>Loading login info...</p> }
    { error && <div>{error.toString()}</div> }
    const router = useRouter()
    const { id } = router.query

    if (error) return <p>Something went wrong.</p>

    return (
        <div className={styles.container}>

            {user ? (
                <>
                    <UserProfile id={id} />
                </>) : (
                <>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/api/auth/login">Login</a>
                </>
            )}
        </div>
    )
}

export default Home