import { RunnerCard } from "./RunnerCard"
import styles from './Classification.module.css'

export function Classification({ runners}) {
    
    return (
        <>
            <h2 className={styles.classificationTitle}>Clasificación</h2>
            <div className={styles.classificationList}>
                {
                runners.length === 0 && <p>No se encontraron corredores.</p>
                }
                {runners.map(runner => {
                    const position = runners.indexOf(runner) + 1;
                    return <RunnerCard position={position} key={runner.id} runner={runner} />
                })}
            </div>  
        </>
    )
}