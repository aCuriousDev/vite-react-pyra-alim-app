import './Cards.css';

export default function Cards() {
  
  return (
    <div id="board" className="board unselectable">
      <div className="card" id="card">
          <img
            className="img-alim"
            src="src/assets/Picto1.png"
            draggable="false"
          />
          <h2 className="card-title drop-shadow">Pain blanc</h2>
          <a className="details-trigger" href="#">
            détails
          </a>
      </div>
    </div>
  );
}
