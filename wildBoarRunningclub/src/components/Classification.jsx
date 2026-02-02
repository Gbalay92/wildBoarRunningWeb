export function Classification({ runners}) {
    return (
        <>
            <h2>Clasificación</h2>
            <div className="classification-container">
                {
                runners.length === 0 && <p>No se encontraron corredores.</p>
                }
                {runners.map(runner => (
                    <RunnerCard key={runner.id} runner={runner} />
                ))}
            </div>
            
        </>
    )
}