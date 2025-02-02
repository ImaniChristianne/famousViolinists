import React from 'react';
import { useParams } from 'react-router-dom';
import { artists } from '../data/artists';

const ArtistDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Check if id is undefined
  if (!id) {
    return <div>Artist not found</div>;
  }

  const artistIndex = parseInt(id, 10);

  // Ensure artist is found and defined
  const artist = artists[artistIndex];
  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      <p>{artist.facts}</p>
      <p>Famous Piece: {artist.famousPiece}</p>
      <img src={artist.image} alt={artist.name} />
    </div>
  );
};

export default ArtistDetails;
