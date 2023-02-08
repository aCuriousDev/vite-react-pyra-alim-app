import './Cards.css'

export default function Cards() {
  return (
    <div id="board" className="board unselectable">
      <div>
        <img className="img-alim" src="" draggable="false"/>
        <h2 className="card-title drop-shadow">Lorem Ipsum</h2>
        <a className="details-trigger" href="#">détails</a>
      </div>
    </div>
  )
}