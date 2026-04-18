export function ModelCard({ name, type, color, stats }) {
  return (
    <div className="model-card" style={{ '--accent': color }}>
      <div className="card-header">
        <span className="card-type">{type}</span>
        <h2 className="card-title">{name}</h2>
      </div>
      
      <div className="card-stats">
        <div className="stat-row">
          <span className="stat-label">STRENGTH</span>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${stats.strength}%` }}></div>
          </div>
          <span className="stat-value">{stats.strength}</span>
        </div>
        
        <div className="stat-row">
          <span className="stat-label">POWER</span>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${stats.power}%` }}></div>
          </div>
          <span className="stat-value">{stats.power}</span>
        </div>
        
        <div className="stat-row">
          <span className="stat-label">WEAKNESS</span>
          <div className="stat-bar">
            <div className="stat-fill weakness" style={{ width: `${stats.weakness}%` }}></div>
          </div>
          <span className="stat-value">{stats.weakness}</span>
        </div>
      </div>
      
      <div className="card-ability">
        <span className="ability-label">ABILITY</span>
        <p className="ability-text">{stats.ability}</p>
      </div>
    </div>
  )
}

export default ModelCard