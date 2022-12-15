import './Card.css'

function Card() {
  return (
    <>
      <div className="card card-width">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#/" className="btn btn-success">
            Go FuFuFun
          </a>
        </div>
      </div>
    </>
  )
}

export default Card
