import Movie from './Movie'

function Board() {
  return (
    <div className="board">
        <Movie image="https://image.tmdb.org/t/p/original/mKp4euM5Cv3m2U1Vmby3OGwcD5y.jpg" title="Ballerina" releaseDate="6 June" trailerLink="https://youtube.com/watch?v=0FSwsrFpkbw"/>
        <Movie image="https://image.tmdb.org/t/p/original/3lwlJL8aW6Wor9tKvME8VoMnBkn.jpg" title="How to Train Your Dragon" releaseDate="13 June" trailerLink="https://youtube.com/watch?v=22w7z_lT6YM"/>
        <Movie image="https://image.tmdb.org/t/p/original/hVKHzr4GwSw0FepqhqQ0DDiYHNY.jpg" title="28 Years Later" releaseDate="19 June" trailerLink="https://youtube.com/watch?v=mcvLKldPM08"/>
        <Movie image="https://image.tmdb.org/t/p/original/iGyqJwqAHQjRrChcOCo6Nqgkb0B.jpg" title="F1 The Movie" releaseDate="27 June" trailerLink="https://youtube.com/watch?v=8yh9BPUBbbQ"/>
        <Movie image="https://image.tmdb.org/t/p/original/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg" title="Jurassic World Rebirth" releaseDate="2 July" trailerLink="https://youtube.com/watch?v=jan5CFWs9ic"/>
        <Movie image="https://image.tmdb.org/t/p/original/qjVMsjV7UmSpi1aHA9Wtl1v8cxr.jpg" title="The Old Guard 2" releaseDate="2 July" trailerLink="https://youtube.com/watch?v=0FSwsrFpkbw"/>
        <Movie image="https://image.tmdb.org/t/p/original/wPLysNDLffQLOVebZQCbXJEv6E6.jpg" title="Superman" releaseDate="6 June" trailerLink="https://youtube.com/watch?v=Ox8ZLF6cGM0"/>
        <Movie image="https://image.tmdb.org/t/p/original/x26MtUlwtWD26d0G0FXcppxCJio.jpg" title="The Fantastic Four: First Steps" releaseDate="25 July" trailerLink="https://youtube.com/watch?v=pAsmrKyMqaA"/>
        <Movie image="https://image.tmdb.org/t/p/original/rqgqHT7S6VTXPSkbNFb2kihc3tL.jpg" title="The Bad Guys 2" releaseDate="1 August" trailerLink="https://youtube.com/watch?v=TY1lWh20VSw"/>
        <Movie image="https://image.tmdb.org/t/p/original/iyxwxDZCpIm0vIORaHpmgJv2BGF.jpg" title="Nobody 2" releaseDate="15 August" trailerLink="https://youtube.com/watch?v=-5X2pt95cIo"/>
        <Movie image="https://image.tmdb.org/t/p/original/chpWmskl3aKm1aTZqUHRCtviwPy.jpg" title="Tron Ares" releaseDate="10 October" trailerLink="https://youtube.com/watch?v=9KVG_X_7Naw"/>
        <Movie image="https://image.tmdb.org/t/p/original/oD3Eey4e4Z259XLm3eD3WGcoJAh.jpg" title="Now You See Me: Now You Don't" releaseDate="14 November" trailerLink="https://youtube.com/watch?v=-E3lMRx7HRQ"/>
        <Movie image="https://image.tmdb.org/t/p/original/vAtyR5471YBzBb2FrCiCTrxwv3E.jpg" title="Zootopia 2" releaseDate="6 June" trailerLink="https://youtube.com/watch?v=xo4rkcC7kFc"/>
    </div>
  )
}

export default Board

{/* <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.releaseDate}</p>
      <a href={props.trailerLink} className="button"></a> */}