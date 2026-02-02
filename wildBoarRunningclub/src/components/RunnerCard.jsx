export function RunnerCard({ runner }) {
    return (
        <article className="runner-card">
            <h2>{runner.name}</h2>
            <p>Tiempo: {runner.time}</p>
        </article>
    )
}
