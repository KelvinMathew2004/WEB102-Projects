function Movie(props) {
  return (
    <div className="movie">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.releaseDate}</p>
      <a href={props.trailerLink} className="button">Watch Trailer</a>
    </div>
  )
}

export default Movie