function Movie(props) {
  return (
    <div className="movie">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <a style={{ fontWeight: 'bold' }}>{props.releaseDate}</a>
      <a href={props.trailerLink} className="button">Watch Trailer</a>
    </div>
  )
}

export default Movie