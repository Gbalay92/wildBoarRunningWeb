import { useEffect, useState } from 'react'
import Papa from 'papaparse'

const distancesGid = {'42k': 918727064
    , '21k': 0
    , '10k': 1837637253
    }

export function useList(initialList) {
    const [distance, setDistance] = useState('42k')
    const [list, setList] = useState(initialList)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true);
        setList([]);
        fetch(`https://docs.google.com/spreadsheets/d/1ja42Jlq3g-yBurBm6KUWmZ6Y9c2mJugOu7Q-Llxnks4/export?format=csv&gid=${distancesGid[distance]}`)
            .then(response => response.text())
            .then(csvData => {
                Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => {
                const data = result.data.map(row => ({
                    name: row["Nombre Jabato"],
                    marca: row["Marca"]
                }));
                setList(data);
                }
                }); 
            })
            .finally(() => setLoading(false));
    }, [distance])
    

    return { list, setList, distance, setDistance, loading }
}
