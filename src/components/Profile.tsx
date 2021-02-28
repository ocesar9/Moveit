import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="/fitness.svg" alt="Usuário" />
            <div>
                <strong>Expêriençia de desafios</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>

        </div>


    )
}