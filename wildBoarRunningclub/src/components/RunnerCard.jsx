import styles from './RunnerCard.module.css'

export function RunnerCard({ position, runner }) {
    return (
        <article className={styles.runnerCard}>
            <h3>{position}</h3>
            <h2>{runner.name}</h2>
            <p> {runner.marca}</p>
        </article>
    )
}
