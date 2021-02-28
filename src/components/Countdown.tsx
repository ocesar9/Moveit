
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const {
        minutes,
        seconds,
        hasfinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
    const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")



    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>

                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasfinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Cilco encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar
                            </button>

                        ) : (

                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    Iniciar ciclo
                                </button>

                            )}
                    </>
                )}






        </div>

    )
}