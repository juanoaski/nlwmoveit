import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, challengeFinished, challengeStarted } = useContext(ChallengesContext)


    return (
        <div className={styles.challengeBoxContainer}>
            { challengeStarted ? (
                <div className={styles.challengeNotFinished}>
                    <strong>Finalize um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                    Complete-os e ganhe experiência e avance de leve.
                </p>
                </div>

            ) : (
                    <>
                        { challengeFinished ? (
                            <div className={styles.challengeActive}>
                                <header>Ganhe {activeChallenge.amount} xp</header>
                                <main>
                                    <img src={`icons/${activeChallenge.type}.svg`} />
                                    <strong>Novo desafio</strong>
                                    <p>{activeChallenge.description}</p>
                                </main>
                                <footer>
                                    <button
                                        type='button'
                                        className={styles.challengeFailedButton}
                                    >
                                        Falhei
                            </button>

                                    <button
                                        type='button'
                                        className={styles.challengeSucceededButton}
                                    >
                                        Completei
                            </button>
                                </footer>
                            </div>

                        ) : (

                                <div className={styles.challengeNotActive}>
                                    <strong>Inicie um ciclo para receber desafios</strong>
                                    <p>
                                        <img src="icons/level-up.svg" alt="Level Up" />
                                    Avance de level completando os desafios.
                                </p>
                                </div>
                            )}
                    </>

                )}
        </div>
    )
}