import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoKey from '../VideoKey/VideoKey';

function MoviePage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);

  // 🎬 Fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  // 🎥 Fetch trailer
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=61ba9839bf7e2d04c438b30a39c4e3ef`)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        if (trailer) {
          setVideoKey(trailer.key);
        }
      });
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <VideoKey
        videokey={videoKey}
        setVideoKeyasProp={goBack}
        moviesTitle={movie}
      />
    </div>
  );
}

export default MoviePage;