import Image from "next/image";
import React from 'react'

import styles from './picture.module.css'

const ProfilePicture = ({ picture }: { picture: string }) => {
    return (
        <div>
            <Image src={picture} className={styles.makeImageCircular} height='100%' width='100%' object-fit='contain' alt='IMG2' quality={100} />
        </div>
    )
}

export default ProfilePicture