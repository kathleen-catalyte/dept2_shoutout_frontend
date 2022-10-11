import { MapIcon, UsersIcon } from '@heroicons/react/24/outline'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Router from 'next/router';
import { useState } from 'react';
import { FullProfile } from 'src/interfaces/profile'
import { Shoutout } from 'src/interfaces/shoutout';
import useSWR from 'swr'

import fetch from '@/lib/fetch'

import ProfilePicture from '../profile-picture'
import styles from './profile.module.css'


const UserProfile = (id: any) => {
    const { data, error } = useSWR(`/api/profile/${id}`, fetch)
    const profileData = (data as unknown) as FullProfile
    const [tabIndex, setTabIndex] = useState(0);
    console.log(profileData)

    const handleTabChange = (event: any, newTabIndex: number) => {
        setTabIndex(newTabIndex);
    };
    const BackToHome = () => {
        Router.push('/');
    }
    const given = (shoutoutsGiven: Shoutout[]) => {
        const length = shoutoutsGiven.length
        return ('Given' + '(' + length + ')')
    }
    const recieved = (shoutoutsReceived: Shoutout[]) => {
        const length = shoutoutsReceived.length
        return ('Recieved' + '(' + length + ')')
    }

    if (error) return <p>Something went wrong.</p>
    if (!data) return <p>Hang tight...</p>
    return (
        <div>
            <div className={styles.profilePageContainer}>
                <span className={styles.backButton} onClick={BackToHome}>
                    <a className={styles.hoverbutton}>
                        <ArrowSmallLeftIcon className={styles.arrowIcon} />
                        <span className={styles.backToShoutOut}>Back to shoutouts</span>
                    </a>
                </span>
                <div className={styles.profilePicture}>

                    {profileData.image192 ?
                        <div className={styles.picture}>
                            <ProfilePicture picture={profileData.image192} /> </div> : null}

                    <a className={styles.name}>@{profileData.name}</a>
                    <div style={{ 'paddingTop': '3%' }}> <UsersIcon style={{ "height": '20px', 'paddingLeft': '2%', 'paddingRight': '.3%' }} /><a>{profileData.team}</a><MapIcon style={{ "height": '20px', 'paddingLeft': '2%', 'paddingRight': '.3%' }} /><a>{profileData.country}</a></div>

                </div>
                <div className={styles.shoutoutsContainer}>
                    <Box>
                        <Tabs value={tabIndex} onChange={handleTabChange} sx={{
                            '& .MuiTabs-indicator': { backgroundColor: "#9873FF" },
                            '& .MuiTab-root': { color: "#808080" },
                            '& .Mui-selected': { color: "#FFFFFF" },
                            'borderBottom': '1px solid #6B6A6A',
                        }}>
                            <Tab label={profileData.shoutoutsReceived ? recieved(profileData.shoutoutsReceived) : 'Recieved(0)'} />
                            <Tab label={profileData.shoutoutsGiven ? given(profileData.shoutoutsGiven) : 'Given(0)'} />
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: 2 }} className={styles.shoutout}>
                        {tabIndex === 0 && (

                            profileData.shoutoutsReceived.map((shoutout, idx) => {
                                //replace this with the shoutout container
                                return (
                                    <p key={idx}>
                                        {shoutout.text}
                                    </p>)
                            })

                        )}
                        {tabIndex === 1 && (
                            profileData.shoutoutsGiven.map((shoutout, idx) => {
                                //replace this with the shoutout container
                                return (
                                    <p key={idx}>
                                        {shoutout.text}
                                    </p>)
                            })
                        )}

                    </Box>
                </div>
            </div>
        </div>
    )
}

export default UserProfile