import { RunnerCard } from "./RunnerCard"
import styles from './Classification.module.css'
import { useList } from "../hooks/useList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Classification() {
    
      const { list: runnersList, setList: setRunnersList, distance, setDistance } = useList([]);
      const { urlDistance } = useParams();
    
      useEffect(() => {
        setDistance(urlDistance);
        const orderByTime = (a, b) => {
          const aSegundos = a.marca
            .split(":")
            .reduce((acc, val) => acc * 60 + Number(val), 0);
    
          const bSegundos = b.marca
            .split(":")
            .reduce((acc, val) => acc * 60 + Number(val), 0);
    
          return aSegundos - bSegundos;
        };
    
        const ordered = [...runnersList].sort(orderByTime);
        setRunnersList(ordered);
      }, [urlDistance]);
    
    
    return (
        <>
            <h2 className={styles.classificationTitle}>Clasificación</h2>
            <div className={styles.classificationList}>
                {
                runnersList.length === 0 && <p>No se encontraron corredores.</p>
                }
                {runnersList.map(runner => {
                    const position = runnersList.indexOf(runner) + 1;
                    return <RunnerCard position={position} key={runner.name} runner={runner} />
                })}
            </div>  
        </>
    )
}